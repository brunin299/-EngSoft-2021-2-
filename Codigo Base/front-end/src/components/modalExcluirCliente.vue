<template>
  <div>
    <b-modal
      id="modal-excluir-cliente"
      centered
      hide-header-close
      footer-border-variant="light"
    >
      <template #modal-header>
        <h5 class="titulo">Confirmar alterações</h5>
      </template>

      <p class="texto">
        Atenção! Esta ação irá excluir um cliente, deseja confirmar?
      </p>

      <template #modal-footer="{cancel}">
        <b-button class="botao-cancelar" size="sm" @click="cancel()">
          Cancelar <b-icon icon="x" font-scale="1"></b-icon>
        </b-button>
        <b-button class="botao-confirmar" size="sm" @click="confirma_acao">
          Confirmar <b-icon icon="check2" font-scale="1"></b-icon>
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    confirma_acao: {
      type: Function,
      required: false
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&family=Roboto&display=swap");

.titulo {
  font-family: Roboto, sans-serif;
  margin-bottom: 0.1rem;
  margin-top: 0.5rem;
}
.texto {
  padding-left: 20px;
  font-family: Roboto, sans-serif;
}
.botao-cancelar {
  margin-right: 1rem;
  color: #0d2c6c;
  background: #ffffff;
  border: 2px solid #0d2c6c;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Roboto, sans-serif;
}
.botao-confirmar {
  background: #0d2c6c;
  border: 2px solid #0d2c6c;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Roboto, sans-serif;
}
</style>
