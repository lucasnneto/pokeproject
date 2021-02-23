<template>
  <div v-on="$listeners" class="m-4 flex items-center">
    <button
      @click="handleBack"
      class="h-10 w-10 flex items-center justify-center rounded-full focus:outline-none hover:bg-gray-300"
    >
      <icon name="back" size="20" />
    </button>
    <div class="w-full flex justify-center items-center">
      <h1 class="text-3xl font-lato font-bold uppercase">
        {{ name }}
      </h1>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Icon from "@/components/Icon/index.vue";

@Component({
  components: {
    Icon,
  },
})
export default class Card extends Vue {
  @Prop({ default: "Header", required: true, type: String })
  readonly name!: string;
  private handleBack(): void {
    const route: Array<string> = this.$route.fullPath.split("/");
    route.pop();
    let newRoute: string = route.join("/");
    newRoute = newRoute === "" ? "/" : newRoute;
    this.$router.push(newRoute);
  }
}
</script>
