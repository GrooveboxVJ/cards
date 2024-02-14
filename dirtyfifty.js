let body = document.querySelector("body");
let card = document.querySelector(".card");
let chap = document.querySelector(".chapeau");
let fond = document.querySelector(".eo-arriere");
let toclick = document.querySelectorAll(".toclick");
let z3 = document.querySelector(".z3");
let s1 = document.querySelector(".scene1");
let s2 = document.querySelector(".scene");
let env2 = document.querySelector("#env2");
let enveloppes = document.querySelectorAll(".enveloppe");
let recto = document.querySelector(".env-container");
let sss = document.querySelectorAll(".sss");
let bool = false;
let mute = document.querySelector('.stopbutton');
let allergene = document.querySelector('.allergene');


s2.addEventListener("click", (e) => {
  card.classList.toggle("is-flipped");
});

body.addEventListener("click", () => {
    if (bool==false){
        open_env();
        bool=true
    }
  
});

var audio = new Audio('./assets/Ed Sheeran - Shape of You (Official Music Video).mp3');
function play_music(){
    audio.volume=0.2;
    audio.play();
}

const mutesound = ()=>{
  if (audio.volume!==0) {
    audio.volume=0
    mute.style.backgroundImage="url('./assets/noaudio.png')"
  } else {
    audio.volume=0.2
    mute.style.backgroundImage="url('./assets/laudio.png')"
  }
}

mute.addEventListener('click',()=>{
  mutesound()
})

function open_env() {
  let env1 = document.querySelector("#env1");
  //card.classList.toggle('in')
  recto.classList.toggle("is-flipped");
  play_music();
  setTimeout((e) => {
   // 
    s1.classList.add("opac0");
    document.querySelector("#env1").style.display = "block";
    document.querySelector("#env2").style.display = "block";
  }, 2000);
  setTimeout((e) => {
    chap.classList.toggle("flipped");
  }, 2000);
  setTimeout((e) => {
    document.querySelector(".letter2").remove();
  }, 2000);
  setTimeout((e) => {
    recto.classList.add("hide");
    card.classList.toggle("hide");
    card.classList.toggle("anime-letter");
  }, 3500);
  setTimeout((e) => {
    env1.classList.add("opac0");
    let env2 = document.querySelector("#env2");
    env2.classList.add("anime-enveloppe");
    s2.classList.add("scalebig");
  }, 4300);
  setTimeout((e)=>{
    card.classList.remove('anime-letter');
    allergene.style.display="block"
  },7500);
  toclick.forEach((e) => {
    e.classList.toggle("zero");
  });
}
document.documentElement.scrollTop = 0;