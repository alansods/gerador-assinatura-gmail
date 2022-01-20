<template>
  <div id="nova-assinatura">
    <div class="container-assinatura" ref="printMe" v-if="!gerouImagem">
      <div class="nome">{{ $store.state.nome }}</div>
      <div>{{ $store.state.cargo }}</div>
      <div>{{ $store.state.setor }}</div>
      <div>{{ $store.state.unidade }}</div>
      <div>{{ $store.state.email }}</div>
      <div class="telefone">{{ $store.state.telefone }}</div>
      <div class="logos">
        <img class="fiec" width="130px" src="@/assets/img/fiec.png" alt="">
        <img width="130px" src="@/assets/img/senai.png" alt="">
      </div>
    </div>
    <button @click.prevent="gerarImagem" v-if="!gerouImagem">Gerar Imagem</button>
    <img :src="output" v-if="gerouImagem" />
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      output: null,
      gerouImagem: false
    };
  },
  methods: {
    async gerarImagem() {
      //this.$router.push("/nova-assinatura");
      const el = this.$refs.printMe;
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: "dataURL",
        scale: 2
      };
      this.output = await this.$html2canvas(el, options);
      this.gerouImagem = true
    },
  },
};
</script>

<style>

.container-assinatura{
  width: 600px;
  padding: 20px;
  background: #f6f6f7;
  border-bottom: 5px solid #005fa5;
  border-left: 25px solid #005fa5;
}

.container-assinatura div:not(:first-child):not(:last-child){
  margin: 2px 0
}

.container-assinatura div:not(:first-child) {
  font-size: .8rem;
}

.nome{
  color: #005fa5;
  font-weight: bold;
  font-size: 1rem;
}

.telefone{
  font-weight: bold;
}

.logos{
  display: flex;
  justify-content: flex-end;
}

.fiec{
  margin-right: 15px;
}

</style>
