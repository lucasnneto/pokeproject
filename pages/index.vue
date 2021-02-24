<template>
  <div class="h-full flex flex-col">
    <div class="flex justify-center mb-10">
      <h1 class="text-4xl font-lato font-bold mb-2 uppercase">PokeAgenda</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 justify-items-center mb-8">
      <card @click="handleCard('pokemon')" class="cursor-pointer">
        <template v-slot:body>
          <div class="h-full flex flex-col items-center justify-between">
            <p class="mb-3 font-lato font-semibold text-2xl uppercase">
              Pokémon
            </p>
            <img
              class="w-3/4 mb-3"
              style="max-height: 160px !important"
              :src="pokemon.sprite"
            />
          </div>
        </template>
      </card>
      <card @click="handleCard('battle')" class="cursor-pointer">
        <template v-slot:body>
          <div class="h-full flex flex-col items-center justify-between">
            <p class="mb-3 font-lato font-semibold text-2xl uppercase">
              Batalha
            </p>
            <img class="w-1/2 mb-3" src="@/assets/vs.png" />
          </div>
        </template>
      </card>
      <card @click="handleCard('team')" class="cursor-pointer">
        <template v-slot:body>
          <div class="h-full flex flex-col items-center justify-between">
            <p class="mb-3 font-lato font-semibold text-2xl uppercase">
              Seu Time
            </p>
            <img class="w-3/4 mb-3" src="~/assets/pokebola.png" />
          </div>
        </template>
      </card>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center">
      <card
        @click="handleCard('type')"
        class="cursor-pointer"
        width="175px"
        height="175px"
      >
        <template v-slot:body>
          <div class="h-full flex flex-col items-center justify-between">
            <p class="mb-3 font-lato font-semibold text-2xl uppercase">Tipo</p>
            <img
              class="w-3/5 mb-3"
              :src="require(`~/assets/tipos/${pokemon.url}.png`)"
            />
          </div>
        </template>
      </card>
      <card
        @click="handleCard('about')"
        class="cursor-pointer"
        width="175px"
        height="175px"
      >
        <template v-slot:body>
          <div class="h-full flex flex-col items-center justify-between">
            <p class="mb-3 font-lato font-semibold text-2xl uppercase">sobre</p>
            <img class="w-1/2 mb-3" src="@/assets/pokedex.png" />
          </div>
        </template>
      </card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import card from "@/components/card.vue";
import { types } from "@/utils/type";
@Component({
  components: {
    card,
  },
})
export default class Index extends Vue {
  private pokemon: any = {
    url: "planta",
  };
  async mounted() {
    const index = Math.floor(Math.random() * (898 - 1)) + 1;
    try {
      const pkm = await this.$axios.$get(
        `https://pokeapi.co/api/v2/pokemon/${index}`
      );
      this.pokemon = {
        sprite:
          pkm.sprites.other.dream_world.front_default ??
          pkm.sprites.other["official-artwork"].front_default,
        type: pkm.types[0].type.name,
        url: types[pkm.types[0].type.name].namesimple,
      };
      // console.log(this.pokemon);
    } catch (e) {
      console.error(e);
    }
  }
  private handleCard(router: string): void {
    this.$router.push(router);
  }
}
</script>
