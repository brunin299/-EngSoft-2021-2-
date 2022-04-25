<template>
  <div class="footers">
    <b-container>
      <b-col v-if="nomeEmpresa" class="empresaClass">
        {{ nomeEmpresa }}
      </b-col>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");
.empresaClass {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
}

.footers {
  position: "absolute";
  width: 100%;
  height: 2rem;
  background-color: #0d2c6c;
  color: white;
}
</style>
<script>
export default {
  name: "Footer",
  props: {
    nomeEmpresa: {
      type: String
    }
  }
};
</script>
