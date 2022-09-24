import { createApp } from "vue";
import ScriptX from "vue-scriptx";
import Ads from "vue-google-adsense";
import router from "./router";
// import './style.css'
import App from "./App.vue";
import "./tailwind.css";

const app = createApp(App);
app.use(ScriptX);
app.use(Ads.Adsense);
app.use(router);
app.mount("#app");
