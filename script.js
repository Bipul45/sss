// ==========================
// Typing Effect
// ==========================

const message = `Happy Friendship Day! 🫂

A true friend is one of life's greatest blessings.

Thank you for always being there,
for every laugh,
every smile,
every memory,
and every moment we shared.

No matter how far life takes us,
our friendship will always stay forever. ♾️

Wishing you happiness,
success,
good health,
and endless smiles.

Happy Friendship Day 2027 ❤️`;

let i = 0;
const typing = document.getElementById("typing");

function typeWriter() {

if(i < message.length){

typing.innerHTML += message.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}

window.onload = typeWriter;


// ==========================
// Music Play Button
// ==========================

const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", function () {

    if(song.paused){
        song.play().then(()=>{
            playBtn.innerHTML="⏸ Pause Song";
        }).catch(err=>{
            console.log(err);
        });
    }else{
        song.pause();
        playBtn.innerHTML="▶ Play Song";
    }

});


// ==========================
// Scroll Reveal Animation
// ==========================

const reveals=document.querySelectorAll(".reveal");

function revealSection(){

for(let i=0;i<reveals.length;i++){

const windowHeight=window.innerHeight;

const revealTop=reveals[i].getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",revealSection);

revealSection();


// ==========================
// Auto Pause Music
// ==========================

song.addEventListener("ended",()=>{

playBtn.innerHTML="▶ Play Song";

});


// ==========================
// Smooth Scroll
// ==========================

document.documentElement.style.scrollBehavior="smooth";


// ==========================
// Floating Hearts
// ==========================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*20)+"px";
heart.style.opacity="0.8";
heart.style.pointerEvents="none";
heart.style.zIndex="999";

document.body.appendChild(heart);

let pos=100;

const move=setInterval(()=>{

pos--;

heart.style.top=pos+"vh";
heart.style.transform=`rotate(${pos*3}deg)`;

if(pos<-10){

clearInterval(move);

heart.remove();

}

},40);

}

setInterval(createHeart,2500);
