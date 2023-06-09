import { gsap } from 'gsap';

export function createAnimation() {
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.set([
        '.container',
        '.result',
        ".result__heading",
        ".result__circle",
        ".score__overall--slide-to-top",
        ".score__overall--slide-from-top",
        ".score__overall--result__total",
        ".result__details h1 span",
        ".result__details p",
        ".summary__heading",
        ".result__item",
        ".btn",
        ".attribution"
      ], {
        clearProps: true
      })
    }
  });

  tl
    .to('.container', {
      autoAlpha: 1,
      duration: 0.001
    })
    .fromTo('.result', {
      autoAlpha: 0,
      x: 100,
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
      
    }, {
      autoAlpha: 1,
      duration: .8,
      x: 0,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      ease: "power4.easeInOut"
    })
    .fromTo(".result__heading", {
      x: 20,
      autoAlpha: 0.01,
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
    }, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      autoAlpha: 1,
      ease: 'back',
      duration: 1.4,
      x: 0,
    })
    .fromTo(".result__circle", {
      autoAlpha: 0.01,
      clipPath: 'circle(14.5% at 50% 50%)'
    }, {
      clipPath: 'circle(50% at 50% 50%)',
      autoAlpha: 1,
      ease: 'bounce',
      duration: 1.4
    })
    .from(".score__overall--slide-to-top", {
      y: 20,
      x: -20,
      autoAlpha: 0.01
    })
    .from(".score__overall--slide-from-top", {
      y: -20,
      x: 20,
      autoAlpha: 0.01
    })
    .from(".score__overall--result__total", {
      y: -20,
      autoAlpha: 0.01
    })
    .from(".result__details h1 span", {
      y: -8,
      x: 5,
      autoAlpha: 0.01,
      stagger: 0.2
    })
    .fromTo(".result__details p", {
      autoAlpha: 0.01,
      y: 20,
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'
    }, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      autoAlpha: 1,
      duration: 1.3,
      y: 0,
    })
    .fromTo(".summary__heading", {
      x: 20,
      autoAlpha: 0.01,
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
    }, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      autoAlpha: 1,
      ease: 'back',
      duration: 1.4,
      x: 0,
    })
    .fromTo(".result__item", {
      x: 40,
      autoAlpha: 0.01,
    }, {
      autoAlpha: 1,
      ease: 'back',
      duration: 1.4,
      x: 0,
      stagger: 0.2
    })
    .fromTo([".btn", ".attribution"], {
      autoAlpha: 0.01,
      clipPath: 'circle(0% at 50% 50%)'
    }, {
      clipPath: 'circle(100% at 50% 50%)',
      autoAlpha: 1,
      ease: 'back',
      duration: 4,
    })
}