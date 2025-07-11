<template>
  <div class="vehicle-list">
    <div class="filters-container">
      <h1 class="list-title">Carros Seminovos</h1>
      <div class="filters-group">
        <div class="filter-group">
          <label for="brand-filter" class="filter-label">Marca</label>
          <select id="brand-filter" v-model="filterBrand" class="filter-select">
            <option value="">Todas as Marcas</option>
            <option v-for="brand in brands" :key="brand" :value="brand">
              {{ brand }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label for="year-filter" class="filter-label">Ano</label>
          <select id="year-filter" v-model="filterYear" class="filter-select">
            <option value="">Todos os Anos</option>
            <option v-for="year in years" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="carousel-container">
      <button
        class="carousel-button prev"
        :disabled="currentIndex === 0"
        @click="moveCarousel(-1)"
      >
        &lt;
      </button>

      <div class="vehicles-slider">
        <div
          class="slider-track"
          :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }"
        >
          <div
            v-for="vehicle in filteredVehicles"
            :key="vehicle.id"
            class="slider-item"
          >
            <VehicleCard :vehicle="vehicle" @interest="handleInterest" />
          </div>
        </div>
      </div>

      <button
        class="carousel-button next"
        :disabled="currentIndex >= filteredVehicles.length - visibleCards"
        @click="moveCarousel(1)"
      >
        &gt;
      </button>
    </div>

    <div class="pagination-indicators">
      <span
        v-for="(_, index) in pageIndicators"
        :key="index"
        :class="{ active: currentIndex === index * visibleCards }"
        @click="jumpToPage(index)"
      ></span>
    </div>
  </div>
</template>
<script>
import VehicleCard from "@/components/molecules/VehicleCard.vue";

export default {
  components: { VehicleCard },
  data() {
    return {
      currentIndex: 0,
      visibleCards: 3,
      cardWidth: 0,
      filterBrand: "",
      filterYear: "",
      vehicles: [
        {
          id: 1,
          year: "2023",
          brand: "Chevrolet",
          model: "Tracker",
          subtitle: "1.2 TURBO FLEX RS AUTOMATICO",
          transmission: "AUTOMÁTICO",
          mileage: "1 KM",
          fuel: "FLEX",
          price: "R$ 190.440,00",
          image: require("@/assets/images/carro.png"),
          badges: [
            { text: "TURBO", type: "turbo" },
            { text: "RS", type: "rs" },
          ],
        },
        {
          id: 2,
          year: "2022",
          brand: "Volkswagen",
          model: "T-Cross",
          subtitle: "1.4 TSI TOTAL FLEX AUTOMATIC",
          transmission: "AUTOMÁTICO",
          mileage: "15.000 KM",
          fuel: "FLEX",
          price: "R$ 120.990,00",
          image: require("@/assets/images/car1.jpg"),
          badges: [{ text: "TOP", type: "top" }],
        },
        {
          id: 3,
          year: "2021",
          brand: "Fiat",
          model: "Toro",
          subtitle: "2.0 DIESEL AUTOMATIC",
          transmission: "AUTOMÁTICO",
          mileage: "20.000 KM",
          fuel: "DIESEL",
          price: "R$ 155.900,00",
          image: require("@/assets/images/car3.jpg"),
          badges: [{ text: "TURBO", type: "turbo" }],
        },
        {
          id: 4,
          year: "2020",
          brand: "Honda",
          model: "HR-V",
          subtitle: "1.8 FLEX AUTOMATIC",
          transmission: "AUTOMÁTICO",
          mileage: "30.000 KM",
          fuel: "FLEX",
          price: "R$ 98.990,00",
          image: require("@/assets/images/car6.jpg"),
          badges: [],
        },
        {
          id: 5,
          year: "2019",
          brand: "Toyota",
          model: "Corolla",
          subtitle: "2.0 FLEX AUTOMATIC",
          transmission: "AUTOMÁTICO",
          mileage: "40.000 KM",
          fuel: "FLEX",
          price: "R$ 110.990,00",
          image: require("@/assets/images/car5.jpg"),
          badges: [{ text: "HYBRID", type: "hybrid" }],
        },
      ],
    };
  },
  mounted() {
    this.calculateCardWidth();
    window.addEventListener("resize", this.calculateCardWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.calculateCardWidth);
  },
  computed: {
    brands() {
      return [...new Set(this.vehicles.map((v) => v.brand))].sort();
    },
    years() {
      return [...new Set(this.vehicles.map((v) => v.year))].sort(
        (a, b) => b - a,
      );
    },
    filteredVehicles() {
      return this.vehicles.filter((vehicle) => {
        const matchesBrand = this.filterBrand
          ? vehicle.brand === this.filterBrand
          : true;
        const matchesYear = this.filterYear
          ? vehicle.year === this.filterYear
          : true;
        return matchesBrand && matchesYear;
      });
    },
    pageIndicators() {
      return Array(
        Math.ceil(this.filteredVehicles.length / this.visibleCards),
      ).fill(0);
    },
  },
  watch: {
    filterBrand() {
      this.currentIndex = 0;
    },
    filterYear() {
      this.currentIndex = 0;
    },
    filteredVehicles() {
      this.calculateCardWidth();
    },
  },
  methods: {
    calculateCardWidth() {
      if (this.$el.querySelector(".slider-item")) {
        const card = this.$el.querySelector(".slider-item");
        const style = window.getComputedStyle(card);
        const width = card.offsetWidth;
        const margin = parseFloat(style.marginRight);
        this.cardWidth = width + margin;
      }
    },
    moveCarousel(step) {
      this.currentIndex = Math.max(
        0,
        Math.min(
          this.currentIndex + step,
          this.filteredVehicles.length - this.visibleCards,
        ),
      );
    },
    jumpToPage(pageIndex) {
      this.currentIndex = pageIndex * this.visibleCards;
    },
    handleInterest(vehicleId) {
      console.log("Interesse no veículo:", vehicleId);
    },
  },
};
</script>

<style scoped>
.vehicle-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  position: relative;
}

.filters-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.list-title {
  font-size: 1.75rem;
  color: #333;
  margin: 0;
}

.filters-group {
  display: flex;
  gap: 1.5rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  min-width: 200px;
}

.filter-label {
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
  text-align: left;
}

.filter-select {
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  font-size: 1rem;
  width: 100%;
  transition: border-color 0.3s;
}

.filter-select:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
}

.carousel-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  position: relative;
}

.vehicles-slider {
  flex: 1;
  overflow: hidden;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider-item {
  flex: 0 0 calc(100% / 3 - 1rem);
  margin-right: 1.5rem;
}

.carousel-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  flex-shrink: 0;
}

.carousel-button:hover:not(:disabled) {
  background-color: #0069d9;
}

.carousel-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.pagination-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.pagination-indicators span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pagination-indicators span.active {
  background-color: #007bff;
}

.pagination-indicators span:hover:not(.active) {
  background-color: #aaa;
}

@media (max-width: 992px) {
  .slider-item {
    flex: 0 0 calc(100% / 2 - 1rem);
  }

  .filters-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .filters-group {
    width: 100%;
    justify-content: space-between;
  }
}

@media (max-width: 768px) {
  .slider-item {
    flex: 0 0 calc(100% - 1rem);
  }

  .carousel-container {
    gap: 0.5rem;
  }

  .carousel-button {
    width: 35px;
    height: 35px;
  }

  .filters-group {
    flex-direction: column;
    gap: 1rem;
  }

  .filter-group {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .filter-group {
    min-width: 100%;
  }
}
</style>
