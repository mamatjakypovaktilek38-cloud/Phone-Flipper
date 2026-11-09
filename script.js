const LEVELS = [
  { level: 1, title: "Новичок", minXp: 0, maxStorage: 5 },
  { level: 2, title: "Перекупщик", minXp: 200, maxStorage: 10 },
  { level: 3, title: "Бизнесмен", minXp: 600, maxStorage: 18 },
  { level: 4, title: "Миллионер", minXp: 1500, maxStorage: 30 },
  { level: 5, title: "Магнат", minXp: 3500, maxStorage: 50 },
  { level: 6, title: "Телефонный король", minXp: 7000, maxStorage: 100 }
];

const PHONE_CATALOG = [
  { brand: "Xiaomi", model: "Redmi Note 12", specs: "6/128GB", basePrice: 28000, minLvl: 1 },
  { brand: "Samsung", model: "Galaxy A54", specs: "8/128GB", basePrice: 45000, minLvl: 1 },
  { brand: "iPhone", model: "iPhone 13", specs: "128GB", basePrice: 75000, minLvl: 1 },
  { brand: "Google Pixel", model: "Pixel 7", specs: "8/128GB", basePrice: 80000, minLvl: 2 },
  { brand: "OnePlus", model: "11R", specs: "8/128GB", basePrice: 85000, minLvl: 2 },
  { brand: "Xiaomi", model: "Xiaomi 13", specs: "8/256GB", basePrice: 95000, minLvl: 2 },
  { brand: "Samsung", model: "Galaxy S23", specs: "8/256GB", basePrice: 110000, minLvl: 3 },
  { brand: "iPhone", model: "iPhone 14 Pro", specs: "256GB", basePrice: 135000, minLvl: 3 },
  { brand: "Samsung", model: "Galaxy S24 Ultra", specs: "12/512GB", basePrice: 160000, minLvl: 4 },
  { brand: "iPhone", model: "iPhone 15 Pro Max", specs: "512GB", basePrice: 175000, minLvl: 4 },
  { brand: "Samsung", model: "Galaxy S25 Ultra", specs: "12/512GB", basePrice: 190000, minLvl: 5 },
  { brand: "iPhone", model: "iPhone 16 Pro", specs: "512GB", basePrice: 205000, minLvl: 5 },
  { brand: "Samsung", model: "Galaxy S26 Ultra", specs: "16/1TB", basePrice: 230000, minLvl: 6 },
  { brand: "iPhone", model: "iPhone 17 Pro Max", specs: "1TB", basePrice: 260000, minLvl: 6 }
];

const PARTS_DB = {
  screen:  { name: "Дисплей", cost: 18000, label: "Экран" },
  battery: { name: "Аккумулятор", cost: 8000, label: "АКБ" },
  body:    { name: "Корпус", cost: 12000, label: "Корпус" },
  camera:  { name: "Камера", cost: 15000, label: "Камера" },
  speaker: { name: "Динамик", cost: 6000, label: "Динамик" }
};

const SHOP_UPGRADES = [
  { id: "kiosk", name: "Островок в ТЦ", cost: 250000, dailyFee: 10000, repBonus: 10, salesBoost: 0.20, reqLvl: 1, desc: "Базовая торговая точка." },
  { id: "service", name: "Сервисный центр", cost: 600000, dailyFee: 25000, repBonus: 20, salesBoost: 0.30, reqLvl: 2, desc: "Авто-диагностика при покупке." },
  { id: "store_app", name: "Бутик Apple & Samsung", cost: 1800000, dailyFee: 60000, repBonus: 50, salesBoost: 0.50, reqLvl: 3, desc: "Привлекает VIP-клиентов." },
  { id: "warehouse", name: "Оптовый склад", cost: 3500000, dailyFee: 120000, repBonus: 80, salesBoost: 0.75, reqLvl: 4, desc: "+20 мест на складе." },
  { id: "empire", name: "Штаб-квартира корпорации", cost: 8000000, dailyFee: 300000, repBonus: 200, salesBoost: 1.20, reqLvl: 5, desc: "Престиж и максимальный охват." }
];

const DISTRICTS_MAP = [
  { id: "d1", name: "Спальный район", tax: 5000, bonus: "Спокойный поток покупателей", cost: 0, unlocked: true },
  { id: "d2", name: "Деловой центр", tax: 30000, bonus: "+30% к скорости продаж", cost: 1500000, unlocked: false },
  { id: "d3", name: "Элитный проспект", tax: 90000, bonus: "Появление VIP-клиентов с наценкой", cost: 5000000, unlocked: false }
];

const HR_STAFF = [
  { id: "tech", name: "Мастер-техник", salary: 35000, cost: 400000, desc: "Бесплатно чинит по 1 смартфону каждое утро." },
  { id: "marketer", name: "Маркетолог", salary: 50000, cost: 750000, desc: "Повышает шанс продажи на витрине до 95%." },
  { id: "lawyer", name: "Корпоративный юрист", salary: 65000, cost: 1200000, desc: "Полностью защищает от штрафов налоговой и полиции." }
];

const STOCKS_LIST = [
  { id: "APPL", name: "Apple Inc.", price: 220000 },
  { id: "SAMS", name: "Samsung Elec.", price: 140000 },
  { id: "BTC", name: "Bitcoin Crypto", price: 2600000 }
];

let state = {
  balance: 50000,
  bankBalance: 0,
  loanDebt: 0,
  loanPaymentDaily: 0,
  xp: 0,
  reputation: 15,
  day: 1,
  gameHour: 8,
  gameMinute: 0,
  timeSpeedMultiplier: 1,
  isAdminUnlocked: false,
  newsText: "Рынок смартфонов стабилен.",
  parts: { screen: 2, battery: 2, body: 1, camera: 1, speaker: 2 },
  market: [],
  darknetMarket: [],
  storage: [],
  buyerOffers: [],
  upgrades: [],
  districts: ["d1"],
  staff: [],
  hasUnlocker: false,
  stocksOwned: { APPL: 0, SAMS: 0, BTC: 0 },
  stockPrices: { APPL: 220000, SAMS: 140000, BTC: 2600000 },
  quests: [],
  brandName: "",
  hasFactory: false,
  storageBonusSlots: 0,
  userPin: "",
  isSettingNewPin: true,
  wallpaper: "gold",
  stats: { bought: 0, repaired: 0, sold: 0, totalProfit: 0, auctionsWon: 0, casinoProfit: 0 },
  logs: []
};

let currentPin = "";

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

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
  if (navigator.vibrate) navigator.vibrate(25);
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    
    if (type === 'click') {
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.start(); osc.stop(audioCtx.currentTime + 0.05);
    } else if (type === 'success') {
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
      osc.start(); osc.stop(audioCtx.currentTime + 0.15);
    } else if (type === 'cash') {
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.setValueAtTime(1200, audioCtx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.start(); osc.stop(audioCtx.currentTime + 0.25);
    } else if (type === 'boom') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      osc.start(); osc.stop(audioCtx.currentTime + 0.3);
    }
  } catch(e) {}
}

function setWallpaper(theme) {
  state.wallpaper = theme;
  document.body.className = "theme-" + theme;
  toast(`🎨 Тема: ${theme}`);
  save();
}

function updateClock() {
  const addMins = state.timeSpeedMultiplier || 1;
  state.gameMinute += addMins; 

  if (state.gameMinute >= 60) {
    state.gameMinute = 0;
    state.gameHour++;
    fluctuateStocks();
    if (state.gameHour >= 24) {
      state.gameHour = 0;
    }
  }

  const hStr = String(state.gameHour).padStart(2, '0');
  const mStr = String(state.gameMinute).padStart(2, '0');
  const timeStr = `${hStr}:${mStr}`;

  const phoneClock = document.getElementById("phone-clock");
  if (phoneClock) phoneClock.textContent = timeStr;
  const lockTimeEl = document.getElementById("lock-time");
  if (lockTimeEl) lockTimeEl.textContent = timeStr;
  const sleepClockEl = document.getElementById("sleep-app-clock");
  if (sleepClockEl) sleepClockEl.textContent = timeStr;

  const calendarEl = document.getElementById("calendar-date-display");
  if (calendarEl) calendarEl.textContent = `${timeStr} | День ${state.day} (${addMins}x)`;
  const lockDateEl = document.getElementById("lock-date");
  if (lockDateEl) lockDateEl.textContent = `День ${state.day} в мегаполисе`;

  const sleepStatusEl = document.getElementById("sleep-status-msg");
  if (sleepStatusEl) {
    if (state.gameHour >= 22 || state.gameHour < 8) {
      sleepStatusEl.textContent = "💤 Ночное время. Можно ложиться спать до 08:00 утра!";
    } else {
      sleepStatusEl.textContent = "⚡ День в разгаре. Спать можно только после 22:00!";
    }
  }

  const screenBg = document.getElementById("phone-screen-bg");
  if (screenBg) {
    if (state.gameHour >= 22 || state.gameHour < 6) {
      screenBg.classList.add("night-mode");
    } else {
      screenBg.classList.remove("night-mode");
    }
  }
}

function fluctuateStocks() {
  if (!state.stockPrices) state.stockPrices = { APPL: 220000, SAMS: 140000, BTC: 2600000 };
  Object.keys(state.stockPrices).forEach(k => {
    const change = 1 + (Math.random() * 0.16 - 0.075);
    state.stockPrices[k] = Math.max(1000, Math.round(state.stockPrices[k] * change));
  });
  const elStocks = document.getElementById("tab-stocks");
  if (elStocks && elStocks.classList.contains("active")) renderAll();
}

function triggerSleepCycle() {
  if (state.gameHour < 22 && state.gameHour >= 8) {
    return toast("❌ Еще рано спать! Ложиться можно только после 22:00.");
  }

  playSound('success');
  state.day++;
  state.gameHour = 8;
  state.gameMinute = 0;

  if (state.bankBalance > 0) {
    const interest = Math.round(state.bankBalance * 0.03);
    state.bankBalance += interest;
    logMsg(`Банк начислил проценты: +${interest} ₽`);
  }
  
  if (state.loanDebt > 0) {
    const pay = Math.min(state.balance, state.loanPaymentDaily || 10000);
    state.balance -= pay; 
    state.loanDebt -= pay;
    if (state.loanDebt < 0) state.loanDebt = 0;
    logMsg(`Выплата по кредиту: -${pay} ₽`);
  }

  if (state.hasFactory) {
    const factoryProfit = 150000;
    state.balance += factoryProfit;
    logMsg(`Завод «${state.brandName}» принес чистую прибыль: +${factoryProfit} ₽`);
  }

  if (state.staff && state.staff.includes("tech")) {
    const broken = state.storage.find(p => !p.condition.screen || p.condition.battery < 80);
    if (broken) {
      broken.condition.screen = true;
      broken.condition.battery = 100;
      state.stats.repaired++;
      logMsg(`🔧 Техник бесплатно починил ${broken.model}!`);
    }
  }

  const totalTax = state.districts.reduce((s, id) => s + DISTRICTS_MAP.find(d => d.id === id).tax, 0);
  const totalFee = SHOP_UPGRADES.filter(u => state.upgrades.includes(u.id)).reduce((s, u) => s + u.dailyFee, 0);
  const staffSalary = HR_STAFF.filter(s => state.staff && state.staff.includes(s.id)).reduce((sum, s) => sum + s.salary, 0);
  const totalCost = totalTax + totalFee + staffSalary;
  state.balance -= totalCost;

  let soldCount = 0;
  const saleChance = (state.staff && state.staff.includes("marketer")) ? 0.95 : 0.75;
  const rest = [];
  state.storage.forEach(p => {
    if (!p.onSale) { rest.push(p); return; }
    if (Math.random() < saleChance) {
      const profit = p.salePrice - p.boughtPrice;
      state.balance += p.salePrice;
      state.stats.sold++;
      state.stats.totalProfit += profit;
      soldCount++;
      updateQuestProgress("sell", 1);
      addXp(35);
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
  
  toast(`🌅 Доброе утро! Наступил День ${state.day}. Продано: ${soldCount} шт.`);
  save(); 
  renderAll();
  closeApp();
}

async function initBatteryStatus() {
  const batteryEl = document.getElementById("ui-battery");
  if (!batteryEl) return;
  if ('getBattery' in navigator) {
    try {
      const battery = await navigator.getBattery();
      batteryEl.textContent = Math.round(battery.level * 100);
      battery.addEventListener('levelchange', () => {
        batteryEl.textContent = Math.round(battery.level * 100);
      });
      return;
    } catch (e) {}
  }
  batteryEl.textContent = "95";
}

function init() {
  const saved = localStorage.getItem("phoneEmpireUltimateRubV4");
  if (saved) {
    state = { ...state, ...JSON.parse(saved) };
  } else {
    generateMarket();
    generateDarknet();
    generateQuests();
    logMsg("Добро пожаловать в Phone Empire.");
  }
  
  if (!state.userPin) {
    state.isSettingNewPin = true;
    document.getElementById("pin-instruction").innerHTML = "Придумайте ваш <b>новый PIN-код</b> (4 цифры)";
  } else {
    state.isSettingNewPin = false;
    document.getElementById("pin-instruction").textContent = "Введите ваш PIN-код";
  }

  setWallpaper(state.wallpaper || "gold");
  initMinesBoard();
  updateClock();
  setInterval(updateClock, 1500);
  initBatteryStatus();
  renderAll();
}

function save() {
  localStorage.setItem("phoneEmpireUltimateRubV4", JSON.stringify(state));
}

function pressPin(d) {
  playSound('click');
  if (currentPin.length < 4) { currentPin += d; updatePinDots(); }
}
function clearPin() { playSound('click'); currentPin = ""; updatePinDots(); }
function updatePinDots() {
  const spans = document.querySelectorAll(".pin-dots span");
  spans.forEach((s, i) => s.classList.toggle("filled", i < currentPin.length));
}

function submitPin() {
  playSound('click');
  if (currentPin.length < 4) return toast("❌ Введите 4 цифры");
  if (state.isSettingNewPin) {
    state.userPin = currentPin;
    state.isSettingNewPin = false;
    save(); playSound('success');
    toast("✅ PIN-код установлен!"); unlockPhone();
  } else {
    if (currentPin === state.userPin) {
      playSound('success'); unlockPhone();
    } else {
      toast("❌ Неверный PIN-код!"); setTimeout(clearPin, 400);
    }
  }
}

function resetPinWithFee() {
  playSound('click');
  const resetFee = 10000;
  if (state.balance < resetFee) return toast(`❌ Нужно ${resetFee} ₽ для сброса.`);
  if (confirm(`Экстренный сброс пароля стоит ${resetFee} ₽. Списать?`)) {
    state.balance -= resetFee;
    state.isSettingNewPin = true; currentPin = ""; updatePinDots();
    document.getElementById("pin-instruction").innerHTML = "Введите <b>новый PIN-код</b>";
    toast(`💸 Списано ${resetFee} ₽. Придумайте новый пароль.`);
    save(); renderAll();
  }
}

function unlockPhone() {
  document.getElementById("screen-lock").classList.remove("active-screen");
  document.getElementById("screen-desktop").classList.add("active-screen");
  currentPin = ""; updatePinDots(); toast("🔓 Система разблокирована"); renderAll();
}

function lockPhone() {
  playSound('click');
  document.getElementById("screen-app").classList.remove("active-screen");
  document.getElementById("screen-desktop").classList.remove("active-screen");
  document.getElementById("screen-lock").classList.add("active-screen");
}

function openApp(appId) {
  playSound('click');
  document.querySelectorAll(".tab-pane").forEach(el => el.classList.remove("active"));
  const tab = document.getElementById("tab-" + appId);
  if (tab) tab.classList.add("active");

  const titles = {
    home: "Главный терминал", market: "Оптовый рынок", storage: "Склад и Тюнинг",
    repair: "Сервисный центр", sales: "Фирменный бутик", chat: "Торг с клиентами",
    darknet: "Подпольный DarkNet", casino: "Казино 1xEmpire", stocks: "Биржа и Крипта",
    hr: "HR и Сотрудники", map: "Карта мегаполиса", bank: "Швейцарский банк",
    brand: "Собственный завод", sleep: "Режим Сна", shop: "Развитие бизнеса",
    profile: "Профиль и Ачивки"
  };
  document.getElementById("app-title-header").textContent = titles[appId] || "Приложение";
  document.getElementById("screen-desktop").classList.remove("active-screen");
  document.getElementById("screen-app").classList.add("active-screen");
  if (appId === 'chat' && state.buyerOffers.length === 0) generateBuyerOffers();
  if (appId === 'darknet' && state.darknetMarket.length === 0) generateDarknet();
  renderAll();
}

function closeApp() {
  playSound('click');
  document.getElementById("screen-app").classList.remove("active-screen");
  document.getElementById("screen-desktop").classList.add("active-screen");
}

// === АДМИН-ПАНЕЛЬ РАЗРАБОТЧИКА (Код: flipper_1) ===
function checkAdminAccess() {
  if (state.isAdminUnlocked) {
    return true;
  }
  const code = prompt("Введите секретный код разработчика:");
  if (code === "flipper_1") {
    state.isAdminUnlocked = true;
    toast("🔓 Режим разработчика активирован!");
    save();
    renderAll();
    return true;
  } else if (code !== null) {
    toast("❌ Неверный код разработчика!");
  }
  return false;
}

function adminChangeTimeSpeed() {
  if (!checkAdminAccess()) return;
  const speed = prompt("Введите скорость времени (от 1 до 20):", String(state.timeSpeedMultiplier || 1));
  const val = parseInt(speed, 10);
  if (!isNaN(val) && val >= 1 && val <= 20) {
    state.timeSpeedMultiplier = val;
    toast(`⚡ Скорость времени изменена на ${val}x`);
    save();
    renderAll();
  } else {
    toast("❌ Введите число от 1 до 20!");
  }
}

function adminAddMoney() {
  if (!checkAdminAccess()) return;
  const sum = prompt("Сколько добавить на баланс (₽):", "1000000");
  const val = parseInt(sum, 10);
  if (!isNaN(val)) {
    state.balance += val;
    toast(`💰 Начислено ${val.toLocaleString()} ₽!`);
    save();
    renderAll();
  }
}

function adminSpawnPhone() {
  if (!checkAdminAccess()) return;
  if (state.storage.length >= getMaxStorage()) return toast("❌ Склад переполнен!");
  
  const t = PHONE_CATALOG[PHONE_CATALOG.length - 1]; 
  state.storage.push({
    uid: Date.now() + Math.random(),
    brand: t.brand,
    model: "👑 ADMIN " + t.model,
    specs: t.specs,
    basePrice: t.basePrice,
    isNew: true,
    isLocked: false,
    isGoldTuned: true,
    condition: { screen: true, battery: 100, body: true, camera: true, speaker: true },
    askPrice: t.basePrice,
    boughtPrice: 100,
    inspected: true,
    onSale: false,
    salePrice: 0
  });
  toast("📱 Админ-телефон (Gold 24K) добавлен на склад!");
  save();
  renderAll();
}

// === КАЗИНО (Лимиты 1000 - 50000 ₽) ===
function getCasinoBet() {
  const inp = document.getElementById("casino-bet-input");
  let val = parseInt(inp ? inp.value : 1000, 10);
  if (isNaN(val) || val < 1000) val = 1000;
  if (val > 50000) val = 50000;
  return val;
}
function setBetMultiplier(m) {
  playSound('click');
  const inp = document.getElementById("casino-bet-input");
  if (!inp) return;
  let newVal = Math.round(getCasinoBet() * m);
  newVal = Math.max(1000, Math.min(50000, Math.min(state.balance, newVal)));
  inp.value = newVal;
}
function setBetMax() {
  playSound('click');
  const inp = document.getElementById("casino-bet-input");
  if (inp) inp.value = Math.max(1000, Math.min(50000, state.balance));
}

function switchCasinoGame(game) {
  playSound('click');
  document.querySelectorAll(".c-tab").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".casino-game-box").forEach(b => b.classList.remove("active"));
  document.getElementById("ctab-btn-" + game).classList.add("active");
  document.getElementById("cgame-" + game).classList.add("active");
}

function startAviator() {
  if (aviatorActive) return;
  const bet = getCasinoBet();
  if (state.balance < bet) return toast("❌ Недостаточно денег для ставки!");

  state.balance -= bet;
  aviatorBet = bet;
  aviatorActive = true;
  aviatorMult = 1.00;
  
  const r = Math.random();
  aviatorCrashPoint = r < 0.25 ? 1.05 + Math.random() * 0.3 : (r < 0.8 ? 1.4 + Math.random() * 2.5 : 4.0 + Math.random() * 8.0);

  document.getElementById("btn-aviator-start").disabled = true;
  document.getElementById("btn-aviator-cashout").disabled = false;
  document.getElementById("aviator-status").textContent = "✈️ Набирает высоту...";
  document.getElementById("aviator-plane").style.transform = "translate(0px, 0px)";
  renderAll();

  aviatorInterval = setInterval(() => {
    aviatorMult += 0.06 + (aviatorMult * 0.03);
    const multEl = document.getElementById("aviator-mult");
    const planeEl = document.getElementById("aviator-plane");
    if (multEl) multEl.textContent = aviatorMult.toFixed(2) + "x";
    if (planeEl) planeEl.style.transform = `translate(${Math.min(80, (aviatorMult - 1) * 20)}px, -${Math.min(40, (aviatorMult - 1) * 12)}px)`;

    if (aviatorMult >= aviatorCrashPoint) {
      clearInterval(aviatorInterval);
      aviatorActive = false;
      playSound('boom');
      if (multEl) multEl.style.color = "#ef4444";
      document.getElementById("aviator-status").textContent = `💥 Улетел на ${aviatorMult.toFixed(2)}x! Ставка сгорела.`;
      document.getElementById("btn-aviator-start").disabled = false;
      document.getElementById("btn-aviator-cashout").disabled = true;
      state.stats.casinoProfit -= aviatorBet;
      save(); renderAll();
      setTimeout(() => { if (multEl) multEl.style.color = "#fbbf24"; }, 1200);
    }
  }, 120);
}

function cashoutAviator() {
  if (!aviatorActive) return;
  clearInterval(aviatorInterval);
  aviatorActive = false;
  const win = Math.round(aviatorBet * aviatorMult);
  state.balance += win;
  state.stats.casinoProfit += (win - aviatorBet);
  playSound('cash');
  document.getElementById("aviator-status").textContent = `✅ Вы забрали ${win} ₽ (${aviatorMult.toFixed(2)}x)!`;
  document.getElementById("btn-aviator-start").disabled = false;
  document.getElementById("btn-aviator-cashout").disabled = true;
  toast(`🎰 Выигрыш в Самолетике: +${win} ₽!`);
  save(); renderAll();
}

function initMinesBoard() {
  const grid = document.getElementById("mines-grid");
  if (!grid) return;
  grid.innerHTML = "";
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.className = "mine-cell";
    cell.textContent = "🪨";
    cell.onclick = () => clickMineCell(i);
    grid.appendChild(cell);
  }
}

function startMines() {
  if (minesActive) return;
  const bet = getCasinoBet();
  if (state.balance < bet) return toast("❌ Недостаточно средств!");

  state.balance -= bet;
  minesBet = bet;
  minesActive = true;
  minesMult = 1.00;
  minesRevealed = [];
  minesBombs = [];

  while (minesBombs.length < 5) {
    const pos = Math.floor(Math.random() * 25);
    if (!minesBombs.includes(pos)) minesBombs.push(pos);
  }

  initMinesBoard();
  document.getElementById("btn-mines-start").disabled = true;
  document.getElementById("btn-mines-cashout").disabled = false;
  document.getElementById("mines-mult").textContent = "1.00x";
  document.getElementById("mines-win-val").textContent = `${bet} ₽`;
  playSound('click');
  save(); renderAll();
}

function clickMineCell(idx) {
  if (!minesActive || minesRevealed.includes(idx)) return;
  const cells = document.querySelectorAll(".mine-cell");
  
  if (minesBombs.includes(idx)) {
    playSound('boom');
    minesActive = false;
    cells[idx].classList.add("revealed-tnt");
    cells[idx].textContent = "🧨";
    minesBombs.forEach(b => {
      cells[b].classList.add("revealed-tnt");
      cells[b].textContent = "💥";
    });
    document.getElementById("btn-mines-start").disabled = false;
    document.getElementById("btn-mines-cashout").disabled = true;
    state.stats.casinoProfit -= minesBet;
    toast("💥 Вы наткнулись на TNT! Руда потеряна.");
    save(); renderAll();
  } else {
    playSound('success');
    minesRevealed.push(idx);
    cells[idx].classList.add("revealed-gem");
    cells[idx].textContent = Math.random() > 0.5 ? "💎" : "🟢";
    minesMult = +(minesMult * 1.25).toFixed(2);
    const currentWin = Math.round(minesBet * minesMult);
    document.getElementById("mines-mult").textContent = minesMult + "x";
    document.getElementById("mines-win-val").textContent = `${currentWin} ₽`;
  }
}

function cashoutMines() {
  if (!minesActive) return;
  minesActive = false;
  const win = Math.round(minesBet * minesMult);
  state.balance += win;
  state.stats.casinoProfit += (win - minesBet);
  playSound('cash');
  document.getElementById("btn-mines-start").disabled = false;
  document.getElementById("btn-mines-cashout").disabled = true;
  toast(`⛏️ Алмазы проданы за ${win} ₽!`);
  save(); renderAll();
}

function spinWesternSlot() {
  const bet = getCasinoBet();
  if (state.balance < bet) return toast("❌ Недостаточно средств!");
  state.balance -= bet;
  playSound('click');

  const symbols = ["🤠", "💰", "🔫", "🐎", "🥃", "⭐"];
  const r1 = symbols[Math.floor(Math.random() * symbols.length)];
  const r2 = symbols[Math.floor(Math.random() * symbols.length)];
  const r3 = symbols[Math.floor(Math.random() * symbols.length)];

  document.getElementById("reel-1").textContent = "🔄";
  document.getElementById("reel-2").textContent = "🔄";
  document.getElementById("reel-3").textContent = "🔄";

  setTimeout(() => {
    document.getElementById("reel-1").textContent = r1;
    document.getElementById("reel-2").textContent = r2;
    document.getElementById("reel-3").textContent = r3;

    let win = 0;
    const msgEl = document.getElementById("slot-result-msg");
    if (r1 === r2 && r2 === r3) {
      win = bet * 10;
      playSound('cash');
      msgEl.textContent = `🤠 ДЖЕКПОТ ДИКОГО ЗАПАДА! +${win} ₽!`;
    } else if (r1 === r2 || r2 === r3 || r1 === r3) {
      win = Math.round(bet * 2.5);
      playSound('success');
      msgEl.textContent = `🔫 Комбо из 2 символов! Выигрыш: +${win} ₽`;
    } else {
      msgEl.textContent = `Мимо! Попробуй еще раз.`;
    }

    state.balance += win;
    state.stats.casinoProfit += (win - bet);
    save(); renderAll();
  }, 350);
}

// === МЕССЕНДЖЕР И ТОРГ ===
function generateBuyerOffers() {
  state.buyerOffers = [];
  if (state.storage.length === 0) return renderAll();

  const names = ["Азамат", "Данияр", "Елена VIP", "Тимур Перекуп", "Руслан"];
  const phrases = [
    "Брат, отдай по-братски сейчас наличкой!",
    "Срочно ищу эту модель, заберу без проверок.",
    "Куплю прямо сейчас, если сойдемся по цене!"
  ];

  state.storage.slice(0, 4).forEach(p => {
    const val = evaluatePhone(p);
    const offerPrice = Math.round(val * (1.1 + Math.random() * 0.35));
    state.buyerOffers.push({
      id: Date.now() + Math.random(),
      phoneUid: p.uid,
      phoneModel: p.model,
      buyerName: names[Math.floor(Math.random() * names.length)],
      phrase: phrases[Math.floor(Math.random() * phrases.length)],
      offerPrice: offerPrice
    });
  });
  renderAll();
}

function acceptBuyerOffer(offerId, isHaggle) {
  const idx = state.buyerOffers.findIndex(o => o.id === offerId);
  if (idx === -1) return;
  const offer = state.buyerOffers[idx];
  const pIdx = state.storage.findIndex(p => p.uid === offer.phoneUid);
  if (pIdx === -1) {
    state.buyerOffers.splice(idx, 1);
    return renderAll();
  }
  const phone = state.storage[pIdx];

  if (phone.isLocked) {
    if (state.staff && state.staff.includes("lawyer")) {
      toast("⚖️ Юрист отбил претензии полиции за криминальный телефон!");
    } else {
      playSound('boom');
      state.balance = Math.max(0, state.balance - 50000);
      toast("🚨 ПОЛИЦИЯ! Попытка сбыта заблокированного телефона! Штраф 50 000 ₽");
      state.buyerOffers.splice(idx, 1);
      save(); return renderAll();
    }
  }

  let finalPrice = offer.offerPrice;
  if (isHaggle) {
    if (Math.random() < 0.5) {
      finalPrice = Math.round(finalPrice * 1.25);
      toast(`🤝 Торг удался! Клиент согласился на ${finalPrice} ₽!`);
    } else {
      playSound('click');
      toast("😡 Клиент отказался от наценки и ушел!");
      state.buyerOffers.splice(idx, 1);
      save(); return renderAll();
    }
  }

  state.balance += finalPrice;
  state.stats.sold++;
  state.stats.totalProfit += (finalPrice - phone.boughtPrice);
  state.storage.splice(pIdx, 1);
  state.buyerOffers.splice(idx, 1);
  updateQuestProgress("sell", 1);
  addXp(40);
  playSound('cash');
  if (!isHaggle) toast(`💵 Сделка в чате закрыта за ${finalPrice} ₽!`);
  save(); renderAll();
}

// === ДАРКНЕТ И РАЗБЛОКИРОВКА ===
function generateDarknet() {
  state.darknetMarket = [];
  for (let i = 0; i < 4; i++) {
    const t = PHONE_CATALOG[Math.floor(Math.random() * PHONE_CATALOG.length)];
    const darkPrice = Math.round(t.basePrice * 0.38);
    state.darknetMarket.push({
      uid: Date.now() + Math.random() + i,
      brand: t.brand, model: t.model, specs: t.specs, basePrice: t.basePrice,
      isNew: false,
      isLocked: true,
      isGoldTuned: false,
      condition: { screen: true, battery: 90, body: true, camera: true, speaker: true },
      askPrice: darkPrice, boughtPrice: 0, inspected: true, onSale: false, salePrice: 0
    });
  }
  renderAll();
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
  playSound('success');
  toast("🕶️ Теневой аппарат на складе. Разблокируйте его в Сервисе!");
  save(); renderAll();
}

function buyUnlocker() {
  playSound('click');
  if (state.hasUnlocker) return toast("✅ Программатор уже куплен!");
  if (state.balance < 50000) return toast("❌ Нужно 50 000 ₽");
  state.balance -= 50000;
  state.hasUnlocker = true;
  playSound('success');
  toast("🔓 Программатор Unlocker установлен в Сервис!");
  save(); renderAll();
}

function unlockDarkPhone(uid) {
  if (!state.hasUnlocker) return toast("❌ Сначала купите Программатор в Сервисе (50 000 ₽)!");
  const p = state.storage.find(x => x.uid === uid);
  if (!p) return;
  p.isLocked = false;
  playSound('success');
  toast("✅ Защита снята! Теперь смартфон полностью легален.");
  save(); renderAll();
}

// === VIP-ТЮНИНГ 24K GOLD ===
function tunePhoneGold(uid) {
  const p = state.storage.find(x => x.uid === uid);
  if (!p || p.isGoldTuned) return;
  const cost = 15000;
  if (state.balance < cost) return toast("❌ Нужно 15 000 ₽ для золотого моддинга!");

  state.balance -= cost;
  p.isGoldTuned = true;
  p.model = "👑 24K GOLD " + p.model;
  p.basePrice = Math.round(p.basePrice * 2.8);
  p.boughtPrice += cost;
  playSound('cash');
  toast("✨ Смартфон покрыт золотом 24K! Его стоимость взлетела!");
  save(); renderAll();
}

// === БИРЖА И HR ===
function buyStock(sym) {
  const pr = state.stockPrices[sym];
  if (state.balance < pr) return toast("❌ Недостаточно средств!");
  state.balance -= pr;
  state.stocksOwned[sym] = (state.stocksOwned[sym] || 0) + 1;
  playSound('click');
  toast(`📈 Куплена 1 акция ${sym}`);
  save(); renderAll();
}

function sellStock(sym) {
  if (!state.stocksOwned[sym] || state.stocksOwned[sym] <= 0) return toast("❌ Нет акций для продажи!");
  const pr = state.stockPrices[sym];
  state.stocksOwned[sym]--;
  state.balance += pr;
  playSound('cash');
  toast(`💵 Продана 1 акция ${sym} за ${pr} ₽`);
  save(); renderAll();
}

function hireStaff(id) {
  if (!state.staff) state.staff = [];
  if (state.staff.includes(id)) return;
  const st = HR_STAFF.find(s => s.id === id);
  if (state.balance < st.cost) return toast(`❌ Нужно ${st.cost} ₽ для найма!`);
  state.balance -= st.cost;
  state.staff.push(id);
  state.reputation += 15;
  playSound('success');
  toast(`👔 Нанят сотрудник: ${st.name}!`);
  save(); renderAll();
}

// ШВЕЙЦАРСКИЙ БАНК (Любая сумма)
function bankDeposit() {
  playSound('click');
  const inputStr = prompt("Введите сумму для вклада в Швейцарский банк (₽):", "10000");
  if (inputStr === null) return;
  const amount = parseInt(inputStr, 10);

  if (isNaN(amount) || amount <= 0) return toast("❌ Укажите корректную сумму!");
  if (state.balance < amount) return toast("❌ Недостаточно средств на балансе!");

  state.balance -= amount;
  state.bankBalance += amount;
  toast(`💰 Успешно вложено в банк: ${amount.toLocaleString()} ₽`);
  save(); 
  renderAll();
}

function bankWithdraw() {
  playSound('click');
  if (state.bankBalance <= 0) return toast("❌ Счет в банке пуст");
  state.balance += state.bankBalance;
  toast(`💵 Снято со счета: ${state.bankBalance.toLocaleString()} ₽`);
  state.bankBalance = 0; 
  save(); 
  renderAll();
}

// Кредиты до 200 000 ₽
function takeLoan(amount) {
  playSound('click');
  if (state.loanDebt > 0) return toast("❌ У вас уже есть активный кредит!");
  const totalDebt = Math.round(amount * 1.2);
  state.balance += amount;
  state.loanDebt = totalDebt;
  state.loanPaymentDaily = Math.round(totalDebt / 5);
  toast(`🏦 Одобрен кредит на ${amount.toLocaleString()} ₽. К возврату: ${totalDebt.toLocaleString()} ₽`);
  save(); 
  renderAll();
}

function upgradeStorageCapacity() {
  playSound('click');
  const cost = 25000;
  const maxLimit = 50;
  const currentCap = getCurrentLevelObj().maxStorage + state.storageBonusSlots;
  if (currentCap >= maxLimit) return toast("❌ Достигнут лимит склада (50 мест)!");
  if (state.balance < cost) return toast(`❌ Нужно ${cost} ₽`);
  state.balance -= cost;
  state.storageBonusSlots += 5;
  playSound('success');
  toast("📦 Склад расширен на +5 мест!");
  save(); renderAll();
}

function buyDistrict(dId) {
  playSound('click');
  const d = DISTRICTS_MAP.find(x => x.id === dId);
  if (!d || state.districts.includes(dId)) return;
  if (state.balance < d.cost) return toast("❌ Недостаточно средств");
  state.balance -= d.cost; state.districts.push(dId); state.reputation += 25;
  toast(`🗺️ Район «${d.name}» захвачен!`); save(); renderAll();
}

// Стоимость завода ровно 500 000 ₽
function launchFactory() {
  playSound('click');
  const name = document.getElementById("brand-name-input").value.trim();
  if (!name) return toast("❌ Введите название бренда");
  const cost = 500000;
  if (state.balance < cost) return toast(`❌ Для завода нужно ${cost.toLocaleString()} ₽`);
  state.balance -= cost;
  state.brandName = name;
  state.hasFactory = true;
  playSound('success');
  toast(`👑 Завод «${name}» запущен!`);
  save(); renderAll();
}

function getCurrentLevelObj() {
  let curr = LEVELS[0];
  LEVELS.forEach(l => { if (state.xp >= l.minXp) curr = l; });
  return curr;
}
function getMaxStorage() {
  const base = getCurrentLevelObj().maxStorage + (state.upgrades.includes("warehouse") ? 20 : 0) + state.storageBonusSlots;
  return Math.min(50, base);
}

function generateMarket() {
  state.market = [];
  const lvl = getCurrentLevelObj().level;
  const available = PHONE_CATALOG.filter(m => m.minLvl <= lvl);

  for (let i = 0; i < 6; i++) {
    const t = available[Math.floor(Math.random() * available.length)];
    const isNew = Math.random() < 0.3;
    const isAntique = Math.random() < 0.05;
    
    const cond = {
      screen: isNew || Math.random() > 0.4,
      battery: isNew ? 100 : Math.floor(60 + Math.random() * 35),
      body: isNew || Math.random() > 0.3,
      camera: isNew || Math.random() > 0.2,
      speaker: isNew || Math.random() > 0.3
    };
    
    let basePr = t.basePrice;
    let modName = t.model;
    if (isAntique) {
      modName = "⭐ Ретро-раритет " + t.model;
      basePr *= 2.5;
    }

    const realVal = evaluatePhone({ basePrice: basePr, isNew, condition: cond });
    const askPrice = Math.max(1000, Math.round(realVal * (isNew ? 0.95 : 0.75)));

    state.market.push({
      uid: Date.now() + Math.random(),
      brand: t.brand, model: modName, specs: t.specs, basePrice: basePr,
      isNew, isLocked: false, isGoldTuned: false, condition: cond, askPrice, boughtPrice: 0, 
      inspected: isNew || state.upgrades.includes("service"),
      onSale: false, salePrice: 0
    });
  }
}

function evaluatePhone(p) {
  let pr = p.basePrice;
  if (!p.isNew) pr *= 0.85;
  if (!p.condition.screen) pr -= 25000;
  if (p.condition.battery < 80) pr -= 12000;
  if (!p.condition.body) pr -= 10000;
  if (!p.condition.camera) pr -= 18000;
  if (!p.condition.speaker) pr -= 8000;
  return Math.max(5000, Math.round(pr));
}

function buyFromMarket(uid) {
  if (state.storage.length >= getMaxStorage()) return toast("❌ Склад переполнен!");
  const idx = state.market.findIndex(p => p.uid === uid);
  if (idx === -1) return;
  const p = state.market[idx];
  if (state.balance < p.askPrice) return toast("❌ Недостаточно средств");

  state.balance -= p.askPrice;
  p.boughtPrice = p.askPrice;
  state.storage.push(p);
  state.market.splice(idx, 1);
  state.stats.bought++;
  updateQuestProgress("buy", 1);
  addXp(20);
  playSound('success');
  toast("📦 Устройство добавлено на склад");
  save(); renderAll();
}

// VIP-АУКЦИОН (Исправлена кликабельность и адекватные ставки)
function triggerAuction() {
  if (state.storage.length >= getMaxStorage()) return toast("❌ Склад полон");
  
  const topPhones = PHONE_CATALOG.filter(m => m.minLvl >= 3);
  const lot = topPhones[Math.floor(Math.random() * topPhones.length)];
  const bid = Math.round(lot.basePrice * 0.45);

  if (state.balance < bid) return toast(`❌ Для участия в VIP-аукционе нужно минимум ${bid.toLocaleString()} ₽!`);

  if (confirm(`🔨 VIP-аукцион за топовый флагман ${lot.model} (${lot.specs}). Ставка: ${bid.toLocaleString()} ₽. Участвовать?`)) {
    state.balance -= bid;
    const cond = { screen: true, battery: 100, body: true, camera: true, speaker: true };
    
    state.storage.push({
      uid: Date.now() + Math.random(), 
      brand: lot.brand, 
      model: lot.model, 
      specs: lot.specs, 
      basePrice: lot.basePrice, 
      isNew: true, 
      isLocked: false, 
      isGoldTuned: false,
      condition: cond, 
      boughtPrice: bid, 
      inspected: true, 
      onSale: false, 
      salePrice: 0
    });
    
    state.stats.auctionsWon++;
    addXp(50);
    playSound('success');
    toast(`🏆 Поздравляем! Лот ${lot.model} выигран за ${bid.toLocaleString()} ₽!`);
    save(); 
    renderAll();
  }
}

function inspectDevice(uid) {
  playSound('click');
  const p = state.storage.find(x => x.uid === uid);
  if (!p) return;
  p.inspected = true;
  toast("🔍 Диагностика завершена");
  save(); renderAll();
}

function buyPart(k) {
  playSound('click');
  const pt = PARTS_DB[k];
  if (state.balance < pt.cost) return toast("❌ Не хватает средств");
  state.balance -= pt.cost; state.parts[k]++;
  toast(`🔩 Куплена деталь: ${pt.label}`); save(); renderAll();
}

function fixPart(uid, k) {
  playSound('click');
  const p = state.storage.find(x => x.uid === uid);
  if (!p || state.parts[k] <= 0) return toast("❌ Нет детали");
  state.parts[k]--;
  p.boughtPrice += PARTS_DB[k].cost;
  if (k === "battery") p.condition.battery = 100; else p.condition[k] = true;
  state.stats.repaired++;
  toast("🔧 Ремонт выполнен"); save(); renderAll();
}

function putOnSale(uid, factor) {
  playSound('click');
  const p = state.storage.find(x => x.uid === uid);
  if (!p) return;
  if (p.isLocked) {
    if (state.staff && state.staff.includes("lawyer")) {
      toast("⚖️ Юрист прикрыл выставление темного смартфона!");
    } else {
      playSound('boom');
      state.balance = Math.max(0, state.balance - 50000);
      return toast("🚨 ШТРАФ 50 000 ₽! Нельзя выставлять заблокированный телефон в бутик!");
    }
  }
  p.salePrice = Math.round(evaluatePhone(p) * factor);
  p.onSale = true;
  toast("🏷️ Выставлено в бутик"); save(); renderAll();
}

function removeFromSale(uid) {
  playSound('click');
  const p = state.storage.find(x => x.uid === uid);
  if (!p) return;
  p.onSale = false; save(); renderAll();
}

function buyUpgrade(upId) {
  playSound('click');
  const up = SHOP_UPGRADES.find(u => u.id === upId);
  if (!up || state.upgrades.includes(upId)) return;
  if (getCurrentLevelObj().level < up.reqLvl) return toast("❌ Нужен уровень выше");
  if (state.balance < up.cost) return toast("❌ Недостаточно средств");

  state.balance -= up.cost;
  state.upgrades.push(upId);
  state.reputation += up.repBonus;
  playSound('success');
  toast(`🏢 Объект «${up.name}» открыт!`);
  save(); renderAll();
}

function triggerRandomEvent() {
  const events = [
    { text: "🌟 Apple и Bitcoin взлетели на 20% на фоне презентации!", type: "boom" },
    { text: "🚨 Налоговая инспекция! Проверка документации бутика.", type: "tax", cost: 15000 },
    { text: "📉 Логистический сбой: дефицит новых гаджетов в городе.", type: "crisis" },
    { text: "🔥 Спокойный день, рынок смартфонов стабилен.", type: "normal" }
  ];
  const ev = events[Math.floor(Math.random() * events.length)];
  state.newsText = ev.text;
  if (ev.type === "boom") {
    state.stockPrices.APPL = Math.round(state.stockPrices.APPL * 1.2);
    state.stockPrices.BTC = Math.round(state.stockPrices.BTC * 1.2);
  }
  if (ev.type === "tax") {
    if (state.staff && state.staff.includes("lawyer")) {
      logMsg("⚖️ Юрист отбил штраф налоговой проверки!");
    } else {
      state.balance = Math.max(0, state.balance - ev.cost);
      logMsg(`🚨 Штраф налоговой: -${ev.cost} ₽`);
    }
  }
}

function generateQuests() {
  state.quests = [
    { id: "buy", title: "Приобрести 3 смартфона", progress: 0, target: 3, reward: 10000, done: false },
    { id: "sell", title: "Продать 2 смартфона", progress: 0, target: 2, reward: 15000, done: false }
  ];
}

function updateQuestProgress(type, amount) {
  if (!state.quests) return;
  state.quests.forEach(q => {
    if (q.id === type && !q.done) {
      q.progress += amount;
      if (q.progress >= q.target) {
        q.done = true;
        state.balance += q.reward;
        toast(`🎯 Задание выполнено! Награда: +${q.reward} ₽`);
      }
    }
  });
}

function addXp(amt) {
  const before = getCurrentLevelObj().level;
  state.xp += amt;
  const after = getCurrentLevelObj().level;
  if (after > before) {
    playSound('success'); toast(`👑 НОВЫЙ СТАТУС: ${after} уровень!`);
  }
}

function renderAll() {
  const lvl = getCurrentLevelObj();
  
  const elCasinoBal = document.getElementById("casino-balance-txt"); if (elCasinoBal) elCasinoBal.textContent = `${state.balance} ₽`;
  const elLockBal = document.getElementById("lock-balance"); if (elLockBal) elLockBal.textContent = state.balance;
  const elDsBal = document.getElementById("ds-balance"); if (elDsBal) elDsBal.textContent = state.balance;
  const elLockLvl = document.getElementById("lock-level"); if (elLockLvl) elLockLvl.textContent = lvl.title;
  const elDay = document.getElementById("ds-day"); if (elDay) elDay.textContent = state.day;
  
  const elStorageCap = document.getElementById("storage-cap");
  if (elStorageCap) elStorageCap.textContent = `${state.storage.length}/${getMaxStorage()}`;
  
  const elBankBal = document.getElementById("bank-balance"); if (elBankBal) elBankBal.textContent = state.bankBalance;
  const elNews = document.getElementById("news-ticker-box"); if (elNews) elNews.textContent = `📰 ${state.newsText}`;
  const elLoan = document.getElementById("loan-status-text"); if (elLoan) elLoan.textContent = `Активный долг: ${state.loanDebt} ₽`;

  const elLvlInfo = document.getElementById("level-info");
  if (elLvlInfo) elLvlInfo.textContent = `Статус: ${lvl.title} (${state.xp} XP) | Репутация: ⭐ ${state.reputation}`;

  const totalCost = state.districts.reduce((s, id) => s + DISTRICTS_MAP.find(d => d.id === id).tax, 0) +
                    SHOP_UPGRADES.filter(u => state.upgrades.includes(u.id)).reduce((s, u) => s + u.dailyFee, 0) +
                    HR_STAFF.filter(s => state.staff && state.staff.includes(s.id)).reduce((sum, s) => sum + s.salary, 0);
  
  const elDailyCost = document.getElementById("ui-daily-cost"); if (elDailyCost) elDailyCost.textContent = `${totalCost} ₽`;
  
  const elLogs = document.getElementById("home-logs");
  if (elLogs) elLogs.innerHTML = state.logs.slice(0, 6).map(l => `<li>${l}</li>`).join("");

  // Рынок без функции опта
  const elMarket = document.getElementById("market-grid");
  if (elMarket) {
    elMarket.innerHTML = state.market.map(p => `
      <div class="card">
        <div><div class="card-top"><span class="brand-tag">${p.brand} • ${p.specs}</span><span class="cond-badge ${p.isNew ? 'cond-new' : 'cond-used'}">${p.isNew ? 'НОВЫЙ' : 'Б/У'}</span></div><h3 style="margin:4px 0;">${p.model}</h3><div class="price-box">${p.askPrice} ₽</div></div>
        <button class="btn-primary btn-sm" style="margin-top:6px; width:100%;" onclick="buyFromMarket(${p.uid})">Приобрести</button>
      </div>
    `).join("");
  }

  const elStorage = document.getElementById("storage-grid");
  if (elStorage) {
    elStorage.innerHTML = state.storage.length === 0 ? '<p class="muted">Склад пуст</p>' : state.storage.map(p => `
      <div class="card">
        <div class="card-top">
          <h3>${p.model}</h3>
          ${p.isLocked ? '<span class="cond-badge cond-locked">🔒 ЗАБЛОКИРОВАН</span>' : '<span class="cond-badge cond-new">ЛЕГАЛЕН</span>'}
        </div>
        <p class="muted">Оценка: <b>${evaluatePhone(p)} ₽</b></p>
        <div class="btn-row">
          ${!p.inspected ? `<button class="btn-secondary btn-sm" onclick="inspectDevice(${p.uid})">🔍 Проверить</button>` : ''}
          ${!p.isGoldTuned ? `<button class="btn-gold-sm" onclick="tunePhoneGold(${p.uid})">👑 Gold 24K (15k ₽)</button>` : ''}
          ${p.onSale ? `<span class="ok" style="font-size:0.8rem;">В бутике: ${p.salePrice} ₽</span>` : `<button class="btn-primary btn-sm" onclick="putOnSale(${p.uid}, 1.3)">В бутик</button>`}
        </div>
      </div>
    `).join("");
  }

  const btnUnlocker = document.getElementById("btn-buy-unlocker");
  if (btnUnlocker && state.hasUnlocker) {
    btnUnlocker.textContent = "✅ Установлен";
    btnUnlocker.disabled = true;
  }

  const elParts = document.getElementById("parts-shop");
  if (elParts) {
    elParts.innerHTML = Object.keys(PARTS_DB).map(k => `
      <div class="part-item"><span><b>${PARTS_DB[k].name}</b> (${state.parts[k]})</span><button class="btn-secondary btn-sm" onclick="buyPart('${k}')">Купить (${PARTS_DB[k].cost} ₽)</button></div>
    `).join("");
  }

  const elRepair = document.getElementById("repair-grid");
  if (elRepair) {
    const list = state.storage.filter(p => !p.condition.screen || p.condition.battery < 80 || p.isLocked || !p.isGoldTuned);
    elRepair.innerHTML = list.map(p => `
      <div class="card">
        <h3>${p.model}</h3>
        <div class="btn-row">
          ${!p.condition.screen ? `<button class="btn-primary btn-sm" onclick="fixPart(${p.uid}, 'screen')">Заменить экран</button>` : ''}
          ${p.isLocked ? `<button class="btn-danger btn-sm" onclick="unlockDarkPhone(${p.uid})">🔓 Прошить iCloud</button>` : ''}
          ${!p.isGoldTuned ? `<button class="btn-gold-sm" onclick="tunePhoneGold(${p.uid})">👑 Тюнинг 24K (15k ₽)</button>` : ''}
        </div>
      </div>
    `).join("") || '<p class="muted">Нет устройств для работ</p>';
  }

  const elSales = document.getElementById("sales-grid");
  if (elSales) {
    elSales.innerHTML = state.storage.length === 0 ? '<p class="muted">Нет смартфонов</p>' : state.storage.map(p => `
      <div class="card"><h3>${p.model}</h3><p class="muted">Оценка: ${evaluatePhone(p)} ₽</p>${p.onSale ? `<button class="btn-danger btn-sm" style="margin-top:6px;" onclick="removeFromSale(${p.uid})">Снять с витрины (${p.salePrice} ₽)</button>` : `<button class="btn-primary btn-sm" style="margin-top:6px;" onclick="putOnSale(${p.uid}, 1.3)">Выставить (+30%)</button>`}</div>
    `).join("");
  }

  const elChat = document.getElementById("chat-offers-grid");
  if (elChat) {
    elChat.innerHTML = state.buyerOffers.length === 0 ? '<p class="muted">На складе нет телефонов или клиенты еще не написали.</p>' : state.buyerOffers.map(o => `
      <div class="card">
        <div class="card-top"><span class="brand-tag">👤 ${o.buyerName}</span><span class="price-box">${o.offerPrice} ₽</span></div>
        <h4 style="margin:4px 0;">Хочет купить: ${o.phoneModel}</h4>
        <p class="muted">«${o.phrase}»</p>
        <div class="btn-row">
          <button class="btn-primary btn-sm" onclick="acceptBuyerOffer(${o.id}, false)">Продать за ${o.offerPrice} ₽</button>
          <button class="btn-gold-sm" onclick="acceptBuyerOffer(${o.id}, true)">Торг +25% (Риск 50%)</button>
        </div>
      </div>
    `).join("");
  }

  const elDark = document.getElementById("darknet-grid");
  if (elDark) {
    elDark.innerHTML = state.darknetMarket.map(p => `
      <div class="card" style="border-color:#7f1d1d;">
        <div class="card-top"><span class="brand-tag">${p.brand}</span><span class="cond-badge cond-locked">🔒 iCloud Lock</span></div>
        <h3 style="margin:4px 0;">${p.model}</h3>
        <div class="price-box">${p.askPrice} ₽ <span class="muted" style="font-size:0.75rem;">(Рынок: ${p.basePrice} ₽)</span></div>
        <button class="btn-danger btn-sm" style="margin-top:6px; width:100%;" onclick="buyFromDarknet(${p.uid})">Выкупить лот</button>
      </div>
    `).join("");
  }

  const elStocks = document.getElementById("stocks-grid");
  if (elStocks) {
    elStocks.innerHTML = STOCKS_LIST.map(s => {
      const curPr = state.stockPrices[s.id] || s.price;
      const owned = state.stocksOwned[s.id] || 0;
      return `
        <div class="card">
          <div class="card-top"><h3>${s.name} (${s.id})</h3><div class="price-box">${curPr} ₽</div></div>
          <p class="muted">В портфеле: <b>${owned} шт.</b> (На сумму: ${owned * curPr} ₽)</p>
          <div class="btn-row">
            <button class="btn-primary btn-sm" onclick="buyStock('${s.id}')">Купить 1 шт.</button>
            <button class="btn-danger btn-sm" onclick="sellStock('${s.id}')">Продать 1 шт.</button>
          </div>
        </div>
      `;
    }).join("");
  }

  const elHr = document.getElementById("hr-grid");
  if (elHr) {
    elHr.innerHTML = HR_STAFF.map(st => {
      const hired = state.staff && state.staff.includes(st.id);
      return `
        <div class="card">
          <h3>👔 ${st.name}</h3>
          <p class="muted">${st.desc}</p>
          <p class="muted" style="margin-top:4px;">Зарплата: <b>${st.salary} ₽ / день</b></p>
          ${hired ? '<span class="ok">✅ В штате компании</span>' : `<button class="btn-gold btn-sm" style="margin-top:6px;" onclick="hireStaff('${st.id}')">Нанять (${st.cost} ₽)</button>`}
        </div>
      `;
    }).join("");
  }

  const elMap = document.getElementById("map-districts");
  if (elMap) {
    elMap.innerHTML = DISTRICTS_MAP.map(d => {
      const owned = state.districts.includes(d.id);
      return `<div class="card"><h3>${d.name}</h3><p class="muted">${d.bonus}</p><p class="muted">Налог: ${d.tax} ₽</p>${owned ? '<span class="ok">👑 Под контролем</span>' : `<button class="btn-gold btn-sm" style="margin-top:6px;" onclick="buyDistrict('${d.id}')">Захватить (${d.cost} ₽)</button>`}</div>`;
    }).join("");
  }

  const elUpgrades = document.getElementById("upgrades-grid");
  if (elUpgrades) {
    elUpgrades.innerHTML = SHOP_UPGRADES.map(u => {
      const owned = state.upgrades.includes(u.id);
      return `<div class="card"><h3>${u.name}</h3><p class="muted">${u.desc}</p>${owned ? '<span class="ok">👑 Открыто</span>' : `<button class="btn-gold btn-sm" style="margin-top:6px;" onclick="buyUpgrade('${u.id}')">Открыть (${u.cost} ₽)</button>`}</div>`;
    }).join("");
  }

  const elQuests = document.getElementById("quests-list");
  if (elQuests) {
    elQuests.innerHTML = state.quests.map(q => `
      <div class="card"><h3>${q.title}</h3><p class="muted">Прогресс: ${q.progress}/${q.target} ${q.done ? '✅' : ''}</p></div>
    `).join("");
  }

  const elFactory = document.getElementById("factory-box");
  if (elFactory && state.hasFactory) {
    elFactory.innerHTML = `<p class="ok">👑 Завод «<b>${state.brandName}</b>» работает и приносит по 150 000 ₽ ежедневно!</p>`;
  }

  const profileTab = document.getElementById("tab-profile");
  if (profileTab) {
    let adminBox = document.getElementById("admin-dev-panel");
    if (!adminBox) {
      adminBox = document.createElement("div");
      adminBox.id = "admin-dev-panel";
      profileTab.insertBefore(adminBox, profileTab.firstChild);
    }
    
    if (state.isAdminUnlocked) {
      adminBox.innerHTML = `
        <div class="dash-card" style="border-color:#ef4444; background:#120707; margin-bottom:12px;">
          <h3 style="color:#ef4444;">🛠️ Панель разработчика (Admin)</h3>
          <p class="muted">Текущая скорость времени: <b>${state.timeSpeedMultiplier}x</b></p>
          <div class="btn-row" style="margin-top:8px;">
            <button class="btn-danger btn-sm" onclick="adminChangeTimeSpeed()">⚡ Время (${state.timeSpeedMultiplier}x)</button>
            <button class="btn-primary btn-sm" onclick="adminAddMoney()">💰 + Деньги</button>
            <button class="btn-gold-sm" onclick="adminSpawnPhone()">📱 Спавн Phone</button>
          </div>
        </div>
      `;
    } else {
      adminBox.innerHTML = `
        <button class="btn-secondary btn-sm" style="margin-bottom:12px; width:100%; background:#1f2937;" onclick="checkAdminAccess()">🛠️ Войти в Панель Разработчика</button>
      `;
    }
  }

  const achievements = [
    { name: "Первый капитал", desc: "Накопить 1 000 000 ₽", unlocked: state.balance >= 1000000 },
    { name: "Мастер сервиса", desc: "Отремонтировать 5 устройств", unlocked: state.stats.repaired >= 5 },
    { name: "Азартный король", desc: "Выиграть в казино", unlocked: state.stats.casinoProfit > 0 },
    { name: "Владелец мегаполиса", desc: "Захватить все районы города", unlocked: state.districts.length >= DISTRICTS_MAP.length }
  ];

  const elAch = document.getElementById("achievements-list");
  if (elAch) {
    elAch.innerHTML = achievements.map(a => `
      <div class="ach-item ${a.unlocked ? 'unlocked' : ''}">
        <b>${a.unlocked ? '🏆' : '🔒'} ${a.name}</b> — <span class="muted">${a.desc}</span>
      </div>
    `).join("");
  }

  const elStats = document.getElementById("profile-stats");
  if (elStats) {
    elStats.innerHTML = `
      <li>Всего куплено: <b>${state.stats.bought}</b></li>
      <li>Продано устройств: <b>${state.stats.sold}</b></li>
      <li>Профит в казино: <b class="${state.stats.casinoProfit >= 0 ? 'ok' : 'bad'}">${state.stats.casinoProfit} ₽</b></li>
      <li>Чистая прибыль от продаж: <b class="ok">${state.stats.totalProfit} ₽</b></li>
    `;
  }
}

function logMsg(txt) {
  state.logs.unshift(`[День ${state.day}] ${txt}`);
  if (state.logs.length > 25) state.logs.pop();
}

function toast(txt) {
  const box = document.getElementById("toast-box");
  if (!box) return;
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = txt;
  box.appendChild(el);
  setTimeout(() => el.remove(), 2500);
}

function hardReset() {
  if (confirm("Сбросить всю корпоративную империю?")) {
    localStorage.removeItem("phoneEmpireUltimateRubV4");
    location.reload();
  }
}

init();