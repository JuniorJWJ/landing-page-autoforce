<template>
  <button
    class="carousel-button"
    :class="direction"
    :disabled="disabled"
    @click="$emit('click')"
    :aria-label="direction === 'prev' ? 'Anterior' : 'Próximo'"
  >
    <svg
      v-if="direction === 'prev'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="arrow-icon"
    >
      <path
        fill="currentColor"
        d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="arrow-icon"
    >
      <path
        fill="currentColor"
        d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "CarouselArrow",
  props: {
    direction: {
      type: String,
      required: true,
      validator: (value) => ["prev", "next"].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.carousel-button {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.3s,
    transform 0.2s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.carousel-button:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
  transform: scale(1.05);
}

.carousel-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  opacity: 0.7;
}

.arrow-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .carousel-button {
    width: 36px;
    height: 36px;
  }

  .arrow-icon {
    width: 18px;
    height: 18px;
  }
}
</style>
