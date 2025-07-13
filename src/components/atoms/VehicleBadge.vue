<template>
  <span class="vehicle-badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "default",
      validator: (value) => ["default", "turbo", "rs", "top"].includes(value),
    },
  },
};
</script>

<style scoped>
.vehicle-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 0.5rem;
}

.default {
  background-color: var(--color-tertiary);
  color: var(--color-text);
}

.turbo {
  background-color: var(--color-danger);
  color: var(--color-text-light);
}

.rs {
  background-color: var(--color-warning);
  color: var(--color-text);
}

.top {
  background-color: var(--color-info);
  color: var(--color-text-light);
}
</style>
