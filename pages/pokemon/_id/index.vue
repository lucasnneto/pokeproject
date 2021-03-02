<template>
  <div class="flex flex-col justify-between h-full">
    <div class="relative flex justify-center">
      <div class="absolute left-0 h-full flex items-center">
        <button
          @click="handleNavigate('/pokemon')"
          class="h-10 w-10 flex items-center justify-center rounded-full focus:outline-none hover:bg-gray-300"
        >
          <icon name="back" size="20" />
        </button>
      </div>
      <div class="justify-center hidden md:flex">
        <img
          v-for="type in pokemon.types"
          :key="type"
          :src="require(`@/assets/tipos/${convertName(type)}.png`)"
          @click="handleClickType(type)"
          class="w-1/6 cursor-pointer mr-5"
          style="min-width: 68px !important"
        />
      </div>
      <div class="md:hidden flex justify-center">
        <h1
          class="mt-2 text-3xl font-lato font-bold uppercase"
          :style="{ color: pokemon.color }"
        >
          {{ pokemon.name }}
        </h1>
      </div>
    </div>
    <div class="hidden md:flex justify-center">
      <h1
        class="mt-2 text-3xl font-lato font-bold uppercase"
        :style="{ color: pokemon.color }"
      >
        {{ pokemon.name }}
      </h1>
    </div>
    <div class="flex justify-center">
      <h1 class="text-5xl font-lato font-bold uppercase">
        {{ pokemon.id }}
      </h1>
    </div>
    <div
      class="relative flex flex-col justify-end items-center"
      style="height: 70%"
    >
      <div
        class="md:absolute md:top-0 flex w-full justify-between items-center md:items-start"
      >
        <icon
          name="back"
          color="#A9A9A9"
          class="flex items-center px-5 cursor-pointer"
          @click="handleNavigatePokemon('previous')"
        />
        <img class="mb-3 pokeImg" :src="pokemon.sprite" />
        <icon
          name="back"
          color="#A9A9A9"
          class="transform rotate-180 flex items-center px-5 cursor-pointer"
          @click="handleNavigatePokemon('next')"
        />
      </div>
      <card width="100%" height="75%">
        <template v-slot:body>
          <div class="flex flex-col md:flex-row h-full">
            <div
              class="grid grid-cols-2 md:flex flex-col items-start w-auto md:w-1/3"
            >
              <div
                v-for="status in pokemon.status"
                :key="status.name"
                class="mb-2"
              >
                <p class="font-lato text-xs font-thin">{{ status.name }}</p>
                <p class="font-lato font-bold">{{ status.value }}</p>
              </div>
              <div class="col-span-2">
                <p class="font-lato text-xs font-thin">Tipo</p>
                <p class="font-lato font-bold">
                  <span v-for="(type, index) in pokemon.types" :key="index">
                    <span>
                      {{ convertNameComplet(type) }}
                    </span>
                    <span v-if="index < pokemon.types.length - 1"> | </span>
                  </span>
                </p>
              </div>
            </div>
            <div class="flex items-end justify-center w-auto md:w-1/3">
              <div
                style="height: 50%"
                class="w-full flex items-center justify-center"
              >
                <div v-for="nivel in 3" class="flex flex-col" :key="nivel">
                  <div
                    v-for="evol in evolutions.filter(
                      (el) => nivel - 1 == el.nivel
                    )"
                    :key="evol.id"
                    class="flex"
                  >
                    <icon
                      v-show="nivel - 1 != 0"
                      name="back"
                      size="20"
                      color="#A9A9A9"
                      class="transform rotate-180 flex items-center px-5"
                    />
                    <div @click="handlePokemon(evol.id)" class="cursor-pointer">
                      <img class="pokeEvols" :src="evol.sprite" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="md:flex flex-col py-10 items-center w-auto md:w-1/3 hidden"
            >
              <p class="w-4/5 font-lato text-justify text-gray-700">
                {{ pokemon.text }}
              </p>
              <div class="h-full flex flex-col items-center justify-center">
                <button
                  class="mb-3 font-lato font-bold uppercase focus:outline-none p-2 rounded-md hover:bg-gray-300"
                  @click="handleNavigate(`/pokemon/${pokemon.id}/consoles`)"
                >
                  Jogos
                </button>
                <button
                  class="font-lato font-bold uppercase focus:outline-none p-2 rounded-md hover:bg-gray-300"
                  @click="handleNavigate(`/pokemon/${pokemon.id}/citys`)"
                >
                  Cidades
                </button>
              </div>
            </div>
          </div>
        </template>
      </card>
      <icon
        name="back"
        color="#A9A9A9"
        class="flex items-center px-5 cursor-pointer transform -rotate-90"
        @click="handleNavigate(`/pokemon/${pokemon.id}/consoles`)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { types } from "@/utils/type";
@Component
export default class id extends Vue {
  private types: { [key: string]: any } = types;
  private pokemon: any = {};
  private evolutions: Array<object> = [];
  private nivel: number = 0;
  private handlePokemon(id: string): void {
    this.$router.push(`/pokemon/${id}`);
  }
  private handleNavigate(route: string): void {
    this.$router.push(route);
  }
  private handleNavigatePokemon(destiny: string): void {
    let id = 0;
    if (destiny == "next" && this.pokemon.id + 1 <= 888)
      id = this.pokemon.id + 1;
    else if (destiny == "previous" && this.pokemon.id - 1 > 0)
      id = this.pokemon.id - 1;
    if (id != 0) this.$router.push("/pokemon/" + id);
  }
  private getStatus(status: any, value: string) {
    const aux = status.find((el: any) => el.stat.name === value);
    return aux.base_stat;
  }
  private handleClickType(type: string): void {
    this.$router.push(`/type/${type}`);
  }
  private getEvolution(poke: any, nivel: number) {
    this.evolutions.push({
      id: poke.species.url.split("/")[6],
      name: poke.species.name,
      sprite: "",
      nivel,
    });
    if (poke.species.name == "eevee") return;
    if (poke.evolves_to.length > 0) {
      this.nivel++;
      const lvl = this.nivel;
      let i = 0;
      while (i < poke.evolves_to.length) {
        this.getEvolution(poke.evolves_to[i], nivel + 1);
        i++;
      }
    } else return;
  }
  async mounted() {
    const id = this.$route.params.id;
    try {
      const {
        evolution_chain,
        flavor_text_entries,
        color,
      } = await this.$axios.$get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`
      );
      const { chain } = await this.$axios.$get(evolution_chain.url);
      this.getEvolution(chain, 0);

      for (let index = 0; index < this.evolutions.length; index++) {
        const aux: any = this.evolutions[index];
        const pkm = await this.$axios.$get(
          `https://pokeapi.co/api/v2/pokemon/${aux.id}/`
        );
        aux["sprite"] =
          pkm.sprites.other.dream_world.front_default ??
          pkm.sprites.other["official-artwork"].front_default;
        this.evolutions[index] = aux;
      }
      const pkm = await this.$axios.$get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      this.pokemon = {
        name: pkm.name,
        id: pkm.id,
        types: pkm.types.map((el: any) => el.type.name),
        sprite:
          pkm.sprites.other.dream_world.front_default ??
          pkm.sprites.other["official-artwork"].front_default,
        text: flavor_text_entries
          .find((el: any) => el.language.name == "en")
          .flavor_text.replace("\f", " "),
        color: color.name == "white" ? "gray" : color.name,
        status: [
          {
            name: "Vida Base",
            value: this.getStatus(pkm.stats, "hp"),
          },
          {
            name: "Ataque/Defesa",
            value:
              this.getStatus(pkm.stats, "attack") +
              " / " +
              this.getStatus(pkm.stats, "defense"),
          },
          {
            name: "Ataque/Defesa Especial",
            value:
              this.getStatus(pkm.stats, "special-attack") +
              " / " +
              this.getStatus(pkm.stats, "special-defense"),
          },
          {
            name: "Velocidade",
            value: this.getStatus(pkm.stats, "speed"),
          },
        ],
      };
    } catch (error) {
      console.error(error);
    }
  }
  get type(): string {
    return types[this.$route.params.name];
  }

  private convertName(type: string): string {
    return types[type].namesimple;
  }
  private convertNameComplet(type: string): string {
    return types[type].name;
  }
}
</script>
<style scoped>
.pokeImg {
  max-height: 80px !important;
}
.pokeEvols {
  min-height: 40px !important;
  max-height: 40px !important;
  min-width: 40px !important;
}
@media (min-width: 768px) {
  .pokeImg {
    max-height: 200px !important;
    min-height: 170px !important;
    max-width: 350px !important;
  }
  .pokeEvols {
    min-height: 70px !important;
    max-height: 70px !important;
    min-width: 70px !important;
  }
}
</style>
