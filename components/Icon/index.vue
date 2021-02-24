<template>
  <div v-on="$listeners">
    <component :is="name" v-bind="$props" />
  </div>
</template>

<script>
import DeletePoke from "./DeletePoke";
import Close from "./Close";
import Back from "./Back";
export default {
  components: {
    DeletePoke,
    Close,
    Back,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
  },
};
</script>
