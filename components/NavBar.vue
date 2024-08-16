<template>
  <div class="w-full flex justify-between">
    <span>Logo</span>
    <ToggleButton v-model="checked" onLabel="Light" offLabel="Dark" onIcon="pi pi-sun" 
    offIcon="pi pi-moon" class="w-36" aria-label="Color theme" @click="toggleDarkMode()"/>
  </div>
</template>

<script lang="ts" setup>
const checked = ref<boolean>(true)
function toggleDarkMode() : void {
    const element = document.querySelector('html')
    element?.classList.toggle('dark-mode-app')
}
</script>

<style>

</style>