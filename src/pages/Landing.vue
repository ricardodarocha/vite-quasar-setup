<template>
  <div>
 <div       class="q-pa-lg"></div>
    <div       class="q-pa-lg"></div>

    <div       class="q-pa-lg"></div>
    <q-expansion-item
      class="q-pa-lg"
      v-model="teste"
      icon="perm_identity"
      label="Account settings"
      caption="John Doe"
    >
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
          commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
        </q-card-section>
      </q-card>

    </q-expansion-item>
    <!-- -------------------------- -->
    <q-expansion-item
      class="q-pa-lg"
     v-model="teste2"
      icon="perm_identity"
      label="Account settings"
      caption="John Doe"
    >
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
          commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </q-card-section>
      </q-card>

    </q-expansion-item>
    <!-- -------------------------- -->
  </div>
</template>

<script>
export default {
  name: "Landing"
}
</script>

<style>

</style>