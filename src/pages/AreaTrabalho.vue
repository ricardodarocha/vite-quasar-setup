<template>
   <div class="container-fluid m-0 p-0">
    <div id="home-page" class="full-height p-4">

        <div class="row q-ma-xl q-pa-md q-gutter-xl">
        <div class="col">
            <h2 style="min-width: 300px;">
            Olá Mundo
            </h2>

            <h7  style="min-width: 300px; max-width: 350px;">
            Componentes. Image for post. Muitos componentes e plugins fáceis de usar e bem documentados que vão agilizar muito o seu processo de criação. Eles ...
            </h7>
            <q-space></q-space>
            <br>
            <q-btn color="primary">Click aqui</q-btn>
        </div>
        <q-space></q-space>
        <q-img class="gt-sm q-mt-xl q-gutter-md q-pt-xl" src="@/assets/brazucadev.png" style="width: 300px; height: 250px;"></q-img>
        </div>
    </div>
    <div id="about" class="bg-warning">
    
    </div>
    <div id="contact" class="bg-info">
    
    </div>

    <div id="id" class="bg-primary">
    
    </div>

    <q-page-sticky position="bottom-right" :offset="[24, 14]">
        <q-fab 
        icon="add" 
        color="accent"
        direction="up"
        >
            <q-fab-action 
             icon="photo" 
             color="indigo" 
             label="Teste" 
             label-position="left"
             vertical-actions-align="right"
             external-label
             label-class="text-indigo bg-white"
             >  </q-fab-action>
            <q-fab-action 
             icon="photo" 
             color="indigo" 
             label="ok" 
             vertical-actions-align="right"
             label-position="left"
             external-label
             label-class="text-indigo bg-white"
             >  </q-fab-action>
            <q-fab-action 
             icon="photo" 
             color="indigo" 
             label="Teste" 
             label-position="left"
             external-label
             vertical-actions-align="right"
             label-class="text-indigo bg-white"
             >  </q-fab-action>
            <q-fab-action 
             icon="photo" 
             color="indigo" 
             label="Teste" 
             label-position="left"
             external-label
             label-class="text-indigo bg-white"
             vertical-actions-align="right"
             >  </q-fab-action>
        </q-fab>
    </q-page-sticky>
   </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    login: '',
    senha: ''
})

function login() {
    // axiox.post('/login', form.value);
    console.table(form.value);
}


</script>

<style>

</style>