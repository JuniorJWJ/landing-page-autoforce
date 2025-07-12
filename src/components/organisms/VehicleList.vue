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

    <!-- Estados de carregamento e erro -->
    <div v-if="isLoading" class="loading-message">
      Carregando veículos...
    </div>
    
    <div v-else-if="error" class="error-message">
      {{ error }}
    </div>

    <template v-else>
      <div class="carousel-container">
        <button
          class="carousel-button prev"
          :disabled="currentIndex === 0 || filteredVehicles.length === 0"
          @click="moveCarousel(-1)"
        >
          &lt;
        </button>

        <div v-if="filteredVehicles.length > 0" class="vehicles-slider">
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
        <div v-else class="no-results-message">
          Nenhum veículo encontrado com os filtros selecionados
        </div>

        <button
          class="carousel-button next"
          :disabled="currentIndex >= filteredVehicles.length - visibleCards || filteredVehicles.length === 0"
          @click="moveCarousel(1)"
        >
          &gt;
        </button>
      </div>
      
      <div v-if="filteredVehicles.length > 0" class="pagination-progress">
        <div class="progress-bar">
          <div 
            class="progress" 
            :style="{ width: progressBarWidth }"
          ></div>
        </div>
      </div>
    </template>
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
      vehicles: [],
      isLoading: true,
      error: null
    };
  },
  mounted() {
    this.fetchVehicles();
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
    progressBarWidth() {
      if (this.filteredVehicles.length === 0) return '0%';
      
      const totalItems = this.filteredVehicles.length;
      const currentPosition = this.currentIndex + this.visibleCards;
      const progress = Math.min(100, (currentPosition / totalItems) * 100);
      
      return `${progress}%`;
    }
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
    async fetchVehicles() {
      try {
        this.isLoading = true;
        const response = await fetch('http://localhost:3000/api/v1/vehicles');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        this.vehicles = data.map(vehicle => ({
          ...vehicle,
          image: this.getImagePath(vehicle.image_url),
          badges: vehicle.badges || []
        }));
      } catch (error) {
        console.error("Erro ao buscar veículos:", error);
        this.error = "Erro ao carregar veículos. Tente novamente mais tarde.";
      } finally {
        this.isLoading = false;
      }
    },
    getImagePath(imageUrl) {
      return imageUrl ? require(`@/assets/images/${imageUrl}`) : '';
    },
    calculateCardWidth() {
      setTimeout(() => {
        if (this.$el?.querySelector(".slider-item")) {
          const card = this.$el.querySelector(".slider-item");
          const style = window.getComputedStyle(card);
          const width = card.offsetWidth;
          const margin = parseFloat(style.marginRight) || 0;
          this.cardWidth = width + margin;
        }
      }, 100);
    },
    moveCarousel(step) {
      const newIndex = this.currentIndex + step;
      const maxIndex = Math.max(0, this.filteredVehicles.length - this.visibleCards);
      
      if (newIndex >= 0 && newIndex <= maxIndex) {
        this.currentIndex = newIndex;
      }
    },
    handleInterest(vehicleId) {
      console.log("Interesse no veículo:", vehicleId);
    }
  }
};
</script>

<style scoped>
@import "@/assets/css/themes.css";

.loading-message,
.error-message,
.no-results-message {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  margin: 20px 0;
}

.error-message {
  color: var(--color-danger);
  font-weight: bold;
}

.no-results-message {
  font-style: italic;
  color: var(--color-text-secondary);
  flex-grow: 1;
  text-align: center;
  padding: 40px 20px;
}

.carousel-container {
  display: flex;
  align-items: center;
  min-height: 300px;
}

.vehicles-slider {
  flex-grow: 1;
  overflow: hidden;
}

.vehicle-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
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
  color: var(--color-text);
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
  color: var(--color-text);
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
  border-color: var(--color-primary);
  outline: none;
  box-shadow: 0 0 0 2px rgba(244, 176, 16, 0.2); /* color-primary transparente */
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
  background-color: var(--color-primary);
  color: var(--color-text-light);
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
  background-color: var(--color-primary-dark);
}

.carousel-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.pagination-progress {
  width: 100%;
  max-width: 500px;
  margin: 2rem auto 0;
}

.progress-bar {
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: var(--color-primary);
  border-radius: 3px;
  transition: width 0.3s ease;
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
