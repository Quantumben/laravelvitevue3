import { createApp } from "vue";
import App from "./components/App.vue";

const app = createApp({});

app.component("MyComponent", App);
app.mount("#app");