import Api from "./Api";

const getVenda = () => {
  return Api().get("/listarVendas");
};

const buscarVenda = id => {
  return Api().get(`/buscarVenda/${id}`);
};

const postVenda = dados => {
  return Api().post("/adicionarVenda", dados);
};

const excluirVenda = id => {
  return Api().delete(`/excluirVenda/${id}`);
};

const editarVenda = (data, id) => {
  return Api().put(`/editarVenda/${id}`, data);
};

export { getVenda, excluirVenda, editarVenda, postVenda, buscarVenda };
