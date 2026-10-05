/**
 * 3D Cosmic Card Studio - Main Application Controller
 */

class CosmicCardStudio {
  constructor() {
    this.currentCardIndex = 0;
    this.cardData = JSON.parse(JSON.stringify(PRESET_CARDS[0]));

    this.engine3D = new Card3DEngine('card-stage', 'hero-card');

    this.initDOM();
    this.renderActiveCard();
    this.populateEditor();
    this.renderDeckBrowser();
    this.initKeybindings();
  }

  initDOM() {
    // Buttons
    document.getElementById('btn-flip-card').onclick = () => this.engine3D.toggleFlip();
    document.getElementById('btn-export-print').onclick = () => window.print();
    document.getElementById('btn-sound-toggle').onclick = () => {
      const isMuted = window.cardAudio.toggleMute();
      document.getElementById('btn-sound-toggle').textContent = isMuted ? '🔇 Mute' : '🔊 Sound';
    };

    // Live Editor Inputs
    document.getElementById('edit-name').oninput = (e) => {
      this.cardData.name = e.target.value.toUpperCase();
      this.updateFrontView();
    };

    document.getElementById('edit-power-name').oninput = (e) => {
      this.cardData.powerName = e.target.value;
      this.updateFrontView();
    };

    document.getElementById('edit-complexity').onchange = (e) => {
      this.cardData.complexity = e.target.value;
      this.updateFrontView();
    };

    document.getElementById('edit-role').oninput = (e) => {
      this.cardData.role = e.target.value;
      this.updateFrontView();
    };

    document.getElementById('edit-power-text').oninput = (e) => {
      this.cardData.powerText = e.target.value;
      this.updateFrontView();
    };

    document.getElementById('edit-quote').oninput = (e) => {
      this.cardData.quote = e.target.value;
      this.updateFrontView();
    };

    document.getElementById('edit-flare-wild').oninput = (e) => {
      this.cardData.flareWild = e.target.value;
      this.updateBackView();
    };

    document.getElementById('edit-flare-super').oninput = (e) => {
      this.cardData.flareSuper = e.target.value;
      this.updateBackView();
    };

    document.getElementById('edit-foil').onchange = (e) => {
      this.cardData.foilType = e.target.value;
      this.updateFoilStyle();
    };

    // Image Upload Handler
    const imgUpload = document.getElementById('edit-image-upload');
    imgUpload.onchange = (e) => {
      if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (uploadEvt) => {
          this.cardData.customImage = uploadEvt.target.result;
          this.cardData.avatarSvg = null;
          this.updateFrontView();
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    };
  }

  renderDeckBrowser() {
    const list = document.getElementById('deck-roster-list');
    list.innerHTML = '';

    PRESET_CARDS.forEach((card, idx) => {
      const item = document.createElement('div');
      item.className = `roster-pill ${idx === this.currentCardIndex ? 'active' : ''}`;
      item.id = `roster-${idx}`;
      item.innerHTML = `
        <span class="roster-badge ${card.complexity}"></span>
        <span class="roster-name">${card.name}</span>
      `;
      item.onclick = () => {
        window.cardAudio.playDraw();
        this.selectPreset(idx);
      };
      list.appendChild(item);
    });
  }

  selectPreset(idx) {
    this.currentCardIndex = idx;
    this.cardData = JSON.parse(JSON.stringify(PRESET_CARDS[idx]));

    document.querySelectorAll('.roster-pill').forEach((el, i) => {
      el.classList.toggle('active', i === idx);
    });

    this.renderActiveCard();
    this.populateEditor();
  }

  renderActiveCard() {
    this.updateFrontView();
    this.updateBackView();
    this.updateFoilStyle();
  }

  updateFrontView() {
    const d = this.cardData;
    const cardEl = document.getElementById('hero-card');

    // Complexity class
    cardEl.classList.remove('complexity-novice', 'complexity-moderate', 'complexity-expert');
    cardEl.classList.add(`complexity-${d.complexity}`);

    // Front elements
    document.getElementById('card-title').textContent = d.name;
    document.getElementById('card-power-title').textContent = d.powerName;

    // Complexity Tag
    const compLabel = d.complexity === 'novice' ? '🟢 ANFÄNGER' : d.complexity === 'moderate' ? '🟡 MODERAT' : '🔴 EXPERTE';
    document.getElementById('card-complexity-tag').textContent = compLabel;

    // Artwork
    const artContainer = document.getElementById('card-artwork-box');
    if (d.customImage) {
      artContainer.innerHTML = `<img src="${d.customImage}" class="card-art-img" alt="${d.name}">`;
    } else if (d.avatarSvg) {
      artContainer.innerHTML = d.avatarSvg;
    }

    // Role & Timing
    document.getElementById('card-role-display').textContent = d.role;
    const timingWrap = document.getElementById('card-timing-pills');
    timingWrap.innerHTML = '';
    (d.timing || ['Planung', 'Aufdecken']).forEach(t => {
      const pill = document.createElement('span');
      pill.className = 'timing-pill';
      pill.textContent = t;
      timingWrap.appendChild(pill);
    });

    // Power text
    document.getElementById('card-power-body').innerHTML = d.powerText;

    // Quote
    document.getElementById('card-quote-body').textContent = d.quote;
  }

  updateBackView() {
    const d = this.cardData;
    document.getElementById('back-card-name').textContent = d.name;
    document.getElementById('back-flare-wild').innerHTML = d.flareWild;
    document.getElementById('back-flare-super').innerHTML = d.flareSuper;
  }

  updateFoilStyle() {
    const foilEl = document.querySelector('.card-foil');
    foilEl.className = `card-foil foil-${this.cardData.foilType || 'holo-cosmic'}`;
  }

  populateEditor() {
    const d = this.cardData;
    document.getElementById('edit-name').value = d.name;
    document.getElementById('edit-power-name').value = d.powerName;
    document.getElementById('edit-complexity').value = d.complexity;
    document.getElementById('edit-role').value = d.role;
    document.getElementById('edit-power-text').value = d.powerText.replace(/<br>/g, '\n').replace(/<\/?[^>]+(>|$)/g, '');
    document.getElementById('edit-quote').value = d.quote;
    document.getElementById('edit-flare-wild').value = d.flareWild.replace(/<\/?[^>]+(>|$)/g, '');
    document.getElementById('edit-flare-super').value = d.flareSuper.replace(/<\/?[^>]+(>|$)/g, '');
    document.getElementById('edit-foil').value = d.foilType || 'holo-cosmic';
  }

  initKeybindings() {
    window.addEventListener('keydown', (e) => {
      if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;

      if (e.code === 'Space' || e.key.toLowerCase() === 'f') {
        e.preventDefault();
        this.engine3D.toggleFlip();
      } else if (e.code === 'ArrowRight') {
        const next = (this.currentCardIndex + 1) % PRESET_CARDS.length;
        this.selectPreset(next);
      } else if (e.code === 'ArrowLeft') {
        const prev = (this.currentCardIndex - 1 + PRESET_CARDS.length) % PRESET_CARDS.length;
        this.selectPreset(prev);
      }
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.cardStudio = new CosmicCardStudio();
});
