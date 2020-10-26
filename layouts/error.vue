<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>Error {{ error.statusCode }}</h1>
    <nuxt-link to="/">Back home</nuxt-link>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'nuxt-property-decorator';
  import { NuxtError } from '@nuxt/types';

  @Component
  export default class extends Vue {
    @Prop() error!: NuxtError;
  }
</script>
