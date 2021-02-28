<template>
  <div class="mb-5 flex items-center">
    <img
      v-if="hover"
      :src="require(`~/assets/games/${game}.png`)"
      class="w-1/2 mr-5 transform scale-300 imgHover"
    />
    <img
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :src="require(`~/assets/games/${game}.png`)"
      class="h-24 mr-5"
    />
    <p class="text-xl font-lato font-bold uppercase">{{ game }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Pokemoncard extends Vue {
  @Prop({ default: "", required: true })
  readonly game!: string;
  private hover: boolean = false;
}
</script>
<style scoped>
.imgHover {
  z-index: 500;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(0%, -50%);
}
</style>
