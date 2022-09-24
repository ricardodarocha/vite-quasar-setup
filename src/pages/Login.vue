<template>
   <q-page class="flex flex-center" padding>
  <q-card class="full-width">
    <q-card-section>
    <q-input v-model="form.login" label="Login" type="text" placeholder="Usuário"></q-input>
    <q-input v-model="form.senha" label="Senha" type="password" placeholder="Senha"></q-input>
    </q-card-section>
    
    <q-card-actions>
        <q-btn class="full-width" color="primary" label="Login"  @click="login"></q-btn>   
        
        <q-btn class="full-width" color="secondary" label="Google"></q-btn>
    
    </q-card-actions>
    
  </q-card>
 </q-page>
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