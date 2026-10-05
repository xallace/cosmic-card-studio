/**
 * 3D Parallax Tilt, Holographic Foil & Flip Engine for Hero Cards
 */

class Card3DEngine {
  constructor(cardContainerId, cardElementId) {
    this.container = document.getElementById(cardContainerId);
    this.card = document.getElementById(cardElementId);
    this.glare = this.card.querySelector('.card-glare');
    this.foil = this.card.querySelector('.card-foil');

    this.isFlipped = false;
    this.bounds = null;
    this.lastShimmerTime = 0;

    this.init();
  }

  init() {
    if (!this.container || !this.card) return;

    // Mouse movement
    this.container.addEventListener('mouseenter', () => this.updateBounds());
    this.container.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.container.addEventListener('mouseleave', () => this.handleMouseLeave());

    // Click to flip or dedicated flip trigger
    this.card.addEventListener('click', (e) => {
      // Don't flip if user clicked an interactive button or input inside card
      if (e.target.closest('button') || e.target.closest('a')) return;
      this.toggleFlip();
    });

    // Mobile Gyroscope tilt
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (e) => this.handleDeviceOrientation(e));
    }
  }

  updateBounds() {
    this.bounds = this.container.getBoundingClientRect();
  }

  handleMouseMove(e) {
    if (!this.bounds) this.updateBounds();

    const mouseX = e.clientX - this.bounds.left;
    const mouseY = e.clientY - this.bounds.top;

    const px = mouseX / this.bounds.width;  // 0.0 to 1.0
    const py = mouseY / this.bounds.height; // 0.0 to 1.0

    const normX = px - 0.5; // -0.5 to +0.5
    const normY = py - 0.5; // -0.5 to +0.5

    const maxTilt = 22; // max degrees
    const rotX = -normY * maxTilt;
    const rotY = normX * maxTilt;

    const baseFlip = this.isFlipped ? 180 : 0;

    // Apply 3D card transform
    this.card.style.transform = `rotateX(${rotX}deg) rotateY(${baseFlip + rotY}deg) scale3d(1.04, 1.04, 1.04)`;

    // Update specular glare position
    if (this.glare) {
      this.glare.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.1) 35%, transparent 65%)`;
      this.glare.style.opacity = '1';
    }

    // Update holographic foil iridescent rainbow shift
    if (this.foil) {
      this.foil.style.backgroundPosition = `${px * 180}% ${py * 180}%`;
      this.foil.style.opacity = '0.65';
    }

    // Occasional subtle audio shimmer
    const now = Date.now();
    if (now - this.lastShimmerTime > 300) {
      window.cardAudio.playShimmer();
      this.lastShimmerTime = now;
    }
  }

  handleMouseLeave() {
    const baseFlip = this.isFlipped ? 180 : 0;
    this.card.style.transform = `rotateX(0deg) rotateY(${baseFlip}deg) scale3d(1, 1, 1)`;

    if (this.glare) this.glare.style.opacity = '0';
    if (this.foil) this.foil.style.opacity = '0.35';
  }

  handleDeviceOrientation(e) {
    if (!e.gamma || !e.beta) return;
    const gamma = Math.max(-30, Math.min(30, e.gamma)); // Left/Right
    const beta = Math.max(-30, Math.min(30, e.beta - 45)); // Front/Back

    const rotX = -beta * 0.5;
    const rotY = gamma * 0.5;
    const baseFlip = this.isFlipped ? 180 : 0;

    this.card.style.transform = `rotateX(${rotX}deg) rotateY(${baseFlip + rotY}deg)`;
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
    window.cardAudio.playFlip();

    if (this.isFlipped) {
      this.card.classList.add('is-flipped');
      this.card.style.transform = `rotateX(0deg) rotateY(180deg) scale3d(1, 1, 1)`;
    } else {
      this.card.classList.remove('is-flipped');
      this.card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
  }
}
