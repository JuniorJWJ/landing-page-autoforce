<template>
  <div class="price-tag">
    <div class="price-label">POR APENAS</div>
    <div class="price-value">{{ price }}</div>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.price-tag {
  text-align: center;
  margin: 1rem 0;
}

.price-label {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

.price-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-danger);
}

</style>
