<template>
<div class=" q-mr-sm q-mb-sm" >  
  <q-select filled outlined input-debounce="0" label="Horário" transition-show="jump-up" transition-hide="jump-down" behavior="dialog"
  v-model="passagem.horario" option-value='value' option-label='label' option-disable='disable' options-html 
  style="min-width:300px; border-radius-bottom-rigth: 5px; border-radius-bottom-left: 5px;"  
  :options="Horarios"> 
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
        </div>
</template>

<script setup>
import { usePassagem } from '../store/passagem';
const passagem = usePassagem();
import Horarios from "@/data/Horarios";
</script>

<script>
export default {

}
</script>

<style>

</style>