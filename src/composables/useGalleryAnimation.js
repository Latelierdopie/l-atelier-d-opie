// Ce fichier gère l'animation de la section galerie à l'aide de GSAP et ScrollTrigger.
// L'animation synchronise la transition entre la section héros et la galerie.
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onUnmounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

export function useGalleryAnimation() {
  // Création d'un ScrollTrigger pour animer la section "gallery-section"
  // Lorsque la section entre dans le viewport, l'animation se déclenche.
  const galleryTrigger = ScrollTrigger.create({
    trigger: "#gallery-section", // L'élément déclencheur : la galerie
    start: "top 80%", // Déclenchement lorsque le haut de la section atteint 80% du viewport
    endTrigger: "#gallery-section",
    end: "bottom bottom", // Fin de l'animation quand le bas de la section atteint le bas du viewport
    pin: true, // Fige la section pendant l'animation
    pinSpacing: true, // Maintient l'espacement pendant l'effet de "pin"
    markers: false, // Définir sur true pour visualiser les points d'ancrage pendant le débogage
    onEnter: () => {
      // Lors de l'entrée dans la section galerie, réinitialise la position de la section héros
      gsap.to("#hero-section", {
        position: "relative",
        top: "auto",
        duration: 0.5,
      });
    },
  });

  // Nettoyage de l'instance ScrollTrigger pour éviter les fuites de mémoire lors du démontage
  onUnmounted(() => {
    galleryTrigger.kill();
  });
}
