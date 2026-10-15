/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Destination 1: The Little Planet — "Our Little Home"
 * Re-designed with a neat, cozy storybook diorama and structured discovery cards.
 */

import { CONFIG } from "../config.js";
import { stateManager } from "../state.js";
import { audioManager } from "../audio.js";
import { Characters } from "../characters.js";

export function renderHomeScene(container, returnToMap) {
  const homeData = CONFIG.home;

  container.innerHTML = `
    <div class="destination-scene home-scene">
      <!-- Navigation Bar -->
      <nav class="scene-nav">
        <button class="celestial-back-btn" id="homeBackBtn">
          <span>←</span>
          <span>Return to Universe</span>
        </button>
        <div class="scene-title-wrapper">
          <h2 class="scene-title">${homeData.title}</h2>
          <span class="scene-subtitle">${homeData.subtitle}</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <!-- Atmospheric Introduction Banner -->
      <div class="home-intro-banner">
        <p class="home-intro-quote">"${homeData.greeting}"</p>
        <p class="home-intro-reveal">${homeData.reveal}</p>
      </div>

      <!-- Main Neat Cozy Room Stage -->
      <div class="home-stage-wrapper">
        <div class="storybook-room-frame">
          <!-- Room Roof & Ceiling Star Mobile -->
          <div class="room-ceiling-beam">
            <div class="hanging-star-mobile">
              <span class="m-star">✦</span>
              <span class="m-moon">🌙</span>
              <span class="m-star">✧</span>
            </div>
          </div>

          <!-- Arched Starlit Window (Interactive) -->
          <div class="room-arch-window interactive-room-prop" id="propWindow" title="Click to gaze through the starlit window">
            <div class="window-sky">
              <div class="crescent-moon"></div>
              <div class="twinkling-star ts1">✦</div>
              <div class="twinkling-star ts2">✧</div>
              <div class="twinkling-star ts3">✦</div>
            </div>
            <div class="window-sill">
              <div class="little-potted-flower">🌱</div>
            </div>
            <div class="prop-badge">🪟 The Window</div>
          </div>

          <!-- Left Bedside Corner with Lamp & Note (Interactive) -->
          <div class="room-bedside-nook">
            <div class="cozy-lamp-fixture interactive-room-prop" id="propLight" title="Click to feel the gentle light">
              <div class="lamp-warm-shade"></div>
              <div class="lamp-ambient-glow"></div>
              <div class="prop-badge">🕯️ The Light</div>
            </div>

            <div class="bedside-table interactive-room-prop" id="propBedside" title="Click to read the bedside note">
              <div class="folded-letter-sprite">📜</div>
              <div class="prop-badge">💌 Bedside Note</div>
            </div>
          </div>

          <!-- Center Cozy Rug with Chibi Duo & Warm Cups -->
          <div class="room-center-rug">
            <div class="woven-rug-oval"></div>

            <!-- Two Cute Chibi Characters Sitting Together -->
            <div class="home-chibi-duo-wrapper">
              ${Characters.getTogetherSceneSVG("holdingHands", 190)}
            </div>

            <!-- Two Warm Mugs on Cute Tray (Interactive) -->
            <div class="two-cups-tray interactive-room-prop" id="propCups" title="Click to look at our two mugs">
              <div class="chibi-mug mug-anea" title="Anea's Cup">
                <span class="steam-wisp">~</span>
                <span class="mug-initial">A</span>
              </div>
              <div class="chibi-mug mug-aseel" title="Aseel's Cup">
                <span class="steam-wisp">~</span>
                <span class="mug-initial">S</span>
              </div>
              <div class="prop-badge">☕ Two Cups</div>
            </div>
          </div>

          <!-- Right Bookshelf Corner with Secret Bookmark (Interactive) -->
          <div class="room-bookshelf-nook">
            <div class="mini-bookshelf">
              <div class="shelf-book b1"></div>
              <div class="shelf-book b2"></div>
              <div class="shelf-book b3"></div>
            </div>
            <div class="secret-bookmark-tag interactive-room-prop" id="propSharedWord" title="Our secret word">
              <span class="bookmark-ribbon">♡</span>
              <span class="word-text">حبوبي</span>
              <div class="prop-badge">✨ Our Word</div>
            </div>
          </div>
        </div>

        <!-- Clean Organized Interactive Discovery Deck -->
        <div class="home-discovery-deck">
          <div class="deck-header">
            <span class="deck-title">Interactive Keepsakes</span>
            <span class="deck-sub">اضغطي على أي تذكار لاستكشاف معناه في قلبي</span>
          </div>

          <div class="deck-cards-grid">
            <button class="deck-card" data-target="window">
              <span class="card-icon">🪟</span>
              <div class="card-text">
                <span class="card-en">The Window</span>
                <span class="card-ar" dir="rtl">النافذة المطلة على النجوم</span>
              </div>
              <span class="card-arrow">✧</span>
            </button>

            <button class="deck-card" data-target="bedside">
              <span class="card-icon">📜</span>
              <div class="card-text">
                <span class="card-en">Bedside Note</span>
                <span class="card-ar" dir="rtl">رسالة بجانب السرير</span>
              </div>
              <span class="card-arrow">✧</span>
            </button>

            <button class="deck-card" data-target="cups">
              <span class="card-icon">☕</span>
              <div class="card-text">
                <span class="card-en">Two Warm Cups</span>
                <span class="card-ar" dir="rtl">كوبان دافئان وسوالفنا</span>
              </div>
              <span class="card-arrow">✧</span>
            </button>

            <button class="deck-card" data-target="light">
              <span class="card-icon">🕯️</span>
              <div class="card-text">
                <span class="card-en">The Gentle Light</span>
                <span class="card-ar" dir="rtl">نور حنيتك ودلالك</span>
              </div>
              <span class="card-arrow">✧</span>
            </button>

            <button class="deck-card secret-deck-card" data-target="word">
              <span class="card-icon">♡</span>
              <div class="card-text">
                <span class="card-en">Our Shared Word</span>
                <span class="card-ar" dir="rtl">حبوبي.. كلمتنا الخاصة</span>
              </div>
              <span class="card-arrow">★</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Dialogue Modal -->
      <div class="celestial-modal-overlay" id="homeModal" style="display: none;">
        <div class="celestial-modal-card">
          <button class="modal-close-btn" id="homeModalClose">✕</button>
          <div class="modal-content-slot" id="homeModalSlot"></div>
        </div>
      </div>
    </div>
  `;

  // Navigation
  container.querySelector("#homeBackBtn").addEventListener("click", () => {
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const modal = container.querySelector("#homeModal");
  const modalSlot = container.querySelector("#homeModalSlot");
  const modalClose = container.querySelector("#homeModalClose");

  function openDialog(title, arabic, english, starKey) {
    audioManager.playChime(659.25, 0.9);
    if (starKey) {
      stateManager.collectStar(starKey);
    }
    modalSlot.innerHTML = `
      <div class="dialog-card">
        <h3 class="dialog-title">${title}</h3>
        <p class="dialog-arabic" dir="rtl">${arabic}</p>
        <p class="dialog-english">"${english}"</p>
        ${starKey ? '<div class="star-award-banner">⭐ +1 Memory Star Added to Your Universe</div>' : ''}
      </div>
    `;
    modal.style.display = "flex";
    container.querySelector(".stars-counter-small").textContent = `⭐ ${stateManager.state.starsCollected}`;
  }

  modalClose.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  const objects = homeData.objects;

  // Handlers
  const handleWindow = () => openDialog(objects.window.title, objects.window.messageArabic, objects.window.messageEnglish, "star_home_window");
  const handleBedside = () => { audioManager.playPaperSound(); openDialog(objects.bedsideLetter.title, objects.bedsideLetter.messageArabic, objects.bedsideLetter.messageEnglish, "star_home_bedside"); };
  const handleCups = () => openDialog(objects.twoCups.title, objects.twoCups.messageArabic, objects.twoCups.messageEnglish, "star_home_cups");
  const handleLight = () => openDialog(objects.littleLight.title, objects.littleLight.messageArabic, objects.littleLight.messageEnglish, "star_home_light");
  const handleWord = () => openDialog(objects.sharedWord.title, objects.sharedWord.secretMessage, "Our quiet shared secret.", "star_home_word");

  // Hook up prop clicks
  container.querySelector("#propWindow").addEventListener("click", handleWindow);
  container.querySelector("#propBedside").addEventListener("click", handleBedside);
  container.querySelector("#propCups").addEventListener("click", handleCups);
  container.querySelector("#propLight").addEventListener("click", handleLight);
  container.querySelector("#propSharedWord").addEventListener("click", handleWord);

  // Hook up deck button clicks
  container.querySelectorAll(".deck-card").forEach(card => {
    card.addEventListener("click", () => {
      const target = card.getAttribute("data-target");
      if (target === "window") handleWindow();
      else if (target === "bedside") handleBedside();
      else if (target === "cups") handleCups();
      else if (target === "light") handleLight();
      else if (target === "word") handleWord();
    });
  });
}
