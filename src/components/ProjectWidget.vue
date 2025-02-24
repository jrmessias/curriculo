<script setup lang="ts">
import {ref} from "vue";

const projects = ref([
  {
    title: 'Weather App',
    time: 2021,
    link: 'https://weather_app.jrmessias.com.br/',
    details: 'Aplicativo para previsão do tempo'
  },
  {
    title: 'Vuemon',
    time: 2021,
    link: 'https://vuemon.jrmessias.com.br/',
    details: 'Pokedéx em Vue.js'
  },
  {
    title: 'Vuedéx Go',
    time: 2021,
    link: 'https://vuedex-go.jrmessias.com.br/',
    details: 'Pokedéx do Pokémon Go em Vue.js'
  },
  {
    title: 'React Calculator',
    time: 2021,
    link: 'https://jrmessias-react-calculator.netlify.app/',
    details: 'Calculadora em React'
  }
]);
</script>

<template>
  <section class="mb-4.5 break-inside-avoid" v-for="(project, index) in projects" :key="index">
    <header>
      <h3 class="text-lg font-semibold eading-snugish text-slate-600 dark:text-slate-400">
        <a href="{{project.link}}" class="group">
          {{ project.title }}
          <span
              class="inline-block text-slate-500 print:text-black font-normal group-hover:text-slate-700 transition duration-100 ease-in">↗</span>
        </a>
      </h3>
      <!--<p class="leading-normal text-md text-slate-600 dark:text-slate-400">-->
      <!--    {{project.time}}-->
      <!--</p>-->
    </header>
    <p class="mt-2.1 text-md text-slate-500 leading-normal">
      {{ project.details }}
    </p>
  </section>
</template>

<style scoped>

</style>
