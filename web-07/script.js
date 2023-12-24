var nike = gsap.timeline();

gsap.set(".a",{opacity:0,y:10})

nike
.from("#left",{
    width:0,
    ease: Expo.easeInOut,
    duration:1.5,
    
})
.from("#right",{
    width:0,
    ease: Expo.easeInOut,
    duration:1.5,
    
})
.to(".a",{
    delay:-2,
    stagger:.23,
    opacity:1,
    y:0,
    duration:1.2,
    ease: Expo.easeInOut
})
