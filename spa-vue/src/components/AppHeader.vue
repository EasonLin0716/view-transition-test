<template>
  <header>
    <h1>{{ h1Text }}</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const h1Text = ref('')
const h1TextMap = {
  '/': 'Home',
  '/about': 'About',
  '/contact': 'Contact',
}
watch(() => route.path, () => {
  h1Text.value = h1TextMap[route.path]
}, { immediate: true })
</script>