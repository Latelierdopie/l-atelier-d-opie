import gsap, { Flip } from "@/plugins/gsap";

export function useHeaderAnimation() {
  // État initial : masquer tous les éléments du header sauf le logo

  gsap.set(".header-content", { opacity: 0 });
  gsap.set(".header-button", { opacity: 0, x: "-200%", scaleX: 0.8 });
  gsap.set(".responsive-icon", { opacity: 0, scale: 4 });
  gsap.set("header", { minHeight: "100vh" });

  gsap.to(".responsive-icon", {
    duration: 1,
    opacity: 1,
    ease: "power2.in",
  });

  // Créer une timeline avec ScrollTrigger
  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "+=600",
        scrub: 1,
        anticipatePin: 1,
        markers: true, // Décommenter pour le débogage
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
    .to(
      "header",
      {
        minHeight: "10vh",

        stagger: 0.2,
        ease: "power2.inOut",
      },
      "-=0.5"
    )
    .fromTo(
      ".header-button",
      {
        duration: 5,
        opacity: 0,
        x: "-600%", // Départ à gauche
        scaleX: 0.6, // Légère déformation horizontale
        ease: "power2.inOut",
      },
      {
        opacity: 1,
        x: "0%",
        scaleX: 1, // Retour à une taille normale
        duration: 1.5,
        ease: "elastic.out(1, 0.5)", // Effet élastique pour rebond
      },
      "+=0.2"
    );
}
