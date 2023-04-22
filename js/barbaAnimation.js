import barba from "@barba/core";
import { gsap } from "gsap";
import { createAnimation } from "./createAnimation";

export function barbaAnimation() {
  barba.init({
		transitions: [
			{
        name: "default-transition",
				once({ current }) {
					gsap.set([".container", "footer"], {
						autoAlpha: 0,
					});
					const tl = gsap.timeline();

					tl.to(".loader__item:nth-child(even)", {
						xPercent: -100,
						autoAlpha: 0,
						duration: 1.2,
						stagger: 0.2,
					}).to(".loader__item:nth-child(odd)", {
						xPercent: 100,
						autoAlpha: 0,
						stagger: 0.2,
						onComplete: () => {
							gsap.set([".container", "footer"], {
								autoAlpha: 1,
							});
							createAnimation();
						},
					}, "<.3");
				},
			},
		],
	});
}
