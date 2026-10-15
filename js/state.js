/**
 * ANEA'S LITTLE UNIVERSE ♡
 * State & Persistence Manager
 */

const STORAGE_KEY = "aneas_universe_save_v1";

const DEFAULT_STATE = {
  starsCollected: 0,
  maxStars: 24, // 24 stars for her 24th birthday!
  collectedStarIds: [],
  memoriesVisited: [],
  lettersOpened: [],
  minigames: {
    collectStars: false,
    constellation: false,
    quiz: false
  },
  secrets: {
    secretStar: false,
    hiddenWord: false,
    tinyGift: false
  },
  soundEnabled: true,
  masterVolume: 0.6,
  reducedMotion: false,
  introSeen: false,
  castleUnlocked: false,
  finalGiftOpened: false,
  activeScene: "intro",
  unlockedDestinations: ["home"],
  exploredDestinations: []
};

class StateManager {
  constructor() {
    this.state = this.load();
    this.listeners = [];
  }

  load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return { ...DEFAULT_STATE, ...parsed };
      }
    } catch (e) {
      console.warn("Storage could not be loaded:", e);
    }
    return { ...DEFAULT_STATE };
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn("Storage could not be saved:", e);
    }
    this.notify();
  }

  reset() {
    this.state = {
      ...DEFAULT_STATE,
      starsCollected: 0,
      collectedStarIds: [],
      memoriesVisited: [],
      lettersOpened: [],
      minigames: {
        collectStars: false,
        constellation: false,
        quiz: false
      },
      secrets: {
        secretStar: false,
        hiddenWord: false,
        tinyGift: false
      },
      castleUnlocked: false,
      finalGiftOpened: false,
      unlockedDestinations: ["home"],
      exploredDestinations: []
    };
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  collectStar(starId) {
    if (!this.state.collectedStarIds.includes(starId)) {
      this.state.collectedStarIds.push(starId);
      this.state.starsCollected = Math.min(this.state.maxStars, this.state.collectedStarIds.length);
      this.checkCastleUnlock();
      this.save();
      return true;
    }
    return false;
  }

  visitMemory(memoryId) {
    if (!this.state.memoriesVisited.includes(memoryId)) {
      this.state.memoriesVisited.push(memoryId);
      this.checkCastleUnlock();
      this.save();
      return true;
    }
    return false;
  }

  openLetter(letterId) {
    if (!this.state.lettersOpened.includes(letterId)) {
      this.state.lettersOpened.push(letterId);
      this.checkCastleUnlock();
      this.save();
      return true;
    }
    return false;
  }

  completeMinigame(gameKey) {
    if (this.state.minigames[gameKey] !== undefined) {
      this.state.minigames[gameKey] = true;
      this.checkCastleUnlock();
      this.save();
    }
  }

  unlockSecret(secretKey) {
    if (this.state.secrets[secretKey] !== undefined && !this.state.secrets[secretKey]) {
      this.state.secrets[secretKey] = true;
      this.collectStar(`secret_${secretKey}`);
      this.save();
      return true;
    }
    return false;
  }

  checkCastleUnlock() {
    const explored = this.state.exploredDestinations || [];
    if (explored.includes("lake") || explored.length >= 5) {
      this.state.castleUnlocked = true;
    }
  }

  isDestinationUnlocked(destId) {
    if (destId === "home") return true;
    const explored = this.state.exploredDestinations || [];
    if (destId === "garden") return explored.includes("home");
    if (destId === "mailbox") return explored.includes("garden");
    if (destId === "carnival") return explored.includes("mailbox");
    if (destId === "lake") return explored.includes("carnival");
    if (destId === "castle") return explored.includes("lake") || explored.length >= 5;
    return false;
  }

  isDestinationExplored(destId) {
    if (!this.state.exploredDestinations) {
      this.state.exploredDestinations = [];
    }
    if (this.state.exploredDestinations.includes(destId)) return true;
    if (destId === "garden" && this.state.memoriesVisited.length >= 3) return true;
    if (destId === "mailbox" && this.state.lettersOpened.length >= 2) return true;
    if (destId === "carnival" && Object.values(this.state.minigames).filter(Boolean).length >= 1) return true;
    return false;
  }

  markDestinationExplored(destId) {
    if (!this.state.exploredDestinations) {
      this.state.exploredDestinations = [];
    }
    if (!this.state.exploredDestinations.includes(destId)) {
      this.state.exploredDestinations.push(destId);
    }
    this.unlockNextDestination(destId);
    this.save();
  }

  unlockNextDestination(currentDest) {
    const sequence = ["home", "garden", "mailbox", "carnival", "lake", "castle"];
    const idx = sequence.indexOf(currentDest);
    if (idx !== -1 && idx < sequence.length - 1) {
      const nextDest = sequence[idx + 1];
      if (!this.state.unlockedDestinations) {
        this.state.unlockedDestinations = ["home"];
      }
      if (!this.state.unlockedDestinations.includes(nextDest)) {
        this.state.unlockedDestinations.push(nextDest);
        if (nextDest === "castle") {
          this.state.castleUnlocked = true;
        }
        this.save();
        return nextDest;
      }
    }
    return null;
  }

  getDiscoveryProgress() {
    // Total discovery percentage (0 - 100%)
    const totalItems = 6 + 6 + 3 + 3; // 6 memories, 6 letters, 3 minigames, 3 secrets
    const current = 
      this.state.memoriesVisited.length +
      this.state.lettersOpened.length +
      Object.values(this.state.minigames).filter(Boolean).length +
      Object.values(this.state.secrets).filter(Boolean).length;
    return Math.min(100, Math.round((current / totalItems) * 100));
  }
}

export const stateManager = new StateManager();
