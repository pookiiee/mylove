/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Destination 3: The Mailbox of Love
 */

import { CONFIG } from "../config.js";
import { stateManager } from "../state.js";
import { audioManager } from "../audio.js";

export function renderMailboxScene(container, returnToMap) {
  const letters = CONFIG.letters;

  container.innerHTML = `
    <div class="destination-scene mailbox-scene">
      <nav class="scene-nav">
        <button class="celestial-back-btn" id="mailboxBackBtn">
          <span>←</span>
          <span>Return to Universe</span>
        </button>
        <div class="scene-title-wrapper">
          <h2 class="scene-title">The Mailbox of Love</h2>
          <span class="scene-subtitle">صندوق رسائل الحب من أسيل</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <div class="mailbox-header-banner">
        <div class="mailbox-floating-icon">
          <span class="box-icon">📬</span>
          <span class="box-sparkle">✧</span>
        </div>
        <p class="mailbox-poetic-quote">"Written softly in the quiet hours of the night, just for you to hold."</p>
      </div>

      <!-- Letters Grid -->
      <div class="letters-grid">
        ${letters.map((letter, idx) => {
          const isOpened = stateManager.state.lettersOpened.includes(letter.id);
          return `
            <div class="letter-envelope-item ${isOpened ? 'opened' : 'unopened'}" data-id="${letter.id}">
              <div class="envelope-outer">
                <div class="envelope-flap"></div>
                <div class="wax-seal">
                  <span>${isOpened ? '♡' : '✉'}</span>
                </div>
                <div class="envelope-body">
                  <div class="envelope-number">Letter 0${idx + 1}</div>
                  <h3 class="envelope-title-en">${letter.titleEnglish}</h3>
                  <h4 class="envelope-title-ar" dir="rtl">${letter.titleArabic}</h4>
                  <p class="envelope-preview">${letter.preview}</p>
                  <span class="envelope-status">${isOpened ? 'Read Again ♡' : 'Open Envelope ✧'}</span>
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>

      <!-- Letter Reader Modal -->
      <div class="celestial-modal-overlay" id="letterModal" style="display: none;">
        <div class="celestial-modal-card letter-paper-modal">
          <button class="modal-close-btn" id="letterModalClose">✕</button>
          <div class="modal-content-slot" id="letterModalSlot"></div>
        </div>
      </div>
    </div>
  `;

  // Navigation
  container.querySelector("#mailboxBackBtn").addEventListener("click", () => {
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const modal = container.querySelector("#letterModal");
  const modalSlot = container.querySelector("#letterModalSlot");
  const modalClose = container.querySelector("#letterModalClose");

  function openLetter(letter) {
    audioManager.playPaperSound();
    audioManager.playChime(784, 1.0);
    stateManager.openLetter(letter.id);
    stateManager.collectStar(`star_${letter.id}`);

    // Update envelope visual
    const el = container.querySelector(`[data-id="${letter.id}"]`);
    if (el) {
      el.classList.remove("unopened");
      el.classList.add("opened");
      const status = el.querySelector(".envelope-status");
      if (status) status.textContent = "Read Again ♡";
      const seal = el.querySelector(".wax-seal span");
      if (seal) seal.textContent = "♡";
    }

    container.querySelector(".stars-counter-small").textContent = `⭐ ${stateManager.state.starsCollected}`;

    modalSlot.innerHTML = `
      <div class="parchment-letter-wrapper">
        <div class="parchment-header">
          <span class="parchment-stamp">ANEA'S MAILBOX ♡</span>
          <h2 class="parchment-title-en">${letter.titleEnglish}</h2>
          <h3 class="parchment-title-ar" dir="rtl">${letter.titleArabic}</h3>
        </div>

        <div class="parchment-body" dir="rtl">
          <p class="parchment-text">${letter.bodyArabic.replace(/\n/g, '<br>')}</p>
        </div>

        <div class="parchment-footer">
          <div class="parchment-sign">${letter.date}</div>
          <div class="parchment-star">⭐ A keepsake for your heart</div>
        </div>
      </div>
    `;

    modal.style.display = "flex";
  }

  modalClose.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  container.querySelectorAll(".letter-envelope-item").forEach(item => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-id");
      const letter = letters.find(l => l.id === id);
      if (letter) openLetter(letter);
    });
  });
}
