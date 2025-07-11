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
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.label {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.25rem;
}

.value {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}
</style>
