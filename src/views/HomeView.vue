<template>
  <div class="home">
    <h1 class="title">Code Editor</h1>

    <RunButton @click="getClick">Get Started</RunButton>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import RunButton from '@/components/RunButton.vue'
const router = useRouter()

const getClick = () => {
  router.push({ name: 'codeEditor' })
}
</script>

<style>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}
.title {
  padding: 30px 0;
  margin: 0;
  font-size: 30px;
}
</style>
