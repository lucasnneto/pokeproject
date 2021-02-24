<template>
  <div class="h-full flex flex-col justify-start">
    <header-base class="mb-8" name="lista pokemon" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ListaPokemon extends Vue {}
</script>
