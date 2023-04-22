import barba from "@barba/core";
import { gsap } from "gsap";
import { createAnimation } from "./createAnimation";

export function barbaAnimation() {
  barba.init({
		transitions: [
			{
        name: "default-transition",
				once() {
					gsap.set([".container", "footer"], {
						autoAlpha: 0,
					});
					const tl = gsap.timeline();

					setTimeout(()=>{
					tl
						.to(".loader", {
							autoAlpha: 0,
					})
						.to(".loader__section.section--left", {
						xPercent: -100,
						ease: 'power4.easeInOut'
					})
						.to(".loader__section.section--right", {
						xPercent: 100,
						ease: 'power4.easeInOut'
					}, '<')
						.to("#loader-wrapper", {
							autoAlpha: 0,
							yPercent: -100,
							onComplete: () => {
								document.querySelector("#loader").classList.add('no-js__loader')
								document.querySelector("#loader-wrapper").classList.add('no-js')
								document.querySelector("body").classList.remove('is-loading')
								createAnimation();
							}
					})
						}, 3000)
				},
			},
		],
	});
}
