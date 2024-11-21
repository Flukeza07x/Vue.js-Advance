<template>
  <main>
      <FrontendNav />

     <div class="pt-48">
          <router-view />
        </div>

      <FrontendFoot />
  </main>
</template>

<script setup lang="ts">
  import FrontendFoot from '../components/frontend/FrontendFoot.vue';
  import FrontendNav from '../components/frontend/FrontendNav.vue';

</script>

<style scoped>

</style>

