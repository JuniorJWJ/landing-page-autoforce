<template>
  <component :is="`h${level}`" class="base-heading">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 3,
      validator: (value) => value >= 1 && value <= 6,
    },
  },
};
</script>

<style scoped>
.base-heading {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-text);
}
</style>
