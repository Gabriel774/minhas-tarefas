<template>
  <div id="appLocal">
    <div v-if="!textos.length"><p>Nenhuma tarefa foi adicionada!</p></div>
    <Tarefa
      v-else
      v-for="(valor, i) in textos"
      :key="valor.mensagem"
      :text="valor.mensagem"
      :id="i"
    />
  </div>
</template>

<script>
import barramento from "./barramento.js";
import Tarefa from "./Tarefa";
export default {
  data() {
    return {
      textos: [],
    };
  },
  components: { Tarefa },
  created() {
    barramento.$on("add", (add) => {
      if (this.textos.find((texto) => texto.mensagem == add)) {
        alert("Valor já existente, Por favor, digite um novo valor.");
      } else {
        this.textos.push({ mensagem: add });
      }
    });
    barramento.$on("reset", () => {
      this.textos = []
      barramento.focar();
    });
    const json = localStorage.getItem("tasks");
    const array = JSON.parse(json);
    if (Array.isArray(array)) {
      this.textos = JSON.parse(json) || [];
    } else {
      this.textos = [];
    }
  },
  watch: {
    textos: function () {
      barramento.porcent(this.textos.length);
      localStorage.setItem("tasks", JSON.stringify(this.textos));
    },
  },
};
</script>

<style scoped>
#appLocal {
  display: flex;
  flex-wrap: wrap;
}
</style>