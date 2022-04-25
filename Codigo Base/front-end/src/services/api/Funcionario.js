import Api from "./Api";

const getFuncionario = () => {
  return Api().get("/listarFuncionarios");
};

const buscarFuncionario = id => {
  return Api().get(`/buscarFuncionario/${id}`);
};

const postFuncionario = dados => {
  return Api().post("/adicionarFuncionario", dados);
};

const excluirFuncionario = id => {
  return Api().delete(`/excluirFuncionario/${id}`);
};

const editarFuncionario = (data, id) => {
  return Api().put(`/editarFuncionario/${id}`, data);
};

export {
  getFuncionario,
  excluirFuncionario,
  editarFuncionario,
  postFuncionario,
  buscarFuncionario
};
