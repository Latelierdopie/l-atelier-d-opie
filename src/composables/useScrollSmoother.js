// Ce fichier initialise ScrollSmoother de GSAP pour obtenir un scroll plus doux sur la page.
// ScrollSmoother gère un "wrapper" et le "content" pour simuler une meilleure fluidité de défilement.
import gsap, { ScrollSmoother } from "@/plugins/gsap";

export function useScrollSmoother() {
  // Variable pour stocker l'instance ScrollSmoother
  let smoother = null;

  // Fonction d'initialisation du ScrollSmoother avec sa configuration
  function initSmoother() {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper", // Le conteneur global enveloppant le contenu
      content: "#smooth-content", // Le conteneur du contenu à animer pour le scroll
      smooth: 3, // Intensité du lissage du scroll (valeur plus élevée = plus doux)
      effects: true, // Activeur des effets (comme les parallaxes) lors du scroll
      normalizeScroll: true, // Normalise le comportement du scroll sur divers appareils/navigateurs
    });
  }

  // Retourne l'instance et la fonction d'initialisation pour être utilisées dans les composants
  return {
    initSmoother,
    smoother,
  };
}
