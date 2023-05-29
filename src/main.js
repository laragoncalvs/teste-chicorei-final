import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiMenu, BiHandbagFill } from "oh-vue-icons/icons"
import { IoClose } from "oh-vue-icons/icons";

import { vMaska } from "maska"

addIcons(HiMenu, BiHandbagFill,IoClose)

const app = createApp(App)
app.component("v-icon", OhVueIcon)
app.use(router)
app.mount('#app')
app.directive("maska", vMaska)