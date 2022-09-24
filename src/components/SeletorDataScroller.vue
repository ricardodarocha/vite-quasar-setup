<template>

  <div class=" q-mr-sm q-mb-sm" >  

    <q-scroll-area style="height: 72px;" v-if="false" >
      <div class="row no-wrap">
        <div
          v-for="item in [
    { id: 1, name: 'ter', day: 1 },
    { id: 2, name: 'qua', day: 2 },
    { id: 3, name: 'qui', day: 3 },
    { id: 4, name: 'sex', day: 4 },
    { id: 5, name: 'sab', day: 5 },
    { id: 6, name: 'dom', day: 6 },
    { id: 7, name: 'seg', day: 7 },
    { id: 8, name: 'ter', day: 8 },
    { id: 9, name: 'qua', day: 9 },
    { id: 10, name: 'qui', day: 10 },
    { id: 11, name: 'ter', day: 11 },
    { id: 12, name: 'qua', day: 12 },
    { id: 13, name: 'qui', day: 13 },
    { id: 14, name: 'sex', day: 14 },
    { id: 15, name: 'sab', day: 15 },
    { id: 16, name: 'dom', day: 16 },
    { id: 17, name: 'seg', day: 17 },
    { id: 18, name: 'ter', day: 18 },
    { id: 19, name: 'qua', day: 19 },
    { id: 20, name: 'qui', day: 20 },
    { id: 21, name: 'qua', day: 21 },
    { id: 22, name: 'qui', day: 22 },
    { id: 23, name: 'qui', day: 23 },
    { id: 24, name: 'qua', day: 24 },
    { id: 25, name: 'qui', day: 25 },
    { id: 26, name: 'sex', day: 26 },
    { id: 27, name: 'sab', day: 27 },
    { id: 28, name: 'dom', day: 28 },
    { id: 29, name: 'seg', day: 29 },
    { id: 30, name: 'ter', day: 30 },
    { id: 31, name: 'qua', day: 31 },
]"
          :key="id"
          style="width: 48px"
          class="q-pa-sm"
        >
          <q-btn flat no-caps>
            {{item.name}}
            <br />
            {{item.day}}
          </q-btn>
        </div>
      </div>
    </q-scroll-area>
    <p></p>
   
   <div class="col flex flex-center">
    <q-input filled v-model="passagem.data"  
    style="min-width:300px; border-radius-bottom-rigth: 5px; border-radius-bottom-left: 5px;"  >
        <template v-slot:prepend>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-date v-model="passagem.data" 
              mask="DD/MM/YYYY"
              :locale="myLocale"
              :options="optionsFn"
              today-btn
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
     
    </div>
  </div>
</template>

<script>

export default {


};
</script>
<script setup>
import { date } from 'quasar'
import { usePassagem } from '../store/passagem';
const passagem = usePassagem();
const myLocale = {
       
        days: 'Domingo;Segunda-Feira;Terça-Feira;Quarta-Feira;Quinta-Feira;Sexta-Feira;Sábado'.split(';'),
        dayCommon: 'Domingo;Segunda;Terça;Quarta;Quinta;Sexta;Sábado'.split(';'),
        daysShort: 'Dom;Seg;Ter;Qua;Qui;Sex;Sáb'.split(';'),
        months: 'Janeiro;Fevereiro;Março;Abril;Maio;Junho;Julio;Agosto;Setembro;Outubro;Novembro;Dezembro'.split(';'),
        monthsShort: 'Jan;Fev;Mar;Abr;Mai;Jun;Jul;Ago;Set;Out;Nov;Dez'.split(';'),
        firstDayOfWeek: 0, // 0-6, 0 - Sunday, 1 Monday, ...
        format24h: true,
        pluralDay: 'dias'
};
const qFormatDate = function () {
  return date.formatDate(passagem.data, 'DD/MM/YYYY')
};

const optionsFn = function (date) {
  console.log(date); 
  let teste = new Date();
  let datestring = teste.getFullYear() + '/' + (teste.getMonth() + 1) + '/' + teste.getDate();
 console.log(' --', datestring);
  return date >= '2022/06/12';
}


</script>

<style>
</style>