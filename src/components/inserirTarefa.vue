<template>
  <div style="margin-bottom: 15px">
    <input
      type="text"
      placeholder="Nova Tarefa"
      v-model="txt"
      v-on:keyup.13="add()"
      ref="inp"
    /><button @click="add()">+</button>
  </div>
</template>

<script>
import barramento from "./barramento.js";
export default {
  data() {
    return {
      txt: "",
    };
  },
  methods: {
    add() {
      if (this.txt != "") {
        barramento.add(this.txt);
        this.txt = "";
        this.$refs.inp.focus();
      } else {
        this.$refs.inp.blur();
        window.alert("Por favor, digite um texto antes de adicionar uma tarefa.");
      }
    },
  },
  mounted() {
    this.$refs.inp.focus();
  },
  created() {
    barramento.$on("focar", () => {
      this.$refs.inp.focus();
    });
  },
};
</script>

<style scoped>
div.divmessage {
  color: black;
}
input {
  background: grey;
  width: 395px;
  outline: none;
  border-style: solid;
  border-color: white;
  border-radius: 10px 0px 0px 10px;
  border-width: 1px;
  color: white;
  padding: 7px;
  font-size: 16pt;
}
::-webkit-input-placeholder {
  color: rgb(212, 212, 212);
}

:-moz-placeholder {
  color: rgb(212, 212, 212);
}

::-moz-placeholder {
  color: rgb(212, 212, 212);
}

:-ms-input-placeholder {
  color: rgb(212, 212, 212);
}
div {
  margin-top: 50px;
  display: block;
}
button {
  color: white;
  background: rgb(47, 116, 206);
  border-style: solid;
  outline: none;
  border-color: white;
  border-width: 1px;
  padding: 7px;
  border-radius: 0px 10px 10px 0px;
  border-left: none;
  font-size: 16pt;
  transition: all 0.1s;
  cursor: pointer;
}
button:hover {
  background: rgb(55, 132, 233);
}
button:active {
  background: rgb(57, 140, 248);
}
@media (max-width:470px) {
  input {
    width: 220px;
  }
}
</style>