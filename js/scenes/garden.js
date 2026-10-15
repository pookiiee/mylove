/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Destination 2: The Garden of Memories
 * Interactive Storybook Garden with Chibi Anea walking to each glowing memory flower!
 */

import { CONFIG } from "../config.js";
import { stateManager } from "../state.js";
import { audioManager } from "../audio.js";
import { Characters } from "../characters.js";

export function renderGardenScene(container, returnToMap) {
  const memories = CONFIG.memories;

  // Garden flower coordinates (% based for responsiveness)
  const FLOWER_COORDS = [
    { x: 16, y: 22 }, // Memory 1: First Message & Voice
    { x: 50, y: 15 }, // Memory 2: Slowly Falling
    { x: 84, y: 22 }, // Memory 3: Our Little Routine
    { x: 20, y: 72 }, // Memory 4: March 31 (Golden Milestone)
    { x: 50, y: 80 }, // Memory 5: The Voice Call
    { x: 80, y: 72 }  // Memory 6: The Way You Love Me
  ];

  container.innerHTML = `
    <div class="destination-scene garden-scene">
      <!-- Navigation Bar -->
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

      <!-- Atmospheric Introduction Banner -->
      <div class="garden-header-text">
        <p class="garden-poetic-quote">"Each flower here bloomed from a moment that made me fall a little more in love with you."</p>
        <div class="garden-instruction-pill">
          <span>🌸 اضغطي على أي زهرة لتمشي أنيتا نحوها وتفتح ذكراها مع أسيل ♡</span>
        </div>
      </div>

      <!-- INTERACTIVE STORYBOOK CELESTIAL GARDEN STAGE -->
      <div class="interactive-garden-stage" id="gardenStage">
        <!-- Celestial Night Garden Sky & Glow -->
        <div class="garden-sky-ambience"></div>

        <!-- Winding Stepping Stone Pathway (SVG) -->
        <svg class="garden-pathway-svg" viewBox="0 0 900 500" preserveAspectRatio="none">
          <path d="M150 140 Q 300 80 450 120 T 750 140 Q 820 280 720 380 Q 550 440 450 410 T 180 380 Q 90 260 150 140 Z" 
                fill="none" stroke="rgba(223, 186, 83, 0.25)" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M150 140 Q 300 80 450 120 T 750 140 Q 820 280 720 380 Q 550 440 450 410 T 180 380 Q 90 260 150 140 Z" 
                fill="none" stroke="rgba(116, 143, 126, 0.35)" stroke-width="18" stroke-dasharray="10 16" stroke-linecap="round" />
        </svg>

        <!-- Garden Grass & Celestial Flower Tufts -->
        <div class="garden-flora-tufts">
          <span class="grass-tuft t1">🌿</span>
          <span class="grass-tuft t2">✨</span>
          <span class="grass-tuft t3">🍃</span>
          <span class="grass-tuft t4">🌱</span>
          <span class="grass-tuft t5">✨</span>
          <span class="grass-tuft t6">🌿</span>
        </div>

        <!-- 6 Interactive Glowing Memory Flowers -->
        <div class="garden-flowers-layer">
          ${memories.map((mem, i) => {
            const isVisited = stateManager.state.memoriesVisited.includes(mem.id);
            const coord = FLOWER_COORDS[i];
            const isGolden = mem.isGolden;
            const isHighlight = mem.isHighlight;

            return `
              <div class="garden-flower-spot ${isVisited ? 'visited' : 'unvisited'} ${isGolden ? 'golden-flower-spot' : ''} ${isHighlight ? 'highlight-flower-spot' : ''}" 
                   id="flowerSpot_${mem.id}"
                   data-id="${mem.id}" 
                   data-idx="${i}"
                   style="left: ${coord.x}%; top: ${coord.y}%;"
                   title="اضغطي لتمشي أنيتا نحو: ${mem.titleArabic}">
                
                <div class="flower-aura-glow"></div>
                
                <div class="flower-bloom-visual">
                  ${isGolden ? '🌼' :
                    isHighlight ? '🎙️' :
                    mem.icon === 'blooming-rose' ? '🌹' :
                    mem.icon === 'message' ? '💬' :
                    mem.icon === 'orbit' ? '✨' : '🎮'}
                </div>

                <!-- Flower Label Tag -->
                <div class="flower-label-tag">
                  <span class="flower-num">${mem.number}</span>
                  <span class="flower-title" dir="rtl">${mem.titleArabic}</span>
                  ${isVisited ? '<span class="flower-check">✓</span>' : '<span class="flower-spark">✦</span>'}
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <!-- CHIBI ANEA WALKING CHARACTER (Initially Center-Stage) -->
        <div class="garden-anea-avatar" id="gardenAnea" style="left: 50%; top: 48%;">
          <div class="anea-starlight-pedestal"></div>
          <div class="anea-sprite-box">
            ${Characters.getAneaSVG("standing", 115)}
          </div>
          <div class="anea-bubble-hint" id="aneaBubble">
            <span>أنيتي ♡</span>
          </div>
        </div>
      </div>

      <!-- Quick Memory Directory Carousel at Bottom for Mobile -->
      <div class="garden-directory-wrapper">
        <h4 class="directory-title" dir="rtl">قائمة الذكريات المستكشفة (${stateManager.state.memoriesVisited.length} / 6)</h4>
        <div class="garden-directory-cards">
          ${memories.map((mem) => {
            const isVisited = stateManager.state.memoriesVisited.includes(mem.id);
            return `
              <button class="dir-memory-pill ${isVisited ? 'visited' : ''}" data-id="${mem.id}">
                <span class="dir-icon">${isVisited ? '⭐' : '🌸'}</span>
                <span class="dir-num">${mem.number}</span>
                <span class="dir-name" dir="rtl">${mem.titleArabic}</span>
              </button>
            `;
          }).join("")}
        </div>
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

  // Navigation: Back Button
  container.querySelector("#gardenBackBtn").addEventListener("click", () => {
    stateManager.markDestinationExplored("garden");
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const modal = container.querySelector("#gardenModal");
  const modalSlot = container.querySelector("#gardenModalSlot");
  const modalClose = container.querySelector("#gardenModalClose");
  const aneaAvatar = container.querySelector("#gardenAnea");
  const aneaBubble = container.querySelector("#aneaBubble");

  let isWalking = false;

  // Function to walk Anea to a flower and open the memory
  function walkToFlowerAndOpen(mem, flowerIdx) {
    if (isWalking) return;
    isWalking = true;

    const targetCoord = FLOWER_COORDS[flowerIdx];
    const currentLeft = parseFloat(aneaAvatar.style.left || "50");

    // Face direction: left or right
    const facingRight = targetCoord.x >= currentLeft;
    const spriteBox = aneaAvatar.querySelector(".anea-sprite-box");
    if (spriteBox) {
      spriteBox.style.transform = facingRight ? "scaleX(1)" : "scaleX(-1)";
    }

    // Play footstep/starlight chimes
    audioManager.playChime(523.25, 0.4);

    // Add walking motion animation
    aneaAvatar.classList.add("walking");
    if (aneaBubble) aneaBubble.innerHTML = `<span>ذاهبة إلى: ${mem.titleArabic} ✨</span>`;

    // Move to target position smoothly (offset slightly so she stands beside the flower)
    const offsetX = targetCoord.x > 50 ? targetCoord.x - 7 : targetCoord.x + 7;
    const offsetY = targetCoord.y + 2;

    aneaAvatar.style.left = `${offsetX}%`;
    aneaAvatar.style.top = `${offsetY}%`;

    // After walk duration (700ms), stop walking and open memory
    setTimeout(() => {
      aneaAvatar.classList.remove("walking");
      isWalking = false;
      if (aneaBubble) aneaBubble.innerHTML = `<span>أنيتي ♡</span>`;

      // Sparkle chime on flower
      audioManager.playChime(mem.isGolden ? 880 : 659.25, 1.2);

      // Open memory modal
      openMemory(mem);
    }, 750);
  }

  function openMemory(mem) {
    stateManager.visitMemory(mem.id);
    stateManager.collectStar(`star_${mem.id}`);
    stateManager.markDestinationExplored("garden");

    // Update UI flower visited state
    const spot = container.querySelector(`#flowerSpot_${mem.id}`);
    if (spot) {
      spot.classList.remove("unvisited");
      spot.classList.add("visited");
      const check = spot.querySelector(".flower-spark");
      if (check) check.outerHTML = '<span class="flower-check">✓</span>';
    }

    // Update directory button state
    const dirBtn = container.querySelector(`.dir-memory-pill[data-id="${mem.id}"]`);
    if (dirBtn) dirBtn.classList.add("visited");

    container.querySelector(".stars-counter-small").textContent = `⭐ ${stateManager.state.starsCollected}`;

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
            <div class="voice-call-tagline">"تلك الليلة في المكالمة الصوتية.. حين اعترفنا ♡"</div>
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
          <span class="star-blessing">⭐ تم حفظ هذه الذكرى في عالم أنيا إلى الأبد</span>
        </div>
      </div>
    `;

    modal.style.display = "flex";
  }

  modalClose.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Attach click listener to each flower spot on the garden stage
  container.querySelectorAll(".garden-flower-spot").forEach(spot => {
    spot.addEventListener("click", () => {
      const id = spot.getAttribute("data-id");
      const idx = parseInt(spot.getAttribute("data-idx"), 10);
      const mem = memories.find(m => m.id === id);
      if (mem) {
        walkToFlowerAndOpen(mem, idx);
      }
    });
  });

  // Directory buttons (direct jump)
  container.querySelectorAll(".dir-memory-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const idx = memories.findIndex(m => m.id === id);
      const mem = memories[idx];
      if (mem) {
        walkToFlowerAndOpen(mem, idx);
      }
    });
  });
}
