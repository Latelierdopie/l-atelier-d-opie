import gsap from "@/plugins/gsap";
import { onUnmounted } from "vue";

export function useHeaderAnimation() {
  // État initial : masquer les éléments du header (sans modifier la hauteur globale)
  gsap.set(".header-content", { opacity: 0 });
  gsap.set(".header-button", { opacity: 0, x: "-200%", scaleX: 0.8 });
  gsap.set(".responsive-icon", { opacity: 0, scale: 4 });

  // Animation de l'icône responsive
  gsap.to(".responsive-icon", {
    duration: 1,
    opacity: 1,
    ease: "power2.in",
  });

  // Créer une timeline pour animer uniquement le contenu du header
  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".header-placeholder", // trigger sur le conteneur stable
        start: "top top",
        end: "+=300",
        scrub: 1,
        anticipatePin: 1,
        markers: false, // activer pour déboguer si besoin
      },
    })
    .to(".responsive-icon", {
      scale: 1,
      ease: "power2.inOut",
    })
    .to(
      ".header-content",
      {
        opacity: 1,
        stagger: 0.2,
        ease: "power2.inOut",
      },
      "-=0.5"
    )
    // Ajout d'une translation sur l'axe Y pour recréer l'effet de déplacement
    .to("header", {
      y: "-100%",
      ease: "power2.inOut",
      duration: 0.5,
    })

    // Vous pouvez animer d'autres éléments en changeant leurs propriétés (mais évitez de modifier la hauteur globale)
    .fromTo(
      ".header-button",
      {
        opacity: 0,
        x: "-600%", // départ à gauche
        scaleX: 0.6,
        ease: "power2.inOut",
      },
      {
        opacity: 1,
        x: "0%",
        scaleX: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      },
      "+=0.2"
    );

  onUnmounted(() => {
    if (tl.scrollTrigger) {
      tl.scrollTrigger.kill();
    }
    tl.kill();
  });
}
