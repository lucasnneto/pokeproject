<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 36L6 21L21 6"
      :stroke="color"
      stroke-width="8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: { type: [String, Number], default: 42 },
    color: { type: String, default: "black" },
  },
};
</script>
