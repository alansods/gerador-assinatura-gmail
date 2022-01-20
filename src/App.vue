<template>
  <div id="app">
    <h1>Gerador de assinaturas de e-mail</h1>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #aaa;
  width: 100%;
  height: 100vh;
}

h1 {
  margin-bottom: 30px;
  font-size: 2rem;
}
</style>
