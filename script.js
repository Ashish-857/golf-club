var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x + "px"
    blur.style.top = dets.y + "px"
})

gsap.to(".nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 1,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: "5"
    }

})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: "true",
        start: "top -35%",
        end: "top -100%",
        scrub: "5"

    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 50,
    opacity: 0,
    duration: 2,
    stagger: 1,
})
gsap.from("#cards-container,#cards1,#card2,#card3",{
    x: 50,
    opacity: 0,
    duration: 2,
    stagger: 1,
})
gsap.from("#colon1",{
    y: -70,
    x:-70,
scrollTrigger:{
   trigger:"#colon1",
scroller:"body",
// markers:"true",
start:"top 55%",
end:"bottam 45%",
scrub:9}
})
gsap.from("#colon2",{
    x: -70,
    y:-70,
scrollTrigger:{
   trigger:"#colon2",
scroller:"body",
// markers:"true",
start:"top 55%",
end:"bottam 45%",
scrub:9}
})