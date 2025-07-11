<template>
  <footer class="main-footer">
    <div class="footer-content">
      <FooterColumn title="Tem alguma dúvida?">
        <BaseButton color="#F4B010" size="small" @click="$emit('contact')">
          Fale conosco
        </BaseButton>
      </FooterColumn>

      <FooterColumn title="Institucional">
        <FooterLinkGroup :links="quickLinks" />
      </FooterColumn>

      <FooterColumn title="Empresa">
        <BaseText size="sm">
          <strong>CNPJ:</strong> 22.588.947/0001-06
        </BaseText>
        <BaseText size="sm">
          Endereço Matriz Av. Amintas Barros, 3700 - Torre Business - Sala 2506
          - Lagoa Nova - Natal-RN
        </BaseText>
        <BaseButton color="#F4B010" size="small" @click="$emit('contact')">
          Abrir mapa
        </BaseButton>
        <BrandBadge />
      </FooterColumn>
    </div>
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
  </footer>
</template>

<script>
import FooterColumn from "@/components/molecules/FooterColumn.vue";
import FooterLinkGroup from "@/components/molecules/FooterLinkGroup.vue";
import BaseText from "@/components/atoms/BaseText.vue";
import BaseButton from "../atoms/BaseButton.vue";

export default {
  components: {
    FooterColumn,
    FooterLinkGroup,
    BaseText,
    BaseButton,
  },
  props: {
    logo: {
      type: String,
      default:
        "https://assets.autodromo.app/assets/home/logo-af-black-1936735c54c6425dc073aed3e26589559da6ea19ad63026ded4828ada92216f8.svg",
    },
  },
  data() {
    return {
      quickLinks: [
        { text: "Quem somos", to: "/quem-somos" },
        { text: "Fale conosco", to: "/contato" },
        { text: "Política de privacidade", to: "/privacidade" },
      ],
    };
  },
};
</script>

<style scoped>
.main-footer {
  background-color: #f8f9fa;
  padding: 2rem 1rem;
  border-top: 1px solid #e9ecef;
  margin-top: 3rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(3, 1fr);
  }
}
.brand-badge {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem 0.5rem;
  margin-top: 1rem;
}

.badge-text {
  text-align: center;
  display: inline;
  margin: 0;
}

.badge-logo {
  height: 20px;
  vertical-align: middle;
  margin-left: 4px;
}
</style>
