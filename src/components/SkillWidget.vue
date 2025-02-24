<script setup lang="ts">
import {ref} from "vue";

const skills = ref([
  {
    category: 'Backend',
    skill: [ 'PHP', 'Laravel', 'SQL' ]
  },
  {
    category: 'Frontend',
    skill: [
      'Javascript', 'CSS',
      'SASS/SCSS', 'Tailwind CSS',
      'Bootstrap'
    ]
  },
  {
    category: 'Mobile',
    skill: [ 'Flutter' ]
  },
  {
    category: 'Outras',
    skill: [ 'Liderança', 'Análise de dados' ]
  }
]);
</script>

<template>
  <section class="mb-4.5 break-inside-avoid" v-for="(skill, index) in skills" :key="index">
    <header>
      <h3 class="text-lg font-semibold leading-snugish text-slate-600 dark:text-slate-400">
        {{ skill.category }}
      </h3>
    </header>
    <div class="my-3.2 last:pb-1.5">
      <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
        <li class="text-xs inline-flex items-center font-bold leading-sm px-3 py-1 dark:bg-slate-600 dark:text-slate-900 bg-slate-300 text-slate-600 rounded-full ml-3 first:ml-0"  v-for="(skill_, index) in skill.skill" :key="index">
          {{ skill_ }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>

</style>
