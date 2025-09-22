import { gsap } from "gsap";

export const homeAnimations = () => {
  const timeline = gsap.timeline(); // master timeline to sync letter animations

  // Index groups for different animation styles
  const flipSideways = [0, 2, 5, 7, 12];   // letters that flip around Y-axis
  const flipUpsideDown = [3, 8, 14];       // letters that flip around X-axis
  const slideIn = [1, 6, 10, 15];          // letters that slide upward
  const noAnimation = [4, 9, 13];          // letters that just fade in

  // === SIDEWAYS FLIP (Y rotation) ===
  flipSideways.forEach((i) => {
    timeline.fromTo(
      `.letter-${i}`,                         // target letter class
      { opacity: 0, rotationY: 90 },          // start hidden + rotated
      { 
        opacity: 1, 
        rotationY: 0,                         // rotate to normal
        duration: 0.8, 
        ease: "back.out(1.7)",                // bouncy easing
        transformOrigin: "50% 50%",           // rotate around center
        clearProps: "transform"               // reset GSAP transform for hover effects
      },
      i * 0.1 // stagger start by index
    );
  });

  // === UPSIDE-DOWN FLIP (X rotation) ===
  flipUpsideDown.forEach((i) => {
    timeline.fromTo(
      `.letter-${i}`,
      { opacity: 0, rotationX: 90 },
      { 
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.out",                   // smoother easing
        transformOrigin: "50% 50%",
        clearProps: "transform"
      },
      i * 0.12 // different stagger timing
    );
  });

  // === SLIDE-IN (move up) ===
  slideIn.forEach((i) => {
    timeline.fromTo(
      `.letter-${i}`,
      { opacity: 0, y: 50 },                  // start below and hidden
      { 
        opacity: 1, 
        y: 0,                                 // move into place
        duration: 0.7,
        ease: "power3.out",                   // fast-to-slow motion
        clearProps: "transform"
      },
      i * 0.08
    );
  });

  // === SIMPLE FADE-IN ===
  noAnimation.forEach((i) => {
    timeline.fromTo(
      `.letter-${i}`,
      { opacity: 0 },                         // only fade effect
      { opacity: 1, duration: 1, clearProps: "transform" },
      i * 0.15
    );
  });

  // === SUBTITLE ANIMATION ===
  gsap.fromTo(
    ".home-subtitle",                         // entire subtitle element
    { opacity: 0, x: -100 },                  // start off-screen left
    { opacity: 1, x: 0, duration: 1.5, delay: 0.5, ease: "power3.out" }
  );

  // === BUTTONS ANIMATION ===
  gsap.fromTo(
    ".home-btn",                              // multiple buttons
    { opacity: 0, scale: 0 },                 // start invisible and tiny
    { 
      opacity: 1, 
      scale: 1,                               // pop into full size
      duration: 1,
      delay: 1.2,
      stagger: 0.3,                           // animate buttons one by one
      ease: "back.out(1.7)"
    }
  );

  // 💡 Debug tip: if animations don’t trigger, 
  // check if `.letter-x`, `.home-subtitle`, `.home-btn` exist in DOM.
};
