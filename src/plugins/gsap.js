// Ce fichier configure GSAP et enregistre les plugins utilisés dans le projet.
// Les plugins enregistrés incluent ScrollTrigger, ScrollSmoother, SplitText et Flip,
// qui permettent de créer des animations avancées et interactives.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";

// Enregistrement des plugins auprès de GSAP pour les rendre disponibles globalement
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Flip);

export default gsap;
export { ScrollTrigger, ScrollSmoother, SplitText, Flip };
