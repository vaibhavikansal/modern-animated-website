var crsr=document.querySelector("#cursor");
document.addEventListener("mousemove",function(dets){
   crsr.style.left=dets.x+30+"px";
   crsr.style.top=dets.y+"px";
})
var blr=document.querySelector("#cursor-blr");
document.addEventListener("mousemove",function(dets){
   blr.style.left=dets.x-175+"px";
   blr.style.top=dets.y-175+"px";
})
gsap.registerPlugin(ScrollTrigger);


gsap.set("#nav", { backgroundColor: "transparent" });


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",  
        end: "top -11%", 
        scrub: 2     
    }
});
gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    start:"top -25%",
    end:"top -70%",
    scrub:2
  }  
})
var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale=3;
    crsr.style.border="1px solid #fff";
    crsr.style.backgroundColor="transparent";
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1;
    crsr.style.border="0px solid #95C11E";
    crsr.style.backgroundColor="#95C11E";
  })
})
gsap.from("#about-us img,#about-us h3,#about-us p",{
  y:90,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:2
  }
})
gsap.from("#card-container ", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#card-container",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1
  }
});
gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 50%",
    end:"top 45%",
    scrub:4
  }
})
gsap.from("#colon2",{
  y:70,
  x:70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 50%",
    end:"top 45%",
    scrub:4
  }
})
