/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Destination 5: The Lake of Stars
 * The quietest, most peaceful celestial sanctuary
 */

import { CONFIG } from "../config.js";
import { stateManager } from "../state.js";
import { audioManager } from "../audio.js";
import { Characters } from "../characters.js";

export function renderLakeScene(container, returnToMap) {
  const lakeData = CONFIG.lake;
  let isSittingTogether = false;

  // 5 Romantic Lantern Positions on the Water
  const LANTERN_POSITIONS = [
    { top: 26, left: 22, nameAr: "همسة العيون", label: "01" },
    { top: 22, left: 52, nameAr: "همسة الدفء", label: "02" },
    { top: 28, left: 78, nameAr: "همسة الحنان", label: "03" },
    { top: 46, left: 34, nameAr: "همسة الشوق", label: "04" },
    { top: 48, left: 66, nameAr: "همسة الأبد", label: "05" }
  ];

  container.innerHTML = `
    <div class="destination-scene lake-scene">
      <nav class="scene-nav">
        <button class="celestial-back-btn" id="lakeBackBtn">
          <span>←</span>
          <span>Return to Universe</span>
        </button>
        <div class="scene-title-wrapper">
          <h2 class="scene-title">${lakeData.title}</h2>
          <span class="scene-subtitle">${lakeData.subtitle}</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <div class="lake-poetic-header">
        <p class="lake-quote">"Where the quiet waters mirror the starlight, and every reflection holds a thought of you."</p>
        <div class="lake-instruction-pill">
          <span>🌊 المسِ قناديل اللوتس العائمة فوق الماء لتكتشفي همسات أسيل الدافئة ♡</span>
        </div>
      </div>

      <!-- MAIN MAGICAL LAKE ENVIRONMENT -->
      <div class="enchanted-lake-stage" id="lakeContainer">
        <!-- Deep Night Sky with Shimmering Celestial Moon -->
        <div class="lake-sky-backdrop">
          <div class="lake-crescent-moon">
            <div class="moon-body">🌙</div>
            <div class="moon-aura"></div>
          </div>
          <div class="lake-distant-stars"></div>
        </div>

        <!-- The Shimmering Water Body -->
        <div class="lake-water-surface">
          <!-- Moon Shimmer Reflection on Water -->
          <div class="moon-water-reflection"></div>

          <!-- Animated Water Ripples -->
          <div class="water-ripples-layer">
            <div class="water-wave w1"></div>
            <div class="water-wave w2"></div>
            <div class="water-wave w3"></div>
          </div>

          <!-- Rising Starlight Fireflies / Sparkles -->
          <div class="lake-fireflies">
            <span class="firefly f1">✧</span>
            <span class="firefly f2">✦</span>
            <span class="firefly f3">✧</span>
            <span class="firefly f4">✦</span>
            <span class="firefly f5">✧</span>
            <span class="firefly f6">✦</span>
          </div>

          <!-- 5 Floating Lotus Star Lanterns -->
          <div class="floating-lotus-group">
            ${lakeData.whispers.map((w, idx) => {
              const pos = LANTERN_POSITIONS[idx] || { top: 30, left: 30 + idx * 10, nameAr: `همسة ${idx + 1}`, label: `0${idx + 1}` };
              return `
                <div class="lotus-lantern-node" data-index="${idx}" style="top: ${pos.top}%; left: ${pos.left}%;" title="${pos.nameAr}">
                  <div class="lotus-glow-halo"></div>
                  <div class="lotus-pad">🪷</div>
                  <div class="lantern-star-flame">✨</div>
                  <div class="lotus-caption">
                    <span class="lotus-num">${pos.label}</span>
                    <span class="lotus-ar" dir="rtl">${pos.nameAr}</span>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- The Peaceful Wooden Pier / Shoreline -->
        <div class="lake-wooden-dock">
          <!-- Dock Posts & Lantern -->
          <div class="dock-lantern-post left-post">
            <div class="dock-lantern-glow"></div>
            <span class="dock-lantern-lamp">🏮</span>
          </div>

          <!-- Characters sitting together by the water edge -->
          <div class="dock-characters-container" id="lakeCharWrapper">
            <div class="chibi-dock-sprite">
              ${Characters.getTogetherSceneSVG("sitting", 210)}
            </div>
            <div class="dock-water-reflection"></div>
          </div>

          <div class="dock-lantern-post right-post">
            <div class="dock-lantern-glow"></div>
            <span class="dock-lantern-lamp">🏮</span>
          </div>

          <!-- Water Reeds -->
          <div class="lake-shore-reeds left-reeds">🌾🌾</div>
          <div class="lake-shore-reeds right-reeds">🌾🌾</div>
        </div>

        <!-- Sit Together Romantic Prompt Button -->
        <div class="lake-interactive-prompt">
          <button class="celestial-btn starlight-glow-btn" id="sitTogetherBtn">
            <span>✧</span>
            <span id="sitBtnText">Sit Beside Me Beneath the Stars</span>
            <span>✧</span>
          </button>
        </div>
      </div>

      <!-- Whisper Dialog Modal -->
      <div class="celestial-modal-overlay" id="lakeModal" style="display: none;">
        <div class="celestial-modal-card whisper-card">
          <button class="modal-close-btn" id="lakeModalClose">✕</button>
          <div class="modal-content-slot" id="lakeModalSlot"></div>
        </div>
      </div>
    </div>
  `;

  // Navigation: Back Button
  container.querySelector("#lakeBackBtn").addEventListener("click", () => {
    stateManager.markDestinationExplored("lake");
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const modal = container.querySelector("#lakeModal");
  const modalSlot = container.querySelector("#lakeModalSlot");
  const modalClose = container.querySelector("#lakeModalClose");
  const lakeContainer = container.querySelector("#lakeContainer");
  const charWrapper = container.querySelector("#lakeCharWrapper");
  const sitBtn = container.querySelector("#sitTogetherBtn");
  const sitBtnText = container.querySelector("#sitBtnText");

  function openWhisper(idx) {
    const w = lakeData.whispers[idx];
    const pos = LANTERN_POSITIONS[idx];
    audioManager.playChime(659.25, 1.2);
    stateManager.collectStar(`star_lake_whisper_${idx}`);
    stateManager.markDestinationExplored("lake");

    modalSlot.innerHTML = `
      <div class="whisper-content-box">
        <div class="whisper-lotus">🪷✨</div>
        <span class="whisper-tag">${pos ? pos.nameAr : `Whisper 0${idx + 1}`}</span>
        <h3 class="whisper-heading">A Quiet Thought from Aseel</h3>
        <p class="whisper-arabic" dir="rtl">${w.arabic}</p>
        <p class="whisper-english">"${w.english}"</p>
        <div class="whisper-star-tag">⭐ تم حفظ هذه الهمسة في بحيرة النجوم للأبد</div>
      </div>
    `;

    modal.style.display = "flex";
    container.querySelector(".stars-counter-small").textContent = `⭐ ${stateManager.state.starsCollected}`;
  }

  modalClose.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  container.querySelectorAll(".lotus-lantern-node").forEach(item => {
    item.addEventListener("click", () => {
      const idx = parseInt(item.getAttribute("data-index"), 10);
      openWhisper(idx);
    });
  });

  // Special "Sit Together" scene
  sitBtn.addEventListener("click", () => {
    isSittingTogether = !isSittingTogether;
    audioManager.playStarlightChord();

    if (isSittingTogether) {
      lakeContainer.classList.add("starlight-illumination");
      sitBtnText.textContent = "Breathing in the silence together... ♡";
      sitBtn.classList.add("btn-active-glow");
      charWrapper.innerHTML = `
        <div class="chibi-dock-sprite holding-hands-mode">
          ${Characters.getTogetherSceneSVG("holdingHands", 220)}
          <div class="dock-floating-hearts">💕</div>
        </div>
        <div class="dock-water-reflection"></div>
      `;
      
      stateManager.collectStar("lake_peace_moment");
      container.querySelector(".stars-counter-small").textContent = `⭐ ${stateManager.state.starsCollected}`;
    } else {
      lakeContainer.classList.remove("starlight-illumination");
      sitBtnText.textContent = "Sit Beside Me Beneath the Stars";
      sitBtn.classList.remove("btn-active-glow");
      charWrapper.innerHTML = `
        <div class="chibi-dock-sprite">
          ${Characters.getTogetherSceneSVG("sitting", 210)}
        </div>
        <div class="dock-water-reflection"></div>
      `;
    }
  });
}
