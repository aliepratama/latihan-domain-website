<template>
  <div>
    <NavBar/>
    <section class="flex flex-col items-center">
      <h1>Subdomainly.com</h1>
      <span>Create a Free Subdomain</span>
      <InputText type="text" v-model="value" />
    </section>
    <section>
      <DataTable :value="products" tableStyle="min-width: 50rem">
          <Column field="no" header="Code"></Column>
          <Column field="name" header="Name"></Column>
      </DataTable>
    </section>
  </div>
</template>

<script lang="ts" setup>
const value = ref<string>('')
const products = [
  {
    no: 1,
    name: 'Satu',
  },
  {
    no: 2,
    name: 'Dua',
  },
  {
    no: 3,
    name: 'Tiga',
  },
]
</script>

<style>

</style>