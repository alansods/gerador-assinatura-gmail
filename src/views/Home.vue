<template>
  <div id="home">
    <div class="container">
      <div>
        <label>Nome:</label>
        <input type="text" placeholder="Digite seu nome" v-model="$store.state.nome" />
        <label>Cargo:</label>
        <input
          type="text"
          placeholder="Digite seu cargo"
          v-model="$store.state.cargo"
        />
        <label>Setor:</label>
        <input type="text" placeholder="Digite seu setor" v-model="$store.state.setor" />
      </div>
      <div>
        <label>Unidade:</label>
        <input type="text" placeholder="Digite sua unidade" v-model="$store.state.unidade" />
        <label>E-mail:</label>
        <input type="email" placeholder="Digite seu e-mail" v-model="$store.state.email" />
        <label>Telefone:</label>
        <input type="tel" placeholder="Digite seu celular" v-model="$store.state.telefone" />
      </div>
    </div>
    <button @click.prevent="gerarAssinatura">Gerar Assinatura</button>
  </div>
</template>

<script>

export default {
  
  name: "Home",
  components: {},
  data() {
    return {
      nome: "",
      cargo: "",
      setor: "",
      unidade: "",
      email: "",
      telefone: "",
    };
  },
  methods: {
    gerarAssinatura() {
      this.$router.push("/nova-assinatura");
    },
  },
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  background: ghostwhite;
  padding: 40px;
  border-radius: 20px;
  max-width: 600px;
  align-items: center;
}

.container {
  display: flex;
}

.container div {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.container div:first-of-type {
  margin-right: 30px;
}

input {
  height: 30px;
  border: solid 1px #eee;
  padding: 20px 10px;
  border-radius: 5px;
  margin-top: 5px;
  outline: none;
  width: 100%;
}

input:focus {
  border-color: #719ece;
}

::placeholder {
  color: #ccc;
}

label:not(:first-of-type) {
  margin-top: 15px;
}

button {
  width: 100%;
  margin-top: 30px;
  background: dodgerblue;
  border: none;
  outline: none;
  padding: 20px 20px;
  color: white;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
</style>
