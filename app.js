gsap.registerPlugin(ScrollTrigger);

gsap.to(".first", {
    y: -700,
    duration: 3,
    scrollTrigger: {
        trigger: ".first",
        start:  "top center",
        end: "center",
        scrub: true,
        toggleActions: "restart reverse restart reverse",
        markers: true,
    }
})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".bigtext",
        start:  "top center",
        end: "center",
        scrub: true,
        toggleActions: "restart reverse restart reverse",
        markers: true,
    }
});

tl.to(".bigtext", {y: -200, duration: 3})
  .to(".bigtext", {y: 400, duration: 3})


const yl = gsap.timeline({
    scrollTrigger: {
        trigger: ".bigtext",
        start:  "top center",
        end: "center",
        scrub: true,
        toggleActions: "restart reverse restart reverse",
        markers: true,
    }
})

yl.to(".image",{y: -100, duration: 5})
  .to(".image",{y: 100, duration: 5})
  .to("#imageright",{x: 400, duration: 10})
  .to("#imageleft",{x: -400, duration: 10})