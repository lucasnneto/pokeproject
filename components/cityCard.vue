<template>
  <div v-if="!loading" class="h-full flex items-center justify-start">
    <img
      v-if="hover"
      :src="require(`~/assets/regioes/${area.region}.png`)"
      class="w-1/2 mr-5 transform scale-300 imgHover"
    />
    <img
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :src="require(`~/assets/regioes/${area.region}.png`)"
      class="w-1/2 mr-5"
    />
    <p class="mb-3 font-lato font-semibold text-xl uppercase">
      {{ area.name }}
    </p>
  </div>
  <div v-else class="h-full flex justify-center items-center">
    <icon name="loading" size="70" class="animate-spin" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Pokemoncard extends Vue {
  @Prop({ default: "", required: true })
  readonly areaUrl!: string;
  private loading: boolean = false;
  private area: any = {};
  private hover: boolean = false;

  private async created() {
    this.loading = true;
    try {
      const { location } = await this.$axios.$get(this.areaUrl);
      const { region, names } = await this.$axios.$get(location.url);
      this.area = {
        name: names.find((el: any) => el.language.name == "en").name,
        region: region.name,
      };
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }
}
</script>
<style scoped>
.imgHover {
  z-index: 500;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(0%, -50%);
}
</style>
