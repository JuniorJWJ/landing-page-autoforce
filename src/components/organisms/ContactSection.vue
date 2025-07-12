<template>
  <section class="contact-section">
    <h2 class="section-title">Interessado em algum carro?</h2>
    <p class="section-subtitle">Entre em contato conosco</p>

    <ContactForm class="contact-form" />
  </section>
</template>

<script>
import ContactForm from "@/components/molecules/ContactForm.vue";

export default {
  name: "ContactSection",
  components: { ContactForm },
  data() {
    return {
      whatsappNumber: "5575999943121",
    };
  },
};
</script>

<style scoped>
.contact-section {
  margin-top: 1.5rem;
  background: var(--color-tertiary);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
  text-align: center;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.section-subtitle {
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.contact-form {
  margin-bottom: 1.5rem;
}

.separator {
  position: relative;
  margin: 1.5rem 0;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.separator::before,
.separator::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 40%;
  height: 1px;
  background-color: var(--color-tertiary-dark);
}

.separator::before {
  left: 0;
}

.separator::after {
  right: 0;
}

.whatsapp-button {
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .contact-section {
    padding: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }
}
</style>
