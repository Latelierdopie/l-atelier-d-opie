import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGalleryAnimation() {
  ScrollTrigger.create({
    trigger: "#gallery-section",
    start: "top 80%",
    endTrigger: "#gallery-section",
    end: "bottom bottom",
    markers: true,
    onEnter: () => {
      // Désépingler la section hero
      gsap.to("#hero-section", {
        position: "relative",
        top: "auto",
        duration: 0.5,
      });
    },
  });
}
