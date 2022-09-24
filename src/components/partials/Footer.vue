<script setup lang="ts">
import { ref } from "vue";
const p = ref(window.location.protocol === "https:" ? "s" : "");
</script>

<template>
  <scriptx
    :src="'http' + p + '://code.tidio.co/gcsnhbjfdlwnqqzpjq42crtkxhdfycje.js'"
  ></scriptx>
  <footer class="mb-4 flex w-full flex-col items-center font-monospace">
    <div class="mb-4 flex items-center justify-center gap-4">
      <a href="#" class="link">Disclaimer</a> -
      <a href="#" class="link">Privacy Policy</a> -
      <router-link to="/about" class="link">About</router-link>
    </div>
    <div>Copyright &copy; 2022 <a href="//autobot.co.id">AutobotWS</a></div>
  </footer>
</template>
