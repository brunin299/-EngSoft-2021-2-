<template>
  <div class="login">
    <div class="inputs">
      <h1 class="titulo">login</h1>
      <b-form @submit.prevent="handleSubmit">
        <b-row>
          <b-col>
            <label class="mt-4 labels">Email:</label>
            <b-form-input type="text" v-model="user.email"> </b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <label class="mt-4 labels">Senha:</label>
            <b-form-input type="password" v-model="user.senha"> </b-form-input>
          </b-col>
        </b-row>
      </b-form>
      <div>
        <b-button class="botao-confirmar" size="sm" @click="logar">
          Entrar
        </b-button>
      </div>
    </div>
  </div>
</template>
<script>
var htmlTag = document.getElementsByTagName("html")[0];
htmlTag.setAttribute("class", "h-100");
var bodyTag = document.getElementsByTagName("body")[0];
bodyTag.setAttribute("class", "h-100 d-flex");
var appClass = document.getElementById("app");
appClass.classList.add("m-auto");
import { loginCliente } from "@/services/api/Cliente";
export default {
  components: {},
  data() {
    return {
      submitted: false,
      credentials: { showPassword: false },
      user: {
        email: "",
        senha: ""
      }
    };
  },
  methods: {
    viewPassword() {
      this.credentials.showPassword = this.credentials.showPassword
        ? false
        : true;
    },

    logar() {
      loginCliente({ email: this.user.email, senha: this.user.senha })
        .then(() => {
          this.mudarRota();
        })
        .catch(err => {
          console.error(err);
        });
    },
    mudarRota() {
      this.$router.push(`/home`);
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");
.col {
  padding-left: 0;
  padding-right: 10px;
}

.row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.login {
  background-color: #0d2c6c;
  height: 500px;
  width: 420px;
  border-radius: 30px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
}

.titulo {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  color: #fff;
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
  font-family: "Source Sans Pro", sans-serif;
}

.labels {
  align-self: flex-start;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 31px;
  color: #ffffff;
  margin-left: 0.5vw;
}

.field {
  background-color: #e0e0e0;
  color: #000000;
}

.password {
  border-right: none;
  border: 0 none;
}

.form-control {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color: #e0e0e0;
  box-shadow: 0 0 0 0;
  border-radius: 7px;
}

.form-control:focus {
  box-shadow: 0 0 0 0;
}

.botao-confirmar {
  background: #000000;
  border: 2px solid #000000;
  box-sizing: border-box;
  width: 5rem;
  margin-top: 3rem;
  margin-left: 4rem;
  border-radius: 10px;
  font-family: Roboto, sans-serif;
}
</style>
