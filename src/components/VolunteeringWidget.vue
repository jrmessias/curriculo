<script setup lang="ts">
import {ref} from "vue";

const volunteering = ref([
  {
    time: '2019-2021',
    role: 'Bombeiro Comunitário',
    company: 'CBMSC',
    details: 'Atendimento pré-hospitalar e resgate.'
  },
]);
</script>

<template>
  <section class="mb-4 break-inside-avoid" v-for="(volunteer, index) in volunteering" :key="index">
    <header>
      <h3 class="text-lg font-semibold text-slate-600 dark:text-slate-400 leading-snugish">
        {{volunteer.company}}
      </h3>
      <p class="leading-normal text-md text-slate-600 dark:text-slate-400">
        {{volunteer.time}} | {{volunteer.role}}
      </p>
    </header>
    <ul>
      <li class="mt-2.1 text-md text-slate-500 leading-normal text-justify">
        {{volunteer.details}}
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>
