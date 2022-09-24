<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

// ref
const showMenu = ref(false);

// function
const toggleShowMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <header class="w-full border-b border-gray-200 shadow">
    <div class="flex items-center justify-between p-2.5">
      <!-- BEGIN LEFT Side -->
      <div class="flex items-center gap-4">
        <button
          class="group flex h-[48px] w-[48px] items-center justify-center rounded-full bg-gray-200 outline-none"
          @click="toggleShowMenu()"
        >
          <Icon
            icon="fe:app-menu"
            class="text-3xl text-gray-600 transition-all group-hover:text-black"
          />
        </button>
        <div>
          <router-link to="/">
            <h1 class="text-gray-800 lg:text-xl">Autobot Search Engine</h1>
          </router-link>
        </div>
      </div>
      <!-- EOL LEFT Side -->
      <!-- BEGIN RIGHT Side -->
      <div class="hidden lg:block">Lorem</div>
      <!-- EOL RIGHT Side -->
    </div>
    <!-- BEGIN Menu -->
    <div
      id="menu"
      class="fixed top-0 left-0 bottom-0 z-[9999] flex h-full w-[360px] flex-col overflow-y-auto border-r border-gray-200 bg-gray-100 shadow-xl transition-all duration-500"
      :class="!showMenu && '-translate-x-full'"
    >
      <div class="shoadow flex justify-between bg-white p-5">
        <h1 class="text-2xl text-gray-800">MENU</h1>
        <button
          class="group flex items-center justify-center outline-none"
          @click="toggleShowMenu()"
        >
          <Icon
            icon="fe:close"
            class="text-3xl text-gray-600 transition-all group-hover:text-black"
          />
        </button>
      </div>
      <ul class="flex flex-col">
        <li class="group transition-all hover:bg-gray-200">
          <a
            href="#"
            class="link inline-block w-full p-5 group-hover:underline lg:pl-12"
            >MENU #1</a
          >
        </li>
        <li class="group transition-all hover:bg-gray-200">
          <a
            href="#"
            class="link inline-block w-full p-5 group-hover:underline lg:pl-12"
            >MENU #2</a
          >
        </li>
        <li class="group transition-all hover:bg-gray-200">
          <a
            href="#"
            class="link inline-block w-full p-5 group-hover:underline lg:pl-12"
            >MENU #3</a
          >
        </li>
      </ul>
    </div>
    <!-- EOL Menu -->
  </header>
</template>
