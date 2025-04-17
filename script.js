// Väntfunktion
function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// Dölj/visa helpers
function hide(id) {
  document.getElementById(id).classList.add('hidden');
}
function show(id) {
  document.getElementById(id).classList.remove('hidden');
}

// Uppdatera nedräknare
function updateCountdown() {
  const el = document.getElementById("countdown"),
        target = new Date("2025-05-01T00:00:00");
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

// Huvudsekvens
async function startSequence() {
  // Dölj start-knapp och spela musik
  hide("start-button");
  document.getElementById("bgMusic").play().catch(() => {});

  // Intro-text
  const intro = document.getElementById("start-text");
  show("start-text");
  intro.classList.add("animate-intro");
  await sleep(2000);
  intro.classList.remove("animate-intro");
  hide("start-text");

  // Logo
  const logo = document.getElementById("logo");
  show("logo");
  logo.classList.add("animate-logo");
  await sleep(4000);
  logo.classList.remove("animate-logo");
  hide("logo");

  // Crawl-text
  const titles = document.getElementById("titles");
  show("titles");
  titles.classList.add("animate-scroll");
  await sleep(15000);
  titles.classList.remove("animate-scroll");
  hide("titles");

  // Synkroniserat stjärnfall + planet
  document.body.classList.add("falling");
  const planet = document.getElementById("planet-effect");
  show("planet-effect");
  requestAnimationFrame(() => {
    planet.classList.add("active-planet");
  });
  await sleep(15000);

  // Slutskärm
  show("final-elements");
}

// Sätt upp ljudknapparna
function setupSoundButtons() {
  document.querySelectorAll(".hamburger-btn").forEach(btn => {
    btn.onclick = () => {
      new Audio(`assets/${btn.dataset.sound}`).play().catch(() => {});
    };
  });
}

// Initiera
updateCountdown();
document.getElementById("start-button").onclick = () => {
  setupSoundButtons();
  startSequence();
};