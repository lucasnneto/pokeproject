<template>
  <div v-on="$listeners">
    <component :is="name" v-bind="$props" />
  </div>
</template>

<script>
import DeletePoke from "./DeletePoke";
import Close from "./Close";
import Back from "./Back";
import Search from "./Search";
import Loading from "./Loading";
export default {
  components: {
    DeletePoke,
    Close,
    Back,
    Search,
    Loading,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
  },
};
</script>
