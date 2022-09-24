<template>
   <div class="column items-center q-mt-md" >

    <Bustimeline></Bustimeline>


    
  </div>
</template>

<script setup>
import { usePassagem } from "../store/passagem";
const passagem = usePassagem();
</script>


<script>
  import Bustimeline from '@/components/Bustimeline.vue'

export default {
  name: "ConferenciaPassagem",
  components: { Bustimeline }
};
</script>

<style>
</style>