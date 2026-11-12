// =========================================================================
// PHONE EMPIRE ULTIMATE V24 — БЛОК А (БАЗА ДАННЫХ, 50 УРОВНЕЙ, 24 АВТО И ЯДРО)
// =========================================================================

const CAREER_LEVELS = [
  { level: 1, title: "Новичок", minCap: 0, rewardCash: 0, rewardXp: 0 },
  { level: 2, title: "Ученик перекупщика", minCap: 2000, rewardCash: 5000, rewardXp: 50 },
  { level: 3, title: "Начинающий продавец", minCap: 5000, rewardCash: 10000, rewardXp: 80 },
  { level: 4, title: "Любитель техники", minCap: 7500, rewardCash: 15000, rewardXp: 120 },
  { level: 5, title: "Молодой перекупщик", minCap: 10000, rewardCash: 25000, rewardXp: 200 },
  { level: 6, title: "Торговец", minCap: 15000, rewardCash: 35000, rewardXp: 300 },
  { level: 7, title: "Опытный торговец", minCap: 25000, rewardCash: 50000, rewardXp: 450 },
  { level: 8, title: "Специалист по телефонам", minCap: 45000, rewardCash: 75000, rewardXp: 600 },
  { level: 9, title: "Мастер сделок", minCap: 70000, rewardCash: 100000, rewardXp: 800 },
  { level: 10, title: "Профессионал", minCap: 100000, rewardCash: 150000, rewardXp: 1100 },
  { level: 11, title: "Частный предприниматель", minCap: 140000, rewardCash: 200000, rewardXp: 1500 },
  { level: 12, title: "Владелец точки", minCap: 200000, rewardCash: 300000, rewardXp: 2000 },
  { level: 13, title: "Владелец магазина", minCap: 280000, rewardCash: 420000, rewardXp: 2600 },
  { level: 14, title: "Успешный бизнесмен", minCap: 380000, rewardCash: 550000, rewardXp: 3300 },
  { level: 15, title: "Директор магазина", minCap: 500000, rewardCash: 750000, rewardXp: 4200 },
  { level: 16, title: "Состоятельный бизнесмен", minCap: 700000, rewardCash: 1000000, rewardXp: 5500 },
  { level: 17, title: "Телефонный магнат", minCap: 1000000, rewardCash: 1500000, rewardXp: 7000 },
  { level: 18, title: "VIP-предприниматель", minCap: 1300000, rewardCash: 2000000, rewardXp: 9000 },
  { level: 19, title: "Крупный торговец", minCap: 1600000, rewardCash: 2500000, rewardXp: 11500 },
  { level: 20, title: "Бизнес-магнат", minCap: 2000000, rewardCash: 3500000, rewardXp: 15000 },
  { level: 21, title: "Владелец компании", minCap: 2800000, rewardCash: 4500000, rewardXp: 19000 },
  { level: 22, title: "Генеральный директор", minCap: 4000000, rewardCash: 6000000, rewardXp: 24000 },
  { level: 23, title: "Корпоративный лидер", minCap: 5500000, rewardCash: 8000000, rewardXp: 30000 },
  { level: 24, title: "Крупный инвестор", minCap: 7500000, rewardCash: 11000000, rewardXp: 38000 },
  { level: 25, title: "Корпоративный магнат", minCap: 10000000, rewardCash: 15000000, rewardXp: 48000 },
  { level: 26, title: "Национальный торговец", minCap: 14000000, rewardCash: 20000000, rewardXp: 60000 },
  { level: 27, title: "Рыночный лидер", minCap: 20000000, rewardCash: 30000000, rewardXp: 75000 },
  { level: 28, title: "Император электроники", minCap: 28000000, rewardCash: 42000000, rewardXp: 95000 },
  { level: 29, title: "Национальный магнат", minCap: 38000000, rewardCash: 58000000, rewardXp: 120000 },
  { level: 30, title: "Лидер рынка", minCap: 50000000, rewardCash: 75000000, rewardXp: 150000 },
  { level: 31, title: "Международный бизнесмен", minCap: 65000000, rewardCash: 100000000, rewardXp: 190000 },
  { level: 32, title: "Глобальный торговец", minCap: 85000000, rewardCash: 130000000, rewardXp: 240000 },
  { level: 33, title: "Мировой инвестор", minCap: 110000000, rewardCash: 170000000, rewardXp: 300000 },
  { level: 34, title: "Глобальный магнат", minCap: 145000000, rewardCash: 220000000, rewardXp: 380000 },
  { level: 35, title: "Международный лидер", minCap: 180000000, rewardCash: 280000000, rewardXp: 480000 },
  { level: 36, title: "Технологический предприниматель", minCap: 225000000, rewardCash: 350000000, rewardXp: 600000 },
  { level: 37, title: "Создатель бренда", minCap: 280000000, rewardCash: 440000000, rewardXp: 750000 },
  { level: 38, title: "Владелец производства", minCap: 350000000, rewardCash: 550000000, rewardXp: 950000 },
  { level: 39, title: "Технологический магнат", minCap: 430000000, rewardCash: 680000000, rewardXp: 1200000 },
  { level: 40, title: "Император технологий", minCap: 500000000, rewardCash: 800000000, rewardXp: 1500000 },
  { level: 41, title: "Легенда бизнеса", minCap: 700000000, rewardCash: 1100000000, rewardXp: 1900000 },
  { level: 42, title: "Миллиардер", minCap: 1000000000, rewardCash: 1500000000, rewardXp: 2400000 },
  { level: 43, title: "Король электроники", minCap: 1500000000, rewardCash: 2200000000, rewardXp: 3000000 },
  { level: 44, title: "Величайший предприниматель", minCap: 2200000000, rewardCash: 3200000000, rewardXp: 3800000 },
  { level: 45, title: "Легендарный магнат", minCap: 3200000000, rewardCash: 4500000000, rewardXp: 4800000 },
  { level: 46, title: "Мастер бизнеса", minCap: 5000000000, rewardCash: 7000000000, rewardXp: 6000000 },
  { level: 47, title: "Властелин технологий", minCap: 7500000000, rewardCash: 10000000000, rewardXp: 7500000 },
  { level: 48, title: "Титан индустрии", minCap: 11000000000, rewardCash: 15000000000, rewardXp: 9500000 },
  { level: 49, title: "Величайшая корпорация", minCap: 15000000000, rewardCash: 22000000000, rewardXp: 12000000 },
  { level: 50, title: "👑 АБСОЛЮТНАЯ ЛЕГЕНДА", minCap: 20000000000, rewardCash: 50000000000, rewardXp: 20000000 }
];

const PHONE_CATALOG = [
  { brand: "Nokia", model: "Nokia 3310", specs: "2G Legend", basePrice: 4500, minLvl: 1, isRetro: true },
  { brand: "Motorola", model: "RAZR V3", specs: "Flip Classic", basePrice: 8500, minLvl: 1, isRetro: true },
  { brand: "Nokia", model: "8800 Sirocco Gold", specs: "Slide Luxury", basePrice: 42000, minLvl: 1, isRetro: true },
  { brand: "Apple", model: "iPhone 2G", specs: "8GB Retro", basePrice: 35000, minLvl: 1, isRetro: true },
  { brand: "BlackBerry", model: "Porsche Design P9981", specs: "QWERTY VIP", basePrice: 68000, minLvl: 5, isRetro: true },
  { brand: "Xiaomi", model: "Redmi Note 13", specs: "8/128GB", basePrice: 22000, minLvl: 1 },
  { brand: "Samsung", model: "Galaxy A54", specs: "8/128GB", basePrice: 32000, minLvl: 1 },
  { brand: "Apple", model: "iPhone 11", specs: "64GB", basePrice: 38000, minLvl: 1 },
  { brand: "Apple", model: "iPhone 11 Pro Max", specs: "256GB", basePrice: 55000, minLvl: 2 },
  { brand: "Samsung", model: "Galaxy A55", specs: "8/256GB", basePrice: 44000, minLvl: 4 },
  { brand: "Xiaomi", model: "POCO F6 Pro", specs: "12/256GB", basePrice: 52000, minLvl: 5 },
  { brand: "Apple", model: "iPhone 12", specs: "128GB", basePrice: 52000, minLvl: 6 },
  { brand: "Apple", model: "iPhone 12 Pro Max", specs: "256GB", basePrice: 72000, minLvl: 8 },
  { brand: "Google Pixel", model: "Pixel 8", specs: "8/128GB", basePrice: 64000, minLvl: 9 },
  { brand: "Nothing", model: "Phone (2)", specs: "12/256GB", basePrice: 58000, minLvl: 10 },
  { brand: "Apple", model: "iPhone 13", specs: "128GB", basePrice: 66000, minLvl: 12 },
  { brand: "Apple", model: "iPhone 13 Pro Max", specs: "256GB", basePrice: 92000, minLvl: 14 },
  { brand: "Apple", model: "iPhone 14", specs: "128GB", basePrice: 78000, minLvl: 16 },
  { brand: "OnePlus", model: "OnePlus 12", specs: "16/512GB", basePrice: 86000, minLvl: 18 },
  { brand: "Samsung", model: "Galaxy S23 Ultra", specs: "12/256GB", basePrice: 105000, minLvl: 20 },
  { brand: "Asus", model: "ROG Phone 8 Pro", specs: "16/512GB", basePrice: 112000, minLvl: 22 },
  { brand: "Apple", model: "iPhone 14 Pro Max", specs: "256GB", basePrice: 118000, minLvl: 24 },
  { brand: "Apple", model: "iPhone 15", specs: "128GB", basePrice: 95000, minLvl: 25 },
  { brand: "Xiaomi", model: "Xiaomi 14 Ultra", specs: "16/512GB", basePrice: 124000, minLvl: 27 },
  { brand: "Google Pixel", model: "Pixel 9 Pro XL", specs: "16/256GB", basePrice: 132000, minLvl: 29 },
  { brand: "Huawei", model: "Mate 60 Pro+", specs: "16/1TB", basePrice: 136000, minLvl: 30 },
  { brand: "Samsung", model: "Galaxy S24 Ultra", specs: "12/512GB", basePrice: 145000, minLvl: 32 },
  { brand: "Apple", model: "iPhone 15 Pro Max", specs: "512GB", basePrice: 155000, minLvl: 34 },
  { brand: "OnePlus", model: "OnePlus 13", specs: "16/512GB", basePrice: 128000, minLvl: 35 },
  { brand: "Apple", model: "iPhone 16", specs: "256GB", basePrice: 125000, minLvl: 36 },
  { brand: "Xiaomi", model: "Xiaomi 15 Ultra", specs: "16/1TB", basePrice: 165000, minLvl: 38 },
  { brand: "Samsung", model: "Galaxy S25 Ultra", specs: "16/512GB", basePrice: 182000, minLvl: 40 },
  { brand: "Apple", model: "iPhone 16 Pro Max", specs: "1TB", basePrice: 192000, minLvl: 42 },
  { brand: "Samsung", model: "Galaxy Z Fold 6", specs: "12/1TB", basePrice: 198000, minLvl: 43 },
  { brand: "Apple", model: "iPhone 17 Pro Max", specs: "1TB", basePrice: 235000, minLvl: 45 },
  { brand: "Samsung", model: "Galaxy S26 Ultra", specs: "16/2TB", basePrice: 285000, minLvl: 47 },
  { brand: "Huawei", model: "Mate XT Tri-Fold", specs: "16/1TB", basePrice: 315000, minLvl: 48 },
  { brand: "Apple", model: "iPhone 18 Pro Max", specs: "2TB", basePrice: 350000, minLvl: 49 },
  { brand: "Vertu", model: "Vertu Meta Gold", specs: "24K Exclusive", basePrice: 500000, minLvl: 50, isRetro: true }
];

// 24 АВТОМОБИЛЯ И ДЖЕТА С УНИКАЛЬНЫМИ ИГРОВЫМИ ОСОБЕННОСТЯМИ
const LUXURY_CARS = [
  { id: "priora", name: "🚗 Lada Priora Black", cost: 350000, repBonus: 5, haggleBoost: 0.02, marketDisc: 0.01, passiveIncome: 0, storageBonus: 0, desc: "Первая тачка перекупщика: +2% к шансу торга и -1% на рынке." },
  { id: "solaris", name: "🚕 Hyundai Solaris", cost: 850000, repBonus: 10, haggleBoost: 0.03, marketDisc: 0, passiveIncome: 3000, storageBonus: 0, desc: "Сдается в аренду под курьеров: приносит +3 000 ₽/день." },
  { id: "octavia", name: "🚙 Skoda Octavia Stage 2", cost: 1400000, repBonus: 18, haggleBoost: 0.04, marketDisc: 0, passiveIncome: 0, storageBonus: 5, desc: "Огромный багажник лифтбека: дает +5 бесплатных слотов на складе!" },
  { id: "camry", name: "🚗 Toyota Camry 70 (3.5)", cost: 2400000, repBonus: 30, haggleBoost: 0.06, marketDisc: 0.02, passiveIncome: 0, storageBonus: 0, desc: "Классика деловых встреч: +6% к торгу и скидка 2% на оптовом рынке." },
  { id: "lexus_es", name: "🚘 Lexus ES 350", cost: 3800000, repBonus: 45, haggleBoost: 0.08, marketDisc: 0, passiveIncome: 8000, storageBonus: 0, desc: "Японский бизнес-класс: +45⭐ репутации и +8 000 ₽/день от VIP-трансферов." },
  { id: "e63", name: "🏎️ Mercedes-AMG E63s W213", cost: 5800000, repBonus: 70, haggleBoost: 0.10, marketDisc: 0.03, passiveIncome: 0, storageBonus: 0, desc: "Злой седан: +10% к успеху торга в чате и скидка 3% на рынке." },
  { id: "m5", name: "🏎️ BMW M5 CS F90", cost: 8500000, repBonus: 95, haggleBoost: 0.14, marketDisc: 0, passiveIncome: 15000, storageBonus: 0, desc: "Король улиц: +14% к торгу и +15 000 ₽/день с автоблога." },
  { id: "rs6", name: "🚙 Audi RS6 Avant Performance", cost: 11000000, repBonus: 120, haggleBoost: 0.12, marketDisc: 0.03, passiveIncome: 0, storageBonus: 10, desc: "Супер-универсал: дает +10 слотов склада и +12% к торгу!" },
  { id: "lc300", name: "🚙 Toyota Land Cruiser 300 GR", cost: 13500000, repBonus: 140, haggleBoost: 0.15, marketDisc: 0.04, passiveIncome: 0, storageBonus: 8, desc: "Неубиваемый рамник: +8 слотов склада и -4% цены на оптовом рынке." },
  { id: "panamera", name: "🏎️ Porsche Panamera Turbo S", cost: 15500000, repBonus: 165, haggleBoost: 0.18, marketDisc: 0, passiveIncome: 25000, storageBonus: 0, desc: "Люкс для встреч с инвесторами: +18% к торгу и +25 000 ₽/день." },
  { id: "gelik", name: "🚙 Mercedes-AMG G63 (Гелик)", cost: 19000000, repBonus: 220, haggleBoost: 0.22, marketDisc: 0.05, passiveIncome: 0, storageBonus: 5, desc: "Защищает от саботажа конкурентов, дает -5% на рынке и +22% к торгу!" },
  { id: "s_maybach", name: "🎩 Mercedes-Maybach S680 V12", cost: 24000000, repBonus: 280, haggleBoost: 0.25, marketDisc: 0, passiveIncome: 45000, storageBonus: 0, desc: "Кабинет на колесах: +45 000 ₽/день пассивного дохода и +25% к торгу." },
  { id: "lx600", name: "🚙 Lexus LX 600 VIP", cost: 21000000, repBonus: 240, haggleBoost: 0.20, marketDisc: 0.05, passiveIncome: 30000, storageBonus: 5, desc: "Восточный шик: скидка 5% на рынке и +30 000 ₽/день." },
  { id: "porsche_911", name: "🏎️ Porsche 911 Turbo S (992)", cost: 26000000, repBonus: 310, haggleBoost: 0.28, marketDisc: 0, passiveIncome: 50000, storageBonus: 0, desc: "Икона спорта: +310⭐ репутации и +50 000 ₽/день." },
  { id: "urus", name: "🐂 Lamborghini Urus Performante", cost: 31000000, repBonus: 360, haggleBoost: 0.30, marketDisc: 0.06, passiveIncome: 65000, storageBonus: 0, desc: "Дерзкий супер-кроссовер: +30% к торгу и +65 000 ₽/день." },
  { id: "bentley", name: "🎩 Bentley Continental GT Speed", cost: 35000000, repBonus: 400, haggleBoost: 0.32, marketDisc: 0, passiveIncome: 80000, storageBonus: 0, desc: "Британский аристократ: +400⭐ репутации и +80 000 ₽/день." },
  { id: "ferrari_sf90", name: "🐎 Ferrari SF90 Stradale", cost: 42000000, repBonus: 480, haggleBoost: 0.35, marketDisc: 0, passiveIncome: 110000, storageBonus: 0, desc: "Гибридный гиперкар (1000 л.с.): +110 000 ₽/день и +35% к торгу." },
  { id: "rolls", name: "✨ Rolls-Royce Cullinan Black Badge", cost: 49000000, repBonus: 550, haggleBoost: 0.40, marketDisc: 0.08, passiveIncome: 140000, storageBonus: 5, desc: "Ультимативный статус: клиенты соглашаются на торг +25% почти всегда!" },
  { id: "phantom", name: "👑 Rolls-Royce Phantom VIII", cost: 58000000, repBonus: 650, haggleBoost: 0.45, marketDisc: 0.08, passiveIncome: 180000, storageBonus: 0, desc: "Флагман королей: +180 000 ₽/день и иммунитет к проверкам." },
  { id: "revuelto", name: "🔥 Lamborghini Revuelto V12", cost: 68000000, repBonus: 780, haggleBoost: 0.48, marketDisc: 0.10, passiveIncome: 230000, storageBonus: 0, desc: "Космический V12: скидка 10% на оптовом рынке и +230 000 ₽/день." },
  { id: "chiron", name: "🚀 Bugatti Chiron Super Sport", cost: 195000000, repBonus: 1800, haggleBoost: 0.60, marketDisc: 0.12, passiveIncome: 650000, storageBonus: 0, desc: "490 км/ч: +1800⭐ репутации, -12% на закупках и +650 000 ₽/день!" },
  { id: "koenigsegg", name: "⚡ Koenigsegg Jesko Absolut", cost: 260000000, repBonus: 2500, haggleBoost: 0.70, marketDisc: 0.15, passiveIncome: 900000, storageBonus: 0, desc: "Шведский мегакар: максимальная скидка 15% на рынке и +900 000 ₽/день!" },
  { id: "heli", name: "🚁 Личный Вертолет Airbus H160", cost: 390000000, repBonus: 4000, haggleBoost: 0.80, marketDisc: 0.15, passiveIncome: 1400000, storageBonus: 15, desc: "Мгновенная логистика над пробками: +15 слотов склада и +1.4 млн ₽/день!" },
  { id: "jet", name: "🛩️ Бизнес-Джет Gulfstream G700", cost: 750000000, repBonus: 8000, haggleBoost: 1.00, marketDisc: 0.20, passiveIncome: 3000000, storageBonus: 25, desc: "Бесплатные перелеты в Дубай/Шэньчжэнь, 100% защита контрабанды и +3 млн ₽/день!" }
];

const TUTORIAL_STEPS = [
  { icon: "👑", title: "1/5. Карьера из 50 уровней!", desc: "Пройдите путь от Новичка до Абсолютной легенды! Выбирайте уровень сложности и стройте свою империю." },
  { icon: "✈️", title: "2/5. Бизнес-туры, Багаж и Контейнеры", desc: "Летайте в Шэньчжэнь за дешевыми деталями (-50%) и в Дубай за золотыми флагманами! Вскрывайте забытый багаж и таможенные контейнеры." },
  { icon: "📦", title: "3/5. Фулл-сет, Root и Доноры", desc: "Докупите оригинальную коробку с чеком (+20% к цене), шейте кастомный Root, разбирайте хлам на запчасти и сдавайте АКБ в переработку." },
  { icon: "🛡️", title: "4/5. Гарантия Бутика и 24 Авто", desc: "Продавайте смартфоны с гарантией (+15% к чеку), собирайте ретро-коллекцию в Зал Славы и покупайте 24 машины с уникальными бонусами!" },
  { icon: "🛠️", title: "5/5. Календарь 2020–2030 и PRO Admin", desc: "Следите за датами, играйте в Казино до 1 000 000 ₽ и управляйте миром через PRO Admin Control Center (код: flipper_1)." }
];

const PARTS_DB = {
  screen:  { name: "Дисплей (Экран)", cost: 14000, label: "Экран" },
  battery: { name: "Аккумулятор (АКБ)", cost: 6000, label: "АКБ" },
  body:    { name: "Корпус и крышка", cost: 9000, label: "Корпус" },
  camera:  { name: "Модуль камеры", cost: 11000, label: "Камера" },
  speaker: { name: "Динамик и шлейф", cost: 5000, label: "Динамик" }
};

const SERVICE_TOOLS = [
  { id: "solder", name: "🔥 Паяльная станция Pro", cost: 120000, desc: "Скидка -35% на покупку всех запчастей навсегда!" },
  { id: "laser", name: "⚡ Лазерный сепаратор", cost: 220000, desc: "Шанс 40% сохранить экран при ремонте." },
  { id: "bath", name: "🌊 Ультразвуковая ванна", cost: 350000, desc: "Очистка залитых плат утопленников (+10% к цене)." },
  { id: "micro", name: "🔬 Цифровой микроскоп", cost: 600000, desc: "+20% к стоимости отремонтированных телефонов." }
];

const SHOP_UPGRADES = [
  { id: "kiosk", name: "🏪 Островок в ТЦ", cost: 250000, dailyFee: 8000, repBonus: 15, salesBoost: 0.15, reqLvl: 2, desc: "Первая точка продаж." },
  { id: "service", name: "🛠️ Авторизованный сервис", cost: 600000, dailyFee: 18000, repBonus: 30, salesBoost: 0.25, reqLvl: 6, desc: "Бесплатный осмотр на рынке." },
  { id: "store_app", name: "💎 Флагманский Бутик", cost: 1800000, dailyFee: 45000, repBonus: 60, salesBoost: 0.45, reqLvl: 12, desc: "Клиенты в чате платят +15%." },
  { id: "warehouse", name: "🏭 Логистический хаб", cost: 3500000, dailyFee: 80000, repBonus: 100, salesBoost: 0.65, reqLvl: 18, desc: "+20 слотов на складе." },
  { id: "empire", name: "🏙️ Небоскреб Корпорации", cost: 8000000, dailyFee: 180000, repBonus: 250, salesBoost: 1.00, reqLvl: 25, desc: "Полная монополия на рынке." }
];

const ADVANCED_BUSINESS = [
  { id: "blog", name: "📹 Техно-Блог и Студия", cost: 650000, profit: 55000, tax: 5000, desc: "Обзоры флагманов (+55к ₽/день)." },
  { id: "online", name: "🌐 Онлайн-маркетплейс 24/7", cost: 1500000, profit: 120000, tax: 15000, desc: "Авто-продажи по стране." },
  { id: "mall", name: "🏬 Торговый центр «Mega Mall»", cost: 5000000, profit: 390000, tax: 45000, desc: "Крупный ТЦ в центре." },
  { id: "office", name: "🏢 Сдача IT-офисов в Сити", cost: 8500000, profit: 680000, tax: 70000, desc: "Аренда недвижимости для IT." },
  { id: "chain", name: "🏪 Федеральная сеть салонов", cost: 14000000, profit: 1100000, tax: 110000, desc: "50 фирменных магазинов." },
  { id: "franchise", name: "🌍 Международная Франшиза", cost: 30000000, profit: 2600000, tax: 300000, desc: "Ежедневные роялти со всего мира." }
];

const DISTRICTS_MAP = [
  { id: "d1", name: "🏘️ Спальный район", tax: 4000, income: 12000, adCost: 15000, bonus: "Стабильный базовый спрос.", cost: 0 },
  { id: "d2", name: "🎓 Студенческий городок", tax: 12000, income: 48000, adCost: 30000, bonus: "Спрос на Б/У айфоны и Xiaomi.", cost: 450000 },
  { id: "d3", name: "💼 Деловой Сити-Центр", tax: 35000, income: 150000, adCost: 60000, bonus: "+20% к шансу продажи в бутике.", cost: 1500000 },
  { id: "d4", name: "✈️ Свободная таможенная зона", tax: 60000, income: 340000, adCost: 100000, bonus: "Скидка 10% на закупку телефонов.", cost: 3800000 },
  { id: "d5", name: "👑 Рублевка / Элитный проспект", tax: 110000, income: 720000, adCost: 180000, bonus: "VIP-клиенты скупают Gold 24K модели.", cost: 8500000 }
];

const HR_STAFF = [
  { id: "tech", name: "🔧 Старший Мастер-техник", salary: 18000, cost: 250000, desc: "Каждое утро бесплатно чинит 1 сломанный телефон." },
  { id: "seller", name: "🗣️ Топ-Менеджер продаж", salary: 25000, cost: 450000, desc: "Повышает цену предложений в чате на +15%." },
  { id: "marketer", name: "📢 Директор по маркетингу", salary: 40000, cost: 750000, desc: "Шанс ночной продажи в бутике 95%." },
  { id: "lawyer", name: "⚖️ Корпоративный адвокат", salary: 55000, cost: 1200000, desc: "Защита от штрафов и -25% к налогам." },
  { id: "hacker", name: "💻 Штатный Хакер", salary: 45000, cost: 900000, desc: "Снимает iCloud Lock у 1 телефона из DarkNet каждое утро." }
];

const STOCKS_LIST = [
  { id: "APPL", name: "🍏 Apple Inc.", basePrice: 220000 },
  { id: "SAMS", name: "🌌 Samsung Elec.", basePrice: 140000 },
  { id: "XIAO", name: "⚡ Xiaomi Corp.", basePrice: 85000 },
  { id: "NVDA", name: "🟢 NVIDIA AI Chips", basePrice: 420000 },
  { id: "BTC", name: "₿ Bitcoin (BTC)", basePrice: 6850000 }
];

let state = {
  difficulty: "normal",
  hasSelectedDifficulty: false,
  balance: 50000,
  bankBalance: 0,
  loanDebt: 0,
  loanPaymentDaily: 0,
  xp: 0,
  currentLevel: 1,
  reputation: 15,
  day: 1,
  gameHour: 8,
  gameMinute: 0,
  timeSpeedMultiplier: 1,
  isAdminUnlocked: false,
  hasCompletedTutorial: false,
  newsText: "Оптовый рынок открыт! Проверяйте аппараты от крышки до платы или летайте в бизнес-туры.",
  isBlackFriday: false,
  inflationRate: 1.0,
  policeAttention: 0,
  hasRoof: false,
  activeTour: null, // 'shenzhen' | 'dubai' | null
  retroMuseum: [], // Полка коллекционера (Зал Славы)
  serviceTools: [],
  advancedBusiness: [],
  luxuryGarage: [],
  activeBillboards: [],
  boutiqueRating: 4.7,
  boutiqueReviews: [
    { user: "Азамат", stars: 5, text: "Взял iPhone в идеале, магазин топ!" },
    { user: "Елена", stars: 5, text: "Быстро обслужили, дали гарантию на АКБ." }
  ],
  factoryConfig: { cpu: "Snapdragon 8 Gen 4", body: "Титан", camera: "200 МП Zoom", battery: "6000 мАч Графен" },
  usedBatteriesScrap: 0,
  rareTitaniumParts: 0,
  parts: { screen: 2, battery: 2, body: 1, camera: 1, speaker: 2 },
  market: [],
  darknetMarket: [],
  storage: [],
  buyerOffers: [],
  tradeInOffer: null,
  pawnItem: null,
  flashOrder: null,
  upgrades: [],
  districts: ["d1"],
  staff: [],
  hasUnlocker: false,
  stocksOwned: { APPL: 0, SAMS: 0, XIAO: 0, NVDA: 0, BTC: 0 },
  stockPrices: { APPL: 220000, SAMS: 140000, XIAO: 85000, NVDA: 420000, BTC: 6850000 },
  stockChanges: { APPL: 2.4, SAMS: -1.1, XIAO: 4.0, NVDA: 6.5, BTC: 4.8 },
  quests: [],
  brandName: "",
  hasFactory: false,
  storageBonusSlots: 0,
  userPin: "",
  isSettingNewPin: true,
  wallpaper: "gold",
  stats: { bought: 0, repaired: 0, sold: 0, totalProfit: 0, casinoProfit: 0, mysteryOpened: 0, taxesPaid: 0, containerOpened: 0, luggageOpened: 0 },
  logs: []
};

let currentPin = "";
let currentTutorialStep = 0;
let clockTimerId = null;
let flashOrderTimer = null;

let aviatorInterval = null;
let aviatorMult = 1.0;
let aviatorCrashPoint = 1.0;
let aviatorBet = 0;
let aviatorActive = false;

let minesActive = false;
let minesBet = 0;
let minesMult = 1.0;
let minesBombs = [];
let minesRevealed = [];

// === ЗВУКОВОЙ ДВИЖОК, ЧАСЫ, ДАТА КАЛЕНДАРЯ И ЗАРЯД БАТАРЕИ ===
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
  if (navigator.vibrate) navigator.vibrate(20);
  try {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    if (type === 'click') {
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.start(); osc.stop(audioCtx.currentTime + 0.05);
    } else if (type === 'success') {
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
      osc.start(); osc.stop(audioCtx.currentTime + 0.15);
    } else if (type === 'cash') {
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.setValueAtTime(1200, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.start(); osc.stop(audioCtx.currentTime + 0.25);
    } else if (type === 'boom') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      osc.start(); osc.stop(audioCtx.currentTime + 0.3);
    }
  } catch(e) {}
}

function showScreen(screenId) {
  document.querySelectorAll(".app-screen").forEach(el => el.classList.remove("active-screen"));
  const target = document.getElementById(screenId);
  if (target) target.classList.add("active-screen");
}

function setWallpaper(theme) {
  state.wallpaper = theme || "gold";
  document.body.className = "theme-" + state.wallpaper;
  toast(`🎨 Тема и иконки: ${state.wallpaper.toUpperCase()}`);
  save();
}

function getGameCalendarDateString() {
  const base = new Date(2020, 0, 1);
  base.setDate(base.getDate() + (state.day - 1));
  const maxDate = new Date(2030, 0, 1);
  const finalDate = base > maxDate ? maxDate : base;
  const dd = String(finalDate.getDate()).padStart(2, '0');
  const mm = String(finalDate.getMonth() + 1).padStart(2, '0');
  const yyyy = finalDate.getFullYear();
  return `${dd}.${mm}.${yyyy} г.`;
}

function updateClock() {
  if (typeof state.gameHour !== "number" || isNaN(state.gameHour)) state.gameHour = 8;
  if (typeof state.gameMinute !== "number" || isNaN(state.gameMinute)) state.gameMinute = 0;

  const addMins = Number(state.timeSpeedMultiplier) || 1;
  state.gameMinute += addMins;

  while (state.gameMinute >= 60) {
    state.gameMinute -= 60;
    state.gameHour++;
    fluctuateStocks();
    if (state.gameHour >= 24) state.gameHour = 0;
  }

  const hStr = String(Math.floor(state.gameHour)).padStart(2, '0');
  const mStr = String(Math.floor(state.gameMinute)).padStart(2, '0');
  const timeStr = `${hStr}:${mStr}`;
  const calDate = getGameCalendarDateString();

  ["phone-clock", "lock-time", "sleep-app-clock"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = timeStr;
  });

  const calendarEl = document.getElementById("calendar-date-display");
  if (calendarEl) calendarEl.textContent = `${timeStr} | 📅 ${calDate} (День ${state.day}) ${state.isBlackFriday ? '🔥 ЧЕРНАЯ ПЯТНИЦА' : ''}`;
  const lockDateEl = document.getElementById("lock-date");
  if (lockDateEl) lockDateEl.textContent = `${calDate} • День ${state.day}`;

  const sleepStatusEl = document.getElementById("sleep-status-msg");
  if (sleepStatusEl) {
    if (state.gameHour >= 21 || state.gameHour < 8) {
      sleepStatusEl.innerHTML = `<span class="ok">🌙 Время после 21:00! Можно ложиться спать и перейти к следующему дню.</span>`;
    } else {
      sleepStatusEl.innerHTML = `<span class="bad">☀️ Сейчас день (${timeStr}). Лечь спать можно только после 21:00!</span>`;
    }
  }

  const screenBg = document.getElementById("phone-screen-bg");
  if (screenBg) {
    if (state.gameHour >= 21 || state.gameHour < 6) screenBg.classList.add("night-mode");
    else screenBg.classList.remove("night-mode");
  }
}

async function initBatteryStatus() {
  const batteryEl = document.getElementById("ui-battery");
  if (!batteryEl) return;
  batteryEl.textContent = "98";
  if ('getBattery' in navigator) {
    try {
      const battery = await navigator.getBattery();
      const updateBat = () => {
        const lvl = Math.round(battery.level * 100);
        batteryEl.textContent = (lvl > 0 && lvl <= 100) ? String(lvl) : "98";
      };
      updateBat();
      battery.addEventListener('levelchange', updateBat);
    } catch (e) {
      batteryEl.textContent = "98";
    }
  }
}

// =========================================================================
// PHONE EMPIRE ULTIMATE V24 — БЛОК Б (ВСЯ ИГРОВАЯ МЕХАНИКА, 5 НОВЫХ ФИЧ И PRO ADMIN)
// =========================================================================

// === РАСЧЕТ КАПИТАЛА И ПОВЫШЕНИЕ ПО 50 УРОВНЯМ КАРЬЕРЫ ===
function getNetWorth() {
  const storageVal = state.storage.reduce((sum, p) => sum + evaluatePhone(p), 0);
  const stocksVal = STOCKS_LIST.reduce((sum, s) => sum + ((state.stocksOwned[s.id] || 0) * (state.stockPrices[s.id] || s.basePrice)), 0);
  const carsVal = LUXURY_CARS.filter(c => state.luxuryGarage.includes(c.id)).reduce((sum, c) => sum + c.cost, 0);
  const bizVal = ADVANCED_BUSINESS.filter(b => state.advancedBusiness.includes(b.id)).reduce((sum, b) => sum + b.cost, 0);
  return Math.max(0, state.balance + state.bankBalance + storageVal + stocksVal + carsVal + bizVal - state.loanDebt);
}

function getCurrentLevelObj() {
  const netWorth = getNetWorth();
  let best = CAREER_LEVELS[0];
  for (let i = 0; i < CAREER_LEVELS.length; i++) {
    if (netWorth >= CAREER_LEVELS[i].minCap || i + 1 <= (state.currentLevel || 1)) {
      best = CAREER_LEVELS[i];
    }
  }
  if (best.level > (state.currentLevel || 1)) {
    const oldLvl = state.currentLevel || 1;
    state.currentLevel = best.level;
    if (best.rewardCash > 0) {
      state.balance += best.rewardCash;
      state.xp += best.rewardXp;
      playSound('cash');
      toast(`👑 РАНГ #${best.level}: ${best.title}! Премия: +${best.rewardCash.toLocaleString()} ₽`);
      logMsg(`Повышение до уровня #${best.level} «${best.title}» (+${best.rewardCash.toLocaleString()} ₽).`);
    }
  }
  return CAREER_LEVELS[(state.currentLevel || 1) - 1] || CAREER_LEVELS[0];
}

function getCarBonuses() {
  const ownedCars = LUXURY_CARS.filter(c => state.luxuryGarage.includes(c.id));
  return {
    haggleBoost: ownedCars.reduce((s, c) => s + (c.haggleBoost || 0), 0),
    marketDisc: Math.min(0.30, ownedCars.reduce((s, c) => s + (c.marketDisc || 0), 0)),
    passiveIncome: ownedCars.reduce((s, c) => s + (c.passiveIncome || 0), 0),
    storageBonus: ownedCars.reduce((s, c) => s + (c.storageBonus || 0), 0)
  };
}

function getMaxStorage() {
  const lvlSlots = 10 + Math.floor((getCurrentLevelObj().level || 1) * 1.5);
  const carSlots = getCarBonuses().storageBonus;
  const whSlots = state.upgrades.includes("warehouse") ? 20 : 0;
  return Math.min(200, lvlSlots + carSlots + whSlots + (state.storageBonusSlots || 0));
}

function upgradeStorageCapacity() {
  playSound('click');
  const cost = 50000;
  if (getMaxStorage() >= 200) return toast("❌ Достигнут максимум склада (200 слотов)!");
  if (state.balance < cost) return toast(`❌ Нужно ${cost.toLocaleString()} ₽!`);
  state.balance -= cost;
  state.storageBonusSlots = (state.storageBonusSlots || 0) + 5;
  playSound('success');
  toast("📦 Склад расширен на +5 слотов!");
  save(); renderAll();
}

// === ВЫБОР СЛОЖНОСТИ ПРИ ВХОДЕ В ИГРУ ===
function openDifficultySelector() {
  let modal = document.getElementById("difficulty-modal-overlay");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "difficulty-modal-overlay";
    modal.className = "mystery-modal-overlay";
    document.body.appendChild(modal);
  }
  modal.style.display = "flex";
  modal.innerHTML = `
    <div class="mystery-modal-card" style="max-width:400px;">
      <h2 style="color:#fbbf24; margin-top:0;">🎮 Выберите сложность</h2>
      <p class="muted" style="font-size:0.82rem; margin-bottom:12px;">От режима зависят стартовый капитал, налоги и срочные VIP-заказы:</p>
      <div style="display:flex; flex-direction:column; gap:10px; text-align:left;">
        <div class="card" style="border-color:#10b981; cursor:pointer;" onclick="selectDifficulty('easy')">
          <b>🌱 ЛЕГКИЙ (Казуальный старт)</b>
          <p class="muted" style="font-size:0.76rem; margin:4px 0 0;">Капитал: <b>150 000 ₽</b> | Налоги -30% | Частые срочные VIP-заказы.</p>
        </div>
        <div class="card" style="border-color:#3b82f6; cursor:pointer;" onclick="selectDifficulty('normal')">
          <b>⚖️ НОРМАЛЬНЫЙ (Классика)</b>
          <p class="muted" style="font-size:0.76rem; margin:4px 0 0;">Капитал: <b>50 000 ₽</b> | Стандартные налоги | Редкие срочные заказы (25%).</p>
        </div>
        <div class="card" style="border-color:#ef4444; cursor:pointer;" onclick="selectDifficulty('hard')">
          <b>💀 ХАРДКОР (Режим Магната)</b>
          <p class="muted" style="font-size:0.76rem; margin:4px 0 0;">Капитал: <b>15 000 ₽</b> | Налоги и детали +40% | <b>Срочные заказы ОТКЛЮЧЕНЫ!</b></p>
        </div>
      </div>
    </div>
  `;
}

function selectDifficulty(mode) {
  playSound('cash');
  state.difficulty = mode;
  state.hasSelectedDifficulty = true;
  if (mode === "easy") state.balance = 150000;
  else if (mode === "normal") state.balance = 50000;
  else if (mode === "hard") {
    state.balance = 15000;
    state.flashOrder = null;
  }
  const modal = document.getElementById("difficulty-modal-overlay");
  if (modal) modal.remove();
  toast(`🎯 Режим установлен: ${mode.toUpperCase()}!`);
  save(); renderAll();
}

// === ФИНАНСЫ, СОН, БИЗНЕС-ТУРЫ И ГАРАНТИЙНЫЕ ВОЗВРАТЫ ===
function fluctuateStocks() {
  if (!state.stockPrices) state.stockPrices = {};
  if (!state.stockChanges) state.stockChanges = {};
  STOCKS_LIST.forEach(s => {
    const oldPr = state.stockPrices[s.id] || s.basePrice;
    const pct = +(Math.random() * 14 - 6.5).toFixed(1);
    const newPr = Math.max(5000, Math.round(oldPr * (1 + pct / 100)));
    state.stockPrices[s.id] = newPr;
    state.stockChanges[s.id] = pct;
  });
  const elStocks = document.getElementById("tab-stocks");
  if (elStocks && elStocks.classList.contains("active")) renderAll();
}

function calculateDailyFinances() {
  const districtTaxes = state.districts.reduce((sum, id) => {
    const d = DISTRICTS_MAP.find(x => x.id === id);
    return sum + (d ? d.tax : 0);
  }, 0);
  const districtIncome = state.districts.reduce((sum, id) => {
    const d = DISTRICTS_MAP.find(x => x.id === id);
    return sum + (d ? d.income : 0);
  }, 0);
  const upgradesRent = SHOP_UPGRADES.filter(u => state.upgrades.includes(u.id)).reduce((sum, u) => sum + u.dailyFee, 0);
  const advBizTax = ADVANCED_BUSINESS.filter(b => state.advancedBusiness.includes(b.id)).reduce((sum, b) => sum + b.tax, 0);
  const advBizProfit = ADVANCED_BUSINESS.filter(b => state.advancedBusiness.includes(b.id)).reduce((sum, b) => sum + b.profit, 0);
  const staffSalaries = HR_STAFF.filter(st => state.staff.includes(st.id)).reduce((sum, st) => sum + st.salary, 0);
  const carsPassive = getCarBonuses().passiveIncome;
  const museumIncome = (state.retroMuseum || []).length * 12000;

  let diffMult = state.difficulty === "hard" ? 1.4 : (state.difficulty === "easy" ? 0.7 : 1.0);
  let rawTaxAndRent = Math.round((districtTaxes + upgradesRent + advBizTax) * diffMult);
  if (state.staff.includes("lawyer") || state.luxuryGarage.includes("phantom")) {
    rawTaxAndRent = Math.round(rawTaxAndRent * 0.75);
  }

  return {
    taxesAndRent: rawTaxAndRent,
    salaries: staffSalaries,
    totalExpenses: rawTaxAndRent + staffSalaries,
    passiveIncome: districtIncome + advBizProfit + carsPassive + museumIncome + (state.hasFactory ? 150000 : 0)
  };
}

function triggerSleepCycle() {
  if (state.gameHour < 21 && state.gameHour >= 8) {
    return toast("❌ Еще рано спать! Ложиться можно только после 21:00 вечера.");
  }

  playSound('success');
  state.day++;
  state.gameHour = 8;
  state.gameMinute = 0;
  state.activeBillboards = [];
  state.activeTour = null;

  if ((state.retroMuseum || []).length > 0) {
    state.reputation += state.retroMuseum.length * 10;
  }

  state.inflationRate = +(state.inflationRate * (0.99 + Math.random() * 0.03)).toFixed(3);

  if (state.bankBalance > 0) {
    const rate = state.difficulty === "easy" ? 0.05 : 0.03;
    const interest = Math.round(state.bankBalance * rate);
    state.bankBalance += interest;
    logMsg(`🏦 Банк начислил проценты: +${interest.toLocaleString()} ₽`);
  }

  const fin = calculateDailyFinances();
  if (fin.passiveIncome > 0) {
    state.balance += fin.passiveIncome;
    logMsg(`🏢 Доход от бизнеса, автопарка и музея: +${fin.passiveIncome.toLocaleString()} ₽`);
  }

  state.balance -= fin.totalExpenses;
  state.stats.taxesPaid = (state.stats.taxesPaid || 0) + fin.taxesAndRent;
  logMsg(`🧾 Налоги/аренда: -${fin.taxesAndRent.toLocaleString()} ₽ | Зарплаты HR: -${fin.salaries.toLocaleString()} ₽`);

  if (state.loanDebt > 0) {
    const paymentDue = state.loanPaymentDaily || Math.round(state.loanDebt / 4);
    if (state.balance >= paymentDue) {
      state.balance -= paymentDue;
      state.loanDebt = Math.max(0, state.loanDebt - paymentDue);
    } else {
      playSound('boom');
      if (state.storage.length > 0) {
        const confiscated = state.storage.shift();
        toast(`🚨 ЗАЛОГ ИЗЪЯТ! За долги банк забрал со склада ${confiscated.model}!`);
      } else {
        state.balance = 0;
        state.reputation = Math.max(0, state.reputation - 20);
      }
      state.loanDebt = Math.max(0, state.loanDebt - paymentDue);
    }
  }

  if (state.staff.includes("tech")) {
    const broken = state.storage.find(p => !p.condition.screen || p.condition.battery < 85 || !p.condition.body);
    if (broken) {
      broken.condition = { screen: true, battery: 100, body: true, camera: true, speaker: true, waterDamage: false };
      state.stats.repaired++;
      updateQuestProgress("repair", 1);
      logMsg(`🔧 Техник бесплатно отремонтировал ${broken.model}!`);
    }
  }
  if (state.staff.includes("hacker")) {
    const locked = state.storage.find(p => p.isLocked);
    if (locked) {
      locked.isLocked = false;
      logMsg(`💻 Хакер снял iCloud Lock на ${locked.model}!`);
    }
  }

  let soldCount = 0;
  let saleChance = 0.72 + ((state.boutiqueRating - 4.0) * 0.12);
  if (state.staff.includes("marketer")) saleChance = 0.95;
  if (state.districts.includes("d3")) saleChance = Math.min(0.99, saleChance + 0.15);
  if (state.isBlackFriday) saleChance = 1.0;

  const rest = [];
  state.storage.forEach(p => {
    if (!p.onSale) { rest.push(p); return; }
    if (Math.random() < saleChance) {
      const isGood = p.condition.screen && p.condition.battery >= 82 && !p.condition.waterDamage;
      if (p.hasWarranty && !isGood) {
        const fine = Math.round(p.salePrice * 0.5);
        state.balance = Math.max(0, state.balance - fine);
        state.boutiqueRating = Math.max(1.0, +(state.boutiqueRating - 0.35).toFixed(2));
        logMsg(`🚨 Возврат по гарантии за брак ${p.model}! Убыток: -${fine.toLocaleString()} ₽`);
      } else {
        const profit = p.salePrice - (p.boughtPrice || 0);
        state.balance += p.salePrice;
        state.stats.sold++;
        state.stats.totalProfit += profit;
        soldCount++;
        updateQuestProgress("sell", 1);
        addXp(35);
        state.boutiqueRating = Math.min(5.0, +(state.boutiqueRating + 0.05).toFixed(2));
      }
    } else {
      rest.push(p);
    }
  });
  state.storage = rest;

  if (soldCount > 0) playSound('cash');
  triggerRandomEvent();
  generateMarket();
  generateDarknet();
  generateBuyerOffers();
  generateTradeInAndPawn();
  generateFlashOrder();
  if (state.quests.every(q => q.done)) generateQuests();

  toast(`🌅 День ${state.day} (${getGameCalendarDateString()})! Продано: ${soldCount} шт.`);
  save(); renderAll(); closeApp();
}

// === PIN-КОД И ОБУЧЕНИЕ ===
function pressPin(d) {
  playSound('click');
  if (currentPin.length < 4) { currentPin += d; updatePinDots(); }
}
function clearPin() { playSound('click'); currentPin = ""; updatePinDots(); }
function updatePinDots() {
  document.querySelectorAll(".pin-dots span").forEach((s, i) => s.classList.toggle("filled", i < currentPin.length));
}

function submitPin() {
  playSound('click');
  if (currentPin.length < 4) return toast("❌ Введите 4 цифры");
  if (state.isSettingNewPin) {
    state.userPin = currentPin;
    state.isSettingNewPin = false;
    save(); playSound('success');
    toast("✅ PIN-код установлен!");
    unlockPhone();
  } else {
    if (currentPin === state.userPin) {
      playSound('success');
      unlockPhone();
    } else {
      toast("❌ Неверный PIN-код!");
      setTimeout(clearPin, 400);
    }
  }
}

function resetPinWithFee() {
  playSound('click');
  if (state.balance < 10000) return toast("❌ Нужно 10 000 ₽ для сброса.");
  if (confirm("Сбросить пароль за 10 000 ₽?")) {
    state.balance -= 10000;
    state.isSettingNewPin = true; currentPin = ""; updatePinDots();
    save(); renderAll();
  }
}

function unlockPhone() {
  currentPin = "";
  updatePinDots();
  if (!state.hasCompletedTutorial) {
    currentTutorialStep = 0;
    renderTutorialStep();
    showScreen("screen-tutorial");
  } else {
    showScreen("screen-desktop");
    if (!state.hasSelectedDifficulty) openDifficultySelector();
  }
  renderAll();
}

function replayTutorial() {
  playSound('click');
  currentTutorialStep = 0;
  renderTutorialStep();
  showScreen("screen-tutorial");
}

function renderTutorialStep() {
  const stepData = TUTORIAL_STEPS[currentTutorialStep] || TUTORIAL_STEPS[0];
  const iconEl = document.getElementById("tut-icon");
  const titleEl = document.getElementById("tut-title");
  const descEl = document.getElementById("tut-desc");
  if (iconEl) iconEl.textContent = stepData.icon;
  if (titleEl) titleEl.textContent = stepData.title;
  if (descEl) descEl.textContent = stepData.desc;

  document.querySelectorAll("#tutorial-dots .t-dot").forEach((d, idx) => d.classList.toggle("active", idx === currentTutorialStep));

  const prevBtn = document.getElementById("btn-tut-prev");
  const nextBtn = document.getElementById("btn-tut-next");
  const rewardBox = document.getElementById("tut-reward-box");

  if (prevBtn) prevBtn.disabled = (currentTutorialStep === 0);
  if (rewardBox) {
    rewardBox.innerHTML = state.hasCompletedTutorial
      ? `<p style="color:#10b981; font-weight:bold; margin:0;">✅ Стартовый грант уже получен</p>`
      : `<p style="color: #d4af37; font-weight: bold; margin-bottom: 4px;">🎁 Награда в конце обучения:</p><p style="margin: 0; font-size: 0.9rem;"><b>+50 000 ₽</b> и выбор режима игры!</p>`;
  }

  if (nextBtn) {
    nextBtn.textContent = (currentTutorialStep >= TUTORIAL_STEPS.length - 1)
      ? (state.hasCompletedTutorial ? "Вернуться в игру 🚀" : "Забрать +50 000 ₽ и начать! 🎁")
      : "Далее ›";
  }
}

function prevTutorialStep() {
  playSound('click');
  if (currentTutorialStep > 0) { currentTutorialStep--; renderTutorialStep(); }
}

function nextTutorialStep() {
  playSound('click');
  if (currentTutorialStep < TUTORIAL_STEPS.length - 1) {
    currentTutorialStep++;
    renderTutorialStep();
  } else {
    completeTutorial();
  }
}

function completeTutorial() {
  if (!state.hasCompletedTutorial) {
    playSound('cash');
    state.balance += 50000;
    addXp(100);
    state.hasCompletedTutorial = true;
    save();
  }
  showScreen("screen-desktop");
  if (!state.hasSelectedDifficulty) openDifficultySelector();
  renderAll();
}

function lockPhone() { playSound('click'); showScreen("screen-lock"); }

function openApp(appId) {
  playSound('click');
  document.querySelectorAll(".tab-pane").forEach(el => el.classList.remove("active"));
  const tab = document.getElementById("tab-" + appId);
  if (tab) tab.classList.add("active");

  const titles = {
    home: "Главный терминал и Календарь", market: "Оптовый рынок и Туры", storage: "Склад, Фулл-сет и Сборка",
    repair: "Сервисный центр (-35%)", sales: "Бутик и Гарантия", chat: "Клиенты и Ломбард",
    darknet: "Подпольный DarkNet", casino: "Казино 1xBet (До 1 млн ₽)", stocks: "Биржа и Фьючерсы",
    hr: "HR и Сотрудники", map: "Город и Билборды", bank: "Швейцарский банк",
    brand: "Собственный завод", sleep: "Календарь и Сон", shop: "Бизнес и Автопарк (24 авто)",
    profile: "Карьера (50 ур.) и Зал Славы"
  };
  const headerEl = document.getElementById("app-title-header");
  if (headerEl) headerEl.textContent = titles[appId] || "Приложение";
  showScreen("screen-app");
  if (appId === 'chat') {
    if (state.buyerOffers.length === 0) generateBuyerOffers();
    if (!state.tradeInOffer) generateTradeInAndPawn();
    if (!state.flashOrder && state.storage.length > 0) generateFlashOrder();
  }
  if (appId === 'darknet' && state.darknetMarket.length === 0) generateDarknet();
  renderAll();
}

function closeApp() { playSound('click'); showScreen("screen-desktop"); }

// === PRO ADMIN PANEL (CONTROL CENTER V24) ===
function checkAdminAccess() {
  if (state.isAdminUnlocked) return true;
  const code = prompt("Введите секретный код PRO ADMIN:");
  if (code === "flipper_1") {
    state.isAdminUnlocked = true;
    toast("🔓 PRO ADMIN CONTROL CENTER разблокирован!");
    save(); renderAll(); return true;
  }
  if (code !== null) toast("❌ Неверный код!");
  return false;
}

function openProAdminPanel() {
  if (!checkAdminAccess()) return;
  let modal = document.getElementById("pro-admin-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "pro-admin-modal";
    modal.className = "mystery-modal-overlay";
    document.body.appendChild(modal);
  }
  modal.style.display = "flex";
  modal.innerHTML = `
    <div class="mystery-modal-card" style="max-width:430px; text-align:left; background:#0d0d12; border:2px solid #ef4444;">
      <div class="card-top">
        <div>
          <h3 style="color:#ef4444; margin:0;">🛠️ PRO ADMIN PANEL</h3>
          <span class="muted" style="font-size:0.72rem;">PHONE FLIPPER • CONTROL CENTER</span>
        </div>
        <button class="btn-danger btn-sm" onclick="document.getElementById('pro-admin-modal').remove()">✕</button>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:12px;">
        <button class="btn-secondary btn-sm" onclick="adminChangeTimeSpeed()">⏰ Время: До ×20 (${state.timeSpeedMultiplier}x)</button>
        <button class="btn-primary btn-sm" onclick="adminAddMoney()">💰 Экономика: +Деньги</button>
        <button class="btn-gold-sm" onclick="adminSpawnPhone()">📱 Телефоны: Спавн модели</button>
        <button class="btn-secondary btn-sm" onclick="adminManageStorage()">📦 Склад: +20 слотов и детали</button>
        <button class="btn-primary btn-sm" onclick="adminManagePlayer()">👤 Игроки: Репутация и PIN</button>
        <button class="btn-gold-sm" onclick="adminManageProgress()">👑 Прогресс: Выдать Уровень</button>
        <button class="btn-secondary btn-sm" onclick="openDifficultySelector()">⚙️ Настройки: Сложность</button>
        <button class="btn-danger btn-sm" onclick="adminClearLogs()">📜 Журнал: Очистить лог</button>
      </div>
    </div>
  `;
}

function adminChangeTimeSpeed() {
  if (!checkAdminAccess()) return;
  const speed = prompt("Скорость времени (от 1 до 20):", String(state.timeSpeedMultiplier || 1));
  const val = parseInt(speed, 10);
  if (!isNaN(val) && val >= 1 && val <= 20) {
    state.timeSpeedMultiplier = val;
    toast(`⏰ Скорость времени: ${val}x`);
    save(); renderAll();
  }
}

function adminAddMoney() {
  if (!checkAdminAccess()) return;
  const sum = prompt("Введите сумму для зачисления на баланс (₽):", "10000000");
  const val = parseInt(sum, 10);
  if (!isNaN(val) && val > 0) {
    state.balance += val;
    playSound('cash');
    toast(`💰 Зачислено +${val.toLocaleString()} ₽`);
    save(); renderAll();
  }
}

function adminSpawnPhone() {
  if (!checkAdminAccess()) return;
  if (state.storage.length >= getMaxStorage()) return toast("❌ Склад переполнен!");
  const brand = prompt("Бренд (Apple, Samsung, Vertu, Xiaomi):", "Apple");
  if (!brand) return;
  const model = prompt("Модель (например: iPhone 18 Pro Max):", "iPhone 18 Pro Max");
  if (!model) return;
  const bat = Math.max(1, Math.min(100, parseInt(prompt("Процент АКБ (1-100):", "100"), 10) || 100));
  const basePrice = Math.max(5000, parseInt(prompt("Оценка стоимости (₽):", "350000"), 10) || 350000);

  state.storage.push({
    uid: Date.now() + Math.random(),
    brand, model: "👑 " + model, specs: "PRO Admin Custom", basePrice,
    isNew: bat === 100, isFake: false, isLocked: false, isGoldTuned: false, hasFullBox: true, caseType: null,
    condition: { screen: true, battery: bat, body: true, camera: true, speaker: true, waterDamage: false },
    askPrice: basePrice, boughtPrice: 0, inspected: true, fullyInspected: true, onSale: false, salePrice: 0
  });
  playSound('success');
  toast(`📱 ${brand} ${model} создан на складе!`);
  save(); renderAll();
}

function adminManageStorage() {
  state.storageBonusSlots = (state.storageBonusSlots || 0) + 20;
  Object.keys(PARTS_DB).forEach(k => state.parts[k] = (state.parts[k] || 0) + 10);
  toast("📦 Склад +20 слотов и +10 всех запчастей!");
  save(); renderAll();
}

function adminManagePlayer() {
  state.reputation += 500;
  state.policeAttention = 0;
  toast("👤 Репутация +500⭐, розыск сброшен!");
  save(); renderAll();
}

function adminManageProgress() {
  const targetLvl = parseInt(prompt("Какой уровень карьеры установить (1–50)?", String(Math.min(50, (state.currentLevel || 1) + 5))), 10);
  if (!isNaN(targetLvl) && targetLvl >= 1 && targetLvl <= 50) {
    state.currentLevel = targetLvl;
    toast(`👑 Установлен уровень карьеры #${targetLvl}: ${CAREER_LEVELS[targetLvl - 1].title}!`);
    save(); renderAll();
  }
}

function adminClearLogs() {
  state.logs = ["[PRO ADMIN] История журнала очищена."];
  toast("📜 Журнал действий очищен.");
  save(); renderAll();
}

// === РЫНОК, 5 НОВЫХ ФИЧ (ТУРЫ, БАГАЖ, ФУЛЛ-СЕТ, ГАРАНТИЯ, МУЗЕЙ), КОНТЕЙНЕР И КОНТРАБАНДА ===
function evaluatePhone(p) {
  if (p.isFake) return 3500;
  let pr = p.basePrice || 30000;
  if (!p.isNew) pr *= 0.85;
  if (p.condition) {
    if (!p.condition.screen) pr -= 14000;
    if (p.condition.battery < 80) pr -= 7000;
    if (!p.condition.body) pr -= 8000;
    if (!p.condition.camera) pr -= 10000;
    if (!p.condition.speaker) pr -= 5000;
    if (p.condition.waterDamage) pr -= 15000;
  }
  if (p.hasFullBox) pr *= 1.20; // Фича 2: Оригинальная коробка и чек (+20%)
  if (p.caseType === "carbon") pr *= 1.15;
  if (p.caseType === "diamond") pr *= 1.35;
  if (p.customRom) pr *= 1.25;
  if (state.serviceTools.includes("micro") && p.repairedByPlayer) pr *= 1.20;
  const museumBonus = 1 + ((state.retroMuseum || []).length * 0.03); // Фича 5: +3% за каждый ретро-экспонат
  return Math.max(3000, Math.round(pr * museumBonus));
}

function getConditionSummary(p) {
  if (!p.inspected && !p.fullyInspected) return "❓ Кот в мешке (Нужен осмотр от крышки до низа)";
  if (p.isFake && p.fullyInspected) return "🚨 КИТАЙСКАЯ ПАЛЬ (Дешевая копия)";
  const issues = [];
  if (!p.condition.screen) issues.push("Разбит экран");
  if (p.condition.battery < 80) issues.push(`АКБ (${p.condition.battery}%)`);
  if (!p.condition.body) issues.push("Царапины корпуса");
  if (!p.condition.camera) issues.push("Пятна камеры");
  if (!p.condition.speaker) issues.push("Хрипит динамик");
  if (p.condition.waterDamage) issues.push("🌊 Окислы воды");
  const boxTxt = p.hasFullBox ? " | 📦 Фулл-сет" : "";
  return (issues.length === 0 ? `✅ Идеал (АКБ ${p.condition.battery}%)` : `⚠️ Дефекты: ${issues.join(", ")}`) + boxTxt;
}

function generateMarket() {
  state.market = [];
  const lvl = getCurrentLevelObj().level;
  let available = PHONE_CATALOG.filter(m => m.minLvl <= Math.min(50, lvl + 4));
  if (state.activeTour === "dubai") {
    available = PHONE_CATALOG.filter(m => m.basePrice >= 110000 || m.isRetro);
  }
  const discountFactor = (state.districts.includes("d4") ? 0.90 : 1.0) * (1 - getCarBonuses().marketDisc) * (state.activeTour === "shenzhen" ? 0.72 : 1.0);

  for (let i = 0; i < 8; i++) {
    const t = available[Math.floor(Math.random() * available.length)];
    const isNew = state.activeTour === "dubai" ? true : Math.random() < 0.30;
    const isFake = !isNew && state.activeTour !== "dubai" && Math.random() < 0.14;
    const cond = {
      screen: isNew ? true : Math.random() > 0.35,
      battery: isNew ? 100 : Math.floor(55 + Math.random() * 42),
      body: isNew ? true : Math.random() > 0.30,
      camera: isNew ? true : Math.random() > 0.20,
      speaker: isNew ? true : Math.random() > 0.25,
      waterDamage: isNew ? false : Math.random() < 0.18
    };

    const basePr = Math.round(t.basePrice * state.inflationRate);
    const realVal = evaluatePhone({ basePrice: basePr, isNew, isFake: false, condition: cond });
    const askPrice = Math.max(2500, Math.round(realVal * (isNew ? 0.88 : 0.68) * discountFactor));

    state.market.push({
      uid: Date.now() + Math.random() + i,
      brand: t.brand, model: (state.activeTour === "dubai" ? "👑 Dubai " : "") + t.model,
      specs: t.specs, basePrice: basePr, isRetro: !!t.isRetro,
      isNew, isFake, isLocked: false, isGoldTuned: state.activeTour === "dubai", hasFullBox: isNew, caseType: null,
      condition: cond, askPrice, boughtPrice: 0,
      inspected: isNew || state.upgrades.includes("service"),
      fullyInspected: isNew,
      onSale: false, salePrice: 0
    });
  }
}

// Фича 1: Зарубежные бизнес-туры (Шэньчжэнь / Дубай)
function startBusinessTour(dest) {
  playSound('click');
  const hasJet = state.luxuryGarage.includes("jet");
  const cost = hasJet ? 0 : (dest === "shenzhen" ? 120000 : 350000);
  if (state.balance < cost) return toast(`❌ Билет в бизнес-тур стоит ${cost.toLocaleString()} ₽!`);
  state.balance -= cost;
  state.activeTour = dest;
  generateMarket();
  playSound('cash');
  toast(dest === "shenzhen"
    ? "🏮 Вы прилетели в Шэньчжэнь! Цены на рынке -28% и запчасти в Сервисе со скидкой -50% сегодня!"
    : "🌴 Вы прилетели в Дубай! На рынке только новые элитные флагманы и редкие ретро-модели!");
  save(); renderAll();
}

// Фича 4: Аукцион забытого багажа в Аэропорту (40 000 ₽ с анимацией)
function buyAirportLuggage() {
  const cost = 40000;
  if (state.storage.length >= getMaxStorage()) return toast("❌ Склад переполнен!");
  if (state.balance < cost) return toast(`❌ Чемодан забытого багажа стоит ${cost.toLocaleString()} ₽!`);

  state.balance -= cost;
  state.stats.luggageOpened = (state.stats.luggageOpened || 0) + 1;
  playSound('click');

  const overlay = document.createElement("div");
  overlay.className = "mystery-modal-overlay";
  overlay.innerHTML = `
    <div class="mystery-modal-card" id="luggage-anim-card">
      <h3 style="color:#38bdf8;">🧳 Вскрываем забытый чемодан из Аэропорта...</h3>
      <div class="mystery-box-emoji shake-anim">🧳</div>
      <p class="muted">Срезаем кодовый замок таможенного терминала...</p>
    </div>
  `;
  document.body.appendChild(overlay);

  setTimeout(() => {
    playSound('cash');
    const t = PHONE_CATALOG[Math.floor(Math.random() * PHONE_CATALOG.length)];
    const cashFound = Math.random() < 0.5 ? Math.floor(15000 + Math.random() * 55000) : 0;
    state.balance += cashFound;

    const newPhone = {
      uid: Date.now() + Math.random(),
      brand: t.brand, model: "🧳 Багаж " + t.model, specs: t.specs, basePrice: t.basePrice, isRetro: !!t.isRetro,
      isNew: Math.random() < 0.5, isFake: false, isLocked: false, isGoldTuned: false, hasFullBox: true, caseType: null,
      condition: { screen: true, battery: 92, body: true, camera: true, speaker: true, waterDamage: false },
      askPrice: t.basePrice, boughtPrice: cost, inspected: true, fullyInspected: true, onSale: false, salePrice: 0
    };
    state.storage.push(newPhone);
    state.stats.bought++;
    updateQuestProgress("buy", 1);
    save(); renderAll();

    const card = document.getElementById("luggage-anim-card");
    if (card) {
      card.innerHTML = `
        <h3 style="color:#10b981;">🧳 НАХОДКА В БАГАЖЕ!</h3>
        <div class="mystery-box-emoji">📱</div>
        <h3 style="margin:6px 0; color:#fff;">${newPhone.model}</h3>
        ${cashFound > 0 ? `<p class="ok">💵 В кармане чемодана найдена наличка: +${cashFound.toLocaleString()} ₽!</p>` : `<p class="muted">Оценка аппарата: ${evaluatePhone(newPhone).toLocaleString()} ₽</p>`}
        <button class="btn-gold" style="width:100%; padding:12px;" onclick="this.closest('.mystery-modal-overlay').remove()">Забрать всё 🚀</button>
      `;
    }
  }, 1500);
}

function inspectMarketPhone(uid) {
  playSound('click');
  const p = state.market.find(x => x.uid === uid);
  if (!p) return;
  const fee = state.upgrades.includes("service") ? 0 : 1000;
  if (state.balance < fee) return toast(`❌ Для осмотра нужно ${fee} ₽!`);
  state.balance -= fee;
  p.inspected = true; p.fullyInspected = true;

  alert([
    `🔎 ПОЛНЫЙ ОСМОТР ОТ КРЫШКИ ДО ПЛАТЫ: ${p.brand} ${p.model}`,
    `1. Крышка и корпус: ${p.condition.body ? '✅ Целые' : '❌ Потертости'}`,
    `2. Дисплей: ${p.condition.screen ? '✅ Оригинал' : '❌ Разбито стекло'}`,
    `3. Камера и звук: ${p.condition.camera && p.condition.speaker ? '✅ Исправны' : '❌ Нужен ремонт'}`,
    `4. АКБ и Плата: ${p.condition.battery}% | ${p.condition.waterDamage ? '🌊 Следы воды!' : '✅ Сухая плата'}`,
    `5. Проверка IMEI: ${p.isFake ? '🚨 КИТАЙСКАЯ ПОДДЕЛКА (ПАЛЬ)!' : '✅ 100% Оригинал'}`
  ].join("\n"));

  if (p.isFake) p.askPrice = 2500;
  save(); renderAll();
}

function buyFromMarket(uid) {
  if (state.storage.length >= getMaxStorage()) return toast("❌ Склад переполнен!");
  const idx = state.market.findIndex(p => p.uid === uid);
  if (idx === -1) return;
  const p = state.market[idx];
  if (state.balance < p.askPrice) return toast("❌ Недостаточно средств!");

  state.balance -= p.askPrice;
  p.boughtPrice = p.askPrice;
  p.inspected = true; p.fullyInspected = true;
  if (p.isFake) {
    playSound('boom');
    p.model = "⚠️ ПАЛЬ " + p.model;
    toast("🚨 Внутри оказалась китайская подделка!");
  } else {
    playSound('success');
    toast(`📦 ${p.model} куплен на склад!`);
  }
  state.storage.push(p);
  state.market.splice(idx, 1);
  state.stats.bought++;
  updateQuestProgress("buy", 1);
  addXp(20);
  save(); renderAll();
}

function buyMysteryBox() {
  const boxCost = 75000;
  if (state.storage.length >= getMaxStorage()) return toast("❌ Склад переполнен!");
  if (state.balance < boxCost) return toast(`❌ Mystery Box стоит ${boxCost.toLocaleString()} ₽!`);

  state.balance -= boxCost;
  state.stats.mysteryOpened = (state.stats.mysteryOpened || 0) + 1;
  playSound('click');

  const overlay = document.createElement("div");
  overlay.className = "mystery-modal-overlay";
  overlay.innerHTML = `
    <div class="mystery-modal-card" id="mystery-anim-card">
      <h3 style="color:#fbbf24;">🎁 Открываем Mystery Box (75 000 ₽)...</h3>
      <div class="mystery-box-emoji shake-anim">📦</div>
      <p class="muted">Срываем пломбу и проверяем серийный номер...</p>
    </div>
  `;
  document.body.appendChild(overlay);

  const pool = PHONE_CATALOG.filter(p => p.basePrice >= 52000);
  const prize = pool[Math.floor(Math.random() * pool.length)];
  const isRareGold = Math.random() < 0.28;
  const finalBase = isRareGold ? Math.round(prize.basePrice * 1.85) : prize.basePrice;
  const newPhone = {
    uid: Date.now() + Math.random(),
    brand: prize.brand, model: (isRareGold ? "👑 SECRET GOLD " : "🎁 ") + prize.model,
    specs: prize.specs, basePrice: finalBase, isRetro: !!prize.isRetro,
    isNew: true, isFake: false, isLocked: false, isGoldTuned: isRareGold, hasFullBox: true, caseType: isRareGold ? "diamond" : null,
    condition: { screen: true, battery: 100, body: true, camera: true, speaker: true, waterDamage: false },
    askPrice: finalBase, boughtPrice: boxCost, inspected: true, fullyInspected: true, onSale: false, salePrice: 0
  };

  setTimeout(() => {
    playSound('cash');
    state.storage.push(newPhone);
    state.stats.bought++;
    updateQuestProgress("buy", 1);
    addXp(55);
    save(); renderAll();
    const card = document.getElementById("mystery-anim-card");
    if (card) {
      card.innerHTML = `
        <h3 style="color:#10b981;">✨ ВЫПАЛ ЭКСКЛЮЗИВ! ✨</h3>
        <div class="mystery-box-emoji">📱</div>
        <h2 style="margin:6px 0; color:#fff;">${newPhone.model}</h2>
        <div class="price-box" style="font-size:1.3rem; margin:10px 0;">Оценка: ${evaluatePhone(newPhone).toLocaleString()} ₽</div>
        <button class="btn-gold" style="width:100%; padding:12px;" onclick="this.closest('.mystery-modal-overlay').remove()">Забрать на склад 🚀</button>
      `;
    }
  }, 1500);
}

// Анимированный Таможенный Контейнер (300 000 ₽)
function buyCustomsContainer() {
  const cost = 300000;
  if (state.storage.length + 3 > getMaxStorage()) return toast("❌ Нужно минимум 3 свободных слота!");
  if (state.balance < cost) return toast(`❌ Контейнер стоит ${cost.toLocaleString()} ₽!`);

  state.balance -= cost;
  state.stats.containerOpened = (state.stats.containerOpened || 0) + 1;
  playSound('click');

  const overlay = document.createElement("div");
  overlay.className = "mystery-modal-overlay";
  overlay.innerHTML = `
    <div class="mystery-modal-card" id="cont-anim-card">
      <h3 style="color:#38bdf8;">🛃 Вскрываем Таможенный Контейнер (300к ₽)...</h3>
      <div class="mystery-box-emoji shake-anim">🚢</div>
      <p class="muted">Срезаем портовые пломбы и открываем ворота...</p>
    </div>
  `;
  document.body.appendChild(overlay);

  setTimeout(() => {
    playSound('cash');
    const count = 3 + Math.floor(Math.random() * 2);
    const wonPhones = [];
    for (let i = 0; i < count; i++) {
      const pool = PHONE_CATALOG.filter(p => p.basePrice >= 60000);
      const t = pool[Math.floor(Math.random() * pool.length)];
      wonPhones.push({
        uid: Date.now() + Math.random() + i,
        brand: t.brand, model: "🛃 Таможня " + t.model, specs: t.specs, basePrice: t.basePrice, isRetro: !!t.isRetro,
        isNew: Math.random() < 0.5, isFake: false, isLocked: false, isGoldTuned: false, hasFullBox: false, caseType: null,
        condition: { screen: true, battery: 90, body: true, camera: true, speaker: true, waterDamage: false },
        askPrice: t.basePrice, boughtPrice: Math.round(cost / count), inspected: true, fullyInspected: true, onSale: false, salePrice: 0
      });
    }
    state.storage.push(...wonPhones);
    state.stats.bought += wonPhones.length;
    updateQuestProgress("buy", wonPhones.length);
    addXp(90);
    save(); renderAll();
    const card = document.getElementById("cont-anim-card");
    if (card) {
      card.innerHTML = `
        <h3 style="color:#10b981;">🛃 КОНТЕЙНЕР ВСКРЫТ!</h3>
        <div class="mystery-box-emoji">📦</div>
        <p style="color:#fff;">Получено флагманов: <b>${wonPhones.length} шт.</b></p>
        <p class="muted">${wonPhones.map(x => x.model).join("<br>")}</p>
        <button class="btn-gold" style="width:100%; padding:12px; margin-top:8px;" onclick="this.closest('.mystery-modal-overlay').remove()">Разгрузить на склад 🚀</button>
      `;
    }
  }, 1600);
}

// Анимированная Контрабанда (180 000 ₽)
function orderContrabandBatch() {
  const cost = 180000;
  if (state.storage.length + 2 > getMaxStorage()) return toast("❌ Нужно 2 свободных слота!");
  if (state.balance < cost) return toast(`❌ Партия контрабанды стоит ${cost.toLocaleString()} ₽!`);
  state.balance -= cost;
  playSound('click');

  const overlay = document.createElement("div");
  overlay.className = "mystery-modal-overlay";
  overlay.innerHTML = `
    <div class="mystery-modal-card" id="contra-anim-card">
      <h3 style="color:#f87171;">✈️ Ночной рейс через границу...</h3>
      <div class="mystery-box-emoji shake-anim">🛩️</div>
      <p class="muted">Обходим таможенные патрули...</p>
    </div>
  `;
  document.body.appendChild(overlay);

  setTimeout(() => {
    const hasJet = state.luxuryGarage.includes("jet");
    const card = document.getElementById("contra-anim-card");
    if (!hasJet && !state.hasRoof && Math.random() < 0.25) {
      playSound('boom');
      if (card) {
        card.innerHTML = `
          <h3 style="color:#ef4444;">🚨 ПЕРЕХВАТ НА ГРАНИЦЕ!</h3>
          <div class="mystery-box-emoji">🚓</div>
          <p class="muted">Патруль конфисковал груз! (Крыша или Бизнес-Джет защищают на 100%).</p>
          <button class="btn-danger" style="width:100%; padding:12px;" onclick="this.closest('.mystery-modal-overlay').remove()">Закрыть</button>
        `;
      }
      save(); return renderAll();
    }

    const won = [];
    for (let i = 0; i < 2; i++) {
      const high = PHONE_CATALOG.filter(p => p.basePrice >= 120000);
      const t = high[Math.floor(Math.random() * high.length)];
      const item = {
        uid: Date.now() + Math.random() + i,
        brand: t.brand, model: "✈️ Импорт " + t.model, specs: t.specs, basePrice: t.basePrice,
        isNew: true, isFake: false, isLocked: false, isGoldTuned: false, hasFullBox: true, caseType: null,
        condition: { screen: true, battery: 100, body: true, camera: true, speaker: true, waterDamage: false },
        askPrice: t.basePrice, boughtPrice: 90000, inspected: true, fullyInspected: true, onSale: false, salePrice: 0
      };
      won.push(item);
      state.storage.push(item);
    }
    playSound('cash');
    save(); renderAll();
    if (card) {
      card.innerHTML = `
        <h3 style="color:#10b981;">✈️ КОНТРАБАНДА ДОСТАВЛЕНА!</h3>
        <div class="mystery-box-emoji">💎</div>
        <p style="color:#fff;">Получено 2 новых флагмана за полцены:</p>
        <p class="muted">${won.map(x => x.model).join("<br>")}</p>
        <button class="btn-gold" style="width:100%; padding:12px; margin-top:8px;" onclick="this.closest('.mystery-modal-overlay').remove()">Принять на склад 🚀</button>
      `;
    }
  }, 1500);
}

// === СКЛАД, ФУЛЛ-СЕТ (+20%), ЗАЛ СЛАВЫ, ROOT И РЕМОНТ ===
function addFullBoxSet(uid) {
  playSound('click');
  const p = state.storage.find(x => x.uid === uid);
  if (!p || p.hasFullBox) return;
  const cost = 4000;
  if (state.balance < cost) return toast(`❌ Коробка, чек и пломбы стоят ${cost.toLocaleString()} ₽!`);
  state.balance -= cost;
  p.hasFullBox = true;
  p.boughtPrice = (p.boughtPrice || 0) + cost;
  playSound('success');
  toast("📦 Укомплектовано оригинальной коробкой и чеком! Оценка выросла на +20%!");
  save(); renderAll();
}

function addToRetroMuseum(uid) {
  playSound('click');
  const idx = state.storage.findIndex(x => x.uid === uid);
  if (idx === -1) return;
  const p = state.storage[idx];
  if (!state.retroMuseum) state.retroMuseum = [];
  if (state.retroMuseum.some(m => m.model === p.model)) return toast("🏛️ Такой экспонат уже стоит в вашем Зале Славы!");
  state.retroMuseum.push({ model: p.model, brand: p.brand });
  state.storage.splice(idx, 1);
  state.reputation += 35;
  playSound('cash');
  toast(`🏛️ ${p.model} выставлен в Зал Славы! Все продажи навсегда +3% дороже и +12 000 ₽/день!`);
  save(); renderAll();
}

function inspectDevice(uid) {
  playSound('click');
  const p = state.storage.find(x => x.uid === uid);
  if (!p) return;
  p.inspected = true; p.fullyInspected = true;
  toast(`🔍 Диагностика: ${getConditionSummary(p)}`);
  save(); renderAll();
}

function flashCustomRom(uid) {
  playSound('click');
  const p = state.storage.find(x => x.uid === uid);
  if (!p || p.customRom) return;
  if (Math.random() < 0.85 || state.staff.includes("hacker")) {
    p.customRom = true;
    p.isLocked = false;
    p.model = "⚡ Root " + p.model;
    playSound('success');
    toast("💻 Кастомная прошивка установлена! Цена +25%!");
  } else {
    p.condition.screen = false;
    playSound('boom');
    toast("💥 Сбой загрузчика! Потребуется замена модуля в сервисе.");
  }
  save(); renderAll();
}

function scrapPhoneForParts(uid) {
  playSound('click');
  const pIdx = state.storage.findIndex(x => x.uid === uid);
  if (pIdx === -1) return;
  const p = state.storage[pIdx];
  state.storage.splice(pIdx, 1);
  state.parts.screen = (state.parts.screen || 0) + 1;
  state.parts.body = (state.parts.body || 0) + 1;
  state.parts.camera = (state.parts.camera || 0) + 1;
  state.usedBatteriesScrap = (state.usedBatteriesScrap || 0) + 1;
  playSound('success');
  toast(`♻️ ${p.model} разобран на донорские детали!`);
  save(); renderAll();
}

function recycleOldBatteries() {
  playSound('click');
  if ((state.usedBatteriesScrap || 0) <= 0) return toast("❌ Нет старых АКБ для утилизации!");
  const gain = state.usedBatteriesScrap * 8000;
  state.balance += gain;
  state.reputation += state.usedBatteriesScrap * 5;
  state.usedBatteriesScrap = 0;
  playSound('cash');
  toast(`🌱 Эко-переработка принесла +${gain.toLocaleString()} ₽!`);
  save(); renderAll();
}

function customBuildPhone() {
  if (state.storage.length >= getMaxStorage()) return toast("❌ Склад переполнен!");
  if (state.parts.screen < 1 || state.parts.battery < 1 || state.parts.body < 1) {
    return toast("❌ Нужны минимум: 1 Экран, 1 АКБ и 1 Корпус!");
  }
  state.parts.screen--; state.parts.battery--; state.parts.body--;
  const pool = PHONE_CATALOG.filter(p => p.minLvl <= getCurrentLevelObj().level);
  const t = pool[Math.floor(Math.random() * pool.length)];
  const useTitanium = (state.rareTitaniumParts || 0) > 0;
  if (useTitanium) state.rareTitaniumParts--;

  state.storage.push({
    uid: Date.now() + Math.random(),
    brand: t.brand, model: (useTitanium ? "💎 Titanium " : "🛠️ Сборка ") + t.model,
    specs: t.specs, basePrice: Math.round(t.basePrice * (useTitanium ? 1.5 : 1.15)),
    isNew: true, isFake: false, isLocked: false, isGoldTuned: false, hasFullBox: true, caseType: null, repairedByPlayer: true,
    condition: { screen: true, battery: 100, body: true, camera: true, speaker: true, waterDamage: false },
    askPrice: t.basePrice, boughtPrice: 18000, inspected: true, fullyInspected: true, onSale: false, salePrice: 0
  });
  state.stats.repaired++;
  updateQuestProgress("repair", 1);
  playSound('success');
  toast(`🛠️ Собран ${t.model}!`);
  save(); renderAll();
}

function applyPhoneCase(uid, caseType) {
  playSound('click');
  const p = state.storage.find(x => x.uid === uid);
  if (!p) return;
  const cost = caseType === "carbon" ? 7000 : 20000;
  if (state.balance < cost) return toast(`❌ Нужно ${cost.toLocaleString()} ₽!`);
  state.balance -= cost;
  p.caseType = caseType;
  p.boughtPrice = (p.boughtPrice || 0) + cost;
  playSound('success');
  toast("🛡️ Премиум-чехол установлен!");
  save(); renderAll();
}

function tunePhoneGold(uid) {
  const p = state.storage.find(x => x.uid === uid);
  if (!p || p.isGoldTuned) return;
  const cost = 20000;
  if (state.balance < cost) return toast(`❌ Нужно ${cost.toLocaleString()} ₽!`);
  state.balance -= cost;
  p.isGoldTuned = true;
  p.model = "👑 24K GOLD " + p.model;
  p.basePrice = Math.round(p.basePrice * 2.1);
  p.boughtPrice = (p.boughtPrice || 0) + cost;
  playSound('cash');
  toast("✨ Покрыто золотом 24K!");
  save(); renderAll();
}

function getPartDiscountCost(key) {
  let base = PARTS_DB[key].cost;
  if (state.serviceTools.includes("solder")) base *= 0.65;
  if (state.activeTour === "shenzhen") base *= 0.50;
  if (state.difficulty === "hard") base *= 1.30;
  return Math.round(base);
}

function buyPart(k) {
  playSound('click');
  const cost = getPartDiscountCost(k);
  if (state.balance < cost) return toast(`❌ Нужно ${cost.toLocaleString()} ₽!`);
  state.balance -= cost;
  state.parts[k] = (state.parts[k] || 0) + 1;
  toast(`🔩 Куплена деталь: ${PARTS_DB[k].name}`);
  save(); renderAll();
}

function buyServiceTool(toolId) {
  playSound('click');
  const tool = SERVICE_TOOLS.find(t => t.id === toolId);
  if (!tool || state.serviceTools.includes(toolId)) return;
  if (state.balance < tool.cost) return toast(`❌ Нужно ${tool.cost.toLocaleString()} ₽!`);
  state.balance -= tool.cost;
  state.serviceTools.push(toolId);
  playSound('success');
  toast(`🛠️ Оборудование «${tool.name}» установлено!`);
  save(); renderAll();
}

function fixPart(uid, k) {
  playSound('click');
  const p = state.storage.find(x => x.uid === uid);
  if (!p) return;
  if (k === "water") {
    if (!state.serviceTools.includes("bath")) return toast("❌ Купите Ультразвуковую ванну!");
    p.condition.waterDamage = false;
    p.repairedByPlayer = true;
    state.stats.repaired++;
    updateQuestProgress("repair", 1);
    playSound('success');
    toast("🌊 Плата очищена в ультразвуковой ванне!");
    save(); return renderAll();
  }
  if ((state.parts[k] || 0) <= 0) return toast(`❌ Нет детали «${PARTS_DB[k].label}»!`);
  if (k === "screen" && state.serviceTools.includes("laser") && Math.random() < 0.4) {
    toast("⚡ Лазерный сепаратор сэкономил дисплей!");
  } else {
    state.parts[k]--;
  }
  if (k === "battery") {
    p.condition.battery = 100;
    state.usedBatteriesScrap = (state.usedBatteriesScrap || 0) + 1;
  } else {
    p.condition[k] = true;
  }
  p.repairedByPlayer = true;
  state.stats.repaired++;
  updateQuestProgress("repair", 1);
  addXp(15);
  playSound('success');
  toast(`🔧 ${PARTS_DB[k].name} заменен!`);
  save(); renderAll();
}

function buyUnlocker() {
  playSound('click');
  if (state.hasUnlocker) return toast("✅ Уже установлен!");
  if (state.balance < 50000) return toast("❌ Нужно 50 000 ₽!");
  state.balance -= 50000;
  state.hasUnlocker = true;
  playSound('success');
  toast("🔓 Программатор куплен!");
  save(); renderAll();
}

function unlockDarkPhone(uid) {
  if (!state.hasUnlocker) return toast("❌ Сначала купите Программатор в Сервисе!");
  const p = state.storage.find(x => x.uid === uid);
  if (!p) return;
  p.isLocked = false;
  playSound('success');
  toast("✅ iCloud Lock снят!");
  save(); renderAll();
}

// === БУТИК С ГАРАНТИЕЙ (+15%), КЛИЕНТЫ, TRADE-IN И СРОЧНЫЕ ЗАКАЗЫ ПО СЛОЖНОСТИ ===
function putOnSale(uid, factor, withWarranty = false) {
  playSound('click');
  const p = state.storage.find(x => x.uid === uid);
  if (!p) return;
  if (p.isFake) return toast("❌ Подделки нельзя ставить в Бутик!");
  if (p.isLocked && !state.staff.includes("lawyer") && !state.hasRoof) {
    playSound('boom');
    state.balance = Math.max(0, state.balance - 50000);
    return toast("🚨 ШТРАФ 50 000 ₽ за попытку выставить заблокированный iCloud!");
  }
  let mult = state.isBlackFriday ? Math.max(factor, 1.8) : factor;
  if (withWarranty) mult += 0.15;
  p.salePrice = Math.round(evaluatePhone(p) * mult);
  p.hasWarranty = withWarranty;
  p.onSale = true;
  toast(`🏷️ ${p.model} выставлен за ${p.salePrice.toLocaleString()} ₽ ${withWarranty ? '(+Гарантия 1 год)' : ''}!`);
  save(); renderAll();
}

function removeFromSale(uid) {
  playSound('click');
  const p = state.storage.find(x => x.uid === uid);
  if (!p) return;
  p.onSale = false;
  p.hasWarranty = false;
  save(); renderAll();
}

function boostBoutiqueRatingMod() {
  const cost = 35000;
  if (state.balance < cost) return toast(`❌ Нужно ${cost.toLocaleString()} ₽!`);
  state.balance -= cost;
  state.boutiqueRating = 5.0;
  playSound('success');
  toast("⭐ Рейтинг Бутика поднят до 5.0 ⭐!");
  save(); renderAll();
}

function generateBuyerOffers() {
  state.buyerOffers = [];
  if (state.storage.length === 0) return;
  const names = ["Азамат", "Данияр VIP", "Елена Блогер", "Тимур Перекуп", "Руслан Гик", "Максим Мажор"];
  const phrases = ["Заберу сегодня наличкой!", "Если с коробкой и без косяков — беру сразу!", "Переведу на карту прямо сейчас!"];
  const boost = (state.upgrades.includes("store_app") ? 0.15 : 0) + (state.staff.includes("seller") ? 0.15 : 0) + (state.activeBillboards.length * 0.08);

  state.storage.forEach(p => {
    const val = evaluatePhone(p);
    const offerPrice = Math.round(val * (1.14 + Math.random() * 0.25 + boost));
    state.buyerOffers.push({
      id: Date.now() + Math.random(),
      phoneUid: p.uid, phoneModel: p.model, phoneSpecs: p.specs,
      repairedTag: p.hasFullBox ? "📦 Полный комплект с чеком" : "Без коробки",
      buyerName: names[Math.floor(Math.random() * names.length)],
      phrase: phrases[Math.floor(Math.random() * phrases.length)],
      offerPrice
    });
  });
}

function acceptBuyerOffer(offerId, isHaggle) {
  const idx = state.buyerOffers.findIndex(o => o.id === offerId);
  if (idx === -1) return;
  const offer = state.buyerOffers[idx];
  const pIdx = state.storage.findIndex(p => p.uid === offer.phoneUid);
  if (pIdx === -1) { state.buyerOffers.splice(idx, 1); return renderAll(); }
  const phone = state.storage[pIdx];

  let finalPrice = offer.offerPrice;
  if (isHaggle) {
    const chance = 0.50 + getCarBonuses().haggleBoost + (state.difficulty === "easy" ? 0.15 : 0);
    if (Math.random() < chance) {
      finalPrice = Math.round(finalPrice * 1.25);
      toast(`🤝 Авторитет сработал! Сделка на ${finalPrice.toLocaleString()} ₽!`);
    } else {
      toast(`😡 Клиент отказался от торга +25% и ушел!`);
      state.buyerOffers.splice(idx, 1);
      save(); return renderAll();
    }
  }

  state.balance += finalPrice;
  state.stats.sold++;
  state.stats.totalProfit += (finalPrice - (phone.boughtPrice || 0));
  state.storage.splice(pIdx, 1);
  state.buyerOffers.splice(idx, 1);
  updateQuestProgress("sell", 1);
  addXp(40);
  playSound('cash');
  if (!isHaggle) toast(`💵 Продано за ${finalPrice.toLocaleString()} ₽!`);
  save(); renderAll();
}

function generateTradeInAndPawn() {
  const t1 = PHONE_CATALOG[Math.floor(Math.random() * PHONE_CATALOG.length)];
  state.tradeInOffer = { brand: t1.brand, model: t1.model, specs: t1.specs, basePrice: t1.basePrice, askCash: Math.round(t1.basePrice * 0.48) };
  const t2 = PHONE_CATALOG[Math.floor(Math.random() * PHONE_CATALOG.length)];
  const isReal = Math.random() > 0.35;
  state.pawnItem = {
    brand: t2.brand, model: t2.model, specs: t2.specs, basePrice: t2.basePrice,
    pawnPrice: Math.round(t2.basePrice * 0.35), isReal,
    clue: isReal ? "Ровные рамки OLED, оригинальный шрифт и бьется серийник." : "Широкий подбородок экрана и пластиковый корпус!"
  };
}

function acceptTradeInDeal() {
  if (!state.tradeInOffer) return;
  if (state.storage.length >= getMaxStorage()) return toast("❌ Склад переполнен!");
  if (state.balance < state.tradeInOffer.askCash) return toast("❌ Недостаточно денег!");
  state.balance -= state.tradeInOffer.askCash;
  state.storage.push({
    uid: Date.now() + Math.random(),
    brand: state.tradeInOffer.brand, model: "🔄 Trade-In " + state.tradeInOffer.model,
    specs: state.tradeInOffer.specs, basePrice: state.tradeInOffer.basePrice,
    isNew: false, isFake: false, isLocked: false, isGoldTuned: false, hasFullBox: false, caseType: null,
    condition: { screen: true, battery: 84, body: true, camera: true, speaker: true, waterDamage: false },
    askPrice: state.tradeInOffer.basePrice, boughtPrice: state.tradeInOffer.askCash, inspected: true, fullyInspected: true, onSale: false, salePrice: 0
  });
  state.tradeInOffer = null;
  state.stats.bought++;
  updateQuestProgress("buy", 1);
  playSound('cash');
  toast("🔄 Выкуплено по Trade-In!");
  save(); renderAll();
}

function playPawnMiniGame(buyDecision) {
  if (!state.pawnItem) return;
  const item = state.pawnItem;
  if (!buyDecision) { state.pawnItem = null; toast("🕵️‍♂️ Клиент выгнан."); save(); return renderAll(); }
  if (state.storage.length >= getMaxStorage()) return toast("❌ Склад переполнен!");
  if (state.balance < item.pawnPrice) return toast("❌ Не хватает денег!");
  state.balance -= item.pawnPrice;
  if (item.isReal) {
    state.storage.push({
      uid: Date.now() + Math.random(),
      brand: item.brand, model: "💎 Ломбард " + item.model, specs: item.specs, basePrice: item.basePrice,
      isNew: false, isFake: false, isLocked: false, isGoldTuned: false, hasFullBox: true, caseType: null,
      condition: { screen: true, battery: 91, body: true, camera: true, speaker: true, waterDamage: false },
      askPrice: item.basePrice, boughtPrice: item.pawnPrice, inspected: true, fullyInspected: true, onSale: false, salePrice: 0
    });
    playSound('cash'); toast("🎯 Это 100% ОРИГИНАЛ!");
  } else {
    state.storage.push({
      uid: Date.now() + Math.random(),
      brand: item.brand, model: "⚠️ ПАЛЬ " + item.model, specs: item.specs, basePrice: 3500,
      isNew: false, isFake: true, isLocked: false, isGoldTuned: false, hasFullBox: false, caseType: null,
      condition: { screen: true, battery: 60, body: true, camera: false, speaker: true, waterDamage: false },
      askPrice: 3500, boughtPrice: item.pawnPrice, inspected: true, fullyInspected: true, onSale: false, salePrice: 0
    });
    playSound('boom'); toast("💥 Вам подсунули китайскую паль!");
  }
  state.pawnItem = null; save(); renderAll();
}

// Срочные заказы: отключены на Хардкоре, редкие (25%) на Нормальном!
function generateFlashOrder() {
  if (state.difficulty === "hard" || state.storage.length === 0) {
    state.flashOrder = null;
    return;
  }
  if (state.difficulty === "normal" && Math.random() > 0.25) {
    state.flashOrder = null;
    return;
  }
  const target = state.storage[Math.floor(Math.random() * state.storage.length)];
  state.flashOrder = {
    phoneUid: target.uid, modelName: target.model,
    reward: Math.round(evaluatePhone(target) * 1.65), timeLeft: 120
  };
  if (flashOrderTimer) clearInterval(flashOrderTimer);
  flashOrderTimer = setInterval(() => {
    if (!state.flashOrder) return clearInterval(flashOrderTimer);
    state.flashOrder.timeLeft--;
    if (state.flashOrder.timeLeft <= 0) {
      state.flashOrder = null; clearInterval(flashOrderTimer); renderAll();
    } else {
      const el = document.getElementById("flash-timer-display");
      if (el) el.textContent = `${state.flashOrder.timeLeft} сек.`;
    }
  }, 1000);
}

function fulfillFlashOrder() {
  if (!state.flashOrder) return;
  const pIdx = state.storage.findIndex(p => p.uid === state.flashOrder.phoneUid);
  if (pIdx === -1) return toast("❌ Аппарата уже нет на складе!");
  const phone = state.storage[pIdx];
  const reward = state.flashOrder.reward;
  state.balance += reward;
  state.stats.sold++;
  state.stats.totalProfit += (reward - (phone.boughtPrice || 0));
  state.storage.splice(pIdx, 1);
  state.flashOrder = null;
  updateQuestProgress("sell", 1);
  playSound('cash');
  toast(`⚡ Срочный заказ выполнен! +${reward.toLocaleString()} ₽!`);
  save(); renderAll();
}

// === DARKNET, БАНК, БИРЖА, HR, ГОРОД, ЗАВОД И АВТОПАРК ===
function generateDarknet() {
  state.darknetMarket = [];
  for (let i = 0; i < 5; i++) {
    const t = PHONE_CATALOG[Math.floor(Math.random() * PHONE_CATALOG.length)];
    state.darknetMarket.push({
      uid: Date.now() + Math.random() + i,
      brand: t.brand, model: t.model, specs: t.specs, basePrice: t.basePrice,
      isNew: false, isFake: false, isLocked: true, isGoldTuned: false, hasFullBox: false, caseType: null,
      condition: { screen: Math.random() > 0.45, battery: Math.floor(55 + Math.random() * 35), body: true, camera: true, speaker: true, waterDamage: Math.random() < 0.35 },
      askPrice: Math.max(2000, Math.round(t.basePrice * 0.32)), boughtPrice: 0, inspected: true, fullyInspected: true, onSale: false, salePrice: 0
    });
  }
}

function buyFromDarknet(uid) {
  if (state.storage.length >= getMaxStorage()) return toast("❌ Склад переполнен!");
  const idx = state.darknetMarket.findIndex(p => p.uid === uid);
  if (idx === -1) return;
  const p = state.darknetMarket[idx];
  if (state.balance < p.askPrice) return toast("❌ Недостаточно средств!");
  state.balance -= p.askPrice;
  p.boughtPrice = p.askPrice;
  state.storage.push(p);
  state.darknetMarket.splice(idx, 1);
  state.stats.bought++;
  updateQuestProgress("buy", 1);
  if (!state.hasRoof && !state.staff.includes("lawyer")) {
    state.policeAttention = (state.policeAttention || 0) + 25;
    if (state.policeAttention >= 100) {
      playSound('boom');
      state.balance = Math.max(0, state.balance - 100000);
      state.policeAttention = 0;
      toast("🚨 РЕЙД ПОЛИЦИИ! Штраф 100 000 ₽!");
    }
  }
  playSound('success'); toast(`🕶️ Куплено в DarkNet: ${p.model}`);
  save(); renderAll();
}

function buyPoliceRoof() {
  if (state.hasRoof) return;
  if (state.balance < 300000) return toast("❌ Нужно 300 000 ₽!");
  state.balance -= 300000; state.hasRoof = true; state.policeAttention = 0;
  playSound('success'); toast("🛡️ Крыша куплена!");
  save(); renderAll();
}

function buyRareTitaniumKit() {
  if (state.balance < 45000) return toast("❌ Нужно 45 000 ₽!");
  state.balance -= 45000; state.rareTitaniumParts = (state.rareTitaniumParts || 0) + 1;
  playSound('success'); toast("💎 Куплен комплект Titanium & Sapphire!");
  save(); renderAll();
}

function bankDeposit() {
  if (state.balance <= 0) return toast("❌ Нет денег для вклада!");
  const input = prompt(`Ваш баланс: ${state.balance.toLocaleString()} ₽\nВведите ЛЮБУЮ сумму для вклада:`, String(state.balance));
  if (!input) return;
  const amount = parseInt(input.replace(/\s+/g, ''), 10);
  if (isNaN(amount) || amount <= 0 || amount > state.balance) return toast("❌ Некорректная сумма!");
  state.balance -= amount; state.bankBalance += amount;
  playSound('cash'); toast(`🏦 Вложено в банк: ${amount.toLocaleString()} ₽!`);
  save(); renderAll();
}

function bankWithdraw() {
  if (state.bankBalance <= 0) return toast("❌ Счет пуст!");
  const input = prompt(`На счету: ${state.bankBalance.toLocaleString()} ₽\nСумма для снятия:`, String(state.bankBalance));
  if (!input) return;
  const amount = parseInt(input.replace(/\s+/g, ''), 10);
  if (isNaN(amount) || amount <= 0 || amount > state.bankBalance) return toast("❌ Некорректная сумма!");
  state.bankBalance -= amount; state.balance += amount;
  playSound('cash'); toast(`💵 Снято: ${amount.toLocaleString()} ₽`);
  save(); renderAll();
}

function takeLoan(amount) {
  if (state.loanDebt > 0) return toast("❌ Сначала погасите текущий кредит!");
  const totalDebt = Math.round(amount * 1.2);
  state.balance += amount; state.loanDebt = totalDebt; state.loanPaymentDaily = Math.round(totalDebt / 4);
  playSound('cash'); toast(`🏦 Кредит +${amount.toLocaleString()} ₽ получен!`);
  save(); renderAll();
}

function payLoanEarly() {
  if (state.loanDebt <= 0 || state.balance <= 0) return;
  const pay = Math.min(state.balance, state.loanDebt);
  state.balance -= pay; state.loanDebt -= pay;
  playSound('success'); toast(`💳 Погашено: ${pay.toLocaleString()} ₽`);
  save(); renderAll();
}

function buyStock(sym, buyMax = false) {
  const pr = state.stockPrices[sym];
  if (state.balance < pr) return toast(`❌ Нужно минимум ${pr.toLocaleString()} ₽!`);
  const qty = buyMax ? Math.floor(state.balance / pr) : 1;
  state.balance -= qty * pr;
  state.stocksOwned[sym] = (state.stocksOwned[sym] || 0) + qty;
  playSound('success'); toast(`📈 Куплено ${qty} шт. ${sym}`);
  save(); renderAll();
}

function sellStock(sym, sellAll = false) {
  const owned = state.stocksOwned[sym] || 0;
  if (owned <= 0) return toast("❌ Нет акций в портфеле!");
  const qty = sellAll ? owned : 1;
  state.stocksOwned[sym] -= qty;
  state.balance += qty * state.stockPrices[sym];
  playSound('cash'); toast(`💵 Продано ${qty} шт. ${sym}`);
  save(); renderAll();
}

function tradeMarginLeverage(dir) {
  const input = prompt("Сумма сделки с плечом x5:", "50000");
  if (!input) return;
  const stake = parseInt(input, 10);
  if (isNaN(stake) || stake <= 0 || stake > state.balance) return toast("❌ Некорректная сумма!");
  state.balance -= stake;
  if (Math.random() < 0.55) {
    state.balance += stake * 2;
    playSound('cash'); toast(`🚀 Профит по сделке ${dir} x5: +${(stake * 2).toLocaleString()} ₽!`);
  } else {
    playSound('boom'); toast(`📉 Ликвидация позиции ${dir} x5!`);
  }
  save(); renderAll();
}

function hireStaff(id) {
  const st = HR_STAFF.find(s => s.id === id);
  if (!st || state.staff.includes(id)) return;
  if (state.balance < st.cost) return toast(`❌ Нужно ${st.cost.toLocaleString()} ₽!`);
  state.balance -= st.cost; state.staff.push(id); state.reputation += 20;
  playSound('success'); toast(`👔 Нанят: ${st.name}`);
  save(); renderAll();
}

function fireStaff(id) {
  state.staff = state.staff.filter(x => x !== id);
  toast("👔 Сотрудник уволен."); save(); renderAll();
}

function buyDistrict(dId) {
  const d = DISTRICTS_MAP.find(x => x.id === dId);
  if (!d || state.districts.includes(dId)) return;
  if (state.balance < d.cost) return toast(`❌ Нужно ${d.cost.toLocaleString()} ₽!`);
  state.balance -= d.cost; state.districts.push(dId); state.reputation += 35;
  playSound('cash'); toast(`🗺️ Открыт район: ${d.name}!`);
  save(); renderAll();
}

function rentDistrictBillboard(dId) {
  const d = DISTRICTS_MAP.find(x => x.id === dId);
  if (!d || state.activeBillboards.includes(dId)) return;
  if (state.balance < d.adCost) return toast(`❌ Нужно ${d.adCost.toLocaleString()} ₽!`);
  state.balance -= d.adCost; state.activeBillboards.push(dId);
  generateBuyerOffers();
  playSound('success'); toast(`📢 Билборд в «${d.name}» запущен!`);
  save(); renderAll();
}

function buyUpgrade(upId) {
  const up = SHOP_UPGRADES.find(u => u.id === upId);
  if (!up || state.upgrades.includes(upId)) return;
  if (getCurrentLevelObj().level < up.reqLvl) return toast(`❌ Нужен уровень карьеры #${up.reqLvl}!`);
  if (state.balance < up.cost) return toast(`❌ Нужно ${up.cost.toLocaleString()} ₽!`);
  state.balance -= up.cost; state.upgrades.push(upId); state.reputation += up.repBonus;
  playSound('success'); toast(`🏪 Открыто: ${up.name}!`);
  save(); renderAll();
}

function buyAdvancedBusiness(bId) {
  const biz = ADVANCED_BUSINESS.find(b => b.id === bId);
  if (!biz || state.advancedBusiness.includes(bId)) return;
  if (state.balance < biz.cost) return toast(`❌ Нужно ${biz.cost.toLocaleString()} ₽!`);
  state.balance -= biz.cost; state.advancedBusiness.push(bId); state.reputation += 100;
  playSound('cash'); toast(`🌍 Куплен бизнес: ${biz.name}!`);
  save(); renderAll();
}

function buyLuxuryCar(carId) {
  const car = LUXURY_CARS.find(c => c.id === carId);
  if (!car || state.luxuryGarage.includes(carId)) return;
  if (state.balance < car.cost) return toast(`❌ Нужно ${car.cost.toLocaleString()} ₽!`);
  state.balance -= car.cost; state.luxuryGarage.push(carId); state.reputation += car.repBonus;
  playSound('cash'); toast(`🏎️ Куплен ${car.name}! Особенность активирована!`);
  save(); renderAll();
}

function launchFactory() {
  const name = document.getElementById("brand-name-input")?.value.trim() || "ApexPhone";
  if (state.balance < 500000) return toast("❌ Нужно 500 000 ₽!");
  state.balance -= 500000; state.brandName = name; state.hasFactory = true; state.reputation += 80;
  playSound('cash'); toast(`👑 Завод «${name}» запущен!`);
  save(); renderAll();
}

function produceBrandFlagship() {
  if (!state.hasFactory) return;
  if (state.storage.length >= getMaxStorage()) return toast("❌ Склад переполнен!");
  if (state.balance < 65000) return toast("❌ Нужно 65 000 ₽!");
  state.balance -= 65000;
  const modelTitle = `🚀 ${state.brandName} Ultra (${state.factoryConfig.body})`;
  state.storage.push({
    uid: Date.now() + Math.random(),
    brand: state.brandName, model: modelTitle, specs: `${state.factoryConfig.cpu} • ${state.factoryConfig.camera}`,
    basePrice: 175000, isNew: true, isFake: false, isLocked: false, isGoldTuned: false, hasFullBox: true, caseType: null,
    condition: { screen: true, battery: 100, body: true, camera: true, speaker: true, waterDamage: false },
    askPrice: 175000, boughtPrice: 65000, inspected: true, fullyInspected: true, onSale: false, salePrice: 0
  });
  playSound('success'); toast(`🏭 Выпущен флагман ${modelTitle}!`);
  save(); renderAll();
}

// === КАЗИНО 1xBet (ЛИМИТ ДО 1 000 000 ₽ НА ВСЕХ ИГРАХ) ===
function getCasinoBet() {
  const inp = document.getElementById("casino-bet-input");
  let val = parseInt(inp ? inp.value : 1000, 10);
  return isNaN(val) ? 1000 : Math.max(1000, Math.min(1000000, val));
}
function setBetMultiplier(m) {
  const inp = document.getElementById("casino-bet-input");
  if (inp) inp.value = Math.max(1000, Math.min(1000000, Math.round(getCasinoBet() * m)));
}
function setBetMax() {
  const inp = document.getElementById("casino-bet-input");
  if (inp) inp.value = Math.max(1000, Math.min(1000000, state.balance));
}
function switchCasinoGame(game) {
  playSound('click');
  document.querySelectorAll(".c-tab").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".casino-game-box").forEach(b => b.classList.remove("active"));
  document.getElementById("ctab-btn-" + game)?.classList.add("active");
  document.getElementById("cgame-" + game)?.classList.add("active");
}

function startAviator() {
  if (aviatorActive) return;
  const bet = getCasinoBet();
  if (state.balance < bet) return toast("❌ Недостаточно средств!");
  state.balance -= bet; aviatorBet = bet; aviatorActive = true; aviatorMult = 1.00;
  updateQuestProgress("casino", 1);
  aviatorCrashPoint = 1.15 + Math.random() * 3.8;
  document.getElementById("btn-aviator-start").disabled = true;
  document.getElementById("btn-aviator-cashout").disabled = false;
  document.getElementById("aviator-status").textContent = "✈️ Взлетаем...";
  renderAll();
  aviatorInterval = setInterval(() => {
    aviatorMult += 0.08;
    const mEl = document.getElementById("aviator-mult");
    if (mEl) mEl.textContent = aviatorMult.toFixed(2) + "x";
    if (aviatorMult >= aviatorCrashPoint) {
      clearInterval(aviatorInterval); aviatorActive = false; playSound('boom');
      document.getElementById("btn-aviator-start").disabled = false;
      document.getElementById("btn-aviator-cashout").disabled = true;
      document.getElementById("aviator-status").textContent = `💥 Улетел на ${aviatorMult.toFixed(2)}x!`;
      state.stats.casinoProfit -= aviatorBet;
      save(); renderAll();
    }
  }, 120);
}
function cashoutAviator() {
  if (!aviatorActive) return;
  clearInterval(aviatorInterval); aviatorActive = false;
  const win = Math.round(aviatorBet * aviatorMult);
  state.balance += win; state.stats.casinoProfit += (win - aviatorBet);
  playSound('cash');
  document.getElementById("btn-aviator-start").disabled = false;
  document.getElementById("btn-aviator-cashout").disabled = true;
  document.getElementById("aviator-status").textContent = `✅ Забрали: +${win.toLocaleString()} ₽!`;
  save(); renderAll();
}

function initMinesBoard() {
  const grid = document.getElementById("mines-grid");
  if (!grid) return; grid.innerHTML = "";
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.className = "mine-cell"; cell.textContent = "🪨";
    cell.onclick = () => clickMineCell(i);
    grid.appendChild(cell);
  }
}
function startMines() {
  if (minesActive) return;
  const bet = getCasinoBet();
  if (state.balance < bet) return toast("❌ Недостаточно средств!");
  state.balance -= bet; minesBet = bet; minesActive = true; minesMult = 1.00;
  updateQuestProgress("casino", 1);
  minesRevealed = []; minesBombs = [];
  while (minesBombs.length < 5) {
    const pos = Math.floor(Math.random() * 25);
    if (!minesBombs.includes(pos)) minesBombs.push(pos);
  }
  initMinesBoard();
  document.getElementById("btn-mines-start").disabled = true;
  document.getElementById("btn-mines-cashout").disabled = false;
  document.getElementById("mines-mult").textContent = "1.00x";
  document.getElementById("mines-win-val").textContent = `${bet.toLocaleString()} ₽`;
  save(); renderAll();
}
function clickMineCell(idx) {
  if (!minesActive || minesRevealed.includes(idx)) return;
  const cells = document.querySelectorAll(".mine-cell");
  if (minesBombs.includes(idx)) {
    playSound('boom'); minesActive = false;
    cells[idx].classList.add("revealed-tnt"); cells[idx].textContent = "💥";
    document.getElementById("btn-mines-start").disabled = false;
    document.getElementById("btn-mines-cashout").disabled = true;
    state.stats.casinoProfit -= minesBet;
    toast("💥 Мина!"); save(); renderAll();
  } else {
    playSound('success'); minesRevealed.push(idx);
    cells[idx].classList.add("revealed-gem"); cells[idx].textContent = "💎";
    minesMult = +(minesMult * 1.25).toFixed(2);
    document.getElementById("mines-mult").textContent = minesMult + "x";
    document.getElementById("mines-win-val").textContent = `${Math.round(minesBet * minesMult).toLocaleString()} ₽`;
  }
}
function cashoutMines() {
  if (!minesActive) return;
  minesActive = false;
  const win = Math.round(minesBet * minesMult);
  state.balance += win; state.stats.casinoProfit += (win - minesBet);
  playSound('cash');
  document.getElementById("btn-mines-start").disabled = false;
  document.getElementById("btn-mines-cashout").disabled = true;
  toast(`⛏️ Выигрыш: ${win.toLocaleString()} ₽!`); save(); renderAll();
}

function spinLuckyWheel() {
  const bet = getCasinoBet();
  if (state.balance < bet) return toast("❌ Недостаточно средств!");
  state.balance -= bet; updateQuestProgress("casino", 1);
  const mult = [0, 0.5, 1, 2, 3, 5][Math.floor(Math.random() * 6)];
  const win = Math.round(bet * mult);
  state.balance += win; state.stats.casinoProfit += (win - bet);
  document.getElementById("wheel-result-msg").textContent = `🎡 Сектор ${mult}x! Выигрыш: ${win.toLocaleString()} ₽`;
  playSound(win > 0 ? 'cash' : 'boom'); save(); renderAll();
}
function playDice(c) {
  const bet = getCasinoBet();
  if (state.balance < bet) return toast("❌ Недостаточно средств!");
  state.balance -= bet; updateQuestProgress("casino", 1);
  const roll = Math.floor(Math.random() * 100) + 1;
  const won = (c === 'over' && roll > 50) || (c === 'under' && roll <= 50);
  const win = won ? bet * 2 : 0;
  state.balance += win; state.stats.casinoProfit += (win - bet);
  document.getElementById("dice-result-msg").textContent = `🎲 Выпало ${roll}! ${won ? '+' + win.toLocaleString() + ' ₽' : 'Проигрыш'}`;
  playSound(won ? 'cash' : 'boom'); save(); renderAll();
}
function playCoin(s) {
  const bet = getCasinoBet();
  if (state.balance < bet) return toast("❌ Недостаточно средств!");
  state.balance -= bet; updateQuestProgress("casino", 1);
  const res = Math.random() < 0.5 ? 'head' : 'tail';
  const won = (s === res);
  const win = won ? bet * 2 : 0;
  state.balance += win; state.stats.casinoProfit += (win - bet);
  document.getElementById("coin-result-msg").textContent = `🪙 ${won ? 'Победа +' + win.toLocaleString() + ' ₽' : 'Мимо'}`;
  playSound(won ? 'cash' : 'boom'); save(); renderAll();
}
function playBlackjack() {
  const bet = getCasinoBet();
  if (state.balance < bet) return toast("❌ Недостаточно средств!");
  state.balance -= bet; updateQuestProgress("casino", 1);
  const p = 17 + Math.floor(Math.random() * 5);
  const d = 16 + Math.floor(Math.random() * 6);
  const won = p >= d;
  const win = won ? bet * 2 : 0;
  state.balance += win; state.stats.casinoProfit += (win - bet);
  document.getElementById("bj-result-msg").textContent = `🃏 Вы: ${p} | Дилер: ${d}. ${won ? '+' + win.toLocaleString() + ' ₽!' : 'Мимо'}`;
  playSound(won ? 'cash' : 'boom'); save(); renderAll();
}
function playRps(c) {
  const bet = getCasinoBet();
  if (state.balance < bet) return toast("❌ Недостаточно средств!");
  state.balance -= bet; updateQuestProgress("casino", 1);
  const won = Math.random() < 0.55;
  const win = won ? bet * 2 : 0;
  state.balance += win; state.stats.casinoProfit += (win - bet);
  document.getElementById("rps-result-msg").textContent = won ? `✂️ Победа! +${win.toLocaleString()} ₽` : `✂️ Поражение`;
  playSound(won ? 'cash' : 'boom'); save(); renderAll();
}
function playGuess(n) {
  const bet = getCasinoBet();
  if (state.balance < bet) return toast("❌ Недостаточно средств!");
  state.balance -= bet; updateQuestProgress("casino", 1);
  const sec = Math.floor(Math.random() * 5) + 1;
  const won = (n === sec);
  const win = won ? bet * 4 : 0;
  state.balance += win; state.stats.casinoProfit += (win - bet);
  document.getElementById("guess-result-msg").textContent = `🎯 Число ${sec}. ${won ? '+' + win.toLocaleString() + ' ₽!' : 'Мимо'}`;
  playSound(won ? 'cash' : 'boom'); save(); renderAll();
}
function playPenalty(d) {
  const bet = getCasinoBet();
  if (state.balance < bet) return toast("❌ Недостаточно средств!");
  state.balance -= bet; updateQuestProgress("casino", 1);
  const won = Math.random() < 0.65;
  const win = won ? Math.round(bet * 1.8) : 0;
  state.balance += win; state.stats.casinoProfit += (win - bet);
  document.getElementById("penalty-result-msg").textContent = won ? `⚽ ГОООЛ! +${win.toLocaleString()} ₽` : `⚽ Сейв вратаря!`;
  playSound(won ? 'cash' : 'boom'); save(); renderAll();
}
function spinWesternSlot() {
  const bet = getCasinoBet();
  if (state.balance < bet) return toast("❌ Недостаточно средств!");
  state.balance -= bet; updateQuestProgress("casino", 1);
  const syms = ["🤠", "💰", "💎", "7️⃣", "⭐"];
  const r1 = syms[Math.floor(Math.random() * syms.length)];
  const r2 = syms[Math.floor(Math.random() * syms.length)];
  const r3 = syms[Math.floor(Math.random() * syms.length)];
  document.getElementById("reel-1").textContent = r1;
  document.getElementById("reel-2").textContent = r2;
  document.getElementById("reel-3").textContent = r3;
  let win = 0;
  if (r1 === r2 && r2 === r3) win = bet * 10;
  else if (r1 === r2 || r2 === r3 || r1 === r3) win = Math.round(bet * 2.5);
  state.balance += win; state.stats.casinoProfit += (win - bet);
  document.getElementById("slot-result-msg").textContent = win > 0 ? `🎰 ВЫИГРЫШ +${win.toLocaleString()} ₽!` : `🎰 Крутите еще!`;
  playSound(win > 0 ? 'cash' : 'click'); save(); renderAll();
}

// =========================================================================
// PHONE EMPIRE ULTIMATE V24 — БЛОК В (КВЕСТЫ, КАЛЕНДАРЬ, РЕНДЕР И INIT)
// =========================================================================

function generateQuests() {
  state.quests = [
    { id: "buy", title: "🛒 Закупить 3 смартфона (Рынок / Багаж / Box)", progress: 0, target: 3, reward: 25000, xp: 45, done: false },
    { id: "repair", title: "🔧 Починить или собрать 2 аппарата", progress: 0, target: 2, reward: 30000, xp: 55, done: false },
    { id: "sell", title: "💵 Продать 2 телефона (Бутик или Клиенты)", progress: 0, target: 2, reward: 45000, xp: 65, done: false },
    { id: "casino", title: "🎰 Сыграть 3 раза в Казино 1xBet", progress: 0, target: 3, reward: 20000, xp: 35, done: false }
  ];
}

function updateQuestProgress(type, amount) {
  if (!state.quests) return;
  state.quests.forEach(q => {
    if (q.id === type && !q.done) {
      q.progress = Math.min(q.target, q.progress + amount);
      if (q.progress >= q.target) {
        q.done = true;
        state.balance += q.reward;
        addXp(q.xp || 40);
        playSound('cash');
        toast(`🎯 Задание выполнено: +${q.reward.toLocaleString()} ₽!`);
      }
    }
  });
}

function triggerRandomEvent() {
  const events = [
    { text: "🔥 ЧЕРНАЯ ПЯТНИЦА! Все смартфоны в Бутике улетают со 100% шансом и повышенной выгодой!", type: "bf" },
    { text: "🚀 Крипто-ралли! Акции Apple, NVIDIA и Bitcoin выросли на +15%!", type: "boom" },
    { text: "🕵️‍♂️ Саботаж конкурентов! Попытка обвалить рейтинг вашего Бутика.", type: "sabotage" },
    { text: "🚨 Налоговая проверка торговых точек!", type: "tax", cost: 25000 },
    { text: "💎 Сезон коллекционеров: высокий спрос на аппараты в Фулл-сете с коробкой!", type: "normal" }
  ];
  const ev = events[Math.floor(Math.random() * events.length)];
  state.newsText = ev.text;
  state.isBlackFriday = (ev.type === "bf");

  if (ev.type === "boom") {
    state.stockPrices.APPL = Math.round(state.stockPrices.APPL * 1.15);
    state.stockPrices.NVDA = Math.round(state.stockPrices.NVDA * 1.15);
    state.stockPrices.BTC = Math.round(state.stockPrices.BTC * 1.15);
  }
  if (ev.type === "sabotage") {
    if (state.staff.includes("lawyer") || state.luxuryGarage.includes("gelik") || state.luxuryGarage.includes("phantom")) {
      logMsg("🛡️ Ваш автопарк / Адвокат заблокировали саботаж конкурентов!");
    } else {
      state.boutiqueRating = Math.max(1.0, +(state.boutiqueRating - 0.3).toFixed(2));
      logMsg("😡 Саботаж конкурентов снизил рейтинг бутика на -0.3⭐!");
    }
  }
  if (ev.type === "tax" && !state.staff.includes("lawyer") && !state.luxuryGarage.includes("phantom")) {
    state.balance = Math.max(0, state.balance - ev.cost);
    logMsg(`🚨 Налоговая проверка списала: -${ev.cost.toLocaleString()} ₽`);
  }
}

function addXp(amt) {
  state.xp += amt;
  getCurrentLevelObj();
}

// === ПОЛНЫЙ РЕНДЕР ВСЕХ 16 ВКЛАДОК И КАЛЕНДАРЯ ===
function renderAll() {
  const lvl = getCurrentLevelObj();
  const nextLvl = CAREER_LEVELS[Math.min(49, lvl.level)] || lvl;
  const netWorth = getNetWorth();
  const fin = calculateDailyFinances();
  const carPerks = getCarBonuses();
  const calDate = getGameCalendarDateString();

  // Скрываем старую кнопку VIP-аукциона, если она есть в HTML
  document.querySelectorAll("button[onclick*='triggerAuction']").forEach(btn => {
    btn.style.display = "none";
  });

  // Обновляем лимит ввода в казино до 1 000 000 ₽
  const casinoInp = document.getElementById("casino-bet-input");
  if (casinoInp) casinoInp.max = "1000000";

  // Шапки баланса
  const elDsBal = document.getElementById("ds-balance"); if (elDsBal) elDsBal.textContent = state.balance.toLocaleString();
  const elLockBal = document.getElementById("lock-balance"); if (elLockBal) elLockBal.textContent = state.balance.toLocaleString();
  const elCasinoBal = document.getElementById("casino-balance-txt"); if (elCasinoBal) elCasinoBal.textContent = `${state.balance.toLocaleString()} ₽`;
  const elLockLvl = document.getElementById("lock-level"); if (elLockLvl) elLockLvl.textContent = `#${lvl.level} ${lvl.title}`;

  // 1. ГЛАВНЫЙ ТЕРМИНАЛ + КАЛЕНДАРЬ (#tab-home)
  const elLvlInfo = document.getElementById("level-info");
  if (elLvlInfo) {
    elLvlInfo.innerHTML = `
      Ранг: <b>#${lvl.level}/50 «${lvl.title}»</b> | Капитал: <b style="color:#fbbf24;">${netWorth.toLocaleString()} ₽</b>
      <br><span class="muted" style="font-size:0.78rem;">До ранга «${nextLvl.title}»: нужно ${nextLvl.minCap.toLocaleString()} ₽ | Сложность: <b>${(state.difficulty || 'normal').toUpperCase()}</b> | Репутация: ⭐ <b>${state.reputation}</b></span>
    `;
  }
  const elDailyCost = document.getElementById("ui-daily-cost");
  if (elDailyCost) {
    elDailyCost.innerHTML = `
      📅 Дата календаря: <b style="color:#38bdf8;">${calDate}</b> (Диапазон: 01.01.2020 — 01.01.2030)<br>
      📉 Расходы: <span class="bad">-${fin.totalExpenses.toLocaleString()} ₽/день</span> (Налоги/Аренда: ${fin.taxesAndRent.toLocaleString()} ₽, HR: ${fin.salaries.toLocaleString()} ₽)<br>
      📈 Пассивный доход (Районы + ТЦ + Автопарк + Музей): <span class="ok">+${fin.passiveIncome.toLocaleString()} ₽/день</span>
    `;
  }
  const elNews = document.getElementById("news-ticker-box");
  if (elNews) elNews.textContent = state.newsText;
  const elLogs = document.getElementById("home-logs");
  if (elLogs) {
    elLogs.innerHTML = state.logs.slice(0, 10).map(l => `<li style="margin-bottom:4px;">${l}</li>`).join("");
  }

  // 2. ОПТОВЫЙ РЫНОК (#tab-market) — Бизнес-туры, Багаж 40к, Mystery Box 75к, Контейнер 300к, Контрабанда 180к (Без VIP-аукциона)
  const elMarket = document.getElementById("market-grid");
  if (elMarket) {
    const hasJet = state.luxuryGarage.includes("jet");
    const tourStatus = state.activeTour === "shenzhen"
      ? `<span class="ok">🏮 Вы сейчас в Шэньчжэне (Скидка -28% на рынке и -50% на запчасти!)</span>`
      : (state.activeTour === "dubai"
          ? `<span class="ok">🌴 Вы сейчас в Дубае (В продаже только новые Gold-флагманы и Ретро!)</span>`
          : `<span class="muted">Вы в своем мегаполисе (Скидка от автопарка: -${Math.round(carPerks.marketDisc * 100)}%)</span>`);

    const specialBoxesHtml = `
      <div class="dash-card" style="border-color:#38bdf8; background:rgba(56,189,248,0.1); text-align:center;">
        <h3 style="color:#38bdf8;">✈️ Международные Бизнес-Туры (На 1 день)</h3>
        <p style="font-size:0.8rem; margin:4px 0;">${tourStatus}</p>
        <div class="btn-row" style="margin-top:8px;">
          <button class="btn-primary btn-sm" style="flex:1;" onclick="startBusinessTour('shenzhen')">🏮 Тур в Шэньчжэнь (${hasJet ? 'Бесплатно на Джете' : '120 000 ₽'})</button>
          <button class="btn-gold-sm" style="flex:1;" onclick="startBusinessTour('dubai')">🌴 VIP-Тур в Дубай (${hasJet ? 'Бесплатно на Джете' : '350 000 ₽'})</button>
        </div>
      </div>
      <div class="dash-card" style="border-color:#d4af37; background:rgba(212,175,55,0.12); text-align:center;">
        <h3 style="color:#fbbf24;">🎁 Лотереи, Багаж, Контейнеры и Контрабанда</h3>
        <div class="btn-row" style="margin-top:8px;">
          <button class="btn-secondary btn-sm" style="flex:1; padding:10px;" onclick="buyAirportLuggage()">🧳 Забытый багаж (40к ₽)</button>
          <button class="btn-gold btn-sm" style="flex:1; padding:10px;" onclick="buyMysteryBox()">🎁 Mystery Box (75к ₽)</button>
          <button class="btn-primary btn-sm" style="flex:1; padding:10px;" onclick="buyCustomsContainer()">🛃 Контейнер (300к ₽)</button>
          <button class="btn-danger btn-sm" style="flex:1; padding:10px;" onclick="orderContrabandBatch()">✈️ Контрабанда (180к ₽)</button>
        </div>
      </div>
    `;

    const marketItemsHtml = state.market.map(p => `
      <div class="card">
        <div class="card-top">
          <span class="brand-tag">${p.brand} • ${p.specs} ${p.isRetro ? '• 🏛️ РЕТРО' : ''}</span>
          <span class="cond-badge ${p.isNew ? 'cond-new' : 'cond-used'}">${p.isNew ? '🌟 НОВЫЙ' : '🔄 Б/У'}</span>
        </div>
        <h3 style="margin:4px 0;">${p.model}</h3>
        <p class="muted" style="font-size:0.8rem;">${getConditionSummary(p)}</p>
        <div class="price-box">${p.askPrice.toLocaleString()} ₽ <span class="muted" style="font-size:0.75rem;">(Рынок: ${p.basePrice.toLocaleString()} ₽)</span></div>
        <div class="btn-row" style="margin-top:8px;">
          ${!p.fullyInspected ? `<button class="btn-secondary btn-sm" style="flex:1;" onclick="inspectMarketPhone(${p.uid})">🔎 Осмотр от крышки до платы (${state.upgrades.includes('service') ? '0' : '1 000'} ₽)</button>` : `<span class="ok" style="font-size:0.78rem; align-self:center;">✅ Проверен</span>`}
          <button class="btn-primary btn-sm" style="flex:1;" onclick="buyFromMarket(${p.uid})">🛒 Купить</button>
        </div>
      </div>
    `).join("");

    elMarket.innerHTML = specialBoxesHtml + marketItemsHtml;
  }

  // 3. СКЛАД (#tab-storage) — Фулл-сет с коробкой (+20%), В Зал Славы, Root, Сборка
  const elStorageCap = document.getElementById("storage-cap");
  if (elStorageCap) elStorageCap.textContent = `${state.storage.length}/${getMaxStorage()} (Бонус авто: +${carPerks.storageBonus})`;

  const elStorage = document.getElementById("storage-grid");
  if (elStorage) {
    const buildWidgetHtml = `
      <div class="dash-card" style="border-color:#3b82f6; text-align:center;">
        <h3>🛠️ Цех кастомной сборки смартфонов</h3>
        <p class="muted">Экран (<b>${state.parts.screen}</b>) | АКБ (<b>${state.parts.battery}</b>) | Корпус (<b>${state.parts.body}</b>) | Титан (<b>${state.rareTitaniumParts || 0}</b>)</p>
        <button class="btn-primary btn-sm" style="width:100%; margin-top:8px;" onclick="customBuildPhone()">Собрать смартфон из запчастей</button>
      </div>
    `;

    const storageItemsHtml = state.storage.length === 0
      ? '<p class="muted">Склад пуст. Закупите технику на Рынке или в Аэропорту!</p>'
      : state.storage.map(p => `
        <div class="card">
          <div class="card-top">
            <span class="brand-tag">${p.brand} • ${p.specs} ${p.isRetro ? '• 🏛️ РЕТРО' : ''}</span>
            <span class="cond-badge ${p.isLocked ? 'cond-locked' : (p.isNew ? 'cond-new' : 'cond-used')}">
              ${p.isLocked ? '🔒 iCloud Lock' : (p.isNew ? '🌟 НОВЫЙ' : '🔄 Б/У')}
            </span>
          </div>
          <h3>${p.model}</h3>
          <p class="muted" style="font-size:0.8rem;">${getConditionSummary(p)}</p>
          <p class="muted">Куплен: ${p.boughtPrice.toLocaleString()} ₽ | Оценка: <b style="color:#fbbf24;">${evaluatePhone(p).toLocaleString()} ₽</b></p>
          <div class="btn-row">
            ${!p.inspected ? `<button class="btn-secondary btn-sm" onclick="inspectDevice(${p.uid})">🔍 Диагностика</button>` : ''}
            ${!p.hasFullBox ? `<button class="btn-primary btn-sm" onclick="addFullBoxSet(${p.uid})">📦 Фулл-сет: коробка+чек (4к ₽ -> +20%)</button>` : ''}
            ${p.isRetro ? `<button class="btn-gold-sm" onclick="addToRetroMuseum(${p.uid})">🏛️ В Зал Славы (+3% к продажам)</button>` : ''}
            ${!p.customRom ? `<button class="btn-secondary btn-sm" onclick="flashCustomRom(${p.uid})">💻 Root (+25%)</button>` : ''}
            ${!p.isGoldTuned ? `<button class="btn-gold-sm" onclick="tunePhoneGold(${p.uid})">👑 Gold 24K (20k)</button>` : ''}
            ${!p.caseType ? `<button class="btn-secondary btn-sm" onclick="applyPhoneCase(${p.uid}, 'carbon')">🛡️ Карбон (7k)</button>` : ''}
            <button class="btn-danger btn-sm" onclick="scrapPhoneForParts(${p.uid})">♻️ На доноры</button>
            ${p.onSale
              ? `<button class="btn-danger btn-sm" onclick="removeFromSale(${p.uid})">Снять (${p.salePrice.toLocaleString()} ₽)</button>`
              : `<button class="btn-primary btn-sm" onclick="putOnSale(${p.uid}, 1.3, false)">🏷️ В бутик (+30%)</button>`}
          </div>
        </div>
      `).join("");

    elStorage.innerHTML = buildWidgetHtml + storageItemsHtml;
  }

  // 4. СЕРВИСНАЯ МАСТЕРСКАЯ (#tab-repair)
  const btnUnlocker = document.getElementById("btn-buy-unlocker");
  if (btnUnlocker) {
    btnUnlocker.textContent = state.hasUnlocker ? "✅ Программатор Unlocker установлен" : "Купить Программатор за 50 000 ₽";
    btnUnlocker.disabled = state.hasUnlocker;
  }

  const elParts = document.getElementById("parts-shop");
  if (elParts) {
    const toolsSection = `
      <div class="dash-card" style="border-color:#f59e0b; margin-bottom:10px;">
        <h3 style="color:#fbbf24;">⚙️ Оборудование мастерской</h3>
        <div class="cards-grid" style="margin-top:8px;">
          ${SERVICE_TOOLS.map(t => {
            const owned = state.serviceTools.includes(t.id);
            return `
              <div class="card" style="padding:10px;">
                <div class="card-top"><b>${t.name}</b> ${owned ? '<span class="ok">✅ Установлено</span>' : `<span class="price-box" style="font-size:0.9rem;">${t.cost.toLocaleString()} ₽</span>`}</div>
                <p class="muted" style="font-size:0.78rem;">${t.desc}</p>
                ${!owned ? `<button class="btn-gold btn-sm" style="margin-top:6px; width:100%;" onclick="buyServiceTool('${t.id}')">Купить</button>` : ''}
              </div>
            `;
          }).join("")}
        </div>
      </div>
      <div class="dash-card" style="border-color:#10b981; margin-bottom:10px;">
        <div class="card-top">
          <b>🌱 Эко-переработка изношенных АКБ</b>
          <span class="ok">Накоплено: ${state.usedBatteriesScrap || 0} шт.</span>
        </div>
        <button class="btn-primary btn-sm" style="width:100%; margin-top:6px;" onclick="recycleOldBatteries()">Сдать старые АКБ (по 8 000 ₽/шт.)</button>
      </div>
      <h3 style="margin:10px 0 6px;">🔩 Магазин деталей ${state.activeTour === 'shenzhen' ? '<span class="ok">(Тур Шэньчжэнь: -50%!)</span>' : ''}</h3>
    `;

    const partsItems = Object.keys(PARTS_DB).map(k => {
      const pr = getPartDiscountCost(k);
      return `
        <div class="part-item">
          <span><b>${PARTS_DB[k].name}</b> (Склад: <b>${state.parts[k] || 0} шт.</b>)</span>
          <button class="btn-secondary btn-sm" onclick="buyPart('${k}')">Купить (${pr.toLocaleString()} ₽)</button>
        </div>
      `;
    }).join("");

    elParts.innerHTML = toolsSection + partsItems;
  }

  const elRepair = document.getElementById("repair-grid");
  if (elRepair) {
    elRepair.innerHTML = state.storage.length === 0
      ? '<p class="muted">Нет телефонов на складе.</p>'
      : state.storage.map(p => `
        <div class="card">
          <div class="card-top">
            <h3>${p.model}</h3>
            <span class="cond-badge ${p.isLocked ? 'cond-locked' : 'cond-used'}">${p.isLocked ? '🔒 iCloud Lock' : 'Диагностика'}</span>
          </div>
          <p class="muted">${getConditionSummary(p)}</p>
          <div class="btn-row">
            ${!p.condition.screen ? `<button class="btn-primary btn-sm" onclick="fixPart(${p.uid}, 'screen')">🔧 Экран</button>` : ''}
            ${p.condition.battery < 95 ? `<button class="btn-primary btn-sm" onclick="fixPart(${p.uid}, 'battery')">🔋 АКБ (${p.condition.battery}%)</button>` : ''}
            ${!p.condition.body ? `<button class="btn-primary btn-sm" onclick="fixPart(${p.uid}, 'body')">🛠️ Корпус</button>` : ''}
            ${!p.condition.camera ? `<button class="btn-primary btn-sm" onclick="fixPart(${p.uid}, 'camera')">📷 Камера</button>` : ''}
            ${!p.condition.speaker ? `<button class="btn-primary btn-sm" onclick="fixPart(${p.uid}, 'speaker')">🔊 Динамик</button>` : ''}
            ${p.condition.waterDamage ? `<button class="btn-gold-sm" onclick="fixPart(${p.uid}, 'water')">🌊 Ультразвук</button>` : ''}
            ${p.isLocked ? `<button class="btn-danger btn-sm" onclick="unlockDarkPhone(${p.uid})">🔓 Снять iCloud</button>` : ''}
          </div>
        </div>
      `).join("");
  }

  // 5. ФИРМЕННЫЙ БУТИК (#tab-sales) — Продажа с Расширенной Гарантией (+15%)
  const elSales = document.getElementById("sales-grid");
  if (elSales) {
    const ratingHeader = `
      <div class="dash-card" style="border-color:#d4af37;">
        <div class="card-top">
          <h3>⭐ Рейтинг Бутика: ${state.boutiqueRating} / 5.0</h3>
          <button class="btn-gold-sm" onclick="boostBoutiqueRatingMod()">PR-Очистка (35к ₽)</button>
        </div>
        <p class="muted" style="font-size:0.78rem;">🛡️ Совет: Выставляйте <b>исправные</b> телефоны с «Гарантией 1 год», чтобы получать +15% сверху! Но за брак по гарантии будет штраф.</p>
      </div>
    `;

    const boutiquePhones = state.storage.length === 0
      ? '<p class="muted">На складе нет телефонов для витрины.</p>'
      : state.storage.map(p => {
        const est = evaluatePhone(p);
        return `
          <div class="card">
            <div class="card-top">
              <h3>${p.model}</h3>
              <span class="cond-badge ${p.onSale ? 'cond-new' : 'cond-used'}">${p.onSale ? (p.hasWarranty ? '🛡️ С ГАРАНТИЕЙ' : '🏷️ НА ВИТРИНЕ') : '📦 НА СКЛАДЕ'}</span>
            </div>
            <p class="muted">Оценка: <b>${est.toLocaleString()} ₽</b> | ${getConditionSummary(p)}</p>
            ${p.onSale ? `
              <p class="ok" style="margin:6px 0;">Цена на витрине: <b>${p.salePrice.toLocaleString()} ₽</b> ${p.hasWarranty ? '(Вкл. Гарантию +15%)' : ''}</p>
              <button class="btn-danger btn-sm" style="width:100%;" onclick="removeFromSale(${p.uid})">Снять с витрины</button>
            ` : `
              <div class="btn-row">
                <button class="btn-secondary btn-sm" style="flex:1;" onclick="putOnSale(${p.uid}, 1.15, false)">+15% (${Math.round(est*1.15).toLocaleString()} ₽)</button>
                <button class="btn-primary btn-sm" style="flex:1;" onclick="putOnSale(${p.uid}, 1.30, false)">+30% (${Math.round(est*1.30).toLocaleString()} ₽)</button>
                <button class="btn-gold-sm" style="flex:1;" onclick="putOnSale(${p.uid}, 1.35, true)">🛡️ +35% и Гарантия (+15%)</button>
              </div>
            `}
          </div>
        `;
      }).join("");

    elSales.innerHTML = ratingHeader + boutiquePhones;
  }

  // 6. КЛИЕНТЫ, TRADE-IN И ЛОМБАРД (#tab-chat)
  const elChat = document.getElementById("chat-offers-grid");
  if (elChat) {
    if (state.storage.length > 0 && state.buyerOffers.length === 0) generateBuyerOffers();
    if (!state.tradeInOffer && !state.pawnItem) generateTradeInAndPawn();

    const flashHtml = (state.flashOrder && state.difficulty !== "hard") ? `
      <div class="dash-card" style="border-color:#f59e0b; background:rgba(245,158,11,0.12);">
        <h3 style="color:#fbbf24;">⚡ СРОЧНЫЙ VIP-ЗАКАЗ (<span id="flash-timer-display">${state.flashOrder.timeLeft} сек.</span>)</h3>
        <p class="muted">Нужен аппарат: <b>${state.flashOrder.modelName}</b></p>
        <div class="price-box" style="color:#10b981;">Выплата: ${state.flashOrder.reward.toLocaleString()} ₽</div>
        <button class="btn-gold" style="width:100%; margin-top:8px;" onclick="fulfillFlashOrder()">Продать клиенту</button>
      </div>
    ` : (state.difficulty === "hard" ? `<div class="dash-card" style="border-color:#ef4444;"><p class="muted" style="margin:0; font-size:0.78rem;">💀 Режим ХАРДКОР: халявные срочные VIP-заказы отключены!</p></div>` : '');

    const tradeInHtml = state.tradeInOffer ? `
      <div class="dash-card" style="border-color:#3b82f6;">
        <h3>🔄 Программа Trade-In</h3>
        <p class="muted">Клиент сдает <b>${state.tradeInOffer.brand} ${state.tradeInOffer.model}</b> (Рынок: ${state.tradeInOffer.basePrice.toLocaleString()} ₽)</p>
        <button class="btn-primary btn-sm" style="width:100%; margin-top:6px;" onclick="acceptTradeInDeal()">Выкупить за ${state.tradeInOffer.askCash.toLocaleString()} ₽</button>
      </div>
    ` : '';

    const pawnHtml = state.pawnItem ? `
      <div class="dash-card" style="border-color:#a855f7;">
        <h3 style="color:#c084fc;">🕵️‍♂️ Ломбард: «Оригинал или Паль?»</h3>
        <p class="muted">Несут: <b>${state.pawnItem.brand} ${state.pawnItem.model}</b> за <b>${state.pawnItem.pawnPrice.toLocaleString()} ₽</b></p>
        <p class="muted" style="font-size:0.8rem; color:#fde047;">🔍 Осмотр: «${state.pawnItem.clue}»</p>
        <div class="btn-row" style="margin-top:6px;">
          <button class="btn-gold btn-sm" style="flex:1;" onclick="playPawnMiniGame(true)">Беру! Оригинал</button>
          <button class="btn-danger btn-sm" style="flex:1;" onclick="playPawnMiniGame(false)">Выгнать (Паль)</button>
        </div>
      </div>
    ` : '';

    const offersHtml = state.buyerOffers.length === 0
      ? '<p class="muted">Купите смартфоны на склад, чтобы клиенты начали писать вам.</p>'
      : state.buyerOffers.map(o => `
        <div class="card">
          <div class="card-top">
            <span class="brand-tag">👤 <b>${o.buyerName}</b> • ${o.repairedTag}</span>
            <span class="price-box">${o.offerPrice.toLocaleString()} ₽</span>
          </div>
          <h4 style="margin:6px 0;">Покупает: ${o.phoneModel}</h4>
          <p class="muted">💬 «${o.phrase}» (Ваш бонус к торгу от авто: +${Math.round(carPerks.haggleBoost * 100)}%)</p>
          <div class="btn-row">
            <button class="btn-primary btn-sm" style="flex:1;" onclick="acceptBuyerOffer(${o.id}, false)">💵 Продать (${o.offerPrice.toLocaleString()} ₽)</button>
            <button class="btn-gold-sm" style="flex:1;" onclick="acceptBuyerOffer(${o.id}, true)">🤝 Торг +25% (${Math.round(o.offerPrice*1.25).toLocaleString()} ₽)</button>
          </div>
        </div>
      `).join("");

    elChat.innerHTML = flashHtml + tradeInHtml + pawnHtml + offersHtml;
  }

  // 7. DARKNET (#tab-darknet)
  const elDark = document.getElementById("darknet-grid");
  if (elDark) {
    const darkHeader = `
      <div class="dash-card" style="border-color:#dc2626; background:rgba(127,29,29,0.22);">
        <div class="card-top">
          <h3 style="color:#f87171;">🚨 Внимание полиции: ${state.policeAttention || 0}%</h3>
          ${state.hasRoof ? '<span class="ok">🛡️ КРЫША АКТИВНА</span>' : '<span class="bad">Без прикрытия</span>'}
        </div>
        <div class="btn-row" style="margin-top:8px;">
          ${!state.hasRoof ? `<button class="btn-danger btn-sm" style="flex:1;" onclick="buyPoliceRoof()">🛡️ Купить крышу (300к ₽)</button>` : ''}
          <button class="btn-gold-sm" style="flex:1;" onclick="buyRareTitaniumKit()">💎 Титан/Сапфир корпус (45к ₽)</button>
        </div>
      </div>
    `;
    const darkCards = state.darknetMarket.map(p => `
      <div class="card" style="border-color:#7f1d1d;">
        <div class="card-top">
          <span class="brand-tag">${p.brand} • ${p.specs}</span>
          <span class="cond-badge cond-locked">🔒 iCloud НЕ РАБОЧИЙ</span>
        </div>
        <h3>${p.model}</h3>
        <p class="muted" style="font-size:0.82rem; color:#fca5a5;">
          АКБ ${p.condition.battery}% | Экран: ${p.condition.screen ? '✅ Целый' : '❌ Разбит'} | Плата: ${p.condition.waterDamage ? '🌊 Залит водой' : '✅ Чистая'}
        </p>
        <div class="price-box">${p.askPrice.toLocaleString()} ₽</div>
        <button class="btn-danger btn-sm" style="width:100%; margin-top:8px;" onclick="buyFromDarknet(${p.uid})">🕶️ Выкупить лот</button>
      </div>
    `).join("");
    elDark.innerHTML = darkHeader + darkCards;
  }

  // 8. БИРЖА (#tab-stocks)
  const elStocks = document.getElementById("stocks-grid");
  if (elStocks) {
    const portfolioVal = STOCKS_LIST.reduce((sum, s) => sum + ((state.stocksOwned[s.id] || 0) * (state.stockPrices[s.id] || s.basePrice)), 0);
    const headerStocks = `
      <div class="dash-card" style="border-color:#0284c7; background:rgba(2,132,199,0.14); text-align:center;">
        <p class="muted">Портфель акций и крипты:</p>
        <h2 style="color:#38bdf8; margin:6px 0;">${portfolioVal.toLocaleString()} ₽</h2>
        <div class="btn-row" style="margin-top:8px;">
          <button class="btn-primary btn-sm" style="flex:1;" onclick="tradeMarginLeverage('LONG 📈')">⚡ LONG x5</button>
          <button class="btn-danger btn-sm" style="flex:1;" onclick="tradeMarginLeverage('SHORT 📉')">⚡ SHORT x5</button>
          <button class="btn-secondary btn-sm" style="flex:1;" onclick="fluctuateStocks()">🔄 Обновить</button>
        </div>
      </div>
    `;
    const stocksCards = STOCKS_LIST.map(s => {
      const curPr = state.stockPrices[s.id] || s.basePrice;
      const pct = state.stockChanges[s.id] || 0;
      const owned = state.stocksOwned[s.id] || 0;
      const isUp = pct >= 0;
      return `
        <div class="card">
          <div class="card-top">
            <h3>${s.name}</h3>
            <span class="${isUp ? 'ok' : 'bad'}">${isUp ? '▲ +' : '▼ '}${pct}%</span>
          </div>
          <div class="price-box">${curPr.toLocaleString()} ₽</div>
          <p class="muted" style="margin-top:4px;">В портфеле: <b>${owned} шт.</b> (${(owned * curPr).toLocaleString()} ₽)</p>
          <div class="btn-row">
            <button class="btn-primary btn-sm" style="flex:1;" onclick="buyStock('${s.id}', false)">Купить 1</button>
            <button class="btn-gold-sm" style="flex:1;" onclick="buyStock('${s.id}', true)">На всё</button>
            <button class="btn-danger btn-sm" style="flex:1;" onclick="sellStock('${s.id}', false)">Продать 1</button>
            <button class="btn-secondary btn-sm" style="flex:1;" onclick="sellStock('${s.id}', true)">Всё</button>
          </div>
        </div>
      `;
    }).join("");
    elStocks.innerHTML = headerStocks + stocksCards;
  }

  // 9. HR (#tab-hr)
  const elHr = document.getElementById("hr-grid");
  if (elHr) {
    elHr.innerHTML = `
      <div class="dash-card" style="border-color:#0d9488;">
        <h3>👔 Штат сотрудников (HR)</h3>
        <p class="muted">Зарплатная ведомость: <b class="bad">${fin.salaries.toLocaleString()} ₽ / день</b></p>
      </div>
    ` + HR_STAFF.map(st => {
      const hired = state.staff.includes(st.id);
      return `
        <div class="card">
          <div class="card-top">
            <h3>${st.name}</h3>
            <span class="cond-badge ${hired ? 'cond-new' : 'cond-used'}">${hired ? '✅ В ШТАТЕ' : 'ВАКАНСИЯ'}</span>
          </div>
          <p class="muted">${st.desc}</p>
          <p class="muted" style="margin-top:6px;">Зарплата: <b style="color:#fbbf24;">${st.salary.toLocaleString()} ₽/день</b></p>
          ${hired
            ? `<button class="btn-danger btn-sm" style="margin-top:8px; width:100%;" onclick="fireStaff('${st.id}')">Уволить</button>`
            : `<button class="btn-gold btn-sm" style="margin-top:8px; width:100%;" onclick="hireStaff('${st.id}')">Нанять (${st.cost.toLocaleString()} ₽)</button>`}
        </div>
      `;
    }).join("");
  }

  // 10. КАРТА ГОРОДА (#tab-map)
  const elMap = document.getElementById("map-districts");
  if (elMap) {
    elMap.innerHTML = DISTRICTS_MAP.map(d => {
      const owned = state.districts.includes(d.id);
      const hasAd = state.activeBillboards.includes(d.id);
      return `
        <div class="card" style="${owned ? 'border-color:#10b981;' : ''}">
          <div class="card-top">
            <h3>${d.name}</h3>
            ${owned ? '<span class="ok">👑 ВАШ РАЙОН</span>' : `<span class="price-box">${d.cost.toLocaleString()} ₽</span>`}
          </div>
          <p class="muted">${d.bonus}</p>
          <p class="muted" style="margin-top:6px;">Доход: <b class="ok">+${d.income.toLocaleString()} ₽/д</b> | Налог: <b class="bad">-${d.tax.toLocaleString()} ₽/д</b></p>
          <div class="btn-row" style="margin-top:8px;">
            ${!owned
              ? `<button class="btn-primary btn-sm" style="width:100%;" onclick="buyDistrict('${d.id}')">Открыть район (${d.cost.toLocaleString()} ₽)</button>`
              : (hasAd
                  ? `<span class="ok" style="font-size:0.8rem;">📢 Билборд активен (+8% в чате)</span>`
                  : `<button class="btn-gold-sm" style="width:100%;" onclick="rentDistrictBillboard('${d.id}')">📢 Билборд (${d.adCost.toLocaleString()} ₽)</button>`)}
          </div>
        </div>
      `;
    }).join("");
  }

  // 11. БАНК (#tab-bank)
  const elBankBal = document.getElementById("bank-balance");
  if (elBankBal) elBankBal.textContent = `${state.bankBalance.toLocaleString()} ₽`;
  const elLoan = document.getElementById("loan-status-text");
  if (elLoan) {
    elLoan.innerHTML = state.loanDebt > 0
      ? `<span class="bad">Долг: <b>${state.loanDebt.toLocaleString()} ₽</b> (${state.loanPaymentDaily.toLocaleString()} ₽/день)</span><br><button class="btn-primary btn-sm" style="margin-top:8px; width:100%;" onclick="payLoanEarly()">Погасить кредит</button>`
      : `<span class="ok">У вас нет долгов по кредитам.</span>`;
  }

  // 12. ЗАВОД (#tab-brand)
  const elFactory = document.getElementById("factory-box");
  if (elFactory && state.hasFactory) {
    elFactory.innerHTML = `
      <div class="dash-card" style="border-color:#10b981;">
        <h3 class="ok">👑 Конвейер бренда «${state.brandName}»</h3>
        <p class="muted">Пассивный доход: <b>+150 000 ₽/день</b></p>
        <button class="btn-gold" style="width:100%; margin-top:8px;" onclick="produceBrandFlagship()">🚀 Выпустить флагман ${state.brandName} Ultra (65 000 ₽)</button>
      </div>
    `;
  }

  // 13. КАЛЕНДАРЬ И СОН (#tab-sleep)
  const sleepTab = document.getElementById("tab-sleep");
  if (sleepTab) {
    let calWidget = document.getElementById("full-calendar-widget");
    if (!calWidget) {
      calWidget = document.createElement("div");
      calWidget.id = "full-calendar-widget";
      sleepTab.insertBefore(calWidget, sleepTab.firstChild);
    }
    calWidget.innerHTML = `
      <div class="dash-card" style="border-color:#38bdf8; text-align:center; margin-bottom:12px;">
        <h3 style="color:#38bdf8; margin:0;">📅 Календарь Мегаполиса (2020–2030)</h3>
        <div class="price-box" style="font-size:1.35rem; margin:8px 0;">${calDate}</div>
        <p class="muted" style="margin:0;">Игровой день #${state.day} • Начало эпохи: 01.01.2020 г. • Финал: 01.01.2030 г.</p>
      </div>
    `;
  }

  // 14. БИЗНЕС И АВТОПАРК ИЗ 24 МАШИН С ОСОБЕННОСТЯМИ (#tab-shop)
  const elUpgrades = document.getElementById("upgrades-grid");
  if (elUpgrades) {
    const garageHtml = `
      <div class="dash-card" style="border-color:#fbbf24; background:rgba(251,191,36,0.1);">
        <h3 style="color:#fbbf24;">🏎️ Автопарк и Авиация Магната (24 модели с перками)</h3>
        <p class="muted">Ваши текущие бонусы от автопарка: Торг <b>+${Math.round(carPerks.haggleBoost * 100)}%</b> | Скидка рынка <b>-${Math.round(carPerks.marketDisc * 100)}%</b> | Склад <b>+${carPerks.storageBonus} мест</b> | Доход <b>+${carPerks.passiveIncome.toLocaleString()} ₽/день</b></p>
      </div>
    ` + LUXURY_CARS.map(c => {
      const owned = state.luxuryGarage.includes(c.id);
      return `
        <div class="card" style="${owned ? 'border-color:#fbbf24;' : ''}">
          <div class="card-top">
            <h3>${c.name}</h3>
            ${owned ? '<span class="ok">🔑 В ГАРАЖЕ</span>' : `<span class="price-box">${c.cost.toLocaleString()} ₽</span>`}
          </div>
          <p class="muted" style="color:#fde047; font-size:0.8rem;">✨ Особенность: ${c.desc}</p>
          ${!owned ? `<button class="btn-gold btn-sm" style="margin-top:8px; width:100%;" onclick="buyLuxuryCar('${c.id}')">Купить (${c.cost.toLocaleString()} ₽)</button>` : ''}
        </div>
      `;
    }).join("");

    const corpHtml = `
      <div class="dash-card" style="margin-top:14px; border-color:#a855f7; background:rgba(168,85,247,0.1);">
        <h3 style="color:#c084fc;">🌍 Крупные Корпорации и ТЦ</h3>
      </div>
    ` + ADVANCED_BUSINESS.map(b => {
      const owned = state.advancedBusiness.includes(b.id);
      return `
        <div class="card" style="${owned ? 'border-color:#10b981;' : ''}">
          <div class="card-top">
            <h3>${b.name}</h3>
            ${owned ? '<span class="ok">✅ АКТИВЕН</span>' : `<span class="price-box">${b.cost.toLocaleString()} ₽</span>`}
          </div>
          <p class="muted">${b.desc}</p>
          <p class="muted">Доход: <b class="ok">+${b.profit.toLocaleString()} ₽/д</b> | Налог: <b class="bad">-${b.tax.toLocaleString()} ₽/д</b></p>
          ${!owned ? `<button class="btn-primary btn-sm" style="margin-top:8px; width:100%;" onclick="buyAdvancedBusiness('${b.id}')">Купить (${b.cost.toLocaleString()} ₽)</button>` : ''}
        </div>
      `;
    }).join("");

    const baseUpgradesHtml = `
      <div class="dash-card" style="margin-top:14px; border-color:#3b82f6;">
        <h3>🏪 Розничная сеть</h3>
      </div>
    ` + SHOP_UPGRADES.map(u => {
      const owned = state.upgrades.includes(u.id);
      return `
        <div class="card">
          <div class="card-top">
            <h3>${u.name}</h3>
            ${owned ? '<span class="ok">👑 ОТКРЫТО</span>' : `<span class="price-box">${u.cost.toLocaleString()} ₽</span>`}
          </div>
          <p class="muted">${u.desc} (Требуется уровень #${u.reqLvl})</p>
          ${!owned ? `<button class="btn-secondary btn-sm" style="margin-top:8px; width:100%;" onclick="buyUpgrade('${u.id}')">Открыть (${u.cost.toLocaleString()} ₽)</button>` : ''}
        </div>
      `;
    }).join("");

    elUpgrades.innerHTML = garageHtml + corpHtml + baseUpgradesHtml;
  }

  // 15. ПРОФИЛЬ: PRO ADMIN PANEL, 50 УРОВНЕЙ, ЗАЛ СЛАВЫ И ДОСТИЖЕНИЯ (#tab-profile)
  const profileTab = document.getElementById("tab-profile");
  if (profileTab) {
    let adminBox = document.getElementById("admin-dev-panel");
    if (!adminBox) {
      adminBox = document.createElement("div");
      adminBox.id = "admin-dev-panel";
      profileTab.insertBefore(adminBox, profileTab.firstChild);
    }
    const museumCount = (state.retroMuseum || []).length;
    adminBox.innerHTML = `
      <div class="dash-card" style="border-color:#ef4444; background:#14080c; margin-bottom:10px;">
        <div class="card-top">
          <div>
            <h3 style="color:#f87171; margin:0;">🛠️ PRO ADMIN PANEL</h3>
            <span class="muted" style="font-size:0.72rem;">PHONE FLIPPER • CONTROL CENTER</span>
          </div>
          <button class="btn-danger btn-sm" onclick="openProAdminPanel()">Открыть пульт PRO ADMIN</button>
        </div>
      </div>
      <div class="dash-card" style="border-color:#d4af37; margin-bottom:10px;">
        <h3>👑 Карьера: Уровень #${lvl.level} из 50 — «${lvl.title}»</h3>
        <p class="muted">Общий капитал империи: <b style="color:#fbbf24;">${netWorth.toLocaleString()} ₽</b> | Сложность: <b>${(state.difficulty || 'normal').toUpperCase()}</b></p>
        <button class="btn-secondary btn-sm" style="width:100%; margin-top:6px;" onclick="openDifficultySelector()">⚙️ Сменить сложность игры</button>
      </div>
      <div class="dash-card" style="border-color:#10b981; margin-bottom:10px;">
        <h3>🏛️ Полка коллекционера (Зал Славы Ретро): ${museumCount} экспонатов</h3>
        <p class="muted">Бонус коллекции: <b>+${museumCount * 3}%</b> ко всем продажам и <b>+${(museumCount * 12000).toLocaleString()} ₽/день</b> с билетов</p>
        <p class="muted" style="font-size:0.78rem;">${museumCount > 0 ? state.retroMuseum.map(m => `🏆 ${m.brand} ${m.model}`).join(" • ") : "Пока пусто. Ищите ретро-легенды (Nokia 3310, Sirocco, iPhone 2G, Vertu) и ставьте их в Зал Славы со Склада!"}</p>
      </div>
    `;

    const themeBtnsBox = profileTab.querySelector("button[onclick=\"setWallpaper('gold')\"]")?.parentElement;
    if (themeBtnsBox && !themeBtnsBox.dataset.upgraded) {
      themeBtnsBox.dataset.upgraded = "1";
      themeBtnsBox.innerHTML = `
        <button class="btn-gold-sm" style="flex:1;" onclick="setWallpaper('gold')">👑 Золото</button>
        <button class="btn-secondary btn-sm" style="flex:1;" onclick="setWallpaper('dark')">🌑 Темная</button>
        <button class="btn-primary btn-sm" style="flex:1; background:#0284c7;" onclick="setWallpaper('midnight')">🌌 Полночь</button>
        <button class="btn-primary btn-sm" style="flex:1; background:#db2777;" onclick="setWallpaper('cyber')">⚡ Неон</button>
        <button class="btn-primary btn-sm" style="flex:1; background:#059669;" onclick="setWallpaper('emerald')">💎 Изумруд</button>
      `;
    }
  }

  const elQuests = document.getElementById("quests-list");
  if (elQuests) {
    elQuests.innerHTML = state.quests.map(q => `
      <div class="part-item" style="${q.done ? 'border-color:#10b981;' : ''}">
        <div>
          <b>${q.title}</b>
          <div class="muted" style="font-size:0.78rem;">Награда: +${q.reward.toLocaleString()} ₽</div>
        </div>
        <span class="${q.done ? 'ok' : 'muted'}"><b>${q.progress}/${q.target}</b> ${q.done ? '✅' : ''}</span>
      </div>
    `).join("");
  }

  const elStats = document.getElementById("profile-stats");
  if (elStats) {
    elStats.innerHTML = `
      <li>📅 Дата календаря: <b>${calDate} (День ${state.day})</b></li>
      <li>👑 Ранг карьеры: <b>#${lvl.level}/50 (${lvl.title})</b></li>
      <li>📦 Куплено смартфонов: <b>${state.stats.bought} шт.</b></li>
      <li>🏷️ Продано клиентам и в бутике: <b>${state.stats.sold} шт.</b></li>
      <li>🔧 Отремонтировано и собрано: <b>${state.stats.repaired} шт.</b></li>
      <li>🧳 Вскрыто чемоданов из Аэропорта: <b>${state.stats.luggageOpened || 0} шт.</b></li>
      <li>🎁 Открыто Mystery Box (75к): <b>${state.stats.mysteryOpened || 0} шт.</b></li>
      <li>🛃 Вскрыто контейнеров (300к): <b>${state.stats.containerOpened || 0} шт.</b></li>
      <li>🏎️ Машин в автопарке: <b>${state.luxuryGarage.length} / ${LUXURY_CARS.length}</b></li>
      <li>💵 Чистая прибыль с продаж: <b class="ok">${state.stats.totalProfit.toLocaleString()} ₽</b></li>
      <li>🎰 Профит в Казино (лимит 1 млн): <b class="${state.stats.casinoProfit >= 0 ? 'ok' : 'bad'}">${state.stats.casinoProfit.toLocaleString()} ₽</b></li>
    `;
  }

  const achievements = [
    { name: "Первая сделка", desc: "Продать первый смартфон", unlocked: state.stats.sold >= 1 },
    { name: "Охотник за багажом", desc: "Вскрыть чемодан в Аэропорту", unlocked: (state.stats.luggageOpened || 0) >= 1 },
    { name: "Хранитель истории", desc: "Поставить ретро-телефон в Зал Славы", unlocked: (state.retroMuseum || []).length >= 1 },
    { name: "Таможенный барон", desc: "Вскрыть контейнер за 300 000 ₽", unlocked: (state.stats.containerOpened || 0) >= 1 },
    { name: "Автоколлекционер", desc: "Собрать 5 машин в гараже", unlocked: state.luxuryGarage.length >= 5 },
    { name: "Владелец Гиперкара", desc: "Купить Bugatti, Koenigsegg или Бизнес-Джет", unlocked: state.luxuryGarage.includes("chiron") || state.luxuryGarage.includes("koenigsegg") || state.luxuryGarage.includes("jet") },
    { name: "Корпоративный магнат", desc: "Достичь 25 уровня карьеры", unlocked: lvl.level >= 25 },
    { name: "АБСОЛЮТНАЯ ЛЕГЕНДА", desc: "Достичь 50 уровня карьеры (20 млрд ₽)", unlocked: lvl.level >= 50 }
  ];

  const elAch = document.getElementById("achievements-list");
  if (elAch) {
    elAch.innerHTML = achievements.map(a => `
      <div class="ach-item ${a.unlocked ? 'unlocked' : ''}">
        <div><b>${a.unlocked ? '🏆' : '🔒'} ${a.name}</b><div class="muted" style="font-size:0.78rem;">${a.desc}</div></div>
        <span class="${a.unlocked ? 'ok' : 'muted'}">${a.unlocked ? 'Открыто' : 'Закрыто'}</span>
      </div>
    `).join("");
  }
}

function logMsg(txt) {
  state.logs.unshift(`[${getGameCalendarDateString()}] ${txt}`);
  if (state.logs.length > 35) state.logs.pop();
}

function toast(txt) {
  const box = document.getElementById("toast-box");
  if (!box) return;
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = txt;
  box.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

function hardReset() {
  if (confirm("Полностью сбросить прогресс и начать новую карьеру с 01.01.2020?")) {
    localStorage.removeItem("phoneEmpireUltimateRubV24");
    location.reload();
  }
}

function init() {
  const saved = localStorage.getItem("phoneEmpireUltimateRubV24");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
      state.parts = { ...{ screen: 2, battery: 2, body: 1, camera: 1, speaker: 2 }, ...(parsed.parts || {}) };
      state.stocksOwned = { ...{ APPL: 0, SAMS: 0, XIAO: 0, NVDA: 0, BTC: 0 }, ...(parsed.stocksOwned || {}) };
      state.stockPrices = { ...{ APPL: 220000, SAMS: 140000, XIAO: 85000, NVDA: 420000, BTC: 6850000 }, ...(parsed.stockPrices || {}) };
      state.stats = { ...{ bought: 0, repaired: 0, sold: 0, totalProfit: 0, casinoProfit: 0, mysteryOpened: 0, taxesPaid: 0, containerOpened: 0, luggageOpened: 0 }, ...(parsed.stats || {}) };
    } catch (e) {}
  }

  if (!state.market || state.market.length === 0) generateMarket();
  if (!state.darknetMarket || state.darknetMarket.length === 0) generateDarknet();
  if (!state.quests || state.quests.length === 0) generateQuests();
  if (!state.tradeInOffer && !state.pawnItem) generateTradeInAndPawn();
  if (state.logs.length === 0) logMsg("Старт карьеры! Добро пожаловать в Phone Empire.");

  const pinText = document.getElementById("pin-instruction");
  if (!state.userPin) {
    state.isSettingNewPin = true;
    if (pinText) pinText.innerHTML = "Придумайте ваш <b>новый PIN-код</b> (4 цифры)";
  } else {
    state.isSettingNewPin = false;
    if (pinText) pinText.textContent = "Введите ваш PIN-код";
  }

  showScreen("screen-lock");
  document.body.className = "theme-" + (state.wallpaper || "gold");
  initMinesBoard();
  updateClock();
  if (clockTimerId) clearInterval(clockTimerId);
  clockTimerId = setInterval(updateClock, 1000);
  initBatteryStatus();
  renderAll();
}

function save() {
  localStorage.setItem("phoneEmpireUltimateRubV24", JSON.stringify(state));
}

init();

// =========================================================================
// PHONE EMPIRE ULTIMATE V25 — БЛОК Г (9 НОВЫХ СИСТЕМ: MANSIONS, R&D, DEEPSCAN, EMPIRELINK, ILLUMINATI)
// =========================================================================

const REAL_ESTATE_LIST = [
  { id: "flat", name: "🏢 Квартира-студия в центре", cost: 3500000, repBonus: 40, income: 15000, desc: "Уютная база начинающего предпринимателя." },
  { id: "townhouse", name: "🏡 Загородный Таунхаус", cost: 12000000, repBonus: 120, income: 55000, desc: "Личный кабинет и подземный паркинг." },
  { id: "penthouse", name: "🏙️ Трехуровневый Пентхаус в Сити", cost: 45000000, repBonus: 450, income: 210000, desc: "Панорамный вид на мегаполис и вертолетная площадка." },
  { id: "dubai_villa", name: "🌴 Королевская Вилла на Пальме (Дубай)", cost: 160000000, repBonus: 1500, income: 750000, desc: "Собственный пляж и причал для яхт." },
  { id: "island", name: "🏝️ Частный Остров Магната", cost: 650000000, repBonus: 6500, income: 3200000, desc: "Полная автономия, личный аэропорт и статус властелина мира!" }
];

const SECURITY_TIERS = [
  { id: "alarm", name: "🚨 Лазерная сигнализация Склада", cost: 400000, dailyFee: 5000, power: 25, desc: "Защищает склад от мелких ночных воров." },
  { id: "chop", name: "🛡️ Частная Группа Быстрого Реагирования", cost: 1800000, dailyFee: 18000, power: 35, desc: "Круглосуточная охрана бутиков и складов." },
  { id: "cortezh", name: "🚙 Бронированный Кортеж Телохранителей", cost: 6500000, dailyFee: 45000, power: 40, desc: "100% защита автопарка и бизнеса от рейдов мафии и грабителей!" }
];

const RND_TECH_LIST = [
  { id: "holo", name: "🔮 Голографический 3D-Дисплей", cost: 2500000, priceBoost: 45000, desc: "Флагманы вашего завода стоят на +45 000 ₽ дороже!" },
  { id: "clear_body", name: "💎 Прозрачный Сапфировый Корпус", cost: 5500000, priceBoost: 85000, desc: "Футуристичный дизайн: +85 000 ₽ к цене каждого смартфона завода!" },
  { id: "nuclear_bat", name: "☢️ Нано-алмазная Батарея (Заряд 10 лет)", cost: 14000000, priceBoost: 160000, desc: "Революция энергии: +160 000 ₽ к цене смартфонов завода!" },
  { id: "neuro_chip", name: "🧠 Квантовый ИИ-Нейропроцессор 2030", cost: 35000000, priceBoost: 350000, desc: "Ультимативная мощь: +350 000 ₽ к стоимости каждого флагмана завода!" }
];

const CITY_LAWS = [
  { id: "tax_free", name: "📜 Закон «Налоговые каникулы»", cost: 600000, desc: "Снижает все ежедневные налоги и аренду на 50%!" },
  { id: "subsidy", name: "⚙️ Закон «Гос-субсидии Сервисам»", cost: 850000, desc: "Дополнительная скидка -25% на все запчасти и сборку!" },
  { id: "dark_amnesty", name: "🕶️ Закон «Свободный параллельный импорт»", cost: 1200000, desc: "Полиция полностью игнорирует покупки в DarkNet и контрабанду!" }
];

const ILLUMINATI_ASSETS = [
  { id: "gold_reserve", name: "🪙 Золотой резерв в Альпах (1 тонна)", cost: 100000000, income: 600000, rep: 1200, desc: "Неуязвимый к инфляции золотой актив." },
  { id: "mega_yacht", name: "🛥️ 140-метровая Мега-Яхта «Eclipse»", cost: 320000000, income: 1800000, rep: 3500, desc: "Дворец на воде для закрытых саммитов миллиардеров." },
  { id: "football_club", name: "⚽ Европейский Футбольный Клуб Лиги Чемпионов", cost: 850000000, income: 4800000, rep: 9000, desc: "Доход от телеправ, трансферов и полных стадионов." },
  { id: "space_corp", name: "🚀 Частная Космическая Корпорация", cost: 2500000000, income: 15000000, rep: 25000, desc: "Запуск орбитальных миссий и колоссальный прирост капитала!" }
];

function ensureV25State() {
  if (!Array.isArray(state.realEstate)) state.realEstate = [];
  if (!Array.isArray(state.securityUpgrades)) state.securityUpgrades = [];
  if (!Array.isArray(state.rndTech)) state.rndTech = [];
  if (typeof state.satellitesCount !== "number") state.satellitesCount = 0;
  if (typeof state.postamatsCount !== "number") state.postamatsCount = 0;
  if (typeof state.activeLaw === "undefined") state.activeLaw = null;
  if (!Array.isArray(state.illuminatiAssets)) state.illuminatiAssets = [];
  if (typeof state.crashTestViews !== "number") state.crashTestViews = 0;
}
ensureV25State();

// 1. DEEPSCAN: Восстановление удаленных данных на Б/У телефонах (Шантаж или Награда)
function scanPhoneMemory(uid) {
  playSound('click');
  const p = state.storage.find(x => x.uid === uid);
  if (!p) return;
  if (p.dataScanned) return toast("🔍 Память этого устройства уже была полностью просканирована!");
  const scanCost = 3000;
  if (state.balance < scanCost) return toast(`❌ Лицензия DeepScan стоит ${scanCost.toLocaleString()} ₽!`);

  state.balance -= scanCost;
  p.dataScanned = true;

  const roll = Math.random();
  if (roll < 0.30) {
    toast("📂 Память чиста: найдены только старые мемы и котики.");
  } else if (roll < 0.65) {
    const cryptoReward = Math.floor(25000 + Math.random() * 95000);
    state.balance += cryptoReward;
    playSound('cash');
    toast(`₿ УСПЕХ! В кэше найден seed-ключ забытого криптокошелька: +${cryptoReward.toLocaleString()} ₽!`);
    logMsg(`🔓 DeepScan нашел криптокошелек на ${p.model}: +${cryptoReward.toLocaleString()} ₽`);
  } else {
    const choice = confirm(
      `🕵️‍♂️ СЕКРЕТНЫЙ АРХИВ НА ${p.model}!\nВ удаленных чатах найден компромат на крупного чиновника мегаполиса!\n\n` +
      `Нажмите «ОК», чтобы ПРОДАТЬ компромат журналистам и шантажировать (+120 000 ₽, но -15⭐ репутации).\n` +
      `Нажмите «Отмена», чтобы БЛАГОРОДНО вернуть флешку владельцу (+45 000 ₽ премии и +50⭐ репутации!).`
    );
    if (choice) {
      state.balance += 120000;
      state.reputation = Math.max(0, state.reputation - 15);
      playSound('cash');
      toast("🕶️ Компромат продан прессе за +120 000 ₽!");
    } else {
      state.balance += 45000;
      state.reputation += 50;
      playSound('success');
      toast("🤝 Владелец отблагодарил вас: +45 000 ₽ и +50⭐ к Репутации!");
    }
  }
  save(); renderAll();
}

// 2. КРАШ-ТЕСТЫ ПОД ГИДРАВЛИЧЕСКИМ ПРЕССОМ (Шоу «Выдержит ли?»)
function crashTestPhoneOnCamera(uid) {
  playSound('click');
  const idx = state.storage.findIndex(x => x.uid === uid);
  if (idx === -1) return;
  const p = state.storage[idx];

  if (!confirm(`🔨 Отправить ${p.model} под 100-тонный гидравлический пресс на стриме?\nТелефон будет раздавлен, но вы получите донаты зрителей, хайп и рост рейтинга Бутика!`)) return;

  state.storage.splice(idx, 1);
  const views = Math.floor(150000 + Math.random() * 850000);
  const isLegend = p.model.includes("3310") || p.isGoldTuned;
  const donations = Math.round((p.basePrice * (0.85 + Math.random() * 0.9)) + (isLegend ? 90000 : 25000));

  state.crashTestViews = (state.crashTestViews || 0) + views;
  state.balance += donations;
  state.reputation += 25;
  state.boutiqueRating = Math.min(5.0, +(state.boutiqueRating + 0.12).toFixed(2));

  playSound('boom');
  setTimeout(() => playSound('cash'), 300);
  toast(`💥 ХРУСЬ! Ролик с ${p.model} набрал ${views.toLocaleString()} просмотров! Донаты и реклама: +${donations.toLocaleString()} ₽!`);
  logMsg(`🔨 Краш-тест ${p.model}: +${donations.toLocaleString()} ₽ донатов!`);
  save(); renderAll();
}

// 3. R&D ЛАБОРАТОРИЯ 2030 И ВЫПУСК ФУТУРИСТИЧНЫХ СМАРТФОНОВ
function buyRndTech(techId) {
  ensureV25State();
  const tech = RND_TECH_LIST.find(t => t.id === techId);
  if (!tech || state.rndTech.includes(techId)) return;
  if (state.balance < tech.cost) return toast(`❌ Для исследования нужно ${tech.cost.toLocaleString()} ₽!`);

  state.balance -= tech.cost;
  state.rndTech.push(techId);
  state.reputation += 150;
  playSound('cash');
  toast(`🧬 Открыта технология 2030: ${tech.name}!`);
  save(); renderAll();
}

const _origProduceBrandFlagship = produceBrandFlagship;
produceBrandFlagship = function() {
  ensureV25State();
  if (!state.hasFactory) return toast("❌ Сначала запустите завод!");
  if (state.storage.length >= getMaxStorage()) return toast("❌ Склад переполнен!");
  const cost = 65000;
  if (state.balance < cost) return toast(`❌ Себестоимость выпуска: ${cost.toLocaleString()} ₽!`);
  state.balance -= cost;

  const rndBonus = RND_TECH_LIST.filter(t => state.rndTech.includes(t.id)).reduce((s, t) => s + t.priceBoost, 0);
  const finalBasePrice = 175000 + rndBonus;
  const modelTitle = `🚀 ${state.brandName} ${state.rndTech.length > 0 ? '2030 Cyber ' : 'Ultra '}(${state.factoryConfig.body})`;

  state.storage.push({
    uid: Date.now() + Math.random(),
    brand: state.brandName, model: modelTitle,
    specs: `R&D Tech Lvl.${state.rndTech.length} • ${state.factoryConfig.cpu}`,
    basePrice: finalBasePrice, isNew: true, isFake: false, isLocked: false, isGoldTuned: false, hasFullBox: true, caseType: null,
    condition: { screen: true, battery: 100, body: true, camera: true, speaker: true, waterDamage: false },
    askPrice: finalBasePrice, boughtPrice: cost, inspected: true, fullyInspected: true, onSale: false, salePrice: 0
  });
  playSound('success');
  toast(`🏭 Выпущен ${modelTitle} (Оценка с технологиями R&D: ${finalBasePrice.toLocaleString()} ₽)!`);
  save(); renderAll();
};

// 4. СПУТНИКОВАЯ СВЯЗЬ EMPIRELINK И ПОСТАМАТЫ ПВЗ
function launchEmpireSatellite() {
  ensureV25State();
  const cost = 5000000;
  if (state.balance < cost) return toast(`❌ Запуск спутника EmpireLink на орбиту стоит ${cost.toLocaleString()} ₽!`);
  state.balance -= cost;
  state.satellitesCount++;
  state.reputation += 300;
  playSound('cash');
  toast(`🛰️ Спутник EmpireLink #${state.satellitesCount} выведен на орбиту! Теперь каждый проданный телефон приносит вам абонплату!`);
  save(); renderAll();
}

function buildCityPostamat() {
  ensureV25State();
  const cost = 150000;
  if (state.balance < cost) return toast(`❌ Установка постамата ПВЗ стоит ${cost.toLocaleString()} ₽!`);
  state.balance -= cost;
  state.postamatsCount++;
  state.reputation += 15;
  playSound('success');
  toast(`📦 Постамат ПВЗ #${state.postamatsCount} установлен! Пассивный доход +12 000 ₽/день.`);
  save(); renderAll();
}

// 5. ЛОББИРОВАНИЕ ЗАКОНОВ В МЭРИИ
function lobbyCityLaw(lawId) {
  ensureV25State();
  const law = CITY_LAWS.find(l => l.id === lawId);
  if (!law) return;
  if (state.activeLaw === lawId) return toast("📜 Этот закон уже принят и действует!");
  if (state.balance < law.cost) return toast(`❌ Взнос в предвыборный фонд мэрии: ${law.cost.toLocaleString()} ₽!`);

  state.balance -= law.cost;
  state.activeLaw = lawId;
  if (lawId === "dark_amnesty") state.policeAttention = 0;
  playSound('cash');
  toast(`🏛️ Мэрия приняла ваш закон: «${law.name}»!`);
  save(); renderAll();
}

// 6. ПОКУПКА НЕДВИЖИМОСТИ, ЧОП ОХРАНЫ И АКТИВОВ ИЛЛЮМИНАТОВ
function buyRealEstate(id) {
  ensureV25State();
  const re = REAL_ESTATE_LIST.find(r => r.id === id);
  if (!re || state.realEstate.includes(id)) return;
  if (state.balance < re.cost) return toast(`❌ Нужно ${re.cost.toLocaleString()} ₽!`);
  state.balance -= re.cost;
  state.realEstate.push(id);
  state.reputation += re.repBonus;
  playSound('cash');
  toast(`🏰 Поздравляем с покупкой недвижимости: ${re.name}!`);
  save(); renderAll();
}

function buySecurityTier(id) {
  ensureV25State();
  const sec = SECURITY_TIERS.find(s => s.id === id);
  if (!sec || state.securityUpgrades.includes(id)) return;
  if (state.balance < sec.cost) return toast(`❌ Нужно ${sec.cost.toLocaleString()} ₽!`);
  state.balance -= sec.cost;
  state.securityUpgrades.push(id);
  state.reputation += 35;
  playSound('success');
  toast(`🛡️ Охрана активирована: ${sec.name}!`);
  save(); renderAll();
}

function getSecurityPower() {
  ensureV25State();
  return SECURITY_TIERS.filter(s => state.securityUpgrades.includes(s.id)).reduce((sum, s) => sum + s.power, 0);
}

function buyIlluminatiAsset(id) {
  ensureV25State();
  const asset = ILLUMINATI_ASSETS.find(a => a.id === id);
  if (!asset || state.illuminatiAssets.includes(id)) return;
  if (getNetWorth() < 50000000 && !state.isAdminUnlocked) {
    return toast("🎭 Вход в закрытую ложу открыт только для магнатов с капиталом от 50 000 000 ₽!");
  }
  if (state.balance < asset.cost) return toast(`❌ Нужно ${asset.cost.toLocaleString()} ₽!`);
  state.balance -= asset.cost;
  state.illuminatiAssets.push(id);
  state.reputation += asset.rep;
  playSound('cash');
  toast(`🎭 Приобретен закрытый актив: ${asset.name}!`);
  save(); renderAll();
}

// РАСШИРЕНИЕ ЭКОНОМИКИ, СНА И КАПИТАЛА ПОД ВСЕ 9 СИСТЕМ
const _origGetNetWorth = getNetWorth;
getNetWorth = function() {
  ensureV25State();
  const base = _origGetNetWorth();
  const reVal = REAL_ESTATE_LIST.filter(r => state.realEstate.includes(r.id)).reduce((s, r) => s + r.cost, 0);
  const illVal = ILLUMINATI_ASSETS.filter(a => state.illuminatiAssets.includes(a.id)).reduce((s, a) => s + a.cost, 0);
  const satVal = (state.satellitesCount || 0) * 5000000;
  return base + reVal + illVal + satVal;
};

const _origGetPartDiscountCost = getPartDiscountCost;
getPartDiscountCost = function(key) {
  let pr = _origGetPartDiscountCost(key);
  if (state.activeLaw === "subsidy") pr = Math.round(pr * 0.75);
  return pr;
};

const _origCalculateDailyFinances = calculateDailyFinances;
calculateDailyFinances = function() {
  ensureV25State();
  const baseFin = _origCalculateDailyFinances();

  const secFees = SECURITY_TIERS.filter(s => state.securityUpgrades.includes(s.id)).reduce((sum, s) => sum + s.dailyFee, 0);
  let taxes = baseFin.taxesAndRent;
  if (state.activeLaw === "tax_free") taxes = Math.round(taxes * 0.5);

  const reIncome = REAL_ESTATE_LIST.filter(r => state.realEstate.includes(r.id)).reduce((sum, r) => sum + r.income, 0);
  const postamatIncome = (state.postamatsCount || 0) * 12000;
  const satelliteTariffIncome = (state.satellitesCount || 0) * (Math.max(10, state.stats.sold) * 1500 + 180000);
  const illuminatiIncome = ILLUMINATI_ASSETS.filter(a => state.illuminatiAssets.includes(a.id)).reduce((sum, a) => sum + a.income, 0);

  return {
    taxesAndRent: taxes + secFees,
    salaries: baseFin.salaries,
    totalExpenses: taxes + secFees + baseFin.salaries,
    passiveIncome: baseFin.passiveIncome + reIncome + postamatIncome + satelliteTariffIncome + illuminatiIncome
  };
};

const _origTriggerSleepCycle = triggerSleepCycle;
triggerSleepCycle = function() {
  ensureV25State();
  const canSleep = (state.gameHour >= 21 || state.gameHour < 8);
  _origTriggerSleepCycle();
  if (!canSleep) return;

  if (state.activeLaw === "dark_amnesty") state.policeAttention = 0;

  // Проверка ночного налета мафии, если капитал > 2 млн и нет ЧОП охраны
  if (getNetWorth() > 2000000 && getSecurityPower() < 100) {
    const raidChance = (100 - getSecurityPower()) / 300;
    if (Math.random() < raidChance) {
      const stolen = Math.min(state.balance, Math.round(state.balance * 0.12));
      state.balance -= stolen;
      playSound('boom');
      toast(`🚨 НОЧНОЙ НАЛЕТ ГРАБИТЕЛЕЙ! Украдено ${stolen.toLocaleString()} ₽. Установите ЧОП Охрану в Бизнесе!`);
      logMsg(`🚨 Налет мафии унес -${stolen.toLocaleString()} ₽ (Защита ЧОП: ${getSecurityPower()}%).`);
    }
  }
  save(); renderAll();
};

// ДОРИСОВКА ВСЕХ 9 СИСТЕМ В ПРИЛОЖЕНИЯХ
const _origRenderAll = renderAll;
renderAll = function() {
  ensureV25State();
  _origRenderAll();

  // 1 & 2. Кнопки DeepScan и Краш-теста под прессом на Складе
  const elStorage = document.getElementById("storage-grid");
  if (elStorage && state.storage.length > 0) {
    const cards = elStorage.querySelectorAll(".card");
    cards.forEach((card, idx) => {
      const p = state.storage[idx];
      if (!p) return;
      const btnRow = card.querySelector(".btn-row");
      if (btnRow && !btnRow.dataset.v25) {
        btnRow.dataset.v25 = "1";
        btnRow.insertAdjacentHTML("beforeend", `
          ${!p.dataScanned ? `<button class="btn-secondary btn-sm" style="border-color:#38bdf8; color:#38bdf8;" onclick="scanPhoneMemory(${p.uid})">🔓 DeepScan памяти (3к ₽)</button>` : ''}
          <button class="btn-danger btn-sm" style="background:#7f1d1d;" onclick="crashTestPhoneOnCamera(${p.uid})">🔨 Под пресс на стриме!</button>
        `);
      }
    });
  }

  // 3. Секретная R&D Лаборатория 2030 во вкладке Завода (#tab-brand)
  const brandTab = document.getElementById("tab-brand");
  if (brandTab) {
    let rndBox = document.getElementById("rnd-lab-2030-box");
    if (!rndBox) {
      rndBox = document.createElement("div");
      rndBox.id = "rnd-lab-2030-box";
      brandTab.appendChild(rndBox);
    }
    rndBox.innerHTML = `
      <div class="dash-card" style="margin-top:12px; border-color:#38bdf8; background:rgba(56,189,248,0.1);">
        <h3 style="color:#38bdf8;">🧬 Секретная R&D Лаборатория (Технологии 2030)</h3>
        <p class="muted">Изучайте футуристичные патенты, чтобы смартфоны вашего завода стоили в разы дороже!</p>
      </div>
      <div class="cards-grid">
        ${RND_TECH_LIST.map(t => {
          const researched = state.rndTech.includes(t.id);
          return `
            <div class="card" style="${researched ? 'border-color:#10b981;' : ''}">
              <div class="card-top">
                <b>${t.name}</b>
                ${researched ? '<span class="ok">✅ ИЗУЧЕНО</span>' : `<span class="price-box">${t.cost.toLocaleString()} ₽</span>`}
              </div>
              <p class="muted" style="font-size:0.78rem;">${t.desc}</p>
              ${!researched ? `<button class="btn-primary btn-sm" style="width:100%; margin-top:6px;" onclick="buyRndTech('${t.id}')">Исследовать патент (${t.cost.toLocaleString()} ₽)</button>` : ''}
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  // 4 & 5. Постаматы ПВЗ и Лоббирование Законов в Мэрии во вкладке Города (#tab-map)
  const elMap = document.getElementById("map-districts");
  if (elMap) {
    const cityAddons = `
      <div class="dash-card" style="border-color:#f59e0b; background:rgba(245,158,11,0.1);">
        <div class="card-top">
          <h3 style="color:#fbbf24;">📦 Ваша сеть Постаматов и ПВЗ: ${state.postamatsCount} шт.</h3>
          <span class="ok">+${(state.postamatsCount * 12000).toLocaleString()} ₽/день</span>
        </div>
        <p class="muted">Автоматические терминалы выдачи заказов в районах города.</p>
        <button class="btn-gold btn-sm" style="width:100%; margin-top:6px;" onclick="buildCityPostamat()">➕ Открыть новый Постамат ПВЗ (150 000 ₽)</button>
      </div>
      <div class="dash-card" style="border-color:#a855f7; background:rgba(168,85,247,0.1);">
        <h3 style="color:#c084fc;">🏛️ Лоббирование законов в Мэрии Мегаполиса</h3>
        <p class="muted">Принимайте выгодные указы для вашей империи:</p>
        <div class="btn-row" style="margin-top:8px;">
          ${CITY_LAWS.map(l => {
            const isAct = state.activeLaw === l.id;
            return `<button class="${isAct ? 'btn-gold-sm' : 'btn-secondary btn-sm'}" style="flex:1;" onclick="lobbyCityLaw('${l.id}')">${isAct ? '✅ ' : ''}${l.name} (${l.cost.toLocaleString()} ₽)</button>`;
          }).join("")}
        </div>
      </div>
    `;
    elMap.insertAdjacentHTML("afterbegin", cityAddons);
  }

  // 6, 7 & 8. Особняки, ЧОП Охрана и Спутники EmpireLink во вкладке Бизнеса (#tab-shop)
  const elUpgrades = document.getElementById("upgrades-grid");
  if (elUpgrades) {
    const satIncome = (state.satellitesCount || 0) * (Math.max(10, state.stats.sold) * 1500 + 180000);
    const v25ShopHtml = `
      <div class="dash-card" style="border-color:#38bdf8; background:rgba(56,189,248,0.12);">
        <div class="card-top">
          <h3 style="color:#38bdf8;">🛰️ Орбитальная сеть «EmpireLink»: ${state.satellitesCount} спутников</h3>
          <span class="ok">+${satIncome.toLocaleString()} ₽/день</span>
        </div>
        <p class="muted">Каждый проданный вами смартфон пожизненно платит абонентскую плату вашей сотовой сети!</p>
        <button class="btn-primary btn-sm" style="width:100%; margin-top:6px;" onclick="launchEmpireSatellite()">🚀 Запустить спутник на орбиту (5 000 000 ₽)</button>
      </div>

      <div class="dash-card" style="border-color:#ef4444; background:rgba(239,68,68,0.1);">
        <div class="card-top">
          <h3 style="color:#f87171;">🕶️ Охранное Агентство (ЧОП и Кортеж)</h3>
          <span class="${getSecurityPower() >= 100 ? 'ok' : 'bad'}">Защита: ${getSecurityPower()}%</span>
        </div>
        <p class="muted">Защищает ваш баланс и склад от ночных налетов мафии и грабителей.</p>
        <div class="btn-row" style="margin-top:8px;">
          ${SECURITY_TIERS.map(s => {
            const owned = state.securityUpgrades.includes(s.id);
            return `<button class="${owned ? 'btn-gold-sm' : 'btn-secondary btn-sm'}" style="flex:1;" onclick="buySecurityTier('${s.id}')">${owned ? '🛡️ ' : ''}${s.name} (${s.cost.toLocaleString()} ₽)</button>`;
          }).join("")}
        </div>
      </div>

      <div class="dash-card" style="border-color:#10b981; background:rgba(16,185,129,0.1);">
        <h3 style="color:#10b981;">🏰 Элитная Недвижимость и Особняки Магната</h3>
      </div>
      ${REAL_ESTATE_LIST.map(r => {
        const owned = state.realEstate.includes(r.id);
        return `
          <div class="card" style="${owned ? 'border-color:#10b981;' : ''}">
            <div class="card-top">
              <h3>${r.name}</h3>
              ${owned ? '<span class="ok">🔑 В СОБСТВЕННОСТИ</span>' : `<span class="price-box">${r.cost.toLocaleString()} ₽</span>`}
            </div>
            <p class="muted">${r.desc} | Репутация: <b>+${r.repBonus}⭐</b> | Сдача/Активы: <b class="ok">+${r.income.toLocaleString()} ₽/день</b></p>
            ${!owned ? `<button class="btn-primary btn-sm" style="width:100%; margin-top:6px;" onclick="buyRealEstate('${r.id}')">Приобрести (${r.cost.toLocaleString()} ₽)</button>` : ''}
          </div>
        `;
      }).join("")}
    `;
    elUpgrades.insertAdjacentHTML("afterbegin", v25ShopHtml);
  }

  // 9. Закрытый Клуб Миллиардеров («Остров Иллюминатов») в Профиле (#tab-profile)
  const adminBox = document.getElementById("admin-dev-panel");
  if (adminBox) {
    const illuminatiHtml = `
      <div class="dash-card" style="border-color:#a855f7; background:rgba(88,28,135,0.22); margin-bottom:10px;">
        <h3 style="color:#e879f9;">🎭 Закрытый Клуб Миллиардеров («Остров Иллюминатов»)</h3>
        <p class="muted" style="font-size:0.78rem;">Доступно при капитале от 50 млн ₽. Скупайте вечные мировые активы для быстрого достижения 50 уровня!</p>
        <div class="cards-grid" style="margin-top:8px;">
          ${ILLUMINATI_ASSETS.map(a => {
            const owned = state.illuminatiAssets.includes(a.id);
            return `
              <div class="card" style="padding:10px; ${owned ? 'border-color:#e879f9;' : ''}">
                <div class="card-top">
                  <b>${a.name}</b>
                  ${owned ? '<span class="ok">👑 ВАШ АКТИВ</span>' : `<span class="price-box" style="font-size:0.88rem;">${a.cost.toLocaleString()} ₽</span>`}
                </div>
                <p class="muted" style="font-size:0.76rem;">${a.desc} | Доход: <b class="ok">+${a.income.toLocaleString()} ₽/день</b></p>
                ${!owned ? `<button class="btn-gold btn-sm" style="width:100%; margin-top:6px;" onclick="buyIlluminatiAsset('${a.id}')">Выкупить актив (${a.cost.toLocaleString()} ₽)</button>` : ''}
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
    adminBox.insertAdjacentHTML("beforeend", illuminatiHtml);
  }
};

renderAll();

// =========================================================================
// МОДУЛЬ ОТДЕЛЬНОГО ПРИЛОЖЕНИЯ «КАЛЕНДАРЬ» (2020–2030) НА РАБОЧЕМ СТОЛЕ
// =========================================================================

let calViewOffsetMonths = 0; // Позволяет листать месяцы вперед и назад

function setupStandaloneCalendarApp() {
  // 1. Удаляем старый виджет календаря из вкладки «Сон», если он там был
  const oldSleepCal = document.getElementById("full-calendar-widget");
  if (oldSleepCal) oldSleepCal.remove();

  // 2. Добавляем иконку «📅 Календарь» на рабочий стол смартфона
  const desktopGrid = document.querySelector(".app-grid, .desktop-grid, #screen-desktop .grid") || document.querySelector("[onclick*=\"openApp('sleep')\"]")?.parentElement;
  if (desktopGrid && !document.getElementById("app-icon-calendar")) {
    const sleepIcon = desktopGrid.querySelector("[onclick*=\"openApp('sleep')\"]");
    const calBtn = document.createElement("div");
    calBtn.id = "app-icon-calendar";
    calBtn.className = sleepIcon ? sleepIcon.className : "app-icon";
    calBtn.setAttribute("onclick", "openApp('calendar')");
    calBtn.innerHTML = `
      <div class="icon-box" style="background:linear-gradient(135deg, #0284c7, #1e3a8a); box-shadow:0 4px 12px rgba(2,132,199,0.4);">📅</div>
      <span>Календарь</span>
    `;
    desktopGrid.appendChild(calBtn);
  }

  // 3. Создаем отдельную вкладку #tab-calendar внутри экрана приложений
  const sleepPane = document.getElementById("tab-sleep");
  if (sleepPane && !document.getElementById("tab-calendar")) {
    const calPane = document.createElement("div");
    calPane.id = "tab-calendar";
    calPane.className = "tab-pane";
    sleepPane.parentElement.appendChild(calPane);
  }
}

// Перехватываем openApp, чтобы открывалось приложение «Календарь»
const _origOpenAppCal = openApp;
openApp = function(appId) {
  setupStandaloneCalendarApp();
  if (appId === "calendar") {
    calViewOffsetMonths = 0;
  }
  _origOpenAppCal(appId);
  if (appId === "calendar") {
    const headerEl = document.getElementById("app-title-header");
    if (headerEl) headerEl.textContent = "📅 Календарь Империи (2020–2030)";
    renderStandaloneCalendar();
  }
};

function changeCalendarMonth(delta) {
  playSound('click');
  calViewOffsetMonths += delta;
  renderStandaloneCalendar();
}

function resetCalendarToToday() {
  playSound('click');
  calViewOffsetMonths = 0;
  renderStandaloneCalendar();
}

function renderStandaloneCalendar() {
  setupStandaloneCalendarApp();
  const oldSleepCal = document.getElementById("full-calendar-widget");
  if (oldSleepCal) oldSleepCal.remove();

  const calTab = document.getElementById("tab-calendar");
  if (!calTab) return;

  // Текущая игровая дата (от 01.01.2020)
  const gameDate = new Date(2020, 0, 1);
  gameDate.setDate(gameDate.getDate() + (state.day - 1));
  if (gameDate > new Date(2030, 0, 1)) gameDate.setTime(new Date(2030, 0, 1).getTime());

  // Дата просматриваемого месяца в календаре
  const viewDate = new Date(gameDate.getFullYear(), gameDate.getMonth() + calViewOffsetMonths, 1);
  if (viewDate.getFullYear() < 2020) viewDate.setFullYear(2020, 0, 1);
  if (viewDate.getFullYear() > 2030) viewDate.setFullYear(2030, 0, 1);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  // Вычисляем дни для сетки месяца (Пн - Вс)
  const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7; // 0 = Пн, 6 = Вс
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let daysGridHtml = "";
  for (let i = 0; i < firstDayIndex; i++) {
    daysGridHtml += `<div style="padding:8px; opacity:0.2;"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = (d === gameDate.getDate() && month === gameDate.getMonth() && year === gameDate.getFullYear());
    const isBlackFridayDay = (d % 10 === 0);
    const isExpoDay = (d === 15);

    let bg = "rgba(255,255,255,0.04)";
    let border = "1px solid rgba(255,255,255,0.08)";
    let badge = "";

    if (isToday) {
      bg = "linear-gradient(135deg, #0284c7, #2563eb)";
      border = "2px solid #38bdf8";
      badge = "📍";
    } else if (isBlackFridayDay) {
      border = "1px solid #f59e0b";
      badge = "🔥";
    } else if (isExpoDay) {
      border = "1px solid #10b981";
      badge = "🏆";
    }

    daysGridHtml += `
      <div style="padding:8px 4px; border-radius:8px; background:${bg}; border:${border}; text-align:center; font-size:0.82rem; font-weight:${isToday ? 'bold' : 'normal'}; color:${isToday ? '#fff' : '#e2e8f0'};">
        <div>${d}</div>
        <div style="font-size:0.65rem; height:12px;">${badge}</div>
      </div>
    `;
  }

  const totalDaysDecade = 3653; // Дней с 01.01.2020 по 01.01.2030
  const pctDecade = Math.min(100, ((state.day / totalDaysDecade) * 100)).toFixed(1);
  const fin = calculateDailyFinances();

  calTab.innerHTML = `
    <div class="dash-card" style="border-color:#38bdf8; background:rgba(2,132,199,0.12); text-align:center;">
      <span class="muted" style="font-size:0.75rem;">СЕГОДНЯШНЯЯ ДАТА В МЕГАПОЛИСЕ</span>
      <h2 style="color:#38bdf8; margin:4px 0;">📅 ${getGameCalendarDateString()}</h2>
      <p class="muted" style="margin:0; font-size:0.82rem;">Игровой день #${state.day} • Время: <b>${String(state.gameHour).padStart(2,'0')}:${String(state.gameMinute).padStart(2,'0')}</b></p>
      <div style="background:rgba(255,255,255,0.08); border-radius:99px; height:8px; margin-top:10px; overflow:hidden;">
        <div style="width:${pctDecade}%; height:100%; background:linear-gradient(90deg, #38bdf8, #fbbf24);"></div>
      </div>
      <p class="muted" style="font-size:0.72rem; margin-top:4px;">Прогресс эпохи (2020–2030): <b>${pctDecade}%</b></p>
    </div>

    <div class="card" style="margin-top:10px; padding:12px;">
      <div class="card-top" style="margin-bottom:10px; align-items:center;">
        <button class="btn-secondary btn-sm" onclick="changeCalendarMonth(-1)">◀ Пред.</button>
        <div style="text-align:center;">
          <b style="font-size:1.05rem; color:#fbbf24;">${monthNames[month]} ${year}</b>
          ${calViewOffsetMonths !== 0 ? `<br><span style="font-size:0.7rem; color:#38bdf8; cursor:pointer;" onclick="resetCalendarToToday()">Вернуться к сегодня ↩</span>` : ''}
        </div>
        <button class="btn-secondary btn-sm" onclick="changeCalendarMonth(1)">След. ▶</button>
      </div>

      <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:4px; text-align:center; font-size:0.72rem; color:#94a3b8; margin-bottom:6px; font-weight:bold;">
        <div>ПН</div><div>ВТ</div><div>СР</div><div>ЧТ</div><div>ПТ</div><div style="color:#f87171;">СБ</div><div style="color:#f87171;">ВС</div>
      </div>

      <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:5px;">
        ${daysGridHtml}
      </div>

      <div style="display:flex; justify-content:space-around; font-size:0.72rem; color:#94a3b8; margin-top:10px; padding-top:8px; border-top:1px solid rgba(255,255,255,0.08);">
        <span>📍 Сегодня</span>
        <span>🔥 Распродажа (10, 20, 30)</span>
        <span>🏆 День Инвестора (15)</span>
      </div>
    </div>

    <div class="dash-card" style="margin-top:10px; border-color:#10b981;">
      <h3 style="color:#10b981; margin-top:0;">📊 Финансовое расписание суток (в 21:00)</h3>
      <p class="muted" style="font-size:0.8rem; margin:4px 0;">📈 Ожидаемый пассивный доход: <b class="ok">+${fin.passiveIncome.toLocaleString()} ₽</b></p>
      <p class="muted" style="font-size:0.8rem; margin:4px 0;">📉 Списание налогов, аренды и ЧОП: <b class="bad">-${fin.taxesAndRent.toLocaleString()} ₽</b></p>
      <p class="muted" style="font-size:0.8rem; margin:4px 0;">👔 Выплата зарплат штату HR: <b class="bad">-${fin.salaries.toLocaleString()} ₽</b></p>
    </div>
  `;
}

// Интегрируем обновление календаря в общий рендер
function setupStandaloneCalendarApp() {
  const oldSleepCal = document.getElementById("full-calendar-widget");
  if (oldSleepCal) oldSleepCal.remove();

  const gameDate = new Date(2020, 0, 1);
  gameDate.setDate(gameDate.getDate() + (state.day - 1));
  const dayNum = gameDate.getDate();
  const shortMonths = ["ЯНВ", "ФЕВ", "МАР", "АПР", "МАЙ", "ИЮН", "ИЮЛ", "АВГ", "СЕН", "ОКТ", "НОЯ", "ДЕК"];
  const monthTxt = shortMonths[gameDate.getMonth()];

  const sleepIcon = document.querySelector("[onclick*=\"openApp('sleep')\"]");
  const desktopGrid = sleepIcon ? sleepIcon.parentElement : document.querySelector(".app-grid, .desktop-grid, #screen-desktop .grid");

  if (desktopGrid) {
    let calBtn = document.getElementById("app-icon-calendar");
    if (!calBtn) {
      calBtn = sleepIcon ? sleepIcon.cloneNode(true) : document.createElement("div");
      calBtn.id = "app-icon-calendar";
      calBtn.setAttribute("onclick", "openApp('calendar')");
      desktopGrid.appendChild(calBtn);
    }

    const innerBox = calBtn.querySelector("div, i, .app-icon-box, .icon-box, .icon") || calBtn.firstElementChild;
    const labelSpan = calBtn.querySelector("span, p, small") || calBtn.lastElementChild;

    if (innerBox && innerBox !== labelSpan) {
      innerBox.style.cssText = `
        width: 56px;
        height: 56px;
        margin: 0 auto 6px;
        border-radius: 15px;
        background: linear-gradient(180deg, #ffffff 0%, #e2e8f0 100%);
        box-shadow: 0 6px 15px rgba(0,0,0,0.45), inset 0 1px 1px rgba(255,255,255,0.9);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1.5px solid rgba(212, 175, 55, 0.55);
        position: relative;
      `;
      innerBox.innerHTML = `
        <div style="background: linear-gradient(135deg, #ef4444, #b91c1c); color: #ffffff; font-size: 0.62rem; font-weight: 800; letter-spacing: 0.8px; padding: 3px 0 2px; text-align: center; width: 100%;">
          ${monthTxt}
        </div>
        <div style="flex: 1; display: flex; align-items: center; justify-content: center; color: #0f172a; font-size: 1.35rem; font-weight: 900; font-family: system-ui, sans-serif; line-height: 1;">
          ${dayNum}
        </div>
      `;
      if (labelSpan) labelSpan.textContent = "Календарь";
    } else {
      calBtn.innerHTML = `
        <div style="width:54px; height:54px; margin:0 auto 5px; border-radius:14px; background:linear-gradient(180deg,#fff,#e2e8f0); box-shadow:0 6px 14px rgba(0,0,0,0.45); display:flex; flex-direction:column; overflow:hidden; border:1.5px solid rgba(212,175,55,0.5);">
          <div style="background:linear-gradient(135deg,#ef4444,#b91c1c); color:#fff; font-size:0.6rem; font-weight:800; padding:3px 0;">${monthTxt}</div>
          <div style="flex:1; display:flex; align-items:center; justify-content:center; color:#0f172a; font-size:1.3rem; font-weight:900;">${dayNum}</div>
        </div>
        <span>Календарь</span>
      `;
    }
  }

  const sleepPane = document.getElementById("tab-sleep");
  if (sleepPane && !document.getElementById("tab-calendar")) {
    const calPane = document.createElement("div");
    calPane.id = "tab-calendar";
    calPane.className = "tab-pane";
    sleepPane.parentElement.appendChild(calPane);
  }
}

setupStandaloneCalendarApp();
renderAll();