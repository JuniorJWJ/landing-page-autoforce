<template>
  <div class="vehicle-card">
    <div class="vehicle-image">
      <img :src="vehicle.image" :alt="`${vehicle.brand} ${vehicle.model}`" />
      <div class="vehicle-tags">
        <VehicleBadge
          v-for="(badge, index) in vehicle.badges"
          :key="index"
          :text="badge.text"
          :type="badge.type"
        />
      </div>
    </div>

    <div class="vehicle-info">
      <h2 class="vehicle-title">
        {{ vehicle.year }} {{ vehicle.brand }} {{ vehicle.model }}
      </h2>
      <p class="vehicle-subtitle">{{ vehicle.subtitle }}</p>

      <div class="vehicle-details">
        <div class="detail-item">
          <span class="detail-label">Câmbio:</span>
          <span class="detail-value">{{ vehicle.transmission }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Quilometragem:</span>
          <span class="detail-value">{{ vehicle.mileage }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Combustível:</span>
          <span class="detail-value">{{ vehicle.fuel }}</span>
        </div>
      </div>

      <PriceTag :price="vehicle.price" />

      <BaseButton
        class="interest-button"
        color="#F4B010"
        @click="$emit('interest', vehicle.id)"
      >
        ESTOU INTERESSADO
      </BaseButton>
    </div>
  </div>
</template>

<script>
import VehicleBadge from "@/components/atoms/VehicleBadge.vue";
import PriceTag from "@/components/atoms/PriceTag.vue";
import BaseButton from "../atoms/BaseButton.vue";

export default {
  components: { VehicleBadge, PriceTag, BaseButton },
  props: {
    vehicle: {
      type: Object,
      required: true,
      default: () => ({
        id: null,
        year: "",
        brand: "",
        model: "",
        subtitle: "",
        transmission: "",
        mileage: "",
        fuel: "",
        price: "",
        image: "",
        badges: [],
      }),
    },
  },
};
</script>

<style scoped>
.vehicle-card {
  border: 1px solid var(--color-primary-gray);
  border-radius: 8px;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  margin-bottom: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.vehicle-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.vehicle-image {
  position: relative;
  flex: 0 0 auto;
}

.vehicle-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.vehicle-tags {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.vehicle-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.vehicle-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.vehicle-subtitle {
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
}

.vehicle-details {
  margin-bottom: 1rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border-light);
}

.detail-label {
  font-weight: 500;
  color: var(--color-text);
}

.detail-value {
  color: var(--color-text);
}

.interest-button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-primary);
  color: var(--color-light);
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: auto;
}

.interest-button:hover {
  background-color: var(--color-primary-dark);
}

@media (min-width: 768px) {
  .vehicle-image img {
    height: 220px;
  }
}

@media (min-width: 992px) {
  .vehicle-image img {
    height: 240px;
  }
}

@media (max-width: 767.98px) {
  .vehicle-info {
    padding: 0.5rem;
  }
}
</style>
