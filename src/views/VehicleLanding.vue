<template>
  <div class="vehicle-landing" v-if="vehicleData">
    <VehicleHeader
      :logo="require('@/assets/images/logo.png')"
      storeName="AutoForce Seminovos"
    />

    <!-- Exibe as imagens do veículo -->
    <VehicleGallery :images="staticVehicleImages" />

    <VehicleList />
    <VehicleInfo
      :vehicle="vehicleData"
      :vehicleImages="vehicleImages"
      :title="'PROMOÇÃO DO DIA'"
    />
    <ContactSection />
    <MainFooter />
    <WhatsAppButton
      :phone="'75999943121'"
      :message="'Olá, você foi aprovado, parabéns'"
    />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import VehicleHeader from "@/components/organisms/VehicleHeader.vue";
import VehicleGallery from "@/components/organisms/VehicleGallery.vue";
import VehicleInfo from "@/components/organisms/VehicleInfo.vue";
import ContactSection from "@/components/organisms/ContactSection.vue";
import VehicleList from "@/components/organisms/VehicleList.vue";
import MainFooter from "@/components/organisms/MainFooter.vue";
import WhatsAppButton from "@/components/molecules/WhatsAppButton.vue";

export default {
  name: "VehicleLanding",
  components: {
    VehicleHeader,
    VehicleGallery,
    VehicleInfo,
    ContactSection,
    VehicleList,
    MainFooter,
    WhatsAppButton,
  },
  data() {
    return {
      vehicleData: null,
      vehicleImages: [],
      title: "",
      staticVehicleImages: [
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
        console.log("Vehicle Data:", this.vehicleData);

        this.vehicleImages = this.vehicleData.images_url.map((imageUrl) =>
          require(`@/assets/images/${imageUrl}`),
        );
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
