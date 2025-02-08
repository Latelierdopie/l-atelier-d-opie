import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onUnmounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

export function useGalleryAnimation() {
  const galleryTrigger = ScrollTrigger.create({
    trigger: "#gallery-section",
    start: "top 80%",
    endTrigger: "#gallery-section",
    end: "bottom bottom",
    pin: true,
    pinSpacing: true,
    markers: false,
    onEnter: () => {
      // Désépingler la section hero
      gsap.to("#hero-section", {
        position: "relative",
        top: "auto",
        duration: 0.5,
      });
    },
  });
  // Nettoyage lors du démontage du composant pour éviter toute fuite de mémoire
  onUnmounted(() => {
    galleryTrigger.kill();
  });
}
