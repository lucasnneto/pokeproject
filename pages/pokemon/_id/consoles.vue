<template>
  <div class="flex flex-col justify-between h-full relative">
    <div class="flex flex-col items-center justify-center">
      <icon
        name="back"
        color="#A9A9A9"
        class="flex items-center px-5 cursor-pointer transform rotate-90"
        @click="handleNavigate(`/pokemon/${$route.params.id}`)"
      />
      <h1 class="mt-2 text-3xl font-lato font-bold uppercase mb-5">Jogos</h1>
    </div>
    <div class="h-full flex justify-center overflow-y-hidden">
      <div class="w-1/2 hidden md:flex flex-col items-center justify-center">
        <h1
          class="mt-2 text-3xl font-lato font-bold uppercase mb-5"
          :style="{ color: pokemon.color }"
        >
          {{ pokemon.name }}
        </h1>
        <img
          class="mb-3 cursor-pointer"
          style="max-height: 270px !important; min-height: 170px !important"
          @click="handleNavigate(`/pokemon/${$route.params.id}`)"
          :src="pokemon.sprite"
        />
      </div>
      <div class="md:w-1/2 flex flex-col md:pl-24 overflow-y-auto">
        <game-card v-for="game in pokemon.games" :key="game" :game="game" />
        <div
          v-if="pokemon.games.length === 0"
          class="h-full text-center flex items-center justify-center"
        >
          Esse pokemon não tem jogos registados!
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <icon
        name="back"
        color="#A9A9A9"
        class="flex items-center px-5 cursor-pointer transform -rotate-90"
        @click="handleNavigate(`/pokemon/${$route.params.id}/citys`)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class games extends Vue {
  private pokemon: any = {
    games: [],
  };

  private handleNavigate(route: string): void {
    this.$router.push(route);
  }
  async mounted() {
    const id = this.$route.params.id;
    try {
      const { color } = await this.$axios.$get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`
      );
      const { game_indices, name, sprites } = await this.$axios.$get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      this.pokemon = {
        name,
        id,
        color: color.name == "white" ? "gray" : color.name,
        sprite:
          sprites.other.dream_world.front_default ??
          sprites.other["official-artwork"].front_default,
        games: game_indices.map((el: any) => el.version.name),
      };
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

