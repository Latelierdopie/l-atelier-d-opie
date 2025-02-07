<script setup>
import HeroSection from "./components/HeroSection.vue";
import HeaderSection from "./components/HeaderSection.vue";
import GallerySection from "./components/GallerySection.vue";
import { onMounted } from "vue";
import { useScrollSmoother } from "./composables/useScrollSmoother";
import { useGalleryAnimation } from "./composables/useGalleryAnimation";

onMounted(() => {
  useScrollSmoother();
  useGalleryAnimation();
});
</script>

<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <div
        class="w-full min-h-screen bg-linear-to-br from-opie-mint/100 from-0% to-opie-blue/100 to-100%"
      >
        <!-- Contenu -->
        <div class="flex flex-col gap-96">
          <div class="sticky top-10">
            <!-- Header Section -->
            <HeaderSection />
          </div>

          <!-- Hero Section -->
          <div
            id="hero-section"
            class="flex-1 flex items-center justify-center sticky top-[30%]"
          >
            <HeroSection />
          </div>

          <!-- Gallery Section -->
          <div
            id="gallery-section"
            class="flex-1 flex items-center justify-center"
          >
            <GallerySection />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
