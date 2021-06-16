<template>
  <div style="margin-top: 100px; text-align: center">
    <h1
      style="
        text-align: center;
        margin-bottom: 25px;
        font-family: 'Handlee', cursive;
        font-size: 36pt;
      "
    >
      Minhas<span style="color: #3498db">Tarefas</span>
    </h1>
    <div id="progresso">
      <div id="barra" :style="{ width: progress + '%' }" />
      <span style="position: relative; bottom: 20px">{{ progress }}%</span>
    </div>
    <button id="reset" style="margin-top: 25px" @click="reset()">
      Reiniciar
    </button>
  </div>
</template>

<script>
import barramento from "./barramento.js";
export default {
  data() {
    return {
      tot: 0,
      totcomp: 0,
    };
  },
  created() {
    barramento.$on("porcent", (porcent) => {
      this.tot = porcent;
    }),
      barramento.$on("tarefaConcluida", () => {
        this.totcomp++;
      }),
      barramento.$on("tarefaIncompleta", (mode) => {
        if (mode) {
          this.tot--;
        }
        this.totcomp--;
      });
  },
  computed: {
    progress() {
      return Math.round((this.totcomp / this.tot) * 100) || 0;
    },
  },
  watch: {
    totcomp: function () {
      if (this.totcomp <= 0) {
        this.totcomp = 0;
      }
    },
  },
  methods: {
    reset() {
      barramento.reset();
      this.tot = 0;
      this.totcomp = 0;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Handlee&display=swap");
#progresso {
  width: 1000px;
  height: 25px;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
}

#barra {
  max-width: 100%;
  height: 100%;
  background: rgb(55, 156, 30);
  transition: width 0.2s;
}
#reset {
  border: 1px solid white;
  color: white;
  font-size: 12pt;
  padding: 9px;
  background: rgb(47, 116, 206);
}
#reset:hover {
  background: rgb(55, 132, 233);
}
#reset:active {
  background: rgb(57, 140, 248);
}
@media (max-width: 1010px) {
  #progresso {
    width: 550px;
  }
}
@media (max-width: 560px) {
  #progresso {
    width: 320px;
  }
}
@media (max-width: 330px) {
  #progresso {
    width: 270px;
  }
}
</style>