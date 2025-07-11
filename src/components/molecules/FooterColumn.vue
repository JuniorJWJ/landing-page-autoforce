<template>
  <div class="footer-column">
    <BaseHeading :level="headingLevel">{{ title }}</BaseHeading>
    <slot></slot>
  </div>
</template>

<script>
import BaseHeading from "@/components/atoms/BaseHeading.vue";

export default {
  components: { BaseHeading },
  props: {
    title: String,
    headingLevel: {
      type: Number,
      default: 3,
    },
  },
};
</script>

<style scoped>
.footer-column {
  margin-bottom: 1.5rem;
}
</style>
