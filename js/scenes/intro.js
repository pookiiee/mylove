/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Scene: Cinematic Opening Experience
 */

import { CONFIG } from "../config.js";
import { audioManager } from "../audio.js";
import { stateManager } from "../state.js";

export function renderIntroScene(container, onComplete) {
  container.innerHTML = `
    <div class="intro-screen">
      <div class="intro-stars-layer"></div>
      
      <div class="intro-planet-wrapper">
        <div class="intro-glow"></div>
        <div class="intro-planet">
          <div class="planet-crater c1"></div>
          <div class="planet-crater c2"></div>
          <div class="planet-crater c3"></div>
          <div class="planet-rose">
            <svg width="22" height="28" viewBox="0 0 24 30" fill="none">
              <!-- Delicate Little Prince rose stem & petals -->
              <path d="M12 12 Q10 20 12 28" stroke="#748f7e" stroke-width="2" stroke-linecap="round"/>
              <path d="M11 20 Q6 17 8 13 Q12 16 11 20 Z" fill="#748f7e"/>
              <ellipse cx="12" cy="10" rx="6" ry="7" fill="#dfba53"/>
              <circle cx="12" cy="9" r="4" fill="#faf8f2" opacity="0.6"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="intro-content">
        <div class="intro-text-step step-1" id="introStep1">
          <p class="intro-quote">"Somewhere in this enormous universe, there is a little world that exists just for you."</p>
        </div>

        <div class="intro-text-step step-2" id="introStep2" style="display: none;">
          <h1 class="intro-birthday-title">Happy 24th Birthday, ${CONFIG.girlfriendName}.</h1>
        </div>

        <div class="intro-text-step step-3" id="introStep3" style="display: none;">
          <p class="intro-dedication">Made with love, by your ${CONFIG.girlfriendCallName}. ♡</p>
          <p class="intro-arabic-sub">عالم صغير صُنع بكل الحب لأجلك يا أنيتي</p>
          
          <button class="celestial-btn intro-enter-btn" id="enterUniverseBtn">
            <span class="btn-star">✧</span>
            <span>Enter Your Little Universe</span>
            <span class="btn-star">✧</span>
          </button>
        </div>
      </div>
    </div>
  `;

  const step1 = container.querySelector("#introStep1");
  const step2 = container.querySelector("#introStep2");
  const step3 = container.querySelector("#introStep3");
  const enterBtn = container.querySelector("#enterUniverseBtn");

  // Step 1 appears gently
  setTimeout(() => {
    step1.classList.add("visible");
  }, 600);

  // Step 2 appears after 3.8s
  setTimeout(() => {
    step1.classList.add("fade-out");
    setTimeout(() => {
      step1.style.display = "none";
      step2.style.display = "block";
      setTimeout(() => step2.classList.add("visible"), 50);
    }, 800);
  }, 4200);

  // Step 3 appears after 8s
  setTimeout(() => {
    step2.classList.add("fade-out");
    setTimeout(() => {
      step2.style.display = "none";
      step3.style.display = "block";
      setTimeout(() => step3.classList.add("visible"), 50);
    }, 800);
  }, 8200);

  enterBtn.addEventListener("click", () => {
    audioManager.init();
    audioManager.startAmbient();
    audioManager.playStarlightChord();

    const screen = container.querySelector(".intro-screen");
    screen.classList.add("zoom-into-universe");

    setTimeout(() => {
      stateManager.state.introSeen = true;
      stateManager.save();
      onComplete();
    }, 1400);
  });
}
