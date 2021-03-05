<template>
  <div class="h-full flex flex-col">
    <header-base name="tipos" />
    <div class="mt-5 grid grid-cols-2 md:grid-cols-6">
      <div v-for="(type, name) in types" :key="name">
        <div class="flex flex-col items-center justify-center m-4">
          <img
            :src="require(`@/assets/tipos/${type.namesimple}.png`)"
            @click="handleClick(name)"
            class="w-7/12 cursor-pointer"
          />
          <p class="text-xl font-semibold capitalize">{{ type.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { types, TypesType } from "@/utils/type";

@Component
export default class IndexType extends Vue {
  private modal: boolean = false;
  private itemModal: String = "";
  private types: TypesType = types;
  private handleClick(type: string): void {
    this.$router.push(`type/${type}`);
  }
}
</script>
