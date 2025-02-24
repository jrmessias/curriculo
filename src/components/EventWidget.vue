<script setup lang="ts">
import {ref} from "vue";

const events = ref([
  {
    title: 'Techstars Startup Weekend São Miguel do Oeste (org.)',
    time: 2024,
    local: 'São Miguel do Oeste - SC',
    link: 'https://www.sympla.com.br/evento/techstars-startup-weekend-2024-sao-miguel-do-oeste/2584641',
    details: 'Aprenda como pensar, trabalhar, e construir uma startup em 54 horas'
  },
  {
    title: 'Techstars Startup Weekend São Miguel do Oeste',
    time: 2023,
    local: 'São Miguel do Oeste - SC',
    link: 'https://www.sympla.com.br/evento/techstars-startup-weekend-2023-sao-miguel-do-oeste/2054838',
    details: 'Aprenda como pensar, trabalhar, e construir uma startup em 54 horas'
  },
  {
    title: 'Techstars Startup Weekend São Miguel do Oeste',
    time: 2022,
    local: 'São Miguel do Oeste - SC',
    link: 'https://event.techstars.com/event/SLLFIKlBXw',
    details: 'Aprenda como pensar, trabalhar, e construir uma startup em 54 horas'
  },
  {
    title: 'Startup Summit',
    time: 2022,
    local: 'Florianópolis - SC',
    link: 'https://www.startupsummit.com.br/',
    details: 'O evento que vai levar sua startup para o próximo nível.'
  },
  {
    title: 'Innova Startup Extreme',
    time: 2021,
    local: 'São Miguel do Oeste - SC',
    link: 'https://www.sympla.com.br/evento/innova-startup-extreme/1003611',
    details: 'Evento de imersão, uma experiência única'
  }
]);
</script>

<template>
  <section class="mb-4.5 break-inside-avoid" v-for="(event, index) in events" :key="index">
    <header>
      <h3 class="text-lg font-semibold eading-snugish text-slate-600 dark:text-slate-400">
        <a href="{{ event.link}}" class="group" title="{{event.details}}">
          {{event.title}}
          <span class="inline-block text-slate-500 print:text-black font-normal group-hover:text-slate-700 transition duration-100 ease-in">↗</span>
        </a>
      </h3>
      <p class="leading-normal text-md text-slate-600 dark:text-slate-400">
        {{event.time}}
      </p>
    </header>
    <p class="mt-2.1 text-md text-slate-500 leading-normal">
      {{event.local}}
    </p>
  </section>
</template>

<style scoped>

</style>
