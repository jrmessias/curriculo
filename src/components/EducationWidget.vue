<script setup lang="ts">
import {ref} from "vue";

const educations = ref([
  {
    education: "User Experience (UX) e User Interface (UI)",
    degree: "Pós-Graduação Latu Sensu",
    time: 2024,
    university: "Faculeste"
  },
  {
    education: "Informática na Educação",
    degree: "Pós-Graduação Latu Sensu",
    time: 2024,
    university: "IFMA"
  },
  {
    education: "Desenvolvimento de Aplicações para Dispositivos Móveis (App's)",
    degree: "Pós-Graduação Latu Sensu",
    time: 2020,
    university: "UniBF"
  },
  {
    education: "Desenvolvimento de Jogos Digitais",
    degree: "Pós-Graduação Latu Sensu",
    time: 2020,
    university: "UniBF"
  },
  {
    education: "MBA em Gestão de Marcas e Produtos",
    degree: "Pós-Graduação Latu Sensu",
    time: 2020,
    university: "UniBF"
  },
  {
    education: "Automação Industrial",
    degree: "Técnico",
    university: "SENAI/SMO",
    time: "2017 - 2020"
  },
  {
    education: "Sistemas de Informação",
    degree: "Graduação",
    university: "UNOESC/SMO",
    time: "2003 - 2007"
  }
]);
</script>

<template>
  <section class="mb-4.5 break-inside-avoid" v-for="(education, index) in educations" :key="index">
    <header>
      <h3 class="text-lg font-semibold leading-snugish text-slate-600 dark:text-slate-400">
        {{ education.education }}
      </h3>
      <p class="leading-normal text-md text-slate-500 dark:text-slate-500">
        {{ education.time }} | {{ education.degree }} - {{ education.university }}
      </p>
    </header>
  </section>
</template>

<style scoped>

</style>
