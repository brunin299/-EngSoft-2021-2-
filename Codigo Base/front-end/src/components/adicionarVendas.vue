<template>
  <div class="ProjetoDetalhado">
    <Navbar />
    <b-container>
      <b-row class="alinhamentoCima mt-5">
        <b-col align-v="start">
          <h1 class="titulo">ADICIONAR VENDA</h1>
        </b-col>
      </b-row>
      <botao class="alinhamentoBtnVoltar" />
      <b-form @submit.prevent="handleSubmit">
        <b-row>
          <b-col>
            <label class="mt-3 labels">Valor da venda:</label>
            <b-form-input
              type="text"
              v-model="venda.valor"
              :class="{
                erro: submitted && $v.venda.valor.$error
              }"
            >
            </b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <label class="mt-4 labels">Nome do cliente:</label>
            <b-form-select
              text-field="nome"
              value-field="_id"
              :options="optionsCliente"
              v-model="venda.nomeCliente"
              :class="{
                erro: submitted && $v.venda.nomeCliente.$error
              }"
            >
            </b-form-select>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <label class="mt-4 labels">Nome do vendedor:</label>
            <b-form-select
              text-field="nome"
              value-field="_id"
              :options="optionsVendedor"
              v-model="venda.nomeFuncionario"
              :class="{
                erro: submitted && $v.venda.nomeFuncionario.$error
              }"
            ></b-form-select>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <label class="mt-4 labels">Nome dos produtos:</label>
            <b-form-input
              type="text"
              v-model="venda.produtos"
              :class="{
                erro: submitted && $v.venda.produtos.$error
              }"
            ></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <label class="mt-4 labels">Data da venda:</label>
            <b-form-datepicker
              v-model="venda.data"
              :class="{
                erroData: submitted && $v.venda.data.$error,
                'my-data-picker forms-imput': !submitted && $v.venda.data.$error
              }"
              class="my-data-picker forms-input"
              placeholder="Escolha uma data"
            ></b-form-datepicker>
          </b-col>
        </b-row>
      </b-form>
      <b-row class="alinhamentoLinha mt-5 mb-5">
        <button class="alinhamentoBtn btnCancelar" @click="fecharModal">
          <p class="mt-3">Cancelar</p>
          <b-icon-x fontScale="1.8" class="iconeX" />
        </button>

        <button class="alinhamentoBtn btnSalvar" @click="handleSubmit">
          <p class="mt-3">Salvar</p>
          <img
            src="@/assets/iconeV.svg"
            class="iconeV"
            alt="icone do botão salvar"
          />
        </button>
      </b-row>
    </b-container>
    <ModalCancelar :confirma_acao="limparDados" />
    <ModalConfirmar :confirma_acao="cadastroVenda" />
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import Navbar from "@/components/navBar.vue";
import ModalCancelar from "@/components/modalCancelar";
import ModalConfirmar from "@/components/modalConfirmar";
import botao from "@/components/botaoVoltar";
import { getCliente } from "@/services/api/Cliente.js";
import { getFuncionario } from "@/services/api/Funcionario.js";
import { postVenda } from "@/services/api/Venda";
export default {
  name: "TelaLogin",
  components: {
    ModalCancelar,
    ModalConfirmar,
    Navbar,
    botao
  },
  props: {},
  data() {
    return {
      submitted: false,
      venda: {
        valor: "",
        nomeCliente: "",
        nomeFuncionario: "",
        data: "",
        produtos: ""
      },
      optionsCliente: [{ _id: "", nome: "Escolha um cliente", disabled: true }],

      optionsVendedor: [
        { _id: "", nome: "Escolha um vendedor", disabled: true }
      ],

      show: true
    };
  },
  mounted() {},

  validations: {
    venda: {
      produtos: { required },
      nomeCliente: { required },
      data: { required },
      nomeFuncionario: { required },
      valor: { required }
    }
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        this.postNewVenda();
      }
    },
    fecharModal() {
      this.$bvModal.show("modal-cancelar");
    },

    postNewVenda() {
      this.$bvModal.show("modal-confirmar");
    },

    cadastroVenda() {
      postVenda({
        nomeCliente: this.venda.nomeCliente,
        data: this.venda.data,
        nomeFuncionario: this.venda.nomeFuncionario,
        valor: this.venda.valor,
        produtos: this.venda.produtos
      })
        .then(() => {
          this.limparDados();
          this.$v.$reset();
          this.$bvModal.hide("modal-confirmar");
          this.$bvToast.toast("Venda adicionada com sucesso", {
            title: "Venda",
            autoHideDelay: 5000, //Tempo em milissegundos para o toast desaparecer
            variant: "success" //Danger é a variante vermelha. Variantes: default, primary, secondary, danger,warning, success e info
          });
        })
        .catch(err => {
          console.error(err);
        });
    },

    limparDados() {
      this.venda.nomeCliente = "";
      this.venda.nomeFuncionario = "";
      this.venda.data = "";
      this.venda.valor = "";
      this.venda.produtos = "";
      this.$bvModal.hide("modal-cancelar");
    }
  },
  beforeCreate() {
    getFuncionario()
      .then(res => {
        this.optionsVendedor = [...this.optionsVendedor, ...res.data];
      })
      .catch(() => {
        this.$bvToast.toast(
          "Erro interno no servidor, recarregue a página. Caso persista, tente novamente mais tarde.",
          {
            title: "Erro interno no servidor",
            autoHideDelay: 5000, //Tempo em milissegundos para o toast desaparecer
            variant: "danger" //Danger é a variante vermelha. Variantes: default, primary, secondary, danger,warning, success e info
          }
        );
      });
    getCliente()
      .then(res => {
        this.optionsCliente = [...this.optionsCliente, ...res.data];
      })
      .catch(() => {
        this.$bvToast.toast(
          "Erro interno no servidor, recarregue a página. Caso persista, tente novamente mais tarde.",
          {
            title: "Erro interno no servidor",
            autoHideDelay: 5000, //Tempo em milissegundos para o toast desaparecer
            variant: "danger" //Danger é a variante vermelha. Variantes: default, primary, secondary, danger,warning, success e info
          }
        );
      });
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");
.titulo {
  font-family: "Noto Sans", sans-serif;
  color: #15213c;
  font-size: 35px;
  font-weight: 700;
  margin-top: 3rem;
}
.alinhamentoCima {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.alinhamentoBtnVoltar {
  margin-left: 60.5rem;
}

.arquivo {
  display: none;
}

.cursor {
  cursor: pointer;
}

.labels {
  align-self: flex-start;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 31px;
  color: #000000;
  margin-left: 0.5vw;
}

// campo título e descricao
.form-control {
  width: 100%;
  background-color: rgba(194, 194, 194, 0.5);
  border-top-right-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
  padding: 10px !important;
}
//campo Categoria
.custom-select {
  width: 100%;
  padding-left: 0.4rem !important;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color: #e0e0e0;
  box-shadow: 0 0 0 0;
  border-radius: 7px;
  color: #000;
}

.erro {
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #000;
  background-color: #e0e0e0;
  border-radius: 7px;
  border-left: 1.7px solid #e03d31 !important;
  border-right: 1.7px solid #e03d31 !important;
  border-top: 1.7px solid #e03d31 !important;
  border-bottom: 1.7px solid #e03d31 !important;
}

.erroData {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #000;
  background-color: #e0e0e0;
  border-radius: 7px;
  border-left: 1.7px solid #e03d31 !important;
  border-right: 1.7px solid #e03d31 !important;
  border-top: 1.7px solid #e03d31 !important;
  border-bottom: 1.7px solid #e03d31 !important;
}

.alinhamentoLinha {
  display: flex;
  justify-content: flex-end;
  margin-right: 0.5rem !important;
}
.alinhamentoBtn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.btnCancelar {
  background: #ffffff;
  border: 2px solid #0d2c6c;
  border-radius: 10px;
  height: 35px;
  color: #0d2c6c;
  font-size: 17px;
  margin-right: 5rem;
}
.btnSalvar {
  background: #0d2c6c;
  border: 2px solid #0d2c6c;
  height: 35px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 17px;
}
.iconeV {
  width: 15px;
  margin-left: 1.2rem;
}

.botaoAdicionar {
  background-color: #223864;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  color: #ffffff;
  padding: 1rem;
}
.iconeAdicionar {
  margin-left: 0.5em;
  margin-right: -0.2em;
}
.iconeImagem {
  margin-left: 1em;
  margin-right: -0.2em;
}
</style>
