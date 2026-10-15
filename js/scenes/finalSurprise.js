/**
 * ANEA'S LITTLE UNIVERSE ♡
 * The Final Surprise: Castle Photo Gallery (6 Memories), Love Letter, and Climax
 */

import { CONFIG } from "../config.js";
import { stateManager } from "../state.js";
import { audioManager } from "../audio.js";
import { Characters } from "../characters.js";

export function renderFinalSurpriseScene(container, returnToMap) {
  const finalData = CONFIG.finalSurprise;
  const musicData = CONFIG.music;
  const gallery = CONFIG.castle.gallery || [];

  container.innerHTML = `
    <div class="destination-scene final-surprise-scene" id="finalSurpriseRoot">
      <!-- Breadcrumb Bar -->
      <nav class="scene-nav">
        <button class="celestial-back-btn" id="finalBackBtn">
          <span>←</span>
          <span>Return to Universe</span>
        </button>
        <div class="scene-title-wrapper">
          <h2 class="scene-title">The Heart of the Universe</h2>
          <span class="scene-subtitle">معرض ذكرياتنا الـ 6 الخاصة ♡</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <!-- Atmospheric Opening -->
      <div class="final-intro-banner">
        <p class="final-gentle-lead">"Six moments captured in time, held forever in my heart."</p>
        <p class="final-lead-arabic" dir="rtl">ست لحظات استثنائية من حكايتنا.. محفورة بقلبي إلى الأبد ♡</p>
      </div>

      <!-- 6-PHOTO MEMORY GALLERY -->
      <div class="castle-photo-grid">
        ${gallery.map((item, idx) => `
          <div class="photo-memory-card" data-idx="${idx}">
            <div class="photo-frame-wrapper">
              <img src="${item.src}" alt="${item.captionArabic}" class="photo-img" />
              <div class="photo-zoom-hint">
                <span>🔍 اضغطي للتكبير</span>
              </div>
            </div>
            <div class="photo-meta">
              <span class="photo-number">صورة 0${idx + 1} ✧</span>
              <p class="photo-caption-ar" dir="rtl">${item.captionArabic}</p>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Dedicated Song Card -->
      <div class="castle-song-bar">
        <div class="song-bar-content">
          <div class="song-disc-mini">🎵</div>
          <div class="song-bar-text">
            <span class="song-bar-badge">Our Song Dedication</span>
            <h3 class="song-bar-title">"${musicData.title}" — ${musicData.artist}</h3>
            <p class="song-bar-note" dir="rtl">${musicData.noteArabic}</p>
          </div>
          <a href="${musicData.externalUrl}" target="_blank" rel="noopener noreferrer" class="celestial-btn song-play-link">
            <span>▶</span>
            <span>Listen</span>
          </a>
        </div>
      </div>

      <!-- The Grand Love Letter Section Written Underneath -->
      <div class="final-love-letter-container" id="finalLetterSection">
        <div class="letter-parchment-gold">
          <div class="letter-top-crest">
            <span class="crest-sparkle">✧</span>
            <span class="crest-title">ANEA & ASEEL</span>
            <span class="crest-sparkle">✧</span>
          </div>

          <h1 class="final-letter-heading">${finalData.headingEnglish}</h1>
          <h3 class="final-letter-subheading" dir="rtl">${finalData.headingArabic}</h3>

          <div class="final-letter-body" dir="rtl">
            <p class="final-letter-paragraphs">
              ${finalData.letterArabic.replace(/\n\n/g, '</p><p class="final-letter-paragraphs">').replace(/\n/g, '<br>')}
            </p>
          </div>

          <div class="final-letter-signature">
            <p class="sig-closing">${finalData.closingLineEnglish}</p>
            <p class="sig-arabic" dir="rtl">${finalData.closingLineArabic}</p>
            <div class="sig-name">With all my love, forever, Aseel ♡</div>
          </div>
        </div>

        <!-- The Emotional "Stay Here With Me A Little Longer" Button -->
        <div class="stay-together-action">
          <button class="celestial-btn stay-btn" id="stayTogetherBtn">
            <span class="heart-pulse">♡</span>
            <span>Stay Here With Me A Little Longer</span>
            <span class="heart-pulse">♡</span>
          </button>
        </div>
      </div>

      <!-- The Emotional Climax Scene: Sitting Quietly Under the Sky -->
      <div class="stay-scene-overlay" id="staySceneOverlay" style="display: none;">
        <div class="stay-sky">
          <!-- Sky Constellation: Aseel ♡ Anea -->
          <div class="sky-constellation-text" id="constellationTitle">
            <span class="constellation-sparkle">✦</span>
            <span class="constellation-names">Aseel ♡ Anea</span>
            <span class="constellation-sparkle">✦</span>
          </div>

          <div class="sky-poetic-quote">
            "${finalData.closingLineEnglish}"
          </div>

          <div class="stay-characters-center">
            ${Characters.getTogetherSceneSVG("sitting", 280)}
          </div>

          <div class="stay-controls">
            <button class="celestial-btn secondary-btn" id="closeStaySceneBtn">
              <span>Return to Memories</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Photo Zoom Lightbox Modal -->
      <div class="celestial-modal-overlay" id="photoLightboxModal" style="display: none;">
        <div class="celestial-modal-card photo-lightbox-card">
          <button class="modal-close-btn" id="lightboxClose">✕</button>
          <div class="lightbox-content-slot" id="lightboxSlot"></div>
        </div>
      </div>
    </div>
  `;

  // Navigation
  container.querySelector("#finalBackBtn").addEventListener("click", () => {
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const lightbox = container.querySelector("#photoLightboxModal");
  const lightboxSlot = container.querySelector("#lightboxSlot");
  const lightboxClose = container.querySelector("#lightboxClose");

  function openPhoto(idx) {
    const item = gallery[idx];
    if (!item) return;
    audioManager.playPaperSound();
    audioManager.playChime(784, 0.7);

    lightboxSlot.innerHTML = `
      <div class="lightbox-card-inner">
        <div class="lightbox-img-frame">
          <img src="${item.src}" alt="${item.captionArabic}" class="lightbox-full-img" />
        </div>
        <div class="lightbox-caption-area">
          <span class="lightbox-badge">ذكرياتنا الخالدة 0${idx + 1} ♡</span>
          <p class="lightbox-caption-text" dir="rtl">${item.captionArabic}</p>
        </div>
      </div>
    `;

    lightbox.style.display = "flex";
  }

  lightboxClose.addEventListener("click", () => lightbox.style.display = "none");
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });

  // Photo click event listeners
  container.querySelectorAll(".photo-memory-card").forEach(card => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-idx"), 10);
      openPhoto(idx);
    });
  });

  // "Stay Here With Me A Little Longer" Interaction
  const stayBtn = container.querySelector("#stayTogetherBtn");
  const stayOverlay = container.querySelector("#staySceneOverlay");
  const closeStayBtn = container.querySelector("#closeStaySceneBtn");

  stayBtn.addEventListener("click", () => {
    audioManager.playStarlightChord();
    stateManager.collectStar("stay_together_memory");
    stayOverlay.style.display = "flex";
    setTimeout(() => {
      stayOverlay.classList.add("visible");
      container.querySelector("#constellationTitle").classList.add("glow-bright");
    }, 50);
  });

  closeStayBtn.addEventListener("click", () => {
    stayOverlay.classList.remove("visible");
    setTimeout(() => {
      stayOverlay.style.display = "none";
    }, 600);
  });
}
