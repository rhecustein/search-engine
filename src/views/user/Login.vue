<script setup lang="ts">
import { onMounted } from "vue";
import { Icon } from "@iconify/vue";

import Header from "@/src/components/partials/Header.vue";
import Footer from "@/src/components/partials/Footer.vue";

// mounted
onMounted(() => {
  window.scroll(0, 0);
  document.title = "Login | " + import.meta.env.VITE_TITLE;
});
</script>

<template>
  <Header />
  <main class="mt-4 min-h-[300px]">
    <div class="mx-auto mb-16 flex max-w-md flex-col">
      <h2
        class="my-10 flex items-center justify-center text-3xl font-semibold leading-[115%] text-gray-900 dark:text-gray-100 md:text-5xl md:leading-[115%]"
      >
        Login
      </h2>
      <div class="mx-auto max-w-md space-y-6">
        <div class="grid gap-3">
          <a
            href="#"
            class="flex w-full transform items-center justify-between rounded-lg bg-[#3B5999] px-4 py-3 transition-transform hover:translate-y-[-2px] dark:bg-gray-800 sm:px-6"
          >
            <Icon icon="cib:facebook-f" class="w-12 text-lg text-white" />
            <h3
              class="flex-grow text-center text-sm font-medium text-gray-100 dark:text-gray-300 sm:text-sm"
            >
              Login dengan Facebook
            </h3></a
          ><a
            href="#"
            class="flex w-full transform items-center justify-between rounded-lg bg-[#00ACED] px-4 py-3 transition-transform hover:translate-y-[-2px] dark:bg-gray-800 sm:px-6"
          >
            <Icon icon="cib:twitter" class="w-12 text-lg text-white" />
            <h3
              class="flex-grow text-center text-sm font-medium text-gray-100 dark:text-gray-300 sm:text-sm"
            >
              Login dengan Twitter
            </h3></a
          ><a
            href="#"
            class="flex w-full transform items-center justify-between rounded-lg bg-blue-100 px-4 py-3 transition-transform hover:translate-y-[-2px] dark:bg-gray-800 sm:px-6"
          >
            <Icon icon="cib:google" class="w-12 text-lg" />
            <h3
              class="flex-grow text-center text-sm font-medium text-gray-800 dark:text-gray-300 sm:text-sm"
            >
              Login dengan Google
            </h3></a
          >
        </div>
        <div class="relative text-center">
          <span
            class="relative z-10 inline-block bg-white px-4 text-sm font-medium dark:bg-gray-900 dark:text-gray-400"
            >ATAU</span
          >
          <div
            class="absolute left-0 top-1/2 w-full -translate-y-1/2 transform border border-gray-200 dark:border-gray-800"
          ></div>
        </div>
        <form class="grid grid-cols-1 gap-6" action="#" method="post">
          <label class="block"
            ><span class="text-gray-800 dark:text-gray-200">E-Mail</span
            ><input
              type="email"
              class="focus:ring-opacity-500 mt-1 block h-11 w-full rounded-2xl border-2 border-gray-200 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 disabled:bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-blue-600 dark:focus:ring-opacity-25 dark:disabled:bg-gray-800"
              placeholder="mail@domain.com" /></label
          ><label class="block"
            ><span
              class="flex items-center justify-between text-gray-800 dark:text-gray-200"
              >Password<router-link
                class="text-sm text-green-600"
                :to="{ name: 'Halaman Lupa Password' }"
                >Lupa Password?</router-link
              ></span
            ><input
              type="password"
              class="focus:ring-opacity-500 mt-1 block h-11 w-full rounded-2xl border-2 border-gray-200 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 disabled:bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-blue-600 dark:focus:ring-opacity-25 dark:disabled:bg-gray-800" /></label
          ><button
            class="relative inline-flex h-auto items-center justify-center rounded-full bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:bg-opacity-70 dark:focus:ring-offset-0 sm:px-6 sm:text-base"
            type="submit"
          >
            Login
          </button>
        </form>
        <span class="block text-center text-gray-700 dark:text-gray-300"
          >Butuh akun?
          <router-link class="text-green-600" :to="{ name: 'Halaman Register' }"
            >Buat akun baru</router-link
          ></span
        >
      </div>
    </div>
  </main>
  <Footer />
</template>
