<template>
  <div
    v-if="modal"
    @click="closeModal"
    class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
  >
    <div class="fixed mx-10" @click.stop>
      <div class="flex flex-col overflow-hidden bg-white rounded-lg">
        <div class="flex justify-end mr-3 mt-2">
          <button
            @click="closeModal"
            class="h-6 w-6 flex items-center justify-center rounded-full focus:outline-none hover:bg-gray-300"
          >
            <icon name="close" size="24" />
          </button>
        </div>
        <div class="flex items-center px-10 py-10 bg-white">
          <div class="grid grid-cols-2">
            <div v-for="n in 3" :key="n">
              <div class="flex flex-col items-center justify-center">
                <img
                  :src="require(`@/assets/tipos/${item}.png`)"
                  class="w-1/4"
                />
                <p class="text-xl capitalize">{{ item }}</p>
              </div>
            </div>
          </div>
          <icon name="back" size="40" class="transform rotate-180" />
          <div class="flex flex-col items-center justify-center">
            <img :src="require(`@/assets/tipos/${item}.png`)" class="w-1/2" />
            <p class="text-xl capitalize">{{ item }}</p>
          </div>
          <icon name="back" size="40" class="transform rotate-180" />
          <div class="grid grid-cols-2">
            <div v-for="n in 3" :key="n">
              <div class="flex flex-col items-center justify-center">
                <img
                  :src="require(`@/assets/tipos/${item}.png`)"
                  class="w-1/4"
                />
                <p class="text-xl capitalize">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import Icon from "@/components/Icon/index.vue";
@Component({
  components: {
    Icon,
  },
})
export default class ModalType extends Vue {
  @Prop({ default: false, required: true, type: Boolean })
  readonly modal!: boolean;
  @Prop({ default: "", required: true, type: String })
  readonly item!: string;
  @Emit("closemodal")
  closeModal() {}
}
</script>
