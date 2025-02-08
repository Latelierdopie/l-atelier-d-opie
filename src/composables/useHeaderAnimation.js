// Ce fichier gère les animations du header en utilisant GSAP et ScrollTrigger.
// Il définit les états initiaux et anime progressivement les éléments du header lors du scroll.
import gsap from "@/plugins/gsap";
import { onUnmounted } from "vue";

export function useHeaderAnimation() {
  // Initialisation : Masquer et positionner les éléments du header pour préparer l'animation.
  gsap.set(".header-content", { opacity: 0 }); // Cache le contenu principal du header
  gsap.set(".header-button", { opacity: 0, x: "-200%", scaleX: 0.8 }); // Place le bouton hors de l'écran à gauche
  gsap.set(".responsive-icon", { opacity: 0, scale: 4 }); // Agrandit et masque l'icône responsive

  // Animation d'apparition de l'icône responsive pour attirer l'attention
  gsap.to(".responsive-icon", {
    duration: 1,
    opacity: 1,
    ease: "power2.in",
  });

  // Création d'une timeline synchronisée avec le scroll pour animer le header
  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".header-placeholder", // Zone de déclenchement du header
        start: "top top", // Début de l'animation quand le header entre dans le viewport
        end: "+=300", // Durée de l'animation en fonction du scroll (300px)
        scrub: 1, // L'animation suit le scroll pour une synchronisation fluide
        anticipatePin: 1,
        markers: false, // Activez pour déboguer les déclencheurs de scroll
      },
    })
    .to(".responsive-icon", {
      scale: 1, // Réduit l'icône à sa taille normale
      ease: "power2.inOut",
    })
    .to(
      ".header-content",
      {
        opacity: 1, // Fait apparaître le contenu du header
        stagger: 0.2, // Délai progressif entre chaque élément pour un effet de cascade
        ease: "power2.inOut",
      },
      "-=0.5" // Commence cette animation un peu avant la fin de l'animation précédente
    )
    .to("header", {
      y: "-100%", // Translate le header vers le haut pour un effet de disparition
      ease: "power2.inOut",
      duration: 0.5,
    })
    .fromTo(
      ".header-button",
      {
        opacity: 0,
        x: "-600%", // Position initiale hors de l'écran à gauche
        scaleX: 0.6,
      },
      {
        opacity: 1,
        x: "0%", // Position finale alignée
        scaleX: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)", // Effet élastique pour un rebond dynamique
      },
      "+=0.2"
    );

  // Nettoyage de la timeline et du ScrollTrigger lors du démontage du composant
  onUnmounted(() => {
    if (tl.scrollTrigger) {
      tl.scrollTrigger.kill();
    }
    tl.kill();
  });
}
