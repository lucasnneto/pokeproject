<template>
  <div class="h-full flex flex-col">
    <header-base name="time" />
    <div class="mt-12 grid grid-cols-2 md:grid-cols-3 gap-y-12">
      <div v-for="(t, i) in myteam" :key="i">
        <div
          class="h-full flex flex-col items-center justify-center"
          :class="{ 'justify-between': !t.nome == '' }"
        >
          <div
            class="w-full flex justify-end pr-6 md:pr-16"
            v-if="!t.nome == ''"
          >
            <icon
              name="delete-poke"
              size="22"
              @click="removePoke(t.indice)"
              class="cursor-pointer"
            />
          </div>
          <icon name="loading" v-if="loading" size="70" class="animate-spin" />
          <img
            v-else
            @click="handleClick(t.indice)"
            class="w-1/3 mb-2 cursor-pointer"
            :style="t.sprite == '' ? '' : 'max-height: 115px'"
            :src="t.sprite == '' ? require(`~/assets/pokebola.png`) : t.sprite"
          />
          <p
            class="mb-3 font-lato font-semibold text md:text-xl uppercase"
            v-if="!t.nome == ''"
          >
            {{ t.indice }}. {{ t.nome }}
          </p>
        </div>
      </div>
    </div>
    <modal :modal="modal" @closemodal="modal = false" @pokemon="addPoke" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
type PokemonTeam = {
  sprite: string;
  nome: string;
  indice: string;
};
interface PokeProjectType {
  team: Array<string>;
}
@Component
export default class Team extends Vue {
  private team: Array<string> = [];
  private myteam: Array<PokemonTeam> = [];
  private modal: boolean = false;
  private loading: boolean = false;
  private async addPoke(indice: string): Promise<void> {
    let find: number = this.team.findIndex((el) => {
      return el == "-1";
    });

    this.team.splice(find, 1, indice);
    find = this.myteam.findIndex((el) => {
      return el.indice == "-1";
    });
    try {
      const pkm = await this.$axios.$get(
        `https://pokeapi.co/api/v2/pokemon/${indice}/`
      );
      const poke: PokemonTeam = {
        sprite:
          pkm.sprites.other.dream_world.front_default ??
          pkm.sprites.other["official-artwork"].front_default,
        nome: pkm.forms[0].name,
        indice: indice,
      };
      this.myteam.splice(find, 1, poke);
      localStorage.removeItem("pokeproject");
      localStorage.setItem("pokeproject", JSON.stringify({ team: this.team }));
    } catch (e) {
      console.error(e);
    }
  }
  private handleClick(indice: string): void {
    if (indice == "-1") this.modal = true;
    else this.$router.push(`/pokemon/${indice}`);
  }
  private removePoke(indice: string): void {
    let find = this.team.findIndex((el) => {
      return el == indice;
    });

    this.team.splice(find, 1, "-1");
    find = this.myteam.findIndex((el) => {
      return el.indice == indice;
    });
    this.myteam.splice(find, 1, {
      sprite: "",
      nome: "",
      indice: "-1",
    });
    localStorage.removeItem("pokeproject");
    localStorage.setItem("pokeproject", JSON.stringify({ team: this.team }));
  }
  mounted(): void {
    this.loading = true;
    for (let index: number = 0; index < 6; index++) {
      this.myteam.push({
        sprite: "",
        nome: "",
        indice: "-1",
      });
    }
    this.team = ["-1", "-1", "-1", "-1", "-1", "-1"];
    const pokeproject: PokeProjectType = JSON.parse(
      localStorage.getItem("pokeproject") || "{}"
    );
    if (!!pokeproject?.team) {
      this.team = pokeproject.team;
      this.team.forEach(async (element: string, index: number) => {
        if (element != "-1") {
          try {
            const pkm = await this.$axios.$get(
              `https://pokeapi.co/api/v2/pokemon/${element}/`
            );
            const poke: PokemonTeam = {
              sprite:
                pkm.sprites.other.dream_world.front_default ??
                pkm.sprites.other["official-artwork"].front_default,
              nome: pkm.forms[0].name,
              indice: element,
            };
            this.myteam.splice(index, 1, poke);
          } catch (e) {
            console.error(e);
          }
        }
      });
    } else {
      localStorage.removeItem("pokeproject");
      localStorage.setItem("pokeproject", JSON.stringify({ team: this.team }));
    }
    this.loading = false;
  }
}
</script>
