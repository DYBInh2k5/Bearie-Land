const notes = [
  "Hom nay cung phai yeu ban than nhieu hon mot chut nha.",
  "Em giong nhu gau bong: nhin la muon om lien.",
  "Moi thu roi se on, cu mem mai ma buoc tiep.",
  "Xinh xan khong can co, vi em da dang yeu san roi.",
  "Nho uong nuoc va cuoi nhe mot cai ne, dep lam."
];

const noteBtn = document.getElementById("noteBtn");
const noteBox = document.getElementById("noteBox");
const themeButtons = document.querySelectorAll(".theme-chip");
const heartButtons = document.querySelectorAll(".heart-btn");
const musicBtn = document.getElementById("musicBtn");
const bgAudio = document.getElementById("bgAudio");
const startCatchGameBtn = document.getElementById("startCatchGame");
const catchTarget = document.getElementById("catchTarget");
const catchScoreEl = document.getElementById("catchScore");
const catchTimeEl = document.getElementById("catchTime");
const catchLevelEl = document.getElementById("catchLevel");
const catchHighScoreEl = document.getElementById("catchHighScore");
const catchResultEl = document.getElementById("catchResult");
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const guessResult = document.getElementById("guessResult");
const sfxBtn = document.getElementById("sfxBtn");
const dressupStage = document.getElementById("dressupStage");
const accessoryButtons = document.querySelectorAll(".accessory");
const eventAccessoryBtn = document.getElementById("eventAccessory");
const clearDressBtn = document.getElementById("clearDress");
const randomDressBtn = document.getElementById("randomDress");
const dressupResult = document.getElementById("dressupResult");
const equippedHat = document.getElementById("equippedHat");
const equippedBow = document.getElementById("equippedBow");
const equippedGlasses = document.getElementById("equippedGlasses");
const equippedDress = document.getElementById("equippedDress");
const equippedBag = document.getElementById("equippedBag");
const equippedNecklace = document.getElementById("equippedNecklace");
const statCatchPlaysEl = document.getElementById("statCatchPlays");
const statCatchBestEl = document.getElementById("statCatchBest");
const statGuessPlaysEl = document.getElementById("statGuessPlays");
const statGuessWinsEl = document.getElementById("statGuessWins");
const statDressChangesEl = document.getElementById("statDressChanges");
const eventThemeNameEl = document.getElementById("eventThemeName");
const missionCatchEl = document.getElementById("missionCatch");
const missionGuessEl = document.getElementById("missionGuess");
const missionDressEl = document.getElementById("missionDress");
const claimRewardBtn = document.getElementById("claimRewardBtn");
const eventRewardStatus = document.getElementById("eventRewardStatus");
const weeklyMissionCatchEl = document.getElementById("weeklyMissionCatch");
const weeklyMissionGuessEl = document.getElementById("weeklyMissionGuess");
const weeklyMissionDressEl = document.getElementById("weeklyMissionDress");
const claimWeeklyBtn = document.getElementById("claimWeeklyBtn");
const weeklyRewardStatus = document.getElementById("weeklyRewardStatus");
const rewardInventoryEl = document.getElementById("rewardInventory");
const badgeBronze = document.getElementById("badgeBronze");
const badgeSilver = document.getElementById("badgeSilver");
const badgeGold = document.getElementById("badgeGold");
const badgeStatus = document.getElementById("badgeStatus");
const luckyWheel = document.getElementById("luckyWheel");
const spinWheelBtn = document.getElementById("spinWheelBtn");
const spinResult = document.getElementById("spinResult");
const bearMoodEl = document.getElementById("bearMood");
const moodFillEl = document.getElementById("moodFill");
const feedBearBtn = document.getElementById("feedBearBtn");
const sleepBearBtn = document.getElementById("sleepBearBtn");
const playBearBtn = document.getElementById("playBearBtn");
const careResult = document.getElementById("careResult");
const buddyMoodEl = document.getElementById("buddyMood");
const buddyMoodFillEl = document.getElementById("buddyMoodFill");
const feedBuddyBtn = document.getElementById("feedBuddyBtn");
const sleepBuddyBtn = document.getElementById("sleepBuddyBtn");
const playBuddyBtn = document.getElementById("playBuddyBtn");
const buddyResult = document.getElementById("buddyResult");
const coinBalanceEl = document.getElementById("coinBalance");
const streakCountEl = document.getElementById("streakCount");
const streakMultiplierEl = document.getElementById("streakMultiplier");
const memoryMovesEl = document.getElementById("memoryMoves");
const memoryMatchesEl = document.getElementById("memoryMatches");
const memoryComboEl = document.getElementById("memoryCombo");
const memoryBoardEl = document.getElementById("memoryBoard");
const restartMemoryBtn = document.getElementById("restartMemoryBtn");
const memoryResult = document.getElementById("memoryResult");
const puzzleBoardEl = document.getElementById("puzzleBoard");
const restartPuzzleBtn = document.getElementById("restartPuzzleBtn");
const puzzleResult = document.getElementById("puzzleResult");
const puzzleDifficultyEl = document.getElementById("puzzleDifficulty");
const puzzleTimeEl = document.getElementById("puzzleTime");
const puzzleBestEl = document.getElementById("puzzleBest");
const startStickerBtn = document.getElementById("startStickerBtn");
const stickerFieldEl = document.getElementById("stickerField");
const stickerTargetEl = document.getElementById("stickerTarget");
const stickerScoreEl = document.getElementById("stickerScore");
const stickerTimeEl = document.getElementById("stickerTime");
const stickerResult = document.getElementById("stickerResult");
const cropPreviewEl = document.getElementById("cropPreview");
const cropGuessResult = document.getElementById("cropGuessResult");
const quadrantButtons = document.querySelectorAll(".quadrant-btn");
const rotateImageEl = document.getElementById("rotateImage");
const rotateBtn = document.getElementById("rotateBtn");
const checkRotateBtn = document.getElementById("checkRotateBtn");
const rotateResult = document.getElementById("rotateResult");
const shopGrid = document.getElementById("shopGrid");
const shopResult = document.getElementById("shopResult");
const chapter1Btn = document.getElementById("chapter1Btn");
const chapter2Btn = document.getElementById("chapter2Btn");
const chapter3Btn = document.getElementById("chapter3Btn");
const chapterResult = document.getElementById("chapterResult");
const lbCatchBestEl = document.getElementById("lbCatchBest");
const lbMemoryBestEl = document.getElementById("lbMemoryBest");
const lbCoinBestEl = document.getElementById("lbCoinBest");
const lbWeeklyCoinEl = document.getElementById("lbWeeklyCoin");
const lbMonthlyCoinEl = document.getElementById("lbMonthlyCoin");
const bossTimerEl = document.getElementById("bossTimer");
const bossHitsEl = document.getElementById("bossHits");
const startBossBtn = document.getElementById("startBossBtn");
const bossTarget = document.getElementById("bossTarget");
const bossResult = document.getElementById("bossResult");

const CATCH_HIGH_SCORE_KEY = "bearie-catch-high-score";
const DRESSUP_STATE_KEY = "bearie-dressup-state";
const THEME_KEY = "bearie-theme";
const DAILY_STATS_KEY = "bearie-daily-stats";
const REWARD_CLAIM_DATE_KEY = "bearie-reward-claim-date";
const WEEKLY_STATS_KEY = "bearie-weekly-stats";
const WEEKLY_CLAIM_KEY = "bearie-weekly-claim";
const REWARD_INVENTORY_KEY = "bearie-reward-inventory";
const SPIN_DATE_KEY = "bearie-spin-date";
const BEAR_MOOD_KEY = "bearie-mood";
const COIN_KEY = "bearie-coin";
const CHAPTER_KEY = "bearie-chapter-claim";
const BUDDY_MOOD_KEY = "bearie-buddy-mood";
const STREAK_KEY = "bearie-streak";
const LEADERBOARD_KEY = "bearie-leaderboard";
const WEEKLY_COIN_TRACK_KEY = "bearie-weekly-coin-track";
const MONTHLY_COIN_TRACK_KEY = "bearie-monthly-coin-track";
const BOSS_DATE_KEY = "bearie-boss-date";
const PUZZLE_RECORD_KEY = "bearie-puzzle-record";

const missionTargets = {
  catchBest: 20,
  guessWins: 2,
  dressChanges: 5
};

const weeklyTargets = {
  catchTotal: 120,
  guessWins: 12,
  dressChanges: 30
};

const themeEventMap = {
  spring: { name: "Keo Ngot", icon: "🍬", slot: "necklace", label: "item keo" },
  noel: { name: "Noel", icon: "🎄", slot: "hat", label: "item noel" },
  valentine: { name: "Valentine", icon: "💖", slot: "bow", label: "item valentine" }
};

let noteIndex = 0;
let catchScore = 0;
let catchTime = 15;
let catchLevel = 1;
let targetMoveDelay = 550;
let catchCountdownId = null;
let targetMoveId = null;
let sfxEnabled = true;
let audioContext = null;
let catchHighScore = 0;

const equippedBySlot = {
  hat: equippedHat,
  bow: equippedBow,
  glasses: equippedGlasses,
  dress: equippedDress,
  bag: equippedBag,
  necklace: equippedNecklace
};

const accessoriesBySlot = {
  hat: ["🎩", "🧢"],
  bow: ["🎀", "🌸"],
  glasses: ["🕶", "👓"],
  dress: ["👗", "🩷"],
  bag: ["👜", "🎒"],
  necklace: ["📿", "💎"]
};

let dressupState = {
  hat: "",
  bow: "",
  glasses: "",
  dress: "",
  bag: "",
  necklace: ""
};

const todayKey = new Date().toISOString().slice(0, 10);

let dailyStats = {
  date: todayKey,
  catchPlays: 0,
  catchBest: 0,
  guessPlays: 0,
  guessWins: 0,
  dressChanges: 0
};

let rewardClaimDate = "";
let currentTheme = "spring";
let rewardInventory = [];

const currentDate = new Date();
const weekStartDate = new Date(currentDate);
const weekday = weekStartDate.getDay();
const diffToMonday = (weekday + 6) % 7;
weekStartDate.setDate(weekStartDate.getDate() - diffToMonday);
const weekKey = weekStartDate.toISOString().slice(0, 10);

let weeklyStats = {
  weekKey,
  catchTotal: 0,
  guessWins: 0,
  dressChanges: 0
};

let weeklyClaim = {
  weekKey,
  claimed: false
};

let lastSpinDate = "";
let bearMood = 70;
let buddyMood = 65;
let honeyCoins = 0;
let streakData = {
  lastDate: "",
  count: 0
};

let memoryCards = [];
let openIndexes = [];
let matchedCount = 0;
let memoryMoves = 0;
let memoryLock = false;
let memoryCombo = 0;
let memoryBestCombo = 0;
let puzzleOrder = [];
let puzzleSelectedIndex = null;
let puzzleSize = 3;
let puzzleElapsed = 0;
let puzzleTimerId = null;
let stickerScore = 0;
let stickerTime = 15;
let stickerTimerId = null;
let stickerMoveId = null;
let currentQuadrant = "TL";
let rotateDeg = 0;

let puzzleRecord = {
  "3": null,
  "4": null
};

let chapterClaimState = {
  chapter1: false,
  chapter2: false,
  chapter3: false
};

let leaderboard = {
  catchBest: 0,
  memoryBestMoves: null,
  coinBest: 0
};

const monthKey = todayKey.slice(0, 7);

let weeklyCoinTrack = {
  weekKey,
  coins: 0
};

let monthlyCoinTrack = {
  monthKey,
  coins: 0
};

let lastBossDate = "";
let bossTimer = 10;
let bossHits = 0;
let bossTimerId = null;

try {
  const savedScore = Number(localStorage.getItem(CATCH_HIGH_SCORE_KEY));
  catchHighScore = Number.isFinite(savedScore) ? Math.max(0, savedScore) : 0;
} catch (error) {
  catchHighScore = 0;
}

if (catchHighScoreEl) {
  catchHighScoreEl.textContent = String(catchHighScore);
}

try {
  const savedDressup = localStorage.getItem(DRESSUP_STATE_KEY);
  const parsed = savedDressup ? JSON.parse(savedDressup) : null;

  if (parsed && typeof parsed === "object") {
    dressupState = {
      hat: typeof parsed.hat === "string" ? parsed.hat : "",
      bow: typeof parsed.bow === "string" ? parsed.bow : "",
      glasses: typeof parsed.glasses === "string" ? parsed.glasses : "",
      dress: typeof parsed.dress === "string" ? parsed.dress : "",
      bag: typeof parsed.bag === "string" ? parsed.bag : "",
      necklace: typeof parsed.necklace === "string" ? parsed.necklace : ""
    };
  }
} catch (error) {
  dressupState = {
    hat: "",
    bow: "",
    glasses: "",
    dress: "",
    bag: "",
    necklace: ""
  };
}

try {
  const savedStats = localStorage.getItem(DAILY_STATS_KEY);
  const parsedStats = savedStats ? JSON.parse(savedStats) : null;

  if (parsedStats && typeof parsedStats === "object" && parsedStats.date === todayKey) {
    dailyStats = {
      date: todayKey,
      catchPlays: Number.isFinite(parsedStats.catchPlays) ? Math.max(0, parsedStats.catchPlays) : 0,
      catchBest: Number.isFinite(parsedStats.catchBest) ? Math.max(0, parsedStats.catchBest) : 0,
      guessPlays: Number.isFinite(parsedStats.guessPlays) ? Math.max(0, parsedStats.guessPlays) : 0,
      guessWins: Number.isFinite(parsedStats.guessWins) ? Math.max(0, parsedStats.guessWins) : 0,
      dressChanges: Number.isFinite(parsedStats.dressChanges) ? Math.max(0, parsedStats.dressChanges) : 0
    };
  }
} catch (error) {
  dailyStats = {
    date: todayKey,
    catchPlays: 0,
    catchBest: 0,
    guessPlays: 0,
    guessWins: 0,
    dressChanges: 0
  };
}

try {
  rewardClaimDate = localStorage.getItem(REWARD_CLAIM_DATE_KEY) || "";
} catch (error) {
  rewardClaimDate = "";
}

try {
  const savedWeeklyStats = localStorage.getItem(WEEKLY_STATS_KEY);
  const parsedWeeklyStats = savedWeeklyStats ? JSON.parse(savedWeeklyStats) : null;

  if (parsedWeeklyStats && typeof parsedWeeklyStats === "object" && parsedWeeklyStats.weekKey === weekKey) {
    weeklyStats = {
      weekKey,
      catchTotal: Number.isFinite(parsedWeeklyStats.catchTotal) ? Math.max(0, parsedWeeklyStats.catchTotal) : 0,
      guessWins: Number.isFinite(parsedWeeklyStats.guessWins) ? Math.max(0, parsedWeeklyStats.guessWins) : 0,
      dressChanges: Number.isFinite(parsedWeeklyStats.dressChanges) ? Math.max(0, parsedWeeklyStats.dressChanges) : 0
    };
  }
} catch (error) {
  weeklyStats = {
    weekKey,
    catchTotal: 0,
    guessWins: 0,
    dressChanges: 0
  };
}

try {
  const savedWeeklyClaim = localStorage.getItem(WEEKLY_CLAIM_KEY);
  const parsedWeeklyClaim = savedWeeklyClaim ? JSON.parse(savedWeeklyClaim) : null;

  if (parsedWeeklyClaim && typeof parsedWeeklyClaim === "object" && parsedWeeklyClaim.weekKey === weekKey) {
    weeklyClaim = {
      weekKey,
      claimed: parsedWeeklyClaim.claimed === true
    };
  }
} catch (error) {
  weeklyClaim = {
    weekKey,
    claimed: false
  };
}

try {
  const savedInventory = localStorage.getItem(REWARD_INVENTORY_KEY);
  const parsedInventory = savedInventory ? JSON.parse(savedInventory) : null;

  if (Array.isArray(parsedInventory)) {
    rewardInventory = parsedInventory.filter((item) => item && typeof item.label === "string" && typeof item.date === "string");
  }
} catch (error) {
  rewardInventory = [];
}

try {
  lastSpinDate = localStorage.getItem(SPIN_DATE_KEY) || "";
} catch (error) {
  lastSpinDate = "";
}

try {
  const savedMood = Number(localStorage.getItem(BEAR_MOOD_KEY));
  bearMood = Number.isFinite(savedMood) ? Math.min(100, Math.max(0, savedMood)) : 70;
} catch (error) {
  bearMood = 70;
}

try {
  const savedBuddyMood = Number(localStorage.getItem(BUDDY_MOOD_KEY));
  buddyMood = Number.isFinite(savedBuddyMood) ? Math.min(100, Math.max(0, savedBuddyMood)) : 65;
} catch (error) {
  buddyMood = 65;
}

try {
  const savedCoin = Number(localStorage.getItem(COIN_KEY));
  honeyCoins = Number.isFinite(savedCoin) ? Math.max(0, savedCoin) : 0;
} catch (error) {
  honeyCoins = 0;
}

try {
  const savedChapter = localStorage.getItem(CHAPTER_KEY);
  const parsedChapter = savedChapter ? JSON.parse(savedChapter) : null;

  if (parsedChapter && typeof parsedChapter === "object") {
    chapterClaimState = {
      chapter1: parsedChapter.chapter1 === true,
      chapter2: parsedChapter.chapter2 === true,
      chapter3: parsedChapter.chapter3 === true
    };
  }
} catch (error) {
  chapterClaimState = {
    chapter1: false,
    chapter2: false,
    chapter3: false
  };
}

try {
  const savedStreak = localStorage.getItem(STREAK_KEY);
  const parsedStreak = savedStreak ? JSON.parse(savedStreak) : null;

  if (parsedStreak && typeof parsedStreak === "object") {
    streakData = {
      lastDate: typeof parsedStreak.lastDate === "string" ? parsedStreak.lastDate : "",
      count: Number.isFinite(parsedStreak.count) ? Math.max(0, parsedStreak.count) : 0
    };
  }
} catch (error) {
  streakData = {
    lastDate: "",
    count: 0
  };
}

try {
  const savedLeaderboard = localStorage.getItem(LEADERBOARD_KEY);
  const parsedLeaderboard = savedLeaderboard ? JSON.parse(savedLeaderboard) : null;

  if (parsedLeaderboard && typeof parsedLeaderboard === "object") {
    leaderboard = {
      catchBest: Number.isFinite(parsedLeaderboard.catchBest) ? Math.max(0, parsedLeaderboard.catchBest) : 0,
      memoryBestMoves: Number.isFinite(parsedLeaderboard.memoryBestMoves) ? Math.max(1, parsedLeaderboard.memoryBestMoves) : null,
      coinBest: Number.isFinite(parsedLeaderboard.coinBest) ? Math.max(0, parsedLeaderboard.coinBest) : 0
    };
  }
} catch (error) {
  leaderboard = {
    catchBest: 0,
    memoryBestMoves: null,
    coinBest: 0
  };
}

try {
  const savedWeeklyCoinTrack = localStorage.getItem(WEEKLY_COIN_TRACK_KEY);
  const parsedWeeklyCoinTrack = savedWeeklyCoinTrack ? JSON.parse(savedWeeklyCoinTrack) : null;

  if (parsedWeeklyCoinTrack && parsedWeeklyCoinTrack.weekKey === weekKey) {
    weeklyCoinTrack = {
      weekKey,
      coins: Number.isFinite(parsedWeeklyCoinTrack.coins) ? Math.max(0, parsedWeeklyCoinTrack.coins) : 0
    };
  }
} catch (error) {
  weeklyCoinTrack = {
    weekKey,
    coins: 0
  };
}

try {
  const savedMonthlyCoinTrack = localStorage.getItem(MONTHLY_COIN_TRACK_KEY);
  const parsedMonthlyCoinTrack = savedMonthlyCoinTrack ? JSON.parse(savedMonthlyCoinTrack) : null;

  if (parsedMonthlyCoinTrack && parsedMonthlyCoinTrack.monthKey === monthKey) {
    monthlyCoinTrack = {
      monthKey,
      coins: Number.isFinite(parsedMonthlyCoinTrack.coins) ? Math.max(0, parsedMonthlyCoinTrack.coins) : 0
    };
  }
} catch (error) {
  monthlyCoinTrack = {
    monthKey,
    coins: 0
  };
}

try {
  lastBossDate = localStorage.getItem(BOSS_DATE_KEY) || "";
} catch (error) {
  lastBossDate = "";
}

try {
  const savedPuzzleRecord = localStorage.getItem(PUZZLE_RECORD_KEY);
  const parsedPuzzleRecord = savedPuzzleRecord ? JSON.parse(savedPuzzleRecord) : null;

  if (parsedPuzzleRecord && typeof parsedPuzzleRecord === "object") {
    puzzleRecord = {
      "3": Number.isFinite(parsedPuzzleRecord["3"]) ? Math.max(1, parsedPuzzleRecord["3"]) : null,
      "4": Number.isFinite(parsedPuzzleRecord["4"]) ? Math.max(1, parsedPuzzleRecord["4"]) : null
    };
  }
} catch (error) {
  puzzleRecord = {
    "3": null,
    "4": null
  };
}

function savePuzzleRecord() {
  try {
    localStorage.setItem(PUZZLE_RECORD_KEY, JSON.stringify(puzzleRecord));
  } catch (error) {
    // Ignore storage failures.
  }
}

function stopPuzzleTimer() {
  if (puzzleTimerId) {
    clearInterval(puzzleTimerId);
    puzzleTimerId = null;
  }
}

function randomStickerPosition() {
  if (!stickerFieldEl || !stickerTargetEl) {
    return;
  }

  const maxX = Math.max(8, stickerFieldEl.clientWidth - 72);
  const maxY = Math.max(8, stickerFieldEl.clientHeight - 72);
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  stickerTargetEl.style.transform = `translate(${x}px, ${y}px)`;
}

function stopStickerGame(message) {
  if (stickerTimerId) {
    clearInterval(stickerTimerId);
    stickerTimerId = null;
  }

  if (stickerMoveId) {
    clearInterval(stickerMoveId);
    stickerMoveId = null;
  }

  if (startStickerBtn) {
    startStickerBtn.disabled = false;
  }

  if (stickerResult) {
    stickerResult.textContent = message;
  }
}

function setupCropQuestion() {
  const options = [
    { key: "TL", pos: "left top" },
    { key: "TR", pos: "right top" },
    { key: "BL", pos: "left bottom" },
    { key: "BR", pos: "right bottom" }
  ];

  const pick = options[Math.floor(Math.random() * options.length)];
  currentQuadrant = pick.key;

  if (cropPreviewEl) {
    cropPreviewEl.style.backgroundPosition = pick.pos;
  }
}

function renderPuzzleMeta() {
  if (puzzleTimeEl) {
    puzzleTimeEl.textContent = String(puzzleElapsed);
  }

  if (puzzleBestEl) {
    const best = puzzleRecord[String(puzzleSize)];
    puzzleBestEl.textContent = best ? `${best}s` : "-";
  }
}

function startPuzzleTimer() {
  stopPuzzleTimer();
  puzzleElapsed = 0;
  renderPuzzleMeta();

  puzzleTimerId = setInterval(() => {
    puzzleElapsed += 1;
    renderPuzzleMeta();
  }, 1000);
}

function saveWeeklyCoinTrack() {
  try {
    localStorage.setItem(WEEKLY_COIN_TRACK_KEY, JSON.stringify(weeklyCoinTrack));
  } catch (error) {
    // Ignore storage failures.
  }
}

function saveMonthlyCoinTrack() {
  try {
    localStorage.setItem(MONTHLY_COIN_TRACK_KEY, JSON.stringify(monthlyCoinTrack));
  } catch (error) {
    // Ignore storage failures.
  }
}

function saveStreak() {
  try {
    localStorage.setItem(STREAK_KEY, JSON.stringify(streakData));
  } catch (error) {
    // Ignore storage failures.
  }
}

function getYesterdayKey() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

function initStreak() {
  if (streakData.lastDate === todayKey) {
    return;
  }

  if (streakData.lastDate === getYesterdayKey()) {
    streakData.count += 1;
  } else {
    streakData.count = 1;
  }

  streakData.lastDate = todayKey;
  saveStreak();
}

function getCoinMultiplier() {
  return streakData.count >= 3 ? 2 : 1;
}

function renderStreak() {
  if (streakCountEl) {
    streakCountEl.textContent = String(streakData.count);
  }

  if (streakMultiplierEl) {
    streakMultiplierEl.textContent = `x${getCoinMultiplier()}`;
  }
}

function saveLeaderboard() {
  try {
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard));
  } catch (error) {
    // Ignore storage failures.
  }
}

function renderLeaderboard() {
  if (lbCatchBestEl) {
    lbCatchBestEl.textContent = String(leaderboard.catchBest);
  }

  if (lbMemoryBestEl) {
    lbMemoryBestEl.textContent = leaderboard.memoryBestMoves ? String(leaderboard.memoryBestMoves) : "-";
  }

  if (lbCoinBestEl) {
    lbCoinBestEl.textContent = String(leaderboard.coinBest);
  }

  if (lbWeeklyCoinEl) {
    lbWeeklyCoinEl.textContent = String(weeklyCoinTrack.coins);
  }

  if (lbMonthlyCoinEl) {
    lbMonthlyCoinEl.textContent = String(monthlyCoinTrack.coins);
  }
}

function saveCoins() {
  try {
    localStorage.setItem(COIN_KEY, String(honeyCoins));
  } catch (error) {
    // Ignore storage failures.
  }
}

function renderCoins() {
  if (coinBalanceEl) {
    coinBalanceEl.textContent = String(honeyCoins);
  }

  if (honeyCoins > leaderboard.coinBest) {
    leaderboard.coinBest = honeyCoins;
    saveLeaderboard();
    renderLeaderboard();
  }
}

function addCoins(amount, reasonText, options = {}) {
  const applyMultiplier = options.applyMultiplier !== false;
  const finalAmount = applyMultiplier ? amount * getCoinMultiplier() : amount;
  honeyCoins += finalAmount;
  weeklyCoinTrack.coins += finalAmount;
  monthlyCoinTrack.coins += finalAmount;
  saveWeeklyCoinTrack();
  saveMonthlyCoinTrack();
  saveCoins();
  renderCoins();
  renderLeaderboard();

  if (reasonText) {
    chapterResult.textContent = `${reasonText} +${finalAmount} Honey Coin.`;
  }
}

function spendCoins(amount) {
  if (honeyCoins < amount) {
    return false;
  }

  honeyCoins -= amount;
  saveCoins();
  renderCoins();
  return true;
}

function saveChapterState() {
  try {
    localStorage.setItem(CHAPTER_KEY, JSON.stringify(chapterClaimState));
  } catch (error) {
    // Ignore storage failures.
  }
}

function getChapterUnlockState() {
  return {
    chapter1: catchHighScore >= 15,
    chapter2: rewardInventory.length >= 5,
    chapter3: bearMood >= 85 && buddyMood >= 80
  };
}

function renderChapterMap() {
  const unlockState = getChapterUnlockState();
  const chapters = [
    { key: "chapter1", btn: chapter1Btn, reward: "Qua chuong 1 🧁", coin: 20 },
    { key: "chapter2", btn: chapter2Btn, reward: "Qua chuong 2 🌟", coin: 30 },
    { key: "chapter3", btn: chapter3Btn, reward: "Qua chuong 3 🏆", coin: 45 }
  ];

  chapters.forEach((chapter) => {
    if (!chapter.btn) {
      return;
    }

    chapter.btn.classList.toggle("unlocked", unlockState[chapter.key]);
    chapter.btn.classList.toggle("claimed", chapterClaimState[chapter.key]);

    if (!unlockState[chapter.key]) {
      chapter.btn.disabled = true;
      return;
    }

    if (chapterClaimState[chapter.key]) {
      chapter.btn.disabled = true;
      return;
    }

    chapter.btn.disabled = false;
  });
}

function claimChapterReward(chapterKey, rewardLabel, coinReward) {
  const unlockState = getChapterUnlockState();

  if (!unlockState[chapterKey] || chapterClaimState[chapterKey]) {
    renderChapterMap();
    return;
  }

  chapterClaimState[chapterKey] = true;
  saveChapterState();
  addRewardToInventory(rewardLabel);
  addCoins(coinReward, `Nhan thanh cong ${rewardLabel}`);
  launchConfettiBurst();
  playSfx("success");
  renderChapterMap();
}

function renderMemoryBoard() {
  if (!memoryBoardEl) {
    return;
  }

  memoryBoardEl.innerHTML = "";

  memoryCards.forEach((card, index) => {
    const cardBtn = document.createElement("button");
    cardBtn.type = "button";
    cardBtn.className = "memory-card";
    cardBtn.textContent = card.matched || card.open ? card.icon : "?";
    cardBtn.disabled = card.matched || memoryLock;
    cardBtn.classList.toggle("matched", card.matched);

    cardBtn.addEventListener("click", () => {
      onMemoryFlip(index);
    });

    memoryBoardEl.appendChild(cardBtn);
  });

  memoryMovesEl.textContent = String(memoryMoves);
  memoryMatchesEl.textContent = String(matchedCount);

  if (memoryComboEl) {
    memoryComboEl.textContent = String(memoryCombo);
  }
}

function initMemoryGame() {
  const icons = ["🧸", "🎀", "🍯", "💖"];
  const deck = [...icons, ...icons]
    .map((icon) => ({ icon, open: false, matched: false }))
    .sort(() => Math.random() - 0.5);

  memoryCards = deck;
  openIndexes = [];
  matchedCount = 0;
  memoryMoves = 0;
  memoryCombo = 0;
  memoryBestCombo = 0;
  memoryLock = false;
  memoryResult.textContent = "Tim tat ca cap giong nhau nhe.";
  renderMemoryBoard();
}

function onMemoryFlip(index) {
  if (memoryLock) {
    return;
  }

  const card = memoryCards[index];

  if (!card || card.open || card.matched) {
    return;
  }

  card.open = true;
  openIndexes.push(index);
  renderMemoryBoard();

  if (openIndexes.length < 2) {
    return;
  }

  memoryMoves += 1;
  const [firstIdx, secondIdx] = openIndexes;
  const firstCard = memoryCards[firstIdx];
  const secondCard = memoryCards[secondIdx];

  if (firstCard.icon === secondCard.icon) {
    firstCard.matched = true;
    secondCard.matched = true;
    openIndexes = [];
    matchedCount += 1;
    memoryCombo += 1;
    memoryBestCombo = Math.max(memoryBestCombo, memoryCombo);
    playSfx("success");

    if (matchedCount === 4) {
      const reward = Math.max(8, 22 - memoryMoves) + memoryBestCombo * 2;
      addCoins(reward, "Thang game lat the");
      addRewardToInventory("Qua lat the 🧠");
      memoryResult.textContent = `Hoan thanh! Ban dung ${memoryMoves} luot, combo max ${memoryBestCombo}.`;
      launchConfettiBurst();
    }

    renderMemoryBoard();
    return;
  }

  memoryLock = true;
  setTimeout(() => {
    firstCard.open = false;
    secondCard.open = false;
    memoryCombo = 0;
    openIndexes = [];
    memoryLock = false;
    renderMemoryBoard();
  }, 650);
}

function isPuzzleSolved() {
  return puzzleOrder.every((piece, index) => piece === index);
}

function renderPuzzleBoard() {
  if (!puzzleBoardEl) {
    return;
  }

  puzzleBoardEl.innerHTML = "";
  puzzleBoardEl.style.gridTemplateColumns = `repeat(${puzzleSize}, minmax(0, 1fr))`;

  puzzleOrder.forEach((piece, index) => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "puzzle-tile";
    tile.classList.toggle("selected", puzzleSelectedIndex === index);
    tile.style.backgroundImage = "url('653523367_1480381450119567_8715379737977280686_n.jpg')";

    const row = Math.floor(piece / puzzleSize);
    const col = piece % puzzleSize;
    tile.style.backgroundSize = `${puzzleSize * 100}% ${puzzleSize * 100}%`;
    tile.style.backgroundPosition = `${(col / (puzzleSize - 1 || 1)) * 100}% ${(row / (puzzleSize - 1 || 1)) * 100}%`;

    tile.addEventListener("click", () => {
      onPuzzleTileClick(index);
    });

    puzzleBoardEl.appendChild(tile);
  });
}

function shufflePuzzle() {
  puzzleOrder = Array.from({ length: puzzleSize * puzzleSize }, (_, i) => i);

  for (let i = puzzleOrder.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [puzzleOrder[i], puzzleOrder[j]] = [puzzleOrder[j], puzzleOrder[i]];
  }

  if (isPuzzleSolved()) {
    [puzzleOrder[0], puzzleOrder[1]] = [puzzleOrder[1], puzzleOrder[0]];
  }

  puzzleSelectedIndex = null;
  puzzleResult.textContent = "Chon 2 o de doi vi tri cho nhau.";
  startPuzzleTimer();
  renderPuzzleBoard();
}

function onPuzzleTileClick(index) {
  if (puzzleSelectedIndex === null) {
    puzzleSelectedIndex = index;
    renderPuzzleBoard();
    return;
  }

  if (puzzleSelectedIndex === index) {
    puzzleSelectedIndex = null;
    renderPuzzleBoard();
    return;
  }

  [puzzleOrder[puzzleSelectedIndex], puzzleOrder[index]] = [puzzleOrder[index], puzzleOrder[puzzleSelectedIndex]];
  puzzleSelectedIndex = null;
  renderPuzzleBoard();
  playSfx("tap");

  if (isPuzzleSolved()) {
    stopPuzzleTimer();
    addCoins(28, "Giai puzzle hinh anh");
    addRewardToInventory("Qua puzzle 🖼️");

    const key = String(puzzleSize);
    const currentBest = puzzleRecord[key];

    if (!currentBest || puzzleElapsed < currentBest) {
      puzzleRecord[key] = puzzleElapsed;
      savePuzzleRecord();
      puzzleResult.textContent = `Ban da giai xong puzzle! Ky luc moi ${puzzleElapsed}s.`;
    } else {
      puzzleResult.textContent = `Ban da giai xong puzzle trong ${puzzleElapsed}s!`;
    }

    renderPuzzleMeta();
    launchConfettiBurst();
    playSfx("success");
  }
}

startStickerBtn?.addEventListener("click", () => {
  stickerScore = 0;
  stickerTime = 15;
  stickerScoreEl.textContent = String(stickerScore);
  stickerTimeEl.textContent = String(stickerTime);
  startStickerBtn.disabled = true;
  stickerResult.textContent = "Nhanh tay len nao!";
  randomStickerPosition();

  stickerMoveId = setInterval(() => {
    randomStickerPosition();
  }, 500);

  stickerTimerId = setInterval(() => {
    stickerTime -= 1;
    stickerTimeEl.textContent = String(stickerTime);

    if (stickerTime <= 0) {
      const reward = Math.max(10, Math.floor(stickerScore * 1.6));
      addCoins(reward, "Game bat sticker");
      addRewardToInventory("Qua sticker 🖼️");
      stopStickerGame(`Het gio! Diem ${stickerScore}, nhan ${reward} coin.`);
    }
  }, 1000);
});

stickerTargetEl?.addEventListener("click", () => {
  if (startStickerBtn && !startStickerBtn.disabled) {
    return;
  }

  stickerScore += 1;
  stickerScoreEl.textContent = String(stickerScore);
  randomStickerPosition();
  playSfx("tap");
});

quadrantButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const choice = btn.getAttribute("data-choice");

    if (!choice) {
      return;
    }

    if (choice === currentQuadrant) {
      addCoins(7, "Doan goc anh dung");
      cropGuessResult.textContent = "Chuan! +7 coin.";
      playSfx("success");
    } else {
      cropGuessResult.textContent = "Chua dung roi, thu cau tiep theo nhe.";
      playSfx("fail");
    }

    setupCropQuestion();
  });
});

rotateBtn?.addEventListener("click", () => {
  rotateDeg = (rotateDeg + 90) % 360;
  if (rotateImageEl) {
    rotateImageEl.style.transform = `rotate(${rotateDeg}deg)`;
  }
  playSfx("tap");
});

checkRotateBtn?.addEventListener("click", () => {
  if (rotateDeg % 360 === 0) {
    addCoins(12, "Xoay anh dung chieu");
    addRewardToInventory("Qua xoay anh 📷");
    rotateResult.textContent = "Dung huong roi! +12 coin.";
    playSfx("success");
    launchConfettiBurst();
  } else {
    rotateResult.textContent = "Chua dung huong, xoay tiep nhe.";
    playSfx("fail");
  }
});

function isWeekend() {
  const day = new Date().getDay();
  return day === 0 || day === 6;
}

function canPlayBossToday() {
  return isWeekend() && lastBossDate !== todayKey;
}

function stopBossGame(message) {
  if (bossTimerId) {
    clearInterval(bossTimerId);
    bossTimerId = null;
  }

  bossTarget.disabled = true;
  startBossBtn.disabled = false;
  bossResult.textContent = message;
}

function renderBossState() {
  if (!bossResult) {
    return;
  }

  if (!isWeekend()) {
    startBossBtn.disabled = true;
    bossTarget.disabled = true;
    bossResult.textContent = "Boss chi mo vao thu 7 va chu nhat.";
    return;
  }

  if (lastBossDate === todayKey) {
    startBossBtn.disabled = true;
    bossTarget.disabled = true;
    bossResult.textContent = "Ban da ha boss hom nay roi!";
    return;
  }

  startBossBtn.disabled = false;
  bossResult.textContent = "San sang vao tran boss!";
}

function isRewardClaimedToday() {
  return rewardClaimDate === todayKey;
}

function isWeeklyRewardClaimed() {
  return weeklyClaim.claimed === true && weeklyClaim.weekKey === weekKey;
}

function areMissionsComplete() {
  return (
    dailyStats.catchBest >= missionTargets.catchBest &&
    dailyStats.guessWins >= missionTargets.guessWins &&
    dailyStats.dressChanges >= missionTargets.dressChanges
  );
}

function areWeeklyMissionsComplete() {
  return (
    weeklyStats.catchTotal >= weeklyTargets.catchTotal &&
    weeklyStats.guessWins >= weeklyTargets.guessWins &&
    weeklyStats.dressChanges >= weeklyTargets.dressChanges
  );
}

function saveWeeklyStats() {
  try {
    localStorage.setItem(WEEKLY_STATS_KEY, JSON.stringify(weeklyStats));
  } catch (error) {
    // Ignore storage failures.
  }
}

function saveWeeklyClaim() {
  try {
    localStorage.setItem(WEEKLY_CLAIM_KEY, JSON.stringify(weeklyClaim));
  } catch (error) {
    // Ignore storage failures.
  }
}

function saveRewardInventory() {
  try {
    localStorage.setItem(REWARD_INVENTORY_KEY, JSON.stringify(rewardInventory));
  } catch (error) {
    // Ignore storage failures.
  }
}

function saveMood() {
  try {
    localStorage.setItem(BEAR_MOOD_KEY, String(bearMood));
  } catch (error) {
    // Ignore storage failures.
  }
}

function saveBuddyMood() {
  try {
    localStorage.setItem(BUDDY_MOOD_KEY, String(buddyMood));
  } catch (error) {
    // Ignore storage failures.
  }
}

function renderMood() {
  if (bearMoodEl) {
    bearMoodEl.textContent = String(bearMood);
  }

  if (moodFillEl) {
    moodFillEl.style.width = `${bearMood}%`;
  }
}

function renderBuddyMood() {
  if (buddyMoodEl) {
    buddyMoodEl.textContent = String(buddyMood);
  }

  if (buddyMoodFillEl) {
    buddyMoodFillEl.style.width = `${buddyMood}%`;
  }
}

function updateMood(delta, message) {
  bearMood = Math.max(0, Math.min(100, bearMood + delta));
  saveMood();
  renderMood();

  if (careResult) {
    careResult.textContent = message;
  }

  if (bearMood >= 90) {
    launchConfettiBurst();
    playSfx("success");
  } else {
    playSfx("equip");
  }
}

function updateBuddyMood(delta, message) {
  buddyMood = Math.max(0, Math.min(100, buddyMood + delta));
  saveBuddyMood();
  renderBuddyMood();

  if (buddyResult) {
    buddyResult.textContent = message;
  }

  if (buddyMood >= 90) {
    playSfx("success");
  } else {
    playSfx("equip");
  }
}

function canSpinToday() {
  return lastSpinDate !== todayKey;
}

function renderSpinState() {
  if (!spinWheelBtn || !spinResult) {
    return;
  }

  spinWheelBtn.disabled = !canSpinToday();

  if (canSpinToday()) {
    spinResult.textContent = "Nhan nut de quay thu van may!";
  } else {
    spinResult.textContent = "Ban da quay hom nay roi, quay lai vao ngay mai nhe!";
  }
}

function addRewardToInventory(label) {
  rewardInventory.unshift({ label, date: todayKey });

  if (rewardInventory.length > 24) {
    rewardInventory = rewardInventory.slice(0, 24);
  }

  saveRewardInventory();
  renderRewardInventory();
}

function renderRewardInventory() {
  if (!rewardInventoryEl) {
    return;
  }

  rewardInventoryEl.innerHTML = "";

  if (rewardInventory.length === 0) {
    const empty = document.createElement("p");
    empty.className = "inventory-empty";
    empty.textContent = "Chua co qua nao. Nhan qua event de mo khoa!";
    rewardInventoryEl.appendChild(empty);
    return;
  }

  rewardInventory.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "inventory-item";
    chip.textContent = `${item.label} (${item.date})`;
    rewardInventoryEl.appendChild(chip);
  });

  renderChapterMap();
}

function renderBadges() {
  const bronzeUnlocked = catchHighScore >= 20;
  const silverUnlocked = catchHighScore >= 40;
  const goldUnlocked = catchHighScore >= 70;

  badgeBronze?.classList.toggle("unlocked", bronzeUnlocked);
  badgeSilver?.classList.toggle("unlocked", silverUnlocked);
  badgeGold?.classList.toggle("unlocked", goldUnlocked);

  if (catchHighScore > leaderboard.catchBest) {
    leaderboard.catchBest = catchHighScore;
    saveLeaderboard();
    renderLeaderboard();
  }

  if (!badgeStatus) {
    return;
  }

  if (goldUnlocked) {
    badgeStatus.textContent = "Ban da mo khoa full bo huy hieu!";
    return;
  }

  if (silverUnlocked) {
    badgeStatus.textContent = "Con 1 buoc nua de dat Gold Crown (>=70 diem).";
    return;
  }

  if (bronzeUnlocked) {
    badgeStatus.textContent = "Tuyet! Tiep tuc de mo khoa Silver Hug (>=40 diem).";
    return;
  }

  badgeStatus.textContent = "Dat ky luc >=20 diem de mo khoa Bronze Paw.";
}

function renderMissions() {
  const catchDone = dailyStats.catchBest >= missionTargets.catchBest;
  const guessDone = dailyStats.guessWins >= missionTargets.guessWins;
  const dressDone = dailyStats.dressChanges >= missionTargets.dressChanges;
  const complete = catchDone && guessDone && dressDone;
  const claimed = isRewardClaimedToday();

  if (missionCatchEl) {
    missionCatchEl.classList.toggle("done", catchDone);
    missionCatchEl.textContent = `Dat diem bat gau hom nay >= ${missionTargets.catchBest} (${Math.min(dailyStats.catchBest, missionTargets.catchBest)}/${missionTargets.catchBest})`;
  }

  if (missionGuessEl) {
    missionGuessEl.classList.toggle("done", guessDone);
    missionGuessEl.textContent = `Doan dung so may man >= ${missionTargets.guessWins} lan (${Math.min(dailyStats.guessWins, missionTargets.guessWins)}/${missionTargets.guessWins})`;
  }

  if (missionDressEl) {
    missionDressEl.classList.toggle("done", dressDone);
    missionDressEl.textContent = `Doi outfit >= ${missionTargets.dressChanges} lan (${Math.min(dailyStats.dressChanges, missionTargets.dressChanges)}/${missionTargets.dressChanges})`;
  }

  if (claimRewardBtn) {
    claimRewardBtn.disabled = !(complete && !claimed);
  }

  if (eventRewardStatus) {
    if (claimed) {
      eventRewardStatus.textContent = "Ban da nhan qua hom nay roi. Mai quay lai nha!";
    } else if (complete) {
      eventRewardStatus.textContent = "Du dieu kien nhan qua! Bam nut de nhan item su kien.";
    } else {
      eventRewardStatus.textContent = "Hay hoan thanh 3 nhiem vu de nhan item su kien.";
    }
  }
}

function renderWeeklyMissions() {
  const catchDone = weeklyStats.catchTotal >= weeklyTargets.catchTotal;
  const guessDone = weeklyStats.guessWins >= weeklyTargets.guessWins;
  const dressDone = weeklyStats.dressChanges >= weeklyTargets.dressChanges;
  const complete = catchDone && guessDone && dressDone;
  const claimed = isWeeklyRewardClaimed();

  if (weeklyMissionCatchEl) {
    weeklyMissionCatchEl.classList.toggle("done", catchDone);
    weeklyMissionCatchEl.textContent = `Tong diem bat gau trong tuan >= ${weeklyTargets.catchTotal} (${Math.min(weeklyStats.catchTotal, weeklyTargets.catchTotal)}/${weeklyTargets.catchTotal})`;
  }

  if (weeklyMissionGuessEl) {
    weeklyMissionGuessEl.classList.toggle("done", guessDone);
    weeklyMissionGuessEl.textContent = `Doan dung so may man trong tuan >= ${weeklyTargets.guessWins} (${Math.min(weeklyStats.guessWins, weeklyTargets.guessWins)}/${weeklyTargets.guessWins})`;
  }

  if (weeklyMissionDressEl) {
    weeklyMissionDressEl.classList.toggle("done", dressDone);
    weeklyMissionDressEl.textContent = `Doi outfit trong tuan >= ${weeklyTargets.dressChanges} (${Math.min(weeklyStats.dressChanges, weeklyTargets.dressChanges)}/${weeklyTargets.dressChanges})`;
  }

  if (claimWeeklyBtn) {
    claimWeeklyBtn.disabled = !(complete && !claimed);
  }

  if (weeklyRewardStatus) {
    if (claimed) {
      weeklyRewardStatus.textContent = "Qua tuan nay da nhan. Tuan moi quay lai nhe!";
    } else if (complete) {
      weeklyRewardStatus.textContent = "Du dieu kien! Bam Nhan qua tuan de lay vat pham hiem.";
    } else {
      weeklyRewardStatus.textContent = "Tich luy ca tuan de nhan qua sieu hiem.";
    }
  }
}

function saveDailyStats() {
  try {
    localStorage.setItem(DAILY_STATS_KEY, JSON.stringify(dailyStats));
  } catch (error) {
    // Ignore storage failures and keep gameplay active.
  }
}

function renderDailyStats() {
  if (statCatchPlaysEl) {
    statCatchPlaysEl.textContent = String(dailyStats.catchPlays);
  }

  if (statCatchBestEl) {
    statCatchBestEl.textContent = String(dailyStats.catchBest);
  }

  if (statGuessPlaysEl) {
    statGuessPlaysEl.textContent = String(dailyStats.guessPlays);
  }

  if (statGuessWinsEl) {
    statGuessWinsEl.textContent = String(dailyStats.guessWins);
  }

  if (statDressChangesEl) {
    statDressChangesEl.textContent = String(dailyStats.dressChanges);
  }

  renderMissions();
  renderWeeklyMissions();
}

function updateEventAccessory(themeName) {
  const eventConfig = themeEventMap[themeName] || themeEventMap.spring;
  currentTheme = themeName;

  if (eventThemeNameEl) {
    eventThemeNameEl.textContent = eventConfig.name;
  }

  if (eventAccessoryBtn) {
    eventAccessoryBtn.dataset.slot = eventConfig.slot;
    eventAccessoryBtn.dataset.icon = eventConfig.icon;
    eventAccessoryBtn.textContent = eventConfig.icon;
    eventAccessoryBtn.setAttribute("aria-label", eventConfig.label);
  }
}

function setTheme(themeName) {
  document.body.classList.remove("theme-noel", "theme-valentine");

  if (themeName === "noel") {
    document.body.classList.add("theme-noel");
  }

  if (themeName === "valentine") {
    document.body.classList.add("theme-valentine");
  }

  updateEventAccessory(themeName);

  themeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === themeName);
  });

  try {
    localStorage.setItem(THEME_KEY, themeName);
  } catch (error) {
    // Ignore storage failures and keep UI usable.
  }
}

try {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme === "noel" || savedTheme === "valentine" || savedTheme === "spring") {
    setTheme(savedTheme);
  } else {
    setTheme("spring");
  }
} catch (error) {
  setTheme("spring");
}

function getAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  return audioContext;
}

function playTone({ frequency, duration, type = "sine", gain = 0.04, delay = 0 }) {
  if (!sfxEnabled) {
    return;
  }

  const ctx = getAudioContext();

  if (!ctx) {
    return;
  }

  const startAt = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(frequency, startAt);
  amp.gain.setValueAtTime(0.0001, startAt);
  amp.gain.exponentialRampToValueAtTime(gain, startAt + 0.01);
  amp.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);

  osc.connect(amp);
  amp.connect(ctx.destination);
  osc.start(startAt);
  osc.stop(startAt + duration + 0.02);
}

function playSfx(name) {
  if (!sfxEnabled) {
    return;
  }

  if (name === "tap") {
    playTone({ frequency: 480, duration: 0.09, type: "triangle", gain: 0.03 });
    return;
  }

  if (name === "start") {
    playTone({ frequency: 520, duration: 0.08, type: "triangle", gain: 0.035 });
    playTone({ frequency: 720, duration: 0.11, type: "triangle", gain: 0.035, delay: 0.08 });
    return;
  }

  if (name === "success") {
    playTone({ frequency: 660, duration: 0.1, type: "sine", gain: 0.04 });
    playTone({ frequency: 880, duration: 0.14, type: "sine", gain: 0.04, delay: 0.1 });
    return;
  }

  if (name === "fail") {
    playTone({ frequency: 280, duration: 0.12, type: "sawtooth", gain: 0.03 });
    return;
  }

  if (name === "equip") {
    playTone({ frequency: 560, duration: 0.08, type: "square", gain: 0.02 });
    return;
  }

  if (name === "levelup") {
    playTone({ frequency: 660, duration: 0.06, type: "triangle", gain: 0.03 });
    playTone({ frequency: 920, duration: 0.1, type: "triangle", gain: 0.03, delay: 0.06 });
  }
}

function launchConfettiBurst() {
  const colors = ["#ff8faf", "#ffd166", "#83d3c9", "#f7a072", "#c2a9ff", "#ffcf99"];
  const count = 42;

  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.transform = `translate3d(0, 0, 0) rotate(${Math.random() * 360}deg)`;
    piece.style.setProperty("--drift", `${Math.round((Math.random() - 0.5) * 180)}px`);
    piece.style.animationDelay = `${Math.random() * 0.15}s`;
    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 1800);
  }
}

function saveDressupState() {
  try {
    localStorage.setItem(DRESSUP_STATE_KEY, JSON.stringify(dressupState));
  } catch (error) {
    // Ignore storage failures and keep UI responsive.
  }
}

function applyDressupState() {
  Object.keys(equippedBySlot).forEach((slot) => {
    const node = equippedBySlot[slot];

    if (node) {
      node.textContent = dressupState[slot] || "";
    }
  });
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTheme(button.dataset.theme || "spring");
    playSfx("tap");
  });
});

claimRewardBtn?.addEventListener("click", () => {
  if (!areMissionsComplete() || isRewardClaimedToday()) {
    renderMissions();
    return;
  }

  const eventConfig = themeEventMap[currentTheme] || themeEventMap.spring;
  equipAccessory(eventConfig.slot, eventConfig.icon, { shouldCount: false, skipSfx: true });

  rewardClaimDate = todayKey;

  try {
    localStorage.setItem(REWARD_CLAIM_DATE_KEY, rewardClaimDate);
  } catch (error) {
    // Ignore storage failures and keep reward flow.
  }

  eventRewardStatus.textContent = `Nhan qua thanh cong! Item ${eventConfig.icon} da duoc mac cho gau.`;
  addRewardToInventory(`Qua ngay ${eventConfig.icon}`);
  addCoins(18, "Hoan thanh event ngay");
  launchConfettiBurst();
  playSfx("success");
  renderMissions();
});

claimWeeklyBtn?.addEventListener("click", () => {
  if (!areWeeklyMissionsComplete() || isWeeklyRewardClaimed()) {
    renderWeeklyMissions();
    return;
  }

  weeklyClaim = {
    weekKey,
    claimed: true
  };
  saveWeeklyClaim();

  const weeklyRewardIcon = "👑";
  equipAccessory("necklace", weeklyRewardIcon, { shouldCount: false, skipSfx: true });
  addRewardToInventory(`Qua tuan ${weeklyRewardIcon}`);
  addCoins(35, "Hoan thanh event tuan");

  weeklyRewardStatus.textContent = "Nhan qua tuan thanh cong! Gau bong vua co vuong mien hiem.";
  launchConfettiBurst();
  playSfx("success");
  renderWeeklyMissions();
});

spinWheelBtn?.addEventListener("click", () => {
  if (!canSpinToday() || !luckyWheel) {
    renderSpinState();
    return;
  }

  const wheelRewards = [
    { label: "Qua quay: 🍰", mood: 8, coin: 10 },
    { label: "Qua quay: 🧸", mood: 10, coin: 14 },
    { label: "Qua quay: 🎀", mood: 6, coin: 9 },
    { label: "Qua quay: ⭐", mood: 5, coin: 8 },
    { label: "Qua quay: 💌", mood: 7, coin: 11 }
  ];

  const reward = wheelRewards[Math.floor(Math.random() * wheelRewards.length)];
  luckyWheel.classList.remove("spinning");
  void luckyWheel.offsetWidth;
  luckyWheel.classList.add("spinning");

  setTimeout(() => {
    lastSpinDate = todayKey;

    try {
      localStorage.setItem(SPIN_DATE_KEY, lastSpinDate);
    } catch (error) {
      // Ignore storage failures.
    }

    addRewardToInventory(reward.label);
    addCoins(reward.coin, "Qua vong quay");
    updateMood(reward.mood, `Ban vua nhan ${reward.label} - tam trang +${reward.mood}!`);
    renderSpinState();
  }, 1550);
});

feedBearBtn?.addEventListener("click", () => {
  updateMood(8, "Be gau duoc cho an va dang vui hon nhieu!");
});

sleepBearBtn?.addEventListener("click", () => {
  updateMood(10, "Be gau duoc ngu ngoan, nang luong day pin roi.");
});

playBearBtn?.addEventListener("click", () => {
  updateMood(6, "Be gau vua choi cung ban, dang cuoi toe toet ne.");
});

feedBuddyBtn?.addEventListener("click", () => {
  updateBuddyMood(7, "Be tho vua an ca rot, dang nhay tung tang!");
});

sleepBuddyBtn?.addEventListener("click", () => {
  updateBuddyMood(9, "Be tho nghi ngoi xong va day nang luong roi.");
});

playBuddyBtn?.addEventListener("click", () => {
  updateBuddyMood(6, "Be tho dang vui va ve ve truoc mat ban ne.");
});

noteBtn?.addEventListener("click", () => {
  noteIndex = (noteIndex + 1) % notes.length;
  noteBox.textContent = notes[noteIndex];
  playSfx("tap");
});

heartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    btn.textContent = btn.classList.contains("active") ? "♥" : "♡";
    playSfx("tap");
  });
});

musicBtn?.addEventListener("click", async () => {
  try {
    if (bgAudio.paused) {
      await bgAudio.play();
      musicBtn.textContent = "Tat nhac";
      return;
    }

    bgAudio.pause();
    musicBtn.textContent = "Bat nhac diu nhe";
  } catch (error) {
    musicBtn.textContent = "Trinh duyet chan autoplay";
  }
});

sfxBtn?.addEventListener("click", () => {
  sfxEnabled = !sfxEnabled;
  sfxBtn.textContent = sfxEnabled ? "Am thanh game: Bat" : "Am thanh game: Tat";

  if (sfxEnabled) {
    playSfx("start");
  }
});

function resetCatchGameState() {
  catchScore = 0;
  catchTime = 15;
  catchLevel = 1;
  targetMoveDelay = 550;
  catchScoreEl.textContent = String(catchScore);
  catchTimeEl.textContent = String(catchTime);
  catchLevelEl.textContent = String(catchLevel);
  catchTarget.disabled = true;
  catchTarget.classList.remove("active");
}

function restartTargetLoop() {
  if (targetMoveId) {
    clearInterval(targetMoveId);
    targetMoveId = null;
  }

  targetMoveId = setInterval(() => {
    moveTargetEmoji();
  }, targetMoveDelay);
}

function updateCatchLevel() {
  const computedLevel = Math.min(8, Math.floor(catchScore / 4) + 1);

  if (computedLevel <= catchLevel) {
    return;
  }

  catchLevel = computedLevel;
  targetMoveDelay = Math.max(230, 550 - (catchLevel - 1) * 45);
  catchLevelEl.textContent = String(catchLevel);
  restartTargetLoop();
  playSfx("levelup");
}

function stopCatchGame(message) {
  if (catchCountdownId) {
    clearInterval(catchCountdownId);
    catchCountdownId = null;
  }

  if (targetMoveId) {
    clearInterval(targetMoveId);
    targetMoveId = null;
  }

  catchTarget.disabled = true;
  catchTarget.classList.remove("active");
  let endMessage = message;

  if (catchScore > catchHighScore) {
    catchHighScore = catchScore;
    catchHighScoreEl.textContent = String(catchHighScore);

    try {
      localStorage.setItem(CATCH_HIGH_SCORE_KEY, String(catchHighScore));
    } catch (error) {
      // Ignore storage failures and continue game flow.
    }

    endMessage = `${message} Ky luc moi!`;
    playSfx("success");
    launchConfettiBurst();
  }

  if (catchScore > 0) {
    weeklyStats.catchTotal += catchScore;
    saveWeeklyStats();
    addCoins(Math.min(15, Math.floor(catchScore / 2) + 1), "Thuong game bat gau");
  }

  if (catchScore > dailyStats.catchBest) {
    dailyStats.catchBest = catchScore;
    saveDailyStats();
    renderDailyStats();
  }

  catchResultEl.textContent = endMessage;
  startCatchGameBtn.disabled = false;
  renderBadges();
}

function moveTargetEmoji() {
  const faces = ["🧸", "ʕ •ᴥ•ʔ", "ʕ•ﻌ•ʔ", "🧸✨", "🧸🎀"];
  const index = Math.floor(Math.random() * faces.length);
  catchTarget.textContent = faces[index];
}

startCatchGameBtn?.addEventListener("click", () => {
  dailyStats.catchPlays += 1;
  saveDailyStats();
  renderDailyStats();

  resetCatchGameState();
  startCatchGameBtn.disabled = true;
  catchTarget.disabled = false;
  catchTarget.classList.add("active");
  catchResultEl.textContent = "Bat gau that nhanh nao!";
  playSfx("start");
  moveTargetEmoji();
  restartTargetLoop();

  catchCountdownId = setInterval(() => {
    catchTime -= 1;
    catchTimeEl.textContent = String(catchTime);

    if (catchTime <= 0) {
      stopCatchGame(`Het gio! Ban bat duoc ${catchScore} be gau.`);
    }
  }, 1000);
});

catchTarget?.addEventListener("click", () => {
  if (catchTarget.disabled) {
    return;
  }

  catchScore += 1;
  catchScoreEl.textContent = String(catchScore);
  updateCatchLevel();
  playSfx("tap");
  moveTargetEmoji();
});

guessBtn?.addEventListener("click", () => {
  const value = Number(guessInput.value);

  if (!Number.isInteger(value) || value < 1 || value > 5) {
    guessResult.textContent = "Nhap so tu 1 den 5 nha nang!";
    playSfx("fail");
    return;
  }

  dailyStats.guessPlays += 1;
  saveDailyStats();
  renderDailyStats();

  const luckyNumber = Math.floor(Math.random() * 5) + 1;

  if (value === luckyNumber) {
    guessResult.textContent = "Chuan luon! Be gau gui ban mot chiec om ao 🧸";
    dailyStats.guessWins += 1;
    saveDailyStats();
    renderDailyStats();
    weeklyStats.guessWins += 1;
    saveWeeklyStats();
    renderWeeklyMissions();
    addCoins(6, "Doan so dung");
    playSfx("success");
    return;
  }

  guessResult.textContent = `Gan dung roi! So may man la ${luckyNumber}, thu lai nhe.`;
  playSfx("fail");
});

function equipAccessory(slot, icon, options = {}) {
  const shouldCount = options.shouldCount !== false;
  const skipSfx = options.skipSfx === true;
  const target = equippedBySlot[slot];

  if (!target) {
    return;
  }

  dressupState[slot] = icon;
  target.textContent = icon;
  saveDressupState();

  if (shouldCount) {
    dailyStats.dressChanges += 1;
    saveDailyStats();
    renderDailyStats();

    weeklyStats.dressChanges += 1;
    saveWeeklyStats();
    renderWeeklyMissions();
  }

  dressupResult.textContent = "Xinh qua! Be gau vua duoc mac do moi.";

  if (!skipSfx) {
    playSfx("equip");
  }
}

accessoryButtons.forEach((item) => {
  item.addEventListener("dragstart", (event) => {
    const slot = item.dataset.slot;
    const icon = item.dataset.icon;

    if (event.dataTransfer) {
      event.dataTransfer.setData("text/plain", JSON.stringify({ slot, icon }));
      event.dataTransfer.effectAllowed = "copy";
    }

    dressupStage.classList.add("active-drop");
  });

  item.addEventListener("click", () => {
    equipAccessory(item.dataset.slot, item.dataset.icon);
  });
});

dressupStage?.addEventListener("dragover", (event) => {
  event.preventDefault();
  dressupStage.classList.add("active-drop");
});

dressupStage?.addEventListener("dragleave", () => {
  dressupStage.classList.remove("active-drop");
});

dressupStage?.addEventListener("drop", (event) => {
  event.preventDefault();
  dressupStage.classList.remove("active-drop");

  try {
    if (!event.dataTransfer) {
      throw new Error("No transfer data");
    }

    const raw = event.dataTransfer.getData("text/plain");
    const payload = JSON.parse(raw);
    equipAccessory(payload.slot, payload.icon);
  } catch (error) {
    dressupResult.textContent = "Oops, keo tha chua dung. Thu lai nhe.";
    playSfx("fail");
  }
});

randomDressBtn?.addEventListener("click", () => {
  Object.keys(accessoriesBySlot).forEach((slot) => {
    const options = accessoriesBySlot[slot];
    const randomIcon = options[Math.floor(Math.random() * options.length)];
    equipAccessory(slot, randomIcon, { shouldCount: false });
  });

  dailyStats.dressChanges += 1;
  saveDailyStats();
  renderDailyStats();
  weeklyStats.dressChanges += 1;
  saveWeeklyStats();
  renderWeeklyMissions();
  dressupResult.textContent = "Random outfit da san sang, gau bong xinh nhat hom nay!";
  playSfx("start");
});

clearDressBtn?.addEventListener("click", () => {
  dressupState = {
    hat: "",
    bow: "",
    glasses: "",
    dress: "",
    bag: "",
    necklace: ""
  };

  Object.values(equippedBySlot).forEach((node) => {
    if (node) {
      node.textContent = "";
    }
  });

  saveDressupState();
  dailyStats.dressChanges += 1;
  saveDailyStats();
  renderDailyStats();
  weeklyStats.dressChanges += 1;
  saveWeeklyStats();
  renderWeeklyMissions();
  dressupResult.textContent = "Be gau da tro ve style mac dinh.";
  playSfx("tap");
});

restartMemoryBtn?.addEventListener("click", () => {
  initMemoryGame();
  playSfx("start");
});

restartPuzzleBtn?.addEventListener("click", () => {
  shufflePuzzle();
  playSfx("start");
});

puzzleDifficultyEl?.addEventListener("change", () => {
  const value = Number(puzzleDifficultyEl.value);
  puzzleSize = value === 4 ? 4 : 3;
  shufflePuzzle();
  playSfx("start");
});

shopGrid?.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  const cost = Number(target.dataset.cost);
  const reward = target.dataset.reward;

  if (!Number.isFinite(cost) || !reward) {
    return;
  }

  if (!spendCoins(cost)) {
    shopResult.textContent = "Khong du Honey Coin roi, choi them game nhe!";
    playSfx("fail");
    return;
  }

  addRewardToInventory(`Shop: ${reward}`);
  shopResult.textContent = `Mua thanh cong ${reward}!`;
  playSfx("success");
});

startBossBtn?.addEventListener("click", () => {
  if (!canPlayBossToday()) {
    renderBossState();
    return;
  }

  bossTimer = 10;
  bossHits = 0;
  bossTimerEl.textContent = String(bossTimer);
  bossHitsEl.textContent = String(bossHits);
  startBossBtn.disabled = true;
  bossTarget.disabled = false;
  bossResult.textContent = "Danh boss nao! Bam that nhanh.";

  bossTimerId = setInterval(() => {
    bossTimer -= 1;
    bossTimerEl.textContent = String(bossTimer);

    if (bossTimer <= 0) {
      const reward = bossHits >= 18 ? 60 : bossHits >= 12 ? 35 : 15;
      addCoins(reward, "Thuong mini boss", { applyMultiplier: false });
      addRewardToInventory("Boss drop 🐻‍❄️");
      lastBossDate = todayKey;

      try {
        localStorage.setItem(BOSS_DATE_KEY, lastBossDate);
      } catch (error) {
        // Ignore storage failures.
      }

      launchConfettiBurst();
      stopBossGame(`Ket thuc! Ban hit ${bossHits}, nhan ${reward} coin.`);
      renderBossState();
    }
  }, 1000);
});

bossTarget?.addEventListener("click", () => {
  if (bossTarget.disabled) {
    return;
  }

  bossHits += 1;
  bossHitsEl.textContent = String(bossHits);
  bossTarget.classList.remove("hit");
  void bossTarget.offsetWidth;
  bossTarget.classList.add("hit");
  playSfx("tap");
});

chapter1Btn?.addEventListener("click", () => {
  claimChapterReward("chapter1", "Qua chuong 1 🧁", 20);
});

chapter2Btn?.addEventListener("click", () => {
  claimChapterReward("chapter2", "Qua chuong 2 🌟", 30);
});

chapter3Btn?.addEventListener("click", () => {
  claimChapterReward("chapter3", "Qua chuong 3 🏆", 45);
});

applyDressupState();
initStreak();
renderDailyStats();
renderWeeklyMissions();
renderRewardInventory();
renderBadges();
renderMood();
renderBuddyMood();
renderSpinState();
renderCoins();
renderStreak();
renderChapterMap();
initMemoryGame();
renderPuzzleMeta();
shufflePuzzle();
setupCropQuestion();
renderLeaderboard();
renderBossState();
