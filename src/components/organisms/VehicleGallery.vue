<template>
  <div class="vehicle-gallery">
    <div class="main-image-container">
      <img :src="currentImage" alt="Foto do veículo" class="main-image" />
    </div>

    <div class="thumbnails">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="thumbnail-container"
        :class="{ active: currentIndex === index }"
        @click="selectImage(index)"
      >
        <img :src="img" :alt="`Thumbnail ${index + 1}`" class="thumbnail" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VehicleGallery",
  props: {
    images: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex] || this.images[0];
    },
  },
  methods: {
    selectImage(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.vehicle-gallery {
  margin-top: 1.5rem;
  background: var(--color-background);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.main-image-container {
  position: relative;
  padding-top: 56.25%;
}

.main-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnails {
  display: flex;
  gap: 8px;
  padding: 8px;
  overflow-x: auto;
}

.thumbnail-container {
  flex: 0 0 80px;
  height: 60px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.3s;
}

.thumbnail-container.active {
  border-color: var(--color-primary);
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
}

@media (min-width: 768px) {
  .vehicle-gallery {
    margin-top: 2rem;
  }

  .main-image-container {
    padding-top: 45%;
  }

  .thumbnail-container {
    flex: 0 0 100px;
    height: 75px;
  }
}
</style>
