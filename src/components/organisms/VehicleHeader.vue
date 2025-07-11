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
      </div>

      <nav class="nav-menu">
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
  components: {},
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
};
</script>

<style scoped>
.header-container {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  margin-bottom: 1rem;
}

.logo-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  flex-shrink: 0;
  background-color: #f5f5f5;
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
}

.store-name {
  margin: 0;
  font-size: 1.25rem;
  color: #333;
  font-weight: 600;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding: 0.5rem 0;
  width: 100%;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 0.95rem;
  white-space: nowrap;
  position: relative;
  padding: 0.25rem 0;
}

.nav-link:hover {
  color: #007bff;
}

.nav-link:hover::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #007bff;
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
}

@media (min-width: 992px) {
  .nav-menu {
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .brand-container {
    align-items: center;
  }

  .store-name {
    font-size: 1.1rem;
  }

  .nav-menu {
    gap: 0.8rem;
  }

  .nav-link {
    font-size: 0.8rem;
  }
}
</style>
