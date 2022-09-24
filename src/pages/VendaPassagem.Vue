<template>
  <div class="column items-center q-mt-md" >
      <Seletor></Seletor>
      <SeletorDataScroller></SeletorDataScroller>     
      <SeletorHorario />
      <FormularioPassageiro></FormularioPassageiro>
      <q-btn color="secondary" glossy label="Confirmar" to="/bilhete" />
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>


<script setup>
import { invoke } from "@tauri-apps/api/tauri";

function busc() {
  console.log(busca);
  invoke("buscar", {
    paramBusca: {
      valor: busca
    }
  }).then(message => console.log(message));
  invoke("mensagem", {
    invokeMessage: busca.toString
  }).then(message => console.log(message));
  invoke("buscar", {
    paramBusca: {
      valor: busca
    }
  }).then(message => console.log(message));
  invoke("buscar", {
    paramBusca: {
      valor: busca
    }
  }).then(message => console.log(message));
};
</script>


<script>
import { defineProps } from "vue";
import SeletorDataScroller from "@/components/SeletorDataScroller.vue";
import Seletor from "@/components/Seletor.vue";
import SeletorHorario from "@/components/SeletorHorario.vue";
import FormularioPassageiro from "@/components/FormularioPassageiro.vue";

defineProps({
  title: String,
  msg: String
});

export default {
  name: "VendaPassagem",
  components: {Seletor, SeletorDataScroller, SeletorHorario, FormularioPassageiro}
};



</script>

