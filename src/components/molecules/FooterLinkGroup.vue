<template>
  <div class="link-group">
    <BaseLink
      v-for="(link, index) in links"
      :key="index"
      :to="link.to"
      class="footer-link"
    >
      {{ link.text }}
    </BaseLink>
  </div>
</template>

<script>
import BaseLink from "@/components/atoms/BaseLink.vue";

export default {
  components: { BaseLink },
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.link-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  display: block;
}
</style>
