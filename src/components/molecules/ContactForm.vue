<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <BaseInput
      label="Nome completo"
      v-model="formData.name"
      placeholder="Digite seu nome"
      required
    />

    <BaseInput
      label="Telefone"
      v-model="formData.phone"
      placeholder="(00) 00000-0000"
      required
    />

    <BaseInput
      label="Mensagem"
      v-model="formData.message"
      placeholder="Digite sua mensagem..."
      type="textarea"
      rows="4"
    />

    <BaseButton type="submit" color="#F4B010" full-width>
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
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
</style>
