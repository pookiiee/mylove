/**
 * ANEA'S LITTLE UNIVERSE ♡
 * Main Application Orchestrator & Router
 */

import { Starfield } from "./stars.js";
import { stateManager } from "./state.js";
import { audioManager } from "./audio.js";
import { renderIntroScene } from "./scenes/intro.js";
import { renderWorldScene } from "./scenes/world.js";
import { renderHomeScene } from "./scenes/home.js";
import { renderGardenScene } from "./scenes/garden.js";
import { renderMailboxScene } from "./scenes/mailbox.js";
import { renderCarnivalScene } from "./scenes/carnival.js";
import { renderLakeScene } from "./scenes/lake.js";
import { renderCastleScene } from "./scenes/castle.js";
import { renderFinalSurpriseScene } from "./scenes/finalSurprise.js";

class UniverseApp {
  constructor() {
    this.root = document.getElementById("app");
    this.starfield = null;
    this.currentScene = null;
  }

  init() {
    // 1. Initialize canvas starfield
    this.starfield = new Starfield("starfieldCanvas");

    // 2. User interaction listener to resume audio context if needed
    const unlockAudio = () => {
      audioManager.resume();
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };
    window.addEventListener("click", unlockAudio);
    window.addEventListener("touchstart", unlockAudio);

    // 3. Check route or intro status
    if (!stateManager.state.introSeen) {
      this.navigate("intro");
    } else {
      this.navigate("world");
    }

    // 4. Listen to state changes for background updates
    stateManager.subscribe((state) => {
      // If castle gets unlocked, update starfield particles if needed
    });
  }

  navigate(sceneName, immediate = false) {
    const isFirstLoad = (this.currentScene === null) || immediate;
    this.currentScene = sceneName;
    stateManager.state.activeScene = sceneName;

    const render = () => {
      try {
        this.root.innerHTML = "";

        switch (sceneName) {
          case "intro":
            renderIntroScene(this.root, () => this.navigate("world"));
            break;

          case "world":
            renderWorldScene(this.root, (dest) => this.navigate(dest));
            break;

          case "home":
            renderHomeScene(this.root, () => this.navigate("world"));
            break;

          case "garden":
            renderGardenScene(this.root, () => this.navigate("world"));
            break;

          case "mailbox":
            renderMailboxScene(this.root, () => this.navigate("world"));
            break;

          case "carnival":
            renderCarnivalScene(this.root, () => this.navigate("world"));
            break;

          case "lake":
            renderLakeScene(this.root, () => this.navigate("world"));
            break;

          case "castle":
            renderCastleScene(
              this.root,
              () => this.navigate("world"),
              () => this.navigate("finalSurprise")
            );
            break;

          case "finalSurprise":
            renderFinalSurpriseScene(this.root, () => this.navigate("world"));
            break;

          default:
            renderWorldScene(this.root, (dest) => this.navigate(dest));
            break;
        }
      } catch (err) {
        console.error("Scene render error:", err);
      } finally {
        this.root.classList.remove("scene-transitioning");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    if (isFirstLoad) {
      this.root.classList.remove("scene-transitioning");
      render();
    } else {
      this.root.classList.add("scene-transitioning");
      setTimeout(render, 240);
    }
  }
}

// Start application when DOM is ready or immediately if already loaded
function startApp() {
  try {
    const app = new UniverseApp();
    app.init();
    console.log("Anea's Little Universe initialized successfully ♡");
  } catch (err) {
    console.error("Initialization error:", err);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApp);
} else {
  startApp();
}

