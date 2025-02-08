# l-atelier-d-opie

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Animations et GSAP

Ce projet utilise [GSAP](https://greensock.com/gsap/) pour créer des animations fluides et engageantes :

- **ScrollTrigger** : Synchronise les animations avec le scroll de la page.
- **ScrollSmoother** : Offre un effet de défilement doux.
- **SplitText** : Permet de découper le texte pour animer chaque caractère ou mot individuellement.
- **Timelines animées** : Utilisées dans les fonctions `useHeroAnimation`, `useHeaderAnimation` et `useGalleryAnimation` pour orchestrer les animations.

Les fonctionnalités d'animation se trouvent principalement dans le dossier `src/composables` et sont intégrées aux composants via des appels dans les hooks `onMounted`.
