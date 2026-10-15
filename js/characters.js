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
   * Aseel's Signature Chibi Design:
   * Super adorable Chibi wearing a cute pastel pink knit sweater with regular comfortable sleeves,
   * sweet cream collar with tiny starlight heart brooch, cute warm skirt & boots,
   * glossy dark hair with soft side locks, blushing cheeks, and golden crescent clip.
   */
  getAseelSVG(pose = "standing", size = 130) {
    const isSitting = pose === "sitting" || pose === "sittingTogether";
    const height = size;
    const width = size * 0.85;

    return `
    <svg class="character-svg chibi-char aseel-chibi ${pose}" width="${width}" height="${height}" viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Radiant soft fair skin tone -->
        <linearGradient id="chibi-aseel-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fef0e7" />
          <stop offset="100%" stop-color="#f3d1be" />
        </linearGradient>

        <!-- Silken dark coffee hair with soft warm tone -->
        <linearGradient id="chibi-aseel-hair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#342b36" />
          <stop offset="100%" stop-color="#1d1620" />
        </linearGradient>

        <!-- Adorable Cozy Pastel Rose Pink Knit Sweater (لابسة بينك كيوت) -->
        <linearGradient id="chibi-aseel-sweater" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#faa8c0" />
          <stop offset="100%" stop-color="#ee7697" />
        </linearGradient>

        <!-- Cute cream pink ribbing & cuffs -->
        <linearGradient id="chibi-aseel-pink-cuff" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fedde6" />
          <stop offset="100%" stop-color="#f79bb4" />
        </linearGradient>

        <!-- Sweet cocoa skirt / warm cozy bottom -->
        <linearGradient id="chibi-aseel-skirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4f3b47" />
          <stop offset="100%" stop-color="#382832" />
        </linearGradient>

        <!-- Big Sparkling Anime Chibi Eye Gradient -->
        <radialGradient id="chibi-eye-aseel" cx="45%" cy="35%" r="60%">
          <stop offset="0%" stop-color="#3c2f42" />
          <stop offset="65%" stop-color="#1e1522" />
          <stop offset="100%" stop-color="#0e0a12" />
        </radialGradient>
      </defs>

      <!-- Soft ground shadow -->
      <ellipse cx="55" cy="${isSitting ? '122' : '126'}" rx="28" ry="4.5" fill="rgba(8, 12, 24, 0.45)" />

      <!-- Back Hair Volume & Cute Silken Side Tufts -->
      <ellipse cx="55" cy="38" rx="30" ry="26" fill="url(#chibi-aseel-hair)" />
      <!-- Left & Right cute hair locks resting gently over shoulders -->
      <path d="M25 38 Q20 56 26 70 Q30 57 29 41 Z" fill="url(#chibi-aseel-hair)" />
      <path d="M85 38 Q90 56 84 70 Q80 57 81 41 Z" fill="url(#chibi-aseel-hair)" />
      <!-- Tiny cute pink ribbon bow on side hair lock -->
      <circle cx="24" cy="54" r="2.5" fill="#f78fb3" />
      <circle cx="86" cy="54" r="2.5" fill="#f78fb3" />

      <!-- Chibi Legs & Feet -->
      ${!isSitting ? `
        <!-- Cute standing cozy legs with little boots -->
        <rect x="44" y="96" width="9" height="26" rx="4.5" fill="url(#chibi-aseel-skirt)" />
        <rect x="57" y="96" width="9" height="26" rx="4.5" fill="url(#chibi-aseel-skirt)" />
        <!-- Cute little boots with pink lace dot -->
        <ellipse cx="48.5" cy="123" rx="6.5" ry="4" fill="#241a22" />
        <ellipse cx="61.5" cy="123" rx="6.5" ry="4" fill="#241a22" />
        <circle cx="48.5" cy="121" r="1.3" fill="#faa8c0" />
        <circle cx="61.5" cy="121" r="1.3" fill="#faa8c0" />
      ` : `
        <!-- Sitting cozy feet -->
        <ellipse cx="44" cy="116" rx="10" ry="6" fill="url(#chibi-aseel-skirt)" />
        <ellipse cx="66" cy="116" rx="10" ry="6" fill="url(#chibi-aseel-skirt)" />
        <ellipse cx="41" cy="118" rx="5" ry="3.5" fill="#241a22" />
        <ellipse cx="69" cy="118" rx="5" ry="3.5" fill="#241a22" />
      `}

      <!-- Chubby Little Body with Cute Pastel Pink Knit Sweater (لابسة بينك) -->
      <path d="M36 73 Q55 68 74 73 Q80 95 72 101 Q55 105 38 101 Q30 95 36 73 Z" fill="url(#chibi-aseel-sweater)" />
      <!-- Cute soft cream-pink ribbed collar -->
      <ellipse cx="55" cy="72" rx="13" ry="5.5" fill="url(#chibi-aseel-pink-cuff)" />
      <!-- Golden tiny starlight heart brooch on pink sweater -->
      <path d="M47 79 A2 2 0 0 1 50 81 A2 2 0 0 1 53 79 Q53 82 50 84 Q47 82 47 79 Z" fill="#dfba53" filter="drop-shadow(0 0 2px rgba(223, 186, 83, 0.7))" />

      <!-- Chibi Arms with Regular Neat Long Pink Sleeves (بكم عادي لطيف) -->
      ${pose === "holdingHands" ? `
        <!-- Left arm reaching out gently to hold Anea's hand -->
        <path d="M38 77 Q26 85 16 91" stroke="url(#chibi-aseel-sweater)" stroke-width="8" stroke-linecap="round" />
        <ellipse cx="24" cy="85" rx="4" ry="4.5" fill="url(#chibi-aseel-pink-cuff)" /> <!-- cute cuff -->
        <circle cx="15" cy="92" r="4" fill="url(#chibi-aseel-skin)" />

        <!-- Right arm resting cutely -->
        <path d="M72 77 Q80 87 75 94" stroke="url(#chibi-aseel-sweater)" stroke-width="8" stroke-linecap="round" />
        <circle cx="75" cy="95" r="3.5" fill="url(#chibi-aseel-skin)" />
      ` : `
        <!-- Natural regular pink sleeves resting cutely at sides -->
        <path d="M37 77 Q29 87 36 95" stroke="url(#chibi-aseel-sweater)" stroke-width="8" stroke-linecap="round" />
        <ellipse cx="34" cy="92" rx="4.5" ry="3.5" fill="url(#chibi-aseel-pink-cuff)" />
        <circle cx="36" cy="96" r="3.5" fill="url(#chibi-aseel-skin)" />

        <path d="M73 77 Q81 87 74 95" stroke="url(#chibi-aseel-sweater)" stroke-width="8" stroke-linecap="round" />
        <ellipse cx="76" cy="92" rx="4.5" ry="3.5" fill="url(#chibi-aseel-pink-cuff)" />
        <circle cx="74" cy="96" r="3.5" fill="url(#chibi-aseel-skin)" />
      `}

      <!-- Chibi Chubby Head -->
      <ellipse cx="55" cy="47" rx="27.5" ry="24" fill="url(#chibi-aseel-skin)" />

      <!-- Adorable Rosy Blushing Cheeks with subtle chibi sparkle dots -->
      <ellipse cx="36" cy="53" rx="6" ry="4" fill="#ff769c" opacity="0.55" />
      <ellipse cx="74" cy="53" rx="6" ry="4" fill="#ff769c" opacity="0.55" />
      <circle cx="35" cy="52" r="0.8" fill="#ffffff" opacity="0.8" />
      <circle cx="75" cy="52" r="0.8" fill="#ffffff" opacity="0.8" />

      <!-- Big Sparkling Chibi Anime Eyes (Looking softly towards Anea) -->
      <!-- Left Eye -->
      <g class="chibi-eye left-eye">
        <ellipse cx="42" cy="45" rx="7" ry="8.5" fill="url(#chibi-eye-aseel)" />
        <!-- Main sparkly catchlight -->
        <circle cx="40" cy="42" r="3.2" fill="#ffffff" />
        <!-- Bottom secondary cute sparkle -->
        <circle cx="45" cy="48.5" r="1.6" fill="#ffffff" />
        <circle cx="41" cy="50" r="0.9" fill="#fedde6" />
        <!-- Soft cute eyelash curve -->
        <path d="M34 41 Q42 35 49 40" stroke="#16111a" stroke-width="2" stroke-linecap="round" fill="none" />
      </g>

      <!-- Right Eye -->
      <g class="chibi-eye right-eye">
        <ellipse cx="68" cy="45" rx="7" ry="8.5" fill="url(#chibi-eye-aseel)" />
        <!-- Main sparkly catchlight -->
        <circle cx="66" cy="42" r="3.2" fill="#ffffff" />
        <!-- Bottom secondary cute sparkle -->
        <circle cx="71" cy="48.5" r="1.6" fill="#ffffff" />
        <circle cx="67" cy="50" r="0.9" fill="#fedde6" />
        <!-- Soft cute eyelash curve -->
        <path d="M61 40 Q68 35 76 41" stroke="#16111a" stroke-width="2" stroke-linecap="round" fill="none" />
      </g>

      <!-- Sweet Gentle Eyebrows -->
      <path d="M36 34 Q41 32 46 34" stroke="#2c2230" stroke-width="1.4" stroke-linecap="round" fill="none" />
      <path d="M64 34 Q69 32 74 34" stroke="#2c2230" stroke-width="1.4" stroke-linecap="round" fill="none" />

      <!-- Adorable Sweet Chibi Smile -->
      <path d="M52 53 Q55 56.5 58 53" stroke="#5a2233" stroke-width="1.6" stroke-linecap="round" fill="none" />

      <!-- Soft Silken Anime Bangs with Side Sweep -->
      <path d="M27 34 Q39 21 55 23 Q71 21 83 34 Q75 26 66 24 Q53 24 41 28 Q33 32 27 34 Z" fill="url(#chibi-aseel-hair)" />
      <path d="M31 36 Q45 26 56 33 Q44 31 35 41 Z" fill="url(#chibi-aseel-hair)" />
      <path d="M56 33 Q66 27 77 37 Q67 31 58 34 Z" fill="url(#chibi-aseel-hair)" />

      <!-- Tiny Golden Crescent Clip in Aseel's Hair (Matching Anea's star clip!) -->
      <g class="crescent-clip" transform="translate(36, 21) scale(0.9)">
        <path d="M8 2 A6 6 0 1 0 8 12 A4.5 4.5 0 1 1 8 2 Z" fill="#dfba53" filter="drop-shadow(0 0 3px rgba(223, 186, 83, 0.9))" />
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
