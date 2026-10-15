/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Destination 3: The Mailbox of Love (Voice Notes & Letters)
 */

import { CONFIG } from "../config.js";
import { stateManager } from "../state.js";
import { audioManager } from "../audio.js";

export function renderMailboxScene(container, returnToMap) {
  const letters = CONFIG.letters;
  let activeAudio = null;
  let animFrameId = null;

  container.innerHTML = `
    <div class="destination-scene mailbox-scene">
      <nav class="scene-nav">
        <button class="celestial-back-btn" id="mailboxBackBtn">
          <span>←</span>
          <span>Return to Universe</span>
        </button>
        <div class="scene-title-wrapper">
          <h2 class="scene-title">The Mailbox of Love</h2>
          <span class="scene-subtitle">صندوق رسايل وفويسات الحب من أسيل ♡</span>
        </div>
        <div class="stars-counter-small">⭐ ${stateManager.state.starsCollected}</div>
      </nav>

      <div class="mailbox-header-banner">
        <div class="mailbox-floating-icon">
          <span class="box-icon">📬</span>
          <span class="box-sparkle">✧</span>
        </div>
        <p class="mailbox-poetic-quote">"Voice notes & letters recorded in the quiet hours of the night, whispered just for your heart."</p>
      </div>

      <!-- Letters & Voice Notes Grid -->
      <div class="letters-grid">
        ${letters.map((letter, idx) => {
          const isOpened = stateManager.state.lettersOpened.includes(letter.id);
          return `
            <div class="letter-envelope-item ${isOpened ? 'opened' : 'unopened'}" data-id="${letter.id}">
              <div class="envelope-outer">
                <div class="wax-seal">
                  <span>${isOpened ? '🎙️' : '✉️'}</span>
                </div>
                <div class="envelope-body">
                  <div class="envelope-top-meta">
                    <span class="envelope-number">Note 0${idx + 1}</span>
                    <span class="voice-badge">🎙️ فويس صوتي</span>
                  </div>
                  <h3 class="envelope-title-en">${letter.titleEnglish}</h3>
                  <h4 class="envelope-title-ar" dir="rtl">${letter.titleArabic}</h4>
                  <p class="envelope-preview">${letter.preview}</p>
                  <div class="envelope-action-row">
                    <span class="envelope-duration">⏱️ ${letter.duration || '0:45'}</span>
                    <span class="envelope-status">${isOpened ? 'Listen Again ♡' : 'Play Voice Note ✧'}</span>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>

      <!-- Voice Note Reader Modal -->
      <div class="celestial-modal-overlay" id="letterModal" style="display: none;">
        <div class="celestial-modal-card letter-paper-modal">
          <button class="modal-close-btn" id="letterModalClose">✕</button>
          <div class="modal-content-slot" id="letterModalSlot"></div>
        </div>
      </div>
    </div>
  `;

  // Stop any active audio and animation
  function cleanupAudio() {
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
      activeAudio = null;
    }
    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }
  }

  // Navigation
  container.querySelector("#mailboxBackBtn").addEventListener("click", () => {
    cleanupAudio();
    stateManager.markDestinationExplored("mailbox");
    audioManager.playChime(440, 0.5);
    returnToMap();
  });

  const modal = container.querySelector("#letterModal");
  const modalSlot = container.querySelector("#letterModalSlot");
  const modalClose = container.querySelector("#letterModalClose");

  function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  function openLetter(letter) {
    cleanupAudio();
    audioManager.playPaperSound();
    audioManager.playChime(784, 0.8);
    stateManager.openLetter(letter.id);
    stateManager.collectStar(`star_${letter.id}`);
    stateManager.markDestinationExplored("mailbox");

    // Update envelope visual
    const el = container.querySelector(`[data-id="${letter.id}"]`);
    if (el) {
      el.classList.remove("unopened");
      el.classList.add("opened");
      const status = el.querySelector(".envelope-status");
      if (status) status.textContent = "Listen Again ♡";
      const seal = el.querySelector(".wax-seal span");
      if (seal) seal.textContent = "🎙️";
    }

    container.querySelector(".stars-counter-small").textContent = `⭐ ${stateManager.state.starsCollected}`;

    // Waveform bars count
    const numBars = 22;
    const waveBarsHtml = Array.from({ length: numBars })
      .map((_, i) => `<span class="wave-bar" style="--bar-i: ${i}; height: ${12 + Math.sin(i * 0.5) * 14}px;"></span>`)
      .join("");

    modalSlot.innerHTML = `
      <div class="parchment-letter-wrapper">
        <div class="parchment-header">
          <span class="parchment-stamp">ANEA'S VOICE MAILBOX ♡</span>
          <h2 class="parchment-title-en">${letter.titleEnglish}</h2>
          <h3 class="parchment-title-ar" dir="rtl">${letter.titleArabic}</h3>
        </div>

        <!-- Voice Note Player Card -->
        <div class="voice-player-card">
          <div class="voice-player-top">
            <button class="voice-play-toggle-btn" id="voicePlayBtn" title="Play Voice Note">
              <span class="voice-play-icon">▶</span>
            </button>
            <div class="voice-player-info">
              <div class="voice-label-row">
                <span class="voice-author-tag">🎙️ تسجيل صوتي من أسيل</span>
                <span class="voice-time-display" id="voiceTimeDisplay">00:00 / ${letter.duration || '0:45'}</span>
              </div>
              <div class="voice-waveform-container" id="waveformWrapper">
                ${waveBarsHtml}
              </div>
              <div class="voice-progress-track" id="voiceProgressTrack">
                <div class="voice-progress-fill" id="voiceProgressFill"></div>
              </div>
            </div>
          </div>
          <div class="voice-note-hint" id="voiceNoteHint">
            <span>✨ استمعي لفويس أسيل مع قراءة الكلمات بالأسفل ♡</span>
          </div>
          <audio id="realVoiceAudio" preload="metadata" src="${letter.audioSrc || ''}"></audio>
        </div>

        <div class="parchment-body" dir="rtl">
          <div class="parchment-label">نص الفويس والرسالة:</div>
          <p class="parchment-text">${letter.bodyArabic.replace(/\n/g, '<br>')}</p>
        </div>

        <div class="parchment-footer">
          <div class="parchment-sign">${letter.date} ♡</div>
          <div class="parchment-star">⭐ صوت محفوظ في مجرتنا للأبد</div>
        </div>
      </div>
    `;

    modal.style.display = "flex";

    // Setup Audio Player Logic
    const audioEl = modalSlot.querySelector("#realVoiceAudio");
    const playBtn = modalSlot.querySelector("#voicePlayBtn");
    const playIcon = playBtn.querySelector(".voice-play-icon");
    const timeDisplay = modalSlot.querySelector("#voiceTimeDisplay");
    const progressFill = modalSlot.querySelector("#voiceProgressFill");
    const progressTrack = modalSlot.querySelector("#voiceProgressTrack");
    const waveformWrapper = modalSlot.querySelector("#waveformWrapper");
    const waveBars = modalSlot.querySelectorAll(".wave-bar");
    const hintEl = modalSlot.querySelector("#voiceNoteHint");

    let isPlaying = false;
    let isSynthFallback = false;
    let synthTimer = null;
    let simulatedCurrent = 0;
    const durationParts = (letter.duration || "0:45").split(":");
    const simulatedDuration = parseInt(durationParts[0], 10) * 60 + parseInt(durationParts[1], 10);

    activeAudio = audioEl;

    function updateWaveBars(active) {
      if (active) {
        waveformWrapper.classList.add("playing");
      } else {
        waveformWrapper.classList.remove("playing");
      }
    }

    function togglePlay() {
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    }

    function playAudio() {
      if (isSynthFallback) {
        startSimulatedPlayback();
        return;
      }

      audioEl.play().then(() => {
        isPlaying = true;
        playIcon.textContent = "⏸";
        playBtn.classList.add("playing");
        updateWaveBars(true);
      }).catch(err => {
        // Fallback if audio file doesn't exist yet on disk
        console.log("Audio file not found, falling back to gentle synth chimes:", err);
        isSynthFallback = true;
        hintEl.innerHTML = `<span>🎵 نغمة دافئة تعزف الآن (يمكنكِ وضع تسجيل صوتكِ في <code>${letter.audioSrc}</code>)</span>`;
        startSimulatedPlayback();
      });
    }

    function pauseAudio() {
      isPlaying = false;
      playIcon.textContent = "▶";
      playBtn.classList.remove("playing");
      updateWaveBars(false);

      if (isSynthFallback) {
        if (synthTimer) clearInterval(synthTimer);
      } else {
        audioEl.pause();
      }
    }

    function startSimulatedPlayback() {
      isPlaying = true;
      playIcon.textContent = "⏸";
      playBtn.classList.add("playing");
      updateWaveBars(true);

      // Play a lovely romantic harp chime sequence
      audioManager.playChime(523.25, 0.6); // C5
      setTimeout(() => isPlaying && audioManager.playChime(659.25, 0.6), 400); // E5
      setTimeout(() => isPlaying && audioManager.playChime(783.99, 0.7), 800); // G5
      setTimeout(() => isPlaying && audioManager.playChime(1046.5, 0.8), 1200); // C6

      if (synthTimer) clearInterval(synthTimer);
      synthTimer = setInterval(() => {
        simulatedCurrent += 0.5;
        if (simulatedCurrent >= simulatedDuration) {
          simulatedCurrent = 0;
          pauseAudio();
          timeDisplay.textContent = `00:00 / ${letter.duration || '0:45'}`;
          progressFill.style.width = "0%";
          return;
        }
        const pct = (simulatedCurrent / simulatedDuration) * 100;
        progressFill.style.width = `${pct}%`;
        timeDisplay.textContent = `${formatTime(simulatedCurrent)} / ${letter.duration || '0:45'}`;

        // Occasional gentle tone while playing
        if (Math.floor(simulatedCurrent) % 4 === 0 && simulatedCurrent % 1 === 0) {
          const notes = [440, 523.25, 587.33, 659.25, 783.99];
          const note = notes[Math.floor(Math.random() * notes.length)];
          audioManager.playChime(note, 0.4);
        }
      }, 500);
    }

    playBtn.addEventListener("click", togglePlay);

    // Audio element events
    audioEl.addEventListener("loadedmetadata", () => {
      if (audioEl.duration && !isNaN(audioEl.duration)) {
        timeDisplay.textContent = `00:00 / ${formatTime(audioEl.duration)}`;
      }
    });

    audioEl.addEventListener("playing", () => {
      hintEl.innerHTML = `<span>✨ صوت أسيل الحقيقي يملأ المكان دفئاً وحناناً ♡</span>`;
    });

    audioEl.addEventListener("timeupdate", () => {
      if (isSynthFallback) return;
      const current = audioEl.currentTime;
      const dur = audioEl.duration || simulatedDuration;
      const pct = (current / dur) * 100;
      progressFill.style.width = `${pct}%`;
      timeDisplay.textContent = `${formatTime(current)} / ${formatTime(dur)}`;
    });

    audioEl.addEventListener("ended", () => {
      pauseAudio();
      progressFill.style.width = "0%";
      const dur = audioEl.duration || simulatedDuration;
      timeDisplay.textContent = `00:00 / ${formatTime(dur)}`;
    });

    audioEl.addEventListener("error", () => {
      isSynthFallback = true;
      hintEl.innerHTML = `<span>🎵 نغمة تعزف لحين إضافة ملف التسجيل: <code>${letter.audioSrc}</code></span>`;
    });

    // Seek track
    progressTrack.addEventListener("click", (e) => {
      const rect = progressTrack.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));

      if (isSynthFallback) {
        simulatedCurrent = pct * simulatedDuration;
        progressFill.style.width = `${pct * 100}%`;
        timeDisplay.textContent = `${formatTime(simulatedCurrent)} / ${letter.duration || '0:45'}`;
      } else if (audioEl.duration) {
        audioEl.currentTime = pct * audioEl.duration;
      }
    });

    // Auto-attempt playback with safe catch
    playAudio();
  }

  function closeModal() {
    cleanupAudio();
    modal.style.display = "none";
  }

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  container.querySelectorAll(".letter-envelope-item").forEach(item => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-id");
      const letter = letters.find(l => l.id === id);
      if (letter) openLetter(letter);
    });
  });
}
