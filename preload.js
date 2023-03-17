gsap.from(".text", 0.8, {
    y : 40,
    opacity : 0,
    ease :" power2.inOut",
    delay: 1
})

gsap.from(".loader", 1, {
    y : 50,
    opacity : 0,
    ease :" power4.inOut",
    delay: 2
})

gsap.from(".asset", 1.2, {
    y : -50,
    opacity : 0,
    ease :" power4.inOut",
    delay: 3.4
})


gsap.to(".preloader", 1.5, {
    top: "-150%",
    ease :" power4.inOut",
    delay: 7.2
})

gsap.to("#create", 0.9, {
    y : "0%",
    duration : 0.9,
    stagger : 0.6,  
    delay: 8.4,
})


gsap.to("#desc", {
    scrollTrigger :{
        trigger:"#desc",
        toggleActions: "restart none none none " 
      }, 
    y : "0%",
    duration : 0.9,
    stagger : 0.4
})

gsap.to("#data", {
    scrollTrigger :{
        trigger:"#data",
        toggleActions: "restart none none none " 
      }, 
    y : "0%",
    duration : 0.9,
    stagger : 0.4
})

gsap.to("#datae", {
    scrollTrigger :{
        trigger:"#datae",
        toggleActions: "restart none none none " 
      }, 
    y : "0%",
    duration : 0.9,
    stagger : 0.4
})

gsap.from("#success", {
    scrollTrigger :{
        trigger:"#success",
        toggleActions: "restart none none none " 
      }, 
      y : 90,
      opacity : 0,
      ease :" power2.inOut",
      delay: 0.5
})

gsap.to("#blog", {
    scrollTrigger :{
        trigger:"#blog",
        toggleActions: "restart none none none " 
      }, 
    y : "0%",
    duration : 0.9,
    stagger : 0.4
})

