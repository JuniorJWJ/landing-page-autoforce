import { createRouter, createWebHistory } from "vue-router";

// Importando os componentes das páginas
import VehicleLanding from "../views/VehicleLanding.vue";
import VehicleDetail from "../views/VehicleDetail.vue";

const routes = [
  {
    path: "/",
    name: "VehicleLanding",
    component: VehicleLanding,
  },
  {
    path: "/vehicledetail/:id",
    name: "VehicleDetail",
    component: VehicleDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
