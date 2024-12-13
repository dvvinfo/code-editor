<script setup lang="ts">
const emit = defineEmits(['click'])

function emitClick() {
  emit('click')
}
</script>

<template>
  <button @click="emitClick" class="run-button">
    <slot>Run</slot>
  </button>
</template>

<style>
.run-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.run-button:hover {
  background-color: #0056b3;
}
</style>
