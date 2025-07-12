<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <BaseInput
      label="Nome completo"
      v-model="formData.name"
      placeholder="Digite seu nome"
      required
      class="form-row"
    />

    <BaseInput
      label="Telefone"
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
      console.log("Formulário enviado:", this.formData);
      alert("Mensagem enviada com sucesso!");

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
  background: var(--color-background);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
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
  color: var(--color-text-secondary);
  text-align: left;
  width: 100%;
}

.form-row input,
.form-row textarea {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-tertiary-dark);
  border-radius: 6px;
  font-size: 1rem;
  color: var(--color-text);
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-row input:focus,
.form-row textarea:focus {
  border-color: var(--color-primary);
  outline: none;
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
  background-color: var(--color-primary);
  color: var(--color-text-light);
  transition: background-color 0.3s ease;
}

button[full-width]:hover {
  background-color: var(--color-primary-dark);
}
</style>
