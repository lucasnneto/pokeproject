<template>
  <div class="h-full flex flex-col justify-between">
    <header-base name="lista pokemon" />
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ListaPokemon extends Vue {}
</script>
