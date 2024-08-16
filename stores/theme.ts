import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
  id: 'themeStore',
  state: () => ({
    darkMode: true
  }),
  getters: {
    getTheme(state: any): boolean {
      return state.darkMode
    }
  },
  actions: {
    toggleDarkMode(state: any) : void {
      const element = document.querySelector('html')
      element?.classList.toggle('dark-mode-app')
      state.darkMode = !state.darkMode
    }
  }
})