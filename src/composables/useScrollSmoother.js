import gsap, { ScrollSmoother } from "@/plugins/gsap";

export function useScrollSmoother() {
  let smoother = null;

  function initSmoother() {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 3,
      effects: true,
      normalizeScroll: true,
    });
  }

  return {
    initSmoother,
    smoother,
  };
}
