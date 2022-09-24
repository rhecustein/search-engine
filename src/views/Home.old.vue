<script setup lang="ts">
import { onMounted } from "vue";
import { Icon } from "@iconify/vue";

import Header from "@/src/components/partials/Header.vue";
import Footer from "@/src/components/partials/Footer.vue";

// mounted
onMounted(() => {
  window.scroll(0, 0);
  document.title = "Home | " + import.meta.env.VITE_TITLE;
});
</script>

<template>
  <Header />
  <main class="mt-4 min-h-[300px]">
    <div
      id="search"
      class="mt-[120px] mb-8 flex w-full flex-col items-center justify-center"
    >
      <h3 class="text-2xl font-medium text-blue-900">Cari Sesuatu?</h3>
      <div
        class="m-4 flex w-[560px] max-w-[95%] items-center items-center justify-between rounded-xl bg-white px-1 py-2 shadow-[0_2px_4px_0px_rgba(0,0,0,.4)]"
      >
        <Icon icon="fe:search" class="mx-2 inline w-[32px] text-xl" />
        <input
          type="text"
          class="w-full text-lg outline-none placeholder:text-gray-600"
          placeholder="keyword"
        />
        <div class="w-[32px]"></div>
      </div>
    </div>
    <div
      class="mx-auto mb-8 grid w-[720px] max-w-[95%] grid-cols-1 gap-4 rounded-xl bg-gray-200 p-4 lg:grid-cols-2"
    >
      <a class="rounded-xl bg-white p-3" href="#">
        <h1 class="text-xl font-bold line-clamp-2">
          Lorem inventore autem illo architecto?
        </h1>
        <p class="line-clamp-3">
          Amet quisquam asperiores debitis dignissimos totam. Id vitae aperiam
          aut sequi eius. Quibusdam repellendus sed voluptate dolor at. Dolorum
          ipsam minima deserunt vero enim, veritatis?
        </p>
      </a>
      <a class="rounded-xl bg-white p-3" href="#">
        <h1 class="text-xl font-bold line-clamp-2">
          Lorem inventore autem illo architecto?
        </h1>
        <p class="line-clamp-3">
          Amet quisquam asperiores debitis dignissimos totam. Id vitae aperiam
          aut sequi eius. Quibusdam repellendus sed voluptate dolor at. Dolorum
          ipsam minima deserunt vero enim, veritatis?
        </p>
      </a>
      <a class="rounded-xl bg-white p-3" href="#">
        <h1 class="text-xl font-bold line-clamp-2">
          Lorem inventore autem illo architecto?
        </h1>
        <p class="line-clamp-3">
          Amet quisquam asperiores debitis dignissimos totam. Id vitae aperiam
          aut sequi eius. Quibusdam repellendus sed voluptate dolor at. Dolorum
          ipsam minima deserunt vero enim, veritatis?
        </p>
      </a>
      <a class="rounded-xl bg-white p-3" href="#">
        <h1 class="text-xl font-bold line-clamp-2">
          Lorem inventore autem illo architecto?
        </h1>
        <p class="line-clamp-3">
          Amet quisquam asperiores debitis dignissimos totam. Id vitae aperiam
          aut sequi eius. Quibusdam repellendus sed voluptate dolor at. Dolorum
          ipsam minima deserunt vero enim, veritatis?
        </p>
      </a>
      <a class="rounded-xl bg-white p-3" href="#">
        <h1 class="text-xl font-bold line-clamp-2">
          Lorem inventore autem illo architecto?
        </h1>
        <p class="line-clamp-3">
          Amet quisquam asperiores debitis dignissimos totam. Id vitae aperiam
          aut sequi eius. Quibusdam repellendus sed voluptate dolor at. Dolorum
          ipsam minima deserunt vero enim, veritatis?
        </p>
      </a>
    </div>
  </main>
  <Footer />
</template>
