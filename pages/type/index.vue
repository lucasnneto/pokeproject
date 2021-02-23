<template>
  <div class="h-full flex flex-col">
    <header-base name="tipos" />
    <div class="mt-5 grid grid-cols-6">
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
import { types } from "@/utils/type";
import headerBase from "@/components/headerBase.vue";
@Component({
  components: {
    headerBase,
  },
})
export default class IndexType extends Vue {
  private modal: boolean = false;
  private itemModal: String = "";
  private types: { [key: string]: any } = types;
  private handleClick(type: string): void {
    this.$router.push(`type/${type}`);
  }
}
</script>
