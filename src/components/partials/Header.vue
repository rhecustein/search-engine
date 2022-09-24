<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import VuePictureCropper, { cropper } from "vue-picture-cropper";

// ref
const showMenu = ref(false);
const dropdown1Open = ref(false);

const inpLogoUpload = ref<HTMLInputElement | null>(null);
const inpLogoState = ref<string>("");
const showCropper = ref(false);
const showSettings = ref(false);
const showSettingsLogo = ref(false);

// function
const toggleShowMenu = () => {
  showMenu.value = !showMenu.value;
};
const toggleShowSettings = () => {
  showSettings.value = !showSettings.value;
};

const toggleShowSettingsLogo = () => {
  if (showSettings.value) showSettings.value = false;
  showSettingsLogo.value = !showSettingsLogo.value;
};

// cropper
const selectFileLogo = (e: Event): void => {
  inpLogoState.value = "";
  const target = e.target as HTMLInputElement;
  const { files } = target;
  if (!files) return;
  const file: File = files[0];
  const reader: FileReader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (): void => {
    inpLogoState.value = String(reader.result);
    showSettingsLogo.value = false;
    showCropper.value = true;
    if (!inpLogoUpload.value) return;
    inpLogoUpload.value.value = "";
  };
};

const btnCropLogo = async (): Promise<void> => {
  const base64: string = cropper.getDataURL();
  window.localStorage.setItem("asLogo", base64);
  inpLogoState.value = base64;
  showCropper.value = false;
  window.location.reload();
};

const btnResetLogo = async (): Promise<void> => {
  window.localStorage.setItem("asLogo", "");
  inpLogoState.value = "";
  showSettingsLogo.value = false;
  window.location.reload();
};
</script>

<template>
  <header class="py-2 px-3 font-sans lg:px-0">
    <div
      class="header-wrapper relative z-40 flex w-full items-center justify-between"
    >
      <router-link to="/" class="flex items-center gap-2">
        <img
          src="/assets/images/logo/Autobot_Circle.png"
          class="h-[48px] w-[48px]"
          alt="Autobot Search"
        />
        <h1 class="font-inter text-lg font-light text-gray-800 lg:text-2xl font-extrabold">
          Autobot Search
        </h1>
      </router-link>
      <button
        class="group flex h-[48px] w-[48px] items-center justify-center rounded-full bg-gray-200 outline-none outline-none lg:hidden"
        @click="toggleShowMenu()"
      >
        <Icon
          icon="fe:app-menu"
          class="text-3xl text-gray-600 transition-all group-hover:text-black"
        />
      </button>
      <div class="hidden gap-2 lg:flex">
        <div class="relative text-gray-800">
          <div
            class="group flex cursor-pointer items-center justify-between gap-2 rounded-full px-5 py-2 transition-all hover:bg-gray-200"
            @mouseover="dropdown1Open = !dropdown1Open"
            @focusin="dropdown1Open = !dropdown1Open"
          >
            <span>Discover</span>
            <Icon
              icon="fe:arrow-down"
              class="text-gray-400 transition-all duration-500 group-hover:-rotate-180"
            />
          </div>
          <div
            v-if="dropdown1Open"
            class="absolute top-14 left-0 z-[9999] w-[250px] rounded-xl border border-gray-200 bg-white p-3 shadow-lg"
            @mouseleave="dropdown1Open = !dropdown1Open"
            @focusout="dropdown1Open = !dropdown1Open"
          >
            <ul class="text-light flex flex-col">
              <li class="group transition-all hover:bg-gray-200">
                <a
                  href="#"
                  class="link inline-block w-full p-2 group-hover:underline lg:pl-12"
                  >MENU #1</a
                >
              </li>
              <li class="group transition-all hover:bg-gray-200">
                <a
                  href="#"
                  class="link inline-block w-full p-2 group-hover:underline lg:pl-12"
                  >MENU #2</a
                >
              </li>
              <li class="group transition-all hover:bg-gray-200">
                <a
                  href="#"
                  class="link inline-block w-full p-2 group-hover:underline lg:pl-12"
                  >MENU #3</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="relative text-gray-800">
          <div
            class="group flex cursor-pointer items-center justify-between gap-2 rounded-full px-5 py-2 transition-all hover:bg-gray-200"
          >
            <span>Help Center</span>
          </div>
        </div>
        <div class="relative text-gray-800">
          <button
            class="group flex items-center justify-center outline-none"
            @click="toggleShowSettings()"
          >
            <Icon
              icon="ic:baseline-settings"
              class="text-3xl text-gray-600 transition-all group-hover:text-black"
            />
          </button>
        </div>
      </div>
    </div>
    <!-- BEGIN Mobile Menu -->
    <div
      id="menu"
      class="fixed top-0 right-0 bottom-0 z-[9999] flex h-full w-[360px] max-w-[100%] flex-col overflow-y-auto border-r border-gray-200 bg-gray-100 shadow-xl transition-all duration-500"
      :class="!showMenu && 'translate-x-full'"
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
            class="link inline-block w-full p-5 group-hover:underline lg:pl-12"
            @click="
              showMenu = false;
              toggleShowSettings();
            "
            >Preferensi</a
          >
        </li>
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
    <!-- EOL Mobile Menu -->
  </header>
  <!-- BEGIN Modal Settings -->
  <div
    v-if="showSettings"
    class="fixed top-0 left-0 z-[9980] flex h-screen w-screen items-center justify-center bg-black/[.5] p-3"
  >
    <div
      class="relative flex w-full max-w-[720px] flex-col justify-center rounded-xl bg-white p-5 shadow"
    >
      <button
        class="absolute top-0 right-0 flex h-[36px] w-[36px] translate-y-2 -translate-x-2 items-center justify-center rounded-full bg-red-600 text-white outline-none"
        @click="showSettings = false"
      >
        <Icon icon="fe:close" class="text-xl" />
      </button>
      <h5 class="mt-2 mb-4 ml-1 text-left text-lg font-bold">Settings</h5>
      <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <button
          class="flex h-[140px] w-full flex-col items-center justify-center bg-pastel-blue text-xl outline-none transition-all duration-500 hover:bg-pastel-lightblue"
          @click="toggleShowSettingsLogo"
        >
          Ganti Logo
        </button>
        <button
          class="flex h-[140px] w-full flex-col items-center justify-center bg-pastel-blue text-xl outline-none transition-all duration-500 hover:bg-pastel-lightblue"
          @click="toggleShowSettingsLogo"
        >
          Ganti Logo
        </button>
        <button
          class="flex h-[140px] w-full flex-col items-center justify-center bg-pastel-blue text-xl outline-none transition-all duration-500 hover:bg-pastel-lightblue"
          @click="toggleShowSettingsLogo"
        >
          Ganti Logo
        </button>
        <button
          class="flex h-[140px] w-full flex-col items-center justify-center bg-pastel-blue text-xl outline-none transition-all duration-500 hover:bg-pastel-lightblue"
          @click="toggleShowSettingsLogo"
        >
          Ganti Logo
        </button>
        <button
          class="flex h-[140px] w-full flex-col items-center justify-center bg-pastel-blue text-xl outline-none transition-all duration-500 hover:bg-pastel-lightblue"
          @click="toggleShowSettingsLogo"
        >
          Ganti Logo
        </button>
      </div>
    </div>
  </div>
  <!-- BEGIN Modal Cropper -->
  <!-- BEGIN Modal Settings Logo -->
  <div
    v-if="showSettingsLogo"
    class="fixed top-0 left-0 z-[9980] flex h-screen w-screen items-center justify-center bg-black/[.5] p-3"
  >
    <div
      class="relative flex w-full max-w-[720px] flex-col justify-center rounded-xl bg-white p-5 shadow"
    >
      <button
        class="absolute top-0 right-0 flex h-[36px] w-[36px] translate-y-2 -translate-x-2 items-center justify-center rounded-full bg-red-600 text-white outline-none"
        @click="showSettingsLogo = false"
      >
        <Icon icon="fe:close" class="text-xl" />
      </button>
      <h5 class="mt-2 mb-4 ml-1 text-left text-lg font-bold">Informasi</h5>
      <p class="mb-4 leading-relaxed tracking-wide">
        Setting berikut hanya merubah Homepage.
      </p>
      <input
        ref="inpLogoUpload"
        type="file"
        accept="image/jpg, image/jpeg, image/png, image/gif"
        class="hidden"
        @change="selectFileLogo"
      />
      <div class="grid grid-cols-2 gap-4">
        <button
          class="col-span-full flex items-center justify-center gap-2 rounded border border-pastel-blue bg-pastel-blue px-5 py-2 font-serif font-bold text-black outline-none transition-all duration-500 hover:invert-[.25]"
          @click="inpLogoUpload!.click()"
        >
          <Icon icon="fe:picture" class="text-xl" />
          PILIH FILE
        </button>
        <button
          class="flex items-center justify-center rounded border border-pastel-red bg-pastel-red px-5 py-2 font-serif font-bold text-black outline-none transition-all duration-500 hover:invert-[.25]"
          @click="btnResetLogo"
        >
          RESET
        </button>
        <button
          class="flex items-center justify-center rounded border border-pastel-blue bg-white px-5 py-2 font-serif font-bold text-black outline-none transition-all duration-500 hover:invert-[.25]"
          @click="showSettingsLogo = false"
        >
          BATAL
        </button>
      </div>
    </div>
  </div>
  <!-- EOL Modal Settings Logo -->
  <div
    v-if="showCropper"
    class="fixed top-0 left-0 z-[9980] flex h-screen w-screen items-center justify-center bg-black/[.5] p-3"
  >
    <div
      class="flex w-full max-w-[720px] flex-col justify-center rounded-xl bg-white shadow"
    >
      <div class="m-5">
        <vue-picture-cropper
          :box-style="{
            width: '60%',
            height: '60%',
            backgroundColor: '#888888',
            margin: 'auto',
          }"
          :img="inpLogoState"
          :options="{
            viewMode: 1,
            dragMode: 'crop',
            aspectRatio: 1 / 1,
          }"
          class="mx-auto"
        />
      </div>
      <div class="mb-4 flex items-center justify-center gap-4">
        <button
          class="flex items-center justify-center rounded border border-pastel-blue bg-pastel-blue px-5 py-2 font-serif font-bold text-black outline-none transition-all duration-500 hover:invert-[.25]"
          @click="btnCropLogo"
        >
          SIMPAN
        </button>
        <button
          class="flex items-center justify-center rounded border border-pastel-blue bg-white px-5 py-2 font-serif font-bold text-black outline-none transition-all duration-500 hover:invert-[.25]"
          @click="
            inpLogoState = '';
            showCropper = false;
          "
        >
          BATAL
        </button>
      </div>
    </div>
  </div>
  <!-- BEGIN Modal Cropper -->
</template>
