<template>
  <div>
    <div
      class="tarefa noselect"
      @click="complet()"
      :class="{ completo: !completo }"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
import barramento from "./barramento";
export default {
  props: ["text", "id"],
  data() {
    return {
      completo: "false",
    };
  },
  methods: {
    complet() {
      if (this.completo) {
        barramento.tarefaConcluida();
      } else {
        barramento.tarefaIncompleta(false);
      }
      this.completo = !this.completo;
    },
  },
  watch() {},
};
</script>

<style scoped>
.tarefa {
  background: tomato;
  padding: 35px;
  padding-left: 75px;
  padding-right: 75px;
  border-radius: 7px;
  border-left-width: 10px;
  border-left-color: rgb(252, 58, 24);
  border-left-style: solid;
  margin-top: 20px;
  position: relative;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  margin: 10px;
}

.tarefa:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.349);
}
.tarefa button {
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 50%;
  border-style: solid;
  outline: none;
  border-color: transparent;
  background: rgb(252, 58, 24);
  color: white;
  transition: all 0.2s;
  font-weight: 600;
}

.completo {
  background: rgb(121, 179, 35);
  border-left-color: rgb(14, 151, 14);
  text-decoration: line-through;
}

.completo button {
  background: rgb(14, 151, 14);
}
.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>