<template>
  <div class="h-full">
    <header-base :name="type.name" />
    <div style="height: 70%" class="flex justify-between items-center">
      <div class="flex flex-col items-center">
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
      <icon name="back" size="40" class="transform rotate-180" />
      <div class="flex flex-col items-center justify-center">
        <img
          :src="require(`@/assets/tipos/${type.namesimple}.png`)"
          class="w-1/2"
        />
        <p class="text-xl font-medium capitalize">{{ type.name }}</p>
      </div>
      <icon name="back" size="40" class="transform rotate-180" />
      <div class="flex flex-col items-center">
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
import Icon from "@/components/Icon/index.vue";
import { types } from "@/utils/type";
@Component({
  components: {
    Icon,
  },
})
export default class name extends Vue {
  private types: { [key: string]: any } = types;
  get type(): string {
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
