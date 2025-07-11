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
  color: #333;
}

.primary:hover {
  color: #cf960f;
  text-decoration: underline;
}

.secondary {
  color: #666;
}

.secondary:hover {
  color: #333;
  text-decoration: underline;
}
</style>
