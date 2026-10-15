/**
 * ANEA'S LITTLE UNIVERSE ♡
 * The Final Surprise: Aseel's Letter, Video, Song, and Love
 */

import { CONFIG } from "../config.js";
import { stateManager } from "../state.js";
import { audioManager } from "../audio.js";
import { Characters } from "../characters.js";

export function renderFinalSurpriseScene(container, returnToMap) {
  const finalData = CONFIG.finalSurprise;
  const musicData = CONFIG.music;
  const videoData = CONFIG.video;

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
          <span class="scene-subtitle">هدية من القلب إلى القلب</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <!-- Atmospheric Opening for the Final Surprise -->
      <div class="final-intro-banner" id="finalIntroBanner">
        <p class="final-gentle-lead">"Before you go, there's one last little thing..."</p>
        <p class="final-lead-arabic" dir="rtl">وقبل أن ينتهي عيد ميلادك، هناك تفاصيل صغيرة صُنعت فقط لقلبك..</p>
      </div>

      <!-- Interactive 3 Gift Portals -->
      <div class="gift-options-row">
        <!-- Option 1: A Letter From Aseel -->
        <div class="gift-option-card" id="optLetterBtn">
          <div class="gift-card-icon">💌</div>
          <h3 class="gift-card-title">A Letter From Aseel</h3>
          <p class="gift-card-arabic" dir="rtl">رسالة حب خاصة لكِ</p>
          <span class="gift-card-tag">Open Letter ✧</span>
        </div>

        <!-- Option 2: Personal Video -->
        <div class="gift-option-card" id="optVideoBtn">
          <div class="gift-card-icon">📽️</div>
          <h3 class="gift-card-title">Our Little Video</h3>
          <p class="gift-card-arabic" dir="rtl">مقطع فيديو الذكريات</p>
          <span class="gift-card-tag">Watch Video ✧</span>
        </div>

        <!-- Option 3: Our Little Song ("love." by wave to earth) -->
        <div class="gift-option-card" id="optSongBtn">
          <div class="gift-card-icon">🎵</div>
          <h3 class="gift-card-title">Our Little Song</h3>
          <p class="gift-card-arabic" dir="rtl">"love." by wave to earth</p>
          <span class="gift-card-tag">Listen & Read ✧</span>
        </div>
      </div>

      <!-- The Grand Love Letter Section (Always Accessible) -->
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
              <span>Return to Letters</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Modal for the 3 Gift Options -->
      <div class="celestial-modal-overlay" id="surpriseModal" style="display: none;">
        <div class="celestial-modal-card gift-view-modal">
          <button class="modal-close-btn" id="surpriseModalClose">✕</button>
          <div class="modal-content-slot" id="surpriseModalSlot"></div>
        </div>
      </div>
    </div>
  `;

  // Navigation
  container.querySelector("#finalBackBtn").addEventListener("click", () => {
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const modal = container.querySelector("#surpriseModal");
  const modalSlot = container.querySelector("#surpriseModalSlot");
  const modalClose = container.querySelector("#surpriseModalClose");

  function openGiftModal(html) {
    audioManager.playPaperSound();
    modalSlot.innerHTML = html;
    modal.style.display = "flex";
  }

  modalClose.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // OPTION 1: Personal Letter from Aseel
  container.querySelector("#optLetterBtn").addEventListener("click", () => {
    audioManager.playChime(659.25, 1.0);
    openGiftModal(`
      <div class="gift-letter-box">
        <div class="gift-header">
          <span class="gift-badge">Aseel's Private Letter</span>
          <h2 class="gift-title">To My Beloved Anity ♡</h2>
        </div>
        <div class="gift-letter-body" dir="rtl">
          <p>${finalData.letterArabic.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')}</p>
        </div>
        <div class="gift-letter-footer">
          <span>October 17, Midnight ♡</span>
        </div>
      </div>
    `);
  });

  // OPTION 2: Personal Video
  container.querySelector("#optVideoBtn").addEventListener("click", () => {
    audioManager.playChime(587.33, 1.0);
    const hasVideo = !!videoData.src;

    openGiftModal(`
      <div class="gift-video-box">
        <div class="gift-header">
          <span class="gift-badge">Birthday Video</span>
          <h2 class="gift-title">${videoData.titleEnglish}</h2>
          <h3 class="gift-sub" dir="rtl">${videoData.titleArabic}</h3>
        </div>

        ${hasVideo ? `
          <div class="video-player-frame">
            <video controls poster="${videoData.posterImage}" playsinline style="width: 100%; border-radius: 12px;">
              <source src="${videoData.src}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        ` : `
          <div class="video-placeholder-frame">
            <div class="film-icon">🎬</div>
            <p class="placeholder-arabic" dir="rtl">${videoData.placeholderMessageArabic}</p>
            <p class="placeholder-english">${videoData.placeholderMessageEnglish}</p>
            <div class="video-instructions-pill">
              <span>Tip for Aseel:</span> Put your video in <code>assets/video/</code> and set its filename in <code>js/config.js</code>!
            </div>
          </div>
        `}
      </div>
    `);
  });

  // OPTION 3: Dedicated Song ("love." by wave to earth)
  container.querySelector("#optSongBtn").addEventListener("click", () => {
    audioManager.playChime(784, 1.2);
    openGiftModal(`
      <div class="gift-song-box">
        <div class="song-record-visual">
          <div class="vinyl-disc">
            <div class="vinyl-groove"></div>
            <div class="vinyl-center">
              <span>♡</span>
            </div>
          </div>
        </div>

        <div class="song-details">
          <span class="song-badge">Aseel's Personal Dedication</span>
          <h2 class="song-name">"${musicData.title}"</h2>
          <h3 class="song-artist">${musicData.artist}</h3>
        </div>

        <div class="song-dedication-note">
          <p class="song-note-ar" dir="rtl">${musicData.noteArabic}</p>
          <p class="song-note-en">"${musicData.noteEnglish}"</p>
        </div>

        <div class="song-listen-links">
          <a href="${musicData.externalUrl}" target="_blank" rel="noopener noreferrer" class="celestial-btn song-external-btn">
            <span>▶</span>
            <span>Listen on YouTube</span>
          </a>
          <a href="${musicData.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="celestial-btn secondary-btn song-external-btn">
            <span>🎧</span>
            <span>Search on Spotify</span>
          </a>
        </div>
      </div>
    `);
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
