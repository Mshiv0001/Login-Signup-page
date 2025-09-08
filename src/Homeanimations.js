import { gsap } from "gsap";

export const homeAnimations = () => {
  gsap.fromTo(".home-title",
    { opacity: 0, y: -100 },
    { opacity: 1, y: 0, duration: 1.5, ease: "bounce.out" }
  );

  gsap.fromTo(".home-subtitle",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 1.5, delay: 0.5, ease: "power3.out" }
  );

  gsap.fromTo(".home-btn",
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 1, delay: 1.2, stagger: 0.3, ease: "back.out(1.7)" }
  );
};
