// header start 
gsap.to(".box",{
    x: 500,
    y:300,
    duration:2,
    scale:1.2
    });
    
    gsap.from(".box2",{
    x: 500,
    y:300,
    duration:2,
    rotate:360,
    scale:0.5,
    scrollTrigger: ".box2"
    });
    
    gsap.from(".box3", {
    rotate:360,
    scale:0,
    duration:1.5,
    scrollTrigger :{
        trigger:".box3",
        scroller:"body",
        // markers:true, 
        start: "top 60%",
        end: "top 50%",
        scrub:2
    }
    
    });
    
    var menu = document.querySelector(".menu-btn");
    var closedMenu = document.querySelector(".closed-menu");
    
    var tl = gsap.timeline();
    
    tl.to("nav.site-nav", {
    transform: "translateX(0)",
    duration:0.5
    })
    
    tl.from("nav.site-nav a", {
    x:100,
    duration:0.4,
    stagger:0.2
    });
    
    tl.pause();
    menu.addEventListener("click", function(){
        tl.play();
    });
    
    
    closedMenu.addEventListener("click", function(){
    tl.reverse();
    });
    
// accordtion start 

$(document).ready(function(){
  $(".acc-head").click(function(){
    $(this).next().slideToggle().parent().siblings().find(".acc-content").slideUp();
    $(this).toggleClass("active").parent().siblings().find(".acc-head").removeClass("active");
  });
});


let time = 0; 
let timeEl = document.querySelector(".time");

function updateTimer() {
  timeEl.innerHTML = time.toString().padStart(2, "0"); 
  if (time >= 90) {
    time = 0; 
  } else {
    time++;
  }
}

let timer = setInterval(updateTimer, 1000);
