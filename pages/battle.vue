<template>
  <div class="h-full flex flex-col justify-start">
    <header-base class="mb-6 md:mb-10" name="Batalha" />

    <div v-if="battle" class="flex flex-col items-center">
      <div
        class="md:mb-12 w-full flex flex-col md:flex-row justify-between items-center px-32"
      >
        <div class="h-full flex flex-col items-center justify-center">
          <div class="w-full flex justify-end">
            <icon
              name="delete-poke"
              size="22"
              v-if="!pokemon0.nome == ''"
              @click="removePoke(0)"
              class="cursor-pointer"
            />
          </div>
          <img
            @click="handleClick(pokemon0.indice, 0)"
            class="mb-2 cursor-pointer"
            style="max-height: 220px; min-width: 120px"
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
        <img
          class="md:m-0 my-5"
          style="min-width: 100px"
          src="~/assets/vs.png"
        />
        <div class="h-full flex flex-col items-center justify-center">
          <div class="w-full flex justify-end">
            <icon
              name="delete-poke"
              size="22"
              v-if="!pokemon1.nome == ''"
              @click="removePoke(1)"
              class="cursor-pointer"
            />
          </div>
          <img
            @click="handleClick(pokemon1.indice, 1)"
            class="mb-2 cursor-pointer"
            style="max-height: 220px; min-width: 120px"
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
        :disabled="loading"
        :class="
          pokemon0.indice != '-1' && pokemon1.indice != '-1'
            ? 'bg-gray-500 hover:bg-gray-300'
            : 'bg-gray-300'
        "
        class="w-56 h-12 flex items-center justify-center rounded-full focus:outline-none my-2"
      >
        <p v-if="!loading">Go!</p>
        <icon v-else name="loading" size="30" class="animate-spin" />
      </button>
    </div>
    <div v-else class="md:px-40">
      <div class="flex items-center justify-between">
        <div class="flex flex-col items-center justify-end h-full">
          <img
            @click="handleClick(pokemons[1].indice)"
            class="mb-2 w-2/3 cursor-pointer"
            style="max-height: 150px !important; max-width: 140px !important"
            :src="
              pokemons[1].sprite == ''
                ? require(`~/assets/pokebola.png`)
                : pokemons[1].sprite
            "
          />
          <p class="text-2xl font-semibold">2º</p>
        </div>
        <div class="flex flex-col items-center">
          <img
            @click="handleClick(pokemons[0].indice)"
            class="mb-2 cursor-pointer"
            style="max-height: 230px !important; max-width: 220px !important"
            :src="
              pokemons[0].sprite == ''
                ? require(`~/assets/pokebola.png`)
                : pokemons[0].sprite
            "
          />
          <p class="text-3xl font-bold">1º</p>
        </div>
      </div>
      <div class="w-full mt-8 flex flex-col items-center">
        <p class="text-3xl font-bold uppercase">{{ percent }}%</p>
        <p class="text-3xl font-bold uppercase">chance de vitória</p>
        <button
          @click="
            battle = true;
            pokemons = [];
          "
          class="w-56 mt-5 h-12 flex items-center justify-center rounded-full bg-brand-main focus:outline-none hover:bg-gray-300"
        >
          Tentar Novamente
        </button>
      </div>
    </div>
    <modal :modal="modal" @closemodal="modal = false" @pokemon="addPoke" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { types } from "@/utils/type";
@Component
export default class ListaPokemon extends Vue {
  private battle: boolean = true;
  private modal: boolean = false;
  private percent: number = 0;
  private loading: boolean = false;
  private direction: number = -1;
  private pokemons: Array<object> = [];
  private pokemon0: any = {
    sprite: "",
    indice: "-1",
    nome: "",
    moves: [],
    skils: [],
  };
  private pokemon1: any = {
    sprite: "",
    indice: "-1",
    nome: "",
    moves: [],
    skils: [],
  };
  private getStatus(status: any, value: string) {
    const aux = status.find((el: any) => el.stat.name === value);
    return aux.base_stat;
  }
  private async addPoke(indice: string): Promise<void> {
    try {
      const pkm = await this.$axios.$get(
        `https://pokeapi.co/api/v2/pokemon/${indice}/`
      );
      const poke = {
        sprite:
          pkm.sprites.other.dream_world.front_default ??
          pkm.sprites.other["official-artwork"].front_default,
        nome: pkm.forms[0].name,
        indice: indice,
        moves: pkm.moves,
        stats: {
          hp: this.getStatus(pkm.stats, "hp"),
          attack: this.getStatus(pkm.stats, "attack"),
          defense: this.getStatus(pkm.stats, "defense"),
          spattack: this.getStatus(pkm.stats, "special-attack"),
          spdefense: this.getStatus(pkm.stats, "special-defense"),
          speed: this.getStatus(pkm.stats, "speed"),
        },
        types: pkm.types.map((el: any) => el.type.name),
        skils: [],
      };
      if (this.direction == 0) this.pokemon0 = poke;
      if (this.direction == 1) this.pokemon1 = poke;
    } catch (e) {
      console.error(e);
    }
  }
  private async result(): Promise<void> {
    if (this.pokemon0.indice != "-1" && this.pokemon1.indice != "-1") {
      this.loading = true;
      this.pokemon0.skils = [];
      this.pokemon1.skils = [];
      const qtd1 =
        this.pokemon0.moves.length > 20 ? 20 : this.pokemon0.moves.length;
      for (let index = 0; index < qtd1; index++) {
        const random = Math.floor(Math.random() * this.pokemon0.moves.length);
        try {
          const pkm = await this.$axios.$get(
            this.pokemon0.moves[random].move.url
          );

          this.pokemon0.skils.push(pkm);
        } catch (error) {
          console.error(error);
        }
      }

      const qtd2 =
        this.pokemon1.moves.length > 20 ? 20 : this.pokemon1.moves.length;
      for (let index = 0; index < qtd2; index++) {
        const random = Math.floor(Math.random() * this.pokemon1.moves.length);
        try {
          const pkm = await this.$axios.$get(
            this.pokemon1.moves[random].move.url
          );
          this.pokemon1.skils.push(pkm);
        } catch (error) {
          console.error(error);
        }
      }
      const skilsCalculadas0: Array<number> = [];
      const skilsCalculadas1: Array<number> = [];
      this.pokemon0.skils.forEach((el: any) => {
        if (el.damage_class.name != "status") {
          const { attack, defense } =
            el.damage_class.name == "physical"
              ? {
                  attack: this.pokemon0.stats.attack,
                  defense: this.pokemon1.stats.defense,
                }
              : {
                  attack: this.pokemon0.stats.spattack,
                  defense: this.pokemon1.stats.spdefense,
                };

          const stab =
            this.pokemon0.types.filter(
              (element: string) => element == el.type.name
            ).length > 0
              ? 1.5
              : 1;
          const wr = this.pokemon1.types.reduce(
            (acc: number, element: string) => {
              const valor =
                types[element].vantagem.filter(
                  (ele: any) => ele == el.type.name
                ).length > 0
                  ? 0.25
                  : types[element].desvantagem.filter(
                      (ele: any) => ele == el.type.name
                    ).length > 0
                  ? 2
                  : types[element].imunidade.filter(
                      (ele: any) => ele == el.type.name
                    ).length > 0
                  ? 0
                  : 1;
              return acc * valor;
            },
            1
          );
          const power = el.power == null ? 0 : el.power;
          const value = ((attack * el.power) / (25 * defense) + 2) * stab * wr;
          skilsCalculadas0.push(value);
        }
      });
      this.pokemon1.skils.forEach((el: any) => {
        if (el.damage_class.name != "status") {
          const { attack, defense } =
            el.damage_class.name == "physical"
              ? {
                  attack: this.pokemon1.stats.attack,
                  defense: this.pokemon0.stats.defense,
                }
              : {
                  attack: this.pokemon1.stats.spattack,
                  defense: this.pokemon0.stats.spdefense,
                };

          const stab =
            this.pokemon1.types.filter(
              (element: string) => element == el.type.name
            ).length > 0
              ? 1.5
              : 1;
          const wr = this.pokemon0.types.reduce(
            (acc: number, element: string) => {
              const valor =
                types[element].vantagem.filter(
                  (ele: any) => ele == el.type.name
                ).length > 0
                  ? 0.25
                  : types[element].desvantagem.filter(
                      (ele: any) => ele == el.type.name
                    ).length > 0
                  ? 2
                  : types[element].imunidade.filter(
                      (ele: any) => ele == el.type.name
                    ).length > 0
                  ? 0
                  : 1;
              return acc * valor;
            },
            1
          );
          const power = el.power == null ? 0 : el.power;
          const value = ((attack * el.power) / (25 * defense) + 2) * stab * wr;
          skilsCalculadas1.push(value);
        }
      });
      const m0 =
        skilsCalculadas0.reduce((acc: number, el: number) => el + acc, 1) /
        skilsCalculadas0.length;
      const m1 =
        skilsCalculadas1.reduce((acc: number, el: number) => el + acc, 1) /
        skilsCalculadas1.length;
      if (m0 > m1) {
        this.percent = (m1 * 100) / m0;
        this.percent = parseFloat(this.percent.toFixed(2));
        this.pokemons.push(this.pokemon0);
        this.pokemons.push(this.pokemon1);
      } else {
        this.percent = (m0 * 100) / m1;
        this.percent = parseFloat(this.percent.toFixed(2));
        this.pokemons.push(this.pokemon1);
        this.pokemons.push(this.pokemon0);
      }
      this.battle = false;
      this.loading = false;
    }
  }
  private handleClick(indice: string, direction: number): void {
    this.direction = direction;
    if (indice == "-1") this.modal = true;
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
