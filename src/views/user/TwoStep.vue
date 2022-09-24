<script setup lang="ts">
import { onMounted } from "vue";
import { Icon } from "@iconify/vue";

import Header from "@/src/components/partials/Header.vue";
import Footer from "@/src/components/partials/Footer.vue";

// mounted
onMounted(() => {
  window.scroll(0, 0);
  document.title = "Two Step | " + import.meta.env.VITE_TITLE;
});
</script>

<template>
  <Header />
  <main class="mt-4 min-h-[300px]">
    <div class="mx-auto mb-16 flex max-w-md flex-col">
      <h2
        class="my-10 flex items-center justify-center text-3xl font-semibold leading-[115%] text-gray-900 dark:text-gray-100 md:text-5xl md:leading-[115%]"
      >
        Two Step
      </h2>
      <span class="mb-8 block text-center text-gray-700 dark:text-gray-300"
        >Kami telah mengirimkan anda E-Mail berisi<br />kode verifikasi<br />Cek
        inbox E-Mail Anda.</span
      >
      <div class="mx-auto max-w-md space-y-6">
        <form class="grid grid-cols-1 gap-6" action="#" method="post">
          <label class="block">
            <span class="text-gray-800 dark:text-gray-200">
              <Icon icon="fe:lock" class="mr-1 inline text-lg" />
              Kode Verifikasi</span
            ><input
              type="text"
              class="focus:ring-opacity-500 mt-1 block h-11 w-full rounded-2xl border-2 border-gray-200 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 disabled:bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-blue-600 dark:focus:ring-opacity-25 dark:disabled:bg-gray-800"
              placeholder="********" /></label
          ><button
            class="relative inline-flex h-auto items-center justify-center rounded-full bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:bg-opacity-70 dark:focus:ring-offset-0 sm:px-6 sm:text-base"
            type="submit"
          >
            Verifikasi
          </button>
        </form>
      </div>
    </div>
  </main>
  <Footer />
</template>
