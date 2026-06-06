/* ============================================================
   ADMIN PANEL — admin.js
   Mukammal va xatosiz admin panel.
   Barcha funksiyalar: Analitika, Katalog CRUD, Firebase Sync
   ============================================================ */

// ==================== 1. FIREBASE CONFIG ====================
var firebaseConfig = {
  apiKey: "AIzaSyCwrnN3ulOW8aNLBQdXVT5u99vewAPk0JA",
  authDomain: "protexnotrade-analitika.firebaseapp.com",
  projectId: "protexnotrade-analitika",
  storageBucket: "protexnotrade-analitika.firebasestorage.app",
  messagingSenderId: "30112835334",
  appId: "1:30112835334:web:5aa151d50b174214da2087",
  measurementId: "G-4RNRP8PFLP"
};

// Firebase Initialize
if (typeof firebase !== 'undefined') {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  window.db = firebase.firestore();
  console.log('[Admin] Firebase ulandi ✓');
} else {
  console.error('[Admin] Firebase SDK topilmadi!');
}

// ==================== 2. GLOBAL O'ZGARUVCHILAR ====================
var products = {};
var editModeId = null;
var currentImages = [];
var visitorStats = {};
var weeklyChart = null;

// ==================== 3. HELPER FUNKSIYALAR ====================
function $(id) {
  return document.getElementById(id);
}

function getTodayString() {
  var d = new Date();
  var y = d.getFullYear();
  var m = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + day;
}

function formatDate(date) {
  var d = String(date.getDate()).padStart(2, '0');
  var m = String(date.getMonth() + 1).padStart(2, '0');
  return d + '.' + m;
}

function showToast(message, type) {
  var toast = $('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.className = 'toast ' + (type || 'info') + ' show';
  setTimeout(function () {
    toast.className = 'toast';
  }, 3500);
}

// ==================== 4. INIT — Sahifa yuklanganda ====================
window.addEventListener('load', function () {
  console.log('[Admin] Ishga tushirilmoqda...');

  // Chart yaratish
  createChart();

  // Firebase tekshirish
  checkFirebase();

  // Ma'lumotlarni yuklash
  loadVisitorStats();
  loadProducts();

  // Event listenerlar
  setupNavigation();
  setupCatalogEvents();
  setupModalEvents();
  setupTestButton();
  setupRefreshButton();
  setupSettingsEvents();

  console.log('[Admin] Barcha funksiyalar tayyor ✓');
});

// ==================== 5. FIREBASE STATUS ====================
function checkFirebase() {
  var statusEl = $('firebaseStatus');
  if (!statusEl) return;

  if (typeof firebase === 'undefined' || !window.db) {
    statusEl.textContent = '✕ Firebase ulanmagan!';
    statusEl.className = 'firebase-status disconnected';
    return;
  }

  window.db.collection('daily_visits').limit(1).get()
    .then(function () {
      statusEl.textContent = '✓ Firebase ulangan va ishlayapti';
      statusEl.className = 'firebase-status connected';
    })
    .catch(function (err) {
      statusEl.textContent = '✕ Xatolik: ' + err.message;
      statusEl.className = 'firebase-status disconnected';
    });
}

// ==================== 6. VISITOR STATS (ANALITIKA) ====================
function loadVisitorStats() {
  var elTotal = $('statTotalVisits');
  var elToday = $('statTodayVisits');

  if (!window.db) {
    if (elTotal) elTotal.textContent = 'Firebase yo\'q';
    if (elToday) elToday.textContent = 'Firebase yo\'q';
    return;
  }

  window.db.collection('daily_visits').get()
    .then(function (snapshot) {
      visitorStats = {};
      var totalVisits = 0;

      snapshot.forEach(function (doc) {
        var data = doc.data();
        visitorStats[doc.id] = data;
        totalVisits += (data.kirishlar || 0);
      });

      var todayStr = getTodayString();
      var todayVisits = 0;
      if (visitorStats[todayStr]) {
        todayVisits = visitorStats[todayStr].kirishlar || 0;
      }

      // UI yangilash
      if (elTotal) elTotal.textContent = totalVisits.toLocaleString('ru-RU');
      if (elToday) elToday.textContent = todayVisits.toLocaleString('ru-RU');

      console.log('[Admin] Analitika: Jami=' + totalVisits + ', Bugun=' + todayVisits);

      // Chartni yangilash
      updateChart();
    })
    .catch(function (err) {
      console.error('[Admin] Tashriflar xatosi:', err);
      if (elTotal) elTotal.textContent = 'Xatolik';
      if (elToday) elToday.textContent = 'Xatolik';
    });
}

// ==================== 7. CHART ====================
function createChart() {
  var canvas = $('weeklyChart');
  if (!canvas) return;

  weeklyChart = new Chart(canvas, {
    type: 'line',
    data: {
      labels: [],
      datasets: [
        {
          label: 'Kirishlar',
          data: [],
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.08)',
          borderWidth: 2.5,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#2563eb',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7
        },
        {
          label: 'Chiqishlar',
          data: [],
          borderColor: '#93c5fd',
          backgroundColor: 'transparent',
          borderWidth: 2,
          tension: 0.4,
          pointBackgroundColor: '#93c5fd',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1e293b',
          titleFont: { size: 13 },
          bodyFont: { size: 12 },
          padding: 12,
          cornerRadius: 8
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false },
          ticks: { font: { size: 11 }, color: '#94a3b8' }
        },
        x: {
          grid: { display: false },
          ticks: { font: { size: 11 }, color: '#94a3b8' }
        }
      }
    }
  });
}

function updateChart() {
  if (!weeklyChart) return;

  var labels = [];
  var kirishData = [];
  var chiqishData = [];
  var kunlar = ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan'];

  for (var i = 6; i >= 0; i--) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    var dateStr = d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');

    labels.push(kunlar[d.getDay()] + ' ' + formatDate(d));

    if (visitorStats[dateStr]) {
      kirishData.push(visitorStats[dateStr].kirishlar || 0);
      chiqishData.push(visitorStats[dateStr].chiqishlar || 0);
    } else {
      kirishData.push(0);
      chiqishData.push(0);
    }
  }

  weeklyChart.data.labels = labels;
  weeklyChart.data.datasets[0].data = kirishData;
  weeklyChart.data.datasets[1].data = chiqishData;
  weeklyChart.update();
}

// ==================== 8. TEST BUTTON ====================
function setupTestButton() {
  var btn = $('btnTestIncrement');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var resultEl = $('testResult');
    if (!window.db) {
      if (resultEl) {
        resultEl.textContent = '✕ Firebase ulanmagan!';
        resultEl.className = 'test-result error';
      }
      return;
    }

    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yuborilmoqda...';

    var todayStr = getTodayString();
    window.db.collection('daily_visits').doc(todayStr).set({
      kirishlar: firebase.firestore.FieldValue.increment(1)
    }, { merge: true })
      .then(function () {
        if (resultEl) {
          resultEl.textContent = '✓ Muvaffaqiyat! +1 qo\'shildi';
          resultEl.className = 'test-result success';
        }
        showToast('+1 tashrifchi qo\'shildi!', 'success');
        loadVisitorStats();
        checkFirebase();
      })
      .catch(function (err) {
        if (resultEl) {
          resultEl.textContent = '✕ Xatolik: ' + err.message;
          resultEl.className = 'test-result error';
        }
        showToast('Xatolik: ' + err.message, 'error');
      })
      .finally(function () {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-plus"></i> +1 Tashrifchi Qo\'shish';
      });
  });
}

// ==================== 9. REFRESH BUTTON ====================
function setupRefreshButton() {
  var btn = $('btnRefreshAll');
  if (btn) {
    btn.addEventListener('click', function () {
      btn.classList.add('spinning');
      loadVisitorStats();
      loadProducts();
      checkFirebase();
      showToast('Ma\'lumotlar yangilanmoqda...', 'info');
      setTimeout(function () { btn.classList.remove('spinning'); }, 1500);
    });
  }

  var btnStats = $('btnRefreshStats');
  if (btnStats) {
    btnStats.addEventListener('click', function () {
      loadVisitorStats();
      showToast('Statistika yangilanmoqda...', 'info');
    });
  }
}

// ==================== 10. NAVIGATION ====================
function setupNavigation() {
  var items = document.querySelectorAll('.nav-item');
  var pages = document.querySelectorAll('.page');
  var heading = $('pageHeading');
  var subtitle = $('pageSubHeading');

  var titles = {
    dashboard: { h: 'Analitika', s: 'Sayt tashriflari va statistikasi' },
    catalog: { h: 'Katalog', s: 'Mahsulotlarni boshqarish' },
    settings: { h: 'Sayt Linklari', s: 'Aloqa va manzillarni tahrirlash' }
  };

  items.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var tab = item.getAttribute('data-tab');
      if (!tab) return;

      items.forEach(function (i) { i.classList.remove('active'); });
      item.classList.add('active');

      if (heading && titles[tab]) heading.textContent = titles[tab].h;
      if (subtitle && titles[tab]) subtitle.textContent = titles[tab].s;

      pages.forEach(function (p) { p.classList.remove('active'); });
      var target = $(tab);
      if (target) {
        target.classList.add('active');
        if (tab === 'catalog') renderCatalog();
        if (tab === 'dashboard') loadVisitorStats();
        if (tab === 'settings') loadSettings();
      }

      // Mobile: sidebarni yopish
      var sidebar = $('sidebar');
      var overlay = document.querySelector('.sidebar-overlay');
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('show');
    });
  });

  // Mobile menu toggle
  var menuToggle = $('menuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      var sidebar = $('sidebar');
      sidebar.classList.toggle('open');
      var overlay = document.querySelector('.sidebar-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', function () {
          sidebar.classList.remove('open');
          overlay.classList.remove('show');
        });
      }
      overlay.classList.toggle('show');
    });
  }
}

// ==================== 11. MAHSULOTLAR YUKLASH ====================
function loadProducts() {
  var tbody = $('catalogBody');

  if (!window.db) {
    if (tbody) tbody.innerHTML = '<tr><td colspan="5" class="empty-msg">Firebase ulanmagan</td></tr>';
    return;
  }

  if (tbody) tbody.innerHTML = '<tr><td colspan="5" class="empty-msg"><i class="fas fa-spinner fa-spin"></i> Yuklanmoqda...</td></tr>';

  window.db.collection('products').get()
    .then(function (snapshot) {
      products = {};
      snapshot.forEach(function (doc) {
        products[doc.id] = doc.data();
      });

      var count = Object.keys(products).length;
      console.log('[Admin] ' + count + ' ta mahsulot yuklandi ✓');

      // Agar katalog sahifasida bo'lsa, ko'rsatish
      var activeItem = document.querySelector('.nav-item.active');
      if (activeItem && activeItem.getAttribute('data-tab') === 'catalog') {
        try {
          renderCatalog();
        } catch (e) {
          console.error('[Admin] Katalog render xatosi:', e);
          if (tbody) tbody.innerHTML = '<tr><td colspan="5" class="empty-msg" style="color:#ef4444">Katalogni chizishda xatolik: ' + e.message + '</td></tr>';
        }
      }
    })
    .catch(function (err) {
      console.error('[Admin] Mahsulotlar xatosi:', err);
      if (tbody) tbody.innerHTML = '<tr><td colspan="5" class="empty-msg" style="color:#ef4444">Xatolik: ' + err.message + '</td></tr>';
    });
}

// ==================== 12. KATALOG RENDER ====================

// Saytdagi kategoriya tartibi (index.html dagi ketma-ketlik)
var CATEGORY_ORDER = [
  { key: 'refraction',        label: 'Refraktsiya' },
  { key: 'diagnostic',        label: 'Diagnostika' },
  { key: 'surgical',          label: 'Xirurgiya va IOL' },
  { key: 'lasers',            label: 'Oftalmologik lazerlar' },
  { key: 'lens-edger',        label: 'Linza ishlov berish' },
  { key: 'industrial-edger',  label: 'Sanoat stanok' },
  { key: 'peripheral',        label: 'Periferik qurilmalar' }
];

// Saytdagi mahsulot ketma-ketligi (index.html dan olingan)
var SITE_PRODUCT_ORDER = [
  // Refraktsiya
  'phantom', 'al-scan', 'opd-scan', 'ark-f', 'nt-1', 'rt-6100', 'handyref', 'ssc-370', 'lm-1800', 'pm-700',
  // Diagnostika
  'mirante', 'retina-scan-duo', 'mp-3', 'afc-330', 'sl-2000', 'keeler-z-slit-lamp', 'ksl-z5', 'sl-m6', 'sl-100', 'kj5x', 'yslxd-2er', 'yslxd-3er', 'opd-scan-3', 'cem-530', 'us-4000', 'us-500',
  // Xirurgiya
  'cube-alpha',
  // Lazerlar
  'gyc-500', 'yc-200-s-plus',
  // Linza ishlov berish
  'me-1', 'lexce-plus-trend8',
  // Sanoat stanok
  'mse-1', 'se-9090-supra', 'aes-2200', 'aes-1000',
  // Periferik
  'ice-1500', 'ce-9', 'lt-1200', 'lt-980'
];

var CATEGORY_COLORS = {
  'refraction':       '#2563eb',
  'diagnostic':       '#059669',
  'surgical':         '#dc2626',
  'lasers':           '#7c3aed',
  'lens-edger':       '#ea580c',
  'industrial-edger': '#0891b2',
  'peripheral':       '#64748b'
};

function renderCatalog(query) {
  var tbody = $('catalogBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  var keys = Object.keys(products);
  if (keys.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="empty-msg">Bazada mahsulot yo\'q. "Yangi Mahsulot" tugmasini bosing.</td></tr>';
    return;
  }

  // Mahsulotlarni kategoriya bo'yicha guruhlash
  var grouped = {};
  for (var i = 0; i < CATEGORY_ORDER.length; i++) {
    grouped[CATEGORY_ORDER[i].key] = [];
  }
  grouped['other'] = [];

  for (var j = 0; j < keys.length; j++) {
    var id = keys[j];
    var data = products[id];
    var cat = data.category || 'other';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(id);
  }

  // Har bir kategoriya ichida saytdagi tartibda sort qilish
  for (var catKey in grouped) {
    grouped[catKey].sort(function (a, b) {
      var idxA = SITE_PRODUCT_ORDER.indexOf(a);
      var idxB = SITE_PRODUCT_ORDER.indexOf(b);
      if (idxA === -1) idxA = 9999;
      if (idxB === -1) idxB = 9999;
      return idxA - idxB;
    });
  }

  var totalCount = 0;

  // Har bir kategoriyani chiqarish
  for (var c = 0; c < CATEGORY_ORDER.length; c++) {
    var catInfo = CATEGORY_ORDER[c];
    var items = grouped[catInfo.key];
    if (!items || items.length === 0) continue;

    // Qidiruv filtridan o'tganlarni hisoblash
    var filteredItems = [];
    for (var fi = 0; fi < items.length; fi++) {
      var fId = items[fi];
      var fData = products[fId];
      var fTitle = (fData.uz && fData.uz.title) ? fData.uz.title : 'Nomsiz';

      if (query) {
        var q = query.toLowerCase();
        if (fId.toLowerCase().indexOf(q) === -1 && fTitle.toLowerCase().indexOf(q) === -1) {
          continue;
        }
      }
      filteredItems.push(fId);
    }

    if (filteredItems.length === 0) continue;

    // Kategoriya sarlavhasi
    var catColor = CATEGORY_COLORS[catInfo.key] || '#64748b';
    var headerTr = document.createElement('tr');
    headerTr.className = 'catalog-category-header';
    headerTr.innerHTML = '<td colspan="5" style="background: ' + catColor + '10; padding: 10px 16px; border-left: 4px solid ' + catColor + ';">' +
      '<strong style="color: ' + catColor + '; font-size: 14px;">' +
      '<i class="fas fa-folder" style="margin-right: 8px;"></i>' +
      catInfo.label + ' (' + filteredItems.length + ')' +
      '</strong></td>';
    tbody.appendChild(headerTr);

    // Mahsulotlar
    for (var p = 0; p < filteredItems.length; p++) {
      var pid = filteredItems[p];
      var pdata = products[pid];
      var titleUz = (pdata.uz && pdata.uz.title) ? pdata.uz.title : 'Nomsiz';

      // Rasm
      var imgUrl = 'https://via.placeholder.com/48x48?text=📦';
      if (Array.isArray(pdata.images) && pdata.images.length > 0) {
        imgUrl = pdata.images[0];
      }

      // Belgilar
      var flags = '';
      var hasVideo = pdata.video || (Array.isArray(pdata.images) && pdata.images.some(function (x) { return typeof x === 'string' && x.endsWith('.mp4'); }));
      if (hasVideo) flags += '<span class="flag-tag video">Video</span>';
      if (pdata.isNew) flags += '<span class="flag-tag new">Yangi</span>';
      if (pdata.isHit) flags += '<span class="flag-tag hit">Hit</span>';
      if (pdata.isAction) flags += '<span class="flag-tag action">Aksiya</span>';

      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td><img src="' + imgUrl + '" alt="" class="catalog-img" onerror="this.src=\'https://via.placeholder.com/48x48?text=📦\'"></td>' +
        '<td><strong>' + titleUz + '</strong><div class="prod-id">' + pid + '</div></td>' +
        '<td><span class="cat-badge" style="background: ' + catColor + '15; color: ' + catColor + '; border: 1px solid ' + catColor + '30;">' + catInfo.label + '</span></td>' +
        '<td>' + (flags || '—') + '</td>' +
        '<td><div class="action-btns">' +
        '<button class="btn-edit" data-id="' + pid + '" title="Tahrirlash"><i class="fas fa-pen"></i></button>' +
        '<button class="btn-delete" data-id="' + pid + '" title="O\'chirish"><i class="fas fa-trash"></i></button>' +
        '</div></td>';

      tbody.appendChild(tr);
      totalCount++;
    }
  }

  // "Boshqa" kategoriyasidagi mahsulotlar
  if (grouped['other'] && grouped['other'].length > 0) {
    var otherItems = grouped['other'];
    var headerOther = document.createElement('tr');
    headerOther.className = 'catalog-category-header';
    headerOther.innerHTML = '<td colspan="5" style="background: #f1f5f9; padding: 10px 16px; border-left: 4px solid #94a3b8;">' +
      '<strong style="color: #64748b; font-size: 14px;"><i class="fas fa-folder" style="margin-right: 8px;"></i>Boshqa (' + otherItems.length + ')</strong></td>';
    tbody.appendChild(headerOther);

    for (var oi = 0; oi < otherItems.length; oi++) {
      var oid = otherItems[oi];
      var odata = products[oid];
      var oTitle = (odata.uz && odata.uz.title) ? odata.uz.title : 'Nomsiz';

      if (query) {
        var oq = query.toLowerCase();
        if (oid.toLowerCase().indexOf(oq) === -1 && oTitle.toLowerCase().indexOf(oq) === -1) {
          continue;
        }
      }

      var oImgUrl = 'https://via.placeholder.com/48x48?text=📦';
      if (Array.isArray(odata.images) && odata.images.length > 0) {
        oImgUrl = odata.images[0];
      }

      var oflags = '';
      if (odata.isNew) oflags += '<span class="flag-tag new">Yangi</span>';
      if (odata.isHit) oflags += '<span class="flag-tag hit">Hit</span>';

      var otr = document.createElement('tr');
      otr.innerHTML =
        '<td><img src="' + oImgUrl + '" alt="" class="catalog-img" onerror="this.src=\'https://via.placeholder.com/48x48?text=📦\'"></td>' +
        '<td><strong>' + oTitle + '</strong><div class="prod-id">' + oid + '</div></td>' +
        '<td><span class="cat-badge">Boshqa</span></td>' +
        '<td>' + (oflags || '—') + '</td>' +
        '<td><div class="action-btns">' +
        '<button class="btn-edit" data-id="' + oid + '" title="Tahrirlash"><i class="fas fa-pen"></i></button>' +
        '<button class="btn-delete" data-id="' + oid + '" title="O\'chirish"><i class="fas fa-trash"></i></button>' +
        '</div></td>';
      tbody.appendChild(otr);
      totalCount++;
    }
  }

  if (totalCount === 0 && query) {
    tbody.innerHTML = '<tr><td colspan="5" class="empty-msg">Qidiruv natijasi topilmadi</td></tr>';
  }

  // Event delegation
  attachCatalogActions();
}

function attachCatalogActions() {
  var tbody = $('catalogBody');
  if (!tbody) return;

  tbody.querySelectorAll('.btn-edit').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openEditModal(btn.getAttribute('data-id'));
    });
  });

  tbody.querySelectorAll('.btn-delete').forEach(function (btn) {
    btn.addEventListener('click', function () {
      deleteProduct(btn.getAttribute('data-id'));
    });
  });
}

function setupCatalogEvents() {
  var searchInput = $('catalogSearch');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      renderCatalog(searchInput.value);
    });
  }

  var refreshBtn = $('btnRefreshCatalog');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', function () {
      loadProducts();
      showToast('Katalog yangilanmoqda...', 'info');
    });
  }

  var addBtn = $('btnAddProduct');
  if (addBtn) {
    addBtn.addEventListener('click', openAddModal);
  }
}

// ==================== 13. MAHSULOT O'CHIRISH ====================
function deleteProduct(id) {
  if (!confirm('"' + id + '" mahsulotini o\'chirmoqchimisiz?')) return;

  window.db.collection('products').doc(id).delete()
    .then(function () {
      delete products[id];
      renderCatalog();
      showToast('Mahsulot o\'chirildi!', 'success');
    })
    .catch(function (err) {
      showToast('Xatolik: ' + err.message, 'error');
    });
}

// ==================== 14. MODAL ====================
function setupModalEvents() {
  var closeBtn = $('btnCloseModal');
  var cancelBtn = $('btnCancelModal');
  var modal = $('productModal');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }

  var addImgBtn = $('btnAddImg');
  if (addImgBtn) {
    addImgBtn.addEventListener('click', addImage);
  }

  var imgInput = $('fImgUrl');
  if (imgInput) {
    imgInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        addImage();
      }
    });
  }

  var form = $('productForm');
  var btnSave = $('btnSaveProduct');
  if (btnSave) {
    btnSave.addEventListener('click', function (e) {
      e.preventDefault();
      if (form && form.checkValidity()) {
        saveProduct();
      } else if (form) {
        form.reportValidity();
      }
    });
  } else if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      saveProduct();
    });
  }

  // Language Tabs
  var langTabs = document.querySelectorAll('.lang-tab');
  langTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var lang = this.getAttribute('data-lang');
      
      // Remove active from all tabs and contents
      document.querySelectorAll('.lang-tab').forEach(function(t) { t.classList.remove('active'); });
      document.querySelectorAll('.lang-content').forEach(function(c) { c.classList.remove('active'); c.style.display = 'none'; });
      
      // Add active to current
      this.classList.add('active');
      var content = document.getElementById('lang-' + lang);
      if (content) {
        content.classList.add('active');
        content.style.display = 'block';
      }
    });
  });
}

function openAddModal() {
  editModeId = null;
  $('modalTitle').textContent = 'Yangi Mahsulot Qo\'shish';
  $('productForm').reset();
  $('fProductId').disabled = false;
  currentImages = [];
  renderImageGallery();
  
  // Reset tabs to UZ
  var firstTab = document.querySelector('.lang-tab[data-lang="uz"]');
  if(firstTab) firstTab.click();
  
  $('productModal').classList.add('open');
}

function openEditModal(id) {
  var p = products[id];
  if (!p) return;

  editModeId = id;
  $('modalTitle').textContent = 'Tahrirlash: ' + id;
  $('fProductId').value = id;
  $('fProductId').disabled = false; // Buni o'zgartirishga ruxsat beramiz

  $('fCategory').value = p.category || 'refraction';

  // UZ
  $('fTitleUz').value = (p.uz && p.uz.title) ? p.uz.title : '';
  $('fSubtitleUz').value = (p.uz && p.uz.subtitle) ? p.uz.subtitle : '';
  $('fDescUz').value = (p.uz && p.uz.description) ? p.uz.description : '';
  $('fFeaturesUz').value = (p.uz && Array.isArray(p.uz.features)) ? p.uz.features.join('\n') : '';

  // RU
  $('fTitleRu').value = (p.ru && p.ru.title) ? p.ru.title : '';
  $('fSubtitleRu').value = (p.ru && p.ru.subtitle) ? p.ru.subtitle : '';
  $('fDescRu').value = (p.ru && p.ru.description) ? p.ru.description : '';
  $('fFeaturesRu').value = (p.ru && Array.isArray(p.ru.features)) ? p.ru.features.join('\n') : '';

  // EN
  $('fTitleEn').value = (p.en && p.en.title) ? p.en.title : '';
  $('fSubtitleEn').value = (p.en && p.en.subtitle) ? p.en.subtitle : '';
  $('fDescEn').value = (p.en && p.en.description) ? p.en.description : '';
  $('fFeaturesEn').value = (p.en && Array.isArray(p.en.features)) ? p.en.features.join('\n') : '';

  $('fFlagNew').checked = !!p.isNew;
  $('fFlagHit').checked = !!p.isHit;
  $('fFlagAction').checked = !!p.isAction;

  var hasVideo = p.video || (Array.isArray(p.images) && p.images.some(function (x) { return typeof x === 'string' && x.endsWith('.mp4'); }));
  $('fFlagVideo').checked = !!hasVideo;

  currentImages = p.images ? [].concat(p.images) : [];
  
  // Reset tabs to UZ
  var firstTab = document.querySelector('.lang-tab[data-lang="uz"]');
  if(firstTab) firstTab.click();

  renderImageGallery();
  $('productModal').classList.add('open');
}

function closeModal() {
  $('productModal').classList.remove('open');
}

// ==================== 15. RASMLAR ====================
function addImage() {
  var url = prompt("Yangi rasm URL manzilini kiriting:");
  if (url && url.trim()) {
    currentImages.push(url.trim());
    renderImageGallery();
  }
}

function editImage(idx) {
  var newUrl = prompt("Yangi rasm URL manzilini kiriting:", currentImages[idx]);
  if (newUrl !== null && newUrl.trim() !== '') {
    currentImages[idx] = newUrl.trim();
    renderImageGallery();
  }
}

function renderImageGallery() {
  var gallery = $('imgGallery');
  if (!gallery) return;
  gallery.innerHTML = '';

  var thumbsRow = document.createElement('div');
  thumbsRow.className = 'thumbs-row';
  thumbsRow.style.display = 'flex';
  thumbsRow.style.gap = '10px';
  thumbsRow.style.flexWrap = 'wrap';

  if (currentImages.length > 0) {
    // 1. Katta rasm (Birinchi rasm doim asosiy hisoblanadi)
    var mainWrap = document.createElement('div');
    mainWrap.className = 'main-preview-wrap';
    mainWrap.innerHTML = '<img src="' + currentImages[0] + '" alt="Asosiy rasm" onerror="this.src=\'https://via.placeholder.com/600x400?text=Xatolik\'">';
    gallery.appendChild(mainWrap);
    
    for (var i = 0; i < currentImages.length; i++) {
      var isMain = (i === 0);
      var div = document.createElement('div');
      div.className = 'img-thumb-adv' + (isMain ? ' active' : '');
      
      div.innerHTML =
        '<img src="' + currentImages[i] + '" onerror="this.src=\'https://via.placeholder.com/72\'">' +
        '<div class="thumb-actions">' +
          '<button type="button" class="thumb-btn edit-btn" data-idx="' + i + '" title="Tahrirlash"><i class="fas fa-pen"></i></button>' +
          '<button type="button" class="thumb-btn del-btn" data-idx="' + i + '" title="O\'chirish"><i class="fas fa-trash"></i></button>' +
        '</div>';
      
      thumbsRow.appendChild(div);
    }
  }

  // 3. Add '+' button to the thumbs row
  var addBox = document.createElement('div');
  addBox.className = 'img-thumb-adv add-thumb-btn';
  addBox.style.display = 'flex';
  addBox.style.alignItems = 'center';
  addBox.style.justifyContent = 'center';
  addBox.style.background = 'var(--bg-color)';
  addBox.style.border = '2px dashed var(--border)';
  addBox.style.cursor = 'pointer';
  addBox.innerHTML = '<i class="fas fa-plus fa-2x" style="color:#94a3b8;"></i>';
  addBox.onclick = addImage;
  thumbsRow.appendChild(addBox);
  
  gallery.appendChild(thumbsRow);

  // Event Listeners for buttons
  gallery.querySelectorAll('.edit-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      editImage(parseInt(btn.getAttribute('data-idx')));
    });
  });

  gallery.querySelectorAll('.del-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var idx = parseInt(btn.getAttribute('data-idx'));
      currentImages.splice(idx, 1);
      renderImageGallery();
    });
  });
}

// ==================== 16. MAHSULOT SAQLASH ====================
function saveProduct() {
  var id = $('fProductId').value.trim();
  if (!id) {
    showToast('Mahsulot ID kiritilmagan!', 'error');
    return;
  }

  // Check if ID already exists when creating a new product
  if (!editModeId && products[id]) {
    showToast('Bu ID ga ega mahsulot allaqachon mavjud! Boshqa ID kiriting.', 'error');
    return;
  }

  // Parse features safely
  function parseFeatures(text) {
    if(!text) return [];
    return text.split('\n').map(function(s) { return s.trim(); }).filter(function(s) { return s.length > 0; });
  }

  var productObj = {
    category: $('fCategory').value,
    isNew: $('fFlagNew').checked,
    isHit: $('fFlagHit').checked,
    isAction: $('fFlagAction').checked,
    images: currentImages,
    uz: {
      title: $('fTitleUz').value.trim(),
      subtitle: $('fSubtitleUz').value.trim(),
      description: $('fDescUz').value.trim(),
      features: parseFeatures($('fFeaturesUz').value)
    },
    ru: {
      title: $('fTitleRu').value.trim(),
      subtitle: $('fSubtitleRu').value.trim(),
      description: $('fDescRu').value.trim(),
      features: parseFeatures($('fFeaturesRu').value)
    },
    en: {
      title: $('fTitleEn').value.trim(),
      subtitle: $('fSubtitleEn').value.trim(),
      description: $('fDescEn').value.trim(),
      features: parseFeatures($('fFeaturesEn').value)
    }
  };

  if ($('fFlagVideo').checked) {
    productObj.video = true;
  } else {
    productObj.video = false;
  }

  // Eski maydonlarni saqlash
  var sourceData = products[editModeId] || products[id];
  if (sourceData) {
    for (var key in sourceData) {
      if (!(key in productObj)) {
        productObj[key] = sourceData[key];
      }
    }
  }

  var btn = $('btnSaveProduct');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saqlanmoqda...';

  // Agar ID o'zgargan bo'lsa (yangi ID eski ID dan farq qilsa)
  if (editModeId && editModeId !== id) {
    window.db.collection('products').doc(id).set(productObj)
      .then(function () {
        products[id] = productObj;
        return window.db.collection('products').doc(editModeId).delete();
      })
      .then(function() {
        delete products[editModeId];
        // Yangi ID ni ro'yxatda eski joyiga qo'yish
        var oldIdx = SITE_PRODUCT_ORDER.indexOf(editModeId);
        if (oldIdx !== -1) {
          SITE_PRODUCT_ORDER[oldIdx] = id;
        }
        closeModal();
        try {
          renderCatalog();
        } catch(e) {
          console.error(e);
        }
        showToast('Mahsulot yangi ID bilan saqlandi! ✓', 'success');
      })
      .catch(function (err) {
        showToast('Saqlashda xatolik: ' + err.message, 'error');
      })
      .finally(function () {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-save"></i> Saqlash';
      });
  } else {
    // Oddiy saqlash
    window.db.collection('products').doc(id).set(productObj)
      .then(function () {
        products[id] = productObj;
        closeModal();
        renderCatalog();
        showToast('Mahsulot saqlandi! ✓', 'success');
      })
      .catch(function (err) {
        showToast('Saqlashda xatolik: ' + err.message, 'error');
      })
      .finally(function () {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-save"></i> Saqlash';
      });
  }
}

// ==================== 17. SETTINGS (SAYT LINKLARI) ====================
function loadSettings() {
  if (!window.db) return;
  
  var btn = $('btnSaveSettings');
  if (btn) btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yuklanmoqda...';

  window.db.collection('daily_visits').doc('settings_general').get()
    .then(function(doc) {
      if (doc.exists) {
        var data = doc.data();
        if ($('setPhone')) $('setPhone').value = data.phone || '';
        if ($('setEmail')) $('setEmail').value = data.email || '';
        if ($('setTelegram')) $('setTelegram').value = data.telegram || '';
        if ($('setAddress')) $('setAddress').value = data.address || '';
        if ($('setWorkHours')) $('setWorkHours').value = data.workHours || '';
      }
    })
    .catch(function(err) {
      console.error('[Admin] Settings xatosi:', err);
      showToast('Sozlamalarni yuklashda xatolik', 'error');
    })
    .finally(function() {
      if (btn) btn.innerHTML = '<i class="fas fa-save"></i> Saqlash';
    });
}

function saveSettings() {
  if (!window.db) return;

  var btn = $('btnSaveSettings');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saqlanmoqda...';
  }

  var settingsObj = {
    phone: $('setPhone') ? $('setPhone').value.trim() : '',
    email: $('setEmail') ? $('setEmail').value.trim() : '',
    telegram: $('setTelegram') ? $('setTelegram').value.trim() : '',
    address: $('setAddress') ? $('setAddress').value.trim() : '',
    workHours: $('setWorkHours') ? $('setWorkHours').value.trim() : ''
  };

  window.db.collection('daily_visits').doc('settings_general').set(settingsObj)
    .then(function() {
      showToast('Sayt linklari saqlandi! ✓', 'success');
    })
    .catch(function(err) {
      console.error('[Admin] Settings saqlash xatosi:', err);
      showToast('Saqlashda xatolik: ' + err.message, 'error');
    })
    .finally(function() {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-save"></i> Saqlash';
      }
    });
}

function setupSettingsEvents() {
  var btn = $('btnSaveSettings');
  if (btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      saveSettings();
    });
  }
}

// ==================== DONE ====================
console.log('[Admin] admin.js yuklandi ✓');
