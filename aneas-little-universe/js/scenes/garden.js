/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Destination 2: The Garden of Memories
 */

import { CONFIG } from "../config.js";
import { stateManager } from "../state.js";
import { audioManager } from "../audio.js";

export function renderGardenScene(container, returnToMap) {
  const memories = CONFIG.memories;

  container.innerHTML = `
    <div class="destination-scene garden-scene">
      <nav class="scene-nav">
        <button class="celestial-back-btn" id="gardenBackBtn">
          <span>←</span>
          <span>Return to Universe</span>
        </button>
        <div class="scene-title-wrapper">
          <h2 class="scene-title">The Garden of Memories</h2>
          <span class="scene-subtitle">حديقة الذكريات واللحظات الخالدة</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <div class="garden-header-text">
        <p class="garden-poetic-quote">"Each flower here bloomed from a moment that made me fall a little more in love with you."</p>
      </div>

      <!-- Glowing Plant Grid / Garden Walkway -->
      <div class="garden-grid">
        ${memories.map((mem) => {
          const isVisited = stateManager.state.memoriesVisited.includes(mem.id);
          const isGolden = mem.isGolden;
          const isHighlight = mem.isHighlight;

          return `
            <div class="memory-plant-card ${isVisited ? 'visited' : 'unvisited'} ${isGolden ? 'golden-memory' : ''} ${isHighlight ? 'highlight-memory' : ''}" data-id="${mem.id}">
              <div class="plant-visual-wrapper">
                <div class="plant-glow"></div>
                <div class="plant-icon-art">
                  ${mem.icon === 'golden-flower' ? '🌼' :
                    mem.icon === 'soundwave' ? '🎙️' :
                    mem.icon === 'blooming-rose' ? '🌹' :
                    mem.icon === 'message' ? '💬' :
                    mem.icon === 'orbit' ? '✨' : '🎮'}
                </div>
                ${isGolden ? '<span class="golden-crown-tag">March 31</span>' : ''}
                ${isHighlight ? '<span class="highlight-tag">Voice Call</span>' : ''}
              </div>

              <div class="plant-info">
                <div class="plant-number">${mem.number}</div>
                <h3 class="plant-title-english">${mem.titleEnglish}</h3>
                <h4 class="plant-title-arabic" dir="rtl">${mem.titleArabic}</h4>
                <p class="plant-summary">${mem.summaryEnglish}</p>
                <div class="plant-status-pill">
                  ${isVisited ? '<span>Visited ✓</span>' : '<span>Tap to Reveal ✧</span>'}
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>

      <!-- Memory Detail Modal -->
      <div class="celestial-modal-overlay" id="gardenModal" style="display: none;">
        <div class="celestial-modal-card memory-detail-card">
          <button class="modal-close-btn" id="gardenModalClose">✕</button>
          <div class="modal-content-slot" id="gardenModalSlot"></div>
        </div>
      </div>
    </div>
  `;

  // Back button
  container.querySelector("#gardenBackBtn").addEventListener("click", () => {
    stateManager.markDestinationExplored("garden");
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const modal = container.querySelector("#gardenModal");
  const modalSlot = container.querySelector("#gardenModalSlot");
  const modalClose = container.querySelector("#gardenModalClose");

  function openMemory(mem) {
    audioManager.playChime(mem.isGolden ? 880 : 587.33, 1.2);
    stateManager.visitMemory(mem.id);
    stateManager.collectStar(`star_${mem.id}`);
    stateManager.markDestinationExplored("garden");

    // Update UI card visited status
    const cardEl = container.querySelector(`[data-id="${mem.id}"]`);
    if (cardEl) {
      cardEl.classList.remove("unvisited");
      cardEl.classList.add("visited");
      const statusPill = cardEl.querySelector(".plant-status-pill");
      if (statusPill) statusPill.innerHTML = "<span>Visited ✓</span>";
    }

    container.querySelector(".stars-counter-small").textContent = `⭐ ${stateManager.state.starsCollected}`;

    // Special sound wave interactive animation for The Voice Call
    const isVoiceCall = mem.id === "memory-5";

    modalSlot.innerHTML = `
      <div class="memory-opened-content ${mem.isGolden ? 'golden-theme' : ''}">
        <div class="opened-memory-header">
          <span class="opened-badge">${mem.number} — ${mem.isGolden ? 'Golden Milestone' : 'Memory'}</span>
          <h2 class="opened-title-english">${mem.titleEnglish}</h2>
          <h3 class="opened-title-arabic" dir="rtl">${mem.titleArabic}</h3>
        </div>

        ${isVoiceCall ? `
          <div class="voice-call-scene-interactive">
            <div class="soundwave-container">
              <span class="bar b1"></span>
              <span class="bar b2"></span>
              <span class="bar b3"></span>
              <span class="bar b4"></span>
              <span class="bar b5"></span>
              <span class="bar b4"></span>
              <span class="bar b3"></span>
              <span class="bar b2"></span>
              <span class="bar b1"></span>
            </div>
            <div class="voice-call-tagline">"That one night..."</div>
          </div>
        ` : ''}

        <div class="opened-memory-body">
          <div class="opened-arabic-section" dir="rtl">
            <p class="opened-narrative-arabic">${mem.narrativeArabic}</p>
          </div>
          <div class="opened-english-section">
            <p class="opened-narrative-english">"${mem.narrativeEnglish}"</p>
          </div>
        </div>

        <div class="opened-memory-footer">
          <span class="star-blessing">⭐ Memory preserved forever in Anea's Universe</span>
        </div>
      </div>
    `;

    modal.style.display = "flex";
  }

  modalClose.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  container.querySelectorAll(".memory-plant-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      const mem = memories.find(m => m.id === id);
      if (mem) openMemory(mem);
    });
  });
}
