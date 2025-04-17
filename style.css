@import url('https://fonts.googleapis.com/css?family=Droid+Sans:400,700');

:root {
  --primary-color: #ffe81f;
  --bg-duration: 15s;
  --planet-duration: 15s;
  --text-shadow: 1px 1px 5px #000;
}

* {
  margin: 0; padding: 0; box-sizing: border-box;
}

html, body {
  width: 100%; height: 100%; overflow: hidden;
  font-family: 'Droid Sans', sans-serif;
  background: url('assets/bg-stars.jpeg') no-repeat center/cover;
  color: var(--primary-color);
  position: relative;
}

body::before {
  content: "";
  position: absolute; top: 0; left: 0;
  width: 100%; height: 200vh;
  background: inherit;
  transform: translateY(0);
  z-index: -1;
}

body.falling::before {
  animation: starsFall var(--bg-duration) linear forwards;
}

@keyframes starsFall {
  to { transform: translateY(-50vh); }
}

.hidden { display: none; }

#countdown {
  position: absolute; top: 10px; left: 50%; transform: translateX(-50%);
  font-size: 2rem; text-shadow: var(--text-shadow); z-index: 1000;
}

#start-button {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  padding: 15px 30px; font-size: 1.8rem; background: var(--primary-color);
  border: none; border-radius: 10px; cursor: pointer; z-index: 1000;
}

#start-text {
  width: 90%; max-width: 600px; margin: 20vh auto; text-align: center;
  font-size: 2rem; color: #4ee; opacity: 0; animation: intro 2s forwards;
}

@keyframes intro {
  0%, 90% { opacity: 1; } 100% { opacity: 0; }
}

#logo {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  font-size: 10rem; opacity: 0; text-shadow: var(--text-shadow);
  animation: logo 4s ease-out forwards;
}

@keyframes logo {
  0% { transform: scale(1); opacity: 1; } 100% { transform: scale(0.1); opacity: 0; }
}

#titles {
  position: absolute; width: 80%; max-width: 600px; bottom: 0; left: 50%;
  transform: translateX(-50%) perspective(300px) rotateX(25deg);
  overflow: hidden; height: 50vh; font-size: 1.5rem;
}

#titlecontent {
  position: absolute; top: 100%; animation: scroll 15s linear forwards;
}

@keyframes scroll {
  0% { top: 100%; } 100% { top: -150%; }
}

#planet-effect {
  position: fixed; bottom: 0; left: 50%; width: 100%; max-width: 1000px;
  transform: translate(-50%, 100%); opacity: 0;
  transition: opacity var(--planet-duration) linear, transform var(--planet-duration) linear;
}

#planet-effect.active-planet {
  opacity: 1; transform: translate(-50%, 0);
}

#final-elements {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  text-align: center; opacity: 0; transition: opacity 3s ease;
}

#final-elements:not(.hidden) { opacity: 1; }

#main-title {
  font-size: 3rem; margin-bottom: 1rem; text-shadow: var(--text-shadow);
}

#buttons {
  display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;
}

.hamburger-btn {
  padding: 15px 25px; font-size: 1.2rem; background: var(--primary-color);
  border: none; border-radius: 8px; cursor: pointer; transition: transform .2s;
}

.hamburger-btn:hover {
  transform: scale(1.1);
}

@media (max-width:768px){
  #logo { font-size: 6rem; }
  #titles { font-size: 1rem; }
  .hamburger-btn { font-size: 1rem; }
}