<template>
  <div>
    <b-navbar toggleable="lg" id="nav" class="fixed-top mb-5">
      <b-navbar-brand href="/home">
        <img
          src="@/assets/logo.png"
          height="40"
          class="imagemLogo"
          alt="logo da empresa BDI Tech"
        />
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto alinhamento">
          <b-nav-item id="clientesNav" href="#clientes">
            <b-row class="h-100" no-gutters>
              <div>
                <p class="textoClientes">Clientes</p>
              </div>
            </b-row>
          </b-nav-item>

          <b-nav-item id="funcNav" href="#funcionarios">
            <b-row class="h-100" no-gutters>
              <div id="">
                <p class="textoFunc">Funcionários</p>
              </div>
            </b-row>
          </b-nav-item>

          <b-nav-item id="vendasNav" href="#vendas">
            <b-row class="h-100" no-gutters>
              <p class="textoVendas">Vendas</p>
            </b-row>
          </b-nav-item>

          <b-nav-item id="sairNav" href="/login">
            <b-row class="h-100" no-gutters>
              <div id="displaySair">
                <b-icon
                  icon="box-arrow-left"
                  class="iconeSair"
                  font-scale="1.5"
                />
                <p class="textoSair">Sair</p>
              </div>
            </b-row>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  methods: {
    handleView() {
      this.pixels = window.innerWidth;
      if (this.pixels <= 991) {
        this.desktop = false;
      }
    },
    rotaProjetos() {
      this.$router.push("/projetos");
    },
    rotaBonus() {
      this.$router.push("/materiais-bonus");
    },
    logout() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");

#nav {
  background-color: #0d2c6c;
  padding: 0rem;
  padding-left: 3rem;
}

.navbar {
  padding: 0;
}

.nav-link {
  padding: 0 0 0 0 !important;
  margin-right: 0;
  margin-left: 0;
}

#funcNav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 110px;
}

.textoFunc {
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  color: #ffffff;
  font-size: 20px;
  padding-top: 12px;
  font-weight: 400;
}

#vendasNav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 110px;
}

.textoVendas {
  color: #ffffff;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  padding-top: 12px;
}

#clientesNav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 110px;
}

.textoClientes {
  color: #ffffff;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  padding-top: 12px;
}

#sairNav {
  padding-right: 10px;
}

#displaySair {
  display: flex;
  height: 35px;
  padding-right: 80px;
  margin-right: 15px;
  padding-top: 12px;
}

.iconeSair {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  margin-right: 10px;
  margin-top: 2px;
}

.textoSair {
  color: #ffffff;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
}
</style>
