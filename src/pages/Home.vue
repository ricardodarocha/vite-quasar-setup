<template>
  
  <div class="container ">
  
          <h2 align="center">
          <img src="@/assets/destinorapido.png" alt="" style="max-width: 300px">
          </h2>

          <div class="flex flex-center">
          <Seletor>
          </Seletor>

          </div>

          <div class="flex flex-center">
            <q-btn glossy color="primary" icon="event" label="Preencher Formulário" class="full-width q-mt-none" style="max-height:50px; max-width: 300px" to="/new"  ></q-btn>
            </div>
<br>

    
  </div>
</template>



<script>

import Seletor from "@/components/Seletor.vue";

export default {
  name: 'Home',
  components: {Seletor}
}
</script>

<style>

.q-card {
  min-width: 250px;
  max-width: 300px;}

.q-hoverable:hover {
  background-color: red;
}
</style>