<template>
  <a :href="to" class="base-link" :class="variant">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "#",
    },
    variant: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style scoped>
.base-link {
  text-decoration: none;
  transition: color 0.3s;
}

.primary {
  color: var(--color-text);
}

.primary:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

.secondary {
  color: var(--color-text-secondary);
}

.secondary:hover {
  color: var(--color-text);
  text-decoration: underline;
}
</style>
