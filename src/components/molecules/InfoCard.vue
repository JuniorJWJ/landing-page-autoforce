<template>
  <div class="info-card">
    <div class="label">{{ label }}</div>
    <div class="value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: [String, Number],
  },
};
</script>

<style scoped>
.info-card {
  background: var(--color-background);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
}

.label {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.25rem;
}

.value {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
}

</style>
