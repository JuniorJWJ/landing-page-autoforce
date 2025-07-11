<template>
  <div class="vehicle-landing">
    <VehicleHeader
      :logo="require('@/assets/images/logo.png')"
      storeName="AutoForce Seminovos"
    />

    <VehicleGallery :images="vehicleImages" />
    <VehicleList />
    <VehicleInfoSection :vehicle="vehicleData" />
    <ContactSection />
    <MainFooter />
    <WhatsAppButton :phone="'75999943121'" :message="'Olá, isso é um teste'" />
  </div>
</template>

<script>
import VehicleHeader from "@/components/organisms/VehicleHeader.vue";
import VehicleGallery from "@/components/organisms/VehicleGallery.vue";
import VehicleInfoSection from "@/components/organisms/VehicleInfoSection.vue";
import ContactSection from "@/components/organisms/ContactSection.vue";
import VehicleList from "@/components/organisms/VehicleList.vue";
import MainFooter from "@/components/organisms/MainFooter.vue";
import WhatsAppButton from "@/components/molecules/WhatsAppButton.vue";

export default {
  name: "VehicleLanding",
  components: {
    VehicleHeader,
    VehicleGallery,
    VehicleInfoSection,
    ContactSection,
    VehicleList,
    MainFooter,
    WhatsAppButton,
  },
  data() {
    return {
      vehicleData: {
        brand: "Chevrolet",
        model: "Onix Premier",
        year: "2022/2023",
        color: "Prata",
        mileage: "25.000 km",
        price: "R$ 65.990",
        installment: "48x de R$ 1.375",
        fuelType: "Flex",
        transmission: "Automático",
        plateEnd: "7",
        image: require("@/assets/images/carro.jpg"),
      },
      vehicleImages: [
        require("@/assets/images/car1.jpg"),
        require("@/assets/images/car2.jpg"),
        require("@/assets/images/car3.jpg"),
        require("@/assets/images/car4.jpg"),
        require("@/assets/images/car5.jpg"),
        require("@/assets/images/car6.jpg"),
        require("@/assets/images/car7.jpg"),
        require("@/assets/images/car8.jpg"),
        require("@/assets/images/car7.jpg"),
        require("@/assets/images/car8.jpg"),
        require("@/assets/images/car7.jpg"),
        require("@/assets/images/car8.jpg"),
      ],
    };
  },
};
</script>
<style scoped>
.vehicle-landing {
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
