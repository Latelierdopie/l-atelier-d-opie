<script setup>
import { useHeaderAnimation } from "@/composables/useHeaderAnimation";
import { onMounted } from "vue";

onMounted(() => {
  useHeaderAnimation();
});
</script>

<template>
  <!-- Logo et Contact -->

  <header class="grid grid-rows-2 w-full px-8 top-8 auto-rows-auto">
    <div
      class="grid grid-flow-col items-center space-x-4 grow justify-items-center row-span-2"
    >
      <!-- Logo au centre -->

      <!-- Éléments qui apparaîtront au scroll -->
      <div class="header-content">
        <span
          class="text-opie-blue font-caveat text-7xl text-shadow-bold text-fluid"
          >L'ATELIER</span
        >
      </div>
      <div class="responsive-icon">
        <img src="@/assets/images/simple@4x.png" alt="Logo" />
      </div>
      <div class="header-content">
        <span
          class="text-opie-gray font-acumin text-shadow-bold text-fluid"
          style="font-variation-settings: 'wght' 194.2857, 'wdth' 100, 'slnt' 0"
        >
          d'Opie
        </span>
      </div>
    </div>
    <div class="flex justify-end">
      <button
        class="transition-colors header-button rounded-3xl bg-opie-sand hover:bg-opacity-75 element-shadow h-12"
      >
        <span> CONTACTEZ-NOUS </span>
      </button>
    </div>
  </header>
</template>
