<template>
  <div class="flex flex-center" style="max-width:300px">
   
    <p></p>

 <q-form @submit.prevent.stop @keydown.enter.prevent="autoTab">
    <q-input 
     class="justify-center tabstop" 
     v-model="passagem.nome" 
     placeholder="Nome do Passageiro" 
     filled 
     type="text" 
     style="width: 500px" 
     :rules="[value=>!!value || '']"
     />
    <q-input 
    class="justify-center tabstop" 
    v-model="passagem.documento" 
    placeholder="Número do Documento" 
    filled 
    type="text" 
    style="width: 500px"  />

     <q-input
              label=""
              stack-label
              v-model="img"
              type="file"
              accept="image/*"
              hint="Anexo"
            />
            <q-file
              outlined
              label="Imagem"
              stack-label
              v-model="img"
              hint="Anexo"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click="img = ''" class="cursor-pointer" />
              </template>
            </q-file>
</q-form>
  </div>
</template>

<script setup>

import { ref } from 'vue';
const passagem = usePassagem();

import { usePassagem } from '../store/passagem';

const img = ref('')

function autoTab(e){
      const myForm = e.target.closest('form')
      if(!myForm){
        return
      }
      const includeTags = ['INPUT', 'SELECT']
      const currentTarget = document.activeElement
      if (includeTags.indexOf(currentTarget.nodeName.toUpperCase()) !== -1) {
        // Find all form elements that can receive focus
        let focusable = myForm.querySelectorAll('input,select,button,textarea');

        // Get the index of the currently focused element
        let currentIndex = Array.prototype.indexOf.call(focusable, e.target)

        // Find the next items in the list
        let nextIndex = currentIndex == focusable.length - 1 ? 0 : currentIndex + 1;

        // Focus the next element
        if(nextIndex >= 0 && nextIndex < focusable.length)
          focusable[nextIndex].focus();

        return false;
      }
    } 

</script>

<style>
</style>