function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

function updateCountdown(){
  const el = document.getElementById("countdown"),
        target = new Date("2025-05-01T00:00:00");
  (function tick(){
    const diff = target - new Date();
    if(diff <= 0){ el.textContent = "The day has arrived!"; return; }
    const d = Math.floor(diff / 864e5),
          h = Math.floor(diff / 36e5 % 24),
          m = Math.floor(diff / 6e4 % 60),
          s = Math.floor(diff / 1e3 % 60);
    el.textContent = `${d}d ${h}h ${m}m ${s}s`;
    setTimeout(tick, 1000);
  })();
}

async function startSequence(){
  hide("start-button");
  
  // Musik direkt vid första klick
  document.getElementById("bgMusic").play().catch(()=>{});

  show("start-text"); await sleep(2000); hide("start-text");
  show("logo"); await sleep(4000); hide("logo");

  show("titles"); await sleep(15000); hide("titles");

  // Synkroniserad start av bakgrund och planet (exakt samtidig start)
  document.body.classList.add("falling");
  const planet = document.getElementById("planet-effect");
  show("planet-effect");
  requestAnimationFrame(() => planet.classList.add("active-planet"));

  await sleep(15000); // Exakt planet- och stjärnfalls-duration
  
  show("final-elements");
}

function hide(id){document.getElementById(id).classList.add("hidden");}
function show(id){document.getElementById(id).classList.remove("hidden");}

function setupSoundButtons(){
  document.querySelectorAll(".hamburger-btn").forEach(btn => {
    btn.onclick = () => new Audio(`assets/${btn.dataset.sound}`).play().catch(()=>{});
  });
}

updateCountdown();

document.getElementById("start-button").onclick = () => {
  setupSoundButtons();
  startSequence();
};