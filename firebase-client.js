/* ============================================================
   FIREBASE CLIENT — proftexnotrade.uz
   Public sayt uchun:
   1) Firebase ulash
   2) Visitor tracking (analitika)
   3) Firebase'dan mahsulotlarni yuklash va saytga chiqarish
   ============================================================ */

(function () {
  'use strict';

  // ==================== CONFIG ====================
  var firebaseConfig = {
    apiKey: "AIzaSyCwrnN3ulOW8aNLBQdXVT5u99vewAPk0JA",
    authDomain: "protexnotrade-analitika.firebaseapp.com",
    projectId: "protexnotrade-analitika",
    storageBucket: "protexnotrade-analitika.firebasestorage.app",
    messagingSenderId: "30112835334",
    appId: "1:30112835334:web:5aa151d50b174214da2087",
    measurementId: "G-4RNRP8PFLP"
  };

  // ==================== 1. FIREBASE INIT ====================
  if (typeof firebase === 'undefined') {
    console.error('[Firebase Client] Firebase SDK topilmadi!');
    return;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  window.db = firebase.firestore();
  console.log('[Firebase Client] Ulandi ✓');

  // ==================== 2. HELPER ====================
  function getLocalDateString() {
    var d = new Date();
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }

  // ==================== 3. VISITOR TRACKING ====================
  function trackVisit() {
    if (!window.db) return;

    try {
      var todayStr = getLocalDateString();
      var docRef = window.db.collection('daily_visits').doc(todayStr);

      // Kirish +1
      docRef.set({
        kirishlar: firebase.firestore.FieldValue.increment(1)
      }, { merge: true })
        .then(function () {
          console.log('[Firebase Analytics] Tashrif yozildi: ' + todayStr);
        })
        .catch(function (err) {
          console.error('[Firebase Analytics] Xatolik:', err);
        });

      // Chiqish +1 (sahifadan chiqganda)
      window.addEventListener('beforeunload', function () {
        docRef.set({
          chiqishlar: firebase.firestore.FieldValue.increment(1)
        }, { merge: true });
      });
    } catch (e) {
      console.error('[Firebase Analytics] Xato:', e);
    }
  }

  // ==================== 4. FIREBASE'DAN MAHSULOTLARNI YUKLASH ====================
  function loadFirebaseProducts() {
    if (!window.db) return;

    window.db.collection('products').get()
      .then(function (snapshot) {
        var fbProducts = {};
        snapshot.forEach(function (doc) {
          fbProducts[doc.id] = doc.data();
        });

        var fbCount = Object.keys(fbProducts).length;
        console.log('[Firebase Client] ' + fbCount + ' ta mahsulot Firebase\'dan yuklandi');

        // Agar Firebase'da mahsulotlar bo'lsa, ularni window.productData ga qo'shish
        if (fbCount > 0) {
          if (!window.productData) window.productData = {};

          // Firebase'dan kelgan ma'lumotlarni ustiga yozish (admin paneldagi o'zgarishlar)
          for (var id in fbProducts) {
            window.productData[id] = fbProducts[id];
          }

          // Admin panelda o'chirilgan mahsulotlarni ham productData'dan o'chirish
          // Bu yerda biz Firebase'da mavjud bo'lmagan lekin productData'da bor mahsulotlarni aniqlaymiz
          // va ularni o'chiramiz. Bu admin panelda o'chirish natijasida sodir bo'ladi.
          for (var existId in window.productData) {
            if (!fbProducts[existId] && window.productData.hasOwnProperty(existId)) {
              // Firebase'da yo'q — admin panelda o'chirilgan bo'lishi mumkin
              // Lekin agar hardcoded mahsulot bo'lsa, uni saqlaymiz — faqat Firebase'da bo'lganlarni ustunroq qilamiz
            }
          }

          // index.html sahifasida yangi kartalarni qo'shish
          updateProductCards(fbProducts);
        }

        // Signal berish
        window.dispatchEvent(new Event('firebaseDataReady'));
      })
      .catch(function (err) {
        console.error('[Firebase Client] Mahsulotlar xatosi:', err);
      });
  }

  // ==================== 5. SAYTDAGI MAHSULOT KARTALARINI YANGILASH ====================
  function updateProductCards(fbProducts) {
    // index.html da products-grid topish
    var grid = document.querySelector('.products-grid');
    if (!grid) return;

    // Har bir Firebase mahsulot uchun — agar saytda kartasi yo'q bo'lsa, qo'shish
    for (var id in fbProducts) {
      var data = fbProducts[id];

      // Mavjud karta bormi tekshirish
      var existingCard = grid.querySelector('[onclick*="id=' + id + '"]');
      if (existingCard) {
        // Mavjud bo'lsa — nomini, rasmini va belgilarini yangilash
        var nameEl = existingCard.querySelector('.product-name, h3');
        if (nameEl && data.uz && data.uz.title) {
          nameEl.textContent = data.uz.title;
          nameEl.setAttribute('data-uz', data.uz.title);
          if (data.ru && data.ru.title) nameEl.setAttribute('data-ru', data.ru.title);
          if (data.en && data.en.title) nameEl.setAttribute('data-en', data.en.title);
        }
        var imgEl = existingCard.querySelector('.product-image img');
        if (imgEl && Array.isArray(data.images) && data.images.length > 0) {
          imgEl.src = data.images[0];
        }

        // Belgilarni yangilash (yangi logika)
        var badgeHtml = '';
        if (data.isNew) badgeHtml += '<span class="product-badge new" style="background:#10b981;">YANGI</span>';
        if (data.isHit) badgeHtml += '<span class="product-badge hit" style="background:#f97316;">HIT</span>';
        if (data.isAction) badgeHtml += '<span class="product-badge action" style="background:#ef4444;">AKSIYA</span>';

        var hasVideo = data.video || (Array.isArray(data.images) && data.images.some(function (img) { return typeof img === 'string' && img.endsWith('.mp4'); }));
        if (hasVideo) badgeHtml += '<span class="product-badge video" style="background:#0ea5e9; color:#fff;">Video ▶</span>';

        var imgContainer = existingCard.querySelector('.product-image');
        if (imgContainer) {
          // Eski belgilarni tozalash
          var oldBadges = imgContainer.querySelectorAll('.product-badge');
          oldBadges.forEach(function(b) { b.remove(); });
          
          // Agar yangi container yo'q bo'lsa
          var badgeWrapper = imgContainer.querySelector('.badge-wrapper');
          if (!badgeWrapper) {
            imgContainer.style.display = 'flex';
            imgContainer.style.flexDirection = 'column';
            imgContainer.style.alignItems = 'flex-start';
            imgContainer.style.position = 'relative';
            
            badgeWrapper = document.createElement('div');
            badgeWrapper.className = 'badge-wrapper';
            badgeWrapper.style.position = 'absolute';
            badgeWrapper.style.top = '10px';
            badgeWrapper.style.left = '10px';
            badgeWrapper.style.display = 'flex';
            badgeWrapper.style.flexDirection = 'column';
            badgeWrapper.style.gap = '5px';
            badgeWrapper.style.zIndex = '10';
            imgContainer.insertBefore(badgeWrapper, imgContainer.firstChild);
          }
          badgeWrapper.innerHTML = badgeHtml;
        }

        continue;
      }

      // Yangi karta yaratish
      var card = document.createElement('div');
      card.className = 'product-card reveal';
      card.setAttribute('data-category', data.category || 'refraction');
      card.setAttribute('onclick', "window.location.href='product.html?id=" + id + "'");

      var imgUrl = (Array.isArray(data.images) && data.images.length > 0) ? data.images[0] : 'https://via.placeholder.com/300x200?text=No+Image';
      var titleUz = (data.uz && data.uz.title) ? data.uz.title : 'Nomsiz';
      var titleRu = (data.ru && data.ru.title) ? data.ru.title : titleUz;
      var titleEn = (data.en && data.en.title) ? data.en.title : titleUz;
      var descUz = (data.uz && data.uz.description) ? data.uz.description : '';

      var badgeHtml = '';
      if (data.isNew) badgeHtml += '<span class="product-badge new" style="background:#10b981;">YANGI</span>';
      if (data.isHit) badgeHtml += '<span class="product-badge hit" style="background:#f97316;">HIT</span>';
      if (data.isAction) badgeHtml += '<span class="product-badge action" style="background:#ef4444;">AKSIYA</span>';

      var hasVideo = data.video || (Array.isArray(data.images) && data.images.some(function (img) { return typeof img === 'string' && img.endsWith('.mp4'); }));
      if (hasVideo) badgeHtml += '<span class="product-badge video" style="background:#0ea5e9; color:#fff;">Video ▶</span>';

      card.innerHTML =
        '<div class="product-image" style="display: flex; flex-direction: column; align-items: flex-start; position: relative;">' +
        '<div style="position: absolute; top: 10px; left: 10px; display: flex; flex-direction: column; gap: 5px; z-index: 10;">' + badgeHtml + '</div>' +
        '<img src="' + imgUrl + '" alt="' + titleUz + '" loading="lazy">' +
        '</div>' +
        '<div class="product-info">' +
        '<h3 class="product-name" data-uz="' + titleUz + '" data-ru="' + titleRu + '" data-en="' + titleEn + '">' + titleUz + '</h3>' +
        '<p class="product-desc" data-uz="' + descUz + '">' + descUz + '</p>' +
        '<div class="product-footer">' +
        '<span class="product-price">Batafsil</span>' +
        '<button class="product-btn" aria-label="Details"><i class="fas fa-arrow-right"></i></button>' +
        '</div>' +
        '</div>';

      // Kategoriyaga mos joylash
      var categorySection = findCategorySection(grid, data.category);
      if (categorySection) {
        categorySection.parentNode.insertBefore(card, categorySection.nextSibling);
      } else {
        grid.appendChild(card);
      }
    }
  }

  // Kategoriya bo'limini topish
  function findCategorySection(grid, category) {
    var dividers = grid.querySelectorAll('.category-divider');
    var catMap = {
      'refraction': ['refraktsiya', 'refraction', 'categoryRefraction'],
      'diagnostic': ['diagnostik', 'diagnostic', 'categoryDiagnostic'],
      'surgical': ['xirurgiya', 'surgical', 'categorySurgical'],
      'lasers': ['lazer', 'laser', 'categoryLasers'],
      'lens-edger': ['linza', 'lens', 'categoryLensEdger'],
      'industrial-edger': ['sanoat', 'industrial', 'categoryIndustrialEdger'],
      'peripheral': ['periferik', 'peripheral', 'categoryPeripheral']
    };

    if (!category || !catMap[category]) return null;

    var keywords = catMap[category];
    for (var i = 0; i < dividers.length; i++) {
      var text = (dividers[i].textContent || '').toLowerCase();
      var i18n = dividers[i].getAttribute('data-i18n') || '';
      for (var k = 0; k < keywords.length; k++) {
        if (text.indexOf(keywords[k]) !== -1 || i18n.indexOf(keywords[k]) !== -1) {
          return dividers[i];
        }
      }
    }
    return null;
  }

  // ==================== 6. product.html UCHUN ====================
  function handleProductPage() {
    var params = new URLSearchParams(window.location.search);
    var productId = params.get('id');
    if (!productId) return;

    // Firebase'dan bu mahsulotni yuklash
    if (!window.db) return;

    window.db.collection('products').doc(productId).get()
      .then(function (doc) {
        if (doc.exists) {
          var data = doc.data();
          if (!window.productData) window.productData = {};
          window.productData[productId] = data;

          // Agar renderProductPage funksiyasi mavjud bo'lsa, chaqirish
          if (typeof window.renderProductPage === 'function') {
            window.renderProductPage(productId);
          }
        }
      })
      .catch(function (err) {
        console.error('[Firebase Client] Mahsulot yuklash xatosi:', err);
      });
  }

  // ==================== 7. RUN ====================
  document.addEventListener('DOMContentLoaded', function () {
    trackVisit();

    // Qaysi sahifadamiz aniqlash
    var isProductPage = window.location.pathname.indexOf('product.html') !== -1;

    if (isProductPage) {
      handleProductPage();
    } else {
      // index.html uchun — script-fixed.js yuklangandan keyin Firebase mahsulotlarini yuklash
      // Kichik kutish — script-fixed.js dagi productData tayyor bo'lishi kerak
      setTimeout(function () {
        loadFirebaseProducts();
        loadSettings();
      }, 500);
    }
  });

  // ==================== LOAD SETTINGS ====================
  function loadSettings() {
    if (!window.db) return;
    
    window.db.collection('daily_visits').doc('settings_general').get()
      .then(function(doc) {
        if (doc.exists) {
          var data = doc.data();
          
          if (data.phone) {
            var phoneStr = data.phone.replace(/\s+/g, '');
            var phoneEls = document.querySelectorAll('a[href^="tel:"], p[data-i18n="contactPhoneVal"]');
            phoneEls.forEach(function(el) {
              if (el.tagName === 'A') {
                el.href = 'tel:' + phoneStr;
                el.textContent = data.phone;
              } else {
                el.textContent = data.phone;
                var card = el.closest('.contact-card');
                if (card) card.setAttribute('onclick', "window.location.href='tel:" + phoneStr + "'");
              }
              el.removeAttribute('data-i18n');
            });
          }

          if (data.email) {
            var emailEls = document.querySelectorAll('a[href^="mailto:"], p[data-i18n="contactEmailVal"]');
            emailEls.forEach(function(el) {
              if (el.tagName === 'A') {
                el.href = 'mailto:' + data.email;
                el.textContent = data.email;
              } else {
                el.textContent = data.email;
                var card = el.closest('.contact-card');
                if (card) card.setAttribute('onclick', "window.location.href='mailto:" + data.email + "'");
              }
              el.removeAttribute('data-i18n');
            });
          }

          if (data.telegram) {
            var tgUser = data.telegram.replace('@', '');
            var tgEls = document.querySelectorAll('a[href^="https://t.me/"]');
            tgEls.forEach(function(el) {
              el.href = 'https://t.me/' + tgUser;
              el.textContent = 'Telegram: ' + data.telegram;
            });
            var tgHeader = document.querySelector('h4[data-i18n="contactTelegram"]');
            if (tgHeader && tgHeader.nextElementSibling) {
              tgHeader.nextElementSibling.textContent = data.telegram;
              var card = tgHeader.closest('.contact-card');
              if (card) card.setAttribute('onclick', "window.open('https://t.me/" + tgUser + "', '_blank')");
            }
          }

          if (data.address) {
            var addrEls = document.querySelectorAll('a[data-i18n="contactAddressVal"], p[data-i18n="contactAddressVal"]');
            addrEls.forEach(function(el) {
              el.textContent = data.address;
              el.removeAttribute('data-i18n');
            });
          }

          if (data.workHours) {
            var timeEls = document.querySelectorAll('p[data-i18n="contactWorkHoursVal"]');
            timeEls.forEach(function(el) {
              el.textContent = data.workHours;
              el.removeAttribute('data-i18n');
            });
            var timeHeader = document.querySelector('h4[data-i18n="contactWorkHours"]');
            if (timeHeader && timeHeader.nextElementSibling) {
              timeHeader.nextElementSibling.textContent = data.workHours;
              timeHeader.nextElementSibling.removeAttribute('data-i18n');
            }
          }
        }
      })
      .catch(function(err) {
        console.error('[Firebase Client] Settings yuklash xatosi:', err);
      });
  }

})();
