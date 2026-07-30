/* =====================================
        BIRTHDAY WEBSITE V3
        SCRIPT.JS PART 1
===================================== */

const pages = document.querySelectorAll(".page");
const music = document.getElementById("music");

/* ===========================
      PAGE NAVIGATION
=========================== */

function showPage(id){

pages.forEach(page=>{
page.classList.remove("active");
});

const next=document.getElementById(id);

if(next){

next.classList.add("active");

window.scrollTo({
top:0,
behavior:"smooth"
});

}

}

/* ===========================
      START EXPERIENCE
=========================== */

function startExperience(){

showPage("birthdayIntro");

if(music){

music.volume=0.6;

music.play().catch(()=>{});

}

heartExplosion(
window.innerWidth/2,
window.innerHeight/2
);

}

/* ===========================
      HEART EXPLOSION
=========================== */

function heartExplosion(x,y){

const emojis=[
"❤️",
"💖",
"💕",
"💗",
"💞",
"✨"
];

for(let i=0;i<35;i++){

const heart=document.createElement("div");

heart.className="heart-pop";

heart.innerHTML=
emojis[Math.floor(Math.random()*emojis.length)];

heart.style.left=x+"px";

heart.style.top=y+"px";

const angle=Math.random()*Math.PI*2;

const distance=80+Math.random()*170;

heart.style.setProperty(
"--tx",
Math.cos(angle)*distance+"px"
);

heart.style.setProperty(
"--ty",
Math.sin(angle)*distance+"px"
);

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},1300);

}

}

/* ===========================
      BUTTON HEART EFFECT
=========================== */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",e=>{

heartExplosion(
e.clientX,
e.clientY
);

});

});

/* ===========================
      FLOATING HEARTS
=========================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

const hearts=[
"❤️",
"💕",
"💖",
"💗",
"💞"
];

heart.innerHTML=
hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left=
Math.random()*100+"vw";

heart.style.bottom="-40px";

heart.style.fontSize=
(18+Math.random()*20)+"px";

heart.style.animationDuration=
(5+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},9000);

}

setInterval(createHeart,700);

/* ===========================
      SPARKLES
=========================== */

function createSparkle(){

const s=document.createElement("div");

s.className="sparkle";

s.style.left=
Math.random()*window.innerWidth+"px";

s.style.top=
Math.random()*window.innerHeight+"px";

s.style.setProperty(
"--x",
(Math.random()*80-40)+"px"
);

document.body.appendChild(s);

setTimeout(()=>{
s.remove();
},2000);

}

setInterval(createSparkle,250);

/* ===========================
      STARS
=========================== */

function createStars(){

const holder=
document.getElementById("stars");

if(!holder) return;

holder.innerHTML="";

for(let i=0;i<140;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=
Math.random()*100+"%";

star.style.top=
Math.random()*100+"%";

star.style.animationDelay=
Math.random()*3+"s";

holder.appendChild(star);

}

}

createStars();

/* ===========================
      PARALLAX EFFECT
=========================== */

document.addEventListener("mousemove",e=>{

const x=(e.clientX/window.innerWidth-.5)*20;

const y=(e.clientY/window.innerHeight-.5)*20;

document.querySelectorAll(".memory-photo").forEach(photo=>{

photo.style.transform=
`translate(${x}px,${y}px)`;

});

});
/* =====================================
        SCRIPT.JS PART 2
===================================== */

/* ===========================
        FLIP CARD
=========================== */

function flipCard(card){

card.classList.toggle("flipped");

heartExplosion(

card.getBoundingClientRect().left+

card.offsetWidth/2,

card.getBoundingClientRect().top+

card.offsetHeight/2

);

}

/* ===========================
     MEMORY PHOTO EFFECT
=========================== */

document.querySelectorAll(".memory-photo").forEach(photo=>{

photo.addEventListener("click",()=>{

photo.style.zIndex="999";

photo.style.transition=".4s";

photo.style.transform="scale(1.15)";

heartExplosion(

photo.getBoundingClientRect().left+

photo.offsetWidth/2,

photo.getBoundingClientRect().top+

photo.offsetHeight/2

);

setTimeout(()=>{

photo.style.transform="scale(1)";

},500);

});

});

/* ===========================
       AUTO SPARKLES
=========================== */

setInterval(()=>{

for(let i=0;i<4;i++){

createSparkle();

}

},1800);

/* ===========================
       PAGE ENTER FX
=========================== */

const observer=new MutationObserver(()=>{

document.querySelectorAll(".page.active").forEach(page=>{

page.animate([

{

opacity:0,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:700,

easing:"ease"

});

});

});

observer.observe(document.body,{

attributes:true,

subtree:true,

attributeFilter:["class"]

});

/* ===========================
     MUSIC FADE
=========================== */

if(music){

music.volume=0;

document.addEventListener("click",()=>{

let volume=0;

const fade=setInterval(()=>{

volume+=0.05;

music.volume=Math.min(volume,0.6);

if(volume>=0.6){

clearInterval(fade);

}

},150);

},{once:true});

}

/* ===========================
      END SCREEN FX
=========================== */

const end=document.getElementById("endScreen");

if(end){

const endObserver=new MutationObserver(()=>{

if(end.classList.contains("active")){

for(let i=0;i<120;i++){

setTimeout(()=>{

heartExplosion(

Math.random()*window.innerWidth,

Math.random()*window.innerHeight

);

},i*80);

}

}

});

endObserver.observe(end,{

attributes:true

});

}

/* ===========================
      FLOATING LIGHTS
=========================== */

function createLight(){

const light=document.createElement("div");

light.className="light";

light.style.left=Math.random()*100+"vw";

light.style.top=Math.random()*100+"vh";

light.style.width=

150+Math.random()*150+"px";

light.style.height=

light.style.width;

document.body.appendChild(light);

setTimeout(()=>{

light.remove();

},15000);

}

setInterval(createLight,5000);

/* ===========================
      RANDOM TWINKLE
=========================== */

setInterval(()=>{

document.querySelectorAll(".star").forEach(star=>{

if(Math.random()<0.08){

star.animate([

{

opacity:.3,

transform:"scale(.6)"

},

{

opacity:1,

transform:"scale(2)"

},

{

opacity:.3,

transform:"scale(.6)"

}

],{

duration:1200

});

}

});

},1200);

/* ===========================
     PHOTO PARALLAX RESET
=========================== */

document.addEventListener("mouseleave",()=>{

document.querySelectorAll(".memory-photo").forEach(photo=>{

photo.style.transform="translate(0,0)";

});

});

/* ===========================
        THE END
=========================== */

console.log("❤️ Happy Birthday Palak ❤️");