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
    duration:0.7,
    stagger:0.2
    });
    
    tl.pause();
    menu.addEventListener("click", function(){
        tl.play();
    });
    
    
    closedMenu.addEventListener("click", function(){
    tl.reverse();
    });
    

    // stacking card 
    // gsap.registerPlugin(ScrollTrigger);

    // const cards  = document.querySelectorAll('.card');
    // // const header  = document.querySelector('.header');
    // const animation = gsap.timeline()
    // let cardHeight
  
  
  
    // function initCards(){
    //   animation.clear()
    //   cardHeight = cards[0].offsetHeight
    //   console.log("initCards()", cardHeight)
    //   cards.forEach((card, index) => {
    //     if(index > 0){
    //     //increment y value of each card by cardHeight
    //       gsap.set(card, {y:index * cardHeight})
    //     //animate each card back to 0 (for stacking)
    //       animation.to(card, {y:0, duration:index*0.5, ease:"none"},0)
  
    //     }
    //   })
    // }
  
    // initCards()
  
    // ScrollTrigger.create({
    //   trigger:".card-wrapper",
    //   start:"top top",
    //   pin:true,
    //   end:()=>`+=${(cards.length * cardHeight)}`,
    //   scrub:true,
    //   animation:animation,
    //   markers:true,
    //   invalidateOnRefresh:true
    // })
  
    // ScrollTrigger.addEventListener("refreshInit", initCards)
  
  
    // Become a GSAP and ScrollTrigger Pro
    // visit https://www.creativecodingclub.com/ 
    // Unlock over 200 lessons and get new lessons weekly
  
    //automate scroll
    /* gsap.delayedCall(1, ()=>{
      gsap.to(window, {scrollTo:{y:"max", autoKill:true}, duration:15, repeat:1, yoyo:true, repeatDelay:1, ease:"none"})
  
    })
     */


// accordtion start 

$(document).ready(function(){
  $(".acc-head").click(function(){
    $(this).next().slideToggle().parent().siblings().find(".acc-content").slideUp();
    $(this).toggleClass("active").parent().siblings().find(".acc-head").removeClass("active");
  });
});

let time = 90;
let timeEl = document.querySelector(".time");
let timer = setInterval(function(){
  timeEl.innerHTML = time;
  if(time <= 0){
    clearInterval(timer);
  } else {
    time--;
  }
}, 500);

