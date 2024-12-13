<template>
  <div>
    <h1 class="title">Code Editor</h1>
    <TaskDescription />
    <CodeEditor />
  </div>
</template>

<script setup lang="ts">
import CodeEditor from '@/components/CodeEditor.vue'
import TaskDescription from '@/components/TaskDescription.vue'
</script>