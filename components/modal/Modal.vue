<template>
  <div
    v-if="modal"
    @click="closemodal"
    class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
  >
    <div class="fixed mx-10" @click.stop>
      <div class="flex flex-col bg-white rounded-lg modal">
        <div class="flex items-center m-3 md:m-8 bg-white overflow-hidden">
          <pokemon-list
            :close="true"
            @back-close="closemodal"
            @pokemon="pokemonHandle"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Modal extends Vue {
  @Prop({ default: false, required: true, type: Boolean })
  readonly modal!: boolean;

  private closemodal(): void {
    this.$emit("closemodal");
  }
  private pokemonHandle(id: string): void {
    this.$emit("pokemon", id);
    this.closemodal();
  }
}
</script>
<style scoped>
.modal {
  width: 340px;
  height: 630px;
}

@media (min-width: 768px) {
  .modal {
    height: 600px;
    width: 1000px;
  }
}
</style>
