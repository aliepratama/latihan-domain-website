<template>
  <div class="w-full flex justify-between">
    <span>Logo</span>
    <ToggleButton v-model="themeStore.darkMode" onLabel="Dark" offLabel="Light" onIcon="pi pi-moon" 
    offIcon="pi pi-sun" class="w-36" aria-label="Color theme" @click="themeStore.toggleDarkMode()"/>
  </div>
</template>

<script lang="ts" setup>
const themeStore = useThemeStore()
</script>
