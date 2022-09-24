<template>
  <q-page class="column flex-center" padding>
    <q-table
        :columns="columns"
        :rows="usuarios"
    > </q-table>
    <h1></h1>
    <pre>
      {{ usuarios }}
    </pre>
  </q-page>
</template>

<script setup>

const columns = [{
        label: '*',
        field: (row) => 1000 + row.id,
        align: 'center',},

    {
        name: 'Nome',
        label: 'Nome',
        field: 'nome',
        align: 'left',
    },{
        name: 'Email',
        label: 'E-mail',
        field: 'email',
        align: 'left',
    }
]

const usuarios = [
    {
        id: 1,
        nome: 'Ricardo',
        email: 'ricardodarocha@outlook.com',
    },
    {
        id: 2,
        nome: 'Ricardo',
        email: 'ricardodarocha@outlook.com',
    },
    {
        id: 3,
        nome: 'Ricardo',
        email: 'ricardodarocha@outlook.com',
    },
    {
        id: 4,
        nome: 'Ricardo',
        email: 'ricardodarocha@outlook.com',
    },
    {
        id: 5,
        nome: 'Ricardo',
        email: 'ricardodarocha@outlook.com',
    },
    {
        id: 6,
        nome: 'Ricardo',
        email: 'ricardodarocha@outlook.com',
    },
    {
        id: 7,
        nome: 'Ricardo',
        email: 'ricardodarocha@outlook.com',
    },
    {
        id: 8,
        nome: 'Ricardo',
        email: 'ricardodarocha@outlook.com',
    },    
]   


</script>

<style></style>
