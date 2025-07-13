<template>
  <div class="header-container">
    <header class="header">
      <div class="brand-container">
        <div class="logo-container">
          <img :src="logo" alt="Logo da loja" class="logo" />
        </div>

        <div class="store-info">
          <h1 class="store-name">{{ storeName }}</h1>
        </div>

        <button
          class="menu-toggle"
          :class="{ open: isMenuOpen }"
          @click="toggleMenu"
        >
          <svg
            viewBox="0 0 100 100"
            width="30"
            height="30"
            class="hamburger-icon"
          >
            <rect
              class="bar"
              :class="{ open: isMenuOpen }"
              x="15"
              y="30"
              width="70"
              height="10"
              rx="5"
            />
            <rect
              class="bar"
              :class="{ open: isMenuOpen }"
              x="15"
              y="45"
              width="70"
              height="10"
              rx="5"
            />
            <rect
              class="bar"
              :class="{ open: isMenuOpen }"
              x="15"
              y="60"
              width="70"
              height="10"
              rx="5"
            />
          </svg>
        </button>
      </div>

      <nav class="nav-menu" :class="{ open: isMenuOpen }">
        <a href="#" class="nav-link">Seminovos</a>
        <a href="#" class="nav-link">Ofertas</a>
        <a href="#" class="nav-link">Pós-venda</a>
        <a href="#" class="nav-link">Consórcios</a>
        <a href="#" class="nav-link">Venda seu veículo conosco</a>
        <a href="#" class="nav-link">Institucional</a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: "",
    },
    storeName: {
      type: String,
      default: "AutoForce Seminovos",
    },
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.header-container {
  background-color: var(--color-background);
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.brand-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--color-background-alt);
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 80%;
  height: 80%;
  object-fit: contain;
}

.store-info {
  flex-grow: 1;
  margin-left: 1rem;
}

.store-name {
  margin: 0;
  font-size: 1.25rem;
  color: var(--color-text);
  font-weight: 600;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
  padding: 0.5rem 0;
  width: 100%;
}

.nav-link {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  font-size: 0.95rem;
  white-space: nowrap;
  position: relative;
  padding: 0.25rem 0;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link:hover::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-primary);
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: auto;
  display: none;
}

.hamburger-icon {
  pointer-events: none;
}

.bar {
  fill: var(--color-text);
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  transform-origin: 50% 50%;
}

.menu-toggle.open .bar:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.menu-toggle.open .bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.open .bar:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

@media (min-width: 768px) {
  .header {
    flex-direction: row;
    align-items: center;
  }

  .brand-container {
    margin-bottom: 0;
    margin-right: 2rem;
  }

  .logo-container {
    width: 60px;
    height: 60px;
  }

  .nav-menu {
    justify-content: flex-end;
    padding: 0;
  }

  .menu-toggle {
    display: none;
  }
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .header {
    position: relative;
  }

  .nav-menu {
    display: none;
    flex-direction: column;
    background-color: var(--color-background);
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    gap: 1rem;
    padding: 1rem;
    border-top: 1px solid #eee;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .nav-menu.open {
    display: flex;
  }

  .nav-link {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  .store-name {
    font-size: 1.1rem;
  }

  .brand-container {
    flex-wrap: nowrap;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .nav-link {
    font-size: 0.9rem;
  }

  .nav-menu {
    gap: 0.8rem;
  }
}
</style>
