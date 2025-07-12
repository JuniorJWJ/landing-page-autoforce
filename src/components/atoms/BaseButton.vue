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
      default: "var(--color-primary)",
    },
    textColor: {
      type: String,
      default: "var(--color-text-light)",
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
      default: "6px",
    },
    width: {
      type: String,
      default: null,
    },
  },
  computed: {
    computedStyle() {
      return {
        backgroundColor: this.disabled ? "var(--color-tertiary)" : this.color,
        color: this.textColor,
        cursor: this.disabled ? "not-allowed" : "pointer",
        opacity: this.disabled ? 0.6 : 1,
        borderRadius: this.borderRadius,
        width: this.fullWidth ? "100%" : this.width,
        border: "none",
      };
    },
  },
};
</script>

<style scoped>
.base-button {
  font-weight: 600;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  user-select: none;
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
  filter: brightness(0.9);
}

.full-width {
  width: 100%;
}
</style>
