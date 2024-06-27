<script setup>
import { ref, onMounted } from 'vue'
import { useSlugify } from '@/composables/useSlugify'
import { useRoute, useRouter } from 'vue-router'
import { poemService } from '@/services/poemService'

const router = useRouter()
const route = useRoute()
const { unslugify, unslugifiedString } = useSlugify()

const poems = ref()
const error = ref(null)

onMounted(async () => {
  unslugify(route.params.poet)

  try {
    poems.value = await poemService.getPoemsByAuthor(unslugifiedString.value)
  } catch (e) {
    error.value = 'Failed to fetch poems'
  }
})
</script>
<template>
  <div>
    <h1>Poems by: {{ unslugifiedString }}</h1>
    <div @click="router.back">Back</div>
    <pre>{{ poems }}</pre>
  </div>
</template>
