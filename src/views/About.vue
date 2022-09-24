<script setup lang="ts">
import { onMounted } from "vue";
import { Icon } from "@iconify/vue";

import Header from "@/src/components/partials/Header.vue";
import Footer from "@/src/components/partials/Footer.vue";

// mounted
onMounted(() => {
  window.scroll(0, 0);
  document.title = "About | " + import.meta.env.VITE_TITLE;
});
</script>

<template>
  <Header />
  <main class="mt-4 min-h-[300px]">
    <h1 class="mb-4 text-4xl font-medium">About</h1>
    <p>Consectetur expedita natus quisquam illo</p>
    <Icon icon="fe:home" class="text-xl" />
  </main>
  <Footer />
</template>
