<template>
  <q-page class="row justify-center" padding>
    <q-card v-for="empresa in inventory" :key="empresa.id">
      <q-img :src="empresa.ImageSrc"></q-img>
      <q-card-section>

        <h5 class="q-mb-none q-mt-sm q-ml-sm text-grey-9">
        {{empresa.name}}
        
        
            <q-chip
            v-for="categoria in empresa.categories"
            :key="categoria.id"
            :color="categoria.color"
            :label="categoria.name"
            text-color="white" >
            </q-chip>

        </h5>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
// import { ref, computed } from 'vue';

const inventory = [
  {
    id: 99,
    name: "UNIDA",
    ImageSrc: "https://picsum.photos/300/200",
    categories: [
      { id: 1, name: "interurbano", color: "green" },
      { id: 2, name: "frete", color: "red" },
      { id: 3, name: "turismo", color: "indigo" },
    ],
  },
];
</script>

<script>
export default {};
</script>

<style></style>
