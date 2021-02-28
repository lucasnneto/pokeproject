<template>
  <div
    v-on="$listeners"
    class="bg-brand-main shadow-md rounded-3xl rounded-extra m-4 p-6"
    :style="{ width, height }"
  >
    <slot name="body"></slot>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop({ default: "250px" }) readonly width!: string;
  @Prop({ default: "250px" }) readonly height!: string;
}
</script>
