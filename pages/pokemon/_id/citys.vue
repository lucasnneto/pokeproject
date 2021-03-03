<template>
  <div class="flex flex-col justify-between h-full relative">
    <div class="flex flex-col items-center justify-center">
      <icon
        name="back"
        color="#A9A9A9"
        class="flex items-center px-5 cursor-pointer transform rotate-90"
        @click="handleNavigate(`/pokemon/${$route.params.id}/consoles`)"
      />
      <h1 class="mt-2 text-3xl font-lato font-bold uppercase mb-5">Cidades</h1>
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
      <div class="md:w-1/2 flex flex-col md:pl-10 overflow-y-auto">
        <div
          v-for="local in pokemon.local"
          :key="local"
          class="mb-5 flex flex-col items-center"
        >
          <city-card :areaUrl="local" />
        </div>
        <div
          v-if="pokemon.local.length === 0"
          class="h-full text-center flex items-center justify-center"
        >
          Esse pokemon não tem cidades registadas!
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class citys extends Vue {
  private pokemon: any = {
    local: [],
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
      const { name, sprites } = await this.$axios.$get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      const local = await this.$axios.$get(
        `https://pokeapi.co/api/v2/pokemon/${id}/encounters`
      );
      this.pokemon = {
        name,
        id,
        color: color.name == "white" ? "gray" : color.name,
        sprite:
          sprites.other.dream_world.front_default ??
          sprites.other["official-artwork"].front_default,
        local: local.map((el: any) => el.location_area.url),
      };
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
