/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Scene: The Interactive Celestial World Map
 * Symmetrical Celestial Orbit Layout (As requested by Aseel)
 * with Sequential Station Unlocking (01 -> 02 -> 03 -> 04 -> 05 -> 06)
 */

import { CONFIG } from "../config.js";
import { stateManager } from "../state.js";
import { audioManager } from "../audio.js";
import { Characters } from "../characters.js";

export function renderWorldScene(container, navigateTo) {
  const isCastleUnlocked = stateManager.state.castleUnlocked;
  const starsCollected = stateManager.state.starsCollected;
  const maxStars = stateManager.state.maxStars;
  const memoriesCount = stateManager.state.memoriesVisited.length;
  const lettersCount = stateManager.state.lettersOpened.length;
  const carnivalDone = Object.values(stateManager.state.minigames).filter(Boolean).length;

  const STATIONS_INFO = {
    home: { titleAr: "بيتنا الصغير", prevName: null },
    garden: { titleAr: "حديقة الذكريات", prevName: "بيتنا الصغير" },
    mailbox: { titleAr: "صندوق رسائل الحب", prevName: "حديقة الذكريات" },
    carnival: { titleAr: "كرنفال النجوم والألعاب", prevName: "صندوق رسائل الحب" },
    lake: { titleAr: "بحيرة النجوم", prevName: "كرنفال النجوم" },
    castle: { titleAr: "قصر الـ 24 عاماً", prevName: "بحيرة النجوم" }
  };

  const isHomeUnlocked = stateManager.isDestinationUnlocked("home");
  const isGardenUnlocked = stateManager.isDestinationUnlocked("garden");
  const isMailboxUnlocked = stateManager.isDestinationUnlocked("mailbox");
  const isCarnivalUnlocked = stateManager.isDestinationUnlocked("carnival");
  const isLakeUnlocked = stateManager.isDestinationUnlocked("lake");
  const isCastleOpen = stateManager.isDestinationUnlocked("castle");

  container.innerHTML = `
    <div class="world-scene">
      <!-- Top Clean Glass Navigation Bar -->
      <header class="universe-header">
        <div class="universe-title-badge">
          <span class="sparkle-icon">✧</span>
          <span class="universe-name">ANEA'S LITTLE UNIVERSE</span>
          <span class="heart-symbol">♡</span>
        </div>

        <div class="universe-stats">
          <div class="stat-pill star-stat" id="starCounter" title="Birthday Stars collected">
            <span class="star-icon">⭐</span>
            <span class="star-count">${starsCollected}</span>
            <span class="star-divider">/</span>
            <span class="star-max">${maxStars}</span>
          </div>

          <div class="stat-pill castle-stat ${isCastleOpen ? 'unlocked' : 'locked'}" title="${isCastleOpen ? 'Birthday Castle Unlocked!' : 'Explore memories & letters to unlock'}">
            <span class="castle-icon">${isCastleOpen ? '👑' : '🔒'}</span>
            <span class="castle-text">${isCastleOpen ? 'Castle Open' : 'Castle Sealed'}</span>
          </div>

          <!-- Sound Controls -->
          <div class="sound-controls">
            <button class="sound-toggle-btn" id="soundToggleBtn" aria-label="Toggle Sound" title="Toggle Sound">
              ${audioManager.isMuted ? '🔇' : '🎵'}
            </button>
            <input type="range" class="volume-slider" id="volumeSlider" min="0" max="1" step="0.05" value="${audioManager.volume}" title="Volume" />
          </div>

          <!-- Menu / Info -->
          <button class="settings-btn" id="menuToggleBtn" title="Universe Menu & Progress">
            ☰
          </button>
        </div>
      </header>

      <!-- Center Title Header -->
      <div class="universe-hero-header">
        <h2 class="universe-hero-title">A Journey Written Across the Stars</h2>
        <p class="universe-hero-ar" dir="rtl">ست محطات صُنعت بكل حب.. استكشفي عوالمنا بالترتيب خطوة بخطوة ♡</p>
      </div>

      <!-- Main Symmetrical Celestial Orbit Canvas / Layout -->
      <main class="celestial-orbit-stage">
        <!-- Background Concentric Orbital Rings & Starlight Lines -->
        <svg class="celestial-orbit-lines" viewBox="0 0 900 520" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="orbit-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="rgba(223, 186, 83, 0.45)" />
              <stop offset="50%" stop-color="rgba(116, 143, 126, 0.3)" />
              <stop offset="100%" stop-color="rgba(98, 125, 152, 0.45)" />
            </linearGradient>
          </defs>
          <!-- Outer Elliptical Orbit Track -->
          <ellipse cx="450" cy="280" rx="380" ry="170" fill="none" stroke="url(#orbit-grad)" stroke-width="1.5" stroke-dasharray="6 6" />
          <!-- Inner Orbit Track -->
          <ellipse cx="450" cy="280" rx="240" ry="105" fill="none" stroke="rgba(223, 186, 83, 0.25)" stroke-width="1.2" stroke-dasharray="4 4" />
          <!-- Constellation Rays between Castle and Planets -->
          <line x1="450" y1="110" x2="160" y2="240" stroke="rgba(223, 186, 83, 0.22)" stroke-width="1" stroke-dasharray="3 3" />
          <line x1="450" y1="110" x2="740" y2="240" stroke="rgba(223, 186, 83, 0.22)" stroke-width="1" stroke-dasharray="3 3" />
          <line x1="450" y1="110" x2="270" y2="400" stroke="rgba(223, 186, 83, 0.22)" stroke-width="1" stroke-dasharray="3 3" />
          <line x1="450" y1="110" x2="630" y2="400" stroke="rgba(223, 186, 83, 0.22)" stroke-width="1" stroke-dasharray="3 3" />
          <line x1="450" y1="110" x2="450" y2="440" stroke="rgba(223, 186, 83, 0.22)" stroke-width="1" stroke-dasharray="3 3" />
        </svg>

        <!-- Symmetrical Celestial Grid Container -->
        <div class="orbit-nodes-container">
          <!-- Top Center: The Birthday Castle (Grand Peak) -->
          <div class="destination-node castle-orbit-node ${isCastleOpen ? 'unlocked' : 'locked'}" data-dest="castle" style="top: 18%; left: 50%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual castle-visual">
              <span class="node-emoji">🏰</span>
              ${!isCastleOpen ? '<span class="lock-pip">🔒</span>' : '<span class="crown-pip">👑</span>'}
            </div>
            <div class="node-label">
              <span class="node-title">The Birthday Castle</span>
              <span class="node-arabic">قصر عيد الميلاد الـ 24</span>
              <span class="node-badge ${isCastleOpen ? 'badge-open' : 'badge-locked'}">
                ${isCastleOpen ? 'Open — Tap to Celebrate' : 'Explore to Unlock'}
              </span>
            </div>
          </div>

          <!-- Destination 1: Our Little Home (Left Upper Orbit) -->
          <div class="destination-node planet-orbit-node ${isHomeUnlocked ? 'unlocked' : 'locked'}" data-dest="home" style="top: 48%; left: 18%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual home-visual">
              <span class="node-emoji">🏡</span>
              ${!isHomeUnlocked ? '<span class="lock-pip">🔒</span>' : ''}
            </div>
            <div class="node-label">
              <span class="node-title">Our Little Home</span>
              <span class="node-arabic">بيتنا الصغير</span>
              <span class="node-badge">Cozy Haven</span>
            </div>
          </div>

          <!-- Destination 2: Garden of Memories (Right Upper Orbit) -->
          <div class="destination-node planet-orbit-node ${isGardenUnlocked ? 'unlocked' : 'locked'}" data-dest="garden" style="top: 48%; left: 82%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual garden-visual">
              <span class="node-emoji">🌸</span>
              ${!isGardenUnlocked ? '<span class="lock-pip">🔒</span>' : ''}
            </div>
            <div class="node-label">
              <span class="node-title">Garden of Memories</span>
              <span class="node-arabic">حديقة الذكريات</span>
              <span class="node-badge ${isGardenUnlocked ? '' : 'badge-locked'}">
                ${isGardenUnlocked ? `${memoriesCount}/6 Memories` : '🔒 Locked'}
              </span>
            </div>
          </div>

          <!-- Destination 3: Mailbox of Love (Left Lower Orbit) -->
          <div class="destination-node planet-orbit-node ${isMailboxUnlocked ? 'unlocked' : 'locked'}" data-dest="mailbox" style="top: 78%; left: 28%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual mailbox-visual">
              <span class="node-emoji">💌</span>
              ${!isMailboxUnlocked ? '<span class="lock-pip">🔒</span>' : ''}
            </div>
            <div class="node-label">
              <span class="node-title">Mailbox of Love</span>
              <span class="node-arabic">صندوق رسائل الحب</span>
              <span class="node-badge ${isMailboxUnlocked ? '' : 'badge-locked'}">
                ${isMailboxUnlocked ? `${lettersCount}/6 Letters` : '🔒 Locked'}
              </span>
            </div>
          </div>

          <!-- Destination 4: The Little Carnival (Center Lower Orbit) -->
          <div class="destination-node planet-orbit-node ${isCarnivalUnlocked ? 'unlocked' : 'locked'}" data-dest="carnival" style="top: 84%; left: 50%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual carnival-visual">
              <span class="node-emoji">🎪</span>
              ${!isCarnivalUnlocked ? '<span class="lock-pip">🔒</span>' : ''}
            </div>
            <div class="node-label">
              <span class="node-title">The Little Carnival</span>
              <span class="node-arabic">كرنفال النجوم والألعاب</span>
              <span class="node-badge ${isCarnivalUnlocked ? '' : 'badge-locked'}">
                ${isCarnivalUnlocked ? `${carnivalDone}/3 Games Done` : '🔒 Locked'}
              </span>
            </div>
          </div>

          <!-- Destination 5: The Lake of Stars (Right Lower Orbit) -->
          <div class="destination-node planet-orbit-node ${isLakeUnlocked ? 'unlocked' : 'locked'}" data-dest="lake" style="top: 78%; left: 72%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual lake-visual">
              <span class="node-emoji">🌊</span>
              ${!isLakeUnlocked ? '<span class="lock-pip">🔒</span>' : ''}
            </div>
            <div class="node-label">
              <span class="node-title">The Lake of Stars</span>
              <span class="node-arabic">بحيرة النجوم الهادئة</span>
              <span class="node-badge ${isLakeUnlocked ? '' : 'badge-locked'}">
                ${isLakeUnlocked ? 'Peace & Reflections' : '🔒 Locked'}
              </span>
            </div>
          </div>
        </div>

        <!-- Hidden Secret Star Easter Egg -->
        <div class="secret-star-element" id="secretStarBtn" style="position: absolute; top: 25%; left: 30%; cursor: pointer;" title="A faint mysterious sparkle in the cosmos...">
          <span class="secret-sparkle">✧</span>
        </div>

        <!-- Chibi Duo Sitting Together Cutest Corner (Anea & Cute Pink Aseel) -->
        <div class="chibi-corner-mascot" title="Anea & Aseel sitting beneath the stars">
          <div class="mini-moon-asteroid"></div>
          ${Characters.getTogetherSceneSVG("sitting", 180)}
        </div>
      </main>

      <!-- Modal Dialog Container -->
      <div class="celestial-modal-overlay" id="worldModal" style="display: none;">
        <div class="celestial-modal-card">
          <button class="modal-close-btn" id="modalCloseBtn">✕</button>
          <div class="modal-content-slot" id="modalSlot"></div>
        </div>
      </div>
    </div>
  `;

  // --- Event Listeners ---

  const modal = container.querySelector("#worldModal");
  const modalSlot = container.querySelector("#modalSlot");
  const modalClose = container.querySelector("#modalCloseBtn");

  function showModal(html) {
    modalSlot.innerHTML = html;
    modal.style.display = "flex";
  }

  modalClose.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  const handleNav = (dest) => {
    const isUnlocked = stateManager.isDestinationUnlocked(dest);
    const station = STATIONS_INFO[dest];

    if (!isUnlocked) {
      audioManager.playChime(329.63, 0.6);
      showModal(`
        <div class="locked-station-dialog" style="text-align: center; padding: 10px 14px;">
          <div class="locked-bubble-icon" style="font-size: 2.8rem; margin-bottom: 12px; filter: drop-shadow(0 0 10px rgba(223, 186, 83, 0.5));">🔒</div>
          <h3 class="locked-title-en" style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--warm-ivory); margin-bottom: 2px;">This World is Sleeping</h3>
          <h4 class="locked-title-ar" dir="rtl" style="font-family: var(--font-arabic); font-size: 1.25rem; color: var(--gold-starlight); margin-bottom: 12px;">هذه المحطة مغلقة حالياً ♡</h4>
          <div style="color: var(--gold-starlight); font-size: 0.9rem; letter-spacing: 0.3em; margin-bottom: 14px; opacity: 0.7;">✧ ✦ ✧</div>
          <p class="locked-desc-ar" dir="rtl" style="font-family: var(--font-arabic); font-size: 1.05rem; color: var(--warm-cream); line-height: 1.8; margin-bottom: 24px;">
            عالمنا الصغير يُكتشف خطوة بخطوة بكل حب..<br>
            استكشفي محطة <strong>"${station.prevName}"</strong> أولاً لتفتح لكِ النجوم أبواب محطة <strong>"${station.titleAr}"</strong> بكل دفء ✨
          </p>
          <button class="celestial-btn modal-agree-btn" id="lockedDismissBtn" style="padding: 12px 28px; font-family: var(--font-arabic); font-size: 0.95rem;">
            <span>فهمت، سأكمل الرحلة بالترتيب ♡</span>
          </button>
        </div>
      `);
      const dismissBtn = container.querySelector("#lockedDismissBtn");
      if (dismissBtn) dismissBtn.addEventListener("click", () => modal.style.display = "none");
      return;
    }

    audioManager.playChime(659.25, 0.8);
    navigateTo(dest);
  };

  container.querySelectorAll(".destination-node").forEach(node => {
    node.addEventListener("click", () => handleNav(node.getAttribute("data-dest")));
  });

  // Sound Toggle & Volume Slider
  const soundBtn = container.querySelector("#soundToggleBtn");
  const volumeSlider = container.querySelector("#volumeSlider");
  soundBtn.addEventListener("click", () => {
    const isUnmuted = audioManager.toggleMute();
    soundBtn.textContent = isUnmuted ? "🎵" : "🔇";
    stateManager.state.soundEnabled = isUnmuted;
    stateManager.save();
  });

  volumeSlider.addEventListener("input", (e) => {
    const vol = parseFloat(e.target.value);
    audioManager.setVolume(vol);
    stateManager.state.masterVolume = vol;
    stateManager.save();
  });

  // Secret Star Easter Egg
  const secretStar = container.querySelector("#secretStarBtn");
  secretStar.addEventListener("click", () => {
    stateManager.unlockSecret("secretStar");
    audioManager.playStarlightChord();
    showModal(`
      <div class="easter-egg-card">
        <div class="egg-icon">⭐</div>
        <h3 class="egg-title">A Hidden Starlight Secret</h3>
        <p class="egg-arabic" dir="rtl">${CONFIG.secrets.secretStarArabic}</p>
        <p class="egg-english">"${CONFIG.secrets.secretStar}"</p>
        <div class="egg-reward">+1 Golden Star Collected!</div>
      </div>
    `);
    updateStats();
  });

  // Menu Modal (Progress & Reset)
  const menuBtn = container.querySelector("#menuToggleBtn");
  menuBtn.addEventListener("click", () => {
    const progress = stateManager.getDiscoveryProgress();
    showModal(`
      <div class="menu-modal-card">
        <h3 class="menu-title">ANEA'S LITTLE UNIVERSE ♡</h3>
        <p class="menu-subtitle">Created with love by Aseel for Anea's 24th Birthday</p>
        
        <div class="progress-section">
          <div class="progress-label">
            <span>Overall Discovery</span>
            <span>${progress}%</span>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width: ${progress}%"></div>
          </div>
        </div>

        <div class="menu-list">
          <div class="menu-item">⭐ Stars Collected: <strong>${stateManager.state.starsCollected} / ${stateManager.state.maxStars}</strong></div>
          <div class="menu-item">🌸 Memories Explored: <strong>${stateManager.state.memoriesVisited.length} / 6</strong></div>
          <div class="menu-item">💌 Letters Opened: <strong>${stateManager.state.lettersOpened.length} / 6</strong></div>
          <div class="menu-item">🎪 Mini-Games Completed: <strong>${Object.values(stateManager.state.minigames).filter(Boolean).length} / 3</strong></div>
          <div class="menu-item">🏰 Castle Status: <strong>${isCastleOpen ? 'Unlocked ✨' : 'Explore more to unlock'}</strong></div>
        </div>

        <div class="menu-actions">
          <button class="celestial-btn secondary-btn" id="modalResetBtn">Restart Experience</button>
        </div>
      </div>
    `);

    const resetBtn = container.querySelector("#modalResetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("Would you like to restart the universe journey from the beginning?")) {
          stateManager.reset();
          location.reload();
        }
      });
    }
  });

  function updateStats() {
    const counter = container.querySelector("#starCounter .star-count");
    if (counter) counter.textContent = stateManager.state.starsCollected;
  }
}
