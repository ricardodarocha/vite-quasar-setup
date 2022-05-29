<script setup>
import { ref } from "vue";

defineProps({
  title: String,
  msg: String
});

const count = ref(0);
</script>

<template>
  <div class="column items-center justify-center">
    <div class="col">
      <h1>{{title}}</h1>
      <q-input rounded outlined v-model="msg" style=" min-width:400px;">
        <template v-slot:before>
          <q-icon name="search" />
        </template>

        <template v-slot:hint>Field hint</template>

        <template v-slot:append>
          <q-btn round dense flat icon="schedule" />
        </template>
      </q-input>
      
      <q-btn color="silver q-mt-md" text-color="black" label="Buscar" />
      <div class="col"></div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
