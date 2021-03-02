<template>
  <div class="h-full flex flex-col justify-start w-full">
    <div class="m-4 flex items-center mb-12">
      <button
        @click="handleBack"
        class="h-10 w-10 flex items-center justify-center rounded-full focus:outline-none hover:bg-gray-300 mr-2"
      >
        <icon :name="close ? 'close' : 'back'" :size="close ? '30' : '20'" />
      </button>
      <div class="relative flex w-full flex-wrap items-stretch">
        <input
          type="text"
          class="shadow appearance-none w-full block border border-gray-400 p-2 focus:outline-none"
          placeholder="Pikachu"
          v-model="search"
        />
        <span
          class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-4 pb-3 pt-2"
        >
          <icon name="search" color="gray" size="24" />
        </span>
      </div>
    </div>
    <div class="flex flex-col justify-start overflow-y-hidden">
      <div
        class="grid grid-cols-1 md:grid-cols-3 justify-items-center px-10 overflow-y-auto"
        id="infinite-list"
      >
        <pokemon-card
          v-for="item in items"
          :key="item.name"
          :pokemon="item"
          @select-pokemon="select"
        />
      </div>
      <div
        class="w-full flex justify-center mt-4"
        v-if="loading && items.length > 0"
      >
        <icon name="loading" size="22" class="animate-spin" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Watch, Prop, Vue } from "vue-property-decorator";
import pokemonCard from "./pokemonCard.vue";

@Component({
  components: {
    pokemonCard,
  },
})
export default class ListaPokemon extends Vue {
  @Prop({ default: false })
  readonly close!: boolean;
  private pokemons: Array<any> = [];
  private nextItem: number = 0;
  private loading: boolean = false;
  private items: Array<any> = [];
  private filter: Array<any> = [];
  private search: string = "";
  @Watch("search")
  searchWatch() {
    this.items = [];
    this.nextItem = 0;
    if (this.search != "") {
      const isNumber = /^[0-9]+$/.test(this.search);
      this.filter = this.pokemons.filter((el, indice) => {
        return !isNumber
          ? el.name.toLowerCase().includes(this.search.toLowerCase())
          : `${indice}`.includes(this.search);
      });
      // console.log(this.filter);
    } else {
      this.filter = this.pokemons;
    }

    this.loadMore();
  }
  private select(id: string): void {
    this.$emit("pokemon", id);
  }
  private handleBack(): void {
    this.$emit("back-close", this.close ? "close" : "back");
  }
  private loadMore(): void {
    if (this.filter.length > 0) {
      this.loading = true;
      setTimeout((e) => {
        const max =
          this.filter.length - 1 >= this.nextItem + 15
            ? 15
            : this.filter.length - this.nextItem;
        for (var i = 0; i < max; i++) {
          this.items.push(this.filter[this.nextItem]);
          this.nextItem++;
        }
        this.loading = false;
      }, 200);
    }
  }

  async mounted() {
    try {
      const pkm = await this.$axios.$get("https://pokeapi.co/api/v2/pokemon/", {
        params: {
          limit: 898,
        },
      });
      this.pokemons = pkm.results;
      this.filter = this.pokemons;
      const listElm: any = document.querySelector("#infinite-list");
      listElm.addEventListener("scroll", (e: any) => {
        if (
          Math.ceil(listElm.scrollTop + listElm.clientHeight) >=
          listElm.scrollHeight
        ) {
          if (!this.loading) this.loadMore();
        }
      });
      this.loadMore();
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
<style scoped>
.animate-spin {
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
