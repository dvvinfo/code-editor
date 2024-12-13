<script setup lang="ts">
import { ref } from 'vue'

const selectedLanguage = ref('python')
const emit = defineEmits(['update:language'])

function emitLanguageChange() {
  emit('update:language', selectedLanguage.value)
}
</script>

<template>
  <select v-model="selectedLanguage" @change="emitLanguageChange" class="language-selector">
    <option value="python">Python</option>
    <option value="go">Go</option>
  </select>
</template>

<style>
.language-selector {
  margin-bottom: 10px ;
  padding: 5px;
  font-size: 16px;
}
</style>
