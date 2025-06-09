<script setup lang="ts">
import { onMounted, reactive, ref, useTemplateRef } from 'vue'

defineProps({
  title: String,
  fileTypes: {
    type: Array as () => string[],
  },
  maxFileCount: {
    type: Number,
    validator: (value: number) => value >= 0,
  },
})

let dragging = ref(false)
let files = reactive<string[]>([])

const browseInput = useTemplateRef('browse-input')

onMounted(() => {
  browseInput?.value?.focus()
})

files.push('Example.fpl', 'AnotherExample.fpl')
</script>

<template>
  <div class="upload-container">
    <h4 class="mb-3">{{ title }}</h4>
    <div
      :class="'drop-area text-center rounded p-4 mb-3' + (dragging ? ' dragging' : '')"
      @dragenter="dragging = true"
      @mouseleave="dragging = false"
      @dragover.prevent
      @drop.prevent="dragging = false"
    >
      <button class="browse btn btn-primary mx-1 mb-1 px-2 py-1" @click="browseInput?.click()">
        Browse
      </button>
      <input ref="browse-input" type="file" class="browse-input" :multiple="maxFileCount !== 0" />
      <p class="drag-option text-body-secondary m-0">or drag files here</p>
    </div>
    <div class="file-list">
      <div class="card p-2 mb-3" v-for="file in files" :key="file">
        {{ file }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/mixins';
@import 'bootstrap/scss/variables';

.drop-area {
  font-size: 1.15rem;

  border-width: 2px;
  border-style: dashed;

  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  @at-root [data-bs-theme='light'] & {
    border-color: $border-color;
    background-color: $light-bg-subtle;

    &.dragging {
      border-color: $body-tertiary-bg-dark;
      background-color: $body-tertiary-bg;
    }
  }

  @at-root [data-bs-theme='dark'] & {
    border-color: $light-border-subtle-dark;
    background-color: $dark-bg-subtle-dark;

    &.dragging {
      border-color: $dark-border-subtle;
      background-color: $body-tertiary-bg-dark;
    }
  }
}

.browse-input {
  display: none;
}
</style>
