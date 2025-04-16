// Asynkron väntfunktion
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 1) Nedräknare till 2025‑05‑01
function updateCountdown() {
  const el = document.getElementById("countdown");
  const target = new Date("2025-05-01T00:00:00");
  (function tick() {
    const diff = target - new Date();
    if (diff <= 0) {
      el.textContent = "The day has arrived!";
      return;
    }
    const d = Math.floor(diff / 864e5),
          h = Math.floor(diff / 36e5 % 24),
          m = Math.floor(diff / 6e4 % 60),
          s = Math.floor(diff / 1e3 % 60);
    el.textContent = `${d}d ${h}h ${m}m ${s}s`;
    setTimeout(tick, 1000);
  })();
}

// 2) Huvudsekvens – körs när man klickar på startknappen
async function startSequence() {
  // Dölj startknappen
  document.getElementById("start-button").style.display = "none";

  // Visa intro-text
  const introText = document.getElementById("start-text");
  introText.classList.remove("hidden");
  await sleep(2100);

  // Visa "SPAR WARS"
  const logo = document.querySelector("h1");
  logo.classList.remove("hidden");
  await sleep(500);

  // Spela upp bakgrundsmusik
  const bg = document.getElementById("bgMusic");
  bg.muted = false;
  bg.play().catch(() => {});

  // Visa crawl-texten
  const titles = document.getElementById("titles");
  titles.classList.remove("hidden");
  await sleep(34000);
  titles.style.display = "none";

  // Stjärnorna faller
  document.body.classList.add("falling");

  // Visa planeten med transition
  const planet = document.getElementById("planet-effect");
  planet.classList.remove("hidden");
  // separera visning från animation
  requestAnimationFrame(() => {
    planet.classList.add("active-planet");
  });

  // Vänta innan finala elementen
  await sleep(8000);

  // Visa finala titeln och knapparna
  const finalElems = document.getElementById("final-elements");
  finalElems.classList.remove("hidden");
}

// 3) Sätt upp ljudknapparna
function setupSoundButtons() {
  document.querySelectorAll(".hamburger-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const file = btn.dataset.sound;
      if (file) {
        new Audio(`assets/${file}`).play().catch(() => {});
      }
    });
  });
}

// Initiera allt
updateCountdown();
document.getElementById("start-button").addEventListener("click", () => {
  setupSoundButtons();
  startSequence();
});
