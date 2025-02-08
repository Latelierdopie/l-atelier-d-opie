// Ce fichier est responsable de l'animation de la section héro à l'aide de GSAP.
// Il utilise SplitText pour découper le texte en caractères et appliquer des animations 3D lors du scroll.
import gsap, { SplitText } from "@/plugins/gsap";
import { onUnmounted } from "vue";

export function useHeroAnimation() {
  // Définir une perspective 3D sur le conteneur du texte pour accentuer les effets de transformation
  gsap.set("#hero-text", { perspective: 400 });

  // Sélectionner tous les paragraphes dans la section héro
  const paragraphs = gsap.utils.toArray("#hero-text p");

  // Création d'une timeline maîtresse synchronisée avec le scroll, pilotée par ScrollTrigger
  const masterTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero-section", // La section héro déclenche l'animation
      start: "top 30%", // Lancement lorsque le haut de la section atteint 30% du viewport
      end: "+=600 top", // Durée de l'animation en fonction du scroll (600px)
      scrub: 1, // Synchro avec le scroll pour une animation fluide
      pin: true, // Gèle la section pour mieux apprécier l'effet
      pinSpacing: true,
      markers: true, // Affiche les marqueurs pour tester et ajuster l'animation (à désactiver en production)
    },
  });

  // Pour chaque paragraphe, découper le texte et définir une animation pour chaque caractère
  paragraphs.forEach((p) => {
    // Utiliser SplitText pour diviser le paragraphe en mots et caractères
    const split = new SplitText(p, { type: "words,chars" });

    // Configuration de l'état initial des caractères : invisibles et transformés
    gsap.set(split.chars, {
      opacity: 0, // Caractères invisibles
      scale: 0, // Réduction à zéro
      y: 80, // Décalés vers le bas
      rotationX: 180, // Rotation sur l'axe X pour un effet 3D dramatique
      transformOrigin: "0% 50% -50", // Point d'origine de la transformation
    });

    // Animation de chaque caractère pour qu'il apparaisse avec un effet de rebond
    masterTL.to(split.chars, {
      opacity: 1, // Passage à l'opacité normale
      scale: 1, // Retour à la taille normale
      y: 0, // Remise en place verticale
      rotationX: 0, // Suppression de la rotation
      ease: "back.out(1.7)", // Easing de type "back" pour un léger effet de rebond
      stagger: 0.05, // Délai entre l'animation de chaque caractère pour un effet échelonné
    });
  });

  // Nettoyage de la timeline et du ScrollTrigger lors du démontage du composant
  onUnmounted(() => {
    if (masterTL.scrollTrigger) {
      masterTL.scrollTrigger.kill();
    }
    masterTL.kill();
  });
}
