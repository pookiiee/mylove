/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Dynamic Celestial Starfield & Particle Engine
 */

export class Starfield {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.stars = [];
    this.dust = [];
    this.shootingStars = [];
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.width = 0;
    this.height = 0;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.isRunning = true;
    this.reducedMotion = false;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());

    window.addEventListener("mousemove", (e) => {
      this.mouse.targetX = (e.clientX - this.width / 2) * 0.05;
      this.mouse.targetY = (e.clientY - this.height / 2) * 0.05;
    });

    // Touch support for mobile parallax
    window.addEventListener("touchmove", (e) => {
      if (e.touches.length > 0) {
        this.mouse.targetX = (e.touches[0].clientX - this.width / 2) * 0.03;
        this.mouse.targetY = (e.touches[0].clientY - this.height / 2) * 0.03;
      }
    }, { passive: true });

    this.createStars();
    this.createDust();
    this.animate();

    // Occasional shooting star
    setInterval(() => {
      if (Math.random() > 0.4 && this.shootingStars.length < 2 && !this.reducedMotion) {
        this.addShootingStar();
      }
    }, 4500);
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(this.dpr, this.dpr);
    this.createStars();
    this.createDust();
  }

  createStars() {
    const count = Math.floor((this.width * this.height) / 3800); // Responsive density
    this.stars = [];

    // Palette: ivory, soft gold, dusty blue, pure warm white
    const colors = ["#faf8f2", "#e5c158", "#93ab9c", "#829ab1", "#ffffff"];

    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        depth: Math.random() * 0.8 + 0.2
      });
    }
  }

  createDust() {
    const count = Math.floor(this.width / 35);
    this.dust = [];
    for (let i = 0; i < count; i++) {
      this.dust.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        color: "#dfba53"
      });
    }
  }

  addShootingStar() {
    this.shootingStars.push({
      x: Math.random() * this.width * 0.8,
      y: Math.random() * (this.height * 0.4),
      length: Math.random() * 80 + 40,
      speed: Math.random() * 8 + 6,
      angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.2,
      opacity: 1,
      life: 0,
      maxLife: 40
    });
  }

  animate() {
    if (!this.isRunning) return;

    // Smooth parallax lerp
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Draw subtle nebula clouds
    const grad = this.ctx.createRadialGradient(
      this.width * 0.7 + this.mouse.x * 0.2,
      this.height * 0.3 + this.mouse.y * 0.2,
      10,
      this.width * 0.7,
      this.height * 0.3,
      this.width * 0.6
    );
    grad.addColorStop(0, "rgba(22, 34, 56, 0.45)");
    grad.addColorStop(0.5, "rgba(16, 23, 42, 0.2)");
    grad.addColorStop(1, "rgba(8, 12, 24, 0)");
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // 2. Draw Stars
    for (let star of this.stars) {
      if (!this.reducedMotion) {
        star.twinklePhase += star.twinkleSpeed;
      }
      const currentAlpha = star.alpha * (0.6 + 0.4 * Math.sin(star.twinklePhase));
      const px = star.x + this.mouse.x * star.depth;
      const py = star.y + this.mouse.y * star.depth;

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, Math.min(1, currentAlpha));
      this.ctx.fillStyle = star.color;
      this.ctx.beginPath();
      this.ctx.arc(px, py, star.size, 0, Math.PI * 2);
      this.ctx.fill();

      // Delicate halo on brighter stars
      if (star.size > 1.4) {
        this.ctx.globalAlpha = currentAlpha * 0.3;
        this.ctx.beginPath();
        this.ctx.arc(px, py, star.size * 2.5, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    // 3. Draw Floating Stardust
    for (let p of this.dust) {
      if (!this.reducedMotion) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = this.width;
        if (p.x > this.width) p.x = 0;
        if (p.y < 0) p.y = this.height;
        if (p.y > this.height) p.y = 0;
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    // 4. Draw Shooting Stars
    for (let i = this.shootingStars.length - 1; i >= 0; i--) {
      const s = this.shootingStars[i];
      s.life++;
      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.opacity = 1 - (s.life / s.maxLife);

      if (s.opacity <= 0) {
        this.shootingStars.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.strokeStyle = `rgba(229, 193, 88, ${s.opacity})`;
      this.ctx.lineWidth = 1.6;
      this.ctx.beginPath();
      this.ctx.moveTo(s.x, s.y);
      this.ctx.lineTo(
        s.x - Math.cos(s.angle) * s.length,
        s.y - Math.sin(s.angle) * s.length
      );
      this.ctx.stroke();
      this.ctx.restore();
    }

    requestAnimationFrame(() => this.animate());
  }
}
