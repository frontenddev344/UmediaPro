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

setInterval(updateTimer, 1000);




// Counter JS Start
// First, ensure GSAP and ScrollTrigger are loaded in your project
gsap.registerPlugin(ScrollTrigger);

let count = document.querySelectorAll(".count");
let arr = Array.from(count);

arr.map(function (item) {
  let startnumber = 0;
  let target = parseInt(item.innerHTML.replace(',', ''), 10);
  let duration = 2000; // Duration in milliseconds for all counters to finish
  let increment = target / (duration / 10); // Calculate the increment value

  function counterup() {
    startnumber += increment;
    item.innerHTML = Math.floor(startnumber);
    if (startnumber >= target) {
      item.innerHTML = item.closest('.counter-hour') ? target.toLocaleString() : target; // Ensure it ends on the target value
      clearInterval(stop);
    }
  }

  // Use GSAP's ScrollTrigger to start the counter when the section is visible
  ScrollTrigger.create({
    trigger: item,  // The element that triggers the animation
    start: "top 80%",  // When the top of the element is 80% of the viewport height
    onEnter: function() {
      // Start the counter
      let stop = setInterval(function () {
        counterup();
      }, 10);
      
      // Add a class to the parent of the .count element
      item.parentElement.classList.add("active");
    },
    once: true // Ensure the animation only runs once
  });
});
