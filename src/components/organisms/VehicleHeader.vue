<template>
  <div class="header-container">
    <header class="header">
      <div class="logo-container">
        <img :src="logo" alt="Logo da loja" class="logo" />
      </div>

      <div class="store-info">
        <h1 class="store-name">{{ storeName }}</h1>
      </div>

      <nav class="nav-menu">
        <a href="#" class="nav-link">Novos</a>
        <a href="#" class="nav-link">Seminovos</a>
        <a href="#" class="nav-link">Ofertas</a>
        <a href="#" class="nav-link">Pós-venda</a>
        <a href="#" class="nav-link">Vendas Diretas</a>
        <a href="#" class="nav-link">Consórcios</a>
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
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.logo-container {
  width: 60px;
  height: 60px;
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
  margin-right: 2rem;
}

.store-name {
  margin: 0;
  font-size: 1.25rem;
  color: #333;
  font-weight: 600;
}

.rating {
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
}

.rating-value {
  margin-left: 0.5rem;
  font-size: 0.9rem;
  color: #666;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding: 0.5rem 0;
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

@media (max-width: 992px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  .logo-container {
    margin-bottom: 1rem;
  }

  .store-info {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }

  .nav-menu {
    width: 100%;
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    gap: 0.8rem;
    padding: 0.5rem 0.5rem;
  }

  .nav-link {
    font-size: 0.85rem;
  }
}
</style>
