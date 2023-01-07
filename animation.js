gsap.to("#picOne", {duration: 1, x: 100, ease: "bounce"})
gsap.to(".picTwo", {duration: 1, x: 50, ease: "bounce"})

gsap.from("#picThree", {duration: 1, x: 50, ease: "bounce"})
gsap.from(".picFour", {duration: 1, x: 100, ease: "bounce"})

gsap.to(".checkHead", {duration: 1, y: 50, ease: "bounce"})

gsap.to("#picOne", {duration: 6,delay: 5, opacity:4})
gsap.to(".picTwo", {duration: 6,delay: 5, opacity:4})

gsap.to("#picThree", {duration: 6,delay: 5, opacity:4})
gsap.to(".picFour", {duration: 6,delay: 5, opacity:4})

gsap.from(".checkHead", {delay:1, opacity:-1})



