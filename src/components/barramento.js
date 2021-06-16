import Vue from "vue"
export default new Vue({
    methods: {
        add(texto) {
            this.$emit('add', texto)
        },
        porcent(porcent) {
            this.$emit('porcent', porcent)
        },
        focar() {
            this.$emit('focar')
        },
        tarefaConcluida() {
            this.$emit('tarefaConcluida')
        },
        tarefaIncompleta(mode) {
            this.$emit('tarefaIncompleta', mode)
        },
        reset() {
            this.$emit('reset')
        }
    }
})