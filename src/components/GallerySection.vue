<script setup>
import { onMounted, ref } from "vue";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const gallery = ref(null);
const images = ref([]);

// Fonction pour récupérer toutes les images
const importImages = async () => {
  const imageFiles = import.meta.glob(
    "/public/images/gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG}"
  );

  for (const path in imageFiles) {
    // Extraire le nom du fichier du chemin complet
    const fileName = path.replace("/public", "");
    images.value.push({
      src: fileName,
      alt: `Gallery image ${images.value.length + 1}`,
    });
  }
};

onMounted(async () => {
  // Charger les images d'abord
  await importImages();

  if (gallery.value) {
    // Initialiser imagesLoaded avant Masonry
    imagesLoaded(gallery.value, () => {
      const masonryInstance = new Masonry(gallery.value, {
        itemSelector: ".gallery-item",
        columnWidth: ".gallery-sizer",
        percentPosition: true,
        gutter: 20,
      });

      masonryInstance.layout();
    });
  }
});
</script>

<template>
  <div ref="gallery" class="gallery-container">
    <div class="gallery-sizer"></div>
    <div v-for="(image, index) in images" :key="index" class="gallery-item">
      <img :src="image.src" :alt="image.alt" loading="eager" />
    </div>
  </div>
</template>

<style scoped>
.gallery-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.gallery-item {
  width: 30%;
  margin-bottom: 20px;
  /* Ajout d'un style pour s'assurer que l'élément est visible */
  background-color: #f0f0f0;
  min-height: 100px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.gallery-sizer {
  width: 30%;
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
  /* Ajout de ces propriétés pour débugger */
  min-height: 100px;
  object-fit: cover;
}

/* Responsive design */
@media (max-width: 1024px) {
  .gallery-item,
  .gallery-sizer {
    width: 45%;
  }
}

@media (max-width: 640px) {
  .gallery-item,
  .gallery-sizer {
    width: 100%;
  }
}
</style>
