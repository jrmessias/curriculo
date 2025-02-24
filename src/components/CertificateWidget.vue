<script setup lang="ts">

import {ref} from "vue";

const certificates = ref([
  {
    url: 'https://brm-workforce.oracle.com/pdf/certview/images/OCIF2023CA.png',
    title: 'Oracle Cloud Infrastructure 2023 Certified Foundations Associate',
  },
  {
    url: 'https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png',
    title: 'Cisco Introduction to Cybersecurity',
  },
  {
    url: 'https://images.credly.com/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png',
    title: 'Cisco Introduction to IoT',
  },
  {
    url: 'https://images.credly.com/images/e360c3e0-4031-479b-ad7b-5ce878bc29d7/image.png',
    title: 'Cisco Networking Academy Learn-A-Thon 2024',
  },
]);
</script>

<template>
  <section class="mb-4.5 break-inside-avoid aspect-square">
    <img :src="certificate.url" :title="certificate.title" :alt="certificate.title" class="m-3 inline"
         width="150" v-for="(certificate, index) in certificates" :key="index">
  </section>
</template>

<style scoped>

</style>
