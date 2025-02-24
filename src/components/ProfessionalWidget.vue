<script setup lang="ts">
import {ref} from "vue";

const experiences = ref([
  {
    role: "Professor",
    time: "2023-Atual",
    company: "SENAC, SMOeste - SC",
    details: "Banco de Dados. Elaboração de projetos web. Publicação de aplicações web." +
        " Desenvolvimento back-end de aplicações web, Google Workspace",
    skills: "HTML, CSS, JS, PHP, CMS, POO, FTP, PHP, Laravel"
  },
  {
    role: "Analista de Sistemas",
    time: "2020-Atual",
    company: "iopoint Tecnologia, SMOeste - SC",
    details: "Desenvolvimento de sistema SaaS, back-end, front-end, API e aplicativo para Android e iOS." +
        " (PHP, JS, TS, CSS, HTML, Dart, Laravel, Angular, Flutter)",
    skills: "Angular, Laravel, Flutter",
  },
  {
    role: "Programador de Sistemas",
    time: "2018-2020",
    company: "Agência PDOIS / Disk Fácil, SMOeste - SC",
    details: "Desenvolvimento e análise de dados para sites corporativos." +
        " Desenvolvimento front e back-end. Otimização para SEO em sites corporativos." +
        " Atendimento e suporte técnico ao cliente.",
    skills: "Laravel, CSS, Javascript",
  },
  {
    role: "Analista de TI",
    time: "2019",
    company: "Hospital Regional Terezinha Gaio Basso / Instituto Santé, SMOeste - SC",
    details: "Suporte técnico a hardware e software. Organização e padronização de atividades internas. " +
        "Análises de melhorias para infra-estrutura. " +
        "Análise, organização e encaminhamentos de melhorias aos sistemas de gestão. " +
        "Otimização e redução de gastos do setor.",
    skills: "Angular, Laravel, Flutter",
  },
  {
    role: "Professor",
    time: "2016-2017",
    company: "SENAC, SMOeste - SC",
    details: "Orientações em aulas no segmento de desenvolvimento web e tecnologias." +
        " Orientações de trabalho de conclusão de curso." +
        " Ensino de HTML, CSS, JS, PHP, Animação web, CMS e POO.",
    skills: "HTML, CSS, JS, PHP, CMS, POO",
  },
  {
    role: "Full-Stack Developer",
    time: "2011-2017",
    company: "DB'links Sistemas, SMOeste - SC",
    details: "Análise de requisitos. Desenvolvimento de sites/sistemas personalizados e internos. " +
        "Desenvolvimento de aplicativo para Android e iOS utilizando linguagens web. " +
  "Padronização de documentações e processos internos. " +
  "Implantação e padronização de sistema de administração para sites/sistemas. Treinamentos internos. " +
  "Desenvolvimento de comércio eletrônico para supermercados integrado com ERP. " +
  "Desenvolvimento de template e personalização de Wordpress. Análise de dados. " +
  "Atendimento ao cliente. Liderança de equipe.",
    skills: "Liderança, Suporte Técnico, PHP, CSS, JS, Scrum, Gestão",
  },
  {
    role: "Instrutor",
    time: "2012-2015",
    company: "SENAI, SMOeste - SC",
    details: "Orientações em aulas no segmento de desenvolvimento web e tecnologias." +
        " Orientações de trabalho de conclusão de curso." +
        " Ensino de HTML, CSS, JS, PHP, POO e frameworks web.",
    skills: "HTML, CSS, JS, PHP, CMS",
  }
]);
</script>

<template>
  <section class="mb-4 break-inside-avoid" v-for="(experience, index) in experiences" :key="index">
    <header>
      <h3 class="text-lg font-semibold text-slate-600 dark:text-slate-400 leading-snugish">
        {{ experience.company }}
      </h3>
      <p class="leading-normal text-md text-slate-600 dark:text-slate-400">
        {{ experience.time }} | {{ experience.role }}
      </p>
    </header>
    <ul>
      <li class="mt-2.1 text-md text-slate-500 leading-normal text-justify">
        <span class="sm:-ml-3.2 select-none transform -translate-y-px">›</span>
        {{ experience.details }}
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>
