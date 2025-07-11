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
  background-color: #e0e0e0;
  color: #333;
}

.turbo {
  background-color: #e30613;
  color: white;
}

.rs {
  background-color: #ffcc00;
  color: #333;
}

.top {
  background-color: #007bff;
  color: white;
}
</style>
