/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Scene: The Interactive Celestial World Map
 * Centered sequential journey: Stations unlock in order step-by-step!
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

  const STATIONS = [
    {
      id: "home",
      number: "01",
      numberAr: "المحطة الأولى",
      emoji: "🏡",
      titleEn: "Our Little Home",
      titleAr: "بيتنا الصغير",
      descAr: "بداية رحلتنا.. بيت دافئ ممتلئ بتفاصيل حبنا الخاصة",
      badge: "Cozy Haven",
      prevName: null
    },
    {
      id: "garden",
      number: "02",
      numberAr: "المحطة الثانية",
      emoji: "🌸",
      titleEn: "Garden of Memories",
      titleAr: "حديقة الذكريات",
      descAr: "٦ ذكريات تحكي قصة معرفتنا ومكالمة الاعتراف الخالدة",
      badge: `${memoriesCount}/6 ذكريات`,
      prevName: "بيتنا الصغير"
    },
    {
      id: "mailbox",
      number: "03",
      numberAr: "المحطة الثالثة",
      emoji: "💌",
      titleEn: "Mailbox of Love",
      titleAr: "صندوق رسائل الحب",
      descAr: "رسائل شمعية خاصة كُتبت من قلب أسيل لأنيتا",
      badge: `${lettersCount}/6 رسائل`,
      prevName: "حديقة الذكريات"
    },
    {
      id: "carnival",
      number: "04",
      numberAr: "المحطة الرابعة",
      emoji: "🎪",
      titleEn: "The Little Carnival",
      titleAr: "كرنفال النجوم",
      descAr: "ألعاب ممتعة وجمع نجوم عيد الميلاد وأسئلة حب لطيفة",
      badge: `${carnivalDone}/3 ألعاب ممتعة`,
      prevName: "صندوق رسائل الحب"
    },
    {
      id: "lake",
      number: "05",
      numberAr: "المحطة الخامسة",
      emoji: "🌊",
      titleEn: "The Lake of Stars",
      titleAr: "بحيرة النجوم",
      descAr: "فوانيس عائمة في سكون الليل وجلسة هادئة تحت النجوم",
      badge: "هدوء وتأمل",
      prevName: "كرنفال النجوم"
    },
    {
      id: "castle",
      number: "06",
      numberAr: "المحطة الختامية",
      emoji: "🏰",
      titleEn: "The Birthday Castle",
      titleAr: "قصر الـ 24 عاماً",
      descAr: "كعكة عيد الميلاد الـ ٢٤ والهدية الكبرى والمفاجأة الختامية",
      badge: isCastleUnlocked ? "مفتوح للاحتفال ✨" : "يُفتح بعد البحيرة",
      prevName: "بحيرة النجوم"
    }
  ];

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

          <div class="stat-pill castle-stat ${isCastleUnlocked ? 'unlocked' : 'locked'}" title="${isCastleUnlocked ? 'Birthday Castle Unlocked!' : 'Explore previous stations to unlock'}">
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
        <p class="universe-hero-ar" dir="rtl">ست محطات صُنعت بكل حب.. استكشفي كل محطة بالترتيب لتنفتح لكِ المحطة التالية ♡</p>
      </div>

      <!-- MAIN CENTERED STATIONS STAGE -->
      <main class="centered-journey-stage">
        <!-- Connecting Starlight Path Background -->
        <div class="starlight-journey-glow"></div>

        <div class="centered-stations-grid">
          ${STATIONS.map((s, idx) => {
            const isUnlocked = stateManager.isDestinationUnlocked(s.id);
            const isExplored = stateManager.isDestinationExplored(s.id);

            return `
              <div class="centered-station-card ${isUnlocked ? 'station-unlocked' : 'station-locked'} ${isExplored ? 'station-explored' : ''}" data-dest="${s.id}" data-idx="${idx}">
                <!-- Station Step Pip -->
                <div class="station-step-pill">
                  <span class="step-num">${s.number}</span>
                  <span class="step-ar">${s.numberAr}</span>
                </div>

                <!-- Planet Icon with Starlight Aura -->
                <div class="station-icon-halo">
                  <div class="station-halo-glow"></div>
                  <div class="station-icon-emoji">${s.emoji}</div>
                  <div class="station-lock-indicator">
                    ${isUnlocked ? (isExplored ? '⭐' : '✨') : '🔒'}
                  </div>
                </div>

                <!-- Station Titles & Info -->
                <div class="station-details">
                  <h3 class="station-title-en">${s.titleEn}</h3>
                  <h4 class="station-title-ar" dir="rtl">${s.titleAr}</h4>
                  <p class="station-desc-ar" dir="rtl">${s.descAr}</p>
                </div>

                <!-- Station Action Status -->
                <div class="station-status-pill">
                  ${!isUnlocked 
                    ? `<span class="status-locked"><span class="lock-mini">🔒</span> مغلقة (أكملي ${s.prevName})</span>` 
                    : isExplored 
                      ? `<span class="status-explored">تم الاستكشاف ⭐ اضغطي للزيارة</span>` 
                      : `<span class="status-available">استكشفي الآن ✨</span>`}
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <!-- Adorable Chibi Duo Mascot Centerpiece (Anea & Cute Pink Aseel) -->
        <div class="centered-mascot-row">
          <div class="chibi-center-wrapper">
            ${Characters.getTogetherSceneSVG("sitting", 200)}
            <div class="chibi-caption-tag">
              <span>Anea & Aseel ♡ تحت سماء عيد ميلادك الـ ٢٤</span>
            </div>
          </div>
        </div>

        <!-- Hidden Secret Star & Word Easter Eggs -->
        <div class="universe-secret-row">
          <div class="secret-star-element" id="secretStarBtn" title="A faint mysterious sparkle in the cosmos...">
            <span class="secret-sparkle">✧</span>
            <span class="secret-hint-text">نجمة سرية</span>
          </div>

          <div class="hidden-word-tag" id="hiddenWordBtn" title="Aseel's pet name for you">
            <span class="tag-pill">حبوبي ♡</span>
          </div>
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

  // --- Event Handlers ---

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

  // Handle station click with sequential locking check
  container.querySelectorAll(".centered-station-card").forEach(card => {
    card.addEventListener("click", () => {
      const destId = card.getAttribute("data-dest");
      const station = STATIONS.find(s => s.id === destId);
      const isUnlocked = stateManager.isDestinationUnlocked(destId);

      if (!isUnlocked) {
        audioManager.playChime(329.63, 0.6);
        showModal(`
          <div class="locked-station-dialog">
            <div class="locked-bubble-icon">🔒</div>
            <h3 class="locked-title-en">This World is Sleeping</h3>
            <h4 class="locked-title-ar" dir="rtl">هذه المحطة مغلقة حالياً ♡</h4>
            <div class="locked-divider">✧ ✦ ✧</div>
            <p class="locked-desc-ar" dir="rtl">
              عالمنا الصغير يُكتشف خطوة بخطوة بكل حب..<br>
              استكشفي محطة <strong>"${station.prevName}"</strong> أولاً لتفتح لكِ النجوم أبواب محطة <strong>"${station.titleAr}"</strong> بكل دفء ✨
            </p>
            <button class="celestial-btn modal-agree-btn" id="lockedDismissBtn">
              <span>فهمت، سأكمل بالترتيب ♡</span>
            </button>
          </div>
        `);
        const dismissBtn = container.querySelector("#lockedDismissBtn");
        if (dismissBtn) dismissBtn.addEventListener("click", () => modal.style.display = "none");
        return;
      }

      audioManager.playChime(659.25, 0.8);
      navigateTo(destId);
    });
  });

  // Sound Controls
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

  function updateStats() {
    const counter = container.querySelector("#starCounter .star-count");
    if (counter) counter.textContent = stateManager.state.starsCollected;
  }
}
