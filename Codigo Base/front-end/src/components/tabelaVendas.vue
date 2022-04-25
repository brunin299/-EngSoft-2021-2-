<template>
  <div class="homeDetalhado">
    <b-row class="alinhamentoCima mt-5">
      <b-col>
        <h1 class="titulo mt-5">VENDAS</h1>
      </b-col>
    </b-row>

    <b-row class="mt-4 mb-4">
      <div class="ml-3">
        <b-input-group class="mb-2">
          <template #prepend>
            <b-input-group-text class="divIcon">
              <b-icon-search class="iconSearch"></b-icon-search>
            </b-input-group-text>
          </template>
          <b-form-input
            class="inputSearch"
            trim
            type="text"
            autocomplete="off"
            placeholder="Pesquisar"
            v-model="searchText"
          />
        </b-input-group>
      </div>

      <b-col class="end">
        <router-link to="/vendas/adicionar">
          <b-button class="botaoAdicionar">
            <span>Adicionar venda</span>
            <b-icon-plus class="iconeAdicionar" fontScale="1.5"></b-icon-plus>
          </b-button>
        </router-link>
      </b-col>
    </b-row>
    <b-table
      hover
      small
      bordered
      responsive="true"
      :per-page="perPage"
      :current-page="currentPage"
      :items="items"
      :fields="fields"
      :filter="searchText"
    >
      <template v-slot:cell(acoes)="dataVendas" class="botoes">
        <div>
          <button class="button" @click="mudarRota(dataVendas.item)">
            <b-icon-pencil-square></b-icon-pencil-square>
          </button>
        </div>
        <div>
          <button class="button" @click="abrirModalVendas(dataVendas.item._id)">
            <b-icon-trash2-fill></b-icon-trash2-fill>
          </button>
        </div>
      </template>
    </b-table>
    <b-row align-v="center" class="justify-content-end">
      <b-pagination
        class="pagination"
        :total-rows="rows"
        :per-page="perPage"
        v-model="currentPage"
        style="margin-right: 1rem;"
      >
      </b-pagination>
    </b-row>
    <ModalExcluir :confirma_acao="excluir" />
  </div>
</template>

<script>
import { getVenda, excluirVenda } from "@/services/api/Venda.js";
import ModalExcluir from "@/components/modalExcluirVenda";
export default {
  components: { ModalExcluir },
  methods: {
    receberDados() {
      getVenda()
        .then(res => {
          this.items = res.data.map(e => ({
            ...e,
            data: e.data.substring(0, 10)
          }));
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
    },

    abrirModalVendas(id) {
      this.id = id;
      this.$bvModal.show("modal-excluir-venda");
    },

    mudarRota(data) {
      this.$router.push(`/vendas/editar/${data._id}`);
    },

    excluir() {
      excluirVenda(this.id)
        .then(() => {
          this.$bvModal.hide("modal-excluir-venda");
          this.receberDados();
          this.$bvToast.toast("Venda excluída com sucesso", {
            title: "Sucesso na exclusão",
            autoHideDelay: 5000, //Tempo em milissegundos para o toast desaparecer
            variant: "success" //Danger é a variante vermelha. Variantes: default, primary, secondary, danger,warning, success e info
          });
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  data() {
    return {
      searchText: "",
      perPage: 7,
      currentPage: 1,
      fields: [
        {
          key: "valor",
          label: "Valor da venda",
          tdClass: "nome",
          thClass: "th-nome"
        },
        {
          key: "nomeCliente",
          label: "Nome do cliente",
          tdClass: "empresa",
          thClass: "th-empresa"
        },
        {
          key: "nomeFuncionario",
          label: "Nome do vendedor",
          tdClass: "empresa",
          thClass: "th-empresa"
        },
        {
          key: "produtos",
          label: "Nome dos produtos",
          tdClass: "empresa",
          thClass: "th-empresa"
        },
        {
          key: "data",
          label: "Data da venda",
          tdClass: "empresa",
          thClass: "th-empresa"
        },
        {
          key: "acoes",
          label: "Ações",
          tdClass: "acoes",
          thClass: "th-acoes"
        }
      ],
      items: []
    };
  },
  computed: {
    rows() {
      return this.items.length;
    }
  },
  mounted() {
    this.receberDados();
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
}
.alinhamentoCima {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.end {
  display: flex;
  flex-direction: row-reverse;
}
.botaoAdicionar {
  background-color: #223864;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 8px;
}
.botaoAdicionar:focus {
  box-shadow: 0 0 0 0;
}
.divIcon {
  background-color: #ffffff;
  color: rgba(73, 95, 140, 0.4);
  border-right: none;
  padding: 9px;
  height: 30px;
}
.inputSearch {
  width: 12rem;
  height: 30px;
  border-radius: 0.31rem;
  border-left: none;
}
.inputSearch::placeholder {
  color: rgba(73, 95, 140, 0.4);
}

.iconeAdicionar {
  margin-left: 1em;
  margin-right: -0.2em;
}

.form-control {
  padding: 0;
}
.form-control:focus {
  box-shadow: 0 0 0 0;
  border-color: #ced4da;
}

@media only screen and (min-width: 430px) and (max-width: 499px) {
  .titulo {
    font-size: 25px;
  }

  .iconeAdicionar {
    margin-left: 0em;
  }
}
</style>

<style lang="scss">
.homeDetalhado {
  padding-left: 4vw;
  padding-right: 8vw;

  .nome {
    text-align: start;
    border-right: 3px solid #0d2c6c !important;
  }
  .empresa {
    text-align: start;
    border-right: 3px solid #0d2c6c !important;
  }
  .acoes {
    justify-content: space-evenly;
    display: flex;
    .button {
      border: none;
      background-color: transparent;
    }
    .button:focus {
      border: none;
      outline: 0 !important;
    }
  }

  .th-nome {
    border-bottom: 3px solid #0d2c6c !important;
    border-right: 3px solid #0d2c6c !important;
    text-align: start;
    width: 21rem;
  }

  .th-empresa {
    border-bottom: 3px solid #0d2c6c !important;
    border-right: 3px solid #0d2c6c !important;
    text-align: start;
    width: 21rem;
  }

  .th-acoes {
    border-bottom: 3px solid #0d2c6c !important;
    text-align: center;
    width: 8rem;
  }

  .pagination .page-link,
  .pagination .page-link:hover {
    color: #15213c;
  }

  .pagination .page-item.active .page-link {
    background-color: #223864;
    color: #ffffff;
  }
  .pagination .page-item.active .page-link:hover {
    color: #ffffff;
  }
}

.homeDetalhado {
  .dropdown-item {
    padding: 0.25rem 0.8rem;
  }
  .dropdown {
    .dropdown-toggle::after {
      margin-left: 4em;
    }
    .dropdown-menu.show {
      width: 100%;
      border: 0px;
      border-radius: 0px 0px 0.25rem 0.25rem;
    }
    button {
      border: 0.25px solid black;
      border-radius: 0.25rem;
    }
    ul {
      background-color: #0d2c6c;
      margin-top: 0;
      li {
        background-color: #0d2c6c;
        color: #fff;
        a {
          color: #fff;
        }
        a:hover {
          background-color: #0d2c6c;
        }
      }
    }
    .btn {
      background-color: #0d2c6c;
      text-align: initial;
      height: 32px;
      display: flex;
      align-items: center;
      border-radius: 8px;
    }
    .btn-secondary {
      background-color: #0d2c6c;
    }
    .btn-secondary:not(:disabled):not(.disabled):active,
    .btn-secondary:not(:disabled):not(.disabled).active,
    .show > .btn-secondary.dropdown-toggle {
      background-color: #0d2c6c;
    }
  }
  @media (max-width: 319px) {
    .dropdown {
      .dropdown-toggle::after {
        margin-left: 7em;
      }
    }
  }
}
</style>
