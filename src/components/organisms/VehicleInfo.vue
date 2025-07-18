<template>
  <section class="vehicle-info">
    <BaseButton
      class="promo-badge"
      size="small"
      color="var(--color-danger)"
      text-color="var(--color-text-light)"
      border-radius="20px"
    >
      {{ title }}
    </BaseButton>

    <div class="vehicle-content">
      <div class="vehicle-image-column">
        <div class="vehicle-image">
          <VehicleGallery :images="vehicleImages" />
        </div>
      </div>

      <div class="vehicle-info-column">
        <h2 class="section-title">{{ vehicle.brand }} {{ vehicle.model }}</h2>

        <div class="info-grid">
          <InfoCard
            v-for="(item, index) in infoItems"
            :key="index"
            :label="item.label"
            :value="item.value"
          />
        </div>
      </div>
    </div>

    <div class="price-section">
      <div class="price-label">Preço</div>
      <div class="price-value">{{ vehicle.price }}</div>
      <div class="installment">ou {{ vehicle.installment }}</div>
      <BaseButton
        color="red"
        size="small"
        width="20%"
        @click="redirectToWhatsApp"
      >
        COMPRAR AGORA
      </BaseButton>
    </div>
  </section>
</template>

<script>
import InfoCard from "@/components/molecules/InfoCard.vue";
import BaseButton from "../atoms/BaseButton.vue";
import VehicleGallery from "./VehicleGallery.vue";

export default {
  name: "VehicleInfoSection",
  components: { InfoCard, BaseButton, VehicleGallery },
  props: {
    vehicle: {
      type: Object,
      required: true,
      default: () => ({
        brand: "",
        model: "",
        year: "",
        color: "",
        mileage: "",
        price: "",
        installment: "",
        images_url: [],
        badges: [],
      }),
    },
    vehicleImages: Array,
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    infoItems() {
      return [
        { label: "Ano", value: this.vehicle.year },
        { label: "Cor", value: this.vehicle.color },
        { label: "Quilometragem", value: this.vehicle.mileage },
        { label: "Combustível", value: this.vehicle.fuelType || "Flex" },
        { label: "Câmbio", value: this.vehicle.transmission || "Manual" },
        { label: "Final da Placa", value: this.vehicle.plate_end || "" },
      ];
    },
  },
  methods: {
    redirectToWhatsApp() {
      const { brand, model, price, year } = this.vehicle;
      const phoneNumber = "5575999943121";
      const message = `Olá, Fiquei interessado no ${brand} ${model} ${year} por ${price}.`;

      const encodedMessage = encodeURIComponent(message);

      window.open(
        `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
        "_blank",
      );
    },
  },
};
</script>

<style scoped>
.vehicle-info {
  background: var(--color-tertiary);
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
}

.promo-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1.5rem;
  background-color: var(--color-danger);
  color: var(--color-text-light) !important;
  border-radius: 20px;
  z-index: 10;
  box-shadow: var(--shadow-sm);

  max-width: 90%;
  white-space: nowrap;
  text-align: center;
  margin-bottom: 1rem;
}

.vehicle-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
}

.vehicle-image-column {
  flex: 1;
}

.vehicle-image {
  border-radius: 8px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
}

.vehicle-image img {
  max-width: 100%;
  max-height: 300px;
  height: auto;
  display: block;
}

.vehicle-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: center;
}

.vehicle-info-column {
  flex: 1;
}

.section-title {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  text-align: center;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.price-section {
  text-align: center;
  margin-top: auto;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.price-label {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

.price-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-danger);
  margin: 0.5rem 0;
}

.installment {
  font-size: 1rem;
  color: var(--color-text-secondary);
}

.price-section > .base-button {
  width: 20%;
  min-width: 120px;
}

@media (min-width: 768px) {
  .vehicle-info {
    padding: 3rem;
  }

  .vehicle-content {
    flex-direction: row;
    align-items: flex-start;
  }

  .section-title {
    text-align: left;
  }

  .vehicle-badges {
    justify-content: flex-start;
  }

  .price-section {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }
}

@media (max-width: 767px) {
  .price-section > .base-button {
    width: 100% !important;
  }
}

@media (min-width: 992px) {
  .vehicle-image img {
    max-height: 300px;
  }
}
</style>
