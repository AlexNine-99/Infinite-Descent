<script setup lang="ts">
import FileUploader from './components/FileUploader.vue';
import ThemeToggler from './components/ThemeToggler.vue';
</script>

<template>
  <nav class="navbar navbar-expand-md" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Infinite Descent</a>
      <ThemeToggler />
    </div>
  </nav>
  <div class="container py-4 px-3 mx-auto">
    <h1 class="mb-0">Infinite Descent</h1>
    <p class="lead mb-4">
      A flight plan editing tool for creating optimized descent profiles in
      Infinite Flight
    </p>
    <FileUploader
      class="fpl-uploader"
      title="Upload flight plan"
      :fileTypes="['.fpl']"
      :maxFileCount="1"
    />
  </div>
</template>

<style lang="scss">
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/mixins';
@import 'bootstrap/scss/variables';

.navbar {
  background-color: mix(mix($primary, $success), $secondary);
}
</style>
