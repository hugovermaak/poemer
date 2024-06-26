<script setup>
import { ref, onMounted } from 'vue'
import { poemService } from '@/services/poemService'

const authors = ref([])
const error = ref(null)

onMounted(async () => {
  try {
    authors.value = await poemService.getAuthors()
  } catch (e) {
    error.value = 'Failed to fetch authors'
  }
})
</script>

<template>
  <main>
    <h1 class="text-emerald-500 text-2xl">Welcome</h1>
  </main>
</template>
