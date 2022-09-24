import { defineStore } from "pinia";

export const usePassagem = defineStore("passagem", {
  state: () => ({

    linha: "JUIZ DE FORA - PONTE NOVA",
    origem: "",
    destino: "",
    sentido: "",
    data: "",
    horario: "",
    duracao: "35 min",
    valor: 0,
    taxaembarque: 0,
    seguro: false,
    gratuito: false,
    fatura: false,
    identifica: false,
    encomenda: false,
    nome: "",
    documento: "",
    plataforma: "D",
    poltrona: "16",
    poltronas: ["16"],
    nbilhete: "667803-1",
  }),
  getter: {
    getOrigem: (state) => {
      state.origem;
    },
    getDestino: (state) => {
      state.destino;
    },
    getData: (state) => {
      state.data;
    },
    getHorario: (state) => {
      state.horario;
    },
    getValor: (state) => {
      state.valor;
    },
    getNome: (state) => {
      state.nome;
    },
    getDocumento: (state) => {
      state.documento;
    },
  },
  actions: {
    reset() {
      this.origem = "";
      this.destino = "";
      this.data = "";
      this.horario = "";
      this.valor = "";
      this.nome = "";
      this.documento = "";
    },
  },
});
