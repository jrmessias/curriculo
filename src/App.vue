<template>
  <div :class="{ 'dark': isDarkMode }" class="transition duration-300">
    <main
        class="h-full min-h-screen text-slate-900 dark:text-slate-200 bg-gradient-to-t from-slate-300 to-slate-100 dark:from-slate-900 dark:to-slate-800 dark:bg-slate-700 md:py-6">
      <div
          class="mx-auto page max-w-screen-xl print:max-w-a4 md:max-w-a4 md:h-a4 xsm:p-8 sm:p-9 md:p-10 bg-slate-200 dark:bg-slate-800 p-6">
        <!-- Name -->
        <header class="flex items-center mb-8 md:mb-11">
          <div
              class="initials-container mr-5 text-base leading-none text-white bg-slate-700 font-medium print:bg-black print:border print:border-slate-100 px-3"
              style="padding-bottom: 0.6875rem; padding-top: 0.6875rem; /*11px*/">
            <div class="initial text-center" style="padding-bottom: 0.1875rem; /*3px*/">{{ site.acronym }}</div>
          </div>
          <h1 class="text-2xl font-semibold text-slate-700 dark:text-slate-500 pb-px">
            {{ site.title }}
          </h1>
        </header>
        <!-- end Name -->
        <!-- Column -->
        <div class="md:columns-2 print:columns-1 gap-8 md:h-a4-col print:h-a4-col col-fill-auto">
          <!--  about -->
          <!-- Contact -->
          <section class="mt-8 first:mt-0">
            <div class="break-inside-avoid">
              <h2 class="mb-4 font-bold tracking-widest text-sm2 text-slate-700 dark:text-slate-300 uppercase">
                Contato
              </h2>
              <ContactWidget />
            </div>
          </section>
          <!-- Experience -->
          <section class="mt-8 first:mt-0">
            <div class="break-inside-avoid">
              <h2 class="mb-4 font-bold tracking-widest text-sm2 text-slate-700 dark:text-slate-300 uppercase">
                Experiência profissional
              </h2>
              <ProfessionalWidget/>
            </div>
          </section>
          <section class="mt-8 first:mt-0">
            <!-- To keep in the same column -->
            <div class="break-inside-avoid">
              <!--              <div class="break-inside-avoid text-right list-inside pr-7 text-slate-700 dark:text-slate-500">-->
              <!--                <a href="/en" class="hover:underline">-->
              <!--                  English version-->
              <!--                  <span-->
              <!--                      class="inline-block text-slate-500 print:text-black font-normal group-hover:text-slate-700 transition duration-100 ease-in">↗</span>-->
              <!--                </a>-->
              <!--              </div>-->
              <h2 class="mb-4 font-bold tracking-widest text-sm2 text-slate-700 dark:text-slate-300 uppercase">
                Formação acadêmica
              </h2>
              <EducationWidget/>
            </div>
          </section>
          <!--          <section class="mt-8 first:mt-0">-->
          <!-- To keep in the same column -->
          <!--            <div class="break-inside-avoid">-->
          <!--              <h2 class="mb-4 font-bold tracking-widest text-sm2 text-slate-700 dark:text-slate-300 uppercase">-->
          <!--                Serviço Voluntário-->
          <!--              </h2>-->
          <!--              <VolunteeringWidget/>-->
          <!--            </div>-->
          <!--          </section>-->
          <section class="mt-8 first:mt-0">
            <!-- To keep in the same column -->
            <div class="break-inside-avoid">
              <h2 class="mb-4 font-bold tracking-widest text-sm2 text-slate-700 dark:text-slate-300 uppercase">
                Projetos
              </h2>
              <ProjectWidget/>
            </div>
          </section>
          <section class="mt-8 first:mt-0">
            <!-- To keep in the same column -->
            <div class="break-inside-avoid">
              <h2 class="mb-4 font-bold tracking-widest text-sm2 text-slate-700 dark:text-slate-300 uppercase">
                Eventos
              </h2>
              <EventWidget/>
            </div>
          </section>
          <section class="mt-8 first:mt-0">
            <!-- To keep in the same column -->
            <div class="break-inside-avoid">
              <h2 class="mb-4 font-bold tracking-widest text-sm2 text-slate-700 dark:text-slate-300 uppercase">
                Skills
              </h2>
              <SkillWidget/>
            </div>
          </section>
          <!--      <section class="mt-8 first:mt-0">-->
          <!--        &lt;!&ndash; To keep in the same column &ndash;&gt;-->
          <!--        <div class="break-inside-avoid">-->
          <!--          <h2 class="mb-4 font-bold tracking-widest text-sm2 text-slate-700 dark:text-slate-300 uppercase">-->
          <!--            Certificação-->
          <!--          </h2>-->
          <!--          {% include certificates.html %}-->
          <!--        </div>-->
          <!--      </section>-->
          <!--          <section class="mt-8 first:mt-0">-->
          <!--            &lt;!&ndash; To keep in the same column &ndash;&gt;-->
          <!--            <div class="break-inside-avoid">-->
          <!--              <h2 class="mb-4 font-bold tracking-widest text-sm2 text-slate-700 dark:text-slate-300 uppercase">-->
          <!--                Certificações-->
          <!--              </h2>-->
          <!--              <CertificateWidget/>-->
          <!--            </div>-->
          <!--          </section>-->
        </div>
        <!-- end Column -->
      </div>
      <div class="fixed top-5 right-5 print:hidden">
        <button id="theme-toggle" @click="toggleTheme" type="button"
                class="border-0 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none rounded-full text-sm p-2 w-10 h-10 dark:bg-slate-800 cursor-pointer">
<!--          <span v-show="!isDarkMode" class="w-full">-->
<!--            🌑-->
<!--          </span>-->
<!--          <span  v-show="isDarkMode" class="w-full">-->
<!--            ☀️-->
<!--          </span>-->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 20 20" fill="currentColor"
               v-show="!isDarkMode">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 20 20" fill="currentColor"
               v-show="isDarkMode">
            <path fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd"/>
          </svg>
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import ContactWidget from "./components/Contact/ContactWidget.vue";
import ProfessionalWidget from "./components/ProfessionalWidget.vue";
import EducationWidget from "./components/EducationWidget.vue";
import ProjectWidget from "./components/ProjectWidget.vue";
import EventWidget from "./components/EventWidget.vue";
import SkillWidget from "./components/SkillWidget.vue";

const isContactModalOpen = ref(false);
let isDarkMode = ref(false);
const isDarkModeLocalStorageItem = ref('color-theme');
const darkModeOption = ref('dark');
const lightModeOption = ref('light');

const getTheme = () => {
  if (localStorage.getItem(isDarkModeLocalStorageItem.value) === darkModeOption.value || (!(isDarkModeLocalStorageItem.value in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add(darkModeOption.value);
    isDarkMode.value = true;
  } else {
    document.documentElement.classList.remove(darkModeOption.value)
    isDarkMode.value = false;
  }
}
getTheme();

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  setTheme(isDarkMode.value)
}

const setTheme = (value) => {
  (value) ? document.documentElement.classList.add(darkModeOption.value) : document.documentElement.classList.remove(darkModeOption.value);
  window.localStorage.setItem(isDarkModeLocalStorageItem.value, value ? darkModeOption.value : lightModeOption.value);
}

const openContactModal = () => {
  isContactModalOpen.value = true;
}

const site = ref({
  title: 'Israel Messias Junior',
  acronym: 'IMJ',
  url: 'https://curriculo.jrmessias.com.br',
});

// const submitForm = () => {
//   // Handle form submission here
//   console.log('Form submitted with email:', email.value);
//   // You would typically send this to your backend or email service
//   alert('Obrigado! Seu eBook será enviado para ' + email.value);
//   email.value = ''; // Clear the input after submission
// };
</script>

<style>

</style>
