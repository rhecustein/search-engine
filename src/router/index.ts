import { createWebHistory, createRouter } from "vue-router";
import About from "@/src/views/About.vue";
import AlatKeren from "@/src/views/AlatKeren/index.vue";
import BarangDagangan from "@/src/views/BarangDagangan.vue";
import Cari from "@/src/views/Cari.vue";
import Donate from "@/src/views/Donate.vue";
import Home from "@/src/views/Home.vue";
import OpenSource from "@/src/views/OpenSource.vue";
import Peta from "@/src/views/Peta.vue";
import TentangKami from "@/src/views/TentangKami.vue";
import TermsCondition from "@/src/views/TermsCondition.vue";
import Warung from "@/src/views/Warung.vue";

import TestPage from "@/src/views/TestPage.vue";

import Login from "@/src/views/user/Login.vue";
import Register from "@/src/views/user/Register.vue";
import TwoStep from "@/src/views/user/TwoStep.vue";
import LupaPassword from "@/src/views/user/LupaPassword.vue";
import ResetPassword from "@/src/views/user/ResetPassword.vue";

const routes = [
  /*
  {
    path: "/blank-page",
    name: "Blank Template",
    component: CustomPageTemplate,
  },
  */
  {
    path: "/ttt",
    name: "Test Page",
    component: TestPage,
  },
  {
    path: "/cari/:searchQuery?",
    name: "Halaman Pencarian",
    component: Cari,
    props: (route: any) => {
      const searchQuery = route.params.searchQuery;
      return { searchQuery };
    },
  },
  {
    path: "/alat-keren",
    name: "Halaman Alat Keren",
    component: AlatKeren,
  },
  {
    path: "/",
    name: "Home Default",
    component: Home,
  },
  {
    path: "/about",
    name: "About Page",
    component: About,
  },
  {
    path: "/barang-dagangan",
    name: "Halaman Barang Dagangan",
    component: BarangDagangan,
  },
  {
    path: "/tentang-kami",
    name: "Halaman Tentang Kami",
    component: TentangKami,
  },
  {
    path: "/peta",
    name: "Halaman Peta",
    component: Peta,
  },
  {
    path: "/open-source",
    name: "Halaman Open Source",
    component: OpenSource,
  },
  {
    path: "/donate",
    name: "Halaman Donate",
    component: Donate,
  },
  {
    path: "/warung",
    name: "Halaman Warung",
    component: Warung,
  },
  {
    path: "/terms-and-condition",
    name: "Halaman Terms Condition",
    component: TermsCondition,
  },
  {
    path: "/login",
    name: "Halaman Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Halaman Register",
    component: Register,
  },
  {
    path: "/two-step",
    name: "Halaman Two Step",
    component: TwoStep,
  },
  {
    path: "/lupa-password",
    name: "Halaman Lupa Password",
    component: LupaPassword,
  },
  {
    path: "/reset-password",
    name: "Halaman Reset Password",
    component: ResetPassword,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound 404",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
