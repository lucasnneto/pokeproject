<template>
  <div class="h-full flex flex-col justify-start">
    <header-base class="mb-10" name="Batalha" />
    <div v-if="battle" class="flex flex-col items-center">
      <div class="mb-12 w-full flex justify-between items-center px-8">
        <div class="h-full flex flex-col items-center justify-center">
          <div class="w-full flex justify-end pr-16">
            <icon
              name="delete-poke"
              size="22"
              v-if="!pokemon0.nome == ''"
              @click="removePoke(0)"
              class="cursor-pointer"
            />
          </div>
          <img
            @click="handleClick(pokemon0.indice)"
            class="mb-2 cursor-pointer"
            :src="
              pokemon0.sprite == ''
                ? require(`~/assets/pokebola.png`)
                : pokemon0.sprite
            "
          />
          <p
            class="mb-3 font-lato font-semibold text-xl uppercase"
            v-if="!pokemon0.nome == ''"
          >
            {{ pokemon0.nome }}
          </p>
        </div>
        <img src="~/assets/vs.png" />
        <div class="h-full flex flex-col items-center justify-center">
          <div class="w-full flex justify-end pr-16">
            <icon
              name="delete-poke"
              size="22"
              v-if="!pokemon1.nome == ''"
              @click="removePoke(1)"
              class="cursor-pointer"
            />
          </div>
          <img
            @click="handleClick(pokemon1.indice)"
            class="mb-2 cursor-pointer"
            :src="
              pokemon1.sprite == ''
                ? require(`~/assets/pokebola.png`)
                : pokemon1.sprite
            "
          />
          <p
            class="mb-3 font-lato font-semibold text-xl uppercase"
            v-if="!pokemon1.nome == ''"
          >
            {{ pokemon1.nome }}
          </p>
        </div>
      </div>
      <button
        @click="result"
        class="w-56 h-12 flex items-center justify-center rounded-full bg-brand-main focus:outline-none hover:bg-gray-300"
      >
        Go!
      </button>
    </div>
    <div v-else class="px-40">
      <div class="flex items-center justify-between">
        <div class="flex flex-col items-center justify-end h-full">
          <img
            @click="handleClick(pokemon1.indice)"
            class="mb-2 w-2/3 cursor-pointer"
            :src="
              pokemon1.sprite == ''
                ? require(`~/assets/pokebola.png`)
                : pokemon1.sprite
            "
          />
          <p class="text-2xl font-semibold">2º</p>
        </div>
        <div class="flex flex-col items-center">
          <img
            @click="handleClick(pokemon1.indice)"
            class="mb-2 cursor-pointer"
            :src="
              pokemon1.sprite == ''
                ? require(`~/assets/pokebola.png`)
                : pokemon1.sprite
            "
          />
          <p class="text-3xl font-bold">1º</p>
        </div>
      </div>
      <div class="w-full mt-8 flex flex-col items-center">
        <p class="text-3xl font-bold uppercase">80%</p>
        <p class="text-3xl font-bold uppercase">vitória</p>
        <button
          @click="result"
          class="w-56 mt-5 h-12 flex items-center justify-center rounded-full bg-brand-main focus:outline-none hover:bg-gray-300"
        >
          Tentar Novamente
        </button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ListaPokemon extends Vue {
  private battle: boolean = true;
  private pokemons: Array<object> = [];
  private pokemon0: object = {
    sprite: "",
    indice: "-1",
    nome: "",
  };
  private pokemon1: object = {
    sprite: "",
    indice: "-1",
    nome: "",
  };
  private result(): void {
    console.log("result");
    this.battle = false;
    // this.$router.push(`/pokemon/${indice}`);
  }
  private handleClick(indice: string): void {
    if (indice == "-1") console.log("add poke novo");
    // this.$router.push(`/pokemon/${indice}`);
  }
  private removePoke(indice: number): void {
    if (indice == 0) {
      this.pokemon0 = {
        sprite: "",
        indice: "-1",
        nome: "",
      };
      this.pokemons.splice(0, 1);
    } else {
      this.pokemon1 = {
        sprite: "",
        indice: "-1",
        nome: "",
      };
      this.pokemons.splice(1, 1);
    }
  }
}
</script>
