<template>
  <div class="vehicle-landing" v-if="vehicleData">
    <VehicleHeader
      :logo="require('@/assets/images/logo.png')"
      storeName="AutoForce Seminovos"
    />

    <VehicleGallery :images="vehicleImages" />
    <VehicleList />
    <VehiclePromotion :vehicle="vehicleData" />
    <ContactSection />
    <MainFooter />
    <WhatsAppButton :phone="'75999943121'" :message="'Olá, isso é um teste'" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import VehicleHeader from "@/components/organisms/VehicleHeader.vue";
import VehicleGallery from "@/components/organisms/VehicleGallery.vue";
import VehiclePromotion from "@/components/organisms/VehiclePromotion.vue";
import ContactSection from "@/components/organisms/ContactSection.vue";
import VehicleList from "@/components/organisms/VehicleList.vue";
import MainFooter from "@/components/organisms/MainFooter.vue";
import WhatsAppButton from "@/components/molecules/WhatsAppButton.vue";

export default {
  name: "VehicleLanding",
  components: {
    VehicleHeader,
    VehicleGallery,
    VehiclePromotion,
    ContactSection,
    VehicleList,
    MainFooter,
    WhatsAppButton,
  },
  data() {
    return {
      vehicleData: null,
      vehicleImages: [
        require("@/assets/images/car1.jpg"),
        require("@/assets/images/car2.jpg"),
        require("@/assets/images/car3.jpg"),
        require("@/assets/images/car4.jpg"),
        require("@/assets/images/car5.jpg"),
        require("@/assets/images/car6.jpg"),
        require("@/assets/images/car7.jpg"),
        require("@/assets/images/car8.jpg"),
        require("@/assets/images/car9.jpg"),
        require("@/assets/images/car10.jpg"),
        require("@/assets/images/car11.jpg"),
      ],
    };
  },
  mounted() {
    this.fetchVehicleData();
  },
  methods: {
    async fetchVehicleData() {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/vehicle/promotion",
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        this.vehicleData = data;

        if (this.vehicleData.image_url) {
          this.vehicleData.image = require(
            `@/assets/images/${this.vehicleData.image_url}`,
          );
        }
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
      }
    },
  },
};
</script>

<style scoped>
.vehicle-landing {
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

@media (min-width: 768px) {
  .vehicle-landing {
    padding: 1.5rem;
  }
}
</style>
