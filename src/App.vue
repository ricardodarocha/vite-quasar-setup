<script setup>
</script>

<template>
  <div class="q-pa-md"> 
    <q-layout  class="rounded-borders" view="lhh lpr lFf" container style="height: 96vh; backround-color: #e7e7fa">
      <q-header >
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm" />
          <q-space ></q-space>
          <q-btn flat round dense icon="search" class="q-mr-xs" />
          <q-btn flat round dense icon="group_add" />
        </q-toolbar>
        <q-tabs align="left">
        <q-route-tab to="/" icon="store" label="menu"/>
        <q-route-tab to="/new" icon="receipt" label="Novo" />
        <q-route-tab to="/digitar" icon="computer" label="Digitação" />
        <q-route-tab to="/bilhete" icon="history" label="Recentes" />
      </q-tabs>
    </q-header>

    <q-page-container>


      <router-view />
    </q-page-container>
    
      
    </q-layout>
    <!-- <router-link to="/">Home</router-link>|   -->
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  background-color: #f3efeb;
}
</style>