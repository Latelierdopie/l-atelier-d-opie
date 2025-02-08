import gsap, { SplitText } from "@/plugins/gsap";
import { onUnmounted } from "vue";

export function useHeroAnimation() {
  // Appliquer une perspective pour les effets 3D
  gsap.set("#hero-text", { perspective: 400 });

  // Sélectionner tous les paragraphes dans #hero-text
  const paragraphs = gsap.utils.toArray("#hero-text p");

  // Créer une timeline maîtresse avec un ScrollTrigger
  const masterTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero-section", // Le conteneur global servant de référence

      start: "top 30%", // Lancement lorsque le conteneur atteint 20% du viewport
      end: "+=600 top", // Ajuster cette valeur en fonction de la durée globale désirée
      scrub: 1, // La timeline suit le scroll
      pin: true,
      pinSpacing: true,
      markers: true,
    },
  });

  // Pour chaque paragraphe, on découpe le texte et on ajoute son animation à la timeline
  paragraphs.forEach((p) => {
    // Découper le texte en mots et caractères
    const split = new SplitText(p, { type: "words,chars" });

    // Définir l'état initial de chaque caractère (caché, transformé)
    gsap.set(split.chars, {
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
    });

    // Ajouter l'animation du paragraphe à la timeline maîtresse
    masterTL.to(split.chars, {
      opacity: 1,
      scale: 1,
      y: 0,
      rotationX: 0,
      ease: "back.out(1.7)",
      stagger: 0.05, // L'effet splitText : apparition progressive des caractères
    });
  });
  // Nettoyage lors du démontage du composant pour éviter toute fuite de mémoire
  onUnmounted(() => {
    if (masterTL.scrollTrigger) {
      masterTL.scrollTrigger.kill();
    }
    masterTL.kill();
  });
}
