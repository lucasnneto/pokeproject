<template>
  <pokemon-list
    class="overflow-hidden"
    @back-close="back"
    @pokemon="pokemonHandle"
  />
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import pokemonList from "@/components/pokemonList.vue";
@Component({
  components: {
    pokemonList,
  },
})
export default class ListaPokemon extends Vue {
  private back(): void {
    this.$router.push("/");
  }
  private pokemonHandle(id: string): void {
    this.$router.push(`pokemon/${id}`);
  }
}
</script>
