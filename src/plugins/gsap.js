import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Flip);

export default gsap;
export { ScrollTrigger, ScrollSmoother, SplitText, Flip };
