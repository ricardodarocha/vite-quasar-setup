<template>
  <div class=" q-mr-sm q-mb-sm" >   
      
  <div class="column flex flex-center">
    <q-select 
        style=" min-width:300px;"
        filled
        v-model="passagem.origem"
        option-value = 'value'
        option-label = 'label'
        option-disable = 'disable'
        input-debounce="0"
        options-html
        label="Origem"
        transition-show="jump-up"
        transition-hide="jump-down"
        behavior="dialog"
        :options="PontosEmbarque"
        @popup-hide="autoHide"
        >
          <template #no-option="scope">
            <q-item-section>
            <q-item>
            <q-icon name="block" />
            Nenhum ponto de embarque ou desembarque
            </q-item>
            </q-item-section>
          </template>
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
          <template #option="scope">
          <q-item v-bind="scope.itemProps">
            <q-avatar>
              <q-icon :name="scope.opt.icon"></q-icon>
            </q-avatar>
            <q-item-section>
              <q-label v-html="scope.opt.label">
            </q-label>
            </q-item-section>
          </q-item>
          </template>
          <template v-slot:hint> Escolha a cidade de partida </template>
          <template v-slot:append>
          </template>
        </q-select>

    <q-btn flat round icon="sync_alt" @click="Trocar" v-if="passagem.origem && passagem.origem" ></q-btn>

      <q-select filled outlined v-if="passagem.origem"
        style="min-width:300px; border-radius-bottom-rigth: 5px; border-radius-bottom-left: 5px;"
        v-model="passagem.destino"
        option-value = 'value'
        option-label = 'label'
        option-disable = 'disable'
        input-debounce="0"
        options-html
        label="Destino"
        transition-show="jump-up"
        transition-hide="jump-down"
        behavior="dialog"
        :options="PontosEmbarque" 
        @popup-hide="autoHide"
        >
        <template #no-option="scope">
            <q-item-section>
            <q-item>
            <q-icon name="block" />
            Nenhum ponto de embarque ou desembarque
            </q-item>
            </q-item-section>
          </template>
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
          <template #option="scope">
          <q-item v-bind="scope.itemProps">
            <q-avatar>
              <q-icon :name="scope.opt.icon"></q-icon>
            </q-avatar>
            <q-item-section>
              <q-label v-html="scope.opt.label">
            </q-label>
            </q-item-section>
          </q-item>
          </template>
          <template v-slot:hint> Escolha a cidade de partida </template>
          <template v-slot:append>
          </template>
        </q-select>
      </div>
    </div>

</template>

<script setup>
import { usePassagem } from '../store/passagem';
const passagem = usePassagem();

const Trocar = function (id) {
        let temp = passagem.origem
        passagem.origem = passagem.destino
        passagem.destino = temp
}

const EhExibirBotaoData = function () {
  console.log( this.$route.name )
  return this.$route.name!='VendaPassagem' && passagem.origem
}

const GetPossuiOrigem = function () {
  return passagem.origem
}

function autoTab(e) {
  const myForm = e.target.closest('form')
  if (!myForm) {
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
    if (nextIndex >= 0 && nextIndex < focusable.length)
      focusable[nextIndex].focus();

    return false;
  }
}
        
</script>
  <script>

import axios from "axios";
import { useQuasar } from 'quasar';
// 'http://www.ricardodarocha.com.br/PontosEmbarqueDesembarque.json'
import PontosEmbarque from "@/data/PontosEmbarque";


export default {
  data() {
    return {
      PontosEmbarque: []
    };
  },
  async created() {
    

    try {
      const res = await axios.get('http://www.ricardodarocha.com.br/PontosEmbarqueDesembarque.json');
      console.log(res.data);
      this.ePontosEmbarque = res.data;
    } catch (e) {
      console.log(e.message);
    }
  } 
}
</script>

<style>

</style>