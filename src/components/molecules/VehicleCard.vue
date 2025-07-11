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
  border: 1px solid #e0e0e0;
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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
  color: #333;
}

.vehicle-subtitle {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

.vehicle-details {
  margin-bottom: 1rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.detail-label {
  font-weight: 500;
  color: #555;
}

.detail-value {
  color: #333;
}

.interest-button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: auto;
}

.interest-button:hover {
  background-color: #0069d9;
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
</style>
