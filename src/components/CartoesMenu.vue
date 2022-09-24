<template>
    <div>
        <div class="text-subtitle2 q-ml-xl">
            Ações comuns
        </div>
        <div class="q-pa-md row items-start q-gutter-md" >
            <div class="flex q-ma-md align-center" padding>
                <q-card class="cursor-pointer q-hoverable " flat v-ripple style="background-color: #fcfcfe" shadow>
                    <q-card-section>       
                        <q-item-label caption>
                            Horário
                        </q-item-label>
                        <div class="text-h6">
                            Consultar a tabela<br> de horários
                        </div>
                    </q-card-section>    
                    <q-card-section>        
                        <q-item-section avatar>
                            <q-avatar>
                                <img src="https://www.svgrepo.com/show/99165/time.svg">
                            </q-avatar>
                        </q-item-section>
                    </q-card-section>
                </q-card>   
                <q-card class="cursor-pointer q-hoverable" flat v-ripple style="background-color: #fcfcfe" shadow wrap >
                    <q-card-section>       
                        <q-item-label caption>
                            Troca
                        </q-item-label>
                        <div class="text-h6">
                            Adiar uma<br> viagem com <br> bilhete comprado
                        </div>
                    </q-card-section>    
                    <q-card-section>        
                        <q-item-section avatar >
                            <q-avatar>
                                <img src="https://www.svgrepo.com/show/289631/time-is-money.svg">
                            </q-avatar>
                        </q-item-section>
                    </q-card-section>
                </q-card>

            <q-card class="cursor-pointer q-hoverable text-white" flat v-ripple style="background:linear-gradient(to right, #1c5ac4 , #72d3d1) " shadow  >
                <q-card-section  class="text-white">       
                    <div class="text-h6">
                        Despachar<br> bagagem
                    </div>
                </q-card-section>
                <q-card-section>
                    <q-item-section avatar>
                        <q-avatar>
                            <img src="https://www.svgrepo.com/show/280793/luggage-travel.svg" >
                        </q-avatar>
                    </q-item-section>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>