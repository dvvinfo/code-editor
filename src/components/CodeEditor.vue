<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as monaco from 'monaco-editor';
import LanguageSelector from './LanguageSelector.vue';
import RunButton from './RunButton.vue';

const language = ref('python');
const editorContainer = ref<HTMLElement | null>(null);
let editor: monaco.editor.IStandaloneCodeEditor;
const output = ref('');

onMounted(() => {
  editor = monaco.editor.create(editorContainer.value!, {
    value: '',
    language: language.value,
    theme: 'vs-dark',
  });

  // Add event listener for window resize
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  // Remove event listener when component is destroyed
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  if (editor) {
    editor.layout();
  }
}

function runCode() {
  const code = editor.getValue().trim();
  if (code === '') {
    output.value = 'Error: Code cannot be empty.';
    return;
  }

  fetch('/api/execute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ language: language.value, code }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'success') {
        output.value = data.output;
      } else {
        output.value = `Error: ${data.error}`;
      }
    });
}
</script>

<template>
  <div class="editor-container">
    <LanguageSelector v-model:language="language" />
    <div ref="editorContainer" class="editor"></div>
    <RunButton @click="runCode" />
    <div v-if="output" class="output-container">
      <h3>Output:</h3>
      <pre>{{ output }}</pre>
    </div>
  </div>
</template>

<style>
.editor-container {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.editor {
  width: 100%;
  min-height: 400px;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  text-align: left;
}

.output-container {
  margin-top: 20px;
  padding: 10px;
  background-color: #e9ecef;
  border-radius: 4px;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>