import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Default",
    redirect: () => "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "home" */ "../views/Login.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/cliente/adicionar",
    name: "adicionarCliente",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/adicionarCliente.vue"
      )
  },
  {
    path: "/funcionario/adicionar",
    name: "adicionarFuncionario",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/adicionarFuncionario.vue"
      )
  },
  {
    path: "/vendas/adicionar",
    name: "adicionarVendas",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/adicionarVendas.vue"
      )
  },
  {
    path: "/clientes/editar/:id",
    name: "editarClientes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/editarCliente.vue")
  },
  {
    path: "/funcionarios/editar/:id",
    name: "editarFuncionarios",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/editarFuncionario.vue"
      )
  },
  {
    path: "/vendas/editar/:id",
    name: "editarVendas",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/editarVendas.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
