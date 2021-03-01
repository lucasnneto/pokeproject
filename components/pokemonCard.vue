<template>
  <card
    v-if="!error"
    :class="{ 'cursor-pointer': !loading }"
    @click="clickPokemon"
  >
    <template v-slot:body>
      <div
        v-if="!loading"
        class="h-full flex flex-col items-center justify-between"
      >
        <p class="mb-3 font-lato font-semibold text-xl uppercase">
          {{ (pokemonDetalhes.id || "") + ". " + (pokemonDetalhes.name || "") }}
        </p>
        <img
          class="w-1/2 mb-3"
          style="max-height: 100px !important"
          :src="pokemonDetalhes.sprite"
        />
        <div class="flex justify-center">
          <img
            v-for="type in pokemonDetalhes.types"
            :key="type.slot"
            class="w-1/5 mb-3"
            :src="require(`~/assets/tipos/${pokeType(type.type.name)}.png`)"
          />
        </div>
      </div>
      <div v-else class="h-full flex justify-center items-center">
        <icon name="loading" size="70" class="animate-spin" />
      </div>
    </template>
  </card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { types } from "@/utils/type";
import card from "./card.vue";
@Component({
  components: {
    card,
  },
})
export default class Pokemoncard extends Vue {
  @Prop({ default: { name: "", url: "" }, required: true })
  readonly pokemon!: any;
  private loading: boolean = false;
  private pokemonDetalhes: any = {};
  private error: boolean = false;
  private clickPokemon(): void {
    if (!this.loading) this.$emit("select-pokemon", this.pokemonDetalhes.id);
  }
  private pokeType(type: string): string {
    return types[type].namesimple || "normal";
  }
  private async created() {
    this.loading = true;
    try {
      const newURL =
        this.pokemon.url[this.pokemon.url.length - 1] != "/"
          ? this.pokemon.url + "/"
          : this.pokemon.url;
      const pkm = await this.$axios.$get(newURL);
      this.pokemonDetalhes = {
        name: this.pokemon.name,
        id: pkm.id,
        sprite:
          pkm.sprites.other.dream_world.front_default ??
          pkm.sprites.other["official-artwork"].front_default,
        types: pkm.types,
      };
    } catch (error) {
      console.log(error);
      this.error = true;
    } finally {
      this.loading = false;
    }
  }
}
</script>
