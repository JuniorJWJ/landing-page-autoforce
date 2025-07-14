<template>
  <div class="vehicle-landing" v-if="vehicleData">
    <VehicleHeader
      :logo="require('@/assets/images/logo.png')"
      storeName="AutoForce Seminovos"
    />

    <VehicleInfo
      :vehicle="vehicleData"
      :vehicleImages="vehicleImages"
      :title="vehicleData.brand + ' ' + vehicleData.model"
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
import VehicleInfo from "@/components/organisms/VehicleInfo.vue";
import ContactSection from "@/components/organisms/ContactSection.vue";
import MainFooter from "@/components/organisms/MainFooter.vue";
import WhatsAppButton from "@/components/molecules/WhatsAppButton.vue";

export default {
  name: "VehicleDetail",
  components: {
    VehicleHeader,
    VehicleInfo,
    ContactSection,
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
      ],
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.fetchVehicleData();
  },
  watch: {
    id(newId) {
      this.fetchVehicleData(newId);
    },
  },
  methods: {
    async fetchVehicleData() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/vehicles/${this.id}`,
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
