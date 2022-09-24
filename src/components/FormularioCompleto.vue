<template>
  <div class="flex " >
    <q-form @submit.prevent.stop @keydown.enter.prevent="autoTab">
      <!-- LINHA ---------------------------------------------------------------- -->

      <q-select style="min-width:300px;" 
        filled v-model="passagem.linha" 
        autocomplete='Rio de Janeiro' 
        option-value='value' 
        option-label='label'
        option-disable='disable' 
        input-debounce="0" 
         
        options-html 
        label="Origem" 
        transition-show="jump-up"
        transition-hide="jump-down" 
        behavior="dialog" 
        autofocus
        :options="Linhas"
        @popup-hide="autoHide"
        >
        <template #no-option="scope">
          <q-item-section>
            <q-item>
              <q-icon name="block" />
              Nenhuma linha cadastrada
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
        <template v-slot:hint> Escolha uma linha </template>
        <template v-slot:append>
        </template>
      </q-select>

      <!-- DATA ---------------------------------------------------------------- -->

      <q-input filled v-model="passagem.data"
        behavior="dialog"
        style="min-width:300px; border-radius-bottom-rigth: 5px; border-radius-bottom-left: 5px;">
        <template v-slot:prepend>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-date 
               v-model="passagem.data" 
               mask="DD/MM/YYYY" 
               :locale="myLocale" 
               :options="optionsFn" 
               today-btn
               landscape
               auto-close
               >
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <!-- SENTIDO ---------------------------------------------------------------- -->

      <q-select style="min-width:300px;" filled v-model="passagem.sentido" option-value='value' option-label='label'
        option-disable='disable' 
        input-debounce="0" 
        options-html 
        label="Sentido" 
        transition-show="jump-up"
        @popup-hide="autoHide"
        transition-hide="jump-down" 
        :options="[
  { id: 'Ida', label: 'Ida', icon: 'east' },
  { id: 'Volta', label: 'Volta', icon: 'west'}, 
  { id: 'Ida e Volta', label: 'Ida e Volta', icon: 'compare_arrows'} ]"> 
        <template v-slot:prepend>
          <q-icon name="multiple_stop" />
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

        <template v-slot:append>
        </template>
      </q-select>

      <!-- PLATAFORMA ---------------------------------------------------------------- -->

      <q-input 
        square 
        filled 
        v-model="passagem.plataforma" 
        label="plataforma"
        @popup-hide="autoHide"
        >
      <template v-slot:prepend>
          <q-icon name="directions_bus" />
        </template>
      </q-input>

      <!-- ORIGEM ---------------------------------------------------------------- -->

      <q-select 
       style="min-width:300px;" 
       filled 
       v-model="passagem.origem" 
       option-value='value' 
       option-label='label'
       option-disable='disable' 
       input-debounce="0" 
       options-html 
       label="Origem" 
       transition-show="jump-up"
       transition-hide="jump-down" 
       behavior="dialog" 
       :options="PontosEmbarque"
       @popup-hide="autoHide">
        <template #no-option="scope">
          <q-item-section>
            <q-item>
              <q-icon name="block" />
              Nenhum ponto de embarque
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

      <q-btn flat round icon="sync_alt" @click="Trocar" v-if="passagem.origem && passagem.origem"></q-btn>

      <!-- DESTINO ---------------------------------------------------------------- -->

      <q-select filled outlined v-model="passagem.destino" option-value='value' option-label='label'
        option-disable='disable' 
        input-debounce="0" 
        v-if="passagem.origem"
        style="min-width:300px; border-radius-bottom-rigth: 5px; border-radius-bottom-left: 5px;" options-html
        label="Destino" 
        transition-show="jump-up" 
        transition-hide="jump-down" 
        behavior="dialog"
        :options="PontosEmbarque"
        @popup-hide="autoHide">
        <template #no-option="scope">
          <q-item-section>
            <q-item>
              <q-icon name="block" />
              Nenhum ponto de desembarque
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

      <!-- HORARIO ---------------------------------------------------------------- -->

      <q-select 
       filled 
       outlined 
       input-debounce="0" 
       label="Horário" 
       transition-show="jump-up" 
       transition-hide="jump-down" 
       behavior="dialog"
       v-model="passagem.horario" 
       option-value='value' 
       option-label='label' 
       option-disable='disable' 
       options-html 
       style="min-width:300px; border-radius-bottom-rigth: 5px; border-radius-bottom-left: 5px;"  
       :options="Horarios"
        @popup-hide="autoHide"
       > 
       <template #no-option="scope">
                <q-item-section>
                    <q-item>
                        <q-icon name="block" />
                        Nenhum horário disponível para esta data
                    </q-item>
                </q-item-section>
            </template>
            <template v-slot:prepend>
                <q-icon name="schedule" />
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

      <!-- TARIFA ---------------------------------------------------------------- -->

      <q-input 
        class="justify-center" 
        v-model="passagem.valor" 
        placeholder="0,00" 
        filled 
        type="number" 
        mask="#.##" 
        prefix="R$"/>

      <!-- TAXA DE EMBARQUE ---------------------------------------------------------------- -->

      <q-input class="justify-center" v-model="passagem.taxaembarque" placeholder="0.00" filled 
        type="number" 
        prefix="R$"/>

    <pre>{{getValorTotal()}}</pre>

      <!-- SEGURO ---------------------------------------------------------------- -->

      <q-checkbox  v-model="passagem.seguro" color="primary" label="Seguro" />

    <br>
      <q-img class="" src="@/assets/onibustrans.png" style="width: 500px;"></q-img>
      <!-- POLTRONA ---------------------------------------------------------------- -->

      <q-select square filled
        v-model="passagem.poltronas"
        multiple
        :options="options"
        transition-hide="jump-down" 
        behavior="dialog"
        counter
        use-chips
        stack-label
        @popup-hide="autoHide"
        label="Poltronas" /> 

      <!-- GRATUITO ---------------------------------------------------------------- -->

      <q-checkbox v-model="passagem.gratuito" color="primary" label="Gratuito (F11)" />

      <!-- FATURA ---------------------------------------------------------------- -->

      <q-checkbox v-model="passagem.fatura" color="primary" label="Fatura (F2)" />

      <!-- IDENTIFICA ---------------------------------------------------------------- -->

      <q-checkbox v-model="passagem.identifica" color="primary" label="Identifica (F12)" />

      <!-- ENCOMENDA ---------------------------------------------------------------- -->

      <q-checkbox v-model="passagem.encomenda" color="primary" label="Encomenda (F9)" />

      <q-input class="justify-center" v-model="passagem.nome" placeholder="Nome do Passageiro" filled type="text"
        style="width: 500px" :rules="[value => !!value || '']" />

      <q-input class="justify-center" v-model="passagem.documento" placeholder="Número do Documento" filled type="text"
        style="width: 500px" />

      
    </q-form>
  </div>
</template>

<script setup>

import { ref } from 'vue';

import { usePassagem } from '../store/passagem';
const passagem = usePassagem();

import PontosEmbarque from "@/data/PontosEmbarque";
import Linhas from "@/data/Linhas";
import Horarios from "@/data/Horarios";

const img = ref('')

const Trocar = function (id) {
        let temp = passagem.origem
        passagem.origem = passagem.destino
        passagem.destino = temp
}

const options = [
  '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16',
  '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32',
  '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48',
  '49', '50', '51', '52', '53', '54', '55'
]
      
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

function autoHide(evt) {
  
  console.log(evt);
  console.log(evt.target);
   const includeTags = ['INPUT']
   const currentTarget = document.activeElement
  if (includeTags.indexOf(currentTarget.nodeName.toUpperCase()) !== -1) {
    // Find all form elements that can receive focus
    let focusable = document.querySelectorAll('input,select,button,textarea');

    // Get the index of the currently focused element
    let currentIndex = Array.prototype.indexOf.call(focusable, evt.target)

    // Find the next items in the list
    let nextIndex = currentIndex == focusable.length - 1 ? 0 : currentIndex + 1;

    // Focus the next element
    if (nextIndex >= 0 && nextIndex < focusable.length)
      focusable[nextIndex].focus();

    return false;
  }
}

function getValorTotal() {
  return passagem.valor + passagem.taxaembarque
}

</script>

<style>
</style>