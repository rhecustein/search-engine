<script setup lang="ts">
import { onMounted } from "vue";
import { Icon } from "@iconify/vue";

import Header from "@/src/components/partials/Header.vue";
import Footer from "@/src/components/partials/Footer.vue";

// mounted
onMounted(() => {
  window.scroll(0, 0);
  document.title = "Page Title | " + import.meta.env.VITE_TITLE;
});
</script>

<template>
  <Header />
  <div class="relative h-40 w-full md:h-60 2xl:h-72">
    <img
      class="h-full w-full object-cover"
      src="/assets/images/bg/abstract.png"
      alt="bg"
    />
  </div>
  <main class="relative min-h-[300px]">
    <div class="container !-mt-24 max-w-[1200px] p-5 lg:!-mt-32 lg:p-8">
      <div
        class="relative flex flex-col rounded-3xl bg-white p-5 shadow-xl md:flex-row md:rounded-[40px] lg:p-8"
      >
        <div class="mt-12 w-32 flex-shrink-0 sm:mt-0 lg:w-44">
          <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-3xl">
            <img
              src="/assets/images/pp/robot.png"
              class="h-full w-full object-cover"
              alt="pp"
            />
          </div>
        </div>
        <div class="flex-grow pt-5 md:ml-6 md:pt-1 xl:ml-14">
          <div class="max-w-screen-sm">
            <h2
              class="inline-flex items-center text-2xl font-semibold sm:text-3xl lg:text-4xl"
            >
              <span>Dony Herrera</span>
              <span class="ml-2">
                <svg
                  class="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M7.66691 2.62178C8.12691 2.22845 8.88025 2.22845 9.34691 2.62178L10.4002 3.52845C10.6002 3.70178 10.9736 3.84178 11.2402 3.84178H12.3736C13.0802 3.84178 13.6602 4.42178 13.6602 5.12845V6.26178C13.6602 6.52178 13.8002 6.90178 13.9736 7.10178L14.8802 8.15512C15.2736 8.61512 15.2736 9.36845 14.8802 9.83512L13.9736 10.8884C13.8002 11.0884 13.6602 11.4618 13.6602 11.7284V12.8618C13.6602 13.5684 13.0802 14.1484 12.3736 14.1484H11.2402C10.9802 14.1484 10.6002 14.2884 10.4002 14.4618L9.34691 15.3684C8.88691 15.7618 8.13358 15.7618 7.66691 15.3684L6.61358 14.4618C6.41358 14.2884 6.04025 14.1484 5.77358 14.1484H4.62025C3.91358 14.1484 3.33358 13.5684 3.33358 12.8618V11.7218C3.33358 11.4618 3.19358 11.0884 3.02691 10.8884L2.12691 9.82845C1.74025 9.36845 1.74025 8.62178 2.12691 8.16178L3.02691 7.10178C3.19358 6.90178 3.33358 6.52845 3.33358 6.26845V5.12178C3.33358 4.41512 3.91358 3.83512 4.62025 3.83512H5.77358C6.03358 3.83512 6.41358 3.69512 6.61358 3.52178L7.66691 2.62178Z"
                    fill="#38BDF8"
                    stroke="#38BDF8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M6.08691 8.98833L7.69358 10.6017L10.9136 7.375"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </h2>
            <div
              class="mt-2.5 flex cursor-pointer items-center space-x-2.5 text-sm font-medium text-green-600"
            >
              <span class="text-gray-700">4.0xc4c16ac453sa645a...b21a </span>
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path
                  d="M18.05 9.19992L17.2333 12.6833C16.5333 15.6916 15.15 16.9083 12.55 16.6583C12.1333 16.6249 11.6833 16.5499 11.2 16.4333L9.79999 16.0999C6.32499 15.2749 5.24999 13.5583 6.06665 10.0749L6.88332 6.58326C7.04999 5.87492 7.24999 5.25826 7.49999 4.74992C8.47499 2.73326 10.1333 2.19159 12.9167 2.84993L14.3083 3.17493C17.8 3.99159 18.8667 5.71659 18.05 9.19992Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12.5498 16.6583C12.0331 17.0083 11.3831 17.3 10.5915 17.5583L9.2748 17.9917C5.96646 19.0583 4.2248 18.1667 3.1498 14.8583L2.08313 11.5667C1.01646 8.25833 1.8998 6.50833 5.20813 5.44167L6.5248 5.00833C6.86646 4.9 7.19146 4.80833 7.4998 4.75C7.2498 5.25833 7.0498 5.875 6.88313 6.58333L6.06646 10.075C5.2498 13.5583 6.3248 15.275 9.7998 16.1L11.1998 16.4333C11.6831 16.55 12.1331 16.625 12.5498 16.6583Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <span class="mt-4 block text-sm text-gray-500"
              >Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs.
              Contributing to @ether_cards, an NFT Monetization Platform.</span
            >
          </div>
          <div class="mt-4">
            <nav class="flex space-x-2.5 text-2xl text-blue-600">
              <a
                class="block flex h-7 w-7 items-center justify-center rounded-full bg-[#3B5999] text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <Icon icon="cib:facebook-f" class="text-lg" />
              </a>
              <a
                class="block flex h-7 w-7 items-center justify-center rounded-full bg-[#00ACED] text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <Icon icon="cib:twitter" class="text-lg" />
              </a>
              <a
                class="block flex h-7 w-7 items-center justify-center rounded-full bg-[#D44332] text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title="Youtube"
              >
                <Icon icon="cib:youtube" class="text-lg" />
              </a>
              <a
                class="block flex h-7 w-7 items-center justify-center rounded-full bg-[#36465D] text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
              >
                <Icon icon="cib:telegram-plane" class="text-lg" />
              </a>
            </nav>
          </div>
        </div>
        <div
          class="absolute left-5 top-4 flex flex-row-reverse justify-end sm:left-auto sm:top-5 sm:right-5 md:static"
        >
          <div class="">
            <div class="relative inline-block text-left">
              <button
                class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 md:h-10 md:w-10"
                title="More"
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  class="h-4 w-4 sm:h-5 sm:w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="relative inline-block text-left">
            <button
              class="mx-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 md:h-10 md:w-10"
              title="More"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                class="h-4 w-4 sm:h-5 sm:w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.44 8.8999C20.04 9.2099 21.51 11.0599 21.51 15.1099V15.2399C21.51 19.7099 19.72 21.4999 15.25 21.4999H8.73998C4.26998 21.4999 2.47998 19.7099 2.47998 15.2399V15.1099C2.47998 11.0899 3.92998 9.2399 7.46998 8.9099"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 15.0001V3.62012"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.35 5.85L12 2.5L8.65002 5.85"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <button
            class="relative relative z-10 inline-flex h-auto h-8 items-center justify-center rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-gray-50 transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:bg-opacity-70 sm:px-6 md:!h-10 md:py-2.5 md:text-base lg:px-8"
          >
            Follow
          </button>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div
        class="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4"
      >
        <!-- BEGIN Item #1 -->
        <div
          class="group relative flex flex-col rounded-3xl !border-0 transition-all hover:shadow-2xl"
        >
          <div class="relative flex-shrink-0">
            <div>
              <div
                class="aspect-w-11 aspect-h-12 relative z-0 z-0 flex h-0 w-full overflow-hidden rounded-3xl pb-[100%]"
              >
                <img
                  src="/assets/images/pp/robot.png"
                  class="absolute h-full w-full object-cover transition-all duration-300 group-hover:scale-[1.03]"
                  alt="img"
                />
              </div>
            </div>
            <div
              class="absolute top-3 left-3 flex !h-9 !w-9 items-center justify-center rounded-full bg-black/50 text-white"
            >
              <svg
                class="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <button
              class="absolute top-3 right-3 z-10 flex h-10 !h-9 items-center justify-center rounded-full bg-black/50 px-3.5 text-white"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="ml-2 text-sm">22</span>
            </button>
            <div class="absolute inset-x-3 top-3 flex"></div>
          </div>
          <div class="space-y-3 p-4 py-5">
            <div class="flex justify-between">
              <div class="flex -space-x-1">
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
              </div>
              <span class="text-xs text-gray-700 dark:text-gray-400"
                >85 in stock</span
              >
            </div>
            <h2 class="text-lg font-medium">CloneF #1947</h2>
            <div
              class="w-2d4 w-full border-b border-gray-100 dark:border-gray-700"
            ></div>
            <div class="flex items-end justify-between">
              <div class="pt-3">
                <div
                  class="relative flex items-baseline rounded-lg border-2 border-green-500 py-1.5 px-2.5 text-sm font-semibold sm:text-base md:py-2 md:px-3.5"
                >
                  <span
                    class="absolute bottom-full -mx-1 block translate-y-1 bg-white p-1 text-xs font-normal text-gray-500 group-hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:group-hover:bg-gray-800"
                    >Current Bid</span
                  >
                  <span class="!leading-none text-green-500">1.000 ETH</span>
                </div>
              </div>
              <div
                class="flex items-center text-sm text-gray-500 dark:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span class="ml-1 mt-0.5">5 hours left</span>
              </div>
            </div>
          </div>
          <a class="absolute inset-0" href="#"> </a>
        </div>
        <!-- EOL Item #1 -->
        <div
          class="group relative flex flex-col rounded-3xl !border-0 transition-all hover:shadow-2xl"
        >
          <div class="relative flex-shrink-0">
            <div>
              <div
                class="aspect-w-11 aspect-h-12 relative z-0 z-0 flex h-0 w-full overflow-hidden rounded-3xl pb-[100%]"
              >
                <img
                  src="/assets/images/pp/robot.png"
                  class="absolute h-full w-full object-cover transition-all duration-300 group-hover:scale-[1.03]"
                  alt="img"
                />
              </div>
            </div>
            <div
              class="absolute top-3 left-3 flex !h-9 !w-9 items-center justify-center rounded-full bg-black/50 text-white"
            >
              <svg
                class="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <button
              class="absolute top-3 right-3 z-10 flex h-10 !h-9 items-center justify-center rounded-full bg-black/50 px-3.5 text-white"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="ml-2 text-sm">22</span>
            </button>
            <div class="absolute inset-x-3 top-3 flex"></div>
          </div>
          <div class="space-y-3 p-4 py-5">
            <div class="flex justify-between">
              <div class="flex -space-x-1">
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
              </div>
              <span class="text-xs text-gray-700 dark:text-gray-400"
                >85 in stock</span
              >
            </div>
            <h2 class="text-lg font-medium">CloneF #1947</h2>
            <div
              class="w-2d4 w-full border-b border-gray-100 dark:border-gray-700"
            ></div>
            <div class="flex items-end justify-between">
              <div class="pt-3">
                <div
                  class="relative flex items-baseline rounded-lg border-2 border-green-500 py-1.5 px-2.5 text-sm font-semibold sm:text-base md:py-2 md:px-3.5"
                >
                  <span
                    class="absolute bottom-full -mx-1 block translate-y-1 bg-white p-1 text-xs font-normal text-gray-500 group-hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:group-hover:bg-gray-800"
                    >Current Bid</span
                  >
                  <span class="!leading-none text-green-500">1.000 ETH</span>
                </div>
              </div>
              <div
                class="flex items-center text-sm text-gray-500 dark:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span class="ml-1 mt-0.5">5 hours left</span>
              </div>
            </div>
          </div>
          <a class="absolute inset-0" href="#"> </a>
        </div>
        <div
          class="group relative flex flex-col rounded-3xl !border-0 transition-all hover:shadow-2xl"
        >
          <div class="relative flex-shrink-0">
            <div>
              <div
                class="aspect-w-11 aspect-h-12 relative z-0 z-0 flex h-0 w-full overflow-hidden rounded-3xl pb-[100%]"
              >
                <img
                  src="/assets/images/pp/robot.png"
                  class="absolute h-full w-full object-cover transition-all duration-300 group-hover:scale-[1.03]"
                  alt="img"
                />
              </div>
            </div>
            <div
              class="absolute top-3 left-3 flex !h-9 !w-9 items-center justify-center rounded-full bg-black/50 text-white"
            >
              <svg
                class="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <button
              class="absolute top-3 right-3 z-10 flex h-10 !h-9 items-center justify-center rounded-full bg-black/50 px-3.5 text-white"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="ml-2 text-sm">22</span>
            </button>
            <div class="absolute inset-x-3 top-3 flex"></div>
          </div>
          <div class="space-y-3 p-4 py-5">
            <div class="flex justify-between">
              <div class="flex -space-x-1">
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
              </div>
              <span class="text-xs text-gray-700 dark:text-gray-400"
                >85 in stock</span
              >
            </div>
            <h2 class="text-lg font-medium">CloneF #1947</h2>
            <div
              class="w-2d4 w-full border-b border-gray-100 dark:border-gray-700"
            ></div>
            <div class="flex items-end justify-between">
              <div class="pt-3">
                <div
                  class="relative flex items-baseline rounded-lg border-2 border-green-500 py-1.5 px-2.5 text-sm font-semibold sm:text-base md:py-2 md:px-3.5"
                >
                  <span
                    class="absolute bottom-full -mx-1 block translate-y-1 bg-white p-1 text-xs font-normal text-gray-500 group-hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:group-hover:bg-gray-800"
                    >Current Bid</span
                  >
                  <span class="!leading-none text-green-500">1.000 ETH</span>
                </div>
              </div>
              <div
                class="flex items-center text-sm text-gray-500 dark:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span class="ml-1 mt-0.5">5 hours left</span>
              </div>
            </div>
          </div>
          <a class="absolute inset-0" href="#"> </a>
        </div>
        <div
          class="group relative flex flex-col rounded-3xl !border-0 transition-all hover:shadow-2xl"
        >
          <div class="relative flex-shrink-0">
            <div>
              <div
                class="aspect-w-11 aspect-h-12 relative z-0 z-0 flex h-0 w-full overflow-hidden rounded-3xl pb-[100%]"
              >
                <img
                  src="/assets/images/pp/robot.png"
                  class="absolute h-full w-full object-cover transition-all duration-300 group-hover:scale-[1.03]"
                  alt="img"
                />
              </div>
            </div>
            <div
              class="absolute top-3 left-3 flex !h-9 !w-9 items-center justify-center rounded-full bg-black/50 text-white"
            >
              <svg
                class="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <button
              class="absolute top-3 right-3 z-10 flex h-10 !h-9 items-center justify-center rounded-full bg-black/50 px-3.5 text-white"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="ml-2 text-sm">22</span>
            </button>
            <div class="absolute inset-x-3 top-3 flex"></div>
          </div>
          <div class="space-y-3 p-4 py-5">
            <div class="flex justify-between">
              <div class="flex -space-x-1">
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
              </div>
              <span class="text-xs text-gray-700 dark:text-gray-400"
                >85 in stock</span
              >
            </div>
            <h2 class="text-lg font-medium">CloneF #1947</h2>
            <div
              class="w-2d4 w-full border-b border-gray-100 dark:border-gray-700"
            ></div>
            <div class="flex items-end justify-between">
              <div class="pt-3">
                <div
                  class="relative flex items-baseline rounded-lg border-2 border-green-500 py-1.5 px-2.5 text-sm font-semibold sm:text-base md:py-2 md:px-3.5"
                >
                  <span
                    class="absolute bottom-full -mx-1 block translate-y-1 bg-white p-1 text-xs font-normal text-gray-500 group-hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:group-hover:bg-gray-800"
                    >Current Bid</span
                  >
                  <span class="!leading-none text-green-500">1.000 ETH</span>
                </div>
              </div>
              <div
                class="flex items-center text-sm text-gray-500 dark:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span class="ml-1 mt-0.5">5 hours left</span>
              </div>
            </div>
          </div>
          <a class="absolute inset-0" href="#"> </a>
        </div>
        <div
          class="group relative flex flex-col rounded-3xl !border-0 transition-all hover:shadow-2xl"
        >
          <div class="relative flex-shrink-0">
            <div>
              <div
                class="aspect-w-11 aspect-h-12 relative z-0 z-0 flex h-0 w-full overflow-hidden rounded-3xl pb-[100%]"
              >
                <img
                  src="/assets/images/pp/robot.png"
                  class="absolute h-full w-full object-cover transition-all duration-300 group-hover:scale-[1.03]"
                  alt="img"
                />
              </div>
            </div>
            <div
              class="absolute top-3 left-3 flex !h-9 !w-9 items-center justify-center rounded-full bg-black/50 text-white"
            >
              <svg
                class="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <button
              class="absolute top-3 right-3 z-10 flex h-10 !h-9 items-center justify-center rounded-full bg-black/50 px-3.5 text-white"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="ml-2 text-sm">22</span>
            </button>
            <div class="absolute inset-x-3 top-3 flex"></div>
          </div>
          <div class="space-y-3 p-4 py-5">
            <div class="flex justify-between">
              <div class="flex -space-x-1">
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
              </div>
              <span class="text-xs text-gray-700 dark:text-gray-400"
                >85 in stock</span
              >
            </div>
            <h2 class="text-lg font-medium">CloneF #1947</h2>
            <div
              class="w-2d4 w-full border-b border-gray-100 dark:border-gray-700"
            ></div>
            <div class="flex items-end justify-between">
              <div class="pt-3">
                <div
                  class="relative flex items-baseline rounded-lg border-2 border-green-500 py-1.5 px-2.5 text-sm font-semibold sm:text-base md:py-2 md:px-3.5"
                >
                  <span
                    class="absolute bottom-full -mx-1 block translate-y-1 bg-white p-1 text-xs font-normal text-gray-500 group-hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:group-hover:bg-gray-800"
                    >Current Bid</span
                  >
                  <span class="!leading-none text-green-500">1.000 ETH</span>
                </div>
              </div>
              <div
                class="flex items-center text-sm text-gray-500 dark:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span class="ml-1 mt-0.5">5 hours left</span>
              </div>
            </div>
          </div>
          <a class="absolute inset-0" href="#"> </a>
        </div>
        <div
          class="group relative flex flex-col rounded-3xl !border-0 transition-all hover:shadow-2xl"
        >
          <div class="relative flex-shrink-0">
            <div>
              <div
                class="aspect-w-11 aspect-h-12 relative z-0 z-0 flex h-0 w-full overflow-hidden rounded-3xl pb-[100%]"
              >
                <img
                  src="/assets/images/pp/robot.png"
                  class="absolute h-full w-full object-cover transition-all duration-300 group-hover:scale-[1.03]"
                  alt="img"
                />
              </div>
            </div>
            <div
              class="absolute top-3 left-3 flex !h-9 !w-9 items-center justify-center rounded-full bg-black/50 text-white"
            >
              <svg
                class="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <button
              class="absolute top-3 right-3 z-10 flex h-10 !h-9 items-center justify-center rounded-full bg-black/50 px-3.5 text-white"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="ml-2 text-sm">22</span>
            </button>
            <div class="absolute inset-x-3 top-3 flex"></div>
          </div>
          <div class="space-y-3 p-4 py-5">
            <div class="flex justify-between">
              <div class="flex -space-x-1">
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
                <div
                  class="wil-avatar relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold uppercase text-gray-100 shadow-inner ring-2 ring-white dark:ring-gray-900"
                >
                  <img
                    class="absolute inset-0 h-full w-full rounded-full object-cover"
                    src="/assets/images/pp/robot.png"
                    alt="John Doe"
                  />
                </div>
              </div>
              <span class="text-xs text-gray-700 dark:text-gray-400"
                >85 in stock</span
              >
            </div>
            <h2 class="text-lg font-medium">CloneF #1947</h2>
            <div
              class="w-2d4 w-full border-b border-gray-100 dark:border-gray-700"
            ></div>
            <div class="flex items-end justify-between">
              <div class="pt-3">
                <div
                  class="relative flex items-baseline rounded-lg border-2 border-green-500 py-1.5 px-2.5 text-sm font-semibold sm:text-base md:py-2 md:px-3.5"
                >
                  <span
                    class="absolute bottom-full -mx-1 block translate-y-1 bg-white p-1 text-xs font-normal text-gray-500 group-hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:group-hover:bg-gray-800"
                    >Current Bid</span
                  >
                  <span class="!leading-none text-green-500">1.000 ETH</span>
                </div>
              </div>
              <div
                class="flex items-center text-sm text-gray-500 dark:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span class="ml-1 mt-0.5">5 hours left</span>
              </div>
            </div>
          </div>
          <a class="absolute inset-0" href="#"> </a>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
