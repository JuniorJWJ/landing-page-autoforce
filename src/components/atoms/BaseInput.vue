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
  color: var(--color-text-secondary);
}

.base-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-tertiary-dark);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
  color: var(--color-text);
  font-family: inherit;
}

.base-input:focus {
  border-color: var(--color-primary);
  outline: none;
}

.base-input.error {
  border-color: var(--color-danger);
}

.error-message {
  color: var(--color-danger);
  font-size: 0.8rem;
  margin-top: 0.25rem;
}
</style>
