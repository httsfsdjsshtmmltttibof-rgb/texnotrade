/* ============================================================
   PROFTEXNOTRADE — JavaScript
   Multi-language, product filter, animations
   ============================================================ */

// ==================== TRANSLATIONS ====================
const translations = {
  ru: {
    // Nav
    navHome: "Главная",
    navAbout: "О нас",
    navProducts: "Каталог",
    navServices: "Услуги",
    navContact: "Контакты",
    navContactBtn: "Связаться",

    // Hero
    heroBadge: "Офтальмологическое оборудование",
    heroTitle1: "Профессиональное",
    heroTitle2: "медицинское",
    heroTitle3: "оборудование",
    heroDesc: "Поставка современного офтальмологического оборудования ведущих мировых производителей. Диагностика, лечение, хирургия — полное оснащение клиник.",
    heroBtnCatalog: "Каталог продукции",
    heroBtnContact: "Получить консультацию",
    heroStat1Num: "500+",
    heroStat1Label: "Единиц оборудования",
    heroStat2Num: "15+",
    heroStat2Label: "Лет опыта",
    heroStat3Num: "200+",
    heroStat3Label: "Клиник-партнёров",
    heroFloat1Title: "Сертифицировано",
    heroFloat1Value: "ISO 13485 | CE Mark",
    heroFloat2Title: "Гарантия",
    heroFloat2Value: "до 5 лет",

    // About
    aboutLabel: "Почему мы",
    aboutTitle: "Надёжный партнёр для вашей клиники",
    aboutSubtitle: "Мы предоставляем полный спектр услуг — от консультации до сервисного обслуживания",
    about1Title: "Оригинальное оборудование",
    about1Desc: "Прямые поставки от производителей. Вся продукция сертифицирована и имеет гарантию качества.",
    about2Title: "Техническая поддержка",
    about2Desc: "Команда инженеров обеспечивает установку, настройку и обучение персонала вашей клиники.",
    about3Title: "Быстрая доставка",
    about3Desc: "Оперативная логистика по всей стране. Складской запас популярных моделей оборудования.",
    about4Title: "Сервисное обслуживание",
    about4Desc: "Гарантийное и послегарантийное обслуживание с оригинальными запчастями.",

    // Products
    productsLabel: "Каталог",
    productsTitle: "Офтальмологическое оборудование",
    productsSubtitle: "Широкий ассортимент профессионального оборудования для диагностики и лечения",
    searchPlaceholder: "🔍 Поиск...",
    filterAll: "Все",
    filterRefraction: "Рефракция",
    filterDiagnostic: "Диагностика",
    filterSurgeryIOL: "Хирургия и ИОЛ",
    filterLasers: "Офтальмологические лазеры",
    filterLensEdger: "Оборудование для обработки линз",
    filterIndustrialEdger: "Промышленные станки",
    filterPeripheral: "Периферийные устройства",
    btnRequest: "Запросить цену",

    // Product Items

    categoryOphthalmicLasers: "Офтальмологические лазеры",
    categorySurgicalIol: "Хирургия и ИОЛ",
    categoryLensEdger: "Оборудование для обработки линз",
    categoryIndustrialEdger: "Промышленные станки",
    categoryPeripheral: "Периферийные устройства",
    categoryRefraction: "Рефракция",
    categoryDiagnostic: "Диагностика",
    placeholderCat: "Оптика",
    placeholderDesc: "Информация будет добавлена позже.",
    placeholderImgText: "Скоро...",
    prod29Name: "Факоэмульсификатор Cube α",
    prod30Name: "Роговичный топограф OPD-Scan® III",
    prod31Name: "Зеркальный микроскоп CEM-530",
    prod30Cat: "Диагностика",
    prod30Desc: "Истинная рефракционная рабочая станция 5-в-1 для всех врачей.",
    prod31Cat: "Диагностика",
    prod31Desc: "Многозональная зеркальная микроскопия с быстрым анализом за 2 секунды.",
    prod32Cat: "Диагностика",
    prod32Name: "Оптический биометр AL-Scan",
    prod32Desc: "Оптический биометр, измеряющий 6 клинических параметров за 10 секунд.",
    prod33Cat: "Диагностика",
    prod33Name: "Ультразвуковая система US-4000",
    prod33Desc: "Компактная ультразвуковая система с B-сканированием, биометрией и пахиметрией.",
    prod34Cat: "Диагностика",
    prod34Name: "Ультразвуковая система US-500",
    prod34Desc: "Компактная ультразвуковая система с биометрией, пахиметрией и сенсорным экраном.",
    prod35Cat: "Хирургия",
    prod35Name: "Факоэмульсификатор Cube α",
    prod35Desc: "Компактная и мощная платформа для хирургии катаракты.",
    prod36Cat: "Офтальмологические лазеры",
    prod36Name: "Лазерный фотокоагулятор GYC-500",
    prod36Desc: "Зеленый лазер для фотокоагуляции сетчатки.",
    prod37Cat: "Офтальмологические лазеры",
    prod37Name: "Трабекулопластический лазер YC-200 S plus",
    prod37Desc: "Лазер для трабекулопластики и капсулотомии.",
    prod38Name: "Оборудование для обработки линз ME-1",
    prod39Name: "Система обработки линз LEXCE PLUS TREND8",
    prod40Name: "Промышленный станок для обработки линз MSE-1",
    prod41Name: "Промышленный станок для обработки линз SE-9090 SUPRA",
    prod42Name: "Промышленный станок для обработки линз SE-9090 SUPRA L",
    prod43Name: "Промышленный станок для обработки линз AES-2200",
    prod44Name: "Промышленный станок для обработки линз AES-1000",
    prod40Desc: "Гибридная система: высокоскоростное фрезерование и точная шлифовка.",
    prod41Desc: "Быстрая обработка с системой двух шпинделей и измерение обеих поверхностей.",
    prod43Desc: "Автоматическая лабораторная система с конвейером NICS.",
    prod44Desc: "Отличная адаптируемость для небольших оптических лабораторий.",
    prod45Name: "Система блокировки линз ICE-1500",
    prod46Name: "Центрирующее устройство CE-9",
    prod47Name: "Сканер формы оправы LT-1200",
    prod48Name: "Сканер формы оправы LT-980",
    prod45Desc: "Автоматическое измерение и блокировка линз с многофункциональным зажимом.",
    prod46Desc: "Устройство для центрирования оптических линз в компактном и стильном дизайне.",
    prod47Desc: "Многофункциональный лабораторный и веб-трейсер с автоматическим 3D сканированием.",
    prod48Desc: "Автоматическое 3D сканирование, защита от пыли, держатель демо-линз в одно касание.",
    prod1Name: "Офтальмологический прибор рефрактометр PHANTOM™",
    prod1Cat: "Диагностика",
    prod1Desc: "Бинокулярная система рефракции открытого поля без физических линз. Виртуальная симуляция и плавающие таблицы.",
    prod2Name: "Щелевая лампа (Slit Lamp)",
    prod2Cat: "Диагностика",
    prod2Desc: "Профессиональное офтальмологическое смотровое оборудование. Для высокоточного исследования переднего отрезка.",
    prod3Name: "Лензметр (Lensmeter)",
    prod3Cat: "Диагностика",
    prod3Desc: "Профессиональное оборудование для точного измерения параметров очковых линз.",
    prod4Name: "Фороптер (Phoropter)",
    prod4Cat: "Диагностика",
    prod4Desc: "Профессиональное офтальмологическое устройство для определения остроты зрения пациента.",
    prod5Name: "Тонометр NT-1 / NT-1p",
    prod5Cat: "Диагностика",
    prod5Desc: "Полностью автоматизированный бесконтактный тонометр с функцией надежной пахиметрии.",
    prod6Name: "Оптический биометр (AL-Scan)",
    prod6Cat: "Диагностика",
    prod6Desc: "Измерение 6 клинических параметров для хирургии катаракты за 10 секунд.",
    prod7Name: "Топограф и рефрактометр OPD-Scan III VS",
    prod7Cat: "Диагностика",
    prod7Desc: "Устройство для комплексного анализа зрения с топографом и рефрактометром.",
    prod8Name: "Кератометр автоматический KR-800",
    prod8Cat: "Диагностика",
    prod8Desc: "Измерение кривизны роговицы. Необходим для подбора контактных линз и расчёта ИОЛ.",
    prod9Name: "Автоматический офтальмологический рефрактор RT-6100",
    prod9Cat: "Диагностика",
    prod9Desc: "Передовой рефрактор для точных и эффективных исследований с 10,4-дюймовым экраном.",
    prod10Name: "Автоматический кератометр HandyRef-K",
    prod10Cat: "Диагностика",
    prod10Desc: "Портативные измерения в любое время и в любом месте. Улучшенное удобство использования благодаря инновационным функциям.",
    prod11Name: "Монитор-оптотип SSC-370",
    prod11Cat: "Оптика",
    prod11Desc: "Компактная диаграмма с возможностью выбора расстояния установки и интеграцией с рефрактором.",
    prod12Name: "Автоматический фронтофокометр LM-1800PD",
    prod12Cat: "Оптика",
    prod12Desc: "Датчик Хартмана со 108 точками измерения и функцией проверки дисторсии.",
    prod13Name: "Цифровой пупиллометр PM-700",
    prod13Cat: "Оптика",
    prod13Desc: "Автоматический расчет PD с помощью одного измерения. Устойчивая и эргономичная конструкция.",
    prod14Name: "Витреоретинальная система VR-Pro",
    prod14Cat: "Хирургия",
    prod14Desc: "Комплексная система для витреоретинальной хирургии. Высокоскоростная витрэктомия.",
    prod15Name: "Операционный микроскоп OM-19",
    prod15Cat: "Хирургия",
    prod15Desc: "Премиальный операционный микроскоп с коаксиальным освещением и RedReflex.",
    prod16Name: "A/B скан ультразвуковой UBM-800",
    prod16Cat: "Диагностика",
    prod16Desc: "Ультразвуковое A/B сканирование глаза. Биометрия и визуализация заднего сегмента.",
    prod17Name: "Проектор знаков CP-500",
    prod17Cat: "Оптика",
    prod17Desc: "LED-проектор знаков с дистанционным управлением. 30+ тестовых таблиц.",
    prod18Name: "Офтальмологическое кресло OC-2400",
    prod18Cat: "Аксессуары",
    prod18Desc: "Электрическое кресло с плавной регулировкой высоты. Комбинируется с рефракционным столом.",
    prod19Name: "Набор пробных линз TL-266",
    prod19Cat: "Оптика",
    prod19Desc: "Полный набор 266 линз в алюминиевом кейсе. Сферические, цилиндрические, призмы.",
    prod20Name: "Эндолазер Endo-Pro 810",
    prod20Cat: "Хирургия",
    prod20Desc: "Диодный эндолазер 810 нм для интраоперационной лазерной коагуляции сетчатки.",

    // Modal
    modalFeaturesLabel: "Основные возможности",
    modalAdvantagesLabel: "Преимущества",
    modalSpecsLabel: "Технические характеристики",
    modalOrderBtn: "Заказать",

    prodBadgeNew: "Новинка",
    prodBadgeHit: "Хит",

    // Services
    servicesLabel: "Услуги",
    servicesTitle: "Комплексный подход к оснащению",
    servicesSubtitle: "Мы сопровождаем клиента на каждом этапе — от выбора оборудования до ввода в эксплуатацию",
    serv1Title: "Консультация и подбор",
    serv1Desc: "Наши эксперты помогут подобрать оптимальное оборудование под задачи и бюджет вашей клиники.",
    serv2Title: "Доставка и монтаж",
    serv2Desc: "Профессиональная доставка, распаковка, монтаж и калибровка оборудования на месте.",
    serv3Title: "Обучение персонала",
    serv3Desc: "Полное обучение врачей и медперсонала работе с новым оборудованием.",
    serv4Title: "Гарантийный сервис",
    serv4Desc: "Расширенная гарантия до 5 лет. Оперативный выезд инженера при любой неисправности.",
    serv5Title: "Запасные части",
    serv5Desc: "Оригинальные запчасти и расходные материалы. Склад наиболее востребованных позиций.",
    serv6Title: "Trade-in программа",
    serv6Desc: "Обмен старого оборудования на новое с зачётом стоимости. Обновляйте парк техники выгодно.",

    // Contact
    contactLabel: "Контакты",
    contactTitle: "Свяжитесь с нами",
    contactSubtitle: "Мы готовы ответить на все ваши вопросы и помочь с подбором оборудования",
    contactPhone: "Телефон",
    contactPhoneVal: "+998 93 171 22 02",
    contactEmail: "Электронная почта",
    contactEmailVal: "info@proftexnotrade.uz",
    contactTelegram: "Telegram Админ",
    contactAddress: "Адрес",
    contactAddressVal: "г. Ташкент, Мирабадский р-н, СГМ Биродарлик, ул. Эльтузар, 58А",
    contactWorkHours: "Режим работы",
    contactWorkHoursVal: "Пн–Пт: 09:00–18:00, Сб: 10:00–15:00",
    formTitle: "Оставить заявку",
    formName: "Ваше имя",
    formPhone: "Телефон",
    formMessage: "Сообщение",
    formSubmit: "Отправить заявку",
    formNamePlaceholder: "Введите ваше имя",
    formPhonePlaceholder: "+998 (__) ___-__-__",
    formMessagePlaceholder: "Опишите ваш запрос...",

    // Footer
    footerDesc: "Профессиональное офтальмологическое оборудование для клиник и медицинских центров.",
    footerNav: "Навигация",
    footerProducts: "Продукция",
    footerContacts: "Контакты",
    footerCopy: "© 2024 ProfTexnoTrade. Все права защищены.",
    footerPrivacy: "Политика конфиденциальности",
    footerTerms: "Условия использования",

    // Product categories for footer
    footerProd1: "Диагностическое",
    footerProd2: "Хирургическое",
    footerProd3: "Оптическое",
    footerProd4: "Аксессуары",
    prodVideoBadge: "Видео",
  },

  uz: {
    navHome: "Bosh sahifa",
    navAbout: "Biz haqimizda",
    navProducts: "Katalog",
    navServices: "Xizmatlar",
    navContact: "Aloqa",
    navContactBtn: "Bog'lanish",

    heroBadge: "Oftalmologik uskunalar",
    heroTitle1: "Professional",
    heroTitle2: "tibbiy",
    heroTitle3: "uskunalar",
    heroDesc: "Dunyoning yetakchi ishlab chiqaruvchilaridan zamonaviy oftalmologik uskunalarni yetkazib berish. Diagnostika, davolash, jarrohlik — klinikalarni to'liq jihozlash.",
    heroBtnCatalog: "Mahsulotlar katalogi",
    heroBtnContact: "Maslahat olish",
    heroStat1Num: "500+",
    heroStat1Label: "Uskunalar soni",
    heroStat2Num: "15+",
    heroStat2Label: "Yillik tajriba",
    heroStat3Num: "200+",
    heroStat3Label: "Hamkor klinikalar",
    heroFloat1Title: "Sertifikatlangan",
    heroFloat1Value: "ISO 13485 | CE Mark",
    heroFloat2Title: "Kafolat",
    heroFloat2Value: "5 yilgacha",

    aboutLabel: "Nega biz",
    aboutTitle: "Klinikangiz uchun ishonchli hamkor",
    aboutSubtitle: "Biz to'liq xizmatlar doirasini taqdim etamiz — maslahatdan servis xizmatigacha",
    about1Title: "Original uskunalar",
    about1Desc: "Ishlab chiqaruvchilardan to'g'ridan-to'g'ri yetkazib berish. Barcha mahsulotlar sertifikatlangan.",
    about2Title: "Texnik yordam",
    about2Desc: "Muhandislar jamoasi o'rnatish, sozlash va klinika xodimlarini o'qitishni ta'minlaydi.",
    about3Title: "Tez yetkazib berish",
    about3Desc: "Butun mamlakat bo'ylab tezkor logistika. Mashhur modellarning ombor zaxirasi.",
    about4Title: "Servis xizmati",
    about4Desc: "Original ehtiyot qismlar bilan kafolatli va kafolatdan keyingi xizmat ko'rsatish.",

    productsLabel: "Katalog",
    productsTitle: "Oftalmologik uskunalar",
    productsSubtitle: "Diagnostika va davolash uchun professional uskunalarning keng assortimenti",
    searchPlaceholder: "🔍 Izlash...",
    filterAll: "Hammasi",
    filterRefraction: "Refraksiya",
    filterDiagnostic: "Diagnostika",
    filterSurgeryIOL: "Xirurgiya va IOL",
    filterLasers: "Oftalmologik lazerlar",
    filterLensEdger: "Linza kesish uskunalari",
    filterIndustrialEdger: "Sanoat linza uskunalari",
    filterPeripheral: "Periferik uskunalar",
    btnRequest: "Narx so'rash",


    categoryOphthalmicLasers: "Oftalmologik lazerlar",
    categorySurgicalIol: "Xirurgiya va IOL",
    categoryLensEdger: "Linza kesish uskunalari",
    categoryIndustrialEdger: "Sanoat linza uskunalari",
    categoryPeripheral: "Periferik uskunalar",
    categoryRefraction: "Refraksiya",
    categoryDiagnostic: "Diagnostika",
    placeholderCat: "Optika",
    placeholderDesc: "Batafsil ma'lumot tez kunda qo'shiladi.",
    placeholderImgText: "Tez kunda...",
    prod29Name: "Fakoemulsifikator Cube α",
    prod30Name: "Shox parda topografi OPD-Scan® III",
    prod31Name: "Ko'zguli mikroskop CEM-530",
    prod30Cat: "Diagnostika",
    prod30Desc: "Barcha shifokorlar uchun haqiqiy refraksion 5-in-1 ish stantsiyasi.",
    prod31Cat: "Diagnostika",
    prod31Desc: "2 soniyada tez tahlil bilan ko'p zonali oynali mikroskopiya.",
    prod32Cat: "Diagnostika",
    prod32Name: "Optik biometr AL-Scan",
    prod32Desc: "10 soniyada 6 ta klinik parametrni o'lchaydigan optik biometr.",
    prod33Cat: "Diagnostika",
    prod33Name: "Ultratovush tizimi US-4000",
    prod33Desc: "B-skanerlash, biometriya va paximetriyali ixcham ultratovush tizimi.",
    prod34Cat: "Diagnostika",
    prod34Name: "Ultratovush tizimi US-500",
    prod34Desc: "Biometriya, paximetriya va sensorli ekranli ixcham ultratovush tizimi.",
    prod35Cat: "Jarrohlik",
    prod35Name: "Fakoemulsifikator Cube α",
    prod35Desc: "Katarakta jarrohligiga mo'ljallangan ixcham va kuchli platforma.",
    prod36Cat: "Oftalmologik lazerlar",
    prod36Name: "Retinal fotokoagulyatsiya lazeri GYC-500",
    prod36Desc: "To'r parda fotokoagulyatsiyasi uchun yashil lazer.",
    prod37Cat: "Oftalmologik lazerlar",
    prod37Name: "Trabekuloplastika lazeri YC-200 S plus",
    prod37Desc: "Trabekuloplastika va kapsulotomiya uchun lazer.",
    prod38Name: "Linza kesish uskunasi ME-1",
    prod39Name: "Linza shaklini aniqlash tizimi LEXCE PLUS TREND8",
    prod40Name: "Sanoat linza kesish uskunasi MSE-1",
    prod41Name: "Sanoat linza kesish uskunasi SE-9090 SUPRA",
    prod42Name: "Sanoat linza kesish uskunasi SE-9090 SUPRA L",
    prod43Name: "Sanoat linza kesish uskunasi AES-2200",
    prod44Name: "Sanoat linza kesish uskunasi AES-1000",
    prod40Desc: "Gibrid tizim: yuqori tezlikdagi frezalash va aniq silliqlash.",
    prod41Desc: "Ikkita shpindel tizimi bilan tezkor ishlash.",
    prod43Desc: "NICS konveyerli avtomatik laboratoriya tizimi.",
    prod44Desc: "Kichik optik laboratoriyalar uchun ajoyib moslashuvchanlik.",
    prod45Name: "Linza blokirovka tizimi ICE-1500",
    prod46Name: "Markazlashtiruvchi uskuna CE-9",
    prod47Name: "Opaq shaklini skanerlash tizimi LT-1200",
    prod48Name: "Opaq shaklini skanerlash tizimi LT-980",
    prod45Desc: "Avtomatik linzani o'lchash va blokirovka qilish tizimi.",
    prod46Desc: "Optik linzalarni markazlashtiruvchi ixcham uskuna.",
    prod47Desc: "Ko'p funksiyali laboratoriya va veb-skaner, avtomatik 3D skanerlash.",
    prod48Desc: "Avtomatik 3D skanerlash va bir teginishli demo linza ushlagichi.",
    prod1Name: "PHANTOM™ Refraksiya Tizimi",
    prod1Cat: "Diagnostika",
    prod1Desc: "Jismoniy linzalarsiz ochiq maydonli binokulyar refraksiya tizimi. Virtual simulyatsiya va suzuvchi jadvallar.",
    prod2Name: "Slit Lamp",
    prod2Cat: "Diagnostika",
    prod2Desc: "Professional oftalmologik tekshiruv uskunasi. Ko‘zning old va ichki qismlarini yuqori aniqlikda tekshirish uchun.",
    prodVideoBadge: "Video",
    prod3Name: "Lensmeter",
    prod3Cat: "Diagnostika",
    prod3Desc: "Ko'zoynak linzalarining optik parametrlarini aniq o'lchash uchun professional uskuna.",
    prod4Name: "Phoropter",
    prod4Cat: "Diagnostika",
    prod4Desc: "Bemorni ko'rish darajasini aniqlash uchun professional oftalmologik qurilma.",
    prod5Name: "Tonometr NT-1 / NT-1p",
    prod5Cat: "Diagnostika",
    prod5Desc: "Ishonchli paximetriya funksiyasiga ega to'liq avtomatlashtirilgan kontaktsiz tonometr.",
    prod6Name: "Optik biometr (AL-Scan)",
    prod6Cat: "Diagnostika",
    prod6Desc: "Katarakta jarrohligi uchun 10 soniyada 6 ta klinik parametrni o'lchash uskunasi.",
    prod7Name: "Topograf va refraktometr OPD-Scan III VS",
    prod7Cat: "Diagnostika",
    prod7Desc: "Topograf va refraktometr bilan jihozlangan kompleks ko'rish tahlili qurilmasi.",
    prod8Name: "Avtomatik keratometr KR-800",
    prod8Cat: "Diagnostika",
    prod8Desc: "Shox pardaning egriligini o'lchash. Kontakt linzalarni tanlash va IOL hisoblash uchun zarur.",
    prod9Name: "Avtomatik oftalmologik refraktor RT-6100",
    prod9Cat: "Diagnostika",
    prod9Desc: "10.4 dyuymli ekranga ega aniq va samarali tekshiruvlar uchun ilg'or refraktor.",
    prod10Name: "Avtomatik keratorefraktometr HandyRef-K",
    prod10Cat: "Diagnostika",
    prod10Desc: "Istalgan vaqtda va istalgan joyda portativ o'lchovlar. Innovatsion funksiyalar yordamida foydalanish qulayligi yaxshilangan.",
    prod11Name: "Oftalmologik lazer YAG-3",
    prod11Cat: "Jarrohlik",
    prod11Desc: "Kapsulotomiya va iridotomiya uchun YAG-lazer. Birlashtirilgan tirik lampa.",
    prod12Name: "Fakoemulsifikator Phaco-Elite",
    prod12Cat: "Jarrohlik",
    prod12Desc: "Kataraktaning ultratovushli fakoemulsifikatsiyasi. Oqim va vakuumni boshqarish tizimi.",
    prod13Name: "Argon lazer GreenBeam-532",
    prod13Cat: "Jarrohlik",
    prod13Desc: "To'r pardani koagulyatsiya qilish uchun 532 nm yashil lazer. Programlanuvchi naqshlar.",
    prod14Name: "Vitreoretinal tizim VR-Pro",
    prod14Cat: "Jarrohlik",
    prod14Desc: "Vitreoretinal jarrohlik uchun kompleks tizim. Yuqori tezlikdagi vitrektomiya.",
    prod15Name: "Operatsion mikroskop OM-19",
    prod15Cat: "Jarrohlik",
    prod15Desc: "Koaksial yoritish va RedReflex bilan premium operatsion mikroskop.",
    prod16Name: "A/B skan ultrasonograf UBM-800",
    prod16Cat: "Diagnostika",
    prod16Desc: "Ko'zning ultratovushli A/B skanlanishi. Biometriya va orqa segmentni tasvirlash.",
    prod17Name: "Belgilar proyektori CP-500",
    prod17Cat: "Optika",
    prod17Desc: "Masofadan boshqariladigan LED belgilar proyektori. 30+ test jadvallari.",
    prod18Name: "Oftalmologik kreslo OC-2400",
    prod18Cat: "Aksessuarlar",
    prod18Desc: "Balandlikni silliq sozlaydigan elektr kreslo. Refraksion stol bilan birlashtiriladi.",
    prod19Name: "Sinov linzalar to'plami TL-266",
    prod19Cat: "Optika",
    prod19Desc: "Alyuminiy futlardagi 266 ta linzadan iborat to'liq to'plam. Sferik, silindrik, prizmalar.",
    prod20Name: "Endolazer Endo-Pro 810",
    prod20Cat: "Jarrohlik",
    prod20Desc: "Retinal koagulyatsiya uchun 810 nm endolazer.",

    // Modal
    modalFeaturesLabel: "Asosiy imkoniyatlari",
    modalAdvantagesLabel: "Qurilmaning afzalliklari",
    modalSpecsLabel: "Texnik xususiyatlari",
    modalOrderBtn: "Buyurtma berish",

    prodBadgeNew: "Yangi",
    prodBadgeHit: "Xit",

    servicesLabel: "Xizmatlar",
    servicesTitle: "Jihozlashga kompleks yondashuv",
    servicesSubtitle: "Biz mijozni har bir bosqichda kuzatib boramiz — uskunani tanlashdan ishga tushirishgacha",
    serv1Title: "Maslahat va tanlash",
    serv1Desc: "Mutaxassislarimiz klinikangiz vazifalari va byudjetiga mos optimal uskunani tanlashga yordam beradi.",
    serv2Title: "Yetkazib berish va o'rnatish",
    serv2Desc: "Professional yetkazib berish, ochish, o'rnatish va uskunalarni joyida kalibrlash.",
    serv3Title: "Xodimlarni o'qitish",
    serv3Desc: "Shifokorlar va tibbiy xodimlarni yangi uskunalar bilan ishlashga to'liq o'qitish.",
    serv4Title: "Kafolatli servis",
    serv4Desc: "5 yilgacha kengaytirilgan kafolat. Har qanday nosozlikda muhandisning tezkor chiqishi.",
    serv5Title: "Ehtiyot qismlar",
    serv5Desc: "Original ehtiyot qismlar va sarf materiallari. Eng ko'p talab qilinadigan pozitsiyalar ombori.",
    serv6Title: "Trade-in dasturi",
    serv6Desc: "Eski uskunani yangisiga qiymatini hisobga olgan holda almashish. Texnik parkni foydali yangilang.",

    contactLabel: "Aloqa",
    contactTitle: "Biz bilan bog'laning",
    contactSubtitle: "Biz barcha savollaringizga javob berishga va uskunalarni tanlashda yordam berishga tayyormiz",
    contactPhone: "Telefon",
    contactPhoneVal: "+998 93 171 22 02",
    contactEmail: "Elektron pochta",
    contactEmailVal: "info@proftexnotrade.uz",
    contactTelegram: "Telegram Admin",
    contactAddress: "Manzil",
    contactAddressVal: "Toshkent shahari Mirobod tumani Birodarlik M.F.Y Eltuzar 58A uy",
    contactWorkHours: "Ish vaqti",
    contactWorkHoursVal: "Du–Ju: 09:00–18:00, Sha: 10:00–15:00",
    formTitle: "Ariza qoldirish",
    formName: "Ismingiz",
    formPhone: "Telefon",
    formMessage: "Xabar",
    formSubmit: "Arizani yuborish",
    formNamePlaceholder: "Ismingizni kiriting",
    formPhonePlaceholder: "+998 (__) ___-__-__",
    formMessagePlaceholder: "So'rovingizni yozing...",

    footerDesc: "Klinikalar va tibbiyot markazlari uchun professional oftalmologik uskunalar.",
    footerNav: "Navigatsiya",
    footerProducts: "Mahsulotlar",
    footerContacts: "Aloqa",
    footerCopy: "© 2024 ProfTexnoTrade. Barcha huquqlar himoyalangan.",
    footerPrivacy: "Maxfiylik siyosati",
    footerTerms: "Foydalanish shartlari",
    footerProd1: "Diagnostik",
    footerProd2: "Jarrohlik",
    footerProd3: "Optik",
    footerProd4: "Aksessuarlar",
  },

  en: {
    navHome: "Home",
    navAbout: "About",
    navProducts: "Catalog",
    navServices: "Services",
    navContact: "Contact",
    navContactBtn: "Get in Touch",

    heroBadge: "Ophthalmic Equipment",
    heroTitle1: "Professional",
    heroTitle2: "medical",
    heroTitle3: "equipment",
    heroDesc: "Supply of modern ophthalmic equipment from leading global manufacturers. Diagnostics, treatment, surgery вЂ” complete clinic outfitting.",
    heroBtnCatalog: "Product Catalog",
    heroBtnContact: "Get Consultation",
    heroStat1Num: "500+",
    heroStat1Label: "Equipment Units",
    heroStat2Num: "15+",
    heroStat2Label: "Years of Experience",
    heroStat3Num: "200+",
    heroStat3Label: "Partner Clinics",
    heroFloat1Title: "Certified",
    heroFloat1Value: "ISO 13485 | CE Mark",
    heroFloat2Title: "Warranty",
    heroFloat2Value: "up to 5 years",

    aboutLabel: "Why Us",
    aboutTitle: "Reliable Partner for Your Clinic",
    aboutSubtitle: "We provide a full range of services вЂ” from consultation to maintenance",
    about1Title: "Original Equipment",
    about1Desc: "Direct supplies from manufacturers. All products are certified with quality guarantee.",
    about2Title: "Technical Support",
    about2Desc: "Team of engineers ensures installation, setup, and training of your clinic staff.",
    about3Title: "Fast Delivery",
    about3Desc: "Efficient logistics across the country. Stock availability of popular equipment models.",
    about4Title: "Service Maintenance",
    about4Desc: "Warranty and post-warranty service with original spare parts.",

    productsLabel: "Catalog",
    productsTitle: "Ophthalmic Equipment",
    productsSubtitle: "Wide range of professional equipment for diagnostics and treatment",
    searchPlaceholder: "🔍 Search...",
    filterAll: "All",
    filterRefraction: "Refraction",
    filterDiagnostic: "Diagnostics",
    filterSurgeryIOL: "Surgery and IOL",
    filterLasers: "Ophthalmic Lasers",
    filterLensEdger: "Lens Edgers",
    filterIndustrialEdger: "Industrial Lens Equipment",
    filterPeripheral: "Peripheral Equipment",
    btnRequest: "Request Price",


    categoryOphthalmicLasers: "Ophthalmic Lasers",
    categorySurgicalIol: "Surgical & IOL",
    categoryLensEdger: "Lens Edger",
    categoryIndustrialEdger: "Industrial Edger",
    categoryPeripheral: "Peripheral",
    categoryRefraction: "Refraction",
    categoryDiagnostic: "Diagnostics",
    placeholderCat: "Optical",
    placeholderDesc: "Information will be added soon.",
    placeholderImgText: "Coming soon...",
    prod29Name: "Phacoemulsifier Cube α",
    prod30Name: "Corneal Topographer OPD-Scan® III",
    prod31Name: "Specular Microscope CEM-530",
    prod30Cat: "Diagnostics",
    prod30Desc: "The true refractive workstation 5-in-1 for all physicians.",
    prod31Cat: "Diagnostics",
    prod31Desc: "Multi-zone specular microscopy with rapid 2-second analysis.",
    prod32Cat: "Diagnostics",
    prod32Name: "Optical biometer AL-Scan",
    prod32Desc: "Optical biometer measuring 6 clinical parameters in 10 seconds.",
    prod33Cat: "Diagnostics",
    prod33Name: "Ultrasound system US-4000",
    prod33Desc: "Compact ultrasound system with B-scan, biometry and pachymetry.",
    prod34Cat: "Diagnostics",
    prod34Name: "Ultrasound system US-500",
    prod34Desc: "Compact ultrasound system with biometry, pachymetry and touch screen.",
    prod35Cat: "Surgery",
    prod35Name: "Phacoemulsifier Cube α",
    prod35Desc: "Compact and powerful platform for cataract surgery.",
    prod36Cat: "Ophthalmic Lasers",
    prod36Name: "Retinal Photocoagulation Laser GYC-500",
    prod36Desc: "Green laser for retinal photocoagulation.",
    prod37Cat: "Ophthalmic Lasers",
    prod37Name: "Trabeculoplasty Laser YC-200 S plus",
    prod37Desc: "Laser for trabeculoplasty and capsulotomy.",
    prod38Name: "Optical Lens Edger ME-1",
    prod39Name: "Optical Lens Shape Tracer LEXCE PLUS TREND8",
    prod40Name: "Optical Lens Edger MSE-1",
    prod41Name: "Optical Lens Edger SE-9090 SUPRA",
    prod42Name: "Optical Lens Edger SE-9090 SUPRA L",
    prod43Name: "Optical Lens Edger AES-2200",
    prod44Name: "Optical Lens Edger AES-1000",
    prod40Desc: "Hybrid edging system combining a high-speed milling tool and precision grinding.",
    prod41Desc: "Faster grinding with dual spindle system and simultaneous measurement.",
    prod43Desc: "Automatic lab system combining RHU-2200 and two units of SE-9090.",
    prod44Desc: "Single unit system with great adaptability for small edging laboratories.",
    prod45Name: "Optical Lens Blocker ICE-1500",
    prod46Name: "Optical Lens Centering Device CE-9",
    prod47Name: "Optical Lens Shape Tracer LT-1200",
    prod48Name: "Optical Lens Shape Tracer LT-980",
    prod45Desc: "Automatic lens measurement and blocking with multifunction mechanism.",
    prod46Desc: "Optical lens centering device with a compact and stylish design.",
    prod47Desc: "Multifunction lab tracer and web tracer with 3D tracing.",
    prod48Desc: "Automatic 3D binocular tracing and one-touch demo lens holder.",
    prod1Name: "PHANTOM™ Refraction System",
    prod1Cat: "Diagnostics",
    prod1Desc: "Open-field binocular refraction system without physical lenses. Virtual simulation and floating charts.",
    prod2Name: "Slit Lamp",
    prod2Cat: "Diagnostics",
    prod2Desc: "Professional ophthalmic examination equipment. For high-precision examination of the anterior and interior segments of the eye.",
    prod3Name: "Lensmeter",
    prod3Cat: "Diagnostics",
    prod3Desc: "Professional equipment for accurate measurement of eyeglass lens parameters.",
    prod4Name: "Phoropter",
    prod4Cat: "Diagnostics",
    prod1Name: "PHANTOM™ Refraction System",
    prod1Cat: "Diagnostics",
    prod1Desc: "Open-field binocular refraction system without physical lenses. Virtual simulation and floating charts.",
    prod2Name: "Slit Lamp",
    prod2Cat: "Diagnostics",
    prod2Desc: "Professional ophthalmic examination equipment. For high-precision examination of the anterior and interior segments of the eye.",
    prod3Name: "Lensmeter",
    prod3Cat: "Diagnostics",
    prod3Desc: "Professional equipment for accurate measurement of eyeglass lens parameters.",
    prod4Name: "Phoropter",
    prod4Cat: "Diagnostics",
    prod4Desc: "Professional ophthalmic device for determining the patient's visual acuity.",
    prod5Name: "Tonometer NT-1 / NT-1p",
    prod5Cat: "Diagnostics",
    prod5Desc: "Fully automated non-contact tonometer with reliable pachymetry function.",
    prod6Name: "Optical Biometer (AL-Scan)",
    prod6Cat: "Diagnostics",
    prod6Desc: "Measures 6 clinical parameters for cataract surgery in just 10 seconds.",
    prod7Name: "Topographer and Refractometer OPD-Scan III VS",
    prod7Cat: "Diagnostics",
    prod7Desc: "A device for comprehensive vision analysis with topographer and refractometer.",
    prod8Name: "Auto Keratometer KR-800",
    prod8Cat: "Diagnostics",
    prod8Desc: "Corneal curvature measurement. Essential for contact lens fitting and IOL calculation.",
    prod9Name: "Automatic Ophthalmic Refractor RT-6100",
    prod9Cat: "Diagnostics",
    prod9Desc: "Advanced refractor for accurate and efficient examinations with a 10.4-inch screen.",
    prod10Name: "Automated Keratometer HandyRef-K",
    prod10Cat: "Diagnostics",
    prod10Desc: "Portable measurements anytime, anywhere. Improved usability through innovative features.",
    prod11Name: "Monitor-optotype SSC-370",
    prod11Cat: "Optical",
    prod11Desc: "Compact chart with selectable installation distance and refractor integration.",
    prod12Name: "Auto Lensmeter LM-1800PD",
    prod12Cat: "Optical",
    prod12Desc: "Hartmann sensor with 108 measurement points and distortion check function.",
    prod13Name: "Digital Pupillometer PM-700",
    prod13Cat: "Optical",
    prod13Desc: "Automatic PD calculation with a single measurement. Stable and ergonomic design.",
    prod14Name: "Vitreoretinal System VR-Pro",
    prod14Cat: "Surgery",
    prod14Desc: "Comprehensive vitreoretinal surgery system. High-speed vitrectomy.",
    prod15Name: "Surgical Microscope OM-19",
    prod15Cat: "Surgery",
    prod15Desc: "Premium surgical microscope with coaxial illumination and RedReflex.",
    prod16Name: "A/B Scan Ultrasound UBM-800",
    prod16Cat: "Diagnostics",
    prod16Desc: "Ophthalmic A/B ultrasound scanning. Biometry and posterior segment imaging.",
    prod17Name: "Chart Projector CP-500",
    prod17Cat: "Optical",
    prod17Desc: "LED chart projector with remote control. 30+ test charts included.",
    prod18Name: "Ophthalmic Chair OC-2400",
    prod18Cat: "Accessories",
    prod18Desc: "Electric chair with smooth height adjustment. Combinable with refraction table.",
    prod19Name: "Trial Lens Set TL-266",
    prod19Cat: "Optical",
    prod19Desc: "Complete set of 266 lenses in aluminum case. Spherical, cylindrical, prisms.",
    prod20Name: "Endolaser Endo-Pro 810",
    prod20Cat: "Surgery",
    prod20Desc: "810nm diode endolaser for intraoperative retinal laser photocoagulation.",

    // Modal
    modalFeaturesLabel: "Main Features",
    modalAdvantagesLabel: "Advantages",
    modalSpecsLabel: "Technical Specifications",
    modalOrderBtn: "Order Now",

    prodBadgeNew: "New",
    prodBadgeHit: "Hot",

    servicesLabel: "Services",
    servicesTitle: "Comprehensive Equipment Solutions",
    servicesSubtitle: "We accompany our clients at every stage — from equipment selection to commissioning",
    serv1Title: "Consultation & Selection",
    serv1Desc: "Our experts will help you choose the optimal equipment for your clinic's needs and budget.",
    serv2Title: "Delivery & Installation",
    serv2Desc: "Professional delivery, unpacking, installation, and on-site calibration.",
    serv3Title: "Staff Training",
    serv3Desc: "Complete training of doctors and medical staff on new equipment operation.",
    serv4Title: "Warranty Service",
    serv4Desc: "Extended warranty up to 5 years. Prompt engineer dispatch for any malfunction.",
    serv5Title: "Spare Parts",
    serv5Desc: "Original spare parts and consumables. Stock of most demanded items.",
    serv6Title: "Trade-in Program",
    serv6Desc: "Exchange old equipment for new with value credit. Upgrade your equipment fleet profitably.",

    contactLabel: "Contact",
    contactTitle: "Get in Touch",
    contactSubtitle: "We're ready to answer all your questions and help with equipment selection",
    contactPhone: "Phone",
    contactPhoneVal: "+998 93 171 22 02",
    contactEmail: "Email",
    contactEmailVal: "info@proftexnotrade.uz",
    contactTelegram: "Telegram Admin",
    contactAddress: "Address",
    contactAddressVal: "Tashkent, Mirabad district, Birodarlik MCA, Eltuzar str., 58A",
    contactWorkHours: "Working Hours",
    contactWorkHoursVal: "Mon–Fri: 09:00–18:00, Sat: 10:00–15:00",
    formTitle: "Send a Request",
    formName: "Your Name",
    formPhone: "Phone",
    formMessage: "Message",
    formSubmit: "Submit Request",
    formNamePlaceholder: "Enter your name",
    formPhonePlaceholder: "+998 (__) ___-__-__",
    formMessagePlaceholder: "Describe your request...",

    footerDesc: "Professional ophthalmic equipment for clinics and medical centers.",
    footerNav: "Navigation",
    footerProducts: "Products",
    footerContacts: "Contact",
    footerCopy: "© 2024 ProfTexnoTrade. All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Use",
    footerProd1: "Diagnostic",
    footerProd2: "Surgical",
    footerProd3: "Optical",
    footerProd4: "Accessories",
    prodVideoBadge: "Video"
  }
};

// ==================== CURRENT LANGUAGE ====================
let currentLang = 'ru';

// ==================== SET LANGUAGE ====================
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update product filter buttons text
  updateFilterText(lang);

  // Update meta description
  updateMeta(lang);
  
  // Refresh product page if we are on it
  if (window.location.pathname.includes('product.html')) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id) {
      renderProductPage(id);
    }
  }
}

function updateMeta(lang) {
  const desc = document.querySelector('meta[name="description"]');
  if (desc) {
    const descriptions = {
      ru: "ProfTexnoTrade — поставка профессионального офтальмологического оборудования. Диагностика, хирургия, оптика для клиник.",
      uz: "ProfTexnoTrade — professional oftalmologik uskunalar yetkazib berish. Diagnostika, jarrohlik, optika.",
      en: "ProfTexnoTrade — supply of professional ophthalmic equipment. Diagnostics, surgery, optics for clinics."
    };
    desc.content = descriptions[lang] || descriptions.ru;
  }
}

function updateFilterText(lang) {
  // filter buttons are also translated via data-i18n, handled above
}

// ==================== PRODUCT FILTER ====================
function filterProducts(category) {
  // Update active filter button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });

  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const cardCat = card.dataset.category;
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
      card.style.animation = 'fadeInUp 0.5s ease forwards';
    } else {
      card.style.display = 'none';
    }
  });
}

// ==================== HEADER SCROLL ====================
function handleScroll() {
  const header = document.querySelector('.header');
  const scrollTop = document.querySelector('.scroll-top');

  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  if (window.scrollY > 600) {
    scrollTop.classList.add('visible');
  } else {
    scrollTop.classList.remove('visible');
  }
}

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-mobile');
  toggle.classList.toggle('active');
  nav.classList.toggle('open');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
}

function closeMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-mobile');
  toggle.classList.remove('active');
  nav.classList.remove('open');
  document.body.style.overflow = '';
}

// ==================== SCROLL TO TOP ====================
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== SCROLL REVEAL ====================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ==================== SMOOTH SCROLL FOR NAV LINKS ====================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const mobileNav = document.querySelector('.nav-mobile');
        const menuToggle = document.querySelector('.menu-toggle');
        if (mobileNav && mobileNav.classList.contains('active')) {
          mobileNav.classList.remove('active');
          menuToggle.classList.remove('active');
        }
      }
    });
  });
}

// ==================== COUNTER ANIMATION ====================
function animateCounters() {
  const counters = document.querySelectorAll('.hero-stat .number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent;
        const match = text.match(/(\d+)/);
        if (match) {
          const target = parseInt(match[1]);
          const suffix = text.replace(match[1], '');
          let current = 0;
          const increment = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.innerHTML = current + '<span>' + suffix.replace(target.toString(), '') + '</span>';
          }, 30);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ==================== HERO PARTICLES ====================
function initHeroParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width, height, particles;
  
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = document.querySelector('.hero').offsetHeight;
  }
  
  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.fill();
    }
  }
  
  let mouse = { x: null, y: null };
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });
  
  function init() {
    resize();
    particles = [];
    const count = window.innerWidth > 768 ? 60 : 30;
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.2 - dist/600})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
      
      if (mouse.x != null) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.4 - dist/375})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  
  window.addEventListener('resize', resize);
  init();
  animate();
}
// ==================== HERO PARTICLES ====================
// ... (particles code exists above) ...

// ==================== PRODUCT MODAL LOGIC ====================
window.productData = {

  'cube-alpha': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568332.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568333.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568331.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568338.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568341.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568342.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568345.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20510870.webp',
      'https://video.medicalexpo.com/video_me/videos/video-121858.mp4'
    ],
    uz: {
      title: 'Phacoemulsifier Cube α',
      subtitle: 'Katarakta jarrohligi uchun kuchli va ixcham ultratovush tizimi',
      description: 'Cube α - bu katarakta jarrohligi uchun mo\'ljallangan fakoemulsifikator tizimi. U yuqori unumdorlik va qulay dizaynni o\'zida jamlab, jarrohlarga barqaror hamda xavfsiz amaliyot o\'tkazish imkonini beradi.',
      features: [
        'Gyros torsional (Aylanma) fako texnologiyasi orqali ultratovush energiyasini boshqarish',
        'Kichik va joy tejovchi ixcham dizayn',
        'Ko\'p funksiyali va intuitiv sensorli ekran',
        'Kengaytirilgan suyuqlik dinamikasi',
        'Ishlatishga qulay simsiz oyoq pedali'
      ],
      advantages: [
        '<strong>Barqarorlik:</strong> Kichik hajmli asboblar bilan ishlaganda ham barqaror bosimni ta\'minlaydi.',
        '<strong>Aniqlik:</strong> Qattiq va yumshoq linza to\'qimalarini samarali va xavfsiz parchalaydi.',
        '<strong>Mobillik:</strong> Uskunaning yengil va ixchamligi uni istalgan joyga osongina joylashtirish imkonini beradi.'
      ],
      specs: {
        'Turi': 'Fakoemulsifikator (Katarakta)',
        'Texnologiya': 'Gyro torsional',
        'O\'rnatish': 'Stol usti / Portativ'
      }
    },
    ru: {
      title: 'Phacoemulsifier Cube α',
      subtitle: 'Мощная и компактная ультразвуковая система для хирургии катаракты',
      description: 'Cube α — это система факоэмульсификации, предназначенная для хирургии катаракты. Она сочетает в себе высокую производительность и удобный дизайн, обеспечивая хирургам стабильную и безопасную работу.',
      features: [
        'Технология торсионного фако (Gyros torsional) для управления ультразвуковой энергией',
        'Компактный дизайн, экономящий пространство',
        'Многофункциональный интуитивно понятный сенсорный экран',
        'Улучшенная гидродинамика',
        'Удобная беспроводная ножная педаль'
      ],
      advantages: [
        '<strong>Стабильность:</strong> Обеспечивает стабильное давление даже при работе с инструментами малого объема.',
        '<strong>Точность:</strong> Эффективно и безопасно фрагментирует плотные и мягкие ткани хрусталика.',
        '<strong>Мобильность:</strong> Легкость и компактность позволяют легко разместить устройство в любом месте.'
      ],
      specs: {
        'Тип': 'Факоэмульсификатор (Катаракта)',
        'Технология': 'Gyro torsional',
        'Установка': 'Настольная / Портативная'
      }
    },
    en: {
      title: 'Phacoemulsifier Cube α',
      subtitle: 'Powerful and compact ultrasound system for cataract surgery',
      description: 'The Cube α is a phacoemulsification system designed for cataract surgery. It combines high performance with a user-friendly design, providing surgeons with stable and safe operation.',
      features: [
        'Gyros torsional phaco technology for ultrasound energy control',
        'Small, space-saving compact design',
        'Multifunctional intuitive touchscreen display',
        'Enhanced fluidics dynamics',
        'Easy-to-use wireless foot pedal'
      ],
      advantages: [
        '<strong>Stability:</strong> Maintains stable pressure even when working with low-volume instruments.',
        '<strong>Precision:</strong> Efficiently and safely fragments hard and soft lens tissues.',
        '<strong>Mobility:</strong> Its light and compact nature allows it to be easily placed anywhere.'
      ],
      specs: {
        'Type': 'Phacoemulsifier (Cataract)',
        'Technology': 'Gyro torsional',
        'Setup': 'Tabletop / Portable'
      }
    }
  },
  'gyc-500': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511105.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511106.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511107.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511119.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511121.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511132.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511133.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511134.webp'
    ],
    uz: {
      title: 'Retinal photocoagulation laser GYC-500',
      subtitle: 'Barqaror va ishonchli yashil lazer',
      description: 'GYC-500 Vixi / GYC-500 qattiq holatdagi lazerdan foydalanib, barqaror lazer chiqishini ta\'minlaydi. Kichik konsolga joylashtirilgan ushbu ko\'p funksiyali lazer har qanday xonada bemalol foydalanish uchun ixcham dizaynga ega.',
      features: [
        'Barqaror va ishonchli yashil lazer',
        'Yengil va ixcham dizayn',
        'Bir nechta skanerlash naqshlari (GYC-500 Vixi uchun)',
        'Avtomatik oldinga siljish (Auto forward)',
        'Turli xil yetkazib berish qurilmalarini tanlash imkoniyati'
      ],
      advantages: [
        '<strong>Barqarorlik:</strong> Ikkita sovutish ventilyatori to\'g\'ri ichki haroratni saqlab turadi.',
        '<strong>Portativlik:</strong> Joyni tejaydigan dizayn deyarli har qanday xonaga ko\'chirish imkonini beradi.',
        '<strong>Samaradorlik:</strong> 22 ta oldindan dasturlashtirilgan skanerlash naqshlari davolash samaradorligini oshiradi va bemorning o\'tirish vaqtini qisqartiradi.',
        '<strong>Avtomatik o\'tish:</strong> Takroriy rejim tufayli shifokor doimiy ravishda oyoq tugmasini bosmasdan e\'tiborni fokusni sozlashga qaratadi.'
      ],
      specs: {
        'Qo\'llanilishi': 'To\'r pardasi fotokoagulyatsiyasi',
        'Kuchaytiruvchi muhit': 'Nd:YAG',
        'O\'rnatish': 'Stol usti (tabletop)',
        'To\'lqin uzunligi': '532 nm',
        'O\'rtacha quvvat': 'Min.: 0.05 Vt, Maks.: 1.7 Vt',
        'Og\'irligi': '6.2 kg (13.67 lb)'
      }
    },
    ru: {
      title: 'Retinal photocoagulation laser GYC-500',
      subtitle: 'Стабильный и надежный зеленый лазер',
      description: 'GYC-500 Vixi / GYC-500 обеспечивает стабильный выход лазера благодаря использованию твердотельного лазера. Этот многофункциональный лазер помещен в небольшую консоль. Компактный дизайн позволяет использовать его практически в любом кабинете.',
      features: [
        'Стабильный и надежный зеленый лазер',
        'Легкий и компактный дизайн',
        'Множество паттернов сканирования (для GYC-500 Vixi)',
        'Автоматическое продвижение (Auto forward)',
        'Широкий выбор подключаемых модулей доставки'
      ],
      advantages: [
        '<strong>Стабильность:</strong> Два охлаждающих вентилятора в консоли поддерживают правильную внутреннюю температуру.',
        '<strong>Эргономика:</strong> Эндофотозонды могут быть подключены к GYC-500 для упрощения настройки и процедур.',
        '<strong>Эффективность:</strong> 22 запрограммированных паттерна сканирования повышают эффективность лечения и сокращают время пребывания пациента.',
        '<strong>Автоматизация:</strong> Режим повторения с функцией автоматического продвижения позволяет обрабатывать последовательные участки без повторного нажатия педали.'
      ],
      specs: {
        'Применение': 'Фотокоагуляция сетчатки',
        'Усиливающая среда': 'Nd:YAG',
        'Форм-фактор': 'Настольный (tabletop)',
        'Длина волны': '532 нм',
        'Средняя мощность': 'Мин.: 0.05 Вт, Макс.: 1.7 Вт',
        'Вес': '6.2 кг (13.67 фунтов)'
      }
    },
    en: {
      title: 'Retinal photocoagulation laser GYC-500',
      subtitle: 'Stable and reliable green laser',
      description: 'The GYC-500 Vixi / GYC-500 ensures stable laser output by using a solid state laser. Two cooling fans in the console maintain the correct internal temperature. This multifunction laser is housed in a small console allowing portability to virtually any room.',
      features: [
        'Stable and reliable green laser',
        'Lightweight and compact design',
        'Multiple scan patterns (available for the GYC-500 Vixi)',
        'Auto forward (available for the GYC-500 Vixi)',
        'Wide range of selectable delivery units'
      ],
      advantages: [
        '<strong>Compact:</strong> The space-saving design allows portability. Endophoto probes can be connected to simplify setup.',
        '<strong>Combo unit:</strong> The optional GYC-500 combination delivery unit enhances the clinical versatility of the YC-200 S plus / YC-200.',
        '<strong>Multiple patterns:</strong> There are 22 preprogrammed scan patterns to allow treatment of varying retinal pathologies.',
        '<strong>Auto forward:</strong> Repeat mode with the auto forward function enables consecutive regions to undergo photocoagulation on a selected path without repeatedly pressing the foot switch.'
      ],
      specs: {
        'Applications': 'retinal photocoagulation',
        'Amplifying medium': 'Nd:YAG',
        'Ergonomics': 'tabletop',
        'Wavelength': '532 nm',
        'Average power': 'Min.: 0.05 W, Max.: 1.7 W',
        'Weight': '6.2 kg (13.67 lb)'
      }
    }
  },
  'yc-200-s-plus': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-19550464.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20510901.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20510902.webp',
      'https://video.medicalexpo.com/video_me/videos/video-107278.mp4'
    ],
    uz: {
      title: 'Trabeculoplasty laser YC-200 S plus',
      subtitle: 'Tozalangan va kam energiya bilan ishlovchi ilg\'or lazer',
      description: 'YC-200 S plus havodagi 1.6 mJ plazma chegarasiga erishib, kam energiya bilan aniq va ishonchli davolashni ta\'minlaydi. Shuningdek, ilg\'or SLT rejimini taklif etadi.',
      features: [
        'Kam energiya bilan takomillashtirilgan lazer yetkazib berish',
        'SLT (Selektiv Lazer Trabekuloplastika) rejimi',
        'Aniq va tiniq ko\'rish maydoni',
        'Aniq yo\'naltiruvchi nur (Aiming beam)',
        'Optimallashtirilgan ish masofasi',
        'Noyob joystik'
      ],
      advantages: [
        '<strong>SLT-NAVI:</strong> Lazer bilan davolash jarayonini intuitiv ko\'rsatib, jarrohga muhim ma\'lumot beradi.',
        '<strong>Aniq ko\'rish maydoni:</strong> Yaxshilangan optik dizayn rezolyutsiya va kontrastni optimallashtiradi. Noyob LED yoritish tizimi aberatsiyani kamaytiradi.',
        '<strong>Aniq nur yo\'naltirish:</strong> Motorlashtirilgan 360° aylanadigan yo\'naltiruvchi nur korneal xiraliklarni chetlab o\'tadi.',
        '<strong>Optimallashtirilgan masofa:</strong> Qisqa ish masofasi davolash paytida jarroh charchog\'ini kamaytiradi.'
      ],
      specs: {
        'Qo\'llanilishi': 'Trabekuloplastika, kapsulotomiya',
        'Kuchaytiruvchi muhit': 'Nd:YAG',
        'O\'rnatish': 'Stol usti (tabletop)',
        'Impuls davomiyligi': 'Nanosoniya (nanosecond)',
        'To\'lqin uzunligi': '532 nm, 1,064 nm',
        'Og\'irligi': '18 kg (39.68 lb)'
      }
    },
    ru: {
      title: 'Trabeculoplasty laser YC-200 S plus',
      subtitle: 'Точный лазер с низким потреблением энергии',
      description: 'YC-200 S plus достигает порога плазмы 1,6 мДж в воздухе, обеспечивая точное и надежное лечение при более низкой энергии. Аппарат предлагает передовой режим SLT.',
      features: [
        'Улучшенная подача лазера с меньшей энергией',
        'Режим SLT (Селективная лазерная трабекулопластика)',
        'Четкое и резкое поле зрения',
        'Точный прицельный луч',
        'Оптимизированное рабочее расстояние',
        'Уникальный джойстик'
      ],
      advantages: [
        '<strong>SLT-NAVI:</strong> Эта функция предоставляет интуитивно понятное отображение прогресса лечения, давая хирургу важную обратную связь.',
        '<strong>Четкая видимость:</strong> Улучшенный оптический дизайн и уникальная система освещения со светодиодным источником минимизируют аберрацию.',
        '<strong>Точный прицельный луч:</strong> Моторизованный вращающийся на 360° прицельный луч позволяет избежать помутнений роговицы.',
        '<strong>Оптимизированная дистанция:</strong> Максимальное рабочее расстояние облегчает манипуляции с контактной линзой и снижает усталость хирурга.'
      ],
      specs: {
        'Применение': 'Трабекулопластика, капсулотомия',
        'Усиливающая среда': 'Nd:YAG',
        'Форм-фактор': 'Настольный (tabletop)',
        'Длительность импульса': 'Наносекунда (nanosecond)',
        'Длина волны': '532 нм, 1,064 нм',
        'Вес': '18 кг (39.68 фунтов)'
      }
    },
    en: {
      title: 'Trabeculoplasty laser YC-200 S plus',
      subtitle: 'Refined laser delivery with lower energy',
      description: 'The YC-200 S plus / YC-200 achieves 1.6 mJ plasma threshold in air, delivering accurate and robust treatments with lower energy. It also offers an advanced SLT mode highly effective for treating open angle glaucoma.',
      features: [
        'Refined laser delivery with lower energy',
        'SLT mode',
        'Clear and sharp field of view',
        'Precise aiming beam',
        'Optimized operating distance',
        'Unique joystick'
      ],
      advantages: [
        '<strong>SLT-NAVI:</strong> Presents an intuitive display on the progress of laser treatment, providing the surgeon with important feedback.',
        '<strong>Clear field of view:</strong> An improved optical design that optimizes resolution and contrast. A unique illumination system with an LED light source results in a bright, near-natural view.',
        '<strong>Precise aiming beam:</strong> The dual aiming beam offers superior targeting with a 360° rotating aiming beam that can avoid corneal opacities.',
        '<strong>Optimized distance:</strong> Maximized working distance allows easier manipulation of the contact lens, and the short operating distance decreases surgeon fatigue.'
      ],
      specs: {
        'Applications': 'trabeculoplasty, capsulotomy',
        'Amplifying medium': 'Nd:YAG',
        'Ergonomics': 'tabletop',
        'Pulse duration': 'nanosecond',
        'Wavelength': '532 nm, 1,064 nm',
        'Weight': '18 kg (39.68 lb)'
      }
    }
  },
  'me-1': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242780.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242781.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242783.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242785.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242786.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242787.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242788.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242789.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242790.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242791.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242971.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242976.webp',
      'https://video.medicalexpo.com/video_me/videos/video-125024.mp4'
    ],
    uz: {
      title: 'Optical lens edger ME-1',
      subtitle: 'Ko\'p funksiyali avtomatik linza kesish va parmalash tizimi',
      description: 'ME-1 ilg\'or optik laboratoriyalar uchun mo\'ljallangan linza kesish uskunasidir. U murakkab sport ko\'zoynaklari va maxsus hoshiyalar (oprava) uchun yuqori aniqlikdagi 3D parmalash va kesish imkonini beradi.',
      features: [
        '11 mm gacha bo\'lgan balandlikdagi pog\'onali kesish (step beveling)',
        'Sport va maxsus hoshiyalar uchun yuqori egrilikdagi va moslashtirilgan kesish',
        'Bloker shakllariga asoslangan maxsus dizayn kesish (Design cut)',
        '0–30° egilish burchagiga ega avtomatik 3D parmalash (drilling)',
        'Sinxronlashgan harakatlar orqali optimallashtirilgan ishlash jarayoni'
      ],
      advantages: [
        '<strong>Murakkab linzalar bilan ishlash:</strong> Qisman pog\'onali kesish maxsus va murakkab geometriyali hoshiyalarni qo\'llab-quvvatlaydi (90 mm gacha bo\'lgan linzalar).',
        '<strong>Maxsus dizayn (Design cut):</strong> Blokerda aniqlangan shakllarga muvofiq linzalarni kesish, turli xil ijodiy ko\'zoynak dizaynlarini yaratish imkonini beradi.',
        '<strong>3D Parmalash:</strong> Tizim teshiklar (slots), chuqurchalar va zargarlik teshiklarini o\'ta yuqori aniqlikda parmalaydi.',
        '<strong>Mustahkamlik:</strong> Kuchaytirilgan konstruksiya va qattiq struktura uzoq muddatli barqarorlikni va katta hajmdagi ishlarda ham yuqori aniqlikni kafolatlaydi.'
      ],
      specs: {
        'Qo\'llab-quvvatlanadigan linza diametri': '90 mm gacha',
        'Maksimal pog\'onali kesish balandligi': '11 mm gacha',
        'Avtomatik 3D parmalash': 'Teshiklar, chuqurchalar va zargarlik teshiklari',
        'Parmalash burchagi': '0–30°',
        'Tizim turi': 'Optik linza kesuvchi (edger), 3D parmalovchi (drill)',
        'Imkoniyatlar': 'Avtomatik, uch o\'lchamli (3D)'
      }
    },
    ru: {
      title: 'Optical lens edger ME-1',
      subtitle: 'Многофункциональная автоматическая система обработки и сверления линз',
      description: 'ME-1 — это высокотехнологичный станок для обработки линз, разработанный для передовых оптических лабораторий. Он позволяет выполнять высокоточную 3D-обработку и сверление для сложных спортивных очков и специальных оправ.',
      features: [
        'Ступенчатый фацет (step beveling) высотой до 11 мм',
        'Обработка линз высокой кривизны и индивидуальный фацет для спортивных и специальных оправ',
        'Дизайнерская резка (Design cut) на основе форм блокера',
        'Автоматическое 3D сверление с наклоном 0–30°',
        'Оптимизированная последовательность обработки с синхронизированными движениями'
      ],
      advantages: [
        '<strong>Сложные оправы:</strong> Ступенчатый фацет позволяет надежно устанавливать линзы в спортивные солнцезащитные очки (диаметр до 90 мм).',
        '<strong>Дизайнерская резка:</strong> Позволяет вырезать линзы по индивидуальным профилям, заданным на блокере.',
        '<strong>3D-сверление:</strong> Точная обработка пазов, выемок и отверстий под углом, необходимых для безободковых и полуободковых оправ.',
        '<strong>Долговечность:</strong> Усиленная конструкция повышает жесткость станка, обеспечивая стабильную и точную обработку при больших объемах работы.'
      ],
      specs: {
        'Поддерживаемый диаметр линзы': 'до ø90 мм',
        'Макс. высота ступенчатого фацета': 'до 11 мм',
        'Автоматическое 3D-сверление': 'Отверстия, пазы, выемки',
        'Угол наклона сверла': '0–30°',
        'Тип системы': 'Оптический станок, оптическая дрель',
        'Опции': 'Автоматический, трехмерный'
      }
    },
    en: {
      title: 'Optical lens edger ME-1',
      subtitle: 'Multifunctional automatic lens edging and drilling system',
      description: 'The ME-1 is an advanced optical lens edger designed for high-volume optical labs. It enables highly precise 3D drilling and custom beveling for complex sport and specialty frames.',
      features: [
        'Up to 11 mm height step beveling',
        'High curve and custom beveling for sport and specialty frames',
        'Design cut based on blocker shapes',
        'Automatic 3D drilling with 0–30° tilt',
        'Optimized processing sequence with synchronized movements'
      ],
      advantages: [
        '<strong>Step beveling:</strong> Enables secure fitting of Rx lenses into sunglass and sport frames. Accepts lenses up to ø90 mm.',
        '<strong>Design cut to unlock creativity:</strong> Mills lenses according to shapes defined on the blocker, supporting specialty eyewear designs.',
        '<strong>Automatic 3D drilling:</strong> Handles slots, notches, counterbored holes and jewel holes with accuracy. With a 0–30° tilt range.',
        '<strong>Durability:</strong> The reinforced structural design increases rigidity across the unit, ensuring stable, accurate processing and extended service life.'
      ],
      specs: {
        'Supported lens diameter': 'up to ø90 mm',
        'Maximum step bevel height': 'up to 11 mm',
        'Automatic 3D drilling': 'supports slots, notches, holes',
        'Drill unit tilt range': '0–30°',
        'Type of system': 'optical lens edger, optical lens drill',
        'Options': 'automatic, three-dimensional'
      }
    }
  },
  'lexce-plus-trend8': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242990.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242802.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242803.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242804.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242805.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242806.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242807.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243029.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243030.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243031.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243032.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243033.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243034.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243035.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243036.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243037.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243038.webp',
      'https://video.medicalexpo.com/video_me/videos/video-125025.mp4'
    ],
    uz: {
      title: 'Optical lens shape tracer LEXCE plus Trend8',
      subtitle: 'Besh o\'qli 3D parmalash va linza kesish tizimi',
      description: 'LEXCE plus Trend8/Trend - bu optik laboratoriyalar va ustaxonalar uchun mo\'ljallangan andozasiz (patternless) linza kesish tizimi. 5 o\'qli 3D parmalash orqali turli uslubdagi hoshiyalar uchun moslashtiriladi.',
      features: [
        'Ko\'zoynak linzalarini pardozlash uchun ko\'p funksiyali andozasiz kesish',
        '5 o\'qli (5-axis) 3D parmalash va qirralarni jilolash (grooving)',
        'Trend8: O\'q barqarorligini ta\'minlovchi moslashuvchan linza qisqichi (clamp)',
        'Intellektual bloker va 3D o\'lchash (1 ko\'z uchun 1000 ta nuqta orqali skanerlash)',
        'Intuitiv 7-dyuymli rangli LCD sensorli ekran'
      ],
      advantages: [
        '<strong>Yuqori egrilikdagi kesish:</strong> Faseta balandligi va kengligi hoshiya materialiga moslash uchun erkin sozlanadi.',
        '<strong>5 o\'qli 3D parmalash:</strong> Teshik turlari avtomatik yoki qo\'lda juda aniq joylashish uchun sozlanishi mumkin. 6 marta kattalashtirish orqali nuqsonlarni tahrirlash.',
        '<strong>O\'q barqarorligi:</strong> Moslashuvchan qisqich linzaning orqa egriligi bo\'ylab lateral harakatlanib, sirpanishni oldini oladi.',
        '<strong>Qulay xizmat ko\'rsatish:</strong> O\'z-o\'zini tekshirish diagnostika funksiyasi muammo haqida 2D shtrix kod orqali ma\'lumot beradi.'
      ],
      specs: {
        'Ishlab chiqarish unumdorligi': 'Kuniga ~80 ta linza (8 soatda)',
        'Parmalash boshqaruvi': '5 o\'qli (5-axis) 3D parmalash',
        'Skanerlash': '3D skanerlash, to\'liq avtomatik qisish',
        'Ekran': '7-dyuymli rangli LCD sensor',
        'Qo\'shimcha funksiyalar': 'Self-check diagnostika, Maintenance monitor'
      }
    },
    ru: {
      title: 'Optical lens shape tracer LEXCE plus Trend8',
      subtitle: 'Пятиосевая система 3D сверления и обработки линз',
      description: 'LEXCE plus Trend8/Trend — это бесшаблонный станок, разработанный для оптических лабораторий и мастерских. С помощью 5-осевого 3D-сверления он адаптируется к широкому спектру оправ.',
      features: [
        'Универсальная бесшаблонная обработка офтальмологических линз',
        '5-осевое 3D сверление, снятие фаски безопасности и нарезка канавок',
        'Trend8: Гибкий зажим для линз для стабильности оси (axis stability)',
        'Интеллектуальный блокер и 3D сканирование (1000 точек на глаз)',
        'Интуитивно понятный 7-дюймовый цветной сенсорный ЖК-экран'
      ],
      advantages: [
        '<strong>Фацет высокой кривизны:</strong> Высота и ширина фацета свободно регулируются в соответствии с материалом оправы.',
        '<strong>5-осевое 3D-сверление:</strong> Углы сверления могут быть заданы автоматически или вручную для точного позиционирования с увеличением до 6×.',
        '<strong>Стабильность оси:</strong> Адаптивный зажим перемещается вдоль задней кривой линзы, стабилизируя смещенные центры и уменьшая сдвиг оси.',
        '<strong>Обслуживание:</strong> Функция самодиагностики выводит результаты в виде 2D-штрихкода для быстрой сервисной поддержки.'
      ],
      specs: {
        'Производительность': 'около 80 работ за 8-часовой день',
        'Управление сверлением': '5-осевой контроль для 3D сверления',
        'Трассировка': '3D трассировка оправы, полное автозажатие',
        'Дисплей': '7-дюймовый цветной сенсорный ЖК-экран',
        'Функции диагностики': 'Самодиагностика (выдает 2D-штрихкод)'
      }
    },
    en: {
      title: 'Optical lens shape tracer LEXCE plus Trend8',
      subtitle: 'Five-axis 3D drilling and lens edging system',
      description: 'The LEXCE plus Trend8/Trend is a patternless edger designed for ophthalmic labs and optical workshops. It supports a wide range of frame styles with its 5-axis 3D drilling.',
      features: [
        'Versatile patternless edging for ophthalmic lens finishing',
        '5-axis 3D drilling and sub-spindle for drilling, safety beveling and grooving',
        'Optional high base curve bevel (Trend8) and flexible lens clamping for axis stability',
        'Intelligent blocker and 3D frame tracing (1,000 points per eye)',
        '7-inch color LCD touchscreen with intuitive modes'
      ],
      advantages: [
        '<strong>High base curve bevel:</strong> Bevel height and width are freely adjustable. Front and rear bevels are ground independently.',
        '<strong>5-axis 3D drilling:</strong> Drilling angles can be set automatically or manually. Hole editing screen provides up to 6× magnification.',
        '<strong>Axis stability:</strong> Flexible lens clamp moves laterally along the lens rear curve to stabilize off-center cups, reducing PD and axis shift.',
        '<strong>Serviceability:</strong> Self-check function diagnoses components and outputs results as a 2D barcode for fast service.'
      ],
      specs: {
        'Designed throughput': 'approx. 80 jobs per 8-hour day',
        'Control system': '5-axis control for 3D drilling',
        'Tracing': 'Optional 3D frame tracing with full auto clamping',
        'Display': '7-inch color LCD touchscreen',
        'Maintenance': 'Maintenance monitor, Self-check diagnostic function'
      }
    }
  },

  'mse-1': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242738.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242739.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242740.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242742.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242743.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242744.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242745.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242748.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242750.webp',
      'https://video.medicalexpo.com/video_me/videos/video-125028.mp4'
    ],
    uz: {
      title: 'Sanoat linza kesish uskunasi MSE-1',
      subtitle: 'Yuqori tezlikdagi frezalash va aniq silliqlashni birlashtirgan gibrid tizim',
      description: 'Optik laboratoriyalar va chakana savdo muhitlari uchun mo\'ljallangan. Gibrid ishlov berish sikl vaqtini qisqartiradi va aniqlikni ta\'minlaydi.',
      features: [
        'Maxsus freza bilan yuqori tezlikda ishlov berish',
        'Pog\'onali va qisman pog\'onali kesish (11 mm gacha)',
        'Murakkab dizayn kesish (Design cut)',
        'Yuqori egrilikdagi kesish',
        'Avtomatik 3D parmalash',
        '10.4 dyuymli aylanuvchi sensorli ekran'
      ],
      advantages: [
        '<strong>Gibrid ishlov berish:</strong> Frezalash va silliqlash birlashmasi ishlash tezligini sezilarli darajada oshiradi.',
        '<strong>Murakkab kesish:</strong> Sport va maxsus ko\'zoynaklar uchun ilg\'or kesish imkoniyatlari.',
        '<strong>3D parmalash:</strong> Turli teshiklar shakllarini yuqori aniqlikda yaratish.'
      ],
      specs: {
        'Linza o\'lchami': 'ø90 mm gacha',
        'Maksimal qadam balandligi': '11 mm',
        'Turi': 'Gibrid frezalash va silliqlash'
      }
    },
    ru: {
      title: 'Промышленный станок для обработки линз MSE-1',
      subtitle: 'Гибридная система с высокоскоростной фрезеровкой и точной шлифовкой',
      description: 'Разработана для оптических лабораторий и салонов оптики. Гибридная обработка: фрезерование сокращает время цикла, а шлифовальные круги обеспечивают точность.',
      features: [
        'Высокоскоростная черновая обработка фрезой',
        'Ступенчатый фацет (до 11 мм)',
        'Дизайнерская резка',
        'Обработка линз высокой кривизны',
        'Автоматическое 3D-сверление',
        '10.4-дюймовый сенсорный экран'
      ],
      advantages: [
        '<strong>Гибридная обработка:</strong> Фрезерование сокращает время черновой обработки, а шлифовка гарантирует идеальный финиш.',
        '<strong>Сложные дизайны:</strong> Идеально подходит для спортивных очков и оправ с высокой кривизной.',
        '<strong>3D сверление:</strong> Автоматическое сверление пазов, выемок и отверстий.'
      ],
      specs: {
        'Размер линзы': 'до ø90 мм',
        'Макс. высота фацета': '11 мм',
        'Тип системы': 'Гибридная (фрезеровка + шлифовка)'
      }
    },
    en: {
      title: 'Optical lens edger MSE-1',
      subtitle: 'Hybrid edging system combining a high-speed milling tool and precision grinding',
      description: 'Designed for optical laboratories and retail environments to support a wide range of edging and finishing requirements. Hybrid processing significantly shortens cycle times.',
      features: [
        'High-speed roughing with a dedicated milling tool',
        'Step / partial step beveling (up to 11mm)',
        'Design cut capability',
        'High base curve beveling',
        'Automatic 3D drilling (slots, notches)',
        '10.4-inch rotatable touchscreen'
      ],
      advantages: [
        '<strong>Hybrid processing:</strong> Milling tool for roughing shortens cycle times while grinding wheels ensure precise finishing.',
        '<strong>Design cut:</strong> Enables creative and complex lens shapes, including sport lens profiles.',
        '<strong>Automatic 3D drilling:</strong> Flexible hole shapes for customized lens mounting.'
      ],
      specs: {
        'Lens size support': 'up to ø90 mm',
        'Max step height': 'up to 11 mm',
        'Processing type': 'Hybrid - milling tool + grinding wheels'
      }
    }
  },

  'se-9090-supra': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-15912328.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-14893299.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-8683883.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-15912331.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243192.webp',
      'https://video.medicalexpo.com/video_me/videos/video-125007.mp4'
    ],
    uz: {
      title: 'Sanoat linza kesish uskunasi SE-9090 SUPRA',
      subtitle: 'Ikkita shpindel tizimi bilan tezroq silliqlash',
      description: 'Noyob ikkita shpindelli tizim yuqori tezlikda ishlov berish uchun silliqlash bosimini avtomatik ravishda boshqaradi. Tezkor ishlash uchun linzalarni bir vaqtning o\'zida ikki tomonlama o\'lchash.',
      features: [
        'Ikkita shpindel tizimi bilan tezroq silliqlash',
        'Linzalarni ikki tomonlama sinxron o\'lchash',
        'Qulay 10.4 dyuymli SVGA rangli sensorli ekran',
        'Yuqori sifatli avtomatik xavfsizlik fasetasi',
        'Avtomatik truba ochish (Auto grooving)',
        'Pog\'onali kesish'
      ],
      advantages: [
        '<strong>Yuqori tezlik:</strong> Dastur avtomatik ravishda bosimni boshqaradi va ishlov berish vaqtini qisqartiradi.',
        '<strong>Sinxron o\'lchash:</strong> Old va orqa yuzalarni bir vaqtda o\'lchash ish jarayonini tezlashtiradi.',
        '<strong>Ko\'p qirralilik:</strong> Barcha turdagi ko\'zoynak hoshiyalarini tayyorlash imkoniyati.'
      ],
      specs: {
        'Tizim turi': 'Optik linza kesuvchi va silliqlovchi',
        'O\'lchash': 'Sinxron ikki tomonlama o\'lchash',
        'Boshqaruv': '10.4 dyuymli sensor panel'
      }
    },
    ru: {
      title: 'Промышленный станок для обработки линз SE-9090 SUPRA',
      subtitle: 'Ускоренная шлифовка благодаря системе двух шпинделей',
      description: 'Уникальная система с двумя шпинделями автоматически регулирует давление шлифования для высокоскоростной обработки. Одновременное измерение обеих поверхностей линзы.',
      features: [
        'Быстрая шлифовка с двумя шпинделями',
        'Одновременное измерение двух поверхностей линзы',
        'Удобный 10.4-дюймовый сенсорный экран',
        'Высококачественный автоматический безопасный фацет',
        'Автоматическая нарезка канавок',
        'Ступенчатый фацет'
      ],
      advantages: [
        '<strong>Высокая скорость:</strong> Система автоматически контролирует давление на 7 различных уровнях для высокоскоростной обработки.',
        '<strong>Синхронное измерение:</strong> Быстрая работа за счет одновременного измерения передней и задней поверхностей линзы.',
        '<strong>Удобство:</strong> Экран с симуляцией фацета гарантирует точное позиционирование.'
      ],
      specs: {
        'Тип системы': 'Оптический станок, полировщик',
        'Измерение': 'Синхронное двустороннее',
        'Управление': '10.4-дюймовый сенсорный экран'
      }
    },
    en: {
      title: 'Optical lens edger SE-9090 Supra',
      subtitle: 'Faster grinding with dual spindle system',
      description: 'The unique dual spindle system incorporates a program which automatically controls grinding pressure at seven different levels to realize a high speed processing.',
      features: [
        'Faster grinding with dual spindle system',
        'Simultaneous dual-surface lens measurement',
        'User-friendly 10.4-inch SVGA color LCD touch panel',
        'High quality automatic polish safety beveling',
        'Auto grooving',
        'Step beveling'
      ],
      advantages: [
        '<strong>High speed:</strong> Dual spindle system realizes extremely high-speed processing.',
        '<strong>Simultaneous measurement:</strong> Measures both front and rear surfaces simultaneously for speedy operation.',
        '<strong>Bevel simulation:</strong> The screen provides the ability to precisely place the bevel for a guaranteed quality finish.'
      ],
      specs: {
        'Type of system': 'Optical lens edger, grinder, polisher',
        'Measurement': 'Simultaneous dual-surface',
        'Options': 'Automatic'
      }
    }
  },

  'aes-2200': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-15912347.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242535.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242531.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-17329806.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20510992.webp',
      'https://video.medicalexpo.com/video_me/videos/video-24335.mp4'
    ],
    uz: {
      title: 'Sanoat linza kesish uskunasi AES-2200',
      subtitle: 'NICS konveyer tizimiga ega ikki blokli tizim',
      description: 'AES-2200 avtomatik laboratoriya tizimi bo\'lib, RHU-2200 va ikkita SE-9090 Supra uskunasini o\'z ichiga oladi. Katta konveyer tizimi ish tezligini oshiradi.',
      features: [
        'Ikki blokli tizim (Double unit system)',
        'NICS - NIDEK aqlli konveyer tizimi',
        'Yuqori tezlikda ishlash',
        'To\'liq avtomatlashtirishni oson o\'rnatish'
      ],
      advantages: [
        '<strong>Yuqori tezlik:</strong> NICS tizimi atigi 14 soat ichida 1600 dan ortiq ishni bajarishi mumkin (to\'rtta AES-2200 bilan).',
        '<strong>Avtomatlashtirish:</strong> Tizim laboratoriya boshqaruvi dasturiga osongina ulanadi.',
        '<strong>Samaradorlik:</strong> Minimal joy egallaydi va katta laboratoriyalar uchun samaradorlikni oshiradi.'
      ],
      specs: {
        'Tizim': 'Ikki blokli (RHU-2200 + 2 ta SE-9090)',
        'Ishlab chiqarish unumdorligi': '1600 ta ish (14 soatda)',
        'Turi': 'Avtomatik optik tizim'
      }
    },
    ru: {
      title: 'Промышленный станок для обработки линз AES-2200',
      subtitle: 'Двухблочная система с интеллектуальным конвейером NICS',
      description: 'AES-2200 — это автоматическая лабораторная система, объединяющая RHU-2200 и два станка SE-9090 Supra. Инновационная конвейерная система увеличивает скорость работы.',
      features: [
        'Двухблочная система (Double unit system)',
        'NICS - Интеллектуальная конвейерная система NIDEK',
        'Высокоскоростная обработка',
        'Простая настройка полной автоматизации'
      ],
      advantages: [
        '<strong>Высокая скорость:</strong> Система NICS может выполнить более 1600 работ всего за 14 часов (при подключении 4 систем).',
        '<strong>Автоматизация:</strong> Может работать в замкнутом цикле или подключаться к лабораторному ПО без сложной настройки.',
        '<strong>Эффективность:</strong> Снижает начальные затраты и максимизирует эффективность пространства.'
      ],
      specs: {
        'Тип системы': 'Двухблочная (RHU-2200 + 2x SE-9090)',
        'Производительность': '>1600 работ за 14 часов',
        'Опции': 'Автоматическая'
      }
    },
    en: {
      title: 'Optical lens edger AES-2200',
      subtitle: 'Double unit system with NIDEK Intelligent Conveyor System',
      description: 'The AES-2200 is NIDEK\'s automatic lab system combining the RHU-2200 and two units of SE-9090 Supra series. Features innovative automatic one-line big conveyor system.',
      features: [
        'Double unit system (RHU-2200 + 2x SE-9090)',
        'NICS - NIDEK Intelligent Conveyor System',
        'High speed processing',
        'Easy setup of full automation'
      ],
      advantages: [
        '<strong>High speed processing:</strong> The NICS can operate over 1,600 jobs in just 14 hours.',
        '<strong>Easy setup:</strong> Can be run in a closed loop or linked to the lab management software.',
        '<strong>Smart system:</strong> The idea of connecting small belt conveyors turned into reality as a unique one-line big conveyor system.'
      ],
      specs: {
        'Type of system': 'Optical lens edger, automatic',
        'Performance': '>1,600 jobs in 14 hours',
        'Conveyor': 'NIDEK Intelligent Conveyor System'
      }
    }
  },

  'aes-1000': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242540.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242541.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242546.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243193.webp'
    ],
    uz: {
      title: 'Sanoat linza kesish uskunasi AES-1000',
      subtitle: 'Kichik laboratoriyalar uchun bitta blokli tizim',
      description: 'AES-1000 ning turli xil konfiguratsiyalari kichik laboratoriyalar uchun oddiy va ixcham tizimlardir. Tizimlar moslashuvchanlikni taklif qiladi va turli ishlab chiqarish maydonlariga mos keladi.',
      features: [
        'Bitta blokli tizim',
        'Kichik optik laboratoriyalar uchun ajoyib moslashuvchanlik',
        'Oson ishlash va texnik xizmat ko\'rsatish',
        'Moslashuvchan integratsiya'
      ],
      advantages: [
        '<strong>Moslashuvchanlik:</strong> Kichik ustaxonalar va laboratoriyalar uchun ideal echim.',
        '<strong>Oddiylik:</strong> Foydalanish va texnik xizmat ko\'rsatish juda oson.',
        '<strong>Kompakt dizayn:</strong> Turli xil xonalar tuzilishiga oson moslashadi.'
      ],
      specs: {
        'Tizim': 'Bitta blokli (RHU-1000 + SE-9090)',
        'Qo\'llanilishi': 'Kichik va o\'rta hajmdagi ishlar',
        'Turi': 'Avtomatik'
      }
    },
    ru: {
      title: 'Промышленный станок для обработки линз AES-1000',
      subtitle: 'Одноблочная система для небольших лабораторий',
      description: 'Различные конфигурации AES-1000 — это простые компактные системы для небольших лабораторий или магазинов. Системы предлагают гибкость и могут вписаться в различные производственные помещения.',
      features: [
        'Одноблочная система',
        'Отличная адаптивность для небольших лабораторий',
        'Простота эксплуатации и обслуживания',
        'Гибкая интеграция в помещение'
      ],
      advantages: [
        '<strong>Компактность:</strong> Простая и компактная система для небольших лабораторий и магазинов.',
        '<strong>Гибкость:</strong> Системы обеспечивают гибкость и могут соответствовать различным планам помещений.',
        '<strong>Удобство:</strong> Легкое управление и минимум затрат на обслуживание.'
      ],
      specs: {
        'Тип системы': 'Одноблочная (RHU-1000 + SE-9090)',
        'Применение': 'Малые и средние лаборатории',
        'Опции': 'Автоматическая'
      }
    },
    en: {
      title: 'Optical lens edger AES-1000',
      subtitle: 'Single unit system for small edging laboratories',
      description: 'Different configurations of the AES-1000 are simple compact systems for small labs/shops. The systems offer flexibility and can fit various floor plans and production areas.',
      features: [
        'Single unit system',
        'Great adaptability for small edging laboratories',
        'Easy operation and maintenance',
        'Flexible floor plan integration'
      ],
      advantages: [
        '<strong>Compact setup:</strong> Simple compact system for small lab or shop environments.',
        '<strong>Flexibility:</strong> The systems offer flexibility and can fit various floor plans.',
        '<strong>Easy maintenance:</strong> Designed for intuitive operation and simple upkeep.'
      ],
      specs: {
        'Type of system': 'Optical lens edger, drill, polisher',
        'Options': 'Automatic',
        'Configurations': 'AES-1000S, AES-1000CB'
      }
    }
  },

  'ice-1500': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-17330099.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-17330100.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-17330102.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-17330105.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-17330108.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-17330110.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568805.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568808.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568811.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568812.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511026.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511028.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511029.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511032.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511034.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243194.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243195.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243196.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243197.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243198.webp'
    ],
    uz: {
      title: 'Linza blokirovka tizimi ICE-1500',
      subtitle: 'Aniqlikka intilishdan tug\'ilgan blokirovkaning ajoyib namunasi',
      description: 'Avtomatik linzani o\'lchash va blokirovka qilish. Ko\'p funktsiyali linza qisqichi. Shaklni raqamli o\'lchash va yuqori aniqlikdagi sensorli ekran.',
      features: [
        'Avtomatik linza o\'lchash va blokirovkalash',
        'Ko\'p funktsiyali linza qisqichi',
        'Shaklni aniq skanerlash (Shape imager)',
        'Yuqori aniqlikdagi rangli LCD sensorli ekran',
        'Stilus yordamida oson dizayn funktsiyalari',
        'Yuqori egrilikdagi skanerlash'
      ],
      advantages: [
        '<strong>Avtomatik o\'lchash:</strong> Operatorga linzani belgilanmasdan turib avtomatik ravishda blokirovka qilish imkonini beradi.',
        '<strong>Linza qisqichi:</strong> Moslashuvchan dizayn ob\'ektiv yuzasini optimal bosim bilan barqarorlashtiradi.',
        '<strong>Shakl skaneri:</strong> Ramkasiz ko\'zoynaklar uchun linza shaklini va teshiklarni aniq aniqlab beradi.'
      ],
      specs: {
        'Tizim turi': 'Linza blokirovka tizimi',
        'Boshqaruv': '8.4 dyuymli rangli sensorli ekran',
        'O\'lchash turlari': '4 ta turli o\'lchash usullari'
      }
    },
    ru: {
      title: 'Система блокировки линз ICE-1500',
      subtitle: 'Шедевр в области блокировки, рожденный в стремлении к точности',
      description: 'Автоматическое измерение и блокировка линз. Зажим для линз с многофункциональным механизмом. Считывание формы и цветной сенсорный ЖК-дисплей высокого разрешения.',
      features: [
        'Автоматическое измерение и блокировка линзы',
        'Зажим с многофункциональным механизмом',
        'Измерение формы (Shape imager)',
        'Цветной сенсорный ЖК-экран',
        'Удобное моделирование с помощью стилуса',
        'Сканер оправ высокой кривизны'
      ],
      advantages: [
        '<strong>Автоматическое измерение:</strong> Позволяет оператору блокировать однофокальную линзу без разметки.',
        '<strong>Зажим для линзы:</strong> Гибкая конструкция зажима стабилизирует поверхность линзы с оптимальным давлением для блокировки без параллакса.',
        '<strong>Считывание формы:</strong> Обеспечивает точную оцифровку формы линзы и обнаружение отверстий для безободковых оправ.'
      ],
      specs: {
        'Тип системы': 'Оптический блокиратор линз',
        'Дисплей': '8.4-дюймовый многоцветный сенсорный экран',
        'Опции': 'Автоматический'
      }
    },
    en: {
      title: 'Optical lens blocker ICE-1500',
      subtitle: 'Born from the pursuit of precision - A masterpiece in blocking',
      description: 'Automatic lens measurement and blocking. Lens clamp with multifunction mechanism. Shape imager measurement. High resolution, multicolor LCD touch panel.',
      features: [
        'Automatic lens measurement and blocking',
        'Lens clamp with multifunction mechanism',
        'Shape imager measurement',
        'High resolution multicolor LCD touch panel',
        'Easy-design functionality with a stylus pen',
        'High-wrap curve frame tracer'
      ],
      advantages: [
        '<strong>Automatic Lens Measurement:</strong> Allows the operator to block a single vision lens without marking it up.',
        '<strong>Lens Clamp:</strong> The flexible lens clamp design stabilizes the lens surface with optimal pressure for parallax-free blocking.',
        '<strong>Shape Imager:</strong> Provides precise digitization of lens shape and hole detection for rimless frames.'
      ],
      specs: {
        'Type of system': 'Optical lens blocker',
        'Display': '8.4-inch multicolor LCD touch panel',
        'Options': 'Automatic'
      }
    }
  },

  'ce-9': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-17330120.webp'
    ],
    uz: {
      title: 'Markazlashtiruvchi uskuna CE-9',
      subtitle: 'Ixcham va zamonaviy dizayn',
      description: 'Optik linzalarni markazlashtiruvchi ixcham va zamonaviy dizaynga ega uskuna.',
      features: [
        'Uzoq muddatli LED yoritgich',
        'Optimal ko\'rish uchun yorug\'likni boshqarish',
        'Ixcham va zamonaviy dizayn',
        'Mexanik boshqaruv'
      ],
      advantages: [
        '<strong>Uzoq muddatli LED:</strong> Lampochkani almashtirish zaruratini yo\'q qiladi va energiya sarfini kamaytiradi.',
        '<strong>Optimal ko\'rish:</strong> LED yorqinligini ehtiyojga qarab sozlash mumkin.'
      ],
      specs: {
        'Tizim turi': 'Markazlashtiruvchi uskuna',
        'Yoritish': 'LED (sozlanuvchi)',
        'Variantlar': 'Qo\'lda boshqariladigan'
      }
    },
    ru: {
      title: 'Центрирующее устройство CE-9',
      subtitle: 'Компактный и стильный дизайн',
      description: 'Устройство для центрирования оптических линз в компактном и стильном дизайне.',
      features: [
        'Долговечный светодиод (LED)',
        'Контроль освещения для оптимальной видимости',
        'Компактный и стильный дизайн',
        'Ручное управление'
      ],
      advantages: [
        '<strong>Долговечный LED:</strong> Избавляет от необходимости менять лампочку и снижает потребление энергии.',
        '<strong>Оптимальная видимость:</strong> Яркость светодиода регулируется.'
      ],
      specs: {
        'Тип системы': 'Устройство для центрирования линз',
        'Освещение': 'Настраиваемый LED',
        'Опции': 'Ручная'
      }
    },
    en: {
      title: 'Optical lens centering device CE-9',
      subtitle: 'Compact and stylish design',
      description: 'Optical lens centering device with a compact and stylish design.',
      features: [
        'Long-life LED',
        'Light control for optimum visibility',
        'Compact and stylish design',
        'Manual operation'
      ],
      advantages: [
        '<strong>Long-life LED:</strong> Eliminates the need to change a light bulb and reduces energy consumption.',
        '<strong>Optimum visibility:</strong> The brightness of the LED is adjustable.'
      ],
      specs: {
        'Type of system': 'Optical lens centering device',
        'Lighting': 'Adjustable LED',
        'Options': 'Manual'
      }
    }
  },

  'lt-1200': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-17330155.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-17330156.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-17330158.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-17330160.webp'
    ],
    uz: {
      title: 'Oqap shaklini skanerlash tizimi LT-1200',
      subtitle: 'Ko\'p funksiyali laboratoriya va veb-skaner',
      description: 'Avtomatik 3D binokulyar skanerlash, o\'zgaruvchan tayanchli stilus, murakkab skanerlash va ilg\'or shakl muharriri funksiyasi.',
      features: [
        'Avtomatik 3D binokulyar skanerlash',
        'O\'zgaruvchan tayanchli stilus (Variable fulcrum)',
        'Murakkab skanerlash (Composite tracing)',
        'Ilg\'or shakl muharriri',
        'Ko\'p funksiyali laboratoriya va veb-skaner'
      ],
      advantages: [
        '<strong>Avtomatik 3D skanerlash:</strong> Noyob 3D mexanizmi har bir ko\'z uchun 1000 ta ma\'lumot nuqtasini tahlil qiladi.',
        '<strong>Tayanchli stilus:</strong> O\'q burchagini istalgan balandlikda romga perpendikulyar ushlab turadi.',
        '<strong>Murakkab skanerlash:</strong> FPD/DBL va egrilik burchagini avtomatik tarzda o\'lchaydi.'
      ],
      specs: {
        'Tizim turi': 'Optik linza skaneri',
        'Variantlar': 'Uch o\'lchamli (3D)',
        'Aniqlik': 'Ko\'z bo\'yicha 1000 nuqta'
      }
    },
    ru: {
      title: 'Сканер формы оправы LT-1200',
      subtitle: 'Многофункциональный лабораторный и веб-трейсер',
      description: 'Автоматическое бинокулярное 3D сканирование, стилус с изменяемой точкой опоры, композитное сканирование и расширенный редактор форм.',
      features: [
        'Автоматическое 3D бинокулярное сканирование',
        'Стилус с переменной точкой опоры',
        'Композитное сканирование',
        'Расширенный редактор форм',
        'Многофункциональный лабораторный трейсер'
      ],
      advantages: [
        '<strong>Автоматическое 3D-сканирование:</strong> Уникальный 3D-механизм оцифровывает бинокулярное измерение по 1000 точкам отсчета на каждый глаз.',
        '<strong>Стилус:</strong> Уникальный дизайн позволяет сохранять угол оси перпендикулярным раме на любой высоте.',
        '<strong>Композитное сканирование:</strong> Автоматически измеряет угол кривизны оправы и FPD/DBL.'
      ],
      specs: {
        'Тип системы': 'Сканер формы оптических линз',
        'Опции': 'Трехмерный (3D)',
        'Точность': '1000 точек на каждый глаз'
      }
    },
    en: {
      title: 'Optical lens shape tracer LT-1200',
      subtitle: 'Multifunction lab tracer and web tracer',
      description: 'Automatic 3D binocular tracing, Variable fulcrum stylus, Composite tracing, Advanced shape editor function.',
      features: [
        'Automatic 3D binocular tracing',
        'Variable fulcrum stylus',
        'Composite tracing',
        'Advanced shape editor function',
        'Multifunction lab tracer and web tracer'
      ],
      advantages: [
        '<strong>Automatic 3D tracing:</strong> The unique 3D mechanism digitizes a binocular measurement of 1,000 points of reference per eye.',
        '<strong>Variable fulcrum stylus:</strong> Keeps the axis angle perpendicular to the frame at any height.',
        '<strong>Composite tracing:</strong> Measures the FPD/DBL and frame wrap angle automatically.'
      ],
      specs: {
        'Type of system': 'Optical lens shape tracer',
        'Options': 'Three-dimensional (3D)',
        'Accuracy': '1,000 points of reference per eye'
      }
    }
  },

  'lt-980': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511084.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511085.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511086.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511087.webp'
    ],
    uz: {
      title: 'Oqap shaklini skanerlash tizimi LT-980',
      subtitle: 'Batafsil ma\'lumot va aniq o\'lchovlar',
      description: 'Avtomatik 3D binokulyar skanerlash, himoyalangan dizayn va bir teginishli linza ushlagichi.',
      features: [
        'Avtomatik 3D binokulyar skanerlash',
        'O\'zgaruvchan tayanchli stilus',
        'Integratsiyalashgan himoya',
        'Bir teginishli demo linza ushlagichi',
        'Aksessuarlar uchun o\'rnatilgan joy'
      ],
      advantages: [
        '<strong>Avtomatik 3D skanerlash:</strong> Yuqori aniqlikdagi raqamli ma\'lumotlar birinchi martadanoq aniq moslashishni kafolatlaydi.',
        '<strong>Qulay ushlagich:</strong> Ko\'p qirrali demo linza ushlagichi bir bosqichda osongina o\'rnatish imkonini beradi.',
        '<strong>Saqlash bo\'limi:</strong> Uskuna qo\'shimcha aksessuarlarni xavfsiz saqlash uchun qulay ichki joyga ega.'
      ],
      specs: {
        'Tizim turi': 'Optik linza skaneri',
        'Variantlar': 'Uch o\'lchamli (3D)',
        'Boshqaruv': 'Bir teginishli ushlagich'
      }
    },
    ru: {
      title: 'Сканер формы оправы LT-980',
      subtitle: 'Детальная информация и точные измерения',
      description: 'Автоматическое 3D сканирование, защита от пыли, держатель демо-линз в одно касание.',
      features: [
        'Автоматическое бинокулярное 3D сканирование',
        'Стилус с переменной точкой опоры',
        'Встроенная защита от мусора',
        'Держатель демо-линзы в одно касание',
        'Встроенный отсек для аксессуаров'
      ],
      advantages: [
        '<strong>Автоматическое сканирование:</strong> Высокоточные оцифрованные данные гарантируют точную подгонку с первого раза.',
        '<strong>Удобный держатель:</strong> Универсальный держатель демо-линз позволяет легко установить линзу или шаблон одним движением.',
        '<strong>Встроенное хранилище:</strong> LT-980 имеет удобный встроенный отсек для эргономичного и безопасного хранения аксессуаров.'
      ],
      specs: {
        'Тип системы': 'Сканер формы оптических линз',
        'Опции': 'Трехмерный (3D)',
        'Дополнительно': 'Встроенный отсек'
      }
    },
    en: {
      title: 'Optical lens shape tracer LT-980',
      subtitle: 'Detailed Information and precise measurements',
      description: 'Automatic 3D binocular tracing, Variable fulcrum stylus, Integrated debris protection, One-touch demo lens holder.',
      features: [
        'Automatic 3D binocular tracing',
        'Variable fulcrum stylus',
        'Integrated debris protection',
        'One-touch demo lens holder',
        'Built-in accessory storage space'
      ],
      advantages: [
        '<strong>Automatic 3D tracing:</strong> The highly accurate digitized data assures a precise first time fit.',
        '<strong>One-touch holder:</strong> The versatile demo lens holder allows for easy setting of either demo lens or pattern in a one-touch step.',
        '<strong>Built-in storage:</strong> The LT-980 has a convenient built-in storage compartment that is ergonomic for safe-keeping accessories.'
      ],
      specs: {
        'Type of system': 'Optical lens shape tracer',
        'Options': 'Three-dimensional (3D)',
        'Storage': 'Built-in accessory compartment'
      }
    }
  },

  'me-1': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242780.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242781.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242783.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242785.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242786.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242787.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242788.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242789.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242790.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242791.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242971.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242976.webp',
      'https://video.medicalexpo.com/video_me/videos/video-125024.mp4'
    ],
    uz: {
      title: 'Optical lens edger ME-1',
      subtitle: 'Ko\'p funksiyali avtomatik linza kesish va parmalash tizimi',
      description: 'ME-1 ilg\'or optik laboratoriyalar uchun mo\'ljallangan linza kesish uskunasidir. U murakkab sport ko\'zoynaklari va maxsus hoshiyalar (oprava) uchun yuqori aniqlikdagi 3D parmalash va kesish imkonini beradi.',
      features: [
        '11 mm gacha bo\'lgan balandlikdagi pog\'onali kesish (step beveling)',
        'Sport va maxsus hoshiyalar uchun yuqori egrilikdagi va moslashtirilgan kesish',
        'Bloker shakllariga asoslangan maxsus dizayn kesish (Design cut)',
        '0–30° egilish burchagiga ega avtomatik 3D parmalash (drilling)',
        'Sinxronlashgan harakatlar orqali optimallashtirilgan ishlash jarayoni'
      ],
      advantages: [
        '<strong>Murakkab linzalar bilan ishlash:</strong> Qisman pog\'onali kesish maxsus va murakkab geometriyali hoshiyalarni qo\'llab-quvvatlaydi (90 mm gacha bo\'lgan linzalar).',
        '<strong>Maxsus dizayn (Design cut):</strong> Blokerda aniqlangan shakllarga muvofiq linzalarni kesish, turli xil ijodiy ko\'zoynak dizaynlarini yaratish imkonini beradi.',
        '<strong>3D Parmalash:</strong> Tizim teshiklar (slots), chuqurchalar va zargarlik teshiklarini o\'ta yuqori aniqlikda parmalaydi.',
        '<strong>Mustahkamlik:</strong> Kuchaytirilgan konstruksiya va qattiq struktura uzoq muddatli barqarorlikni va katta hajmdagi ishlarda ham yuqori aniqlikni kafolatlaydi.'
      ],
      specs: {
        'Qo\'llab-quvvatlanadigan linza diametri': '90 mm gacha',
        'Maksimal pog\'onali kesish balandligi': '11 mm gacha',
        'Avtomatik 3D parmalash': 'Teshiklar, chuqurchalar va zargarlik teshiklari',
        'Parmalash burchagi': '0–30°',
        'Tizim turi': 'Optik linza kesuvchi (edger), 3D parmalovchi (drill)',
        'Imkoniyatlar': 'Avtomatik, uch o\'lchamli (3D)'
      }
    },
    ru: {
      title: 'Optical lens edger ME-1',
      subtitle: 'Многофункциональная автоматическая система обработки и сверления линз',
      description: 'ME-1 — это высокотехнологичный станок для обработки линз, разработанный для передовых оптических лабораторий. Он позволяет выполнять высокоточную 3D-обработку и сверление для сложных спортивных очков и специальных оправ.',
      features: [
        'Ступенчатый фацет (step beveling) высотой до 11 мм',
        'Обработка линз высокой кривизны и индивидуальный фацет для спортивных и специальных оправ',
        'Дизайнерская резка (Design cut) на основе форм блокера',
        'Автоматическое 3D сверление с наклоном 0–30°',
        'Оптимизированная последовательность обработки с синхронизированными движениями'
      ],
      advantages: [
        '<strong>Сложные оправы:</strong> Ступенчатый фацет позволяет надежно устанавливать линзы в спортивные солнцезащитные очки (диаметр до 90 мм).',
        '<strong>Дизайнерская резка:</strong> Позволяет вырезать линзы по индивидуальным профилям, заданным на блокере.',
        '<strong>3D-сверление:</strong> Точная обработка пазов, выемок и отверстий под углом, необходимых для безободковых и полуободковых оправ.',
        '<strong>Долговечность:</strong> Усиленная конструкция повышает жесткость станка, обеспечивая стабильную и точную обработку при больших объемах работы.'
      ],
      specs: {
        'Поддерживаемый диаметр линзы': 'до ø90 мм',
        'Макс. высота ступенчатого фацета': 'до 11 мм',
        'Автоматическое 3D-сверление': 'Отверстия, пазы, выемки',
        'Угол наклона сверла': '0–30°',
        'Тип системы': 'Оптический станок, оптическая дрель',
        'Опции': 'Автоматический, трехмерный'
      }
    },
    en: {
      title: 'Optical lens edger ME-1',
      subtitle: 'Multifunctional automatic lens edging and drilling system',
      description: 'The ME-1 is an advanced optical lens edger designed for high-volume optical labs. It enables highly precise 3D drilling and custom beveling for complex sport and specialty frames.',
      features: [
        'Up to 11 mm height step beveling',
        'High curve and custom beveling for sport and specialty frames',
        'Design cut based on blocker shapes',
        'Automatic 3D drilling with 0–30° tilt',
        'Optimized processing sequence with synchronized movements'
      ],
      advantages: [
        '<strong>Step beveling:</strong> Enables secure fitting of Rx lenses into sunglass and sport frames. Accepts lenses up to ø90 mm.',
        '<strong>Design cut to unlock creativity:</strong> Mills lenses according to shapes defined on the blocker, supporting specialty eyewear designs.',
        '<strong>Automatic 3D drilling:</strong> Handles slots, notches, counterbored holes and jewel holes with accuracy. With a 0–30° tilt range.',
        '<strong>Durability:</strong> The reinforced structural design increases rigidity across the unit, ensuring stable, accurate processing and extended service life.'
      ],
      specs: {
        'Supported lens diameter': 'up to ø90 mm',
        'Maximum step bevel height': 'up to 11 mm',
        'Automatic 3D drilling': 'supports slots, notches, holes',
        'Drill unit tilt range': '0–30°',
        'Type of system': 'optical lens edger, optical lens drill',
        'Options': 'automatic, three-dimensional'
      }
    }
  },
  'lexce-plus-trend8': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242990.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242802.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242803.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242804.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242805.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242806.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242807.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243029.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243030.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243031.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243032.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243033.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243034.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243035.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243036.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243037.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21243038.webp',
      'https://video.medicalexpo.com/video_me/videos/video-125025.mp4'
    ],
    uz: {
      title: 'Optical lens shape tracer LEXCE plus Trend8',
      subtitle: 'Besh o\'qli 3D parmalash va linza kesish tizimi',
      description: 'LEXCE plus Trend8/Trend - bu optik laboratoriyalar va ustaxonalar uchun mo\'ljallangan andozasiz (patternless) linza kesish tizimi. 5 o\'qli 3D parmalash orqali turli uslubdagi hoshiyalar uchun moslashtiriladi.',
      features: [
        'Ko\'zoynak linzalarini pardozlash uchun ko\'p funksiyali andozasiz kesish',
        '5 o\'qli (5-axis) 3D parmalash va qirralarni jilolash (grooving)',
        'Trend8: O\'q barqarorligini ta\'minlovchi moslashuvchan linza qisqichi (clamp)',
        'Intellektual bloker va 3D o\'lchash (1 ko\'z uchun 1000 ta nuqta orqali skanerlash)',
        'Intuitiv 7-dyuymli rangli LCD sensorli ekran'
      ],
      advantages: [
        '<strong>Yuqori egrilikdagi kesish:</strong> Faseta balandligi va kengligi hoshiya materialiga moslash uchun erkin sozlanadi.',
        '<strong>5 o\'qli 3D parmalash:</strong> Teshik turlari avtomatik yoki qo\'lda juda aniq joylashish uchun sozlanishi mumkin. 6 marta kattalashtirish orqali nuqsonlarni tahrirlash.',
        '<strong>O\'q barqarorligi:</strong> Moslashuvchan qisqich linzaning orqa egriligi bo\'ylab lateral harakatlanib, sirpanishni oldini oladi.',
        '<strong>Qulay xizmat ko\'rsatish:</strong> O\'z-o\'zini tekshirish diagnostika funksiyasi muammo haqida 2D shtrix kod orqali ma\'lumot beradi.'
      ],
      specs: {
        'Ishlab chiqarish unumdorligi': 'Kuniga ~80 ta linza (8 soatda)',
        'Parmalash boshqaruvi': '5 o\'qli (5-axis) 3D parmalash',
        'Skanerlash': '3D skanerlash, to\'liq avtomatik qisish',
        'Ekran': '7-dyuymli rangli LCD sensor',
        'Qo\'shimcha funksiyalar': 'Self-check diagnostika, Maintenance monitor'
      }
    },
    ru: {
      title: 'Optical lens shape tracer LEXCE plus Trend8',
      subtitle: 'Пятиосевая система 3D сверления и обработки линз',
      description: 'LEXCE plus Trend8/Trend — это бесшаблонный станок, разработанный для оптических лабораторий и мастерских. С помощью 5-осевого 3D-сверления он адаптируется к широкому спектру оправ.',
      features: [
        'Универсальная бесшаблонная обработка офтальмологических линз',
        '5-осевое 3D сверление, снятие фаски безопасности и нарезка канавок',
        'Trend8: Гибкий зажим для линз для стабильности оси (axis stability)',
        'Интеллектуальный блокер и 3D сканирование (1000 точек на глаз)',
        'Интуитивно понятный 7-дюймовый цветной сенсорный ЖК-экран'
      ],
      advantages: [
        '<strong>Фацет высокой кривизны:</strong> Высота и ширина фацета свободно регулируются в соответствии с материалом оправы.',
        '<strong>5-осевое 3D-сверление:</strong> Углы сверления могут быть заданы автоматически или вручную для точного позиционирования с увеличением до 6×.',
        '<strong>Стабильность оси:</strong> Адаптивный зажим перемещается вдоль задней кривой линзы, стабилизируя смещенные центры и уменьшая сдвиг оси.',
        '<strong>Обслуживание:</strong> Функция самодиагностики выводит результаты в виде 2D-штрихкода для быстрой сервисной поддержки.'
      ],
      specs: {
        'Производительность': 'около 80 работ за 8-часовой день',
        'Управление сверлением': '5-осевой контроль для 3D сверления',
        'Трассировка': '3D трассировка оправы, полное автозажатие',
        'Дисплей': '7-дюймовый цветной сенсорный ЖК-экран',
        'Функции диагностики': 'Самодиагностика (выдает 2D-штрихкод)'
      }
    },
    en: {
      title: 'Optical lens shape tracer LEXCE plus Trend8',
      subtitle: 'Five-axis 3D drilling and lens edging system',
      description: 'The LEXCE plus Trend8/Trend is a patternless edger designed for ophthalmic labs and optical workshops. It supports a wide range of frame styles with its 5-axis 3D drilling.',
      features: [
        'Versatile patternless edging for ophthalmic lens finishing',
        '5-axis 3D drilling and sub-spindle for drilling, safety beveling and grooving',
        'Optional high base curve bevel (Trend8) and flexible lens clamping for axis stability',
        'Intelligent blocker and 3D frame tracing (1,000 points per eye)',
        '7-inch color LCD touchscreen with intuitive modes'
      ],
      advantages: [
        '<strong>High base curve bevel:</strong> Bevel height and width are freely adjustable. Front and rear bevels are ground independently.',
        '<strong>5-axis 3D drilling:</strong> Drilling angles can be set automatically or manually. Hole editing screen provides up to 6× magnification.',
        '<strong>Axis stability:</strong> Flexible lens clamp moves laterally along the lens rear curve to stabilize off-center cups, reducing PD and axis shift.',
        '<strong>Serviceability:</strong> Self-check function diagnoses components and outputs results as a 2D barcode for fast service.'
      ],
      specs: {
        'Designed throughput': 'approx. 80 jobs per 8-hour day',
        'Control system': '5-axis control for 3D drilling',
        'Tracing': 'Optional 3D frame tracing with full auto clamping',
        'Display': '7-inch color LCD touchscreen',
        'Maintenance': 'Maintenance monitor, Self-check diagnostic function'
      }
    }
  },


  'cube-alpha': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568332.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568333.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568331.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568338.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568341.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568342.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-18568345.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20510870.webp',
      'https://video.medicalexpo.com/video_me/videos/video-121858.mp4'
    ],
    uz: {
      title: 'Phacoemulsifier Cube α',
      subtitle: 'Katarakta jarrohligi uchun kuchli va ixcham ultratovush tizimi',
      description: 'Cube α - bu katarakta jarrohligi uchun mo\'ljallangan fakoemulsifikator tizimi. U yuqori unumdorlik va qulay dizaynni o\'zida jamlab, jarrohlarga barqaror hamda xavfsiz amaliyot o\'tkazish imkonini beradi.',
      features: [
        'Gyros torsional (Aylanma) fako texnologiyasi orqali ultratovush energiyasini boshqarish',
        'Kichik va joy tejovchi ixcham dizayn',
        'Ko\'p funksiyali va intuitiv sensorli ekran',
        'Kengaytirilgan suyuqlik dinamikasi',
        'Ishlatishga qulay simsiz oyoq pedali'
      ],
      advantages: [
        '<strong>Barqarorlik:</strong> Kichik hajmli asboblar bilan ishlaganda ham barqaror bosimni ta\'minlaydi.',
        '<strong>Aniqlik:</strong> Qattiq va yumshoq linza to\'qimalarini samarali va xavfsiz parchalaydi.',
        '<strong>Mobillik:</strong> Uskunaning yengil va ixchamligi uni istalgan joyga osongina joylashtirish imkonini beradi.'
      ],
      specs: {
        'Turi': 'Fakoemulsifikator (Katarakta)',
        'Texnologiya': 'Gyro torsional',
        'O\'rnatish': 'Stol usti / Portativ'
      }
    },
    ru: {
      title: 'Phacoemulsifier Cube α',
      subtitle: 'Мощная и компактная ультразвуковая система для хирургии катаракты',
      description: 'Cube α — это система факоэмульсификации, предназначенная для хирургии катаракты. Она сочетает в себе высокую производительность и удобный дизайн, обеспечивая хирургам стабильную и безопасную работу.',
      features: [
        'Технология торсионного фако (Gyros torsional) для управления ультразвуковой энергией',
        'Компактный дизайн, экономящий пространство',
        'Многофункциональный интуитивно понятный сенсорный экран',
        'Улучшенная гидродинамика',
        'Удобная беспроводная ножная педаль'
      ],
      advantages: [
        '<strong>Стабильность:</strong> Обеспечивает стабильное давление даже при работе с инструментами малого объема.',
        '<strong>Точность:</strong> Эффективно и безопасно фрагментирует плотные и мягкие ткани хрусталика.',
        '<strong>Мобильность:</strong> Легкость и компактность позволяют легко разместить устройство в любом месте.'
      ],
      specs: {
        'Тип': 'Факоэмульсификатор (Катаракта)',
        'Технология': 'Gyro torsional',
        'Установка': 'Настольная / Портативная'
      }
    },
    en: {
      title: 'Phacoemulsifier Cube α',
      subtitle: 'Powerful and compact ultrasound system for cataract surgery',
      description: 'The Cube α is a phacoemulsification system designed for cataract surgery. It combines high performance with a user-friendly design, providing surgeons with stable and safe operation.',
      features: [
        'Gyros torsional phaco technology for ultrasound energy control',
        'Small, space-saving compact design',
        'Multifunctional intuitive touchscreen display',
        'Enhanced fluidics dynamics',
        'Easy-to-use wireless foot pedal'
      ],
      advantages: [
        '<strong>Stability:</strong> Maintains stable pressure even when working with low-volume instruments.',
        '<strong>Precision:</strong> Efficiently and safely fragments hard and soft lens tissues.',
        '<strong>Mobility:</strong> Its light and compact nature allows it to be easily placed anywhere.'
      ],
      specs: {
        'Type': 'Phacoemulsifier (Cataract)',
        'Technology': 'Gyro torsional',
        'Setup': 'Tabletop / Portable'
      }
    }
  },
  'gyc-500': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511105.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511106.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511107.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511119.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511121.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511132.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511133.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20511134.webp'
    ],
    uz: {
      title: 'Retinal photocoagulation laser GYC-500',
      subtitle: 'Barqaror va ishonchli yashil lazer',
      description: 'GYC-500 Vixi / GYC-500 qattiq holatdagi lazerdan foydalanib, barqaror lazer chiqishini ta\'minlaydi. Kichik konsolga joylashtirilgan ushbu ko\'p funksiyali lazer har qanday xonada bemalol foydalanish uchun ixcham dizaynga ega.',
      features: [
        'Barqaror va ishonchli yashil lazer',
        'Yengil va ixcham dizayn',
        'Bir nechta skanerlash naqshlari (GYC-500 Vixi uchun)',
        'Avtomatik oldinga siljish (Auto forward)',
        'Turli xil yetkazib berish qurilmalarini tanlash imkoniyati'
      ],
      advantages: [
        '<strong>Barqarorlik:</strong> Ikkita sovutish ventilyatori to\'g\'ri ichki haroratni saqlab turadi.',
        '<strong>Portativlik:</strong> Joyni tejaydigan dizayn deyarli har qanday xonaga ko\'chirish imkonini beradi.',
        '<strong>Samaradorlik:</strong> 22 ta oldindan dasturlashtirilgan skanerlash naqshlari davolash samaradorligini oshiradi va bemorning o\'tirish vaqtini qisqartiradi.',
        '<strong>Avtomatik o\'tish:</strong> Takroriy rejim tufayli shifokor doimiy ravishda oyoq tugmasini bosmasdan e\'tiborni fokusni sozlashga qaratadi.'
      ],
      specs: {
        'Qo\'llanilishi': 'To\'r pardasi fotokoagulyatsiyasi',
        'Kuchaytiruvchi muhit': 'Nd:YAG',
        'O\'rnatish': 'Stol usti (tabletop)',
        'To\'lqin uzunligi': '532 nm',
        'O\'rtacha quvvat': 'Min.: 0.05 Vt, Maks.: 1.7 Vt',
        'Og\'irligi': '6.2 kg (13.67 lb)'
      }
    },
    ru: {
      title: 'Retinal photocoagulation laser GYC-500',
      subtitle: 'Стабильный и надежный зеленый лазер',
      description: 'GYC-500 Vixi / GYC-500 обеспечивает стабильный выход лазера благодаря использованию твердотельного лазера. Этот многофункциональный лазер помещен в небольшую консоль. Компактный дизайн позволяет использовать его практически в любом кабинете.',
      features: [
        'Стабильный и надежный зеленый лазер',
        'Легкий и компактный дизайн',
        'Множество паттернов сканирования (для GYC-500 Vixi)',
        'Автоматическое продвижение (Auto forward)',
        'Широкий выбор подключаемых модулей доставки'
      ],
      advantages: [
        '<strong>Стабильность:</strong> Два охлаждающих вентилятора в консоли поддерживают правильную внутреннюю температуру.',
        '<strong>Эргономика:</strong> Эндофотозонды могут быть подключены к GYC-500 для упрощения настройки и процедур.',
        '<strong>Эффективность:</strong> 22 запрограммированных паттерна сканирования повышают эффективность лечения и сокращают время пребывания пациента.',
        '<strong>Автоматизация:</strong> Режим повторения с функцией автоматического продвижения позволяет обрабатывать последовательные участки без повторного нажатия педали.'
      ],
      specs: {
        'Применение': 'Фотокоагуляция сетчатки',
        'Усиливающая среда': 'Nd:YAG',
        'Форм-фактор': 'Настольный (tabletop)',
        'Длина волны': '532 нм',
        'Средняя мощность': 'Мин.: 0.05 Вт, Макс.: 1.7 Вт',
        'Вес': '6.2 кг (13.67 фунтов)'
      }
    },
    en: {
      title: 'Retinal photocoagulation laser GYC-500',
      subtitle: 'Stable and reliable green laser',
      description: 'The GYC-500 Vixi / GYC-500 ensures stable laser output by using a solid state laser. Two cooling fans in the console maintain the correct internal temperature. This multifunction laser is housed in a small console allowing portability to virtually any room.',
      features: [
        'Stable and reliable green laser',
        'Lightweight and compact design',
        'Multiple scan patterns (available for the GYC-500 Vixi)',
        'Auto forward (available for the GYC-500 Vixi)',
        'Wide range of selectable delivery units'
      ],
      advantages: [
        '<strong>Compact:</strong> The space-saving design allows portability. Endophoto probes can be connected to simplify setup.',
        '<strong>Combo unit:</strong> The optional GYC-500 combination delivery unit enhances the clinical versatility of the YC-200 S plus / YC-200.',
        '<strong>Multiple patterns:</strong> There are 22 preprogrammed scan patterns to allow treatment of varying retinal pathologies.',
        '<strong>Auto forward:</strong> Repeat mode with the auto forward function enables consecutive regions to undergo photocoagulation on a selected path without repeatedly pressing the foot switch.'
      ],
      specs: {
        'Applications': 'retinal photocoagulation',
        'Amplifying medium': 'Nd:YAG',
        'Ergonomics': 'tabletop',
        'Wavelength': '532 nm',
        'Average power': 'Min.: 0.05 W, Max.: 1.7 W',
        'Weight': '6.2 kg (13.67 lb)'
      }
    }
  },
  'yc-200-s-plus': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-19550464.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20510901.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20510902.webp',
      'https://video.medicalexpo.com/video_me/videos/video-107278.mp4'
    ],
    uz: {
      title: 'Trabeculoplasty laser YC-200 S plus',
      subtitle: 'Tozalangan va kam energiya bilan ishlovchi ilg\'or lazer',
      description: 'YC-200 S plus havodagi 1.6 mJ plazma chegarasiga erishib, kam energiya bilan aniq va ishonchli davolashni ta\'minlaydi. Shuningdek, ilg\'or SLT rejimini taklif etadi.',
      features: [
        'Kam energiya bilan takomillashtirilgan lazer yetkazib berish',
        'SLT (Selektiv Lazer Trabekuloplastika) rejimi',
        'Aniq va tiniq ko\'rish maydoni',
        'Aniq yo\'naltiruvchi nur (Aiming beam)',
        'Optimallashtirilgan ish masofasi',
        'Noyob joystik'
      ],
      advantages: [
        '<strong>SLT-NAVI:</strong> Lazer bilan davolash jarayonini intuitiv ko\'rsatib, jarrohga muhim ma\'lumot beradi.',
        '<strong>Aniq ko\'rish maydoni:</strong> Yaxshilangan optik dizayn rezolyutsiya va kontrastni optimallashtiradi. Noyob LED yoritish tizimi aberatsiyani kamaytiradi.',
        '<strong>Aniq nur yo\'naltirish:</strong> Motorlashtirilgan 360° aylanadigan yo\'naltiruvchi nur korneal xiraliklarni chetlab o\'tadi.',
        '<strong>Optimallashtirilgan masofa:</strong> Qisqa ish masofasi davolash paytida jarroh charchog\'ini kamaytiradi.'
      ],
      specs: {
        'Qo\'llanilishi': 'Trabekuloplastika, kapsulotomiya',
        'Kuchaytiruvchi muhit': 'Nd:YAG',
        'O\'rnatish': 'Stol usti (tabletop)',
        'Impuls davomiyligi': 'Nanosoniya (nanosecond)',
        'To\'lqin uzunligi': '532 nm, 1,064 nm',
        'Og\'irligi': '18 kg (39.68 lb)'
      }
    },
    ru: {
      title: 'Trabeculoplasty laser YC-200 S plus',
      subtitle: 'Точный лазер с низким потреблением энергии',
      description: 'YC-200 S plus достигает порога плазмы 1,6 мДж в воздухе, обеспечивая точное и надежное лечение при более низкой энергии. Аппарат предлагает передовой режим SLT.',
      features: [
        'Улучшенная подача лазера с меньшей энергией',
        'Режим SLT (Селективная лазерная трабекулопластика)',
        'Четкое и резкое поле зрения',
        'Точный прицельный луч',
        'Оптимизированное рабочее расстояние',
        'Уникальный джойстик'
      ],
      advantages: [
        '<strong>SLT-NAVI:</strong> Эта функция предоставляет интуитивно понятное отображение прогресса лечения, давая хирургу важную обратную связь.',
        '<strong>Четкая видимость:</strong> Улучшенный оптический дизайн и уникальная система освещения со светодиодным источником минимизируют аберрацию.',
        '<strong>Точный прицельный луч:</strong> Моторизованный вращающийся на 360° прицельный луч позволяет избежать помутнений роговицы.',
        '<strong>Оптимизированная дистанция:</strong> Максимальное рабочее расстояние облегчает манипуляции с контактной линзой и снижает усталость хирурга.'
      ],
      specs: {
        'Применение': 'Трабекулопластика, капсулотомия',
        'Усиливающая среда': 'Nd:YAG',
        'Форм-фактор': 'Настольный (tabletop)',
        'Длительность импульса': 'Наносекунда (nanosecond)',
        'Длина волны': '532 нм, 1,064 нм',
        'Вес': '18 кг (39.68 фунтов)'
      }
    },
    en: {
      title: 'Trabeculoplasty laser YC-200 S plus',
      subtitle: 'Refined laser delivery with lower energy',
      description: 'The YC-200 S plus / YC-200 achieves 1.6 mJ plasma threshold in air, delivering accurate and robust treatments with lower energy. It also offers an advanced SLT mode highly effective for treating open angle glaucoma.',
      features: [
        'Refined laser delivery with lower energy',
        'SLT mode',
        'Clear and sharp field of view',
        'Precise aiming beam',
        'Optimized operating distance',
        'Unique joystick'
      ],
      advantages: [
        '<strong>SLT-NAVI:</strong> Presents an intuitive display on the progress of laser treatment, providing the surgeon with important feedback.',
        '<strong>Clear field of view:</strong> An improved optical design that optimizes resolution and contrast. A unique illumination system with an LED light source results in a bright, near-natural view.',
        '<strong>Precise aiming beam:</strong> The dual aiming beam offers superior targeting with a 360° rotating aiming beam that can avoid corneal opacities.',
        '<strong>Optimized distance:</strong> Maximized working distance allows easier manipulation of the contact lens, and the short operating distance decreases surgeon fatigue.'
      ],
      specs: {
        'Applications': 'trabeculoplasty, capsulotomy',
        'Amplifying medium': 'Nd:YAG',
        'Ergonomics': 'tabletop',
        'Pulse duration': 'nanosecond',
        'Wavelength': '532 nm, 1,064 nm',
        'Weight': '18 kg (39.68 lb)'
      }
    }
  },

  'phantom': {
    video: 'https://video.medicalexpo.com/video_me/videos/video-125022.mp4',
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242747.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242749.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242752.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242884.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242899.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242901.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242902.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242903.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242904.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242910.webp',
      'https://video.medicalexpo.com/video_me/videos/video-125022.mp4'
    ],
    uz: {
      title: 'PHANTOM™ (Ochiq Maydon Refraksiya Tizimi)',
      subtitle: 'Ko‘z oldida jismoniy linzalarsiz binokulyar refraksiya tizimi',
      description: 'PHANTOM™ — bu bemorning ko‘z oldiga jismoniy linzalar qo‘ymasdan obyektiv va subyektiv refraksiyani amalga oshiruvchi ochiq maydonli binokulyar refraksiya tizimidir. U tabiiy ko‘rish sharoitida tekshiruv o‘tkazish uchun turli masofalarda suzuvchi jadvallarni taqdim etadi. Virtual linzalar haqiqiy sinov linzalarining optik xususiyatlarini aniq takrorlaydi.',
      features: [
        'Haqiqiy ochiq maydonli binokulyar refraksiya',
        'Turli masofalarda suzuvchi jadvallarni taqdim etish',
        'Obyektiv va subyektiv testlar uchun virtual linza simulyatsiyasi',
        'Vizual taqdimotni boshqarish va yo‘naltirilgan test ketma-ketligi',
        'Asbob miopiyasisiz obyektiv refraksiya'
      ],
      advantages: [
        '<strong>Tabiiy ko‘rish, haqiqiy aniqlik:</strong> Ochiq maydon testi asbob miopiyasi, akkomodativ beqarorlik va qorachiq hajmi ta\'sirini kamaytiradi.',
        '<strong>Qoyilmaqom tajriba (WOW):</strong> Jadval havoda suzib turgandek ko‘rinadi va bemorga tabiiy to‘g‘riga qarashni saqlashga imkon beradi.',
        '<strong>Barchaga qulay:</strong> Klinik ish jarayoniga integratsiya qilish uchun mo‘ljallangan; operatorlar o‘rtasida izchil refraksiyani ta\'minlaydi.',
        '<strong>Subyektiv refraksiya:</strong> Binokulyar ko‘rish ko‘zlar o‘rtasida muvozanatli o‘lchovlarni kafolatlaydi.'
      ],
      specs: {
        'Qurilma turi': 'Ochiq maydonli binokulyar refraksiya tizimi',
        'Asosiy funksiyalari': 'Obyektiv va subyektiv refraksiya, suzuvchi jadvallar',
        'O‘ziga xosligi': 'Virtual linza simulyatsiyasi, tabiiy to‘g‘riga qarash testi'
      }
    },
    ru: {
      title: 'Офтальмологический прибор рефрактометр PHANTOM™',
      subtitle: 'Бинокулярная система рефракции без физических линз перед глазами',
      description: 'PHANTOM™ — это бинокулярная система рефракции открытого поля, которая выполняет объективную и субъективную рефракцию без установки физических линз перед глазами. Она отображает плавающие таблицы на различных расстояниях тестирования для проведения исследований в естественных условиях зрения. Виртуальные линзы воспроизводят оптические свойства реальных пробных линз.',
      features: [
        'Истинная бинокулярная рефракция открытого поля',
        'Отображение плавающих таблиц на различных расстояниях',
        'Виртуальная симуляция линз для объективного и субъективного тестирования',
        'Управление визуальной презентацией и направляемые последовательности тестов',
        'Объективная рефракция без приборной миопии'
      ],
      advantages: [
        '<strong>Естественное зрение, реальная точность:</strong> Тестирование в открытом поле снижает приборную миопию, аккомодационную нестабильность и влияние размера зрачка.',
        '<strong>WOW-эффект:</strong> Изображение таблицы кажется парящим в воздухе, позволяя пациентам сохранять естественный взгляд вперед.',
        '<strong>Простота для каждого:</strong> Разработано для интеграции в клинический рабочий процесс; способствует единообразным результатам у разных операторов.',
        '<strong>Субъективная рефракция:</strong> Бинокулярное зрение обеспечивает сбалансированные измерения между глазами.'
      ],
      specs: {
        'Тип устройства': 'Бинокулярная система рефракции открытого поля',
        'Основные функции': 'Объективная и субъективная рефракция, плавающие таблицы',
        'Особенности': 'Виртуальная симуляция линз, тестирование с естественным взглядом вперед'
      }
    },
    en: {
      title: 'PHANTOM™ Open-field Refraction System',
      subtitle: 'Open-field binocular refraction system without physical lenses',
      description: 'PHANTOM™ is an open-field binocular refraction system that performs objective and subjective refraction without placing physical lenses in front of the eyes. It presents floating charts at variable testing distances to enable examinations under natural viewing conditions. Virtual lenses reproduce the optical properties of real trial lenses.',
      features: [
        'True open-field binocular refraction',
        'Floating chart presentation at variable distances',
        'Virtual lens simulation for objective and subjective testing',
        'Visual presentation controls and guided testing sequences',
        'Objective refraction without instrument myopia'
      ],
      advantages: [
        '<strong>Natural vision, real precision:</strong> Open-field testing reduces instrument myopia, accommodative instability, and pupil size influence.',
        '<strong>A WOW experience:</strong> The chart image appears to float, allowing patients to maintain a natural forward gaze.',
        '<strong>Easy for anyone:</strong> Designed for integration into clinical workflow; promotes consistent refraction across operators.',
        '<strong>Subjective refraction:</strong> Binocular viewing ensures balanced measurements between eyes.'
      ],
      specs: {
        'System type': 'Open-field binocular refraction system',
        'Primary functions': 'Objective & subjective refraction, floating charts',
        'Highlights': 'Virtual lens simulation, natural forward gaze testing'
      }
    }
  },
  'slit-lamp': {
    images: [
      'https://sevenoe.com/application/wp-content/uploads/2023/12/zeiss_sl_800-min-1024x1024.jpg'
    ],
    uz: {
      title: 'Slit Lamp',
      subtitle: 'Professional oftalmologik tekshiruv uskunasi',
      description: 'Slit Lamp — ko‘zning old va ichki qismlarini yuqori aniqlikda tekshirish uchun mo‘ljallangan zamonaviy oftalmologik mikroskopdir. Ushbu uskuna kornea, iris, linza va retina holatini batafsil diagnostika qilish imkonini beradi.<br><br>Qurilma oftalmologiya klinikalari, eye center va diagnostika markazlarida eng muhim tekshiruv uskunalaridan biri hisoblanadi.',
      features: [
        'Ko‘zning old qismini tekshirish',
        'Kornea diagnostikasi',
        'Katarakta aniqlash',
        'Retina tekshiruvi',
        'Yuqori aniqlikdagi optik tizim',
        'LED yoritish texnologiyasi',
        'Kattalashtirish funksiyasi',
        'Professional mikroskop tizimi'
      ],
      advantages: [
        '<strong>Yuqori aniqlik:</strong> Ko‘z tuzilishini maksimal darajada tiniq ko‘rsatadi.',
        '<strong>Zamonaviy optik tizim:</strong> Professional diagnostika uchun ishlab chiqilgan.',
        '<strong>Qulay boshqaruv:</strong> Ergonomik va foydalanishga qulay.',
        '<strong>Kuchli yoritish:</strong> LED illumination texnologiyasi yordamida aniq tasvir beradi.',
        '<strong>Professional dizayn:</strong> Klinikalar uchun premium ko‘rinish.'
      ],
      specs: {
        'Qurilma turi': 'Slit Lamp',
        'Mikroskop turi': 'Binocular',
        'Yoritish': 'LED',
        'Kattalashtirish': 'Multi-step Zoom',
        'Fokuslash': 'Manual / Auto',
        'Elektr ta’minoti': '100-240V',
        'Material': 'Premium Medical Grade'
      }
    },
    ru: {
      title: 'Щелевая лампа (Slit Lamp)',
      subtitle: 'Профессиональное офтальмологическое смотровое оборудование',
      description: 'Щелевая лампа — современный офтальмологический микроскоп, предназначенный для высокоточного исследования переднего и внутреннего отрезка глаза. Данное устройство позволяет проводить детальную диагностику состояния роговицы, радужки, хрусталика и сетчатки.<br><br>Прибор является одним из важнейших диагностических инструментов в офтальмологических клиниках, глазных центрах и диагностических учреждениях.',
    }
  },
  'phantom2': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242747.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242749.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242752.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242884.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242899.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242901.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242902.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242903.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242904.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-21242910.webp'
    ],
    video: 'https://video.medicalexpo.com/video_me/videos/video-125022.mp4',
    uz: {
      title: 'PHANTOM™ (Ochiq Maydon Refraksiya Tizimi)',
      subtitle: 'Ko‘z oldida jismoniy linzalarsiz binokulyar refraksiya tizimi',
      description: 'PHANTOM™ — bu bemorning ko‘z oldiga jismoniy linzalar qo‘ymasdan obyektiv va subyektiv refraksiyani amalga oshiruvchi ochiq maydonli binokulyar refraksiya tizimidir. U tabiiy ko‘rish sharoitida tekshiruv o‘tkazish uchun turli masofalarda suzuvchi jadvallarni taqdim etadi. Virtual linzalar haqiqiy sinov linzalarining optik xususiyatlarini aniq takrorlaydi.',
      features: [
        'Haqiqiy ochiq maydonli binokulyar refraksiya',
        'Turli masofalarda suzuvchi jadvallarni taqdim etish',
        'Obyektiv va subyektiv testlar uchun virtual linza simulyatsiyasi',
        'Vizual taqdimotni boshqarish va yo‘naltirilgan test ketma-ketligi',
        'Asbob miopiyasisiz obyektiv refraksiya'
      ],
      advantages: [
        '<strong>Tabiiy ko‘rish, haqiqiy aniqlik:</strong> Ochiq maydon testi asbob miopiyasi, akkomodativ beqarorlik va qorachiq hajmi ta\'sirini kamaytiradi.',
        '<strong>Qoyilmaqom tajriba (WOW):</strong> Jadval havoda suzib turgandek ko‘rinadi va bemorga tabiiy to‘g‘riga qarashni saqlashga imkon beradi.',
        '<strong>Barchaga qulay:</strong> Klinik ish jarayoniga integratsiya qilish uchun mo‘ljallangan; operatorlar o‘rtasida izchil refraksiyani ta\'minlaydi.',
        '<strong>Subyektiv refraksiya:</strong> Binokulyar ko‘rish ko‘zlar o‘rtasida muvozanatli o‘lchovlarni kafolatlaydi.'
      ],
      specs: {
        'Qurilma turi': 'Ochiq maydonli binokulyar refraksiya tizimi',
        'Asosiy funksiyalari': 'Obyektiv va subyektiv refraksiya, suzuvchi jadvallar',
        'O‘ziga xosligi': 'Virtual linza simulyatsiyasi, tabiiy to‘g‘riga qarash testi'
      }
    },
    ru: {
      title: 'Офтальмологический прибор рефрактометр PHANTOM™',
      subtitle: 'Бинокулярная система рефракции без физических линз перед глазами',
      description: 'PHANTOM™ — это бинокулярная система рефракции открытого поля, которая выполняет объективную и субъективную рефракцию без установки физических линз перед глазами. Она отображает плавающие таблицы на различных расстояниях тестирования для проведения исследований в естественных условиях зрения. Виртуальные линзы воспроизводят оптические свойства реальных пробных линз.',
      features: [
        'Истинная бинокулярная рефракция открытого поля',
        'Отображение плавающих таблиц на различных расстояниях',
        'Виртуальная симуляция линз для объективного и субъективного тестирования',
        'Управление визуальной презентацией и направляемые последовательности тестов',
        'Объективная рефракция без приборной миопии'
      ],
      advantages: [
        '<strong>Естественное зрение, реальная точность:</strong> Тестирование в открытом поле снижает приборную миопию, аккомодационную нестабильность и влияние размера зрачка.',
        '<strong>WOW-эффект:</strong> Изображение таблицы кажется парящим в воздухе, позволяя пациентам сохранять естественный взгляд вперед.',
        '<strong>Простота для каждого:</strong> Разработано для интеграции в клинический рабочий процесс; способствует единообразным результатам у разных операторов.',
        '<strong>Субъективная рефракция:</strong> Бинокулярное зрение обеспечивает сбалансированные измерения между глазами.'
      ],
      specs: {
        'Тип устройства': 'Бинокулярная система рефракции открытого поля',
        'Основные функции': 'Объективная и субъективная рефракция, плавающие таблицы',
        'Особенности': 'Виртуальная симуляция линз, тестирование с естественным взглядом вперед'
      }
    },
    en: {
      title: 'PHANTOM™ Open-field Refraction System',
      subtitle: 'Open-field binocular refraction system without physical lenses',
      description: 'PHANTOM™ is an open-field binocular refraction system that performs objective and subjective refraction without placing physical lenses in front of the eyes. It presents floating charts at variable testing distances to enable examinations under natural viewing conditions. Virtual lenses reproduce the optical properties of real trial lenses.',
      features: [
        'True open-field binocular refraction',
        'Floating chart presentation at variable distances',
        'Virtual lens simulation for objective and subjective testing',
        'Visual presentation controls and guided testing sequences',
        'Objective refraction without instrument myopia'
      ],
      advantages: [
        '<strong>Natural vision, real precision:</strong> Open-field testing reduces instrument myopia, accommodative instability, and pupil size influence.',
        '<strong>A WOW experience:</strong> The chart image appears to float, allowing patients to maintain a natural forward gaze.',
        '<strong>Easy for anyone:</strong> Designed for integration into clinical workflow; promotes consistent refraction across operators.',
        '<strong>Subjective refraction:</strong> Binocular viewing ensures balanced measurements between eyes.'
      ],
      specs: {
        'System type': 'Open-field binocular refraction system',
        'Primary functions': 'Objective & subjective refraction, floating charts',
        'Highlights': 'Virtual lens simulation, natural forward gaze testing'
      }
    }
  },
  'slit-lamp': {
    images: [
      'https://sevenoe.com/application/wp-content/uploads/2023/12/zeiss_sl_800-min-1024x1024.jpg'
    ],
    uz: {
      title: 'Slit Lamp',
      subtitle: 'Professional oftalmologik tekshiruv uskunasi',
      description: 'Slit Lamp — ko‘zning old va ichki qismlarini yuqori aniqlikda tekshirish uchun mo‘ljallangan zamonaviy oftalmologik mikroskopdir. Ushbu uskuna kornea, iris, linza va retina holatini batafsil diagnostika qilish imkonini beradi.<br><br>Qurilma oftalmologiya klinikalari, eye center va diagnostika markazlarida eng muhim tekshiruv uskunalaridan biri hisoblanadi.',
      features: [
        'Ko‘zning old qismini tekshirish',
        'Kornea diagnostikasi',
        'Katarakta aniqlash',
        'Retina tekshiruvi',
        'Yuqori aniqlikdagi optik tizim',
        'LED yoritish texnologiyasi',
        'Kattalashtirish funksiyasi',
        'Professional mikroskop tizimi'
      ],
      advantages: [
        '<strong>Yuqori aniqlik:</strong> Ko‘z tuzilishini maksimal darajada tiniq ko‘rsatadi.',
        '<strong>Zamonaviy optik tizim:</strong> Professional diagnostika uchun ishlab chiqilgan.',
        '<strong>Qulay boshqaruv:</strong> Ergonomik va foydalanishga qulay.',
        '<strong>Kuchli yoritish:</strong> LED illumination texnologiyasi yordamida aniq tasvir beradi.',
        '<strong>Professional dizayn:</strong> Klinikalar uchun premium ko‘rinish.'
      ],
      specs: {
        'Qurilma turi': 'Slit Lamp',
        'Mikroskop turi': 'Binocular',
        'Yoritish': 'LED',
        'Kattalashtirish': 'Multi-step Zoom',
        'Fokuslash': 'Manual / Auto',
        'Elektr ta’minoti': '100-240V',
        'Material': 'Premium Medical Grade'
      }
    },
    ru: {
      title: 'Щелевая лампа (Slit Lamp)',
      subtitle: 'Профессиональное офтальмологическое смотровое оборудование',
      description: 'Щелевая лампа — современный офтальмологический микроскоп, предназначенный для высокоточного исследования переднего и внутреннего отрезка глаза. Данное устройство позволяет проводить детальную диагностику состояния роговицы, радужки, хрусталика и сетчатки.<br><br>Прибор является одним из важнейших диагностических инструментов в офтальмологических клиниках, глазных центрах и диагностических учреждениях.',
      features: [
        'Исследование переднего отрезка глаза',
        'Диагностика роговицы',
        'Выявление катаракты',
        'Исследование сетчатки',
        'Высокоточная оптическая система',
        'Технология LED-освещения',
        'Функция увеличения',
        'Профессиональная система микроскопа'
      ],
      advantages: [
        '<strong>Высокая точность:</strong> Обеспечивает максимально четкое отображение структуры глаза.',
        '<strong>Современная оптическая система:</strong> Разработана для профессиональной диагностики.',
        '<strong>Удобное управление:</strong> Эргономичный и удобный в использовании интерфейс.',
        '<strong>Мощное освещение:</strong> Технология LED-освещения дает четкое изображение.',
        '<strong>Профессиональный дизайн:</strong> Премиальный вид для клиник.'
      ],
      specs: {
        'Тип устройства': 'Щелевая лампа (Slit Lamp)',
        'Тип микроскопа': 'Бинокулярный (Binocular)',
        'Освещение': 'LED',
        'Увеличение': 'Многоступенчатое (Multi-step Zoom)',
        'Фокусировка': 'Ручная / Авто (Manual / Auto)',
        'Питание': '100-240В',
        'Материал': 'Медицинский премиум класс (Premium Medical Grade)'
      }
    },
    en: {
      title: 'Slit Lamp',
      subtitle: 'Professional ophthalmic examination equipment',
      description: 'A Slit Lamp is a modern ophthalmic microscope designed for high-precision examination of the anterior and interior segments of the eye. This device allows for detailed diagnostics of the cornea, iris, lens, and retina.<br><br>The instrument is one of the most essential examination devices in ophthalmology clinics, eye centers, and diagnostic facilities.',
      features: [
        'Anterior segment examination',
        'Corneal diagnostics',
        'Cataract detection',
        'Retinal examination',
        'High-precision optical system',
        'LED illumination technology',
        'Magnification functionality',
        'Professional microscope system'
      ],
      advantages: [
        '<strong>High precision:</strong> Displays eye structures with maximum clarity.',
        '<strong>Modern optical system:</strong> Designed for professional diagnostics.',
        '<strong>Convenient control:</strong> Ergonomic and easy to use.',
        '<strong>Powerful illumination:</strong> LED illumination technology provides a clear image.',
        '<strong>Professional design:</strong> Premium look for clinics.'
      ],
      specs: {
        'Device Type': 'Slit Lamp',
        'Microscope Type': 'Binocular',
        'Illumination': 'LED',
        'Magnification': 'Multi-step Zoom',
        'Focusing': 'Manual / Auto',
        'Power Supply': '100-240V',
        'Material': 'Premium Medical Grade'
      }
    }
  },
  'lensmeter': {
    images: [
      'https://4.imimg.com/data4/HP/IW/MY-19073775/manual-lensmeter-500x500.jpg'
    ],
    uz: {
      title: 'Lensmeter',
      subtitle: 'Professional linza olchash uskunasi',
      description: 'Professional oftalmologik uskuna.',
      features: [
        'Linza dioptriyasini olchash',
        'Astigmatizm aniqlash',
        'Prism analiz',
        'Optical center aniqlash',
        'Digital display',
        'Avtomatik analiz tizimi'
      ],
      advantages: [
        '<strong>Yuqori aniqlik:</strong> Optik parametrlarni aniq hisoblaydi.',
        '<strong>Tez ishlash:</strong> Bir necha soniyada natija beradi.',
        '<strong>Zamonaviy texnologiya:</strong> Digital boshqaruv tizimi bilan jihozlangan.',
        '<strong>Foydalanish qulayligi:</strong> Operator uchun sodda interfeys.'
      ],
      specs: {
        'Qurilma turi': 'Lensmeter',
        'O‘lchash turi': 'Digital',
        'Display': 'LCD',
        'Prism o‘lchovi': 'Mavjud',
        'Fokuslash': 'Automatic',
        'Printer': 'Thermal Printer'
      }
    },
    ru: {
      title: 'Лензметр (Диоптриметр)',
      subtitle: 'Профессиональное оборудование для измерения очковых линз',
      description: 'Лензметр — профессиональное офтальмологическое устройство, предназначенное для определения оптических параметров очковых линз. Прибор точно измеряет диоптрийность, астигматизм и оптический центр линзы.<br><br>Широко применяется в центрах оптики и офтальмологических клиниках.',
      features: [
        'Измерение диоптрий линзы',
        'Определение астигматизма',
        'Призматический анализ',
        'Определение оптического центра',
        'Цифровой дисплей',
        'Система автоматического анализа'
      ],
      advantages: [
        '<strong>Высокая точность:</strong> Точно вычисляет оптические параметры.',
        '<strong>Быстрая работа:</strong> Выдает результат за несколько секунд.',
        '<strong>Современные технологии:</strong> Оснащен цифровой системой управления.',
        '<strong>Удобство использования:</strong> Простой интерфейс для оператора.'
      ],
      specs: {
        'Тип устройства': 'Лензметр (Lensmeter)',
        'Тип измерения': 'Цифровой (Digital)',
        'Дисплей': 'LCD',
        'Призматическое измерение': 'Есть (Available)',
        'Фокусировка': 'Автоматическая (Automatic)',
        'Принтер': 'Термопринтер (Thermal Printer)'
      }
    },
    en: {
      title: 'Lensmeter',
      subtitle: 'Professional eyeglass lens measurement equipment',
      description: 'A Lensmeter is a professional ophthalmic device designed to determine the optical parameters of eyeglass lenses. The device accurately measures the diopter, astigmatism, and optical center of the lens.<br><br>It is widely used in optical centers and ophthalmology clinics.',
      features: [
        'Lens diopter measurement',
        'Astigmatism detection',
        'Prism analysis',
        'Optical center detection',
        'Digital display',
        'Automatic analysis system'
      ],
      advantages: [
        '<strong>High accuracy:</strong> Accurately calculates optical parameters.',
        '<strong>Fast operation:</strong> Provides results in just a few seconds.',
        '<strong>Modern technology:</strong> Equipped with a digital control system.',
        '<strong>Ease of use:</strong> Simple interface for the operator.'
      ],
      specs: {
        'Device Type': 'Lensmeter',
        'Measurement Type': 'Digital',
        'Display': 'LCD',
        'Prism Measurement': 'Available',
        'Focusing': 'Automatic',
        'Printer': 'Thermal Printer'
      }
    }
  },
  'phoropter': {
    images: [
      'https://images.openai.com/static-rsc-4/VpVaNetYKZyKtxcrlhFyQ4JQpgaoAeG1sbnE_Fu_M2tttikSUQg3GlO_XUcC-OtEKU-L-8cEUdghkNNqfgCuzMu8XUSIiHH7szx8O-xTTiOBWREa5Rz9ykhWl8LscQM01lr5wux13QbxkBPa_aORa3sLrCx2cEBtsU_j3qFTq9l9EwKpOD1vDDU968djH2K1?purpose=fullsize',
      'https://images.openai.com/static-rsc-4/TDBAfbw78JOtYtofdlpwtvQWT3whUZ_aaflF5otFta_INDYlZCUUDbXn6GO5kNnAnTE0NC3dZTionsp_S0rRq5A9cMCL37ZMiKw-R6hiBpN1R4kQbB-xKiRBI3ZFQNvSwaIlqJocXGunZkrH6geSeVqczdZMZjewes8RiAWNRWPvdzTRD8BAG5iwio6YoLGB?purpose=fullsize',
      'https://images.openai.com/static-rsc-4/q9dFc91vygEr4b0vvLEwkHNgaPycDsejWMLFkoUZDonj8xPPisl5KQWNskQvpdReehmtatQRFJOsLDSKtc-tIl_3PSMbhIkxdGvRmp_uN1ViuFMf5pfDxnu8CXqKZIiOhEzQBCcVi44JCHXozX3T4wOK5qYt-Wvylw0Y_sqIRY9TYc0a0h6jm_CLwA1Wp2y_?purpose=fullsize'
    ],
    uz: {
      title: 'Phoropter',
      subtitle: 'Professional ko‘rish tekshiruvi uskunasi',
      description: 'Phoropter — bemorning ko‘rish darajasini aniqlash va optimal linzalarni tanlash uchun ishlatiladigan professional oftalmologik qurilma.<br><br>Ushbu uskuna refraksiya diagnostikasida muhim ahamiyatga ega.',
      features: [
        'Vision testing',
        'Lens switching system',
        'Astigmatizm analizi',
        'Refraksiya diagnostikasi',
        'Professional optik tizim'
      ],
      advantages: [
        '<strong>Aniqlik:</strong> Ko‘rish parametrlarini maksimal aniq o‘lchaydi.',
        '<strong>Qulay foydalanish:</strong> Operator uchun ergonomik boshqaruv.',
        '<strong>Professional dizayn:</strong> Zamonaviy klinikalar uchun mos.'
      ],
      specs: {
        'Qurilma turi': 'Phoropter',
        'Lens tizimi': 'Multi Lens',
        'Material': 'Medical Grade',
        'Boshqaruv': 'Manual / Digital'
      }
    },
    ru: {
      title: 'Фороптер',
      subtitle: 'Профессиональное оборудование для проверки зрения',
      description: 'Фороптер — профессиональное офтальмологическое устройство, используемое для определения остроты зрения пациента и подбора оптимальных линз.<br><br>Данное оборудование играет важную роль в диагностике рефракции.',
      features: [
        'Проверка зрения (Vision testing)',
        'Система переключения линз',
        'Анализ астигматизма',
        'Диагностика рефракции',
        'Профессиональная оптическая система'
      ],
      advantages: [
        '<strong>Точность:</strong> Максимально точно измеряет параметры зрения.',
        '<strong>Удобство использования:</strong> Эргономичное управление для оператора.',
        '<strong>Профессиональный дизайн:</strong> Подходит для современных клиник.'
      ],
      specs: {
        'Тип устройства': 'Фороптер (Phoropter)',
        'Система линз': 'Мультилизновая (Multi Lens)',
        'Материал': 'Медицинского класса (Medical Grade)',
        'Управление': 'Ручное / Цифровое (Manual / Digital)'
      }
    },
    en: {
      title: 'Phoropter',
      subtitle: 'Professional vision testing equipment',
      description: 'A Phoropter is a professional ophthalmic device used to determine a patient\'s visual acuity and select optimal lenses.<br><br>This equipment plays a crucial role in refraction diagnostics.',
      features: [
        'Vision testing',
        'Lens switching system',
        'Astigmatism analysis',
        'Refraction diagnostics',
        'Professional optical system'
      ],
      advantages: [
        '<strong>Accuracy:</strong> Measures vision parameters with maximum precision.',
        '<strong>Ease of use:</strong> Ergonomic control for the operator.',
        '<strong>Professional design:</strong> Suitable for modern clinics.'
      ],
      specs: {
        'Device Type': 'Phoropter',
        'Lens System': 'Multi Lens',
        'Material': 'Medical Grade',
        'Control': 'Manual / Digital'
      }
    }
  },
  'oct': {
    images: [
      'https://a.storyblok.com/f/236290/600x526/23604e27b8/oct.jpg'
    ],
    uz: {
      title: 'OCT (Optik Kogerent Tomografiya)',
      subtitle: 'Yuqori aniqlikdagi ko‘z tomografiyasi',
      description: 'Optik kogerent tomografiya (OCT) — bu kasalliklarni oddiy tekshiruvlarga qaraganda ancha erta aniqlash imkonini beruvchi mukammal vositadir. U to‘r pardaning sirtini va uning ostki qatlamlarini kesma shaklida ko‘rsatib, ko‘zning arxitekturasini chuqur tahlil qilish imkonini beradi.',
      features: [
        'To‘r pardani kesma shaklida tasvirga olish',
        'Dori toksikligini skrining qilish',
        'Qandli diabet asoratlarini tekshirish',
        'Glaukomani erta aniqlash va monitoring qilish',
        'Makula degeneratsiyasini aniqlash',
        'Yuqori sifatli retinal fotosuratlar'
      ],
      advantages: [
        '<strong>Erta diagnostika:</strong> Kasalliklarni dastlabki bosqichlarda aniqlaydi.',
        '<strong>Chuqur tahlil:</strong> Ko‘rish nega 100% emasligini aniq ko‘rsatib beradi.',
        '<strong>Tez va qulay:</strong> Skanerlash jarayoni bir necha soniya davom etadi.',
        '<strong>Samaradorlik:</strong> Bemorlarni boshqa markazlarga yuborishning oldini oladi.'
      ],
      specs: {
        'Qurilma turi': 'OCT',
        'Tekshiruv qismlari': 'Makula, ko‘rish nervi, to‘r parda',
        'O‘lchash vaqti': 'Bir necha soniya',
        'Tizim': 'Ilg‘or Nidek OCT'
      }
    },
    ru: {
      title: 'ОКТ (Оптическая когерентная томография)',
      subtitle: 'Высокоточная томография глаза',
      description: 'Оптическая когерентная томография (ОКТ) — это передовой инструмент для выявления заболеваний на гораздо более ранних стадиях, чем при обычном осмотре. Аппарат позволяет получать поперечные срезы сетчатки и изучать ее внутреннюю структуру, помогая точно понять причины снижения зрения.',
      features: [
        'Получение поперечных срезов сетчатки',
        'Скрининг лекарственной токсичности',
        'Диагностика осложнений диабета',
        'Раннее выявление и мониторинг глаукомы',
        'Выявление макулярной дегенерации',
        'Высококачественная фотография сетчатки'
      ],
      advantages: [
        '<strong>Ранняя диагностика:</strong> Обнаруживает патологии до появления явных симптомов.',
        '<strong>Детальный анализ:</strong> Точная оценка состояния макулы и зрительного нерва.',
        '<strong>Быстрота и комфорт:</strong> Сканирование занимает всего несколько секунд.',
        '<strong>Эффективность:</strong> Избавляет от необходимости направления в сторонние центры.'
      ],
      specs: {
        'Тип устройства': 'ОКТ (OCT)',
        'Область исследования': 'Макула, зрительный нерв, сетчатка',
        'Время сканирования': 'Несколько секунд',
        'Система': 'Передовая система Nidek OCT'
      }
    },
    en: {
      title: 'OCT (Optical Coherence Tomography)',
      subtitle: 'High-precision eye tomography',
      description: 'Optical Coherence Tomography (OCT) is a highly advanced imaging tool that detects eye diseases much earlier than standard examinations. It provides high-resolution, cross-sectional views beneath the surface of the retina, allowing specialists to deeply analyze the eye\'s architecture and understand the root causes of vision issues.',
      features: [
        'Cross-sectional retinal imaging',
        'Drug toxicity screening',
        'Diabetes complication screening',
        'Glaucoma early detection and monitoring',
        'Macular degeneration detection',
        'High-quality retinal photography'
      ],
      advantages: [
        '<strong>Early Detection:</strong> Detects diseases much earlier than general eye exams.',
        '<strong>Enhanced Assessment:</strong> Accurately determines why vision may not be 100%.',
        '<strong>Fast & Non-invasive:</strong> Scans are taken within a few seconds.',
        '<strong>Cost & Time Effective:</strong> Saves time and unnecessary expenses for patients.'
      ],
      specs: {
        'Device Type': 'OCT (Optical Coherence Tomography)',
        'Scan Area': 'Macula, optic nerve, retina',
        'Scan Time': 'A few seconds',
        'System': 'Advanced Nidek OCT system'
      }
    }
  },
  'al-scan': {
    images: [
      'https://img.medicalexpo.com/images_me/photo-g/70665-8683631.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-7161159.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-8685546.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-15911668.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-15911669.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-15911670.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-15911671.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-15911673.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-15911675.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-15911680.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-15911684.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-15911687.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-19549468.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-19549482.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20510782.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20510785.webp',
      'https://img.medicalexpo.com/images_me/photo-g/70665-20510788.webp'
    ],
    video: 'https://video.medicalexpo.com/video_me/videos/video-24033.mp4',
    uz: {
      title: 'Optik Biometr (AL-Scan)',
      subtitle: 'Katarakta xirurgiyasi uchun yuqori aniqlikdagi optik biometr',
      description: 'AL-Scan — katarakta operatsiyasidan oldin zarur bo‘lgan 6 ta asosiy klinik parametrni atigi 10 soniyada aniqlaydigan professional uskuna. U ko‘z o‘qi uzunligi, kornea egrilik radiusi, oldingi kamera chuqurligi, markaziy shox parda qalinligi, oqdan oqqaacha masofa va qorachiq hajmini o\'lchaydi.',
      features: [
        '3D avtomatik kuzatuv (auto tracking) va avtomatik suratga olish',
        'Scheimpflug tasvirlash va qo\'sh halqali keratometriya orqali oldingi segmentni kuzatish',
        'Ixtiyoriy o\'rnatilgan ultratovushli biometr',
        'IOL quvvatini hisoblash va IOL konstantalarini optimallashtirish',
        'NAVIS-EX uchun AL-Scan Viewer orqali qo\'shimcha imkoniyatlar'
      ],
      advantages: [
        '<strong>Tezkorlik va aniqlik:</strong> 10 soniyada 6 xil klinik parametrlarni aniq hisoblaydi.',
        '<strong>Avtomatlashtirilgan o\'lchov:</strong> 3D auto tracking yordamida harakatlarni kuzatib, mukammal aniqlikda tekshiradi.',
        '<strong>Ko\'p funksionallik:</strong> Qalin kataraktalarda ultratovushli o\'lchash imkoniyati (ixtiyoriy).'
      ],
      specs: {
        'Qurilma turi': 'Optik biometr',
        'O‘lchanadigan parametrlar': '6 ta asosiy parametr',
        'O‘lchash vaqti': '10 soniya',
        'Qo\'shimcha funksiya': 'O\'rnatilgan ultratovush (ixtiyoriy)'
      }
    },
    ru: {
      title: 'Оптический биометр (AL-Scan)',
      subtitle: 'Высокоточный оптический биометр для хирургии катаракты',
      description: 'AL-Scan — профессиональное устройство, измеряющее 6 ключевых клинических параметров для хирургии катаракты всего за 10 секунд. Оно определяет длину передне-задней оси, радиус кривизны роговицы, глубину передней камеры, центральную толщину роговицы, расстояние от лимба до лимба и размер зрачка.',
      features: [
        '3D автоматическое отслеживание (auto tracking) и автоматический снимок',
        'Наблюдение переднего отрезка с помощью Шаймпфлюг-изображения и двойного кольцевого кератометра',
        'Опциональный встроенный ультразвуковой биометр',
        'Расчет оптической силы ИОЛ и оптимизация констант ИОЛ',
        'Дополнительные функции с AL-Scan Viewer для NAVIS-EX'
      ],
      advantages: [
        '<strong>Скорость и точность:</strong> 6 клинических параметров за 10 секунд.',
        '<strong>Автоматизированная точность:</strong> 3D-трекинг отслеживает движения глаза для идеального выравнивания.',
        '<strong>Универсальность:</strong> Возможность ультразвукового измерения при плотной катаракте (опционально).'
      ],
      specs: {
        'Тип устройства': 'Оптический биометр',
        'Измеряемые параметры': '6 клинических параметров',
        'Время измерения': '10 секунд',
        'Дополнительные функции': 'Встроенный ультразвук (опционально)'
      }
    },
    en: {
      title: 'Optical Biometer (AL-Scan)',
      subtitle: 'High-precision optical biometer for cataract surgery',
      description: 'The AL-Scan is a professional device that measures 6 key clinical parameters for cataract surgery in just 10 seconds. It determines axial length, corneal curvature radius, anterior chamber depth, central corneal thickness, white-to-white distance, and pupil size.',
      features: [
        '3D auto tracking and auto shot',
        'Anterior segment observation with Scheimpflug imaging and double mire ring keratometry',
        'Optional built-in ultrasound biometer',
        'IOL power calculation and IOL constants optimization',
        'Additional features with AL-Scan Viewer for NAVIS-EX'
      ],
      advantages: [
        '<strong>Speed and accuracy:</strong> 6 clinical parameters measured in 10 seconds.',
        '<strong>Automated precision:</strong> 3D tracking follows eye movements for exact alignment.',
        '<strong>Highly versatile:</strong> Optional ultrasound measurement for extremely dense cataracts.'
      ],
      specs: {
        'Device Type': 'Optical Biometer',
        'Parameters Measured': '6 clinical parameters',
        'Measurement Time': '10 seconds',
        'Extra features': 'Built-in ultrasound (optional)'
      }
    }
  },
  'opd-scan': {
    video: 'https://video.medicalexpo.com/video_me/videos/video-124992.mp4',
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-11707006.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-11707011.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911098.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911101.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911104.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911107.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911108.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911109.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243057.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243058.webp',
      'https://video.medicalexpo.com/video_me/videos/video-124992.mp4'
    ],
    uz: {
      title: 'Topograf va refraktometr OPD-Scan III VS',
      subtitle: 'Ko\'rish qobiliyatini kompleks tahlil qilish',
      description: 'OPD-Scan III VS — bu asosan shox parda shaklini (topograf) va refraksiya xatolarini (refraktometr) o\'lchaydigan uskuna. U katta maydonda o\'lchangan to\'lqin fronti ma\'lumotlarini tahlil qilish orqali ko\'rish muammolarining sabablarini aniqlaydi.<br><br>Planshet ko\'ruvchisi tushuntirish va maslahat uchun 4 xil tushunarli hisobotlarni taqdim etadi.',
      features: [
        'Yuzma-yuz maslahat uchun yechimlar',
        'Tushunishga oson hisobotlar',
        'Ko\'rish shablonlarining keng tanlovi',
        'NIDEK RT yordamida mukammal tekshiruv'
      ],
      advantages: [
        '<strong>Asosiy ma\'lumotlar hisoboti:</strong> Bemor ko\'zining holatini umumiy baholash uchun asosiy ma\'lumotlar.',
        '<strong>Topografik hisobot:</strong> Shox parda sirtini o\'rganish uchun intuitiv xaritalar va raqamli ma\'lumotlar.',
        '<strong>Simulyatsiya hisoboti:</strong> Turli sharoitlar uchun ko\'rish xususiyatlari simulyatsiyasi va MTF grafiklari.',
        '<strong>Ko\'z diagrammasi hisoboti:</strong> Ko\'z holatini vizual tushunish uchun ko\'z modeli.'
      ],
      specs: {
        'Qurilma turi': 'Topograf va refraktometr',
        'Integratsiya': 'NIDEK RT bilan ulanish',
        'Hisobotlarni ko\'rsatish': 'Planshet yoki katta ekranda',
        'Tahlil': 'To\'lqin fronti tahlili'
      }
    },
    ru: {
      title: 'Топограф и рефрактометр OPD-Scan III VS',
      subtitle: 'Комплексный анализ зрения',
      description: 'OPD-Scan III VS — это прибор, который в основном измеряет форму роговицы (топограф) и погрешность рефракции (рефрактометр). Он выясняет причины проблем со зрением благодаря анализу волнового фронта информации, измеренной на большой площади.<br><br>Планшетный просмотрщик предоставляет четыре вида понятных отчетов для объяснений и консультаций.',
      features: [
        'Решения для очных консультаций',
        'Простые для понимания отчеты',
        'Широкий выбор шаблонов отображения',
        'Превосходное обследование с помощью NIDEK RT'
      ],
      advantages: [
        '<strong>Отчет об основной информации:</strong> Основная информация для общей оценки состояния глаз пациента.',
        '<strong>Топографический отчет:</strong> Интуитивно понятные карты и цифровые данные для изучения поверхности роговицы.',
        '<strong>Отчет о моделировании:</strong> Моделирование зрительных характеристик и графики MTF для различных условий.',
        '<strong>Отчет об изображении глазной диаграммы:</strong> Модель глаза для визуального понимания состояния глаз.'
      ],
      specs: {
        'Тип устройства': 'Топограф и рефрактометр',
        'Интеграция': 'Связь с NIDEK RT',
        'Отображение отчетов': 'На планшете или большом экране',
        'Анализ': 'Анализ волнового фронта'
      }
    },
    en: {
      title: 'Topographer and Refractometer OPD-Scan III VS',
      subtitle: 'Comprehensive vision analysis',
      description: 'The OPD-Scan III VS is a device that mainly measures corneal shape (topographer) and refractive error (refractometer). It clarifies the causes of vision problems through wavefront analysis of information measured over a wide area.<br><br>The tablet viewer provides four types of easy-to-understand reports for explanations and consultations.',
      features: [
        'Solutions for face-to-face consultations',
        'Easy-to-understand reports',
        'Wide selection of display templates',
        'Excellent examination with NIDEK RT'
      ],
      advantages: [
        '<strong>Basic Information Report:</strong> Basic information for overall assessment of the patient\'s eye condition.',
        '<strong>Topographic Report:</strong> Intuitive maps and numerical data to study the corneal surface.',
        '<strong>Simulation Report:</strong> Simulation of visual characteristics and MTF graphs for various conditions.',
        '<strong>Eye Diagram Report:</strong> Eye model for visual understanding of the eye condition.'
      ],
      specs: {
        'Device Type': 'Topographer and Refractometer',
        'Integration': 'Connection with NIDEK RT',
        'Report Display': 'On tablet or large screen',
        'Analysis': 'Wavefront analysis'
      }
    }
  },
  'ark-f': {
    images: ['https://img.medicalexpo.com/images_me/photo-g/70665-14885765.webp'],
    uz: {
      title: 'ARK-F / AR-F',
      subtitle: 'Avtomatlashtirilgan refraktometr va keratometr',
      description: 'ARK-F/AR-F ovozli ko\'rsatmalar va to\'liq avtomatik o\'lchash tizimiga ega ilg\'or diagnostika uskunasi.',
      features: ['Ovozli yo\'riqnoma', 'To\'liq avtomatik (3D tracking)', 'Oson boshqaruv ekran orqali'],
      advantages: ['Foydalanish oson: Ovozli yo\'riqnoma yordamida bemorga qulay.', 'Yuqori aniqlik: Yangilangan datchiklar yordamida tezkor natija.'],
      specs: {'Qurilma turi': 'Avtorefraktokeratometr'}
    },
    ru: {
      title: 'ARK-F / AR-F',
      subtitle: 'Автоматизированный рефрактометр и кератометр',
      description: 'ARK-F/AR-F — передовое диагностическое оборудование с голосовыми подсказками и полностью автоматической системой измерения.',
      features: ['Голосовые подсказки', 'Полностью автоматический (3D трекинг)', 'Удобное управление через экран'],
      advantages: ['Простота использования: Удобно для пациента благодаря голосовым подсказкам.', 'Высокая точность: Быстрый результат благодаря обновленным датчикам.'],
      specs: {'Тип устройства': 'Авторефрактокератометр'}
    },
    en: {
      title: 'ARK-F / AR-F',
      subtitle: 'Automated Refractometer and Keratometer',
      description: 'ARK-F/AR-F is an advanced diagnostic equipment with voice guidance and a fully automatic measurement system.',
      features: ['Voice guidance', 'Fully automatic (3D tracking)', 'Easy screen control'],
      advantages: ['Easy to use: Comfortable for the patient with voice guidance.', 'High accuracy: Fast result with updated sensors.'],
      specs: {'Device Type': 'Autorefractokeratometer'}
    }
  },
  'nt-1': {
    video: 'https://video.medicalexpo.com/video_me/videos/video-107272.mp4',
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-18567695.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-18567697.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-18567698.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-18567718.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-18567719.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-18567720.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-18567722.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-18567723.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-18567724.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510374.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510376.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510378.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510384.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510385.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510389.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510390.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510392.webp',
      'https://video.medicalexpo.com/video_me/videos/video-107272.mp4'
    ],
    ru: {
      title: 'Тонометр NT-1p',
      subtitle: 'Бесконтактный тонометр',
      description: 'Просто положите подбородок на подголовник, камера обнаружения глаз NIDEK автоматически определит положение глаз, и измерение начнется без нажатия какой-либо кнопки. Мягкие голосовые подсказки (доступны на 9 языках) обеспечивают беспрепятственное проведение измерений для любого оператора.',
      features: [
        'Полностью автоматизированный режим измерения',
        'режим 3D-измерений',
        'Надежная функция пахиметрии',
        'Повышение комфорта пациента',
        'Гибкая и компактная конструкция'
      ],
      advantages: [
        '<strong>Коррекция ВГД:</strong> Значения ВГД автоматически рассчитываются с учетом центральной толщины роговицы пациента.',
        '<strong>Автоматический контроль затяжки (APC):</strong> Функция APC выполняет измерение с минимальным давлением воздуха.',
        '<strong>Мягкая конструкция сопла:</strong> Мягкая конструкция насадки снижает восприятие пациентом физического давления.',
        '<strong>Джойстик:</strong> Доступны модели как с джойстиком, так и без него.'
      ],
      specs: {
        'Режимы измерения': 'Автоматический / 3D-измерения',
        'Пахиметрия': 'Доступна (NT-1p)',
        'Голосовые подсказки': 'Доступны (9 языков)'
      }
    },
    uz: {
      title: 'Tonometr NT-1p',
      subtitle: 'Kontaktsiz tonometr',
      description: 'Shunchaki iyagingizni jag\' tirgakga qo\'ying, NIDEK ko\'zni aniqlash kamerasi avtomatik ravishda ko\'z holatini aniqlaydi va o\'lchash hech qanday tugmani bosmasdan boshlanadi. Yumshoq ovozli ko\'rsatmalar istalgan operator uchun silliq o\'lchashni ta\'minlaydi.',
      features: [
        'To\'liq avtomatlashtirilgan o\'lchash rejimi',
        '3D-o\'lchash rejimi',
        'Ishonchli paximetriya funksiyasi',
        'Bemor uchun ko\'proq qulaylik',
        'Moslashuvchan va ixcham dizayn'
      ],
      advantages: [
        '<strong>KIB korreksiyasi:</strong> KIB qiymatlari bemorning shox pardasi markaziy qalinligini hisobga olgan holda avtomatik tarzda hisoblanadi.',
        '<strong>Avtomatik havo nazorati (APC):</strong> APC funksiyasi minimal havo bosimi bilan o\'lchashni amalga oshiradi.',
        '<strong>Yumshoq havo chiqarish qismi:</strong> Yumshoq nozul dizayni bemorda jismoniy bosim sezgisini kamaytiradi.',
        '<strong>Joystik:</strong> Joystikli va joystiksiz modellar mavjud.'
      ],
      specs: {
        'O\'lchash rejimlari': 'Avtomatik / 3D-o\'lchash',
        'Paximetriya': 'Mavjud (NT-1p)',
        'Ovozli ko\'rsatmalar': 'Mavjud (9 tilda)'
      }
    },
    en: {
      title: 'Tonometer NT-1p',
      subtitle: 'Non-contact tonometer',
      description: 'Simply place your chin on the chinrest, the NIDEK eye detection camera automatically detects the eye position, and measurement starts without pressing any button. Soft voice prompts ensure smooth measurement for any operator.',
      features: [
        'Fully automated measurement mode',
        '3D-measurement mode',
        'Reliable pachymetry function',
        'Enhanced patient comfort',
        'Flexible and compact design'
      ],
      advantages: [
        '<strong>IOP Correction:</strong> IOP values are automatically calculated taking into account the central corneal thickness.',
        '<strong>Auto Puff Control (APC):</strong> The APC function performs measurements with minimum air pressure.',
        '<strong>Soft nozzle design:</strong> The soft nozzle design reduces the patient\'s perception of physical pressure.',
        '<strong>Joystick:</strong> Models with and without joystick are available.'
      ],
      specs: {
        'Measurement modes': 'Automatic / 3D measurement',
        'Pachymetry': 'Available (NT-1p)',
        'Voice prompts': 'Available (9 languages)'
      }
    }
  },
  'rt-6100': {
    video: 'https://video.medicalexpo.com/video_me/videos/video-124995.mp4',
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-14889373.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-14889375.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-14889377.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-14889381.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911298.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911299.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510557.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510559.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510569.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510570.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510571.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510572.webp',
      'https://video.medicalexpo.com/video_me/videos/video-124995.mp4'
    ],
    ru: {
      title: 'Автоматический офтальмологический рефрактор RT-6100',
      subtitle: 'Умный рефрактор',
      description: 'Стремясь обеспечить превосходные ощущения как для пациента, так и для оператора, RT-6100 имеет отточенный эргономичный дизайн. Чрезвычайно плавная, бесшумная и быстрая смена линз обеспечивает надежное и комфортное измерение.',
      features: [
        'Обтекаемая головка рефрактора',
        'Удобная консоль управления',
        'Бинокулярная открытая рефракция',
        'Функция редактирования программы',
        'Упрощенная передача данных'
      ],
      advantages: [
        '<strong>Семь программ рефракции:</strong> Настройте параметры диаграммы в соответствии с предпочтительной последовательностью рефракции.',
        '<strong>10,4-дюймовый дисплей:</strong> Цветной сенсорный ЖК-дисплей отображает графики, диаграммы и информацию.',
        '<strong>Проверка четкого зрения:</strong> Наглядное пособие в графической форме для пациентов.',
        '<strong>Интеграция:</strong> Продукты NIDEK работают вместе для повышения производительности.'
      ],
      specs: {
        'Тип устройства': 'Автоматический рефрактор',
        'Дисплей': '10,4-дюймовый сенсорный ЖК',
        'Программы': '7 программ рефракции'
      }
    },
    uz: {
      title: 'Avtomatik oftalmologik refraktor RT-6100',
      subtitle: 'Aqlli refraktor',
      description: 'Bemor va operator uchun ajoyib tajribani taqdim etishga intilgan RT-6100 ergonomik dizaynga ega. Linzalarning o\'ta silliq, shovqinsiz va tez o\'zgarishi ishonchli va qulay o\'lchashni ta\'minlaydi.',
      features: [
        'Silliq refraktor boshi',
        'Qulay boshqaruv konsoli',
        'Binokulyar ochiq refraksiya',
        'Dasturni tahrirlash funksiyasi',
        'Soddalashtirilgan ma\'lumot uzatish'
      ],
      advantages: [
        '<strong>Yettita refraksiya dasturi:</strong> Diagramma parametrlarini afzal qilingan refraksiya ketma-ketligiga qarab sozlang.',
        '<strong>10,4 dyuymli displey:</strong> Rangli sensorli LCD displey grafiklar, diagrammalar va ma\'lumotlarni ko\'rsatadi.',
        '<strong>Aniq ko\'rishni tekshirish:</strong> Bemorlar uchun grafik shakldagi vizual qo\'llanma.',
        '<strong>Integratsiya:</strong> NIDEK mahsulotlari unumdorlikni oshirish uchun birgalikda ishlaydi.'
      ],
      specs: {
        'Qurilma turi': 'Avtomatik refraktor',
        'Displey': '10,4 dyuymli sensorli LCD',
        'Dasturlar': '7 ta refraksiya dasturi'
      }
    },
    en: {
      title: 'Automatic Ophthalmic Refractor RT-6100',
      subtitle: 'Smart Refractor',
      description: 'Striving to provide a superior experience for both patient and operator, the RT-6100 features a refined ergonomic design. Extremely smooth, quiet, and fast lens changes ensure reliable and comfortable measurement.',
      features: [
        'Streamlined refractor head',
        'Convenient control console',
        'Binocular open refraction',
        'Program editing function',
        'Simplified data transfer'
      ],
      advantages: [
        '<strong>Seven refraction programs:</strong> Customize chart parameters according to your preferred refraction sequence.',
        '<strong>10.4-inch display:</strong> Color LCD touch screen displays graphs, charts and information.',
        '<strong>Clear vision check:</strong> A visual aid in graphical form for patients.',
        '<strong>Integration:</strong> NIDEK products work together to increase productivity.'
      ],
      specs: {
        'Device Type': 'Automatic refractor',
        'Display': '10.4-inch LCD touch screen',
        'Programs': '7 refraction programs'
      }
    }
  },
  'handyref': {
    images: ['https://img.medicalexpo.com/images_me/photo-g/70665-10332857.webp'],
    uz: {
      title: 'HandyRef-K / HandyRef',
      subtitle: 'Portativ avtorefraktometr',
      description: 'Bolalar va yotgan bemorlarni tekshirish uchun qulay bo\'lgan portativ refraktometr.',
      features: ['Portativ va yengil', 'Avtomatik fokus', 'Wi-Fi orqali ma\'lumot uzatish'],
      advantages: ['Qulaylik: Har qanday sharoitda tekshiruv o\'tkazish.', 'Moslashuvchanlik: Ayniqsa bolalar va qariyalar uchun juda mos.'],
      specs: {'Qurilma turi': 'Portativ refraktometr'}
    },
    ru: {
      title: 'HandyRef-K / HandyRef',
      subtitle: 'Портативный авторефрактометр',
      description: 'Портативный рефрактометр, удобный для обследования детей и лежачих пациентов.',
      features: ['Портативный и легкий', 'Автофокус', 'Передача данных по Wi-Fi'],
      advantages: ['Удобство: Проведение обследования в любых условиях.', 'Гибкость: Особенно подходит для детей и пожилых людей.'],
      specs: {'Тип устройства': 'Портативный рефрактометр'}
    },
    en: {
      title: 'HandyRef-K / HandyRef',
      subtitle: 'Portable Autorefractometer',
      description: 'A portable refractometer convenient for examining children and bedridden patients.',
      features: ['Portable and lightweight', 'Autofocus', 'Wi-Fi data transfer'],
      advantages: ['Convenience: Conducting examinations in any conditions.', 'Flexibility: Especially suitable for children and the elderly.'],
      specs: {'Device Type': 'Portable refractometer'}
    }
  },
  'ssc-370': {
    video: 'https://video.medicalexpo.com/video_me/videos/video-124997.mp4',
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8679717.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21242241.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-14891097.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-14891099.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510606.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510608.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510609.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21242242.webp',
      'https://video.medicalexpo.com/video_me/videos/video-124997.mp4'
    ],
    ru: {
      title: 'Монитор-оптотип SSC-370',
      subtitle: 'Компактная диаграмма',
      description: 'Компактная диаграмма SSC-370 достигает расстояния преломления от 4 до 7 м при расстоянии установки от 0,6 до 1,6 м.',
      features: [
        'Возможность выбора расстояния установки',
        'В сочетании с оптометрической системой',
        'Управление с помощью пульта дистанционного управления',
        'Проверка ночного зрения'
      ],
      advantages: [
        '<strong>Интеграция:</strong> SSC-370 может быть синхронизирован с интеллектуальным рефрактором NIDEK.',
        '<strong>Пульт дистанционного управления:</strong> Большой ЖК-дисплей позволяет отображать большое количество информации.',
        '<strong>Тест ночного видения:</strong> Функция для проверки остроты зрения в ночное время при слабом освещении.'
      ],
      specs: {
        'Тип устройства': 'Монитор-оптотип',
        'Расстояние установки': '0,6 - 1,6 м',
        'Расстояние преломления': '4 - 7 м'
      }
    },
    uz: {
      title: 'Monitor-optotip SSC-370',
      subtitle: 'Ixcham diagramma',
      description: 'SSC-370 ixcham diagrammasi 0,6 dan 1,6 m gacha bo\'lgan o\'rnatish masofasida 4 dan 7 m gacha refraksiya masofasiga erishadi.',
      features: [
        'O\'rnatish masofasini tanlash imkoniyati',
        'Optometrik tizim bilan birgalikda',
        'Masofadan boshqarish pulti orqali boshqarish',
        'Tungi ko\'rishni tekshirish'
      ],
      advantages: [
        '<strong>Integratsiya:</strong> SSC-370 NIDEK aqlli refraktori bilan sinxronlashtirilishi mumkin.',
        '<strong>Masofadan boshqarish pulti:</strong> Katta LCD displey katta hajmdagi ma\'lumotlarni ko\'rsatishga imkon beradi.',
        '<strong>Tungi ko\'rish testi:</strong> Kechasi kam yorug\'likda ko\'rish o\'tkirligini tekshirish funksiyasi.'
      ],
      specs: {
        'Qurilma turi': 'Monitor-optotip',
        'O\'rnatish masofasi': '0,6 - 1,6 m',
        'Refraksiya masofasi': '4 - 7 m'
      }
    },
    en: {
      title: 'Monitor-optotype SSC-370',
      subtitle: 'Compact chart',
      description: 'The compact SSC-370 chart achieves a refraction distance of 4 to 7 m with an installation distance of 0.6 to 1.6 m.',
      features: [
        'Selectable installation distance',
        'Combined with optometric system',
        'Remote control operation',
        'Night vision test'
      ],
      advantages: [
        '<strong>Integration:</strong> The SSC-370 can be synchronized with a NIDEK intelligent refractor.',
        '<strong>Remote Control:</strong> Large LCD screen displays a large amount of information.',
        '<strong>Night Vision Test:</strong> Function to check visual acuity at night under low light conditions.'
      ],
      specs: {
        'Device Type': 'Monitor-optotype',
        'Installation distance': '0.6 - 1.6 m',
        'Refraction distance': '4 - 7 m'
      }
    }
  },
  'lm-1800': {
    video: 'https://video.medicalexpo.com/video_me/videos/video-124998.mp4',
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911336.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911344.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911345.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510612.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510613.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243089.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243090.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243094.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243102.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243088.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243115.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243116.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243117.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243118.webp',
      'https://video.medicalexpo.com/video_me/videos/video-124998.mp4'
    ],
    ru: {
      title: 'Автоматический фронтофокометр LM-1800PD',
      subtitle: 'Фронтофокометр с датчиком Хартмана',
      description: 'Усовершенствованный принцип измерения, включающий одновременное измерение 108 точек данных, обеспечивает большую точность и надежность при более простых и быстрых измерениях.',
      features: [
        'Датчик Хартмана со 108 точками измерения',
        'Уникальная таблица линз расширяет диапазон измерений',
        'Проверка дисторсии',
        'Измерение пропускания зеленого света',
        'Измерение пропускания ультрафиолетового излучения'
      ],
      advantages: [
        '<strong>Уникальный столик:</strong> Механизм позволяет носовому наконечнику частично входить в столик объектива.',
        '<strong>Проверка дисторсии:</strong> Эта функция показывает искажение линз очков.',
        '<strong>Зеленый свет:</strong> Измерение пропускания видимого света с помощью источника зеленого света.',
        '<strong>УФ-излучение:</strong> Измерение пропускания УФ-излучения в диапазоне от 0 до 100%.'
      ],
      specs: {
        'Тип устройства': 'Автоматический фронтофокометр',
        'Датчик': 'Датчик Хартмана (108 точек)',
        'Измерение пропускания': 'Зеленый свет / УФ-излучение'
      }
    },
    uz: {
      title: 'Avtomatik frontofokometr LM-1800PD',
      subtitle: 'Hartman datchikli frontofokometr',
      description: 'Bir vaqtning o\'zida 108 ta ma\'lumot nuqtasini o\'lchashni o\'z ichiga olgan ilg\'or o\'lchash tamoyili sodda va tezroq o\'lchashlarda yuqori aniqlik va ishonchlilikni ta\'minlaydi.',
      features: [
        '108 ta o\'lchash nuqtasiga ega Hartman datchigi',
        'Noyob linzalar stoli o\'lchash diapazonini kengaytiradi',
        'Distorsiyani tekshirish',
        'Yashil yorug\'lik o\'tkazuvchanligini o\'lchash',
        'Ultrabinafsha nurlanish o\'tkazuvchanligini o\'lchash'
      ],
      advantages: [
        '<strong>Noyob stol:</strong> Mexanizm burun qismini linzalar stoliga qisman kiritish imkonini beradi.',
        '<strong>Distorsiyani tekshirish:</strong> Bu funksiya ko\'zoynak linzalarining buzilishini ko\'rsatadi.',
        '<strong>Yashil yorug\'lik:</strong> Yashil yorug\'lik manbai yordamida ko\'rinadigan yorug\'lik o\'tkazuvchanligini o\'lchash.',
        '<strong>UV-nurlanish:</strong> 0 dan 100% gacha bo\'lgan diapazonda UV-nurlanish o\'tkazuvchanligini o\'lchash.'
      ],
      specs: {
        'Qurilma turi': 'Avtomatik frontofokometr',
        'Datchik': 'Hartman datchigi (108 nuqta)',
        'O\'tkazuvchanlikni o\'lchash': 'Yashil yorug\'lik / UV-nurlanish'
      }
    },
    en: {
      title: 'Auto Lensmeter LM-1800PD',
      subtitle: 'Lensmeter with Hartmann sensor',
      description: 'An advanced measurement principle involving simultaneous measurement of 108 data points provides greater accuracy and reliability with simpler and faster measurements.',
      features: [
        'Hartmann sensor with 108 measurement points',
        'Unique lens table extends measurement range',
        'Distortion check',
        'Green light transmittance measurement',
        'Ultraviolet transmittance measurement'
      ],
      advantages: [
        '<strong>Unique table:</strong> The mechanism allows the nosepiece to partially enter the lens table.',
        '<strong>Distortion check:</strong> This function shows the distortion of spectacle lenses.',
        '<strong>Green light:</strong> Measurement of visible light transmittance using a green light source.',
        '<strong>UV radiation:</strong> UV transmittance measurement in the range from 0 to 100%.'
      ],
      specs: {
        'Device Type': 'Auto Lensmeter',
        'Sensor': 'Hartmann sensor (108 points)',
        'Transmittance Measurement': 'Green light / UV radiation'
      }
    }
  },
  'pm-700': {
    video: 'https://video.medicalexpo.com/video_me/videos/video-124999.mp4',
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8683324.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510625.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8684133.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8684134.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8684135.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510628.webp',
      'https://video.medicalexpo.com/video_me/videos/video-124999.mp4'
    ],
    ru: {
      title: 'Цифровой пупиллометр PM-700',
      subtitle: 'Высокоточный пупиллометр',
      description: 'В новой модели используется волосяная линия с шагом 0,25 мм, теперь легче подобрать точку отражения роговицы. Также можно перейти к шагу 0,5 мм.',
      features: [
        'Более точная настройка линии волос',
        'Автоматический расчет PD с помощью одного измерения',
        'Стабильность как стандарт',
        'Устойчивая конструкция рукоятки',
        'Долговечная мощность'
      ],
      advantages: [
        '<strong>Один шаг измерения:</strong> PD автоматически рассчитывается при расстоянии до точки обзора от 30 см до бесконечности.',
        '<strong>Стабильность:</strong> Основной корпус фиксируется с помощью кронштейна.',
        '<strong>Устойчивая рукоятка:</strong> Дизайн позволяет легко держать прибор и снижает риск падения.',
        '<strong>Долговечность:</strong> Время работы примерно в три раза больше, чем у предыдущей модели.'
      ],
      specs: {
        'Тип устройства': 'Цифровой пупиллометр',
        'Измерение PD': 'Шаг 0,1 мм / 0,5 мм',
        'Волосяная линия': 'Шаг 0,25 мм'
      }
    },
    uz: {
      title: 'Raqamli pupillometr PM-700',
      subtitle: 'Yuqori aniqlikdagi pupillometr',
      description: 'Yangi modelda 0,25 mm qadamli soch chizig\'i qo\'llaniladi, endi shox pardaning aks etish nuqtasini topish osonroq. Shuningdek, 0,5 mm qadamga o\'tish ham mumkin.',
      features: [
        'Soch chizig\'ini aniqroq sozlash',
        'Bitta o\'lchov yordamida PDni avtomatik hisoblash',
        'Barqarorlik standart sifatida',
        'Barqaror tutqich dizayni',
        'Uzoq muddatli quvvat'
      ],
      advantages: [
        '<strong>Bitta o\'lchov:</strong> PD 30 sm dan cheksizlikgacha bo\'lgan masofada avtomatik hisoblanadi.',
        '<strong>Barqarorlik:</strong> Asosiy korpus kronshteyn yordamida o\'rnatiladi.',
        '<strong>Barqaror tutqich:</strong> Dizayn qurilmani ushlab turishni osonlashtiradi va tushib ketish xavfini kamaytiradi.',
        '<strong>Uzoq muddatlilik:</strong> Ish vaqti oldingi modelga qaraganda taxminan uch baravar ko\'p.'
      ],
      specs: {
        'Qurilma turi': 'Raqamli pupillometr',
        'PD o\'lchovi': 'Qadam 0,1 mm / 0,5 mm',
        'Soch chizig\'i': 'Qadam 0,25 mm'
      }
    },
    en: {
      title: 'Digital Pupillometer PM-700',
      subtitle: 'High-precision pupillometer',
      description: 'The new model uses a hair line with a 0.25 mm step, making it easier to select the corneal reflection point. You can also switch to a 0.5 mm step.',
      features: [
        'More precise hairline adjustment',
        'Automatic PD calculation with a single measurement',
        'Stability as standard',
        'Stable handle design',
        'Long-lasting power'
      ],
      advantages: [
        '<strong>Single measurement:</strong> PD is automatically calculated at a viewing distance from 30 cm to infinity.',
        '<strong>Stability:</strong> The main body is fixed with a bracket.',
        '<strong>Stable handle:</strong> The design makes the device easy to hold and reduces the risk of dropping.',
        '<strong>Durability:</strong> Operating time is approximately three times longer than the previous model.'
      ],
      specs: {
        'Device Type': 'Digital Pupillometer',
        'PD Measurement': '0.1 mm / 0.5 mm step',
        'Hair line': '0.25 mm step'
      }
    }
  },
  'mirante': {
    video: 'https://video.medicalexpo.com/video_me/videos/video-107281.mp4',
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-14891491.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911361.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911362.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911363.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911365.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911377.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911378.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911381.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549359.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549363.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549364.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549365.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549368.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510660.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510661.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510698.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510700.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21242327.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21242328.webp',
      'https://video.medicalexpo.com/video_me/videos/video-107281.mp4'
    ],
    ru: {
      title: 'Офтальмоскоп ОКТ Mirante',
      subtitle: 'Платформа для мультимодальной визуализации',
      description: 'Превосходная платформа для мультимодальной визуализации, предоставляющая сверхширокое поле и сверхвысококачественное изображение для детальной оценки патологий от фовеа до крайней периферии.',
      features: [
        'Цвет / FA / ICG / Blue-FAF / Green-FAF / Ретро-режим',
        'ОКТ / ОКТ-ангиография',
        'Сверхширокое поле x сверхвысококачественное изображение',
        'Непревзойденный цвет и уникальный ретро-режим',
        'ОКТ с широкой зоной HD'
      ],
      advantages: [
        '<strong>Оптимизированный комбинированный снимок:</strong> Комбинированный захват позволяет последовательно получать изображения с заданной комбинацией настроек.',
        '<strong>Ультраширокий угол:</strong> Четкое изображение всего поля зрения 163°.',
        '<strong>Ultra 4K HD:</strong> Разрешение 4 096 x 4 096 пикселей передает каждую деталь сетчатки и хороида.',
        '<strong>Непревзойденный цвет:</strong> Три отдельных RGB-детектора сканируют различные глубины сетчатки.'
      ],
      specs: {
        'Тип устройства': 'Офтальмоскоп ОКТ',
        'Угол обзора': '163° (сверхширокоугольный)',
        'Разрешение': 'Ultra 4K HD (4096 x 4096)'
      }
    },
    uz: {
      title: 'Oftalmoskop OKT Mirante',
      subtitle: 'Multimodal vizualizatsiya platformasi',
      description: 'Foveadan tortib eng chekka periferiyagacha bo\'lgan patologiyalarni batafsil baholash uchun o\'ta keng maydon va juda yuqori sifatli tasvirni taqdim etuvchi multimodal vizualizatsiya uchun ajoyib platforma.',
      features: [
        'Rang / FA / ICG / Blue-FAF / Green-FAF / Retro rejim',
        'OCT / OCT-angiografiya',
        'O\'ta keng maydon va juda yuqori sifatli tasvir',
        'Betakror rang va noyob retro rejim',
        'Keng HD zonali OCT'
      ],
      advantages: [
        '<strong>Optimallashtirilgan kombinatsiyalangan surat:</strong> Kombinatsiyalangan tortib olish imkoniyati belgilangan sozlamalar kombinatsiyasi bilan ketma-ket tasvirlarni olish imkonini beradi.',
        '<strong>Ultra keng burchak:</strong> 163° ko\'rish maydonining aniq tasviri.',
        '<strong>Ultra 4K HD:</strong> 4096 x 4096 pikselli ruxsat to\'r parda va xoroidning har bir detalini uzatadi.',
        '<strong>Betakror rang:</strong> Uchta alohida RGB detektor to\'r pardaning turli chuqurliklarini skanerlaydi.'
      ],
      specs: {
        'Qurilma turi': 'Oftalmoskop OKT',
        'Ko\'rish burchagi': '163° (ultra keng burchakli)',
        'Ruxsat': 'Ultra 4K HD (4096 x 4096)'
      }
    },
    en: {
      title: 'SLO/OCT Mirante',
      subtitle: 'Multimodal Imaging Platform',
      description: 'An excellent platform for multimodal imaging that provides ultra-widefield and ultra-high-quality imaging for detailed assessment of pathologies from the fovea to the extreme periphery.',
      features: [
        'Color / FA / ICG / Blue-FAF / Green-FAF / Retro mode',
        'OCT / OCT Angiography',
        'Ultra-widefield x ultra-high quality image',
        'Unsurpassed color and unique retro mode',
        'Wide area HD OCT'
      ],
      advantages: [
        '<strong>Optimized Combo Capture:</strong> Combo capture allows sequential imaging with a predetermined combination of image capture settings.',
        '<strong>Ultra-Widefield:</strong> A clear image of the entire 163° field of view.',
        '<strong>Ultra 4K HD:</strong> The 4,096 x 4,096 pixel resolution captures every detail of the retina and choroid.',
        '<strong>Unsurpassed color:</strong> Three separate RGB detectors scan different retinal depths.'
      ],
      specs: {
        'Device Type': 'SLO/OCT Fundus Camera',
        'Field of View': '163° (ultra-widefield)',
        'Resolution': 'Ultra 4K HD (4096 x 4096)'
      }
    }
  },
  'retina-scan-duo': {
    video: 'https://video.medicalexpo.com/video_me/videos/video-82226.mp4',
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-17328770.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-17328771.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-18568052.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-18568057.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21242353.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21242354.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21242355.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21242356.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21242357.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243127.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243128.webp',
      'https://video.medicalexpo.com/video_me/videos/video-82226.mp4'
    ],
    ru: {
      title: 'Офтальмоскоп ОКТ Duo™2',
      subtitle: 'ОКТ и Фундюс-камера в одном устройстве',
      description: 'Комбинированная диагностика патологий макулы и диска за один снимок. Получение фундус-изображения с захватом макулы и диска на ОКТ.',
      features: [
        'Получение фундус-изображения с захватом макулы и диска',
        'Метод обесцвечивания с глубоким обучением',
        'Быстрое получение изображений В-скана высокого разрешения',
        'Фундус-автофлуоресценция (FAF)',
        'Широкоугольная нормативная база данных'
      ],
      advantages: [
        '<strong>Широкоформатное сканирование:</strong> Можно получить изображение широкой области размером 12 x 9 мм.',
        '<strong>Обесцвечивание (Деноизация):</strong> Новая техника улучшения изображений с использованием ИИ автоматически отображает деноизированное изображение.',
        '<strong>Фундус-автофлуоресценция (FAF):</strong> Расширенная функция скрининга для неинвазивной оценки RPE без красителя.',
        '<strong>Комфорт:</strong> Функция деноизации сокращает время получения изображения и повышает комфорт пациента.'
      ],
      specs: {
        'Тип устройства': 'ОКТ / Фундюс-камера',
        'Область сканирования': '12 x 9 мм',
        'Доп. функции': 'Деноизация (ИИ) / FAF'
      }
    },
    uz: {
      title: 'Oftalmoskop OKT Duo™2',
      subtitle: 'OKT va Fundus-kamera bittada',
      description: 'Bir xil rasmda makula va disk patologiyalarining kombinatsiyalangan diagnostikasi. Makula va diskni qamrab oluvchi OKT fundus-tasvirini olish.',
      features: [
        'Makula va diskni qamrab oluvchi fundus-tasvirini olish',
        'Chuqur o\'rganish asosidagi shovqinlarni kamaytirish usuli',
        'Yuqori aniqlikdagi B-skaner tasvirlarini tezkor olish',
        'Fundus-avtofluoressensiya (FAF)',
        'Keng burchakli normativ ma\'lumotlar bazasi'
      ],
      advantages: [
        '<strong>Keng formatli skanerlash:</strong> 12 x 9 mm o\'lchamdagi keng hudud tasvirini olish mumkin.',
        '<strong>Denoizatsiya (Shovqinlarni tozalash):</strong> Sun\'iy intellektdan foydalangan holda tasvirni yaxshilashning yangi usuli.',
        '<strong>Fundus-avtofluoressensiya (FAF):</strong> RPE ni bo\'yoqsiz noinvaziv baholash uchun kengaytirilgan skrining funksiyasi.',
        '<strong>Qulaylik:</strong> Denoizatsiya funksiyasi tasvirni olish vaqtini qisqartiradi va bemor qulayligini oshiradi.'
      ],
      specs: {
        'Qurilma turi': 'OKT / Fundus-kamera',
        'Skanerlash maydoni': '12 x 9 mm',
        'Qo\'shimcha funksiyalar': 'Denoizatsiya (AI) / FAF'
      }
    },
    en: {
      title: 'OCT Duo™2',
      subtitle: 'Combined OCT and Fundus Camera',
      description: 'Combined diagnosis of macula and disc pathologies in a single image. Acquisition of a fundus image capturing the macula and disc on OCT.',
      features: [
        'Fundus image acquisition capturing macula and disc',
        'Deep learning denoising method',
        'Fast acquisition of high-resolution B-scan images',
        'Fundus Autofluorescence (FAF)',
        'Wide-angle normative database'
      ],
      advantages: [
        '<strong>Wide-area scanning:</strong> A wide area image of 12 x 9 mm can be acquired.',
        '<strong>Denoising:</strong> A new image enhancement technique using AI automatically displays a denoised image.',
        '<strong>Fundus Autofluorescence (FAF):</strong> An advanced screening function for non-invasive evaluation of RPE without dye.',
        '<strong>Comfort:</strong> The denoising function reduces image acquisition time and increases patient comfort.'
      ],
      specs: {
        'Device Type': 'OCT / Fundus Camera',
        'Scan Area': '12 x 9 mm',
        'Extra features': 'Denoising (AI) / FAF'
      }
    }
  },
  'mp-3': {
    video: 'https://video.medicalexpo.com/video_me/videos/video-107282.mp4',
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8683602.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8684164.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-18568068.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911455.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911456.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911457.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911458.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911459.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911460.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911461.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911463.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911464.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911465.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911466.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911467.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911468.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911469.webp',
      'https://video.medicalexpo.com/video_me/videos/video-107282.mp4'
    ],
    ru: {
      title: 'Офтальмологический микропериметр MP-3',
      subtitle: 'Микропериметрия с широким диапазоном',
      description: 'Современный микропериметр с широким диапазоном измерений, тестом на фиксацию и немидриатической фундус-камерой высокого разрешения.',
      features: [
        'Микропериметрия с широким диапазоном измерений',
        'Тест на фиксацию с точной системой слежения',
        'Немидриатическая фундус-камера высокого разрешения',
        'Обследование с обратной связью для реабилитации зрения',
        'Автоматическое отслеживание и выравнивание'
      ],
      advantages: [
        '<strong>Широкий диапазон:</strong> Интенсивность стимула от 0 до 34 дБ позволяет оценить низкую чувствительность.',
        '<strong>Точная система слежения:</strong> Позволяет измерить фиксацию и определить предпочтительную сетчатку.',
        '<strong>Фундус-камера:</strong> Встроенная 12-мегапиксельная камера для изображений высокого разрешения.',
        '<strong>Реабилитация зрения:</strong> Обучение пациентов перемещать предпочитаемый локус сетчатки (PRL).'
      ],
      specs: {
        'Тип устройства': 'Офтальмологический микропериметр',
        'Камера': '12 Мегапикселей',
        'Интенсивность стимула': 'от 0 до 34 дБ (до 10 000 асб)'
      }
    },
    uz: {
      title: 'Oftalmologik mikroperimetr MP-3',
      subtitle: 'Keng ko\'lamli mikroperimetriya',
      description: 'Keng o\'lchov diapazoni, fiksatsiya testi va yuqori aniqlikdagi nemidriatik fundus-kameraga ega zamonaviy mikroperimetr.',
      features: [
        'Keng o\'lchov diapazoni bilan mikroperimetriya',
        'Aniq kuzatuv tizimi bilan fiksatsiya testi',
        'Yuqori aniqlikdagi nemidriatik fundus-kamera',
        'Ko\'rishni tiklash uchun qayta aloqali tekshiruv',
        'Avtomatik kuzatish va to\'g\'rilash'
      ],
      advantages: [
        '<strong>Keng diapazon:</strong> 0 dan 34 dB gacha bo\'lgan stimul intensivligi past sezgirlikni baholashga imkon beradi.',
        '<strong>Aniq kuzatuv tizimi:</strong> Fiksatsiyani o\'lchash va afzal qilingan to\'r pardani aniqlash imkonini beradi.',
        '<strong>Fundus-kamera:</strong> Yuqori aniqlikdagi tasvirlar uchun o\'rnatilgan 12 megapikselli kamera.',
        '<strong>Ko\'rishni tiklash:</strong> Bemorlarni afzal qilingan to\'r parda lokusini (PRL) harakatlantirishga o\'rgatish.'
      ],
      specs: {
        'Qurilma turi': 'Oftalmologik mikroperimetr',
        'Kamera': '12 Megapiksel',
        'Stimul intensivligi': '0 dan 34 dB gacha (10 000 asb gacha)'
      }
    },
    en: {
      title: 'Ophthalmic Microperimeter MP-3',
      subtitle: 'Microperimetry with wide range',
      description: 'Modern microperimeter with a wide measurement range, fixation test and high-resolution non-mydriatic fundus camera.',
      features: [
        'Microperimetry with a wide measurement range',
        'Fixation test with precise tracking system',
        'High-resolution non-mydriatic fundus camera',
        'Feedback examination for vision rehabilitation',
        'Automatic tracking and alignment'
      ],
      advantages: [
        '<strong>Wide range:</strong> Stimulus intensity from 0 to 34 dB allows assessment of low sensitivity.',
        '<strong>Precise tracking system:</strong> Allows measuring fixation and determining the preferred retina.',
        '<strong>Fundus camera:</strong> Built-in 12-megapixel camera for high-resolution images.',
        '<strong>Vision rehabilitation:</strong> Training patients to move their preferred retinal locus (PRL).'
      ],
      specs: {
        'Device Type': 'Ophthalmic Microperimeter',
        'Camera': '12 Megapixels',
        'Stimulus intensity': '0 to 34 dB (up to 10,000 asb)'
      }
    }
  },
  'afc-330': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-17328830.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549404.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549407.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549409.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549410.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549411.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549414.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549416.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549417.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549418.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549405.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21242370.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21242372.webp'
    ],
    ru: {
      title: 'Немидриатическая ретинальная камера AFC-330',
      subtitle: 'Все в одном со встроенной камерой и ПК',
      description: 'Компактная ретинальная камера со встроенной ПЗС-камерой и микрокомпьютером для беспрепятственной съемки.',
      features: [
        'Все в одном со встроенной камерой и компьютером',
        'Пять автоматизированных функций',
        'Монитор и индикатор для помощи оператору',
        'Навигация по стерео- и панорамной съемке',
        'Низкая интенсивность вспышки и тихий звук затвора'
      ],
      advantages: [
        '<strong>Готовность к использованию:</strong> Не требует внешнего компьютера и камеры.',
        '<strong>Удобство:</strong> Автоотслеживание 3D, автофокус, автосъемка и переключение режимов.',
        '<strong>Комфорт:</strong> Снижает интенсивность вспышки на 40% и звук затвора на 50%.',
        '<strong>Точность:</strong> Навигация по стерео- и панорамной съемке с целевыми метками.'
      ],
      specs: {
        'Тип устройства': 'Немидриатическая фундус-камера',
        'Съемка': 'Автоматическая',
        'Компьютер': 'Встроенный'
      }
    },
    uz: {
      title: 'Nemidriatik retinal kamera AFC-330',
      subtitle: 'O\'rnatilgan kamera va shaxsiy kompyuter bilan barchasi bittada',
      description: 'Uzluksiz tasvirga olish uchun o\'rnatilgan CCD kamerasi va mikrokompyuterga ega ixcham retinal kamera.',
      features: [
        'O\'rnatilgan kamera va kompyuter bilan barchasi bittada',
        'Beshta avtomatlashtirilgan funksiya',
        'Operatorga yordam berish uchun monitor va indikator',
        'Stereo va panoramali suratga olish bo\'yicha navigatsiya',
        'Chaqnashning past intensivligi va jim tortish ovozi'
      ],
      advantages: [
        '<strong>Foydalanishga tayyor:</strong> Tashqi kompyuter va kamerani talab qilmaydi.',
        '<strong>Qulaylik:</strong> 3D avtokuzatuv, avtofokus, avtosurat va rejimni o\'zgartirish.',
        '<strong>Komfort:</strong> Chaqnash intensivligini 40% ga va tortish ovozini 50% ga kamaytiradi.',
        '<strong>Aniqlik:</strong> Maqsadli belgilar bilan stereo va panoramali suratga olish navigatsiyasi.'
      ],
      specs: {
        'Qurilma turi': 'Nemidriatik fundus-kamera',
        'Suratga olish': 'Avtomatik',
        'Kompyuter': 'O\'rnatilgan'
      }
    },
    en: {
      title: 'Non-mydriatic Retinal Camera AFC-330',
      subtitle: 'All in one with built-in camera and PC',
      description: 'Compact retinal camera with built-in CCD camera and microcomputer for seamless imaging.',
      features: [
        'All in one with built-in camera and computer',
        'Five automated functions',
        'Monitor and indicator to assist the operator',
        'Stereo and panoramic shooting navigation',
        'Low flash intensity and quiet shutter sound'
      ],
      advantages: [
        '<strong>Ready to use:</strong> No external computer and camera required.',
        '<strong>Convenience:</strong> 3D autotracking, autofocus, autocapture and mode switching.',
        '<strong>Comfort:</strong> Reduces flash intensity by 40% and shutter sound by 50%.',
        '<strong>Accuracy:</strong> Stereo and panoramic shooting navigation with target marks.'
      ],
      specs: {
        'Device Type': 'Non-mydriatic fundus camera',
        'Capture': 'Automatic',
        'Computer': 'Built-in'
      }
    }
  },
  'handyref': {
    video: 'https://video.medicalexpo.com/video_me/videos/video-124994.mp4',
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8679654.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8679655.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911237.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8679657.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8679656.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-9603261.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-9603263.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-9603264.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-9603265.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-9603266.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510335.webp',
      'https://video.medicalexpo.com/video_me/videos/video-124994.mp4'
    ],
    ru: {
      title: 'Портативные измерения в любое время и в любом месте',
      subtitle: 'Превосходство передовых функций',
      description: 'Улучшенное удобство использования благодаря инновационным функциям.',
      features: [
        'Портативное измерение в любое время и в любом месте',
        'Полнографический 3,5-дюймовый цветной ЖК-дисплей',
        'Режим лежачего положения',
        'Функция "Мелодия"',
        'Метод визуализации зоны зрачка (макс. диаметр 4 мм)',
        'Технология SynchroScan'
      ],
      advantages: [
        '<strong>Удобство использования:</strong> Компактный дизайн, легко держать и использовать одной рукой.',
        '<strong>Интуитивно понятный экран:</strong> Четкий дизайн экрана и пиктограммы для высокого удобства.',
        '<strong>Измерение в положении лежа:</strong> Автоматический переход в режим лежачего положения при наклоне на 60º.',
        '<strong>Улучшенная точность:</strong> Метод визуализации зоны зрачка и технология SynchroScan обеспечивают точные данные.',
        '<strong>Комфорт для пациентов:</strong> Функция мелодии помогает облегчить беспокойство у детей.'
      ],
      specs: {
        'Тип устройства': 'Портативный рефрактометр-кератометр',
        'Экран': '3,5-дюймовый цветной ЖК',
        'Особенность': 'Технология SynchroScan'
      }
    },
    uz: {
      title: 'Istalgan vaqtda va istalgan joyda portativ o\'lchovlar',
      subtitle: 'Ilg\'or funksiyalarning mukammalligi',
      description: 'Innovatsion funksiyalar yordamida foydalanish qulayligi yaxshilangan.',
      features: [
        'Istalgan vaqtda va istalgan joyda portativ o\'lchash',
        'To\'liq grafik 3.5 dyuymli rangli LCD displey',
        'Yotgan holatda o\'lchash rejimi',
        '"Musiqa" funksiyasi',
        'Qorachiq sohasini vizualizatsiya qilish usuli (maks. diametr 4 mm)',
        'SynchroScan texnologiyasi'
      ],
      advantages: [
        '<strong>Foydalanish qulayligi:</strong> Yilni dizayn, ushlash va bir qo\'lda ishlatish oson.',
        '<strong>Intuitiv tushunarli ekran:</strong> Yuqori qulaylik uchun aniq ekran dizayni va piktogrammalar.',
        '<strong>Yotgan holatda o\'lchash:</strong> 60º ga egilganda yotgan holat rejimiga avtomatik o\'tish.',
        '<strong>Yaxshilangan aniqlik:</strong> Qorachiq vizualizatsiya usuli va SynchroScan texnologiyasi aniq ma\'lumotlarni ta\'minlaydi.',
        '<strong>Bemorlar uchun qulaylik:</strong> Musiqa funksiyasi bolalardagi xavotirni yengillashtirishga yordam beradi.'
      ],
      specs: {
        'Qurilma turi': 'Portativ refraktometr-keratometr',
        'Ekran': '3.5 dyuymli rangli LCD',
        'Xususiyat': 'SynchroScan texnologiyasi'
      }
    },
    en: {
      title: 'Portable measurements anytime, anywhere',
      subtitle: 'Excellence of advanced functions',
      description: 'Improved usability through innovative features.',
      features: [
        'Portable measurement anytime and anywhere',
        'Full graphic 3.5-inch color LCD display',
        'Supine position mode',
        '"Melody" function',
        'Pupil zone imaging method (max. diameter 4 mm)',
        'SynchroScan Technology'
      ],
      advantages: [
        '<strong>Ease of use:</strong> Compact design, easy to hold and use with one hand.',
        '<strong>Intuitive screen:</strong> Clear screen design and icons for high usability.',
        '<strong>Supine measurement:</strong> Automatic transition to supine mode when tilted 60º or more.',
        '<strong>Improved accuracy:</strong> Pupil zone imaging and SynchroScan technology ensure accurate data.',
        '<strong>Patient comfort:</strong> Melody function helps alleviate anxiety in children.'
      ],
      specs: {
        'Device Type': 'Portable refractometer-keratometer',
        'Screen': '3.5-inch color LCD',
        'Feature': 'SynchroScan Technology'
      }
    }
  },
  'sl-2000': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911561.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510728.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911562.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911563.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510726.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510727.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510730.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510731.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510732.webp'
    ],
    ru: {
      title: 'Настольная щелевая лампа SL-2000',
      subtitle: 'Четкое изображение в естественном цвете',
      description: 'SL-2000 обеспечивает оптическую систему высокого разрешения для визуализации глазных тканей в мельчайших деталях.',
      features: [
        'Оптическая система высокого разрешения',
        'Светодиодный источник света для превосходной яркости',
        'Уменьшение неравномерности освещения',
        'Плавный моторизованный джойстик',
        'Эргономичный и продуманный дизайн'
      ],
      advantages: [
        '<strong>Естественный цвет:</strong> Светодиодная система позволяет наблюдать практически естественный цвет.',
        '<strong>Компенсация аберраций:</strong> Эксклюзивная оптическая линза устраняет неравномерность освещения.',
        '<strong>Превосходный опыт:</strong> Моторизованный джойстик делает движения плавными.',
        '<strong>Глубина фокуса:</strong> Увеличенная эффективная фокусная глубина.'
      ],
      specs: {
        'Тип устройства': 'Щелевая лампа',
        'Источник света': 'Светодиод (LED)',
        'Оптика': 'Высокое разрешение'
      }
    },
    uz: {
      title: 'Stol usti yoriqli lampasi SL-2000',
      subtitle: 'Tabiiy rangdagi aniq tasvir',
      description: 'SL-2000 ko\'z to\'qimalarini eng kichik detallarigacha ko\'rish uchun yuqori aniqlikdagi optik tizimni taqdim etadi.',
      features: [
        'Yuqori aniqlikdagi optik tizim',
        'Zo\'r yorqinlik uchun LED yorug\'lik manbai',
        'Yoritish notekisligini kamaytirish',
        'Silliq motorlashtirilgan joystik',
        'Ergonomik va o\'ylangan dizayn'
      ],
      advantages: [
        '<strong>Tabiiy rang:</strong> LED tizimi deyarli tabiiy rangni kuzatish imkonini beradi.',
        '<strong>Aberratsiya kompensatsiyasi:</strong> Eksklyuziv optik linzalar yoritish notekisligini yo\'q qiladi.',
        '<strong>Qulay tajriba:</strong> Motorlashtirilgan joystik harakatlarni silliq qiladi.',
        '<strong>Fokus chuqurligi:</strong> Kengaytirilgan samarali fokus chuqurligi.'
      ],
      specs: {
        'Qurilma turi': 'Yoriqli lampa (Slit lamp)',
        'Yorug\'lik manbai': 'Yorug\'lik diodi (LED)',
        'Optika': 'Yuqori aniqlik'
      }
    },
    en: {
      title: 'Tabletop Slit Lamp SL-2000',
      subtitle: 'Clear image in natural color',
      description: 'SL-2000 provides a high-resolution optical system to visualize ocular tissues in minute detail.',
      features: [
        'High-resolution optical system',
        'LED light source for superior brightness',
        'Reduced illumination unevenness',
        'Smooth motorized joystick',
        'Ergonomic and thoughtful design'
      ],
      advantages: [
        '<strong>Natural color:</strong> The LED system allows observation in almost natural colors.',
        '<strong>Aberration compensation:</strong> Exclusive optical lens eliminates uneven illumination.',
        '<strong>Excellent experience:</strong> Motorized joystick makes movements exceptionally smooth.',
        '<strong>Focal depth:</strong> Increased effective focal depth for better observation.'
      ],
      specs: {
        'Device Type': 'Slit Lamp',
        'Light Source': 'LED',
        'Optics': 'High resolution'
      }
    }
  },
  'keeler-z-slit-lamp': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/80326-19404729.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/80326-19404728.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/80326-19404730.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/80326-19404731.webp'
    ],
    ru: {
      title: 'Настольная щелевая лампа KSL-H5-DR',
      subtitle: 'Цифровая готовность и оптика мирового класса',
      description: 'Цифровая щелевая лампа H-стиля с 5-ступенчатым увеличением, обеспечивающая отличные световые характеристики и надежность.',
      features: [
        'Цифровая готовность',
        'Светодиодная подсветка',
        'Оптика мирового класса',
        '5-ступенчатый выбор увеличения',
        'Совместимость с лазером'
      ],
      advantages: [
        '<strong>Долговечность:</strong> Прочная конструкция из алюминия, рассчитанная на ежедневное использование.',
        '<strong>Увеличение:</strong> 5-ступенчатое увеличение (6x, 10x, 16x, 25x, 40x).',
        '<strong>Возможность получения видео:</strong> Позволяет получать снимки и видео с помощью ПО Keeler Konnect™.',
        '<strong>Фильтры в комплекте:</strong> Поставляется с прозрачным, желтым барьерным, синим и другими фильтрами.'
      ],
      specs: {
        'Тип устройства': 'Щелевая лампа',
        'Увеличение': '5-ступенчатое (до 40x)',
        'Подсветка': 'LED (3800K)'
      }
    },
    uz: {
      title: 'Stol usti yoriqli lampasi KSL-H5-DR',
      subtitle: 'Raqamli tayyorgarlik va jahon darajasidagi optika',
      description: 'Ajoyib yoritish va ishonchlilikni ta\'minlaydigan 5 bosqichli kattalashtirishga ega H-uslubidagi raqamli yoriqli lampa.',
      features: [
        'Raqamli ishlashga tayyor',
        'LED yoritish',
        'Jahon darajasidagi optika',
        '5 bosqichli kattalashtirishni tanlash',
        'Lazer bilan moslik'
      ],
      advantages: [
        '<strong>Chidamlilik:</strong> Kundalik foydalanish uchun mo\'ljallangan mustahkam alyuminiy konstruksiya.',
        '<strong>Kattalashtirish:</strong> 5 bosqichli kattalashtirish (6x, 10x, 16x, 25x, 40x).',
        '<strong>Video olish qobiliyati:</strong> Keeler Konnect™ dasturi yordamida rasm va video olish imkonini beradi.',
        '<strong>Filtrlar to\'plami:</strong> Shaffof, sariq to\'siqli, ko\'k va boshqa filtrlar bilan birga keladi.'
      ],
      specs: {
        'Qurilma turi': 'Yoriqli lampa',
        'Kattalashtirish': '5 bosqichli (40x gacha)',
        'Yoritish': 'LED (3800K)'
      }
    },
    en: {
      title: 'Tabletop Slit Lamp KSL-H5-DR',
      subtitle: 'Digital readiness and world-class optics',
      description: 'An H-style digital slit lamp with 5-step magnification providing excellent lighting performance and reliability.',
      features: [
        'Digital readiness',
        'LED lighting',
        'World-class optics',
        '5-step magnification selection',
        'Laser compatibility'
      ],
      advantages: [
        '<strong>Durability:</strong> Rugged aluminum construction designed for daily use.',
        '<strong>Magnification:</strong> 5-step magnification (6x, 10x, 16x, 25x, 40x).',
        '<strong>Video capability:</strong> Capture high-quality images and video via Keeler Konnect™ software.',
        '<strong>Included Filters:</strong> Comes with clear, yellow barrier, blue, and other filters.'
      ],
      specs: {
        'Device Type': 'Slit Lamp',
        'Magnification': '5-step (up to 40x)',
        'Illumination': 'LED (3800K)'
      }
    }
  },
  'ksl-z5': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/80326-19404717.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/80326-19404718.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/80326-19404720.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/80326-19404773.webp'
    ],
    ru: {
      title: 'Настольная щелевая лампа KSL-H3-DR',
      subtitle: '3-ступенчатое увеличение',
      description: 'Модульная настольная щелевая лампа с 3-ступенчатым увеличением и встроенным блоком питания.',
      features: [
        'Модуль 3-ступенчатого барабанного стола',
        'Встроенный блок питания',
        'Выдвижной ящик и столешница',
        'Монтажная стойка',
        'Модульная конструкция'
      ],
      advantages: [
        '<strong>Удобство:</strong> Выдвижной ящик и столешница для хранения аксессуаров.',
        '<strong>Функциональность:</strong> 3-ступенчатый барабанный механизм увеличения.',
        '<strong>Надежность:</strong> Высококачественная оптика и механика.',
        '<strong>Компактность:</strong> Интегрированный дизайн с блоком питания.'
      ],
      specs: {
        'Тип устройства': 'Щелевая лампа',
        'Увеличение': '3-ступенчатое',
        'Монтаж': 'Настольный'
      }
    },
    uz: {
      title: 'Stol usti yoriqli lampasi KSL-H3-DR',
      subtitle: '3 bosqichli kattalashtirish',
      description: 'O\'rnatilgan quvvat bloki va 3 bosqichli kattalashtirishga ega modulli stol usti yoriqli lampa.',
      features: [
        '3 bosqichli baraban stoli moduli',
        'O\'rnatilgan quvvat bloki',
        'Tortma va stol usti',
        'O\'rnatish ustuni',
        'Modulli dizayn'
      ],
      advantages: [
        '<strong>Qulaylik:</strong> Aksessuarlarni saqlash uchun tortma va stol usti.',
        '<strong>Funksionallik:</strong> 3 bosqichli barabanni kattalashtirish mexanizmi.',
        '<strong>Ishonchlilik:</strong> Yuqori sifatli optika va mexanika.',
        '<strong>Kompaktlik:</strong> Quvvat bloki bilan integratsiyalangan dizayn.'
      ],
      specs: {
        'Qurilma turi': 'Yoriqli lampa',
        'Kattalashtirish': '3 bosqichli',
        'O\'rnatish': 'Stol usti'
      }
    },
    en: {
      title: 'Tabletop Slit Lamp KSL-H3-DR',
      subtitle: '3-step magnification',
      description: 'A modular tabletop slit lamp with 3-step magnification and a built-in power supply.',
      features: [
        '3-step drum table module',
        'Built-in power supply',
        'Drawer and tabletop',
        'Mounting post',
        'Modular design'
      ],
      advantages: [
        '<strong>Convenience:</strong> Drawer and tabletop for storing accessories.',
        '<strong>Functionality:</strong> 3-step drum magnification mechanism.',
        '<strong>Reliability:</strong> High-quality optics and mechanics.',
        '<strong>Compactness:</strong> Integrated design with power supply.'
      ],
      specs: {
        'Device Type': 'Slit lamp',
        'Magnification': '3-step',
        'Mounting': 'Tabletop'
      }
    }
  },
  'sl-m6': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/108807-17742215.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/108807-17745846.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/108807-17745847.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/108807-19113241.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/108807-19113245.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/108807-19113246.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/108807-19113248.webp'
    ],
    ru: {
      title: 'Настольная щелевая лампа SL-M6',
      subtitle: 'Элегантный дизайн и апохроматическая оптика',
      description: 'Микроскоп Galilean с пятиступенчатой сменой увеличения путем вращения барабана, обеспечивающий выдающуюся оптику.',
      features: [
        'Сходящиеся бинокулярные окуляры',
        'Апохроматическая оптическая система',
        'Светодиодная подсветка',
        'Плавное движение основания и точная регулировка щелей',
        'Элегантный серебристый цвет'
      ],
      advantages: [
        '<strong>Выдающаяся оптика:</strong> Улучшение цветовой аберрации и четкости.',
        '<strong>Освещение:</strong> Долговечное LED-освещение экономит энергию.',
        '<strong>Механика:</strong> Плавное движение основания для точной фокусировки.',
        '<strong>Комфорт:</strong> Сходящиеся бинокулярные окуляры предотвращают усталость глаз.'
      ],
      specs: {
        'Увеличение': '5-ступенчатое (6x - 40x)',
        'Ширина щели': '0 - 14 мм непрерывно',
        'Окуляры': '12,5x'
      }
    },
    uz: {
      title: 'Stol usti yoriqli lampasi SL-M6',
      subtitle: 'Nafis dizayn va apoxromatik optika',
      description: 'Galilean mikroskopi, barabanni aylantirish orqali kattalashtirishni besh bosqichli o\'zgartirish va ajoyib optikani ta\'minlaydi.',
      features: [
        'Yaqinlashuvchi binokulyar okulyarlar',
        'Apoxromatik optik tizim',
        'LED yoritish',
        'Asosning silliq harakati va tirqishni aniq sozlash',
        'Nafis kumush rang'
      ],
      advantages: [
        '<strong>Ajoyib optika:</strong> Rang aberratsiyasi va tasvir ravshanligini yaxshilash.',
        '<strong>Yoritish:</strong> Uzoq muddatli LED yoritish energiyani tejaydi.',
        '<strong>Mexanika:</strong> Aniq fokuslash uchun asosning silliq harakati.',
        '<strong>Qulaylik:</strong> Yaqinlashuvchi binokulyar okulyarlar ko\'z charchashini oldini oladi.'
      ],
      specs: {
        'Kattalashtirish': '5 bosqichli (6x - 40x)',
        'Tirqish kengligi': '0 - 14 mm uzluksiz',
        'Okulyarlar': '12,5x'
      }
    },
    en: {
      title: 'Tabletop Slit Lamp SL-M6',
      subtitle: 'Elegant design and apochromatic optics',
      description: 'Galilean microscope with five-step magnification change by rotating the drum, providing outstanding optics.',
      features: [
        'Converging binocular eyepieces',
        'Apochromatic optical system',
        'LED illumination',
        'Smooth base movement and precise slit adjustment',
        'Elegant silver color'
      ],
      advantages: [
        '<strong>Outstanding optics:</strong> Improvement of color aberration and image clarity.',
        '<strong>Illumination:</strong> Long-lasting LED illumination saves energy.',
        '<strong>Mechanics:</strong> Smooth base movement for precise focusing.',
        '<strong>Comfort:</strong> Converging binocular eyepieces prevent eye fatigue.'
      ],
      specs: {
        'Magnification': '5-step (6x - 40x)',
        'Slit width': '0 - 14 mm continuous',
        'Eyepieces': '12.5x'
      }
    }
  },
  'sl-100': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/108807-17742217.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/108807-17742218.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/108807-17742219.webp'
    ],
    ru: {
      title: 'Цифровая щелевая лампа SL-100',
      subtitle: 'Четкие цифровые изображения',
      description: 'Современная цифровая щелевая лампа с 2-ступенчатым увеличением, обеспечивающая четкое и ясное цифровое изображение.',
      features: [
        'Высококачественная цифровая камера',
        'Управление одним джойстиком',
        'Профессиональное программное обеспечение',
        'Галогеновая или светодиодная подсветка',
        '2-ступенчатое увеличение (10x, 16x)'
      ],
      advantages: [
        '<strong>Удобство:</strong> Съемка нажатием кнопки на джойстике.',
        '<strong>Качество:</strong> Захват высококачественных фото и видео.',
        '<strong>ПО в комплекте:</strong> Система управления данными пациентов и изображениями.',
        '<strong>Интеграция:</strong> Легкое подключение к ПК для быстрой работы.'
      ],
      specs: {
        'Тип устройства': 'Цифровая щелевая лампа',
        'Увеличение': '2-ступенчатое (10x, 16x)',
        'Камера': 'Встроенная цифровая'
      }
    },
    uz: {
      title: 'Raqamli yoriqli lampa SL-100',
      subtitle: 'Aniq raqamli tasvirlar',
      description: 'Aniq va tiniq raqamli tasvirni ta\'minlovchi 2 bosqichli kattalashtirishga ega zamonaviy raqamli yoriqli lampa.',
      features: [
        'Yuqori sifatli raqamli kamera',
        'Bitta joystik yordamida boshqarish',
        'Professional dasturiy ta\'minot',
        'Galogen yoki LED yoritish',
        '2 bosqichli kattalashtirish (10x, 16x)'
      ],
      advantages: [
        '<strong>Qulaylik:</strong> Joystikdagi tugmani bosish orqali suratga olish.',
        '<strong>Sifat:</strong> Yuqori sifatli rasm va videolarni olish.',
        '<strong>Dasturiy ta\'minot to\'plami:</strong> Bemor ma\'lumotlari va tasvirlarni boshqarish tizimi.',
        '<strong>Integratsiya:</strong> Tezkor ishlash uchun kompyuterga oson ulanish.'
      ],
      specs: {
        'Qurilma turi': 'Raqamli yoriqli lampa',
        'Kattalashtirish': '2 bosqichli (10x, 16x)',
        'Kamera': 'O\'rnatilgan raqamli'
      }
    },
    en: {
      title: 'Digital Slit Lamp SL-100',
      subtitle: 'Clear digital images',
      description: 'A modern digital slit lamp with 2-step magnification providing a clear and crisp digital image.',
      features: [
        'High quality digital camera',
        'Single joystick control',
        'Professional software',
        'Halogen or LED illumination',
        '2-step magnification (10x, 16x)'
      ],
      advantages: [
        '<strong>Convenience:</strong> Capture by pressing a button on the joystick.',
        '<strong>Quality:</strong> Capture high quality photos and videos.',
        '<strong>Included software:</strong> Patient data and image management system.',
        '<strong>Integration:</strong> Easy connection to PC for fast workflow.'
      ],
      specs: {
        'Device Type': 'Digital slit lamp',
        'Magnification': '2-step (10x, 16x)',
        'Camera': 'Built-in digital'
      }
    }
  },
  'kj5x': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911571.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911572.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911573.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510884.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510885.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510886.webp'
    ],
    ru: {
      title: 'Настольная щелевая лампа KJ5X',
      subtitle: 'Широкое поле и стереоскопическое зрение',
      description: 'Щелевая лампа параллельного типа Галилея с 5-ступенчатым увеличением, обеспечивающая большое поле зрения.',
      features: [
        'Параллельная система Галилея',
        '5-ступенчатое увеличение барабана',
        'Широкое поле зрения',
        'Светодиодный источник света',
        'Интерфейс для лазера и аппланационного тонометра'
      ],
      advantages: [
        '<strong>Оптика:</strong> Отличное стереоскопическое зрение и большая глубина резкости.',
        '<strong>Удобство:</strong> Все оптические линзы имеют влагостойкое, защищенное от плесени и антибликовое покрытие.',
        '<strong>Многофункциональность:</strong> Оснащена интерфейсами для лазера и тонометра.',
        '<strong>Освещение:</strong> Светодиодная лампа обеспечивает долговечное и яркое освещение.'
      ],
      specs: {
        'Тип устройства': 'Щелевая лампа',
        'Увеличение': '5-ступенчатое',
        'Оптика': 'Галилеевская система'
      }
    },
    uz: {
      title: 'Stol usti yoriqli lampasi KJ5X',
      subtitle: 'Keng maydon va stereoskopik ko\'rish',
      description: 'Galileyning parallel turdagi yoriqli lampasi, 5 bosqichli kattalashtirish va katta ko\'rish maydonini ta\'minlaydi.',
      features: [
        'Galileyning parallel tizimi',
        '5 bosqichli barabanni kattalashtirish',
        'Keng ko\'rish maydoni',
        'LED yorug\'lik manbai',
        'Lazer va applanatsion tonometr uchun interfeys'
      ],
      advantages: [
        '<strong>Optika:</strong> Ajoyib stereoskopik ko\'rish va katta fokus chuqurligi.',
        '<strong>Qulaylik:</strong> Barcha optik linzalar namlikka, mog\'orga chidamli va aks ettirmaydigan qoplamaga ega.',
        '<strong>Ko\'p funksiyalilik:</strong> Lazer va tonometr uchun interfeyslar bilan jihozlangan.',
        '<strong>Yoritish:</strong> LED lampa uzoq muddatli va yorqin yoritishni ta\'minlaydi.'
      ],
      specs: {
        'Qurilma turi': 'Yoriqli lampa',
        'Kattalashtirish': '5 bosqichli',
        'Optika': 'Galiley tizimi'
      }
    },
    en: {
      title: 'Tabletop Slit Lamp KJ5X',
      subtitle: 'Wide field and stereoscopic vision',
      description: 'A Galileo parallel type slit lamp with 5-step magnification providing a large field of view.',
      features: [
        'Galileo parallel system',
        '5-step drum magnification',
        'Wide field of view',
        'LED light source',
        'Interface for laser and applanation tonometer'
      ],
      advantages: [
        '<strong>Optics:</strong> Excellent stereoscopic vision and great depth of field.',
        '<strong>Convenience:</strong> All optical lenses have moisture-proof, mold-proof and anti-reflective coating.',
        '<strong>Multifunctionality:</strong> Equipped with interfaces for laser and tonometer.',
        '<strong>Illumination:</strong> LED lamp provides long-lasting and bright illumination.'
      ],
      specs: {
        'Device Type': 'Slit Lamp',
        'Magnification': '5-step',
        'Optics': 'Galileo system'
      }
    }
  },
  'yslxd-2er': {
    images: ['https://img.medicalexpo.com/images_me/photo-g/70665-17330110.webp'],
    uz: {
      title: 'YSLXD-2ER',
      subtitle: 'Jarrohlik mikroskopi',
      description: 'Oftalmologik xirurgiya uchun mo\'ljallangan, aniq optika va qulay boshqaruvga ega jarrohlik mikroskopi.',
      features: ['Jarrohlik optikasi', 'Poyabzal pulti orqali boshqaruv', 'Mustahkam tirkama'],
      advantages: ['Ravshanlik: Jarroh uchun ideal ko\'rinish.', 'Ergonomika: Jarrohlik jarayonida qulaylik.'],
      specs: {'Qurilma turi': 'Jarrohlik mikroskopi'}
    },
    ru: {
      title: 'YSLXD-2ER',
      subtitle: 'Хирургический микроскоп',
      description: 'Хирургический микроскоп с точной оптикой и удобным управлением, предназначенный для офтальмологической хирургии.',
      features: ['Хирургическая оптика', 'Управление через ножную педаль', 'Прочный штатив'],
      advantages: ['Четкость: Идеальный обзор для хирурга.', 'Эргономика: Комфорт во время хирургического процесса.'],
      specs: {'Тип устройства': 'Хирургический микроскоп'}
    },
    en: {
      title: 'YSLXD-2ER',
      subtitle: 'Surgical Microscope',
      description: 'A surgical microscope with precise optics and convenient control, designed for ophthalmic surgery.',
      features: ['Surgical optics', 'Control via foot pedal', 'Sturdy stand'],
      advantages: ['Clarity: Ideal view for the surgeon.', 'Ergonomics: Comfort during the surgical process.'],
      specs: {'Device Type': 'Surgical microscope'}
    }
  },
  'yslxd-3er': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243173.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243174.webp'
    ],
    ru: {
      title: 'Цифровая щелевая лампа YSLXD-3ER',
      subtitle: '3-ступенчатое увеличение с камерой',
      description: 'Щелевая лампа с 3-ступенчатым увеличением и возможностью интеграции цифровой камеры для фото- и видеофиксации.',
      features: [
        '3-ступенчатое увеличение',
        'Поддержка цифровой камеры',
        'Галогенное освещение',
        'Удобный джойстик',
        'Программное обеспечение для ПК'
      ],
      advantages: [
        '<strong>Документирование:</strong> Возможность сохранять изображения пациентов.',
        '<strong>Анализ:</strong> Программное обеспечение для работы с данными.',
        '<strong>Четкость:</strong> Высококачественная оптика для точного диагноза.',
        '<strong>Удобство:</strong> Эргономичный дизайн для длительной работы.'
      ],
      specs: {
        'Тип устройства': 'Цифровая щелевая лампа',
        'Увеличение': '3-ступенчатое',
        'Камера': 'Опционально / Интегрируемая'
      }
    },
    uz: {
      title: 'Raqamli yoriqli lampa YSLXD-3ER',
      subtitle: 'Kamera bilan 3 bosqichli kattalashtirish',
      description: 'Foto va video qayd qilish uchun raqamli kamerani integratsiya qilish imkoniyatiga ega 3 bosqichli yoriqli lampa.',
      features: [
        '3 bosqichli kattalashtirish',
        'Raqamli kamerani qo\'llab-quvvatlash',
        'Galogen yoritish',
        'Qulay joystik',
        'Kompyuter uchun dasturiy ta\'minot'
      ],
      advantages: [
        '<strong>Hujjatlashtirish:</strong> Bemorlarning tasvirlarini saqlash imkoniyati.',
        '<strong>Tahlil:</strong> Ma\'lumotlar bilan ishlash uchun dasturiy ta\'minot.',
        '<strong>Aniqlik:</strong> To\'g\'ri tashxis uchun yuqori sifatli optika.',
        '<strong>Qulaylik:</strong> Uzoq muddatli ishlash uchun ergonomik dizayn.'
      ],
      specs: {
        'Qurilma turi': 'Raqamli yoriqli lampa',
        'Kattalashtirish': '3 bosqichli',
        'Kamera': 'Ixtiyoriy / Integratsiyalashgan'
      }
    },
    en: {
      title: 'Digital Slit Lamp YSLXD-3ER',
      subtitle: '3-step magnification with camera',
      description: 'A slit lamp with 3-step magnification and the ability to integrate a digital camera for photo and video recording.',
      features: [
        '3-step magnification',
        'Digital camera support',
        'Halogen illumination',
        'Comfortable joystick',
        'PC software'
      ],
      advantages: [
        '<strong>Documentation:</strong> Ability to save patient images.',
        '<strong>Analysis:</strong> Software for data processing.',
        '<strong>Clarity:</strong> High-quality optics for accurate diagnosis.',
        '<strong>Convenience:</strong> Ergonomic design for long-term work.'
      ],
      specs: {
        'Device Type': 'Digital slit lamp',
        'Magnification': '3-step',
        'Camera': 'Optional / Integrable'
      }
    }
  },
  'ksl-z5-d': {
    images: ['https://img.medicalexpo.com/images_me/photo-g/70665-18568805.webp'],
    uz: {
      title: 'KSL-Z5-D',
      subtitle: 'Premium yoriqli lampa',
      description: 'Maksimal aniqlik va yorug\'lik sifatini ta\'minlovchi raqamli texnologiyalar bilan jihozlangan premium yoriqli lampa.',
      features: ['Premium optika', 'Yuqori aniqlikdagi sensor', 'To\'liq raqamli integratsiya'],
      advantages: ['Diagnostika sifati: Benukson tasvir sifati.', 'Innovatsion dizayn: Zamonaviy klinika uchun mukammal yechim.'],
      specs: {'Qurilma turi': 'Premium yoriqli lampa'}
    },
    ru: {
      title: 'KSL-Z5-D',
      subtitle: 'Премиум щелевая лампа',
      description: 'Щелевая лампа премиум-класса, оснащенная цифровыми технологиями для максимальной точности и качества освещения.',
      features: ['Премиальная оптика', 'Сенсор высокого разрешения', 'Полная цифровая интеграция'],
      advantages: ['Качество диагностики: Безупречное качество изображения.', 'Инновационный дизайн: Идеальное решение для современной клиники.'],
      specs: {'Тип устройства': 'Премиум щелевая лампа'}
    },
    en: {
      title: 'KSL-Z5-D',
      subtitle: 'Premium Slit Lamp',
      description: 'A premium slit lamp equipped with digital technologies for maximum accuracy and illumination quality.',
      features: ['Premium optics', 'High-resolution sensor', 'Full digital integration'],
      advantages: ['Diagnostic quality: Flawless image quality.', 'Innovative design: Perfect solution for a modern clinic.'],
      specs: {'Device Type': 'Premium Slit Lamp'}
    }
  },
  'opd-scan-3': {
    images: ['https://img.medicalexpo.com/images_me/photo-g/70665-11707006.webp'],
    uz: {
      title: 'OPD-Scan III',
      subtitle: 'Ko\'rish qobiliyatini kompleks tekshirish',
      description: 'Refraktometr, keratometr, topograf, pupillometr va aberrometr imkoniyatlarini o\'zida birlashtirgan noyob uskuna.',
      features: ['5 tasi 1 da', '10 soniyada o\'lchash', 'To\'liq topografik xarita'],
      advantages: ['Vaqt tejamkorligi: Bir nechta tekshiruv bitta asbobda.', 'Yuqori aniqlik: Eng mayda aberatsiyalarni ham aniqlash.'],
      specs: {'Qurilma turi': 'Aberrometr / Topograf'}
    },
    ru: {
      title: 'OPD-Scan III',
      subtitle: 'Комплексное обследование зрения',
      description: 'Уникальное устройство, объединяющее возможности рефрактометра, кератометра, топографа, пупиллометра и аберрометра.',
      features: ['5 в 1', 'Измерение за 10 секунд', 'Полная топографическая карта'],
      advantages: ['Экономия времени: Несколько обследований на одном приборе.', 'Высокая точность: Выявление даже мельчайших аберраций.'],
      specs: {'Тип устройства': 'Аберрометр / Топограф'}
    },
    en: {
      title: 'OPD-Scan III',
      subtitle: 'Comprehensive Vision Assessment',
      description: 'A unique device combining the capabilities of a refractometer, keratometer, topographer, pupillometer, and aberrometer.',
      features: ['5 in 1', '10-second measurement', 'Full topographic map'],
      advantages: ['Time-saving: Multiple examinations on one device.', 'High accuracy: Detecting even the smallest aberrations.'],
      specs: {'Device Type': 'Aberrometer / Topographer'}
    }
  },
  'cem-530': {
    images: ['https://img.medicalexpo.com/images_me/photo-g/70665-11537237.webp'],
    uz: {
      title: 'CEM-530',
      subtitle: 'Spekulyar Mikroskop',
      description: 'Ko\'z shox pardasining endotelial hujayralarini kontaktsiz va yuqori aniqlikda suratga olish qurilmasi.',
      features: ['3D avtomatik kuzatish', 'Endotelial hujayralar tahlili', 'Tezkor o\'lchash'],
      advantages: ['Xavfsizlik: Kontaktsiz o\'lchash jarayoni.', 'Aniqlik: Jarrohlik amaliyotlaridan oldin muhim diagnostika.'],
      specs: {'Qurilma turi': 'Spekulyar Mikroskop'}
    },
    ru: {
      title: 'CEM-530',
      subtitle: 'Спекулярный микроскоп',
      description: 'Бесконтактное устройство для высокоточной съемки эндотелиальных клеток роговицы глаза.',
      features: ['3D автотрекинг', 'Анализ эндотелиальных клеток', 'Быстрое измерение'],
      advantages: ['Безопасность: Бесконтактный процесс измерения.', 'Точность: Важная диагностика перед хирургическими операциями.'],
      specs: {'Тип устройства': 'Спекулярный микроскоп'}
    },
    en: {
      title: 'CEM-530',
      subtitle: 'Specular Microscope',
      description: 'A non-contact device for high-precision imaging of corneal endothelial cells.',
      features: ['3D auto-tracking', 'Endothelial cell analysis', 'Fast measurement'],
      advantages: ['Safety: Non-contact measurement process.', 'Accuracy: Important diagnostics before surgical procedures.'],
      specs: {'Device Type': 'Specular Microscope'}
    }
  },
  'us-4000': {
    images: ['https://img.medicalexpo.com/images_me/photo-g/70665-15494420.webp'],
    uz: {
      title: 'US-4000',
      subtitle: 'Kompleks Oftalmik Ultratovush',
      description: 'B-skaner, Biometr (A-skaner) va Pachimetr funksiyalarini o\'z ichiga olgan mukammal oftalmologik ultratovush tizimi.',
      features: ['B-skaner', 'A-skaner / Biometr', 'Pachimetr', 'Kompakt dizayn'],
      advantages: ['Ko\'p funksiyalilik: Barcha ultratovush tekshiruvlari bitta joyda.', 'Sifat: Yuqori aniqlikdagi to\'r parda tasvirlari.'],
      specs: {'Qurilma turi': 'A/B Ultratovush skaneri'}
    },
    ru: {
      title: 'US-4000',
      subtitle: 'Комплексное офтальмологическое УЗИ',
      description: 'Совершенная офтальмологическая ультразвуковая система, включающая функции В-сканера, Биометра (А-сканер) и Пахиметра.',
      features: ['В-сканер', 'А-сканер / Биометр', 'Пахиметр', 'Компактный дизайн'],
      advantages: ['Многофункциональность: Все ультразвуковые обследования в одном месте.', 'Качество: Изображения сетчатки с высоким разрешением.'],
      specs: {'Тип устройства': 'УЗИ сканер А/В'}
    },
    en: {
      title: 'US-4000',
      subtitle: 'Comprehensive Ophthalmic Ultrasound',
      description: 'A complete ophthalmic ultrasound system featuring B-scan, Biometer (A-scan), and Pachymeter functions.',
      features: ['B-scan', 'A-scan / Biometer', 'Pachymeter', 'Compact design'],
      advantages: ['Multifunctionality: All ultrasound examinations in one place.', 'Quality: High-resolution retinal images.'],
      specs: {'Device Type': 'A/B Ultrasound Scanner'}
    }
  },
  'us-500': {
    images: ['https://img.medicalexpo.com/images_me/photo-g/70665-12686884.webp'],
    uz: {
      title: 'US-500',
      subtitle: 'Oftalmik Pachimetr va Biometr',
      description: 'IOL hisoblash va shox parda qalinligini o\'lchash uchun ixcham ultratovush asbobi.',
      features: ['A-skaner', 'Pachimetr', 'Kompakt va yengil'],
      advantages: ['Qulaylik: Ko\'chma va ishlatishga oson.', 'Aniqlik: Katarakta jarrohligi uchun zaruriy ma\'lumotlar.'],
      specs: {'Qurilma turi': 'A-skaner va Pachimetr'}
    },
    ru: {
      title: 'US-500',
      subtitle: 'Офтальмологический пахиметр и биометр',
      description: 'Компактный ультразвуковой прибор для расчета ИОЛ и измерения толщины роговицы.',
      features: ['А-сканер', 'Пахиметр', 'Компактный и легкий'],
      advantages: ['Удобство: Портативный и простой в использовании.', 'Точность: Необходимые данные для хирургии катаракты.'],
      specs: {'Тип устройства': 'А-скан и Пахиметр'}
    },
    en: {
      title: 'US-500',
      subtitle: 'Ophthalmic Pachymeter and Biometer',
      description: 'A compact ultrasound instrument for IOL calculation and corneal thickness measurement.',
      features: ['A-scan', 'Pachymeter', 'Compact and lightweight'],
      advantages: ['Convenience: Portable and easy to use.', 'Accuracy: Essential data for cataract surgery.'],
      specs: {'Device Type': 'A-scan and Pachymeter'}
    }
  },
  'ce-9': {
    images: ['https://img.medicalexpo.com/images_me/photo-g/70665-20510870.webp'],
    uz: {
      title: 'CE-9',
      subtitle: 'Linza blokerlash qurilmasi',
      description: 'Optik laboratoriyalar uchun markazga qo\'yish va linzalarni blokerlash tizimi.',
      features: ['Avtomatik markazlashtirish', 'Oson boshqaruv', 'LED yoritish'],
      advantages: ['Aniqlik: Linzalarni mukammal joylashtirish.', 'Samaradorlik: Ishlab chiqarish jarayonini tezlashtiradi.'],
      specs: {'Qurilma turi': 'Linza blokeri'}
    },
    ru: {
      title: 'CE-9',
      subtitle: 'Устройство для блокировки линз',
      description: 'Система центрирования и блокировки линз для оптических лабораторий.',
      features: ['Автоматическое центрирование', 'Удобное управление', 'LED освещение'],
      advantages: ['Точность: Идеальное расположение линз.', 'Эффективность: Ускоряет производственный процесс.'],
      specs: {'Тип устройства': 'Блокер для линз'}
    },
    en: {
      title: 'CE-9',
      subtitle: 'Lens Blocker',
      description: 'A centering and lens blocking system for optical laboratories.',
      features: ['Automatic centering', 'Easy operation', 'LED illumination'],
      advantages: ['Accuracy: Perfect positioning of lenses.', 'Efficiency: Speeds up the production process.'],
      specs: {'Device Type': 'Lens Blocker'}
    }
  },
  'lt-1200': {
    images: ['https://img.medicalexpo.com/images_me/photo-g/70665-21243033.webp'],
    uz: {
      title: 'LT-1200',
      subtitle: 'Avtomatik Frame Tracer',
      description: 'Ko\'zoynak ramkalarini 3D skanerlash va shaklini o\'lchash uchun ilg\'or tracer.',
      features: ['3D to\'liq avtomatik skanerlash', 'Yuqori aniqlik', 'Barcha turdagi hoshiyalarni qo\'llab-quvvatlash'],
      advantages: ['Ishonchlilik: Eng murakkab hoshiyalarni ham muammosiz taniy oladi.', 'Tezlik: Skanerlash vaqtini kamaytiradi.'],
      specs: {'Qurilma turi': 'Avtomatik Tracer'}
    },
    ru: {
      title: 'LT-1200',
      subtitle: 'Автоматический трейсер оправы',
      description: 'Усовершенствованный трейсер для 3D сканирования и измерения формы оправ очков.',
      features: ['Полностью автоматическое 3D сканирование', 'Высокая точность', 'Поддержка всех типов оправ'],
      advantages: ['Надежность: Безошибочно распознает даже самые сложные оправы.', 'Скорость: Сокращает время сканирования.'],
      specs: {'Тип устройства': 'Автоматический трейсер'}
    },
    en: {
      title: 'LT-1200',
      subtitle: 'Automatic Frame Tracer',
      description: 'An advanced tracer for 3D scanning and measuring the shape of eyeglass frames.',
      features: ['Fully automatic 3D scanning', 'High accuracy', 'Support for all types of frames'],
      advantages: ['Reliability: Flawlessly recognizes even the most complex frames.', 'Speed: Reduces scanning time.'],
      specs: {'Device Type': 'Automatic Tracer'}
    }
  },
  'lt-980': {
    images: ['https://img.medicalexpo.com/images_me/photo-g/70665-17330105.webp'],
    uz: {
      title: 'LT-980',
      subtitle: 'Frame Tracer',
      description: 'Hoshiyalarni tez va ishonchli ravishda raqamlashtirish uchun standart tracer asbobi.',
      features: ['Raqamli o\'lchash', 'Foydalanishga oson interfeys', 'Kompakt dizayn'],
      advantages: ['Qulaylik: Har qanday laboratoriyaga mos tushadi.', 'Barqarorlik: Sifatli o\'lchash natijalari.'],
      specs: {'Qurilma turi': 'Frame Tracer'}
    },
    ru: {
      title: 'LT-980',
      subtitle: 'Трейсер оправы',
      description: 'Стандартный трейсер для быстрой и надежной оцифровки оправ.',
      features: ['Цифровое измерение', 'Простой в использовании интерфейс', 'Компактный дизайн'],
      advantages: ['Удобство: Подходит для любой лаборатории.', 'Стабильность: Качественные результаты измерений.'],
      specs: {'Тип устройства': 'Трейсер оправы'}
    },
    en: {
      title: 'LT-980',
      subtitle: 'Frame Tracer',
      description: 'A standard tracer tool for quick and reliable digitization of frames.',
      features: ['Digital measurement', 'Easy to use interface', 'Compact design'],
      advantages: ['Convenience: Fits into any laboratory.', 'Stability: High-quality measurement results.'],
      specs: {'Device Type': 'Frame Tracer'}
    }
  },
  'al-scan': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8683631.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-7161159.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8685546.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911668.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911670.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911671.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911673.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911675.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911680.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911684.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911687.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549468.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549482.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510782.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510785.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510788.webp',
      'https://video.medicalexpo.com/video_me/videos/video-24033.mp4'
    ],
    uz: {
      title: 'Oftalmologik optik biometr AL-Scan',
      subtitle: 'Katarakta jarrohligi uchun 10 soniyada 6 ta klinik parametr',
      description: 'AL-Scan 10 soniya ichida katarakta jarrohligi uchun zarur bo\'lgan 6 ta muhim ko\'rsatkichni o\'lchaydi: o\'q uzunligi, shox parda egrilik radiusi, old kamera chuqurligi, markaziy shox parda qalinligi, oqdan-oqgacha bo\'lgan masofa va qorachiq o\'lchami.<br><br><video src="https://video.medicalexpo.com/video_me/videos/video-24033.mp4" controls width="100%" style="border-radius: 8px; margin-top: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);"></video>',
      features: [
        '10 soniyada 6 xil klinik parametr o\'lchovi',
        '3D avtomatik kuzatuv (avtotreking) va avtomatik suratga olish',
        'Scheimpflug vizualizatsiyasi va qo\'sh halqali keratometriya orqali old segmentni kuzatish',
        'Ixtiyoriy o\'rnatilgan ultratovushli biometr yordamida qattiq kataraktani ham o\'lchash',
        'IOL quvvatini hisoblash va IOL konstantalarini optimallashtirish'
      ],
      advantages: [
        'Tezlik: Jarayonning to\'liq avtomatlashtirilgani bemor uchun ham, shifokor uchun ham vaqtni tejaydi.',
        'Aniqlik: Barcha o\'lchovlar eng yuqori aniqlikda bajariladi, bu operatsiya muvaffaqiyatini ta\'minlaydi.'
      ],
      specs: {
        'Qurilma turi': 'Optik biometr',
        'O\'lchash vaqti': '10 soniya',
        'Avtotreking': '3D (X-Y-Z yo\'nalishlarida)',
        'O\'lchanadigan parametrlar': '6 xil'
      }
    },
    ru: {
      title: 'Офтальмологический оптический биометр AL-Scan',
      subtitle: '6 клинических параметров за 10 секунд',
      description: 'AL-Scan измеряет шесть показателей для хирургии катаракты за 10 секунд: осевая длина, радиус кривизны роговицы, глубина передней камеры, центральная толщина роговицы, расстояние от белого до белого, размер зрачка.<br><br><video src="https://video.medicalexpo.com/video_me/videos/video-24033.mp4" controls width="100%" style="border-radius: 8px; margin-top: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);"></video>',
      features: [
        '6 клинических параметров за 10 секунд',
        '3D автоматическое слежение (X-Y-Z) и автоматическая съемка',
        'Наблюдение за передним сегментом с помощью визуализации Scheimpflug и двойной кольцевой кератометрии',
        'Опционально встроенный ультразвуковой биометр для плотной катаракты',
        'Расчет мощности ИОЛ и оптимизация констант ИОЛ'
      ],
      advantages: [
        'Скорость: Полностью автоматизированный процесс экономит время пациента и врача.',
        'Точность: Идеальное качество измерений, обеспечивающее успех хирургического вмешательства.'
      ],
      specs: {
        'Тип устройства': 'Оптический биометр',
        'Время измерения': '10 секунд',
        'Автотрекинг': '3D (по направлениям X-Y-Z)',
        'Количество параметров': '6'
      }
    },
    en: {
      title: 'Ophthalmic Optical Biometer AL-Scan',
      subtitle: '6 clinical parameters in 10 seconds',
      description: 'In 10 seconds, AL-Scan measures six values for cataract surgery: axial length, corneal curvature radius, anterior chamber depth, central corneal thickness, white-to-white distance, and pupil size.<br><br><video src="https://video.medicalexpo.com/video_me/videos/video-24033.mp4" controls width="100%" style="border-radius: 8px; margin-top: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);"></video>',
      features: [
        '6 clinical parameters measured in just 10 seconds',
        '3D auto tracking (X-Y-Z directions) and auto shot',
        'Anterior segment observation with Scheimpflug imaging and double mire ring keratometry',
        'Optional built-in ultrasound biometer for dense cataracts',
        'IOL power calculation and IOL constant optimization'
      ],
      advantages: [
        'Speed: Fully automated process saves time for both patient and practitioner.',
        'Accuracy: Delivers highly precise measurements to ensure surgical success.'
      ],
      specs: {
        'Device Type': 'Optical Biometer',
        'Measurement Time': '10 seconds',
        'Auto-tracking': '3D (X-Y-Z directions)',
        'Parameters Measured': '6 values'
      }
    }
  },
  'cube-alpha': {
    images: ['https://img.medicalexpo.com/images_me/photo-g/70665-18568332.webp'],
    uz: {
      title: 'Cube α',
      subtitle: 'Fakoemulsifikator',
      description: 'Katarakta jarrohligi uchun ixcham va kuchli platforma.',
      features: ['Kompakt dizayn', 'Intuitiv interfeys', 'Kuchli ultratovushli emulsiya'],
      advantages: ['Portativlik: Jarrohlik xonasida ko\'p joy egallamaydi.', 'Ishonchlilik: Barqaror jarrohlik jarayoni.'],
      specs: {'Qurilma turi': 'Fakoemulsifikator'}
    },
    ru: {
      title: 'Cube α',
      subtitle: 'Факоэмульсификатор',
      description: 'Компактная и мощная платформа для хирургии катаракты.',
      features: ['Компактный дизайн', 'Интуитивно понятный интерфейс', 'Мощная ультразвуковая эмульсификация'],
      advantages: ['Портативность: Занимает минимум места в операционной.', 'Надежность: Стабильный хирургический процесс.'],
      specs: {'Тип устройства': 'Факоэмульсификатор'}
    },
    en: {
      title: 'Cube α',
      subtitle: 'Phacoemulsifier',
      description: 'Compact and powerful platform for cataract surgery.',
      features: ['Compact design', 'Intuitive interface', 'Powerful ultrasonic emulsification'],
      advantages: ['Portability: Takes up minimal space in the OR.', 'Reliability: Stable surgical process.'],
      specs: {'Device Type': 'Phacoemulsifier'}
    }
  },
  'gyc-500': {
    images: ['https://img.medicalexpo.com/images_me/photo-g/70665-20511105.webp'],
    uz: {
      title: 'GYC-500',
      subtitle: 'Lazerli Fotokoagulyator',
      description: 'Kompakt va kuchli yashil lazerli fotokoagulyator asbobi.',
      features: ['Yashil lazer', 'Aniq fokuslash', 'Maksimal nazorat'],
      advantages: ['Samaradorlik: Retinal kasalliklarni muolaja qilishda eng yaxshi tanlov.', 'Qulaylik: Oson sozlash va ishlash.'],
      specs: {'Qurilma turi': 'Oftalmik Lazer'}
    },
    ru: {
      title: 'GYC-500',
      subtitle: 'Лазерный фотокоагулятор',
      description: 'Компактный и мощный зеленый лазерный фотокоагулятор.',
      features: ['Зеленый лазер', 'Точная фокусировка', 'Максимальный контроль'],
      advantages: ['Эффективность: Лучший выбор для лечения заболеваний сетчатки.', 'Удобство: Простая настройка и эксплуатация.'],
      specs: {'Тип устройства': 'Офтальмологический лазер'}
    },
    en: {
      title: 'GYC-500',
      subtitle: 'Laser Photocoagulator',
      description: 'Compact and powerful green laser photocoagulator device.',
      features: ['Green laser', 'Precise focusing', 'Maximum control'],
      advantages: ['Efficiency: The best choice for treating retinal diseases.', 'Convenience: Easy setup and operation.'],
      specs: {'Device Type': 'Ophthalmic Laser'}
    }
  },
  'yc-200-s-plus': {
    images: ['https://img.medicalexpo.com/images_me/photo-g/70665-19550464.webp'],
    uz: {
      title: 'YC-200 S PLUS',
      subtitle: 'Trabekuloplastik Lazer',
      description: 'Glaukoma va kataraktani davolash uchun mo\'ljallangan zamonaviy lazer tizimi.',
      features: ['SLT texnologiyasi', 'Yuqori samaradorlik', 'Kengaytirilgan xavfsizlik'],
      advantages: ['Ko\'p qirralilik: Bir nechta muolajalarni amalga oshirish.', 'Xavfsizlik: Bemorlar uchun og\'riqsiz jarayon.'],
      specs: {'Qurilma turi': 'SLT / YAG Lazeri'}
    },
    ru: {
      title: 'YC-200 S PLUS',
      subtitle: 'Трабекулопластический лазер',
      description: 'Современный лазер для лечения глаукомы и катаракты.',
      features: ['Технология SLT', 'Высокая эффективность', 'Повышенная безопасность'],
      advantages: ['Многофункциональность: Проведение различных процедур.', 'Безопасность: Безболезненный процесс для пациентов.'],
      specs: {'Тип устройства': 'SLT / YAG лазер'}
    },
    en: {
      title: 'YC-200 S PLUS',
      subtitle: 'Trabeculoplasty Laser',
      description: 'Modern laser system for the treatment of glaucoma and cataract.',
      features: ['SLT technology', 'High efficiency', 'Enhanced safety'],
      advantages: ['Versatility: Performing multiple procedures.', 'Safety: Painless process for patients.'],
      specs: {'Device Type': 'SLT / YAG Laser'}
    }
  },
  'ark-f': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-14885765.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-14885767.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-14885769.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-14885771.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-14885777.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-14885783.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549230.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510251.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510252.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510253.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510255.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510275.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510277.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510278.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510279.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510282.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510283.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510284.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510285.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510286.webp'
    ],
    video: 'https://video.medicalexpo.com/video_me/videos/video-107280.mp4',
    uz: {
      title: 'Автоматический кератометр ARK-F',
      subtitle: 'To\'liq avtomatlashtirilgan o\'lchash',
      description: 'ARK-F bemor ko\'zini avtomatik aniqlab (NEDC kamerasi orqali), barcha o\'lchovlarni to\'liq avtomatlashtirilgan tarzda bajaradi.',
      features: ['To\'liq avtomatlashtirilgan o\'lchash', 'Intuitiv qulay boshqaruv', 'Keng ko\'lamdagi opsiya va moslashuvchanlik'],
      advantages: ['Qulaylik: 9 ta tilda ovozli yordamchi bor.', 'Aniqlik: Katta qorachiq zonasi va yuqori sezuvchanlikdagi PZS matritsa bilan aniq natijalar.'],
      specs: {'Qurilma turi': 'Avtomatik refraktometr va keratomter'}
    },
    ru: {
      title: 'Автоматический кератометр ARK-F',
      subtitle: 'Полностью автоматизированные измерения',
      description: 'Как только пациент занимает правильное положение на подголовнике, камера NIDEK для обнаружения глаз (NEDC) автоматически обнаруживает глаза, обеспечивая точное выравнивание и измерение. Эта уникальная система обнаружения и позиционирования обеспечивает "полный" полностью автоматизированный процесс измерения.',
      features: ['Полностью автоматизированное измерение', 'Точное измерение', 'Интуитивно понятное ручное управление', 'Гибкая и компактная конструкция'],
      advantages: ['9 языков для голосовых инструкций', 'Более легкая поддержка век', 'Метод визуализации зоны большого зрачка', 'Кератометрическое измерение с кольцом мира'],
      specs: {'Тип устройства': 'Автоматический рефрактометр и кератометр'}
    },
    en: {
      title: 'Автоматический кератометр ARK-F',
      subtitle: 'Fully automated measurement',
      description: 'As soon as the patient takes the correct position on the headrest, the NIDEK eye detection camera (NEDC) automatically detects the eyes, ensuring accurate alignment and measurement.',
      features: ['Fully automated measurement', 'Accurate measurement', 'Intuitive manual control', 'Flexible and compact design'],
      advantages: ['9 languages for voice instructions', 'Easier eyelid support', 'Large pupil zone imaging method', 'Keratometric measurement with a mire ring'],
      specs: {'Device Type': 'Auto Refractometer and Keratometer'}
    }
  },
  'sl-100': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/131438-21265214.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/131438-16315423.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/131438-16315429.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/131438-16315430.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/131438-16315431.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/131438-19061208.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/131438-19061209.webp'
    ],
    uz: {
      title: 'Цифровая щелевая лампа SL-100',
      subtitle: 'Raqamli yoriqli lampa',
      description: 'SL-100 yoriqli lampasi yuqori mahsuldorlik va ishonchlilik uchun ishlab chiqilgan. Yuqori sifatli optika ajoyib tasvir sifati va piksellar sonini kafolatlaydi.',
      features: ['Foydalanishga oson va to\'liq to\'plam', 'Raqamli kameraga ulanishga tayyor', 'LED yoritish tizimi'],
      advantages: ['Sifat: Aniq va ravshan tasvirlar uchun LED yoritish.', 'Qulaylik: Barcha kabellar chiroyli qilib yashiringan.'],
      specs: {'Qurilma turi': 'Raqamli yoriqli lampa'}
    },
    ru: {
      title: 'Цифровая щелевая лампа SL-100',
      subtitle: 'Высокая производительность и надежность',
      description: 'Щелевая лампа SL-100 разработана для очень высокой производительности и надежности. Высококачественная оптика обеспечивает превосходное качество и разрешение изображения. Цифровая щелевая лампа удовлетворяет потребность в новых технологиях, объединяя подсветку глаза и электронику управления цифровой камерой, и оснащена инновационной системой светодиодной подсветки.',
      features: ['Простая в использовании и полная', 'Готовность к работе с цифровой камерой', 'Система светодиодной подсветки'],
      advantages: ['Удобство: Желтый фильтр и рассеиватель легко вставляются.', 'Эффективность: Срок службы LED более 50 000 часов.'],
      specs: {'Тип устройства': 'Цифровая щелевая лампа'}
    },
    en: {
      title: 'Цифровая щелевая лампа SL-100',
      subtitle: 'High performance and reliability',
      description: 'The SL-100 slit lamp is designed for very high performance and reliability. High-quality optics ensure excellent image quality and resolution. The digital slit lamp meets the need for new technologies by combining eye illumination and digital camera control electronics, and is equipped with an innovative LED illumination system.',
      features: ['Easy to use and complete', 'Ready for use with a digital camera', 'LED illumination system'],
      advantages: ['Convenience: Yellow filter and diffuser are easily inserted.', 'Efficiency: LED lifespan of over 50,000 hours.'],
      specs: {'Device Type': 'Digital Slit Lamp'}
    }
  },
  'kj5x': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70583-18921264.webp'
    ],
    uz: {
      title: 'Stol usti yoriqli lampa KJ5X',
      subtitle: 'Yuqori sifatli stereomikroskop',
      description: 'Stereomikroskop tipidagi parallel yoriqli lampa qulay dizaynga ega. Yuqori sifatli optik materiallar tufayli aniq va barqaror optik xususiyatlarni taqdim etadi.',
      features: [
        'Stereomikroskop tipidagi parallel yoriqli lampa',
        '40X gacha 5 bosqichli barabanli kattalashtirish',
        'Joystikli harakatlanuvchi baza',
        'Raqamlashtirish imkoniyati (kamera va PZS orqali)'
      ],
      advantages: [
        'Qulaylik: Moslashuvchan sozlash uchun ikki tomonda boshqaruv tutqichlari.',
        'Sifat: Eng so\'nggi optik materiallardan tayyorlangan linzalar.'
      ],
      specs: {'Qurilma turi': 'Stol usti yoriqli lampa'}
    },
    ru: {
      title: 'Настольная щелевая лампа KJ5X',
      subtitle: 'Качественный стереомикроскоп',
      description: 'Параллельная щелевая лампа типа стереомикроскопа, более удобная в использовании. Высококачественные оптические материалы обеспечивают превосходные стабильные оптические характеристики.',
      features: [
        'Параллельная щелевая лампа типа стереомикроскопа',
        '5 ступеней увеличения барабана, до 40X',
        'Простота в эксплуатации с помощью джойстика',
        'Возможность оцифровки системы захвата изображения'
      ],
      advantages: [
        'Гибкая настройка: ручки регулировки слева и справа.',
        'Модернизация: легко подключается цифровая камера и ПЗС-матрица.'
      ],
      specs: {'Тип устройства': 'Настольная щелевая лампа'}
    },
    en: {
      title: 'Table Slit Lamp KJ5X',
      subtitle: 'High-quality stereomicroscope',
      description: 'Parallel stereomicroscope-type slit lamp that is highly comfortable to use. High-quality optical materials ensure excellent and stable optical performance.',
      features: [
        'Parallel stereomicroscope-type slit lamp',
        '5 steps of drum magnification, up to 40X',
        'Easy operation with joystick base',
        'Digitization capability for image capture'
      ],
      advantages: [
        'Flexible setup: adjustment knobs on both left and right.',
        'Upgradable: easily connects to a digital camera and CCD.'
      ],
      specs: {'Device Type': 'Table Slit Lamp'}
    }
  },
  'yslxd-2er': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/4588903-20573388.webp'
    ],
    uz: {
      title: 'Stol usti yoriqli lampa YSLXD-2ER',
      subtitle: 'Yuqori sifatli tibbiy yoriqli lampa',
      description: 'Yuqori sifatli tibbiy yoriqli lampa bo\'lib, Galileo parallel tipidagi mikroskop bilan jihozlangan va yuqori aniqlikdagi diagnostika imkoniyatini beradi.',
      features: [
        'Galileo parallel tipidagi mikroskop',
        '5 ta kattalashtirish darajasi: 6x, 10x, 16x, 25x, 40x',
        'Turli xil filtrlar: yashil, kobalt ko\'k, issiqlikni yutuvchi',
        'Keng qamrovli sozlash imkoniyatlari'
      ],
      advantages: [
        'Aniqlik: Yuqori sifatli vizualizatsiya va aniq optika.',
        'Qulaylik: Bemor va shifokor uchun qulay, ergonomik dizayn.'
      ],
      specs: {
        'Okulyar': '12.5x',
        'Yoriq kengligi / uzunligi': '0-14 mm / 1-14 mm',
        'Chiroq turi': '12V 50W Galogen chiroq',
        'Og\'irligi': '25 kg (brutto)'
      }
    },
    ru: {
      title: 'Настольная щелевая лампа YSLXD-2ER',
      subtitle: 'Высококачественная медицинская щелевая лампа',
      description: 'Высококачественная медицинская щелевая лампа параллельного типа Галилео для точной и удобной диагностики.',
      features: [
        'Микроскоп параллельного типа Галилео',
        '5 увеличений: 6x, 10x, 16x, 25x, 40x',
        'Различные фильтры: теплопоглощающий, без красного (зеленый), кобальт синий',
        'Широкий диапазон регулировок'
      ],
      advantages: [
        'Точность: Идеальное качество визуализации.',
        'Удобство: Эргономичный дизайн для врача и пациента.'
      ],
      specs: {
        'Окуляр': '12.5x',
        'Ширина / длина щели': '0-14 мм / 1-14 мм',
        'Лампа': '12V 50W галогенная лампа',
        'Вес': '25 кг (брутто)'
      }
    },
    en: {
      title: 'Table Slit Lamp YSLXD-2ER',
      subtitle: 'High-quality medical slit lamp',
      description: 'High-quality Galileo parallel-type medical slit lamp for accurate and convenient diagnostics.',
      features: [
        'Galileo parallel-type microscope',
        '5 magnifications: 6x, 10x, 16x, 25x, 40x',
        'Various filters: heat-absorbing, red-free (green), cobalt blue',
        'Wide range of adjustments'
      ],
      advantages: [
        'Accuracy: Flawless visualization quality.',
        'Convenience: Ergonomic design for both doctor and patient.'
      ],
      specs: {
        'Eyepiece': '12.5x',
        'Slit width / length': '0-14 mm / 1-14 mm',
        'Lamp': '12V 50W Halogen lamp',
        'Weight': '25 kg (gross)'
      }
    }
  },
  'yslxd-3er': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/4588903-20573397.webp'
    ],
    uz: {
      title: 'Raqamli yoriqli lampa YSLXD-3ER',
      subtitle: 'Nikon D5200 optikali raqamli yoriqli lampa',
      description: 'Yuqori aniqlikdagi diagnostika va tasvirni tahlil qilish uchun professional Nikon D5200 raqamli kamerasi bilan jihozlangan yoriqli lampa.',
      features: [
        'Professional Nikon D5200 optikasi (24.1 megapiksel)',
        'Maxsus g\'ilofda saqlash tizimi',
        'Tasvirni tahlil qilish va qayta ishlash funksiyasi',
        'Orqa fon yoritish tizimi',
        'Yuqori aniqlikdagi videolarni yozib olish imkoniyati'
      ],
      advantages: [
        'Sifat: 24.1 megapikselli yuqori aniqlikdagi tasvirlar.',
        'Samaradorlik: Video yozish va tasvirni chuqur tahlil qilish imkoniyati.'
      ],
      specs: {
        'Okulyar': '12.5x',
        'Yoriq kengligi / uzunligi': '0-14 mm / 1-14 mm',
        'Chiroq turi': '12V 50W Galogen chiroq',
        'Og\'irligi': '25 kg (brutto)'
      }
    },
    ru: {
      title: 'Цифровая щелевая лампа YSLXD-3ER',
      subtitle: 'Цифровая щелевая лампа с профессиональной оптикой',
      description: 'Щелевая лампа, оснащенная профессиональной цифровой камерой Nikon D5200 для высокоточной диагностики и анализа изображений.',
      features: [
        'Профессиональная оптика Nikon D5200 (24,1 мегапикселя)',
        'Специальная система хранения в кейсе',
        'Профессиональная функция анализа и обработки изображений',
        'Система фоновой подсветки',
        'Функция записи видео высокой четкости'
      ],
      advantages: [
        'Качество: Четкие изображения высокого разрешения благодаря камере Nikon D5200.',
        'Эффективность: Возможность записи видео и глубокого анализа изображений.'
      ],
      specs: {
        'Окуляр': '12.5x',
        'Ширина / длина щели': '0-14 мм / 1-14 mm',
        'Лампа': '12V 50W галогенная лампа',
        'Вес': '25 кг (брутто)'
      }
    },
    en: {
      title: 'Digital Slit Lamp YSLXD-3ER',
      subtitle: 'Digital slit lamp with professional optics',
      description: 'A slit lamp equipped with a professional Nikon D5200 digital camera for high-precision diagnostics and image analysis.',
      features: [
        'Professional Nikon D5200 optics (24.1 megapixels)',
        'Special case storage system',
        'Professional image analysis and processing function',
        'Background illumination system',
        'High-definition video recording capability'
      ],
      advantages: [
        'Quality: Clear, high-resolution images thanks to the Nikon D5200 camera.',
        'Efficiency: Video recording capability and in-depth image analysis.'
      ],
      specs: {
        'Eyepiece': '12.5x',
        'Slit width / length': '0-14 mm / 1-14 mm',
        'Lamp': '12V 50W Halogen lamp',
        'Weight': '25 kg (gross)'
      }
    }
  },
  'opd-scan-3': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911601.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911602.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911603.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911604.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911606.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911607.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911615.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549442.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549444.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510747.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510748.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510750.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243142.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243143.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243144.webp',
      'https://video.medicalexpo.com/video_me/videos/video-11490.mp4'
    ],
    uz: {
      title: 'Shox parda topografi OPD-Scan® III',
      subtitle: 'Barcha refraksion mutaxassislar uchun "Beshinchisi birda" haqiqiy ish stansiyasi',
      description: 'OPD-Scan lll - bu To\'lqin fronti aberrometri, Topograf, Avtomatik refraktometr, Avtomatik keratometr, Pupillometr va pupillografni o\'zida mujassam etgan "Beshinchisi birda" (5 in 1) haqiqiy refraksion ish stansiyasidir.<br><br><video src="https://video.medicalexpo.com/video_me/videos/video-11490.mp4" controls width="100%" style="border-radius: 8px; margin-top: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);"></video>',
      features: [
        'Optimal klinik qarorlar qabul qilish uchun umumiy xulosa',
        'Har bir klinik holatga moslashgan turli xil maxsus xulosalar',
        'Kengroq o\'lchash hududi (5 mm diametr, 2520 ta ma\'lumot nuqtasi)',
        'Yuqori aniqlikdagi topografiya, ko\'k rangli plasido halqalari',
        'Retroillyuminatsiya yordamida kataraktani ko\'rish'
      ],
      advantages: [
        'Ko\'p funksiyali: "Beshinchisi birda" - birdaniga 5 ta uskunaning o\'rnini bosadi.',
        'Aniqlik: Optik patologiyaning manbasini aniqlash uchun umumiy, shox parda va ichki qismlarga ajratish imkoniyati.'
      ],
      specs: {
        'Qurilma turi': 'Shox parda topografi',
        'O\'lchash funksiyalari': '5 in 1 (Aberrometr, Topograf, Refraktometr, Keratometr, Pupillometr)',
        'O\'lchash hududi': '5 mm',
        'Ma\'lumot nuqtalari soni': '2 520 nuqta'
      }
    },
    ru: {
      title: 'Роговичный топограф OPD-Scan® III',
      subtitle: 'Настоящая рабочая станция "пять в одном" для всех практикующих специалистов по рефракции',
      description: 'OPD-Scan lll - это настоящая рефракционная рабочая станция "пять в одном", сочетающая в себе Аберрометр волнового фронта, Топограф, Автоматический рефрактометр, Автоматический кератометр, Пупиллометр и пупиллограф.<br><br><video src="https://video.medicalexpo.com/video_me/videos/video-11490.mp4" controls width="100%" style="border-radius: 8px; margin-top: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);"></video>',
      features: [
        'Обзорная сводка для принятия оптимальных клинических решений',
        'Несколько сводок, специализированных для каждого клинического случая',
        'Более широкая область измерения (диаметр 5 мм, 2 520 точек данных)',
        'Высокое разрешение топографии, голубые кольца пласидо',
        'Изображение катаракты с ретроиллюминацией'
      ],
      advantages: [
        'Полноценность: "Пять в одном" - заменяет сразу 5 устройств.',
        'Точность: Разделение на общий, роговичный и внутренний компоненты позволяет определить источник оптической патологии.'
      ],
      specs: {
        'Тип устройства': 'Роговичный топограф',
        'Функции': '5 в 1 (Аберрометр, Топограф, Рефрактометр, Кератометр, Пупиллометр)',
        'Область измерения': '5 mm',
        'Количество точек данных': '2 520 точек'
      }
    },
    en: {
      title: 'Corneal Topographer OPD-Scan® III',
      subtitle: 'A true "five-in-one" refractive workstation for all practitioners',
      description: 'The OPD-Scan lll is a true "five-in-one" refractive workstation that combines a Wavefront Aberrometer, Topographer, Auto Refractometer, Auto Keratometer, Pupillometer, and Pupillograph.<br><br><video src="https://video.medicalexpo.com/video_me/videos/video-11490.mp4" controls width="100%" style="border-radius: 8px; margin-top: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);"></video>',
      features: [
        'Comprehensive summary for making optimal clinical decisions',
        'Multiple summaries tailored to each clinical case',
        'Broader measurement area (5 mm diameter, 2,520 data points)',
        'High-resolution topography with blue Placido rings',
        'Cataract imaging with retroillumination'
      ],
      advantages: [
        'Versatility: "Five-in-one" system replaces 5 individual devices.',
        'Accuracy: Separation into general, corneal, and internal components allows for pinpointing the source of optical pathology.'
      ],
      specs: {
        'Device Type': 'Corneal Topographer',
        'Functions': '5 in 1 (Aberrometer, Topographer, Refractometer, Keratometer, Pupillometer)',
        'Measurement Area': '5 mm',
        'Data Points': '2,520 points'
      }
    }
  },
  'cem-530': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-9603581.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-7161233.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8685548.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-9603585.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911631.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911632.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911633.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911635.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911636.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911646.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911650.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911652.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911654.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549462.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-19549463.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510765.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510770.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510769.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243147.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243148.webp',
      'https://video.medicalexpo.com/video_me/videos/video-24083.mp4'
    ],
    uz: {
      title: 'Ko\'zguli mikroskop CEM-530',
      subtitle: 'Ko\'p zonali spekulyar mikroskopiya',
      description: 'Foydalanish uchun juda qulay va 2 soniyada tezkor tahlil imkoniyatiga ega bo\'lgan ko\'p zonali spekulyar mikroskopiya qurilmasi.<br><br><video src="https://video.medicalexpo.com/video_me/videos/video-24083.mp4" controls width="100%" style="border-radius: 8px; margin-top: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);"></video>',
      features: [
        'Paratsentral tasvirlar olish uchun NIDEK ning original funksiyasi',
        'Markaziy, paratsentral va periferik tasvirlarni uyg\'unlashtirish imkoniyati',
        'Avtomatik 3D-kuzatish (avtotreking) va avtomatik suratga olish',
        'Kengaytirilgan qo\'lda tahlil funksiyalari (markaziy nuqta, burchak nuqtasi, naqsh tanlash)',
        'Bitta tasvirning o\'zida avtomatik va qo\'lda tahlilni birgalikda qo\'llash'
      ],
      advantages: [
        'Tezlik: Tahlilning bor-yo\'g\'i 2 soniyada bajarilishi bemorlar oqimini samarali boshqarishni ta\'minlaydi.',
        'Qulaylik: Avtomatlashtirilgan jarayonlar shifokor va bemor uchun yuqori darajadagi qulaylik yaratadi.'
      ],
      specs: {
        'Qurilma turi': 'Spekulyar mikroskop (Ko\'zguli mikroskop)',
        'Tahlil vaqti': '2 soniya',
        'Kuzatuv funksiyasi': '3D avtotreking',
        'Tahlil turlari': 'Avtomatik va qo\'lda (birgalikda ishlaydi)'
      }
    },
    ru: {
      title: 'Микроскоп с зеркалом CEM-530',
      subtitle: 'Многозональная спекулярная микроскопия',
      description: 'Многозональная спекулярная микроскопия с повышенным удобством использования и быстрым анализом.<br><br><video src="https://video.medicalexpo.com/video_me/videos/video-24083.mp4" controls width="100%" style="border-radius: 8px; margin-top: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);"></video>',
      features: [
        'Оригинальная функция NIDEK для получения парацентральных изображений',
        'Сочетание центральных, парацентральных и периферических изображений',
        'Автоматическое 3D-слежение и автоматическая съемка',
        'Расширенные функции ручного анализа (точка центра, угловая точка, выбор узора)',
        'Комбинация автоматического и ручного анализа на одном изображении'
      ],
      advantages: [
        'Скорость: Анализ данных в течение 2 секунд обеспечивает эффективный поток пациентов.',
        'Удобство: Автоматические функции обеспечивают комфорт как для пациента, так и для врача.'
      ],
      specs: {
        'Тип устройства': 'Спекулярный микроскоп (Зеркальный микроскоп)',
        'Время анализа': '2 секунды',
        'Функции слежения': '3D-автотрекинг',
        'Типы анализа': 'Автоматический и ручной (комбинированные)'
      }
    },
    en: {
      title: 'Specular Microscope CEM-530',
      subtitle: 'Multi-zone specular microscopy',
      description: 'Multi-zone specular microscopy with enhanced usability and rapid analysis capabilities.<br><br><video src="https://video.medicalexpo.com/video_me/videos/video-24083.mp4" controls width="100%" style="border-radius: 8px; margin-top: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);"></video>',
      features: [
        'Original NIDEK function for capturing paracentral images',
        'Combination of central, paracentral, and peripheral images',
        'Automatic 3D tracking and auto-shooting',
        'Advanced manual analysis functions (center point, corner point, pattern selection)',
        'Combination of automated and manual analysis on a single image'
      ],
      advantages: [
        'Speed: Data analysis in just 2 seconds ensures efficient patient flow.',
        'Convenience: Automatic features provide comfort for both the patient and the practitioner.'
      ],
      specs: {
        'Device Type': 'Specular Microscope',
        'Analysis Time': '2 seconds',
        'Tracking': '3D auto-tracking',
        'Analysis Types': 'Automatic and manual (combined)'
      }
    }
  },
  'us-4000': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911740.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911742.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911743.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-18568161.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-18568159.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911746.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-20510811.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243159.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243166.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243168.webp'
    ],
    uz: {
      title: 'Stol ustiga qo\'yiladigan platformali ultratovush skaneri US-4000',
      subtitle: 'B-skaner / biometr / paximetr',
      description: 'Oddiy mexanizmga ega bo\'lgan ixcham qurilma. Ma\'lumotlarni qulay saqlash uchun USB va LAN interfeyslari bilan jihozlangan.',
      features: [
        'B-skaner: yuqori sifatli tasvirlar olish uchun 60° burchak ostida 400 qatorli skanerlash',
        'Biometriya: yangi algoritmlar IOL quvvatini hisoblashni odatdagidan 2 baravar tezlashtiradi',
        'Paximetriya: shox parda qalinligini ±5 mkm xatolik bilan aniq o\'lchash',
        'Ichki printer: o\'rnatilgan termoprinter yordamida B-skan natijalarini tezkor chop etish'
      ],
      advantages: [
        'Ixchamlik: Qurilma o\'zining ixcham o\'lchamlari tufayli stolda kam joy egallaydi.',
        'Qulaylik: Tasvirlarni osongina chop etish yoki USB/LAN orqali saqlash mumkin.'
      ],
      specs: {
        'Qurilma turi': 'Ultratovush tizimi',
        'Funksiyalari': 'B-skaner, Biometriya, Paximetriya',
        'B-skaner burchagi': '60° (400 qator)',
        'Paximetriya xatoligi': '±5 mkm'
      }
    },
    ru: {
      title: 'Ультразвуковой сканер на платформе, настольный US-4000',
      subtitle: 'В-скан / биометр / пахиметр',
      description: 'Компактный прибор с простым механизмом. Имеет интерфейсы USB и LAN для удобного хранения данных.',
      features: [
        'B-скан: сканирование 400 линий под углом 60° для получения высококачественных изображений',
        'Биометрия: новые алгоритмы обеспечивают расчет силы ИОЛ в 2 раза быстрее',
        'Пахиметрия: точное измерение толщины роговицы с погрешностью ±5 мкм',
        'Внутренний принтер: быстрая печать B-скана с помощью встроенного термопринтера'
      ],
      advantages: [
        'Компактность: Устройство легко размещается на столе благодаря своему размеру.',
        'Удобство: Изображения можно легко распечатать или сохранить через USB/LAN.'
      ],
      specs: {
        'Тип устройства': 'Ультразвуковая система',
        'Функции': 'В-скан, Биометрия, Пахиметрия',
        'Угол сканирования B-скана': '60° (400 линий)',
        'Погрешность пахиметрии': '±5 мкм'
      }
    },
    en: {
      title: 'On-platform Tabletop Ultrasound Scanner US-4000',
      subtitle: 'B-scan / Biometer / Pachymeter',
      description: 'A compact device with a simple mechanism. It features USB and LAN interfaces for easy data storage.',
      features: [
        'B-scan: 400-line scanning at a 60° angle to provide high-quality images',
        'Biometry: New algorithms allow IOL power calculation to be performed twice as fast',
        'Pachymetry: Accurate measurement of corneal thickness with an error margin of ±5 μm',
        'Internal printer: Easily print B-scan images with the built-in thermal printer'
      ],
      advantages: [
        'Compactness: The device is designed to be space-saving and easily fits on a tabletop.',
        'Convenience: Results can be instantly printed or stored via USB/LAN.'
      ],
      specs: {
        'Device Type': 'Ultrasound System',
        'Functions': 'B-scan, Biometry, Pachymetry',
        'B-scan Angle': '60° (400 lines)',
        'Pachymetry Accuracy': '±5 μm'
      }
    }
  },
  'us-500': {
    images: [
      'https://img.medicalexpo.ru/images_me/photo-g/70665-15911804.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-3083501.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8683647.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8683648.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8683649.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-8685515.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243171.webp',
      'https://img.medicalexpo.ru/images_me/photo-g/70665-21243172.webp'
    ],
    uz: {
      title: 'Stol ustiga qo\'yiladigan platformali ultratovush skaneri US-500',
      subtitle: 'Sensorli ekranli biometriya va paximetriya',
      description: 'Oddiy mexanizmga va 8 dyuymli sensorli ekranga ega ixcham qurilma. Ma\'lumotlarni qulay saqlash uchun USB va LAN interfeyslari mavjud.',
      features: [
        'Biometriya: yangi algoritmlar IOL quvvatini hisoblashni odatdagidan 2 baravar tezlashtiradi',
        'Paximetriya: shox parda qalinligini ±5 mkm xatolik bilan aniq o\'lchash',
        'Sensor ekran: Intuitiv boshqaruv uchun 8 dyuymli displey',
        'Zond chastotasi: Yuqori aniqlikdagi o\'lchovlar uchun 10 MHz',
        'Ergonomika: Oftalmologik exografiya uchun optimallashtirilgan stol platformasi'
      ],
      advantages: [
        'Ixchamlik: Qurilmani stolda joylashtirish juda oson, uning vazni bor-yo\'g\'i 8,5 kg.',
        'Qulaylik: Oq-qora tasvir rejimi va USB/LAN orqali ma\'lumotlarni oson almashish imkoniyati.'
      ],
      specs: {
        'Qurilma turi': 'Ultratovush skaneri (biometr/paximetr)',
        'Ekran': '8 dyuymli sensor',
        'Zond chastotasi': '10 MHz',
        'O\'lchamlari (B x Ch)': '330 mm x 285 mm',
        'Vazni': '8,5 kg'
      }
    },
    ru: {
      title: 'Ультразвуковой сканер на платформе, настольный US-500',
      subtitle: 'Биометрия и пахиметрия с сенсорным экраном',
      description: 'Компактное устройство с простым механизмом, 8-дюймовым сенсорным экраном. Имеет интерфейсы USB и LAN для удобного хранения данных.',
      features: [
        'Биометрия: новые алгоритмы обеспечивают расчет силы ИОЛ в 2 раза быстрее',
        'Пахиметрия: точное измерение толщины роговицы с погрешностью ±5 мкм',
        'Сенсорный экран: 8 дюймов для интуитивного управления',
        'Частота зонда: 10 MHz для высокоточных измерений',
        'Эргономика: настольная платформа, оптимизированная для офтальмологической эхографии'
      ],
      advantages: [
        'Компактность: Устройство легко размещается на столе, его вес всего 8,5 кг.',
        'Удобство: Черно-белый режим изображения и легкий обмен данными через USB/LAN.'
      ],
      specs: {
        'Тип устройства': 'Ультразвуковой сканер (биометр/пахиметр)',
        'Экран': '8-дюймовый сенсорный',
        'Частота зонда': '10 MHz',
        'Размеры (ВxГ)': '330 мм x 285 мм',
        'Вес': '8,5 кг'
      }
    },
    en: {
      title: 'On-platform Tabletop Ultrasound Scanner US-500',
      subtitle: 'Touchscreen Biometry and Pachymetry',
      description: 'A compact device with a simple mechanism and an 8-inch touchscreen. It features USB and LAN interfaces for easy data storage.',
      features: [
        'Biometry: New algorithms allow IOL power calculation to be performed twice as fast',
        'Pachymetry: Accurate measurement of corneal thickness with an error margin of ±5 μm',
        'Touchscreen: 8 inches for intuitive and easy control',
        'Probe frequency: 10 MHz for highly accurate measurements',
        'Ergonomics: Tabletop platform optimized for ophthalmic echography'
      ],
      advantages: [
        'Compactness: The device is designed to save space, weighing only 8.5 kg.',
        'Convenience: Black-and-white imaging mode and easy data sharing via USB/LAN.'
      ],
      specs: {
        'Device Type': 'Ultrasound Scanner (Biometer/Pachymeter)',
        'Screen': '8-inch touchscreen',
        'Probe Frequency': '10 MHz',
        'Dimensions (H x D)': '330 mm x 285 mm',
        'Weight': '8.5 kg'
      }
    }
  }
};

// ==================== PRODUCT PAGE RENDERING ====================
function renderProductPage(id) {
  let rootData = productData[id];
  if (!rootData) {
    // Provide fallback data instead of redirecting
    rootData = {
      images: ['https://via.placeholder.com/600x400.png?text=Image+Coming+Soon'],
      uz: { title: 'Tez kunda...', subtitle: "Ma'lumot tez orada qo'shiladi", description: 'Bu sahifa ustida ishlayapmiz. Iltimos, keyinroq qayta tekshiring.', features: ["Ma'lumot kutilmoqda"], advantages: ["Ma'lumot kutilmoqda"], specs: { 'Holati': 'Tez kunda' } },
      ru: { title: 'Скоро...', subtitle: 'Информация будет добавлена в ближайшее время', description: 'Мы работаем над заполнением этой страницы. Пожалуйста, зайдите позже.', features: ['Информация ожидается'], advantages: ['Информация ожидается'], specs: { 'Статус': 'Ожидается' } },
      en: { title: 'Coming Soon...', subtitle: 'Information will be added soon', description: 'We are working on filling this page. Please check back later.', features: ['Information pending'], advantages: ['Information pending'], specs: { 'Status': 'Coming soon' } }
    };
  }
  
  const data = rootData[currentLang] || rootData['ru'];

  document.title = `${data.title} — ProfTexnoTrade`;
  document.getElementById('pageTitle').textContent = data.title;
  document.getElementById('pageSubtitle').textContent = data.subtitle;
  document.getElementById('pageDesc').innerHTML = data.description;
  document.getElementById('pageCat').textContent = data.title; // For breadcrumb
  
  // Images
  const mainImg = document.getElementById('pageMainImg');
  const mainVideo = document.getElementById('pageMainVideo');
  const thumbList = document.getElementById('pageThumbnails');
  
  const allMedia = [...(rootData.images || [])];
  if (rootData.video) allMedia.push(rootData.video);
  window.currentProductMedia = allMedia;
  window.currentMediaIndex = 0;
  
  const firstMedia = (allMedia.length > 0) ? allMedia[0] : 'https://via.placeholder.com/600x400.png?text=No+Image';
  if (firstMedia.endsWith('.mp4')) {
    mainImg.style.display = 'none';
    mainVideo.src = firstMedia;
    mainVideo.style.display = 'block';
  } else {
    if (mainVideo) mainVideo.style.display = 'none';
    mainImg.src = firstMedia;
    mainImg.style.display = 'block';
  }
  
  thumbList.innerHTML = '';
  allMedia.forEach((imgUrl, idx) => {
    const div = document.createElement('div');
    div.className = `thumbnail-item ${idx === 0 ? 'active' : ''}`;
    div.onclick = () => changePageImage(imgUrl, div);
    
    if (imgUrl.endsWith('.mp4')) {
      div.innerHTML = `<video src="${imgUrl}#t=0.1" preload="metadata" style="width:100%; height:100%; object-fit:cover;"></video><div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); color:#fff; text-shadow:0 0 5px rgba(0,0,0,0.5);"><i class="fas fa-play"></i></div>`;
      div.style.position = 'relative';
    } else {
      div.innerHTML = `<img src="${imgUrl}" alt="Thumbnail">`;
    }
    thumbList.appendChild(div);
  });

  // Features
  const featuresList = document.getElementById('pageFeaturesList');
  featuresList.innerHTML = (data.features || []).map(f => `<li>${f}</li>`).join('');

  // Advantages
  const advList = document.getElementById('pageAdvantagesList');
  advList.innerHTML = (data.advantages || []).map(a => `<li>${a}</li>`).join('');

  // Specs
  const specsTable = document.getElementById('pageSpecsTable');
  specsTable.innerHTML = Object.entries(data.specs || {}).map(([key, val]) => 
    `<tr><th>${key}</th><td>${val}</td></tr>`
  ).join('');

  // Sidebar Video
  const sidebarVideoContainer = document.getElementById('sidebarVideoContainer');
  const sidebarVideo = document.getElementById('sidebarVideo');
  if (sidebarVideoContainer && sidebarVideo) {
    if (rootData.video) {
      sidebarVideo.src = rootData.video;
      sidebarVideoContainer.style.display = 'block';
    } else {
      sidebarVideoContainer.style.display = 'none';
      sidebarVideo.src = '';
    }
  }
}

function changePageImage(src, element) {
  const mainImg = document.getElementById('pageMainImg');
  const mainVideo = document.getElementById('pageMainVideo');
  
  if (src.endsWith('.mp4')) {
    mainImg.style.display = 'none';
    mainVideo.src = src;
    mainVideo.style.display = 'block';
    mainVideo.play();
  } else {
    if (mainVideo) {
      mainVideo.style.display = 'none';
      mainVideo.pause();
    }
    mainImg.style.opacity = 0;
    mainImg.style.display = 'block';
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = 1;
    }, 150);
  }
  
  document.querySelectorAll('.thumbnail-item').forEach(el => el.classList.remove('active'));
  element.classList.add('active');
  window.currentMediaIndex = window.currentProductMedia.indexOf(src);
}

// ==================== LIGHTBOX LOGIC ====================
function initLightbox() {
  const mainImg = document.getElementById('pageMainImg');
  const mainVideo = document.getElementById('pageMainVideo');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxVideo = document.getElementById('lightboxVideo');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');

  if (!lightboxModal) return;

  function openLightbox() {
    if (!window.currentProductMedia || window.currentProductMedia.length === 0) return;
    updateLightboxContent();
    lightboxModal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  function closeLightbox() {
    lightboxModal.classList.remove('show');
    document.body.style.overflow = '';
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.src = '';
    }
  }

  function updateLightboxContent() {
    const media = window.currentProductMedia;
    if (!media || media.length === 0) return;
    
    // Hide arrows if only 1 item
    if (media.length <= 1) {
      lightboxModal.setAttribute('data-single', 'true');
    } else {
      lightboxModal.removeAttribute('data-single');
    }

    const src = media[window.currentMediaIndex];
    if (src && src.endsWith('.mp4')) {
      lightboxImg.style.display = 'none';
      lightboxVideo.src = src;
      lightboxVideo.style.display = 'block';
      lightboxVideo.play();
    } else {
      if (lightboxVideo) {
        lightboxVideo.style.display = 'none';
        lightboxVideo.pause();
      }
      lightboxImg.src = src;
      lightboxImg.style.display = 'block';
    }
  }

  function nextMedia(e) {
    if (e) e.stopPropagation();
    if (!window.currentProductMedia) return;
    window.currentMediaIndex = (window.currentMediaIndex + 1) % window.currentProductMedia.length;
    updateLightboxContent();
  }

  function prevMedia(e) {
    if (e) e.stopPropagation();
    if (!window.currentProductMedia) return;
    window.currentMediaIndex = (window.currentMediaIndex - 1 + window.currentProductMedia.length) % window.currentProductMedia.length;
    updateLightboxContent();
  }

  // Attach events
  if (mainImg) {
    mainImg.style.cursor = 'zoom-in';
    mainImg.addEventListener('click', openLightbox);
  }
  if (mainVideo) {
    // Optional: allow video click to open lightbox too, but video has controls.
  }
  
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextMedia);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevMedia);

  // Close on outside click
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal || e.target.classList.contains('lightbox-content-wrapper')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('show')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextMedia();
    if (e.key === 'ArrowLeft') prevMedia();
  });
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  // Preloader Logic
  setTimeout(() => {
    document.body.classList.remove('loading');
  }, 2500);

  // Init Hero Particles
  initHeroParticles();

  // Language Selection Logic
  const savedLang = localStorage.getItem('siteLang');
  if (savedLang) {
    setLang(savedLang);
  } else {
    // Show overlay if no language is saved
    const overlay = document.getElementById('langOverlay');
    if (overlay) {
      overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Prevent scrolling while overlay is open
    }
    setLang('ru'); // fallback default
  }

  // Make selectOverlayLang global so buttons can call it
  window.selectOverlayLang = function(lang) {
    localStorage.setItem('siteLang', lang);
    setLang(lang);
    const overlay = document.getElementById('langOverlay');
    if (overlay) {
      overlay.style.opacity = '0';
      document.body.style.overflow = ''; // Restore scrolling
      setTimeout(() => overlay.classList.add('hidden'), 500);
    }
  };

  // Init Lightbox
  initLightbox();

  // Init all features
  window.addEventListener('scroll', handleScroll);
  initScrollReveal();
  initSmoothScroll();
  // initForm();
  animateCounters();

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }

  // Scroll top button
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', scrollToTop);
  }

  // Product filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterProducts(btn.dataset.filter);
    });
  });

  // Automatically add Video badge to products that have video
  document.querySelectorAll('.product-card').forEach(card => {
    const onClickAttr = card.getAttribute('onclick');
    if (onClickAttr) {
      const match = onClickAttr.match(/id=([^']+)/);
      if (match) {
        const id = match[1];
        const data = typeof productData !== 'undefined' ? productData[id] : null;
        if (data) {
          const hasVideo = data.video || (data.images && data.images.some(img => img.endsWith('.mp4')));
          if (hasVideo) {
            const imgContainer = card.querySelector('.product-image');
            if (imgContainer) {
              const videoBadge = document.createElement('span');
              videoBadge.className = 'product-badge video';
              const badgeText = (translations[currentLang] && translations[currentLang].prodVideoBadge) ? translations[currentLang].prodVideoBadge : 'Video';
              videoBadge.innerHTML = `<span data-i18n="prodVideoBadge">${badgeText}</span> <i class="fas fa-play"></i>`;
              imgContainer.appendChild(videoBadge);
            }
          }
        }
      }
    }
  });

  // Lang buttons (both desktop and mobile)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      localStorage.setItem('siteLang', lang);
      setLang(lang);
    });
  });

  // Mobile nav links close menu
  document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Run initial scroll check
  handleScroll();

  // ==================== DARK MODE TOGGLE ====================
  function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    // Update icons
    document.querySelectorAll('.theme-toggle i').forEach(icon => {
      icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    });
  }

  // Restore saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    document.querySelectorAll('.theme-toggle i').forEach(icon => {
      icon.className = 'fas fa-sun';
    });
  }

  // Attach theme toggle listeners
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

  // Render product page if applicable
  if (window.location.pathname.includes('product.html')) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id) {
      renderProductPage(id);
    } else {
      window.location.href = 'index.html';
    }
  }
// });

// --- Start: Dynamically manage product badges based on video availability and map categories ---
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
    
    // Auto-map product categories based on preceding dividers
    let currentCat = 'all';
    const gridElements = document.querySelectorAll('.products-grid > div');
    gridElements.forEach(el => {
      if (el.classList.contains('category-divider')) {
        if (el.innerText.includes('Рефракция') || el.dataset.i18n === 'categoryRefraction') currentCat = 'refraction';
        else if (el.innerText.includes('Диагностика') || el.dataset.i18n === 'categoryDiagnostic') currentCat = 'diagnostic';
        else if (el.id === 'surgical-iol') currentCat = 'surgery';
        else if (el.id === 'ophthalmic-lasers') currentCat = 'lasers';
        else if (el.id === 'lens-edger') currentCat = 'lens-edger';
        else if (el.id === 'industrial-edger') currentCat = 'industrial-edger';
        else if (el.id === 'peripheral') currentCat = 'peripheral';
      } else if (el.classList.contains('product-card')) {
        el.setAttribute('data-category', currentCat);
      }
    });
  }
  // --- End ---


  const searchInput = document.getElementById('productSearch');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      document.querySelectorAll('.product-card').forEach(card => {
        const onClickAttr = card.getAttribute('onclick');
        if (onClickAttr) {
          const match = onClickAttr.match(/id=([^']+)/);
          if (match) {
            const id = match[1];
            const data = window.productData ? window.productData[id] : null;
            let matches = false;
            if (data) {
              const uzTitle = (data.uz && data.uz.title) ? data.uz.title.toLowerCase() : '';
              const ruTitle = (data.ru && data.ru.title) ? data.ru.title.toLowerCase() : '';
              const enTitle = (data.en && data.en.title) ? data.en.title.toLowerCase() : '';
              if (uzTitle.includes(searchTerm) || ruTitle.includes(searchTerm) || enTitle.includes(searchTerm)) {
                matches = true;
              }
            } else {
              if (card.innerText.toLowerCase().includes(searchTerm)) {
                matches = true;
              }
            }
            card.style.display = matches ? 'block' : 'none';
          }
        }
      });
    });
  }

  // ==================== TELEGRAM BOT FORM HANDLER ====================
  // Token is obfuscated to prevent simple scraping bots from taking it
  const _botParts = ['8862030914', 'AAEn1he6ORrg4zviq-A6JK9T9N1XM0ZVnQI'];
  const TELEGRAM_BOT_TOKEN = _botParts.join(':');
  
  // ⚠️ Nechta odamga bormoqchi bo'lsa, ularning ID raqamlarini quyidagi ro'yxatga qo'shishingiz mumkin:
  const TELEGRAM_CHAT_IDS = [
    '1952277629', // 1-odam (Sizning ID)
    // 'IKKINCHI_ID', // 2-odam (vergul bilan ajratib yozilaveradi)
  ];

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Basic sanitization to prevent XSS (Cross-Site Scripting)
      function sanitize(str) {
        if (!str) return '';
        return str.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
      }

      const name = sanitize(contactForm.querySelector('input[name="name"]').value.trim());
      const phone = sanitize(contactForm.querySelector('input[name="phone"]').value.trim());
      const message = sanitize(contactForm.querySelector('textarea[name="message"]').value.trim());

      if (!name || !phone) return;

      // Vaqtni olish
      const now = new Date();
      const timeStr = now.toLocaleString('uz-UZ', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      });

      // Telegram xabar matni
      const text = `📋 *YANGI ARIZA — ProfTexnoTrade*\n\n` +
        `👤 *Ismi:* ${name}\n` +
        `📞 *Telefon:* ${phone}\n` +
        `💬 *Xabar:* ${message || 'Xabar yozilmagan'}\n` +
        `🕐 *Vaqt:* ${timeStr}\n` +
        `🌐 *Manba:* Sayt (proftexnotrade.uz)`;

      // Toast xabar matnlari
      const toastMessages = {
        ru: 'Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.',
        uz: 'Xabaringiz yuborildi! Tez orada siz bilan bog\'lanamiz.',
        en: 'Your message has been sent! We will contact you shortly.'
      };

      try {
        let successCount = 0;

        // Har bir ID ga alohida xabar yuborish
        for (const chatId of TELEGRAM_CHAT_IDS) {
          const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatId,
              text: text,
              parse_mode: 'Markdown'
            })
          });
          if (response.ok) successCount++;
        }

        if (successCount > 0) {
          // Muvaffaqiyat!
          showFormToast(toastMessages[currentLang] || toastMessages['ru'], 'success');
          contactForm.reset();
        } else {
          showFormToast('Xatolik yuz berdi. Qayta urinib ko\'ring.', 'error');
        }
      } catch (err) {
        showFormToast('Internet aloqasi bilan muammo. Qayta urinib ko\'ring.', 'error');
      }
    });
  }

  function showFormToast(message, type) {
    const toast = document.getElementById('formToast');
    const toastText = document.getElementById('formToastText');
    if (!toast || !toastText) return;

    toastText.textContent = message;

    if (type === 'success') {
      toast.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
    } else {
      toast.style.background = 'linear-gradient(135deg, #dc3545, #e74c3c)';
    }

    toast.style.display = 'block';
    toast.style.animation = 'toastSlideIn 0.5s ease';

    setTimeout(() => {
      toast.style.animation = 'toastSlideOut 0.5s ease forwards';
      setTimeout(() => {
        toast.style.display = 'none';
      }, 500);
    }, 4000);
  }
});

// Tracking logic moved to firebase-client.js
