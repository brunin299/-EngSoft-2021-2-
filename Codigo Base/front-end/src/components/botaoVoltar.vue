<template>
  <div>
    <b-button class="botao-confirmar" size="sm" @click="mudarRota">
      Voltar para a home
    </b-button>
  </div>
</template>
<script>
export default {
  methods: {
    mudarRota() {
      this.$router.push(`/home`);
    }
  }
};
</script>

<style scoped lang="scss">
.botao-confirmar {
  background: #0d2c6c;
  border: 2px solid #0d2c6c;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Roboto, sans-serif;
}
</style>
