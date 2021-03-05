<template>
  <div class="h-full">
    <header-base :name="type.name" class="mb-5" />
    <div
      style="height: 70%"
      class="flex flex-col md:flex-row justify-between items-center"
    >
      <div
        class="flex flex-col items-center"
        v-if="type.desvantagem.length > 0"
      >
        <div class="grid grid-cols-2">
          <div v-for="n in type.desvantagem" :key="n">
            <div class="flex flex-col items-center justify-center">
              <img
                :src="require(`@/assets/tipos/${convertName(n)}.png`)"
                @click="handleClick(n)"
                class="w-1/4 cursor-pointer"
              />
              <p class="text-xl font-medium capitalize">{{ convertName(n) }}</p>
            </div>
          </div>
        </div>
        <p class="text-xl font-lato font-bold mt-3">Desvantagem</p>
      </div>
      <icon
        v-if="type.desvantagem.length > 0"
        name="back"
        size="40"
        class="transform rotate-180 hidden md:block"
      />
      <div class="flex flex-col items-center justify-center my-10 md:my-0">
        <img
          :src="require(`@/assets/tipos/${type.namesimple}.png`)"
          class="w-1/2"
        />
        <p class="text-xl font-medium capitalize">{{ type.name }}</p>
      </div>
      <icon
        name="back"
        size="40"
        class="transform rotate-180 hidden md:block"
        v-if="type.vantagem.length > 0"
      />
      <div class="flex flex-col items-center" v-if="type.vantagem.length > 0">
        <div class="grid grid-cols-2">
          <div v-for="n in type.vantagem" :key="n">
            <div class="flex flex-col items-center justify-center">
              <img
                :src="require(`@/assets/tipos/${convertName(n)}.png`)"
                @click="handleClick(n)"
                class="w-1/4 cursor-pointer"
              />
              <p class="text-xl font-medium capitalize">{{ convertName(n) }}</p>
            </div>
          </div>
        </div>
        <p class="text-xl font-lato font-bold mt-3">Vantagem</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { types, Typetype, TypesType } from "@/utils/type";
@Component
export default class name extends Vue {
  private types: TypesType = types;
  get type(): Typetype {
    return types[this.$route.params.name];
  }
  private handleClick(type: string): void {
    this.$router.push(`/type/${type}`);
  }
  private convertName(type: string): string {
    return types[type].namesimple;
  }
}
</script>
