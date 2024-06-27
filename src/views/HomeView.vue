<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import AuthorCard from '../components/AuthorCard.vue'
import { poemService } from '@/services/poemService'
import { useSlugify } from '@/composables/useSlugify'

const authors = ref([])
const filterTerm = ref('')
const error = ref(null)
const router = useRouter()

const { slugify, slugifiedString } = useSlugify()

onMounted(async () => {
  try {
    authors.value = await poemService.getAuthors()
  } catch (e) {
    error.value = 'Failed to fetch authors'
  }
})

const filteredAuthors = computed(() => {
  return authors.value.filter((author) =>
    author.toLowerCase().includes(filterTerm.value.toLocaleLowerCase())
  )
})

const loadPoems = (e) => {
  slugify(e)
  router.push(`/${slugifiedString.value}`)
  console.log(slugifiedString)
}
</script>

<template>
  <main class="container">
    <h1 class="text-emerald-500 text-2xl">Welcome</h1>
    <div>
      <h2>Authors</h2>
      <input id="filter" v-model="filterTerm" @input="filterAuthors" />
      <div class="w-96">
        <AuthorCard
          v-for="(author, index) in filteredAuthors"
          :key="index"
          :author="author"
          @selected="loadPoems($event)"
        />
      </div>
    </div>
  </main>
</template>
