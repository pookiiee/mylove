/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Destination 1: The Little Planet — "Our Little Home"
 * Pure storybook diorama with direct room interactions (Window, Cups with a & a, Bedside Note, Lamp, Bookmark)
 * Removed bottom deck box as requested by Aseel.
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
        <span class="home-interact-tip">✨ اضغطي على أي شيء داخل الغرفة لتكتشفي ما يخفيه في قلبي ✨</span>
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

          <!-- Arched Starlit Window (Fixed Centered) -->
          <div class="room-arch-window" id="propWindow" title="اضغطي للتأمل في نافذة النجوم">
            <div class="window-sky">
              <div class="crescent-moon"></div>
              <div class="twinkling-star ts1">✦</div>
              <div class="twinkling-star ts2">✧</div>
              <div class="twinkling-star ts3">✦</div>
            </div>
            <div class="window-sill">
              <div class="little-potted-flower">🌱</div>
            </div>
            <div class="prop-badge-floating">🪟 النافذة المطلة على النجوم</div>
          </div>

          <!-- Left Bedside Corner with Lamp & Note -->
          <div class="room-bedside-nook">
            <div class="cozy-lamp-fixture interactive-room-prop" id="propLight" title="اضغطي لتشعري بالنور اللطيف">
              <div class="lamp-warm-shade"></div>
              <div class="lamp-ambient-glow"></div>
              <div class="prop-badge-floating">🕯️ النور اللطيف</div>
            </div>

            <div class="bedside-table interactive-room-prop" id="propBedside" title="اضغطي لقراءة رسالة السرير">
              <div class="folded-letter-sprite">📜</div>
              <div class="prop-badge-floating">💌 رسالة بجانب السرير</div>
            </div>
          </div>

          <!-- Center Cozy Rug with Chibi Duo & Side-by-Side Cups (a & a) -->
          <div class="room-center-rug">
            <div class="woven-rug-oval"></div>

            <!-- Two Cute Chibi Characters Sitting Together -->
            <div class="home-chibi-duo-wrapper">
              ${Characters.getTogetherSceneSVG("holdingHands", 195)}
            </div>

            <!-- Two Warm Mugs Side-by-Side with 'a' and 'a' (Interactive) -->
            <div class="two-cups-tray interactive-room-prop" id="propCups" title="اضغطي لرؤية كوبينا الدافئين معاً">
              <div class="chibi-mug mug-anea" title="Anea's Cup (a)">
                <span class="steam-wisp">~</span>
                <span class="mug-initial">a</span>
              </div>
              <div class="chibi-mug mug-aseel" title="Aseel's Cup (a)">
                <span class="steam-wisp">~</span>
                <span class="mug-initial">a</span>
              </div>
              <div class="prop-badge-floating cups-badge">☕ كوبان دافئان معاً (a & a)</div>
            </div>
          </div>

          <!-- Right Bookshelf Corner with Secret Bookmark -->
          <div class="room-bookshelf-nook">
            <div class="mini-bookshelf">
              <div class="shelf-book b1"></div>
              <div class="shelf-book b2"></div>
              <div class="shelf-book b3"></div>
            </div>
            <div class="secret-bookmark-tag interactive-room-prop" id="propSharedWord" title="كلمتنا الخاصة">
              <span class="bookmark-ribbon">♡</span>
              <span class="word-text">حبوبي</span>
              <div class="prop-badge-floating">✨ دلالي لكِ</div>
            </div>
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
    stateManager.markDestinationExplored("home");
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const modal = container.querySelector("#homeModal");
  const modalSlot = container.querySelector("#homeModalSlot");
  const modalClose = container.querySelector("#homeModalClose");

  function openDialog(title, arabic, english, starKey) {
    stateManager.markDestinationExplored("home");
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

  // Handlers for room prop clicks
  container.querySelector("#propWindow").addEventListener("click", () => {
    openDialog(objects.window.title, objects.window.messageArabic, objects.window.messageEnglish, "star_home_window");
  });

  container.querySelector("#propBedside").addEventListener("click", () => {
    audioManager.playPaperSound();
    openDialog(objects.bedsideLetter.title, objects.bedsideLetter.messageArabic, objects.bedsideLetter.messageEnglish, "star_home_bedside");
  });

  container.querySelector("#propCups").addEventListener("click", () => {
    openDialog("Two Warm Cups (a & a)", "كوبان دافئان لـ a و a جنباً إلى جنب.. جلساتنا البسيطة، سوالفنا الطويلة اللي ما نمل منها، وألعابنا وضحكاتنا سوا.. هذه هي اللحظات اللي ما أبدلها بالدنيا كلها.", objects.twoCups.messageEnglish, "star_home_cups");
  });

  container.querySelector("#propLight").addEventListener("click", () => {
    openDialog(objects.littleLight.title, objects.littleLight.messageArabic, objects.littleLight.messageEnglish, "star_home_light");
  });

  container.querySelector("#propSharedWord").addEventListener("click", () => {
    openDialog(objects.sharedWord.title, objects.sharedWord.secretMessage, "A tender word from Aseel's heart to yours.", "star_home_word");
  });
}
