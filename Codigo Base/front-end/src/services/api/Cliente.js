import Api from "./Api";

const getCliente = () => {
  return Api().get("/listarClientes");
};

const buscarCliente = id => {
  return Api().get(`/buscarCliente/${id}`);
};

const postCliente = dados => {
  return Api().post("/adicionarCliente", dados);
};

const loginCliente = dados => {
  return Api().post("/loginCliente", dados);
};

const excluirCliente = id => {
  return Api().delete(`/excluirCliente/${id}`);
};

const editarCliente = (data, id) => {
  return Api().put(`/editarCliente/${id}`, data);
};

export {
  getCliente,
  excluirCliente,
  editarCliente,
  postCliente,
  buscarCliente,
  loginCliente
};
