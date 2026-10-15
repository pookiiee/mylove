/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Ambient Celestial Audio Synthesizer & Sound Effects
 * Built with Web Audio API for zero external audio dependencies.
 */

class CelestialAudioManager {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isMuted = false;
    this.volume = 0.5;
    this.isPlayingAmbient = false;
    this.ambientInterval = null;
    this.bgAudioEl = null;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn("Web Audio API not supported:", e);
    }
  }

  resume() {
    this.init();
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx && !this.isMuted) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
    if (this.bgAudioEl && !this.isMuted) {
      this.bgAudioEl.volume = this.volume;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime, 0.05);
    }
    if (this.bgAudioEl) {
      this.bgAudioEl.muted = this.isMuted;
    }
    return !this.isMuted;
  }

  /**
   * Play a gentle celestial chime (e.g. for collecting a star or opening a memory)
   */
  playChime(frequency = 523.25, duration = 1.2) {
    if (this.isMuted || !this.ctx) return;
    try {
      this.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Sine wave with soft bell harmonics
      osc.type = "sine";
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
      // Subtle pitch bend
      osc.frequency.exponentialRampToValueAtTime(frequency * 1.02, this.ctx.currentTime + duration * 0.1);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(2400, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(this.ctx.currentTime);
      osc.stop(this.ctx.currentTime + duration + 0.1);
    } catch (e) {}
  }

  /**
   * Multi-note chime chord (for completing a constellation, discovering a secret, or unlocking the castle)
   */
  playStarlightChord() {
    if (this.isMuted) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playChime(freq, 1.8), idx * 120);
    });
  }

  /**
   * Gentle paper rustle / letter unfolding sound
   */
  playPaperSound() {
    if (this.isMuted || !this.ctx) return;
    try {
      this.resume();
      const bufferSize = this.ctx.sampleRate * 0.25;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);
      filter.Q.setValueAtTime(3, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.06, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.25);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      whiteNoise.start(this.ctx.currentTime);
    } catch (e) {}
  }

  /**
   * Start peaceful generative celestial background music
   * Generates warm, low-frequency atmospheric drone and occasional gentle harp notes
   */
  startAmbient() {
    if (this.isPlayingAmbient) return;
    this.resume();
    this.isPlayingAmbient = true;

    // Ambient chord cycle: Fmaj9 -> Cmaj7 -> Am9 -> Gsus4
    const chords = [
      [174.61, 261.63, 329.63, 392.00], // F3, C4, E4, G4
      [130.81, 196.00, 246.94, 329.63], // C3, G3, B3, E4
      [110.00, 164.81, 220.00, 261.63], // A2, E3, A3, C4
      [146.83, 196.00, 293.66, 392.00]  // D3, G3, D4, G4
    ];
    let chordIdx = 0;

    const playChordPad = () => {
      if (!this.isPlayingAmbient || !this.ctx || this.isMuted) return;
      const freqs = chords[chordIdx % chords.length];
      chordIdx++;

      freqs.forEach(freq => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const filter = this.ctx.createBiquadFilter();

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

          filter.type = "lowpass";
          filter.frequency.setValueAtTime(600, this.ctx.currentTime);

          gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.035, this.ctx.currentTime + 2.5);
          gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 7.5);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(this.masterGain);

          osc.start(this.ctx.currentTime);
          osc.stop(this.ctx.currentTime + 7.8);
        } catch (e) {}
      });
    };

    playChordPad();
    this.ambientInterval = setInterval(playChordPad, 7000);
  }

  stopAmbient() {
    this.isPlayingAmbient = false;
    if (this.ambientInterval) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
  }
}

export const audioManager = new CelestialAudioManager();
