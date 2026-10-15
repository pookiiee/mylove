/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Scene: The Interactive Celestial World Map
 * Re-designed for pristine visual harmony, clean symmetrical orbital tracks,
 * and intuitive celestial navigation.
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

          <div class="stat-pill castle-stat ${isCastleUnlocked ? 'unlocked' : 'locked'}" title="${isCastleUnlocked ? 'Birthday Castle Unlocked!' : 'Explore memories & letters to unlock'}">
            <span class="castle-icon">${isCastleUnlocked ? '👑' : '🔒'}</span>
            <span class="castle-text">${isCastleUnlocked ? 'Castle Open' : 'Castle Sealed'}</span>
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
        <p class="universe-hero-ar" dir="rtl">ست محطات صُنعت بكل حب.. استكشفي عوالمنا بالترتيب الذي تحبينه ♡</p>
      </div>

      <!-- Main Symmetrical Celestial Orbit Canvas / Layout -->
      <main class="celestial-orbit-stage">
        <!-- Background Concentric Orbital Rings & Starlight Lines -->
        <svg class="celestial-orbit-lines" viewBox="0 0 900 520" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="orbit-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="rgba(223, 186, 83, 0.4)" />
              <stop offset="50%" stop-color="rgba(116, 143, 126, 0.25)" />
              <stop offset="100%" stop-color="rgba(98, 125, 152, 0.4)" />
            </linearGradient>
          </defs>
          <!-- Outer Elliptical Orbit Track -->
          <ellipse cx="450" cy="280" rx="380" ry="170" fill="none" stroke="url(#orbit-grad)" stroke-width="1.5" stroke-dasharray="6 6" />
          <!-- Inner Orbit Track -->
          <ellipse cx="450" cy="280" rx="240" ry="105" fill="none" stroke="rgba(223, 186, 83, 0.2)" stroke-width="1.2" stroke-dasharray="4 4" />
          <!-- Constellation Rays from Castle to Planets -->
          <line x1="450" y1="110" x2="160" y2="240" stroke="rgba(223, 186, 83, 0.18)" stroke-width="1" stroke-dasharray="3 3" />
          <line x1="450" y1="110" x2="740" y2="240" stroke="rgba(223, 186, 83, 0.18)" stroke-width="1" stroke-dasharray="3 3" />
          <line x1="450" y1="110" x2="260" y2="400" stroke="rgba(223, 186, 83, 0.18)" stroke-width="1" stroke-dasharray="3 3" />
          <line x1="450" y1="110" x2="640" y2="400" stroke="rgba(223, 186, 83, 0.18)" stroke-width="1" stroke-dasharray="3 3" />
          <line x1="450" y1="110" x2="450" y2="440" stroke="rgba(223, 186, 83, 0.18)" stroke-width="1" stroke-dasharray="3 3" />
        </svg>

        <!-- Symmetrical Celestial Grid Container -->
        <div class="orbit-nodes-container">
          <!-- Top Center: The Birthday Castle (Grand Peak) -->
          <div class="destination-node castle-orbit-node ${isCastleUnlocked ? 'unlocked' : 'locked'}" data-dest="castle" style="top: 14%; left: 50%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual castle-visual">
              <span class="node-emoji">🏰</span>
              ${!isCastleUnlocked ? '<span class="lock-pip">🔒</span>' : '<span class="crown-pip">👑</span>'}
            </div>
            <div class="node-label">
              <span class="node-title">The Birthday Castle</span>
              <span class="node-arabic">قصر عيد الميلاد الـ 24</span>
              <span class="node-badge ${isCastleUnlocked ? 'badge-open' : 'badge-locked'}">
                ${isCastleUnlocked ? 'Open — Tap to Celebrate' : 'Explore to Unlock'}
              </span>
            </div>
          </div>

          <!-- Destination 1: Our Little Home (Left Upper Orbit) -->
          <div class="destination-node planet-orbit-node" data-dest="home" style="top: 42%; left: 16%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual home-visual">
              <span class="node-emoji">🏡</span>
            </div>
            <div class="node-label">
              <span class="node-title">Our Little Home</span>
              <span class="node-arabic">بيتنا الصغير</span>
              <span class="node-badge">Cozy Haven</span>
            </div>
          </div>

          <!-- Destination 2: Garden of Memories (Right Upper Orbit) -->
          <div class="destination-node planet-orbit-node" data-dest="garden" style="top: 42%; left: 84%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual garden-visual">
              <span class="node-emoji">🌸</span>
            </div>
            <div class="node-label">
              <span class="node-title">Garden of Memories</span>
              <span class="node-arabic">حديقة الذكريات</span>
              <span class="node-badge">${memoriesCount}/6 Memories</span>
            </div>
          </div>

          <!-- Destination 3: Mailbox of Love (Left Lower Orbit) -->
          <div class="destination-node planet-orbit-node" data-dest="mailbox" style="top: 76%; left: 26%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual mailbox-visual">
              <span class="node-emoji">💌</span>
            </div>
            <div class="node-label">
              <span class="node-title">Mailbox of Love</span>
              <span class="node-arabic">صندوق رسائل الحب</span>
              <span class="node-badge">${lettersCount}/6 Letters</span>
            </div>
          </div>

          <!-- Destination 4: The Little Carnival (Center Lower Orbit) -->
          <div class="destination-node planet-orbit-node" data-dest="carnival" style="top: 84%; left: 50%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual carnival-visual">
              <span class="node-emoji">🎪</span>
            </div>
            <div class="node-label">
              <span class="node-title">The Little Carnival</span>
              <span class="node-arabic">كرنفال النجوم والألعاب</span>
              <span class="node-badge">${carnivalDone}/3 Games Done</span>
            </div>
          </div>

          <!-- Destination 5: The Lake of Stars (Right Lower Orbit) -->
          <div class="destination-node planet-orbit-node" data-dest="lake" style="top: 76%; left: 74%;">
            <div class="node-orbit-glow"></div>
            <div class="node-visual lake-visual">
              <span class="node-emoji">🌊</span>
            </div>
            <div class="node-label">
              <span class="node-title">The Lake of Stars</span>
              <span class="node-arabic">بحيرة النجوم الهادئة</span>
              <span class="node-badge">Peace & Reflections</span>
            </div>
          </div>
        </div>

        <!-- Hidden Secret Star Easter Egg -->
        <div class="secret-star-element" id="secretStarBtn" style="position: absolute; top: 22%; left: 28%; cursor: pointer;" title="A faint mysterious sparkle in the cosmos...">
          <span class="secret-sparkle">✧</span>
        </div>

        <!-- Hidden Shared Word Easter Egg -->
        <div class="hidden-word-tag" id="hiddenWordBtn" style="position: absolute; bottom: 20px; left: 26px; cursor: pointer;" title="Our secret word">
          <span class="tag-pill">حبوبي ♡</span>
        </div>

        <!-- Chibi Duo Sitting Together Cutest Corner -->
        <div class="chibi-corner-mascot" title="Anea & Aseel sitting beneath the stars">
          <div class="mini-moon-asteroid"></div>
          ${Characters.getTogetherSceneSVG("sitting", 180)}
        </div>
      </main>

      <!-- Bottom Quick-Jump Journey Cards Carousel (For Mobile & Fast Exploration) -->
      <section class="universe-quick-cards">
        <div class="quick-cards-track">
          <div class="quick-card" data-dest="home">
            <span class="qc-icon">🏡</span>
            <div class="qc-info">
              <span class="qc-name">1. Little Home</span>
              <span class="qc-sub">بيتنا الصغير</span>
            </div>
          </div>
          <div class="quick-card" data-dest="garden">
            <span class="qc-icon">🌸</span>
            <div class="qc-info">
              <span class="qc-name">2. Garden</span>
              <span class="qc-sub">${memoriesCount}/6 ذكريات</span>
            </div>
          </div>
          <div class="quick-card" data-dest="mailbox">
            <span class="qc-icon">💌</span>
            <div class="qc-info">
              <span class="qc-name">3. Mailbox</span>
              <span class="qc-sub">${lettersCount}/6 رسائل</span>
            </div>
          </div>
          <div class="quick-card" data-dest="carnival">
            <span class="qc-icon">🎪</span>
            <div class="qc-info">
              <span class="qc-name">4. Carnival</span>
              <span class="qc-sub">3 ألعاب ممتعة</span>
            </div>
          </div>
          <div class="quick-card" data-dest="lake">
            <span class="qc-icon">🌊</span>
            <div class="qc-info">
              <span class="qc-name">5. Lake of Stars</span>
              <span class="qc-sub">هدوء وتأمل</span>
            </div>
          </div>
          <div class="quick-card castle-qc ${isCastleUnlocked ? 'qc-open' : 'qc-locked'}" data-dest="castle">
            <span class="qc-icon">${isCastleUnlocked ? '👑' : '🔒'}</span>
            <div class="qc-info">
              <span class="qc-name">6. Birthday Castle</span>
              <span class="qc-sub">${isCastleUnlocked ? 'مفتوح للاحتفال ✨' : 'يحتاج استكشاف'}</span>
            </div>
          </div>
        </div>
      </section>

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

  // Node clicks & Quick Card clicks
  const handleNav = (dest) => {
    audioManager.playChime(659.25, 0.8);
    if (dest === "castle" && !stateManager.state.castleUnlocked) {
      showLockedCastleModal();
      return;
    }
    navigateTo(dest);
  };

  container.querySelectorAll(".destination-node").forEach(node => {
    node.addEventListener("click", () => handleNav(node.getAttribute("data-dest")));
  });

  container.querySelectorAll(".quick-card").forEach(card => {
    card.addEventListener("click", () => handleNav(card.getAttribute("data-dest")));
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

  // Hidden Word Easter Egg
  const hiddenWord = container.querySelector("#hiddenWordBtn");
  hiddenWord.addEventListener("click", () => {
    stateManager.unlockSecret("hiddenWord");
    audioManager.playChime(784, 1.2);
    showModal(`
      <div class="easter-egg-card">
        <div class="egg-icon">♡</div>
        <h3 class="egg-title">حبوبي</h3>
        <p class="egg-arabic" dir="rtl">${CONFIG.secrets.hiddenWordMessage}</p>
        <p class="egg-english">"Our softest, sweetest word. You found it hidden in the stars."</p>
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
          <div class="menu-item">🏰 Castle Status: <strong>${stateManager.state.castleUnlocked ? 'Unlocked ✨' : 'Explore more to unlock'}</strong></div>
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

  // Modal helpers
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

  function showLockedCastleModal() {
    showModal(`
      <div class="locked-castle-card">
        <div class="lock-icon">🔒</div>
        <h3 class="lock-title">The Birthday Castle is Sleeping</h3>
        <p class="lock-desc">The gates will open once you have wandered through Anea's memories and opened a few letters from Aseel.</p>
        <p class="lock-arabic" dir="rtl">القصر سيفتح أبوابه بمجرد أن تتجولي في حديقة الذكريات وتفتحي بعض رسائل الحب ♡</p>
        <div class="lock-hint">Current: ${stateManager.state.memoriesVisited.length}/3 Memories or 2 Letters</div>
      </div>
    `);
  }

  function updateStats() {
    const counter = container.querySelector("#starCounter .star-count");
    if (counter) counter.textContent = stateManager.state.starsCollected;
  }
}
