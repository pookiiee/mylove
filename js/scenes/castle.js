/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Destination 6: The Birthday Castle
 * The Grand 24th Birthday Celebration Hall
 */

import { CONFIG } from "../config.js";
import { stateManager } from "../state.js";
import { audioManager } from "../audio.js";
import { Characters } from "../characters.js";

export function renderCastleScene(container, returnToMap, goToFinalSurprise) {
  const castleData = CONFIG.castle;

  container.innerHTML = `
    <div class="destination-scene castle-scene">
      <nav class="scene-nav">
        <button class="celestial-back-btn" id="castleBackBtn">
          <span>←</span>
          <span>Return to Universe</span>
        </button>
        <div class="scene-title-wrapper">
          <h2 class="scene-title">${castleData.title}</h2>
          <span class="scene-subtitle">${castleData.subtitle}</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <!-- Grand Celestial Castle Hall -->
      <div class="castle-grand-hall">
        <!-- Celestial Banners and Floating Stars -->
        <div class="castle-arches">
          <div class="starlight-arch arch-left"></div>
          <div class="starlight-arch arch-center">
            <span class="arch-star">✦</span>
            <span class="arch-number">24</span>
            <span class="arch-star">✦</span>
          </div>
          <div class="starlight-arch arch-right"></div>
        </div>

        <!-- The Emotional Narrative Reveal -->
        <div class="castle-narrative-banner">
          <p class="castle-line line-1">"Twenty-four years of you."</p>
          <p class="castle-line line-2">"And somehow, I get to love you in this little moment of your story."</p>
          <h1 class="castle-greeting">Happy Birthday, my ${CONFIG.nickname}. ♡</h1>
          <p class="castle-arabic-praise" dir="rtl">${castleData.unlockedMessageArabic}</p>
        </div>

        <!-- The Glowing Birthday Cake Centerpiece -->
        <div class="birthday-cake-centerpiece">
          <div class="cake-sparkle-halo"></div>

          <!-- Illustrated 24th Birthday Cake -->
          <div class="interactive-cake" id="birthdayCakeItem" title="Blow out the candles and make a birthday wish!">
            <!-- Glowing Candles with Flame -->
            <div class="cake-candles-row">
              <div class="candle candle-1">
                <div class="flame"></div>
                <div class="candle-stick"></div>
              </div>
              <div class="candle-number-badge">24</div>
              <div class="candle candle-2">
                <div class="flame"></div>
                <div class="candle-stick"></div>
              </div>
            </div>

            <!-- Cake Tiers -->
            <div class="cake-tier tier-top">
              <div class="frosting-drops"></div>
              <div class="cake-frosting"></div>
            </div>
            <div class="cake-tier tier-bottom">
              <div class="frosting-drops"></div>
              <div class="cake-frosting"></div>
            </div>
            <div class="cake-plate"></div>

            <div class="cake-tap-label">
              <span>✧ Tap to Make a Wish & Open Your Gift ✧</span>
            </div>
          </div>
        </div>

        <!-- Anea & Aseel celebrating in the Castle -->
        <div class="castle-characters-celebrating">
          ${Characters.getTogetherSceneSVG("holdingHands", 220)}
        </div>

        <!-- Floating Golden Gift Box -->
        <div class="magical-present-wrapper" id="birthdayPresentItem">
          <div class="present-box">
            <div class="box-lid"></div>
            <div class="box-body"></div>
            <div class="box-ribbon-v"></div>
            <div class="box-ribbon-h"></div>
            <div class="box-sparkles">✨</div>
          </div>
          <div class="present-label">Aseel's Final Birthday Surprise 🎁</div>
        </div>
      </div>
    </div>
  `;

  // Navigation
  container.querySelector("#castleBackBtn").addEventListener("click", () => {
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  // Tap Cake or Present -> Launch Final Surprise
  const cake = container.querySelector("#birthdayCakeItem");
  const present = container.querySelector("#birthdayPresentItem");

  function triggerSurprise() {
    audioManager.playStarlightChord();
    stateManager.collectStar("castle_cake_wished");

    // Blow candle animation
    cake.classList.add("candles-blown");

    setTimeout(() => {
      goToFinalSurprise();
    }, 1200);
  }

  cake.addEventListener("click", triggerSurprise);
  present.addEventListener("click", triggerSurprise);
}
