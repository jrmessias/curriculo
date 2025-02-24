<template>
  <section class="mb-4.5 break-inside-avoid">
    <ul class="list-inside pr-7 text-slate-700 dark:text-slate-500">
      <li class="mt-1.5 leading-normal text-md">
        <a :href="`//${contact.site}`" class="group hover:underline">
          {{ contact.site }}
          <span
              class="inline-block text-slate-500 print:text-black font-normal group-hover:text-slate-700 transition duration-100 ease-in">↗</span>
        </a>
      </li>
      <li class="mt-1.5 leading-normal text-md print:hidden">
        <div>
          <a href="#" class="group hover:underline" @click.prevent="openModal">
            Formulário de contato
          </a>
          <ContactModal :is-open="isModalOpen" @close="closeModal"/>
        </div>
      </li>
      <li class="mt-1.5 leading-normal text-md">
        <a :href="`https://wa.me/${contact.whatsapp}?text=Contato via currículo on-line`" class="hover:underline">
          {{ contact.phone }}
          <span
              class="inline-block text-slate-500 print:text-black font-normal group-hover:text-slate-700 transition duration-100 ease-in">↗</span>
        </a>
      </li>
    </ul>
  </section>
</template>


<script setup>
import {ref} from "vue";
import ContactModal from "./ContactModal.vue";

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const contact = ref({
  email: 'jrmessias@gmail.com',
  github: 'jrmessias',
  linkedin: 'jrmessias',
  phone: '+55 49 98819 8409',
  twitter: 'jrmessias',
  instagram: 'imj.dev',
  gitlab: 'jrmessias',
  site: 'jrmessias.com.br',
  whatsapp: '5549988198409',
  email_form_url: 'https://form.jotform.com/221178246038051',
});

</script>
