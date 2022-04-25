<template>
  <div class="home">
    <Navbar />
    <tabelaClientes id="clientes" />
    <tabelaFuncionarios id="funcionarios" />
    <tabelaVendas id="vendas" />
    <Footer nome-empresa="Desenvolvido por BDI Tech" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navBar.vue";
import tabelaVendas from "@/components/tabelaVendas.vue";
import tabelaClientes from "@/components/tabelaClientes.vue";
import tabelaFuncionarios from "@/components/tabelaFuncionarios.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    tabelaVendas,
    tabelaClientes,
    tabelaFuncionarios,
    Footer
  }
};
</script>
