<template>
  <div class="input-group">
    <label v-if="label" class="input-label">{{ label }}</label>
    <input
      v-if="type !== 'textarea'"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="base-input"
      :class="{ error: error }"
      v-bind="$attrs"
    />
    <textarea
      v-else
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="base-input"
      :class="{ error: error }"
      v-bind="$attrs"
    ></textarea>
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
    modelValue: [String, Number], // Para v-model funcionar
  },
  emits: ["update:modelValue"], // Declara o evento que será emitido
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
  color: var(--color-text-secondary, #666);
}

.base-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-tertiary-dark, #ddd);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
  color: var(--color-text, #333);
  font-family: inherit;
  box-sizing: border-box;
}

.base-input:focus {
  border-color: var(--color-primary, #007bff);
  outline: none;
}

.base-input.error {
  border-color: var(--color-danger, #dc3545);
}

.error-message {
  color: var(--color-danger, #dc3545);
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

/* Estilo específico para textarea */
textarea.base-input {
  resize: vertical;
  min-height: 100px;
}
</style>
