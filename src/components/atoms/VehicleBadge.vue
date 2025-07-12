<template>
  <span class="vehicle-badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "default",
      validator: (value) => ["default", "turbo", "rs", "top"].includes(value),
    },
  },
};
</script>

<style scoped>
.vehicle-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 0.5rem;
}

/* Default: cor neutra */
.default {
  background-color: var(--color-tertiary);
  color: var(--color-text);
}

/* Turbo: vermelho profundo (danger) */
.turbo {
  background-color: var(--color-danger);
  color: var(--color-text-light);
}

/* RS: amarelo escuro (warning) */
.rs {
  background-color: var(--color-warning);
  color: var(--color-text);
}

/* Top: azul violeta suave (info) */
.top {
  background-color: var(--color-info);
  color: var(--color-text-light);
}
</style>
