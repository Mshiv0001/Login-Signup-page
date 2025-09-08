import { gsap } from "gsap";

export const homeAnimations = () => {
  const timeline = gsap.timeline();

  // Example rules (customize as you like)
  const flipSideways = [0, 2, 5, 7, 12]; // indexes of letters to flip sideways
  const flipUpsideDown = [3, 8, 14]; // letters flip vertically
  const slideIn = [1, 6, 10, 15]; // letters slide from bottom
  const noAnimation = [4, 9, 13]; // these stay static

  // Animate sideways flip
  flipSideways.forEach((i) => {
    timeline.fromTo(
      `.letter-${i}`,
      { opacity: 0, rotationY: 90 },
      { opacity: 1, rotationY: 0, duration: 0.8, ease: "back.out(1.7)" },
      i * 0.1 // stagger by index
    );
  });

  // Animate upside-down flip
  flipUpsideDown.forEach((i) => {
    timeline.fromTo(
      `.letter-${i}`,
      { opacity: 0, rotationX: 90 },
      { opacity: 1, rotationX: 0, duration: 0.8, ease: "power2.out" },
      i * 0.12
    );
  });

  // Slide in letters
  slideIn.forEach((i) => {
    timeline.fromTo(
      `.letter-${i}`,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
      i * 0.08
    );
  });

  // No animation → just fade in slower
  noAnimation.forEach((i) => {
    timeline.fromTo(
      `.letter-${i}`,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      i * 0.15
    );
  });
};


  gsap.fromTo(".home-subtitle",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 1.5, delay: 0.5, ease: "power3.out" }
  );

  gsap.fromTo(".home-btn",
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 1, delay: 1.2, stagger: 0.3, ease: "back.out(1.7)" }
  );

