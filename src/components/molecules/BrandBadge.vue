<template>
  <div class="brand-badge">
    <BaseText size="sm" class="badge-text">
      Esse site foi desenvolvido com a tecnologia
    </BaseText>
    <strong>Autódromo</strong>
    <BaseText size="sm" class="badge-text"> feita pela </BaseText>
    <BaseLink to="https://autodromo.com.br" variant="secondary">
      <img :src="logo" alt="Autódromo" class="badge-logo" />
    </BaseLink>
  </div>
</template>

<script>
import BaseText from "@/components/atoms/BaseText.vue";
import BaseLink from "@/components/atoms/BaseLink.vue";

export default {
  components: { BaseText, BaseLink },
  props: {
    logo: {
      type: String,
      default:
        "https://assets.autodromo.app/assets/home/logo-af-black-1936735c54c6425dc073aed3e26589559da6ea19ad63026ded4828ada92216f8.svg",
    },
  },
};
</script>

<style scoped>
.brand-badge {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem 0.5rem;
  margin-top: 1rem;
}

.badge-text {
  display: inline;
  margin: 0;
}

.badge-logo {
  height: 20px;
  vertical-align: middle;
  margin-left: 4px;
}
</style>
