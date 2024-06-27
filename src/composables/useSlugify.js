import { ref } from 'vue'

export function useSlugify() {
  const slugifiedString = ref('')
  const unslugifiedString = ref('')

  function slugify(str) {
    slugifiedString.value = str.trim().replace(/\s+/g, '-')
  }

  function unslugify(str) {
    console.log('UNSLUGIFY', str)
    unslugifiedString.value = str.trim().replace(/-+/g, ' ')
  }

  return {
    slugifiedString,
    unslugifiedString,
    slugify,
    unslugify
  }
}
