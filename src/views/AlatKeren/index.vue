<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";

import Header from "@/src/components/partials/Header.vue";
import Footer from "@/src/components/partials/Footer.vue";

// mounted
onMounted(() => {
  window.scroll(0, 0);
  document.title = "Alat Keren | " + import.meta.env.VITE_TITLE;
});

const inpSearchTools = ref("");

const toolsList = [
  {
    name: "HTTP Headers Lookup",
    icon: "fe:text-align-right",
    desc: "Get all HTTP headers from URL or domain or IP",
    link: "/tools/http-header-lookup",
  },
  {
    name: "Tools 1",
    icon: "fe:text-align-right",
    desc: "Tool 1 desc",
    link: "/tools/#",
  },
  {
    name: "Tools 2",
    icon: "fe:text-align-right",
    desc: "Tool 2 desc",
    link: "/tools/#",
  },
  {
    name: "Tools 3",
    icon: "fe:text-align-right",
    desc: "Tool 3 desc",
    link: "/tools/#",
  },
  {
    name: "Tools 4",
    icon: "fe:text-align-right",
    desc: "Tool 4 desc",
    link: "/tools/#",
  },
  {
    name: "Tools 5",
    icon: "fe:text-align-right",
    desc: "Tool 5 desc",
    link: "/tools/#",
  },
];

const handleFilterTools = () => {
  if (inpSearchTools.value) {
    return toolsList.filter((t) =>
      t.name.toLowerCase().includes(inpSearchTools.value.toLowerCase())
    );
  }
  return toolsList;
};
</script>

<template>
  <Header />
  <main class="mt-4 min-h-[300px]">
    <div>
      <h1 class="mb-4 text-4xl font-medium">Tools</h1>
    </div>
    <div>
      <div class="mb-8">
        <input
          v-model="inpSearchTools"
          type="text"
          class="h-[48px] w-full rounded border-2 border-gray-200 py-2 px-5 text-lg outline-none placeholder:text-gray-600"
          placeholder="Search Tools"
        />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <router-link
          v-for="(tool, index) in handleFilterTools()"
          :key="index"
          :to="tool.link"
          class="col-span-full flex items-center border border-gray-200 bg-white p-2 lg:col-auto"
        >
          <div class="flex h-[48px] w-[48px] items-center justify-center">
            <Icon :icon="tool.icon" class="text-xl" />
          </div>
          <div>
            <div>
              {{ tool.name }}
            </div>
            <div>
              {{ tool.desc }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </main>
  <Footer />
</template>
