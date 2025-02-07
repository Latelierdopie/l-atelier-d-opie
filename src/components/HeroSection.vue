<script setup>
import { useHeroAnimation } from "@/composables/useHeroAnimation";
import { onMounted } from "vue";

onMounted(() => {
  useHeroAnimation();
});
</script>
<template>
  <div class="w-full max-w-5xl mx-auto px-8 min-h-[60vh]">
    <div
      id="hero-text"
      class="flex flex-col space-y-8 text-center font-caveat text-5xl text-opie-gray text-shadow"
    >
      <p>Poussez la porte de L'Atelier d'Opie...</p>
      <p>Votre histoire, racontée avec soin</p>
      <p>À travers des sites web qui captivent et connectent.</p>
      <p>Une approche sur-mesure</p>
      <p>Pour des designs qui reflètent</p>
      <p>Votre identité et engagent votre audience.</p>
    </div>
  </div>
</template>
