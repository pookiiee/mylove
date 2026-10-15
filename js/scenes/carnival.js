/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Destination 4: The Little Carnival
 * Features 3 Adorable, Playable Mini-Games
 */

import { CONFIG } from "../config.js";
import { stateManager } from "../state.js";
import { audioManager } from "../audio.js";
import { Characters } from "../characters.js";

export function renderCarnivalScene(container, returnToMap) {
  const carnivalData = CONFIG.carnival;

  container.innerHTML = `
    <div class="destination-scene carnival-scene">
      <nav class="scene-nav">
        <button class="celestial-back-btn" id="carnivalBackBtn">
          <span>←</span>
          <span>Return to Universe</span>
        </button>
        <div class="scene-title-wrapper">
          <h2 class="scene-title">The Little Carnival</h2>
          <span class="scene-subtitle">ألعاب النجوم والمرح اللطيف</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <!-- Mini-Game Selection Tabs -->
      <div class="carnival-tabs">
        <button class="carnival-tab-btn active" data-game="game1">
          <span>⭐</span>
          <span>Game 1: Collect the Stars</span>
        </button>
        <button class="carnival-tab-btn" data-game="game2">
          <span>✨</span>
          <span>Game 2: Our Constellation</span>
        </button>
        <button class="carnival-tab-btn" data-game="game3">
          <span>💌</span>
          <span>Game 3: Love Quiz</span>
        </button>
      </div>

      <!-- Mini-Game Stage Container -->
      <div class="game-stage-container" id="gameStage">
        <!-- Dynamically rendered mini-game goes here -->
      </div>
    </div>
  `;

  // Back button
  container.querySelector("#carnivalBackBtn").addEventListener("click", () => {
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const stage = container.querySelector("#gameStage");
  const tabBtns = container.querySelectorAll(".carnival-tab-btn");

  function switchGame(gameKey) {
    tabBtns.forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-game") === gameKey);
    });

    if (gameKey === "game1") initGame1(stage);
    else if (gameKey === "game2") initGame2(stage);
    else if (gameKey === "game3") initGame3(stage);
  }

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      audioManager.playChime(523.25, 0.4);
      switchGame(btn.getAttribute("data-game"));
    });
  });

  // Start with Game 1
  switchGame("game1");

  // ==========================================
  // MINI-GAME 1: COLLECT THE STARS
  // ==========================================
  function initGame1(host) {
    const quotes = carnivalData.game1.starQuotes;
    const target = carnivalData.game1.targetStars;
    let score = 0;
    let isGameOver = false;

    host.innerHTML = `
      <div class="minigame-card game1-card">
        <div class="game-header">
          <h3 class="game-title">Collect the Stars</h3>
          <p class="game-instruction">Tap or move the net to gather the drifting birthday stars!</p>
          <div class="game-score-display">Stars Gathered: <span id="g1Score">0</span> / ${target}</div>
        </div>

        <div class="game-canvas-area" id="g1CanvasArea">
          <canvas id="g1Canvas" width="600" height="340"></canvas>
          <div class="touch-hint">Drag or use arrow keys / tap to catch stars</div>
        </div>

        <div class="game-quote-banner" id="g1QuoteBanner" style="display: none;">
          <div class="quote-sparkle">✧</div>
          <div class="quote-text" id="g1QuoteText"></div>
        </div>

        <div class="game-completion-banner" id="g1Completion" style="display: none;">
          <h4>${carnivalData.game1.completionMessageEnglish}</h4>
          <p dir="rtl">${carnivalData.game1.completionMessageArabic}</p>
          <button class="celestial-btn" id="g1ReplayBtn">Play Again</button>
        </div>
      </div>
    `;

    const canvas = host.querySelector("#g1Canvas");
    const ctx = canvas.getContext("2d");
    const scoreEl = host.querySelector("#g1Score");
    const quoteBanner = host.querySelector("#g1QuoteBanner");
    const quoteText = host.querySelector("#g1QuoteText");
    const completionBanner = host.querySelector("#g1Completion");

    // Responsive canvas
    const rect = canvas.getBoundingClientRect();
    const width = 600;
    const height = 340;

    let basket = { x: width / 2, y: height - 40, width: 70, height: 26 };
    let fallingStars = [];
    let animationId = null;

    function spawnStar() {
      if (fallingStars.length < 4 && !isGameOver) {
        fallingStars.push({
          x: Math.random() * (width - 60) + 30,
          y: -20,
          vy: Math.random() * 1.5 + 1.2,
          radius: 12,
          color: "#e5c158",
          sparkle: Math.random() * Math.PI
        });
      }
    }

    // Touch and mouse movement
    function handleMove(clientX) {
      const cRect = canvas.getBoundingClientRect();
      const scale = width / cRect.width;
      const mouseX = (clientX - cRect.left) * scale;
      basket.x = Math.max(basket.width / 2, Math.min(width - basket.width / 2, mouseX));
    }

    canvas.addEventListener("mousemove", (e) => handleMove(e.clientX));
    canvas.addEventListener("touchmove", (e) => {
      if (e.touches.length > 0) handleMove(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") basket.x = Math.max(basket.width / 2, basket.x - 25);
      if (e.key === "ArrowRight") basket.x = Math.min(width - basket.width / 2, basket.x + 25);
    });

    const spawnInterval = setInterval(spawnStar, 1200);

    function gameLoop() {
      ctx.clearRect(0, 0, width, height);

      // Draw starry game background
      ctx.fillStyle = "rgba(10, 15, 29, 0.95)";
      ctx.fillRect(0, 0, width, height);

      // Draw Basket (Soft glowing celestial basket)
      ctx.save();
      ctx.fillStyle = "rgba(223, 186, 83, 0.85)";
      ctx.beginPath();
      ctx.roundRect(basket.x - basket.width / 2, basket.y, basket.width, basket.height, [0, 0, 12, 12]);
      ctx.fill();
      ctx.strokeStyle = "#faf8f2";
      ctx.lineWidth = 2;
      ctx.stroke();
      // Little handle
      ctx.beginPath();
      ctx.arc(basket.x, basket.y, basket.width * 0.45, Math.PI, 0, false);
      ctx.stroke();
      ctx.restore();

      // Draw and update falling stars
      for (let i = fallingStars.length - 1; i >= 0; i--) {
        const s = fallingStars[i];
        s.y += s.vy;
        s.sparkle += 0.05;

        // Collision with basket
        if (
          s.y + s.radius >= basket.y &&
          s.y - s.radius <= basket.y + basket.height &&
          s.x >= basket.x - basket.width / 2 &&
          s.x <= basket.x + basket.width / 2
        ) {
          audioManager.playChime(600 + score * 80, 0.6);
          score++;
          scoreEl.textContent = score;

          // Display quote
          quoteText.textContent = quotes[(score - 1) % quotes.length];
          quoteBanner.style.display = "flex";

          fallingStars.splice(i, 1);

          if (score >= target) {
            isGameOver = true;
            audioManager.playStarlightChord();
            stateManager.completeMinigame("collectStars");
            stateManager.collectStar("minigame_stars");
            completionBanner.style.display = "block";
            clearInterval(spawnInterval);
            break;
          }
          continue;
        }

        // Draw star
        ctx.save();
        ctx.fillStyle = s.color;
        ctx.shadowColor = "#dfba53";
        ctx.shadowBlur = 10;
        ctx.font = "20px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("⭐", s.x, s.y);
        ctx.restore();

        // Respawn if offscreen
        if (s.y > height + 20) {
          fallingStars.splice(i, 1);
        }
      }

      if (!isGameOver) {
        animationId = requestAnimationFrame(gameLoop);
      }
    }

    gameLoop();

    host.querySelector("#g1ReplayBtn")?.addEventListener("click", () => {
      clearInterval(spawnInterval);
      cancelAnimationFrame(animationId);
      initGame1(host);
    });
  }

  // ==========================================
  // MINI-GAME 2: FIND OUR CONSTELLATION
  // ==========================================
  function initGame2(host) {
    const starNodes = [
      { id: 0, x: 90, y: 190, label: "Anea (Admin)" },
      { id: 1, x: 190, y: 110, label: "First DMs" },
      { id: 2, x: 300, y: 160, label: "March 31" },
      { id: 3, x: 390, y: 90, label: "Voice Call" },
      { id: 4, x: 490, y: 180, label: "Confession" },
      { id: 5, x: 300, y: 240, label: "Aseel ♡" }
    ];

    let connectedOrder = [];
    let isComplete = false;

    host.innerHTML = `
      <div class="minigame-card game2-card">
        <div class="game-header">
          <h3 class="game-title">Find Our Constellation</h3>
          <p class="game-instruction">Connect the glowing stars in sequence to trace our story across the sky.</p>
          <div class="constellation-step-indicator">
            Progress: <span id="constellationProgress">0</span> / ${starNodes.length} Stars
          </div>
        </div>

        <div class="constellation-canvas-area">
          <svg id="constellationSvg" width="580" height="300" viewBox="0 0 580 300">
            <!-- Connection Lines -->
            <g id="constellationLines"></g>
            <!-- Stars -->
            <g id="constellationStars">
              ${starNodes.map(node => `
                <g class="constellation-star-group" data-id="${node.id}" style="cursor: pointer;">
                  <circle cx="${node.x}" cy="${node.y}" r="18" fill="rgba(223, 186, 83, 0.15)" class="star-aura" />
                  <circle cx="${node.x}" cy="${node.y}" r="8" fill="#faf8f2" stroke="#dfba53" stroke-width="2" class="star-core" />
                  <text x="${node.x}" y="${node.y + 26}" text-anchor="middle" fill="#d6cebc" font-size="12px" class="star-text">${node.label}</text>
                </g>
              `).join("")}
            </g>
          </svg>
        </div>

        <div class="game-completion-banner" id="g2Completion" style="display: none;">
          <h4>${carnivalData.game2.completionMessageEnglish}</h4>
          <p dir="rtl">${carnivalData.game2.completionMessageArabic}</p>
          <div class="constellation-reward">✦ "Anea & Aseel" Constellation Unlocked Forever! ✦</div>
        </div>

        <div class="constellation-controls">
          <button class="celestial-btn secondary-btn" id="g2ResetBtn">Reset Path</button>
        </div>
      </div>
    `;

    const svg = host.querySelector("#constellationSvg");
    const linesGroup = host.querySelector("#constellationLines");
    const progressEl = host.querySelector("#constellationProgress");
    const completionBanner = host.querySelector("#g2Completion");
    const resetBtn = host.querySelector("#g2ResetBtn");

    function renderLines() {
      let linesHtml = "";
      for (let i = 0; i < connectedOrder.length - 1; i++) {
        const p1 = starNodes[connectedOrder[i]];
        const p2 = starNodes[connectedOrder[i + 1]];
        linesHtml += `
          <line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" 
                stroke="#dfba53" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 2" class="starlight-line" />
        `;
      }
      linesGroup.innerHTML = linesHtml;
      progressEl.textContent = connectedOrder.length;
    }

    host.querySelectorAll(".constellation-star-group").forEach(starEl => {
      starEl.addEventListener("click", () => {
        if (isComplete) return;
        const id = parseInt(starEl.getAttribute("data-id"));

        if (!connectedOrder.includes(id)) {
          audioManager.playChime(500 + connectedOrder.length * 100, 0.7);
          connectedOrder.push(id);
          starEl.querySelector(".star-core").setAttribute("fill", "#dfba53");
          starEl.querySelector(".star-aura").setAttribute("r", "24");
          renderLines();

          if (connectedOrder.length === starNodes.length) {
            isComplete = true;
            audioManager.playStarlightChord();
            stateManager.completeMinigame("constellation");
            stateManager.collectStar("minigame_constellation");
            completionBanner.style.display = "block";
          }
        }
      });
    });

    resetBtn.addEventListener("click", () => {
      connectedOrder = [];
      isComplete = false;
      renderLines();
      host.querySelectorAll(".constellation-star-group").forEach(el => {
        el.querySelector(".star-core").setAttribute("fill", "#faf8f2");
        el.querySelector(".star-aura").setAttribute("r", "18");
      });
      completionBanner.style.display = "none";
    });
  }

  // ==========================================
  // MINI-GAME 3: THE LITTLE LOVE QUIZ
  // ==========================================
  function initGame3(host) {
    const questions = carnivalData.game3.questions;
    let currentIdx = 0;
    let correctCount = 0;

    function renderQuestion() {
      const q = questions[currentIdx];
      host.innerHTML = `
        <div class="minigame-card game3-card">
          <div class="game-header">
            <span class="quiz-badge">Question ${currentIdx + 1} of ${questions.length}</span>
            <h3 class="quiz-question-en">${q.questionEnglish}</h3>
            <h4 class="quiz-question-ar" dir="rtl">${q.questionArabic}</h4>
          </div>

          <div class="quiz-options-list">
            ${q.options.map((opt, i) => `
              <button class="quiz-option-btn" data-index="${i}">
                <span class="opt-bullet">${String.fromCharCode(65 + i)}</span>
                <span class="opt-text">${opt}</span>
              </button>
            `).join("")}
          </div>

          <div class="quiz-feedback-box" id="quizFeedback" style="display: none;"></div>
        </div>
      `;

      const optionsList = host.querySelectorAll(".quiz-option-btn");
      const feedback = host.querySelector("#quizFeedback");

      optionsList.forEach(btn => {
        btn.addEventListener("click", () => {
          const chosen = parseInt(btn.getAttribute("data-index"));
          optionsList.forEach(b => b.disabled = true);

          if (chosen === q.correctIndex) {
            audioManager.playChime(784, 0.8);
            correctCount++;
            btn.classList.add("correct-choice");
            feedback.innerHTML = `
              <div class="feedback-correct">
                <span class="fb-icon">💖</span>
                <div class="fb-text">
                  <p class="fb-ar" dir="rtl">${q.explanationArabic}</p>
                  <p class="fb-en">Perfect, my love!</p>
                </div>
              </div>
            `;
          } else {
            audioManager.playChime(440, 0.6);
            btn.classList.add("gentle-wrong-choice");
            optionsList[q.correctIndex].classList.add("correct-choice");
            feedback.innerHTML = `
              <div class="feedback-gentle">
                <span class="fb-icon">🌸</span>
                <div class="fb-text">
                  <p class="fb-ar" dir="rtl">${q.explanationArabic}</p>
                  <p class="fb-en">Still completely adorable! The correct answer is highlighted.</p>
                </div>
              </div>
            `;
          }

          feedback.style.display = "block";

          setTimeout(() => {
            currentIdx++;
            if (currentIdx < questions.length) {
              renderQuestion();
            } else {
              renderQuizResults();
            }
          }, 2400);
        });
      });
    }

    function renderQuizResults() {
      audioManager.playStarlightChord();
      stateManager.completeMinigame("quiz");
      stateManager.collectStar("minigame_quiz");

      host.innerHTML = `
        <div class="minigame-card quiz-results-card">
          <div class="results-crown">👑</div>
          <h3 class="results-title">You Know Our Story by Heart</h3>
          <p class="results-arabic" dir="rtl">حكايتنا محفورة في قلبك مثل ما هي محفورة بين النجوم.. كل ذكرى معك هي كنز ♡</p>
          <div class="results-star-badge">⭐ +1 Golden Relationship Star Awarded!</div>
          <button class="celestial-btn" id="quizRestartBtn">Take Quiz Again</button>
        </div>
      `;

      host.querySelector("#quizRestartBtn").addEventListener("click", () => {
        currentIdx = 0;
        correctCount = 0;
        renderQuestion();
      });
    }

    renderQuestion();
  }
}
