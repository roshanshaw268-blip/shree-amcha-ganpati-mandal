// ===================================
// SHREE AMCHA GANPATI MANDAL
// SCRIPT.JS - PART 1
// ===================================

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Header Effect

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.96)";
header.style.boxShadow="0 5px 25px rgba(255,215,0,.25)";

}else{

header.style.background="rgba(0,0,0,.85)";
header.style.boxShadow="none";

}

});

// Scroll To Top

const topBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Fade Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});
// ===================================
// IMAGE POPUP
// ===================================

const imageViewer=document.getElementById("imageViewer");
const viewerImage=document.getElementById("viewerImage");
const closeViewer=document.getElementById("closeViewer");

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.addEventListener("click",()=>{

imageViewer.style.display="flex";
viewerImage.src=img.src;

});

});

closeViewer.onclick=()=>{

imageViewer.style.display="none";

};

imageViewer.onclick=(e)=>{

if(e.target===imageViewer){

imageViewer.style.display="none";

}

};

// ===================================
// VIDEO POPUP
// ===================================

const videoViewer=document.getElementById("videoViewer");
const viewerVideo=document.getElementById("viewerVideo");
const closeVideo=document.getElementById("closeVideo");

document.querySelectorAll(".video-card video").forEach(video=>{

video.addEventListener("click",()=>{

videoViewer.style.display="flex";
viewerVideo.src=video.currentSrc;

});

});

closeVideo.onclick=()=>{

videoViewer.style.display="none";
viewerVideo.pause();

};

videoViewer.onclick=(e)=>{

if(e.target===videoViewer){

videoViewer.style.display="none";
viewerVideo.pause();

}

};

// ===================================
// MOBILE MENU
// ===================================

const menuBtn=document.querySelector(".menu-btn");
const navbar=document.querySelector(".navbar");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("active");

});

}

// ===================================
// FUTURE ADMIN SUPPORT
// ===================================

// Future me Supabase connect hoga.
// Admin Panel se upload hone wale
// Photos, Videos, Members, Events,
// Latest Updates yahin se load honge.

console.log("Shree Amcha Ganpati Mandal V2 Ready");
