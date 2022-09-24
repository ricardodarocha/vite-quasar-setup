<template>
    <div>
        <q-card flat square  style="min-width:400px">
            <q-card-actions class="bg-secondary" >
                <q-btn flat text-color="white" icon="arrow_back" to="/digitar"></q-btn>
            </q-card-actions>
        <!-- -------------------------------------  -->
            <q-card-actions v-if="true" class="row items-start q-gutter-md">
            <div class="col-auto">
                <q-item>Plataforma</q-item> 
                <q-item><strong>{{passagem.plataforma}}</strong></q-item> 
            </div>
            <div class="col-auto">
                <q-item>Poltrona</q-item> 
                <q-item><strong>{{passagem.poltrona}}</strong></q-item> 
            </div>   
            <div class="col-auto">
                <q-item>Bilhete</q-item> 
                <q-item><strong>{{passagem.nbilhete}}</strong></q-item> 
            </div> 
        </q-card-actions>
        <!-- -------------------------------------  -->
            <q-timeline layout="loose">
                <q-timeline-entry heading>
                    <q-chip icon="event">
                    {{passagem.data}}
                    </q-chip>

                </q-timeline-entry>
                <q-timeline-entry color="primary" icon="directions_bus" :title="passagem.origem.label" :subtitle="passagem.horario.label"></q-timeline-entry>
                <q-timeline-entry color="blue-7" icon="schedule" side="left" :subtitle="passagem.horario.duracao"></q-timeline-entry>
                <q-timeline-entry color="primary" icon="place" :title="passagem.destino.label" :subtitle="passagem.horario.chegada"></q-timeline-entry>
            </q-timeline>

            <q-separator/>
        <!-- -------------------------------------  -->
        <q-item-label header  class="row justify-start">Dados do Passageiro
        </q-item-label>

        <q-item>
            <q-item-section avatar>
                <q-avatar icon="person" color="grey" text-color="white" />
            </q-item-section>

            <q-item-section>
            <q-item-label>{{passagem.nome}}</q-item-label>
            <q-item-label caption>{{passagem.documento}}</q-item-label>
            </q-item-section>
        </q-item>
        <q-item>
            <q-item-section avatar></q-item-section>
            <q-item-section>
            <q-item-label class="text-h6 text-weight-bolder">{{passagem.horario.price}}</q-item-label>
            </q-item-section>
        </q-item>

        <div>
            <q-btn color="secondary" class="full-width" label="Confirmar" to="/" />
        </div>
        
    </q-card>
    </div>
</template>

<script setup>
import { usePassagem } from '../store/passagem';
const passagem = usePassagem();
</script>

<script>
export default {

}
</script>

<style>
</style>