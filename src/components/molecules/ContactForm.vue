<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <BaseInput
      label="Nome completo *"
      v-model="formData.name"
      placeholder="Digite seu nome"
      required
      class="form-row"
    />
    <BaseInput
      label="Telefone *"
      v-model="formData.phone"
      placeholder="(00) 00000-0000"
      required
      class="form-row"
    />
    <BaseInput
      label="Mensagem"
      v-model="formData.message"
      placeholder="Digite sua mensagem..."
      type="textarea"
      rows="4"
      class="form-row message-row"
    />
    <BaseButton type="submit" color="var(--color-primary)" full-width>
      Enviar mensagem
    </BaseButton>
  </form>
</template>

<script>
import BaseInput from "@/components/atoms/BaseInput.vue";
import BaseButton from "@/components/atoms/BaseButton.vue";

export default {
  components: { BaseInput, BaseButton },
  data() {
    return {
      formData: {
        name: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (!this.formData.name || this.formData.name.trim() === "") {
        alert("Por favor, preencha o campo Nome completo.");
        return;
      }

      if (!this.formData.phone || this.formData.phone.trim() === "") {
        alert("Por favor, preencha o campo Telefone.");
        return;
      }

      let message = `Olá! Meu nome é ${this.formData.name.trim()}`;
      message += `\nTelefone: ${this.formData.phone.trim()}`;

      if (this.formData.message && this.formData.message.trim()) {
        message += `\n\n\n: ${this.formData.message.trim()}`;
      }

      const encodedMessage = encodeURIComponent(message);
      const whatsappNumber = "5575999943121";
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      try {
        window.open(whatsappLink, "_blank");
        alert("Redirecionando para o WhatsApp...");
        this.clearForm();
      } catch (error) {
        console.error("Erro ao abrir WhatsApp:", error);
        alert("Erro ao abrir o WhatsApp. Tente novamente.");
      }
    },

    clearForm() {
      this.formData = {
        name: "",
        phone: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
.contact-form {
  background: var(--color-background, #ffffff);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md, 0 4px 6px rgba(0, 0, 0, 0.1));
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
}

.form-row label {
  font-weight: 600;
  color: var(--color-text-secondary, #666666);
  text-align: left;
  width: 100%;
}

.form-row input,
.form-row textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-tertiary-dark, #cccccc);
  border-radius: 6px;
  font-size: 1rem;
  color: var(--color-text, #333333);
  font-family: inherit;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.form-row input:focus,
.form-row textarea:focus {
  border-color: var(--color-primary, #007bff);
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.message-row textarea {
  min-height: 100px;
  resize: vertical;
}

button[full-width] {
  width: 100%;
  padding: 0.75rem;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  background-color: var(--color-primary, #007bff);
  color: var(--color-text-light, #ffffff);
  transition: background-color 0.3s ease;
}

button[full-width]:hover {
  background-color: var(--color-primary-dark, #0056b3);
}

button[full-width]:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-form {
    padding: 1.5rem;
    margin: 1rem;
  }
}
</style>
