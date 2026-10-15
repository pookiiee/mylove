/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Adorable Chibi Character System: Anea & Aseel
 * Super cute chibi proportions (big expressive sparkling eyes, chubby blushing cheeks,
 * cute cozy oversized outfits, and heartwarming duo poses).
 */

export const Characters = {
  /**
   * Generates Anea's Chibi SVG
   * Features: Medium-brown complexion, adorable voluminous curly hair poofs with starlight hair clip,
   * big glossy sparkling anime-chibi eyes with stars, rosy blushing cheeks, cute oversized cream sweater & sage pants.
   */
  getAneaSVG(pose = "standing", size = 130) {
    const isSitting = pose === "sitting" || pose === "sittingTogether";
    const height = size;
    const width = size * 0.85;

    return `
    <svg class="character-svg chibi-char anea-chibi ${pose}" width="${width}" height="${height}" viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Chibi skin tone: warm radiant medium-brown -->
        <linearGradient id="chibi-anea-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#b8836f" />
          <stop offset="100%" stop-color="#a06956" />
        </linearGradient>

        <!-- Rich naturally curly hair -->
        <linearGradient id="chibi-anea-hair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#342019" />
          <stop offset="100%" stop-color="#1c100c" />
        </linearGradient>

        <!-- Cozy oversized cream knit sweater -->
        <linearGradient id="chibi-anea-sweater" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#faf6ee" />
          <stop offset="100%" stop-color="#dfd7c5" />
        </linearGradient>

        <!-- Soft sage pants -->
        <linearGradient id="chibi-anea-pants" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#556c60" />
          <stop offset="100%" stop-color="#3c4e45" />
        </linearGradient>

        <!-- Starlight eye gradient -->
        <radialGradient id="chibi-eye-dark" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#2a1a14" />
          <stop offset="100%" stop-color="#120906" />
        </radialGradient>
      </defs>

      <!-- Soft ground shadow -->
      <ellipse cx="55" cy="${isSitting ? '122' : '126'}" rx="28" ry="4.5" fill="rgba(8, 12, 24, 0.45)" />

      <!-- Back Hair Curls Volume (Fluffy Chibi Curls) -->
      <circle cx="30" cy="38" r="14" fill="url(#chibi-anea-hair)" />
      <circle cx="24" cy="52" r="13" fill="url(#chibi-anea-hair)" />
      <circle cx="28" cy="66" r="11" fill="url(#chibi-anea-hair)" />
      
      <circle cx="80" cy="38" r="14" fill="url(#chibi-anea-hair)" />
      <circle cx="86" cy="52" r="13" fill="url(#chibi-anea-hair)" />
      <circle cx="82" cy="66" r="11" fill="url(#chibi-anea-hair)" />

      <!-- Top Volume Curls -->
      <circle cx="42" cy="24" r="14" fill="url(#chibi-anea-hair)" />
      <circle cx="55" cy="20" r="15" fill="url(#chibi-anea-hair)" />
      <circle cx="68" cy="24" r="14" fill="url(#chibi-anea-hair)" />

      <!-- Chibi Legs & Feet -->
      ${!isSitting ? `
        <!-- Tiny cute standing feet -->
        <rect x="44" y="96" width="9" height="26" rx="4.5" fill="url(#chibi-anea-pants)" />
        <rect x="57" y="96" width="9" height="26" rx="4.5" fill="url(#chibi-anea-pants)" />
        <ellipse cx="48.5" cy="123" rx="6.5" ry="4" fill="#2d221c" />
        <ellipse cx="61.5" cy="123" rx="6.5" ry="4" fill="#2d221c" />
      ` : `
        <!-- Cute sitting crossed feet -->
        <ellipse cx="44" cy="116" rx="10" ry="6" fill="url(#chibi-anea-pants)" />
        <ellipse cx="66" cy="116" rx="10" ry="6" fill="url(#chibi-anea-pants)" />
        <ellipse cx="41" cy="118" rx="5" ry="3.5" fill="#2d221c" />
        <ellipse cx="69" cy="118" rx="5" ry="3.5" fill="#2d221c" />
      `}

      <!-- Chubby Little Body with Cozy Oversized Sweater -->
      <path d="M36 74 Q55 69 74 74 Q80 96 72 102 Q55 106 38 102 Q30 96 36 74 Z" fill="url(#chibi-anea-sweater)" />
      <!-- Ribbed sweater collar -->
      <ellipse cx="55" cy="73" rx="13" ry="5.5" fill="#cfc5b0" />

      <!-- Chibi Arms -->
      ${pose === "holdingHands" ? `
        <!-- Tiny arm reaching to the side to hold Aseel's hand -->
        <path d="M38 78 Q30 88 34 94" stroke="url(#chibi-anea-sweater)" stroke-width="8" stroke-linecap="round" />
        <circle cx="34" cy="94" r="3.5" fill="url(#chibi-anea-skin)" />
        <path d="M72 78 Q84 86 94 92" stroke="url(#chibi-anea-sweater)" stroke-width="8" stroke-linecap="round" />
        <circle cx="95" cy="93" r="4.5" fill="url(#chibi-anea-skin)" />
      ` : pose === "reading" ? `
        <!-- Tiny hands holding a glowing letter -->
        <path d="M40 82 Q48 94 54 94" stroke="url(#chibi-anea-sweater)" stroke-width="7" stroke-linecap="round" />
        <path d="M70 82 Q62 94 56 94" stroke="url(#chibi-anea-sweater)" stroke-width="7" stroke-linecap="round" />
        <rect x="49" y="87" width="12" height="9" rx="1.5" fill="#faf8f2" stroke="#dfba53" stroke-width="1" />
        <path d="M49 87 L55 92 L61 87" stroke="#dfba53" stroke-width="0.8" fill="none" />
      ` : `
        <!-- Cute resting chubby arms -->
        <path d="M37 78 Q30 90 38 96" stroke="url(#chibi-anea-sweater)" stroke-width="8" stroke-linecap="round" />
        <circle cx="38" cy="96" r="3.5" fill="url(#chibi-anea-skin)" />
        <path d="M73 78 Q80 90 72 96" stroke="url(#chibi-anea-sweater)" stroke-width="8" stroke-linecap="round" />
        <circle cx="72" cy="96" r="3.5" fill="url(#chibi-anea-skin)" />
      `}

      <!-- Chibi Big Chubby Head -->
      <ellipse cx="55" cy="48" rx="27" ry="24" fill="url(#chibi-anea-skin)" />

      <!-- Rosy Glowing Blushing Cheeks -->
      <ellipse cx="37" cy="54" rx="5.5" ry="3.5" fill="#e26a6a" opacity="0.45" />
      <ellipse cx="73" cy="54" rx="5.5" ry="3.5" fill="#e26a6a" opacity="0.45" />

      <!-- Big Sparkling Chibi Anime Eyes -->
      <!-- Left Eye -->
      <g class="chibi-eye left-eye">
        <ellipse cx="42" cy="46" rx="6.5" ry="8" fill="url(#chibi-eye-dark)" />
        <!-- Big white glossy starlight reflection -->
        <circle cx="40" cy="43" r="2.8" fill="#ffffff" />
        <!-- Small bottom starlight sparkle -->
        <circle cx="44.5" cy="49.5" r="1.4" fill="#ffffff" />
        <!-- Delicate upper anime eyelash curve -->
        <path d="M35 42 Q42 36 49 41" stroke="#1c100c" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>

      <!-- Right Eye -->
      <g class="chibi-eye right-eye">
        <ellipse cx="68" cy="46" rx="6.5" ry="8" fill="url(#chibi-eye-dark)" />
        <circle cx="66" cy="43" r="2.8" fill="#ffffff" />
        <circle cx="70.5" cy="49.5" r="1.4" fill="#ffffff" />
        <path d="M61 41 Q68 36 75 42" stroke="#1c100c" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>

      <!-- Delicate eyebrows -->
      <path d="M37 36 Q42 34 46 36" stroke="#2c1d18" stroke-width="1.3" stroke-linecap="round" fill="none" />
      <path d="M64 36 Q68 34 73 36" stroke="#2c1d18" stroke-width="1.3" stroke-linecap="round" fill="none" />

      <!-- Cute Tiny Smile -->
      <path d="M52 54 Q55 57 58 54" stroke="#4a251b" stroke-width="1.5" stroke-linecap="round" fill="none" />

      <!-- Forehead Soft Natural Curly Bangs -->
      <circle cx="38" cy="30" r="8" fill="url(#chibi-anea-hair)" />
      <circle cx="48" cy="27" r="9" fill="url(#chibi-anea-hair)" />
      <circle cx="60" cy="27" r="9" fill="url(#chibi-anea-hair)" />
      <circle cx="70" cy="30" r="8" fill="url(#chibi-anea-hair)" />
      <!-- Baby curl wisps -->
      <path d="M42 32 Q46 36 48 31" stroke="url(#chibi-anea-hair)" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <path d="M64 32 Q62 36 60 31" stroke="url(#chibi-anea-hair)" stroke-width="2.5" stroke-linecap="round" fill="none" />

      <!-- Delicate Golden Starlight Hairclip -->
      <g class="starlight-clip" transform="translate(68, 22) scale(0.9)">
        <polygon points="6,0 7.8,4.5 12,4.5 8.5,7.2 9.8,11.5 6,8.8 2.2,11.5 3.5,7.2 0,4.5 4.2,4.5" fill="#dfba53" filter="drop-shadow(0 0 3px rgba(223, 186, 83, 0.8))" />
      </g>
    </svg>
    `;
  },

  /**
   * Generates Aseel's Chibi SVG
   * Features: Warm natural complexion, charming sleek dark anime-chibi hair, big gentle sparkling eyes,
   * rosy blushing cheeks, cozy midnight navy sweater with tiny gold star pin, and dark trousers.
   */
  getAseelSVG(pose = "standing", size = 130) {
    const isSitting = pose === "sitting" || pose === "sittingTogether";
    const height = size;
    const width = size * 0.85;

    return `
    <svg class="character-svg chibi-char aseel-chibi ${pose}" width="${width}" height="${height}" viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Warm fair/golden radiant skin tone -->
        <linearGradient id="chibi-aseel-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ebd0c0" />
          <stop offset="100%" stop-color="#dab09c" />
        </linearGradient>

        <!-- Silken dark hair with subtle soft highlight -->
        <linearGradient id="chibi-aseel-hair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#2c2738" />
          <stop offset="100%" stop-color="#16131c" />
        </linearGradient>

        <!-- Cozy midnight navy knit sweater (بكم عادي مريح ولطيف) -->
        <linearGradient id="chibi-aseel-sweater" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#24345c" />
          <stop offset="100%" stop-color="#16223e" />
        </linearGradient>

        <!-- Warm tailored trousers -->
        <linearGradient id="chibi-aseel-pants" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4a3e36" />
          <stop offset="100%" stop-color="#332a24" />
        </linearGradient>

        <!-- Starlight eye gradient -->
        <radialGradient id="chibi-eye-aseel" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#221d2d" />
          <stop offset="100%" stop-color="#0f0c15" />
        </radialGradient>
      </defs>

      <!-- Soft ground shadow -->
      <ellipse cx="55" cy="${isSitting ? '122' : '126'}" rx="28" ry="4.5" fill="rgba(8, 12, 24, 0.45)" />

      <!-- Back Hair Silken Volume & Cute Soft Low Twintails / Side Locks -->
      <ellipse cx="55" cy="38" rx="29" ry="25" fill="url(#chibi-aseel-hair)" />
      <!-- Left & Right cute hair locks resting gently -->
      <path d="M26 38 Q22 55 27 68 Q31 55 30 40 Z" fill="url(#chibi-aseel-hair)" />
      <path d="M84 38 Q88 55 83 68 Q79 55 80 40 Z" fill="url(#chibi-aseel-hair)" />

      <!-- Chibi Legs & Feet -->
      ${!isSitting ? `
        <!-- Cute standing legs with little dark boots -->
        <rect x="44" y="96" width="9" height="26" rx="4.5" fill="url(#chibi-aseel-pants)" />
        <rect x="57" y="96" width="9" height="26" rx="4.5" fill="url(#chibi-aseel-pants)" />
        <ellipse cx="48.5" cy="123" rx="6.5" ry="4" fill="#1e1814" />
        <ellipse cx="61.5" cy="123" rx="6.5" ry="4" fill="#1e1814" />
      ` : `
        <!-- Sitting cozy feet -->
        <ellipse cx="44" cy="116" rx="10" ry="6" fill="url(#chibi-aseel-pants)" />
        <ellipse cx="66" cy="116" rx="10" ry="6" fill="url(#chibi-aseel-pants)" />
        <ellipse cx="41" cy="118" rx="5" ry="3.5" fill="#1e1814" />
        <ellipse cx="69" cy="118" rx="5" ry="3.5" fill="#1e1814" />
      `}

      <!-- Chubby Little Body with Midnight Navy Sweater (بكم عادي مريح ولطيف) -->
      <path d="M36 74 Q55 69 74 74 Q80 96 72 102 Q55 106 38 102 Q30 96 36 74 Z" fill="url(#chibi-aseel-sweater)" />
      <!-- Ribbed collar -->
      <ellipse cx="55" cy="73" rx="13" ry="5.5" fill="#32477c" />
      <!-- Golden starlight brooch on sweater -->
      <circle cx="46" cy="80" r="1.8" fill="#dfba53" filter="drop-shadow(0 0 2px rgba(223, 186, 83, 0.6))" />

      <!-- Chibi Arms with Regular Neat Long Sleeves (أكمام عادية ومرتبة) -->
      ${pose === "holdingHands" ? `
        <!-- Left arm reaching out gently to hold Anea's hand -->
        <path d="M38 78 Q26 86 16 92" stroke="url(#chibi-aseel-sweater)" stroke-width="8" stroke-linecap="round" />
        <ellipse cx="26" cy="86" rx="4" ry="4.5" fill="#32477c" /> <!-- neat sleeve cuff -->
        <circle cx="15" cy="93" r="4" fill="url(#chibi-aseel-skin)" />

        <!-- Right arm resting naturally -->
        <path d="M72 78 Q80 88 75 95" stroke="url(#chibi-aseel-sweater)" stroke-width="8" stroke-linecap="round" />
        <circle cx="75" cy="96" r="3.5" fill="url(#chibi-aseel-skin)" />
      ` : `
        <!-- Natural regular sleeves resting cutely at sides -->
        <path d="M37 78 Q29 88 36 96" stroke="url(#chibi-aseel-sweater)" stroke-width="8" stroke-linecap="round" />
        <!-- Cuff ribbing -->
        <ellipse cx="34" cy="93" rx="4.5" ry="3.5" fill="#32477c" />
        <circle cx="36" cy="97" r="3.5" fill="url(#chibi-aseel-skin)" />

        <path d="M73 78 Q81 88 74 96" stroke="url(#chibi-aseel-sweater)" stroke-width="8" stroke-linecap="round" />
        <ellipse cx="76" cy="93" rx="4.5" ry="3.5" fill="#32477c" />
        <circle cx="74" cy="97" r="3.5" fill="url(#chibi-aseel-skin)" />
      `}

      <!-- Chibi Chubby Head -->
      <ellipse cx="55" cy="48" rx="27" ry="24" fill="url(#chibi-aseel-skin)" />

      <!-- Soft Glowing Rosy Blushing Cheeks -->
      <ellipse cx="37" cy="54" rx="5.5" ry="3.5" fill="#e26a6a" opacity="0.45" />
      <ellipse cx="73" cy="54" rx="5.5" ry="3.5" fill="#e26a6a" opacity="0.45" />

      <!-- Big Sparkling Chibi Anime Eyes (Looking softly towards Anea) -->
      <!-- Left Eye -->
      <g class="chibi-eye left-eye">
        <ellipse cx="42" cy="46" rx="6.5" ry="8" fill="url(#chibi-eye-aseel)" />
        <circle cx="40" cy="43" r="2.8" fill="#ffffff" />
        <circle cx="44.5" cy="49.5" r="1.4" fill="#ffffff" />
        <path d="M35 42 Q42 36 49 41" stroke="#141118" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>

      <!-- Right Eye -->
      <g class="chibi-eye right-eye">
        <ellipse cx="68" cy="46" rx="6.5" ry="8" fill="url(#chibi-eye-aseel)" />
        <circle cx="66" cy="43" r="2.8" fill="#ffffff" />
        <circle cx="70.5" cy="49.5" r="1.4" fill="#ffffff" />
        <path d="M61 41 Q68 36 75 42" stroke="#141118" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>

      <!-- Sweet curved eyebrows -->
      <path d="M37 36 Q42 34 46 36" stroke="#211d27" stroke-width="1.3" stroke-linecap="round" fill="none" />
      <path d="M64 36 Q68 34 73 36" stroke="#211d27" stroke-width="1.3" stroke-linecap="round" fill="none" />

      <!-- Cute Sweet Smile -->
      <path d="M52 54 Q55 57 58 54" stroke="#4a251b" stroke-width="1.5" stroke-linecap="round" fill="none" />

      <!-- Soft Silken Anime Bangs with Side Sweep -->
      <path d="M28 35 Q40 22 55 24 Q70 22 82 35 Q74 27 65 25 Q52 25 40 29 Q33 33 28 35 Z" fill="url(#chibi-aseel-hair)" />
      <path d="M32 37 Q46 27 56 34 Q44 32 35 42 Z" fill="url(#chibi-aseel-hair)" />
      <path d="M56 34 Q66 28 77 38 Q67 32 58 35 Z" fill="url(#chibi-aseel-hair)" />

      <!-- Tiny Golden Crescent Clip in Aseel's Hair (Matching Anea's star clip!) -->
      <g class="crescent-clip" transform="translate(36, 22) scale(0.85)">
        <path d="M8 2 A6 6 0 1 0 8 12 A4.5 4.5 0 1 1 8 2 Z" fill="#dfba53" filter="drop-shadow(0 0 3px rgba(223, 186, 83, 0.8))" />
      </g>
    </svg>
    `;
  },

  /**
   * Generates an irresistible, heartwarming Chibi duo composition:
   * Anea & Aseel sitting side-by-side or holding hands cutely beneath the stars
   * with a sweet little glowing heart floating gently above their joined hands.
   */
  getTogetherSceneSVG(variant = "sittingUnderStars", size = 260) {
    const isHolding = variant === "holdingHands";

    return `
    <div class="together-duo-container chibi-duo ${variant}" style="display: flex; align-items: flex-end; justify-content: center; position: relative;">
      <!-- Glowing Floating Mini Heart -->
      <div class="chibi-duo-heart" style="position: absolute; top: -14px; left: 50%; transform: translateX(-50%); font-size: 1.3rem; color: #dfba53; filter: drop-shadow(0 0 8px rgba(223, 186, 83, 0.7)); animation: pulseGlow 2s infinite;">
        ♡
      </div>

      <div class="char-wrapper anea-wrapper" style="margin-right: -12px; z-index: 2;">
        ${this.getAneaSVG(isHolding ? "holdingHands" : "sitting", size * 0.52)}
      </div>
      <div class="char-wrapper aseel-wrapper" style="margin-left: -12px; z-index: 1;">
        ${this.getAseelSVG(isHolding ? "holdingHands" : "sitting", size * 0.52)}
      </div>
    </div>
    `;
  }
};
