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
      </div>

      <!-- Main Lake Canvas / Shimmering Water Body -->
      <div class="lake-body-container" id="lakeContainer">
        <!-- Celestial Starry Reflection Ripples -->
        <div class="water-ripples-layer">
          <div class="ripple r1"></div>
          <div class="ripple r2"></div>
          <div class="ripple r3"></div>
        </div>

        <!-- 5 Floating Star Lanterns on the Water -->
        <div class="floating-lanterns-group">
          ${lakeData.whispers.map((w, idx) => `
            <div class="star-lantern-item" data-index="${idx}" style="top: ${28 + (idx * 13)}%; left: ${18 + (idx * 15)}%;" title="Touch this floating starlight">
              <div class="lantern-glow"></div>
              <div class="lantern-flame">✨</div>
              <div class="lantern-tag">Whisper 0${idx + 1}</div>
            </div>
          `).join("")}
        </div>

        <!-- The Shore / Bank with Anea & Aseel sitting -->
        <div class="lake-shoreline">
          <div class="lake-reeds left-reeds">🌾🌾</div>
          <div class="lake-characters-wrapper" id="lakeCharWrapper">
            ${Characters.getTogetherSceneSVG("sitting", 220)}
          </div>
          <div class="lake-reeds right-reeds">🌾🌾</div>
        </div>

        <!-- Button to trigger the special peaceful sit-together moment -->
        <div class="lake-interactive-prompt">
          <button class="celestial-btn starlight-glow-btn" id="sitTogetherBtn">
            <span>✧</span>
            <span>Sit Beside Me Beneath the Stars</span>
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

  // Navigation
  container.querySelector("#lakeBackBtn").addEventListener("click", () => {
    stateManager.markDestinationExplored("lake");
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const modal = container.querySelector("#lakeModal");
  const modalSlot = container.querySelector("#lakeModalSlot");
  const modalClose = container.querySelector("#lakeModalClose");
  const lakeContainer = container.querySelector("#lakeContainer");

  function openWhisper(idx) {
    const w = lakeData.whispers[idx];
    audioManager.playChime(659.25, 1.2);
    stateManager.collectStar(`star_lake_whisper_${idx}`);
    stateManager.markDestinationExplored("lake");

    modalSlot.innerHTML = `
      <div class="whisper-content-box">
        <div class="whisper-lotus">🌸</div>
        <h3 class="whisper-heading">A Quiet Thought from Aseel</h3>
        <p class="whisper-arabic" dir="rtl">${w.arabic}</p>
        <p class="whisper-english">"${w.english}"</p>
        <div class="whisper-star-tag">⭐ Starlight whisper remembered</div>
      </div>
    `;

    modal.style.display = "flex";
    container.querySelector(".stars-counter-small").textContent = `⭐ ${stateManager.state.starsCollected}`;
  }

  modalClose.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  container.querySelectorAll(".star-lantern-item").forEach(item => {
    item.addEventListener("click", () => {
      const idx = parseInt(item.getAttribute("data-index"));
      openWhisper(idx);
    });
  });

  // Special "Sit Together" scene
  const sitBtn = container.querySelector("#sitTogetherBtn");
  sitBtn.addEventListener("click", () => {
    isSittingTogether = !isSittingTogether;
    audioManager.playStarlightChord();

    if (isSittingTogether) {
      lakeContainer.classList.add("starlight-illumination");
      sitBtn.innerHTML = `<span>♡</span><span>Breathing in the silence together...</span><span>♡</span>`;
      container.querySelector(".lake-characters-wrapper").innerHTML = 
        Characters.getTogetherSceneSVG("holdingHands", 230);
      
      stateManager.collectStar("lake_peace_moment");
      container.querySelector(".stars-counter-small").textContent = `⭐ ${stateManager.state.starsCollected}`;
    } else {
      lakeContainer.classList.remove("starlight-illumination");
      sitBtn.innerHTML = `<span>✧</span><span>Sit Beside Me Beneath the Stars</span><span>✧</span>`;
      container.querySelector(".lake-characters-wrapper").innerHTML = 
        Characters.getTogetherSceneSVG("sitting", 220);
    }
  });
}
