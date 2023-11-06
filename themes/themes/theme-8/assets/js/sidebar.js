const navSlide=()=>{const burger=document.querySelector(".side-icon");for(var i=0;i<burger.length;i++){burger[i].addEventListener("click",function(){});}
const nav=document.querySelector(".main-nav");const navLinks=document.querySelectorAll(".main-nav .menu-list .menu-item");const menuClose=document.querySelector("#menu-close-btn");burger.addEventListener("click",()=>{nav.classList.add("show-menu");navLinks.forEach((link,index)=>{if(link.style.animation){link.style.animation="";}else{link.style.animation=`navLinkFade 0.4s ease forwards ${
index/10+0.5
}s `;}});});menuClose.addEventListener("click",()=>{nav.classList.remove("show-menu");navLinks.forEach((link,index)=>{if(link.style.animation){link.style.animation="";}else{link.style.animation=`navLinkFade 0.4s ease forwards ${
index/10+0.5
}s `;}});});};navSlide();