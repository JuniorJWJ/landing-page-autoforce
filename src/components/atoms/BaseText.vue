<template>
  <component
    :is="tag"
    class="base-text"
    :class="computedClasses"
    :style="computedStyles"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "BaseText",
  props: {
    tag: {
      type: String,
      default: "p",
      validator: (value) =>
        [
          "p",
          "span",
          "div",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "label",
          "strong",
          "em",
          "small",
        ].includes(value),
    },

    size: {
      type: String,
      default: "md",
      validator: (value) =>
        ["xs", "sm", "md", "lg", "xl", "xxl"].includes(value),
    },

    weight: {
      type: String,
      default: "normal",
      validator: (value) =>
        ["light", "normal", "medium", "semibold", "bold", "black"].includes(
          value,
        ),
    },

    color: {
      type: String,
      default: "default",
      validator: (value) =>
        [
          "default",
          "primary",
          "secondary",
          "success",
          "warning",
          "danger",
          "muted",
          "white",
          "black",
        ].includes(value),
    },

    align: {
      type: String,
      default: "left",
      validator: (value) =>
        ["left", "center", "right", "justify"].includes(value),
    },

    transform: {
      type: String,
      default: "none",
      validator: (value) =>
        ["none", "uppercase", "lowercase", "capitalize"].includes(value),
    },

    decoration: {
      type: String,
      default: "none",
      validator: (value) =>
        ["none", "underline", "line-through"].includes(value),
    },

    italic: {
      type: Boolean,
      default: false,
    },

    spacing: {
      type: String,
      default: "normal",
      validator: (value) => ["tight", "normal", "wide"].includes(value),
    },

    margin: {
      type: String,
      default: "normal",
      validator: (value) =>
        ["none", "tight", "normal", "loose"].includes(value),
    },

    customClass: {
      type: String,
      default: "",
    },

    inlineStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    computedClasses() {
      return [
        `size-${this.size}`,
        `weight-${this.weight}`,
        `color-${this.color}`,
        `align-${this.align}`,
        `transform-${this.transform}`,
        `decoration-${this.decoration}`,
        `spacing-${this.spacing}`,
        `margin-${this.margin}`,
        {
          italic: this.italic,
        },
        this.customClass,
      ];
    },
    computedStyles() {
      return this.inlineStyle;
    },
  },
};
</script>

<style scoped>
.base-text {
  line-height: 1.5;
  transition: color 0.3s;
}

.size-xs {
  font-size: 0.75rem;
} /* 12px */
.size-sm {
  font-size: 0.875rem;
} /* 14px */
.size-md {
  font-size: 1rem;
} /* 16px */
.size-lg {
  font-size: 1.125rem;
} /* 18px */
.size-xl {
  font-size: 1.25rem;
} /* 20px */
.size-xxl {
  font-size: 1.5rem;
} /* 24px */

.weight-light {
  font-weight: 300;
}
.weight-normal {
  font-weight: 400;
}
.weight-medium {
  font-weight: 500;
}
.weight-semibold {
  font-weight: 600;
}
.weight-bold {
  font-weight: 700;
}
.weight-black {
  font-weight: 900;
}

.color-default {
  color: var(--color-text);
}
.color-primary {
  color: var(--color-primary);
}
.color-secondary {
  color: var(--color-secondary);
}
.color-success {
  color: var(--color-success);
}
.color-warning {
  color: var(--color-warning);
}
.color-danger {
  color: var(--color-danger);
}
.color-muted {
  color: var(--color-text-secondary);
}
.color-white {
  color: var(--color-text-light);
}
.color-black {
  color: #000;
}

.align-left {
  text-align: left;
}
.align-center {
  text-align: center;
}
.align-right {
  text-align: right;
}
.align-justify {
  text-align: justify;
}

.transform-none {
  text-transform: none;
}
.transform-uppercase {
  text-transform: uppercase;
}
.transform-lowercase {
  text-transform: lowercase;
}
.transform-capitalize {
  text-transform: capitalize;
}

.decoration-none {
  text-decoration: none;
}
.decoration-underline {
  text-decoration: underline;
}
.decoration-line-through {
  text-decoration: line-through;
}

.spacing-tight {
  letter-spacing: -0.5px;
}
.spacing-normal {
  letter-spacing: normal;
}
.spacing-wide {
  letter-spacing: 0.5px;
}

.margin-none {
  margin: 0;
}
.margin-tight {
  margin: 0.125rem 0;
}
.margin-normal {
  margin: 0.25rem 0;
}
.margin-loose {
  margin: 0.5rem 0;
}

.italic {
  font-style: italic;
}
</style>
