import { createLocalVue, shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";
import Vuelidate from "vuelidate";
import Footer from "@/components/footer.vue";
import TabelaVendas from "@/components/tabelaVendas.vue";

const localVue = createLocalVue();
localVue.use(Vuelidate);
localVue.use(BootstrapVue);

describe("footer.vue", () => {
  it("renders props.nomeEmpresa when passed", () => {
    const nomeEmpresa = "new message";
    const wrapper = shallowMount(Footer, {
      propsData: { nomeEmpresa }
    });
    expect(wrapper.text()).toMatch(nomeEmpresa);
  });
});

test("renders a todo", () => {
  const wrapper = mount(TabelaVendas);
  const todo = wrapper.get('[class="botaoAdicionar"]');
  expect(todo.text()).toBe("Adicionar venda");
});

test("renders a todo", () => {
  const wrapper = mount(TabelaVendas);
  const todo = wrapper.find('[class="alinhamentoCima mt-5"]');
  expect(todo.text()).toContain("VENDAS");
});
