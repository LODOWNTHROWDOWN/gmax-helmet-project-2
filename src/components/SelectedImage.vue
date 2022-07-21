<template>
  <div style="height: 512px;" class="flex items-center justify-center w-full">
    <div
        class="relative flex items-center justify-center w-full xl:w-3/4 xl:border-2 xl:border-light xl:rounded-xl">
      <img :src=image class="flex max-h-full px-1 py-12 mx-auto min-w-4 min-h-1/2" />
    </div>
  </div>
</template>

<script>
export default {
  name: "selected-image",
  props: {
    image: String,
  }
}
</script>

<style scoped>

</style>