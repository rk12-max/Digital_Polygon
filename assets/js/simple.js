// humbergur working
let humbergur = document.querySelector(".humberger");
let menuVisible = document.querySelector(".whole-header-wrapper");
let menuIcon = document.querySelector(".menu-icon");
let subMenu = document.querySelector(".sub-menu");

humbergur.addEventListener("click", () => {
  menuVisible.classList.toggle("menu-visible");
});

menuIcon.addEventListener("click", () => {
  subMenu.classList.toggle("sub-menu-visible");
});

// play pause video
let ctrlVideo = document.getElementById("video");
let playButton = document.getElementById("play-btn");
let button = document.getElementById("play-btn");

button.addEventListener("click", () => {
  if (button.classList.contains("active")) {
    ctrlVideo.play();
    button.classList.toggle("active");
  } else {
    ctrlVideo.pause();
    button.classList.toggle("active");
  }
});


// light/dark mode 
let darkMode = document.querySelector(".round");
let body = document.querySelector("body");
console.log(darkMode);
console.log(body);
darkMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode-ON");
  });