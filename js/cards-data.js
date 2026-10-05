/**
 * Cosmic Encounter Style Hero & Alien Cards Roster
 */

const PRESET_CARDS = [
  {
    id: 'optimizer',
    name: 'THE OPTIMIZER',
    powerName: 'Power of Zero Tolerance',
    complexity: 'novice', // 'novice' (green), 'moderate' (yellow), 'expert' (red)
    timing: ['Planung', 'Aufdecken'],
    role: 'Hauptspieler oder Verbündeter',
    avatarType: 'gear-cyborg',
    avatarSvg: `
      <svg viewBox="0 0 100 100" class="card-art-svg">
        <defs>
          <radialGradient id="optGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#00d2d3"/>
            <stop offset="70%" stop-color="#0984e3"/>
            <stop offset="100%" stop-color="#2d3436"/>
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#optGrad)" stroke="#00ffff" stroke-width="2"/>
        <circle cx="50" cy="50" r="28" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="4,4"/>
        <path d="M50 15 L50 85 M15 50 L85 50" stroke="#00ffff" stroke-width="1.5" opacity="0.6"/>
        <circle cx="50" cy="50" r="14" fill="#0984e3" stroke="#fff" stroke-width="2"/>
        <polygon points="50,22 55,32 66,35 58,44 60,55 50,49 40,55 42,44 34,35 45,32" fill="#ffeaa7"/>
        <circle cx="45" cy="48" r="2.5" fill="#00ffff"/>
        <circle cx="55" cy="48" r="2.5" fill="#00ffff"/>
      </svg>
    `,
    powerText: `<strong>You have the power of Precision.</strong><br><br>
      Als <strong>Hauptspieler</strong>: Wenn du eine Angriffskarte mit einem <em>geraden Wert</em> aufdeckst, addierst du für jedes eigene Schiff in der Begegnung zusätzlich <strong>+2 Kampfkraft</strong>.<br><br>
      Spielt dein Gegner eine <em>ungerade Karte</em>, verliert er sofort 1 Schiff seiner Wahl direkt in den Warp.`,
    flareWild: `<strong>Wild:</strong> Vor dem Aufdecken der Karten darfst du eine Karte von deiner Hand gegen die oberste Karte des Ablagestapels tauschen.`,
    flareSuper: `<strong>Super:</strong> Dein Bonus erhöht sich auf <strong>+4 Kampfkraft</strong> pro eigenem Schiff.`,
    quote: `„Es gibt im Kosmos nichts Schrecklicheres als einen Fehler von 0,001 Millimetern.“`,
    themeColor: '#2ecc71',
    foilType: 'holo-cosmic'
  },
  {
    id: 'voidweaver',
    name: 'THE VOIDWEAVER',
    powerName: 'Power of Decay',
    complexity: 'moderate',
    timing: ['Auflösung'],
    role: 'Hauptspieler (Angreifer oder Verteidiger)',
    avatarType: 'cosmic-nebula',
    avatarSvg: `
      <svg viewBox="0 0 100 100" class="card-art-svg">
        <defs>
          <radialGradient id="voidGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fd79a8"/>
            <stop offset="60%" stop-color="#6c5ce7"/>
            <stop offset="100%" stop-color="#000000"/>
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#voidGrad)" stroke="#a29bfe" stroke-width="2"/>
        <path d="M50 10 Q70 40 50 60 Q30 80 50 90" fill="none" stroke="#fd79a8" stroke-width="3" opacity="0.8"/>
        <circle cx="50" cy="50" r="18" fill="none" stroke="#e056fd" stroke-width="2" stroke-dasharray="2,6"/>
        <circle cx="50" cy="50" r="6" fill="#fff"/>
        <path d="M25 35 Q50 45 75 35" stroke="#fff" stroke-width="1.5" fill="none"/>
        <path d="M25 65 Q50 55 75 65" stroke="#fff" stroke-width="1.5" fill="none"/>
      </svg>
    `,
    powerText: `<strong>You have the power to Unravel.</strong><br><br>
      Wenn du eine Begegnung <strong>verlierst</strong>, verlierst du <em>keine</em> Schiffe in den Warp.<br><br>
      Stattdessen zwingst du den siegreichen Gegner, die <strong>Hälfte aller seiner siegreichen Schiffe</strong> von der umkämpften Kolonie zurück auf eine seiner Heimatkolonien abzuziehen.`,
    flareWild: `<strong>Wild:</strong> Schicke 2 Schiffe eines beliebigen Gegners für eine Runde in Stasis.`,
    flareSuper: `<strong>Super:</strong> Zusätzlich wird 1 feindliches Schiff dauerhaft aus dem Spiel vernichtet.`,
    quote: `„Sie gewinnen niemals Schlachten. Aber nach jedem Krieg gibt es ein Universum weniger.“`,
    themeColor: '#f1c40f',
    foilType: 'holo-prismatic'
  },
  {
    id: 'glitch',
    name: 'THE GLITCH',
    powerName: 'Power of Inversion',
    complexity: 'expert',
    timing: ['Allianz', 'Planung'],
    role: 'Jederzeit',
    avatarType: 'glitch-core',
    avatarSvg: `
      <svg viewBox="0 0 100 100" class="card-art-svg">
        <defs>
          <linearGradient id="glitchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ff7675"/>
            <stop offset="50%" stop-color="#d63031"/>
            <stop offset="100%" stop-color="#2d3436"/>
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="80" height="80" rx="12" fill="url(#glitchGrad)" stroke="#ff4757" stroke-width="2"/>
        <rect x="22" y="30" width="56" height="8" fill="#55efc4" opacity="0.9"/>
        <rect x="18" y="44" width="64" height="12" fill="#fff" opacity="0.85"/>
        <rect x="26" y="62" width="48" height="6" fill="#ffeaa7" opacity="0.9"/>
        <text x="50" y="54" font-family="monospace" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">&lt;NULL_REF&gt;</text>
      </svg>
    `,
    powerText: `<strong>You have the power of Reversal.</strong><br><br>
      Einmal pro Runde, bevor Karten aufgedeckt werden, kannst du verkünden: <strong>„Niedrig gewinnt!“</strong><br><br>
      In dieser Begegnung siegt die Seite mit der <em>niedrigeren Gesamtpunktzahl</em>. Alle Verhandlungskarten zählen in dieser Runde als Angriffskarten mit dem Wert <strong>30</strong>.`,
    flareWild: `<strong>Wild:</strong> Wird eine Karte mit Wert 30 oder höher aufgedeckt, zählt ihr Wert sofort als 0.`,
    flareSuper: `<strong>Super:</strong> Du darfst die Siegbedingung erst <em>nach</em> dem Aufdecken der Karten umkehren!`,
    quote: `„Die Realität ist lediglich ein CAD-Modell ohne gesetzte Randbedingungen.“`,
    themeColor: '#ff4757',
    foilType: 'gold-secret'
  },
  {
    id: 'chronomancer',
    name: 'THE CHRONO-WEAVER',
    powerName: 'Power of the Time Loop',
    complexity: 'moderate',
    timing: ['Aufdecken', 'Auflösung'],
    role: 'Hauptspieler',
    avatarType: 'chrono-vortex',
    avatarSvg: `
      <svg viewBox="0 0 100 100" class="card-art-svg">
        <defs>
          <radialGradient id="chronoGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#74b9ff"/>
            <stop offset="70%" stop-color="#0984e3"/>
            <stop offset="100%" stop-color="#1e272e"/>
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#chronoGrad)" stroke="#74b9ff" stroke-width="2"/>
        <circle cx="50" cy="50" r="30" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="6,4"/>
        <line x1="50" y1="50" x2="50" y2="28" stroke="#ffeaa7" stroke-width="3" stroke-linecap="round"/>
        <line x1="50" y1="50" x2="68" y2="50" stroke="#ffeaa7" stroke-width="2" stroke-linecap="round"/>
        <circle cx="50" cy="50" r="4" fill="#d63031"/>
        <path d="M30 70 A 25 25 0 0 1 70 70" fill="none" stroke="#55efc4" stroke-width="2" marker-end="url(#arrow)"/>
      </svg>
    `,
    powerText: `<strong>You have the power to Rewind.</strong><br><br>
      Nachdem alle Karten aufgedeckt wurden, aber <em>vor</em> der Schadensberechnung, darfst du verkünden, dass die Runde <strong>zurückgedreht</strong> wird.<br><br>
      Beide Hauptspieler nehmen ihre gespielten Karten wieder auf die Hand und müssen für den zweiten Versuch eine <em>andere Karte</em> wählen.`,
    flareWild: `<strong>Wild:</strong> Zwinge einen Spieler, seine Handkarten neu zu mischen und 5 neue Karten zu ziehen.`,
    flareSuper: `<strong>Super:</strong> Du siehst die verdeckte Karte deines Gegners, bevor du deinen Rewind einsetzt.`,
    quote: `„Wir haben diesen Krieg bereits siebenhundertmal verloren – und beim nächsten Mal gewinnen wir.“`,
    themeColor: '#0984e3',
    foilType: 'holo-cosmic'
  },
  {
    id: 'nanite',
    name: 'THE NANITE SWARM',
    powerName: 'Power of Re-Mesh',
    complexity: 'novice',
    timing: ['Regroup', 'Allianz'],
    role: 'Jederzeit',
    avatarType: 'nanite-hex',
    avatarSvg: `
      <svg viewBox="0 0 100 100" class="card-art-svg">
        <defs>
          <radialGradient id="nanoGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#55efc4"/>
            <stop offset="60%" stop-color="#00b894"/>
            <stop offset="100%" stop-color="#2d3436"/>
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#nanoGrad)" stroke="#55efc4" stroke-width="2"/>
        <polygon points="50,25 65,34 65,52 50,61 35,52 35,34" fill="none" stroke="#fff" stroke-width="2"/>
        <polygon points="68,52 80,59 80,73 68,80 56,73 56,59" fill="none" stroke="#ffeaa7" stroke-width="1.5"/>
        <polygon points="32,52 44,59 44,73 32,80 20,73 20,59" fill="none" stroke="#ffeaa7" stroke-width="1.5"/>
        <circle cx="50" cy="43" r="3" fill="#fff"/>
      </svg>
    `,
    powerText: `<strong>You have the power of Self-Assembly.</strong><br><br>
      Immer wenn eines deiner Schiffe in den <strong>Warp</strong> geschickt wird, rollt dein Naniten-Schwarm sofort die Rekonstruktion an.<br><br>
      Würfle oder ziehe eine Karte: Bei geradem Wert kehrt das Schiff <em>sofort</em> gratis auf eine deiner Kolonien zurück, statt im Warp verloren zu gehen.`,
    flareWild: `<strong>Wild:</strong> Befreie 2 beliebige Schiffe aus dem Warp auf eine eigene Kolonie.`,
    flareSuper: `<strong>Super:</strong> Jedes deiner Schiffe kehrt garantiert ohne Test sofort aus dem Warp zurück.`,
    quote: `„Man kann kein Volk ausrotten, dessen Zellen aus mikroskopischen Drehmaschinen bestehen.“`,
    themeColor: '#00b894',
    foilType: 'holo-prismatic'
  },
  {
    id: 'inquisitor',
    name: 'THE INQUISITOR',
    powerName: 'Power of Dogma',
    complexity: 'expert',
    timing: ['Schicksal', 'Start'],
    role: 'Hauptspieler oder Verteidiger',
    avatarType: 'dogma-crown',
    avatarSvg: `
      <svg viewBox="0 0 100 100" class="card-art-svg">
        <defs>
          <radialGradient id="inqGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fdcb6e"/>
            <stop offset="70%" stop-color="#e17055"/>
            <stop offset="100%" stop-color="#2d3436"/>
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#inqGrad)" stroke="#fdcb6e" stroke-width="2"/>
        <polygon points="30,40 50,15 70,40 60,65 40,65" fill="#2d3436" stroke="#ffeaa7" stroke-width="2"/>
        <circle cx="50" cy="38" r="6" fill="#d63031"/>
        <line x1="50" y1="48" x2="50" y2="78" stroke="#ffeaa7" stroke-width="3"/>
        <line x1="38" y1="58" x2="62" y2="58" stroke="#ffeaa7" stroke-width="3"/>
      </svg>
    `,
    powerText: `<strong>You have the power of Infallibility.</strong><br><br>
      Als <strong>Verteidiger</strong> darf niemand deinen Planeten ohne deine ausdrückliche Gnade betreten.<br><br>
      Verbündete dürfen dem Angreifer <em>nur dann</em> beitreten, wenn sie dir zuvor 1 Handkarte als Zehnten opfern. Verweigern sie dies, werden sie exkommuniziert und dürfen diese Runde nicht teilnehmen.`,
    flareWild: `<strong>Wild:</strong> Zwinge alle Spieler, ihre geheimen Pläne vorab offenzulegen.`,
    flareSuper: `<strong>Super:</strong> Alle Zehnten-Karten gehen dauerhaft auf deine Hand über.`,
    quote: `„Die Menschen wollen keine Freiheit des Geistes – sie wollen Brot, Autorität und das Wunder.“`,
    themeColor: '#e17055',
    foilType: 'gold-secret'
  }
];
