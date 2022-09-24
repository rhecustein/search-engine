<script setup lang="ts">
import { onMounted, watch, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import axios from "axios";

import Header from "@/src/components/partials/Header.vue";
import Footer from "@/src/components/partials/Footer.vue";

const router = useRouter();

// type checking
interface resDataTypes {
  query: string;
  number_of_results: number;
  results: any;
  answer: any;
  corrections: any;
  infoboxes: any;
  suggestions: any;
  unresponsive_engines: any;
}

// props
const props = defineProps({
  searchQuery: {
    type: String,
    required: true,
  },
});

// ref
const resData = ref<resDataTypes | null>(null);
const inpSearchQuery = ref("");
const showLoading = ref(true);

// mounted
onMounted(() => {
  window.scroll(0, 0);
  document.title = "Cari | " + import.meta.env.VITE_TITLE;
  if (props.searchQuery) {
    console.log(props.searchQuery);
    inpSearchQuery.value = props.searchQuery;
    console.log(inpSearchQuery.value);
    setTimeout(() => {
      callApi();
    }, 800);
  }
});

// watch
watch(
  () => resData.value,
  () => {
    if (resData.value) {
      showLoading.value = false;
    }
  }
);

// handler
const handleSubmit = () => {
  if (inpSearchQuery.value) {
    callApi();
  }
};

const onSubmit = () => {
  console.log("Cari...");
};

// api
const callApi = () => {
  router.replace({ path: "/cari/" + inpSearchQuery.value });
  document.title =
    inpSearchQuery.value + " - Pencarian | " + import.meta.env.VITE_TITLE;
  window.scroll(0, 0);
  axios
    .get(
      import.meta.env.VITE_BACKEND_URL +
        "/search?format=json&engines=duckduckgo,yahoo,google&lang=id-ID&category_general=1&q=" +
        inpSearchQuery.value
    )
    .then((response) => {
      resData.value = response.data;
      console.log(resData.value);
    })
    .catch((error) => {
      console.log(error);
      showLoading.value = false;
      resData.value = null;
    });
};
</script>

<template>
  <Header />
  <main class="mt-4 min-h-[300px]">
    <div class="grid grid-cols-3 w-full">
      <div class="col-span-2">
      <form class="relative mt-4" @submit.prevent="onSubmit()">
        <label for="search-input" class="text-gray-500">
          <input
            id="search-input"
            v-model="inpSearchQuery"
            type="search"
            class="home-search block w-full rounded-full border-0 border-gray-200 bg-white py-5 pl-14 pr-5 text-sm font-normal shadow-lg outline-none focus:border-teal-600 focus:ring focus:ring-teal-500 focus:ring-opacity-50 disabled:bg-gray-200 md:pl-16 shadow-md blur-none"
            placeholder="Kata Kunci"
          />
          <button
            class="focus:ring-blue-6000 absolute right-2.5 top-1/2 flex h-11 w-11 -translate-y-1/2 transform items-center justify-center rounded-full bg-teal-600 !leading-none text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-opacity-70"
            type="submit"
            @click.prevent="handleSubmit()"
          >
            <Icon icon="fe:arrow-right" class="text-xl" />
          </button>
          <span
            class="absolute left-5 top-1/2 -translate-y-1/2 transform text-2xl md:left-6"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M22 22L20 20"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </label>
      </form>
    </div>
    <div class="">
      <div class="rounded-lg shadow-lg bg-white w-6">
        <img src="/assets/images/pp/picture.png" alt="">
      </div>
    </div>
  </div>
    <div class="mb-16 p-5">
      <div v-if="showLoading">Loading...</div>
      <div v-else-if="resData && resData.query">
        <div
          v-if="resData.results.length"
          class="grid grid-cols-1 gap-4 lg:grid-cols-12"
        >
          <div class="order-2 col-span-full lg:order-none lg:col-span-8">
            <div class="flex flex-col gap-4">
              <div v-if="resData.suggestions.length">
                <div class="mb-2 font-bold">Sugesti:</div>
                <div class="grid grid-cols-2 gap-1.5 divide-x lg:grid-cols-4">
                  <a
                    v-for="(value, name, index) in resData.suggestions"
                    :key="index"
                    class="text-light cursor-pointer px-2 text-sm text-gray-600 hover:text-black"
                    @click="
                      inpSearchQuery = value;
                      callApi();
                    "
                  >
                    {{ value }}
                  </a>
                </div>
              </div>
              <div v-for="(res, index) in resData.results" :key="index">
                <a :href="res.url">
                  <h5 class="mb-1 text-cyan-700 text-xl font-extrabold ">
                    {{ res.title }}
                  </h5>
                  <p class="text-sm font-medium">{{ res.content }}</p>
                  <div class="flex flex-col">
                    <div class="flex">
                      <div
                        v-for="(engines, enginesIndex) in res.engines"
                        :key="enginesIndex"
                        class="mr-2 text-sm font-light mt-2 text-teal-800">
                        {{ engines }}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="order-1 col-span-full lg:order-none lg:col-span-4">
            <div v-if="resData.infoboxes" class="mb-4 flex flex-col gap-4 rounded-lg">
              <div
                v-for="(inf, index) in resData.infoboxes"
                :key="index"
                class="border border-gray-300 p-3 rounded-lg shadow-md"
              >
                <h4
                  class="mb-2 border-b border-gray-300 pb-2 text-xl font-bold"
                >
                  {{ inf.infobox }}
                </h4>
                <div
                  v-if="inf.img_src"
                  class="mx-auto my-4 flex w-full items-center justify-center"
                >
                  <img
                    :src="inf.img_src"
                    :alt="inf.infobox"
                    class="h-[240px] w-auto"
                  />
                </div>
                <p
                  class="mb-2 mt-4 border-b border-gray-300 pb-2 text-sm font-medium italic leading-relaxed text-gray-800"
                >
                  {{ inf.content }}
                </p>
                <ul
                  v-if="inf.attributes?.length"
                  class="my-4 flex flex-col gap-4"
                >
                  <li
                    v-for="(attr, attrIndex) in inf.attributes"
                    :key="attrIndex"
                    class="columns-2 text-sm"
                  >
                    <div class="column font-bold">{{ attr.label }}</div>
                    <div class="column">{{ attr.value }}</div>
                  </li>
                </ul>
                <div v-if="inf.urls?.length" class="flex flex-wrap gap-2">
                  <a
                    v-for="(url, urlIndex) in inf.urls"
                    :key="urlIndex"
                    :href="url.url"
                    class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 py-1 px-3 text-xs text-white transition-all hover:bg-blue-800"
                  >
                    {{ url.title }}
                  </a>
                </div>
              </div>
            </div>
            <!-- BEGIN Gads -->
            <div class="mb-5">
              <Adsense
                data-ad-client="ca-pub-2963267810715450"
                data-ad-slot="6800497163"
              >
              </Adsense>
            </div>
            <!-- EOL Gads -->
          </div>
        </div>
        <div v-else>No Result</div>
      </div>
      <div v-else>No Data</div>
    </div>
  </main>
  <Footer />
</template>
