import { createRouter, createWebHistory } from 'vue-router'

import Building from  "../views/Building.vue"
import Room from "../views/Room.vue"

const routes = [
  {
    path: "/",
    name: "Building",
    component: Building
  },
  {
    path: "/room",
    name: "Room",
    component: Room
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
