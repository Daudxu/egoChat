import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueSocketIO from "vue-3-socket.io";

const socketObj = new VueSocketIO({
  debug: true,
  connection: "http://metinseylan.com:1992",
});

createApp(App).use(socketObj).use(store).use(router).mount("#app");
