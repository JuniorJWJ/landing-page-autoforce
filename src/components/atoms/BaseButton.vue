<template>
  <button
    :type="type"
    class="base-button"
    :style="computedStyle"
    :disabled="disabled"
    :class="[{ 'full-width': fullWidth }, `size-${size}`]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    color: {
      type: String,
      default: "#007bff",
    },
    textColor: {
      type: String,
      default: "#ffffff",
    },
    fullWidth: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
    borderRadius: {
      type: String,
      default: "4px",
    },
    width: {
      type: String,
      default: null,
    },
  },
  computed: {
    computedStyle() {
      return {
        backgroundColor: this.disabled ? "#ccc" : this.color,
        color: this.textColor,
        cursor: this.disabled ? "not-allowed" : "pointer",
        opacity: this.disabled ? 0.6 : 1,
        borderRadius: this.borderRadius,
        width: this.fullWidth ? "100%" : this.width,
      };
    },
  },
};
</script>

<style scoped>
.base-button {
  border: none;
  font-weight: 500;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.size-small {
  padding: 0.4rem 0.8rem;
  font-size: 0.875rem;
}

.size-medium {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
}

.size-large {
  padding: 0.8rem 1.6rem;
  font-size: 1.125rem;
}

.base-button:hover:not(:disabled) {
  filter: brightness(90%);
}

.full-width {
  width: 100%;
}
</style>
