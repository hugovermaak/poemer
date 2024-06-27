<script setup>
const props = defineProps({
  author: String
})

const emit = defineEmits(['selected'])

const handleSelected = (author) => {
  emit('selected', author)
}
</script>
<template>
  <div class="px-4 py-2 border mb-2" @click="handleSelected(author)">
    {{ props.author }}
  </div>
</template>
