<template>
  <div class="h-full">
    <div
      v-if="error.statusCode === 404"
      class="h-full flex flex-col items-center justify-start"
    >
      <p class="text-2xl">Página não encontrada</p>
      <div class="h-full flex flex-col items-center justify-center">
        <img src="~/assets/run.gif" class="w-64" />
        <p class="mt-4 text-lg">The pokemon run away.</p>
        <p class="mb-4 text-lg">Volte lá e tente denovo.</p>
        <div
          class="p-4 flex items-center justify-center rounded-full text-red-800 hover:bg-gray-300"
        >
          <NuxtLink to="/" class="focus:outline-none"
            >Página Principal</NuxtLink
          >
        </div>
      </div>
    </div>
    <div v-else class="h-full flex flex-col items-center justify-start">
      <p class="text-2xl">Ocorreu um erro</p>
      <div class="h-full flex flex-col items-center justify-center">
        <img src="~/assets/MissingNo.png" class="w-64" />
        <p class="mt-4 text-lg">Wild MissigNo appeared.</p>
        <p class="mb-4 text-lg text-center">
          Junte suas pokebolas e volte para a página inicial
        </p>
        <div
          class="p-4 flex items-center justify-center rounded-full text-red-800 hover:bg-gray-300"
        >
          <NuxtLink to="/" class="focus:outline-none"
            >Página Principal</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>
