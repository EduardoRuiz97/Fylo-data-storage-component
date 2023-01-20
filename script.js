let rangeInput = document.querySelector(".range__input");
let progressBar = document.querySelector(".progress__bar");
let selector = document.querySelector(".selector");

let container = document.querySelector(".slider__container");

let usedGB = document.querySelector(".used__gb");
let leftGB = document.querySelector(".gb__value");



rangeInput.addEventListener("input", ()=> {

  usedGB.innerHTML =`${rangeInput.value}`;
  leftGB.innerHTML = `${1000-rangeInput.value} <p class="gb__info">GB Left`;

  let maxWidth = container.offsetWidth;


  selector.style.left = `${rangeInput.value * (maxWidth/1000)}px`

  progressBar.style.width = `${rangeInput.value * (maxWidth/1000)}px`

})