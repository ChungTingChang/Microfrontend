<script setup lang="ts">
import Layout from './components/Layout/layout.vue'
import HomePage from './components/Pages/home-page.vue'
</script>

<template>
  <layout>
    <template #main>
      <router-view />
    </template>
  </layout>
</template>
