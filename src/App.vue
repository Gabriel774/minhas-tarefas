<template>
  <div id="app">
    <Progresso />
    <inserir-tarefa />
    <Tarefas />
  </div>
</template>

<script>
import Progresso from "./components/Progresso";
import inserirTarefa from "./components/inserirTarefa";
import Tarefas from "./components/Tarefas";

export default {
  components: { Progresso, inserirTarefa, Tarefas },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
