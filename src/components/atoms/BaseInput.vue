<template>
  <div class="input-group">
    <label v-if="label" class="input-label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      class="base-input"
      :class="{ error: error }"
      v-bind="$attrs"
    />
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    type: {
      type: String,
      default: "text",
    },
    placeholder: String,
    error: String,
  },
};
</script>

<style scoped>
.input-group {
  margin-bottom: 1rem;
}

.input-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

.base-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.base-input:focus {
  border-color: #007bff;
  outline: none;
}

.base-input.error {
  border-color: #e30613;
}

.error-message {
  color: #e30613;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}
</style>
