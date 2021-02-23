<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from "./Loading";
import Close from "./Close";
import Back from "./Back";
export default {
  components: {
    Loading,
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
