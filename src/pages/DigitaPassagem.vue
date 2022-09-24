<template>
  <div class="column items-center q-mt-md" >
  
   
      <FormularioCompleto></FormularioCompleto>
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
import FormularioCompleto from "@/components/FormularioCompleto.vue";

defineProps({
  title: String,
  msg: String
});

export default {
  name: "DigitaPassagem",
  components: {FormularioCompleto}
};



</script>

<style>

</style>

