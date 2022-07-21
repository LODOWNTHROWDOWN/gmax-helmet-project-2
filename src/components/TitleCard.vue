<template>
  <div class="flex pb-3 justify-between text-3xl font-bold text-primary">
    <div>
      <h3>GM-32 Solid</h3>
      <h4 class="text-2xl">{{ sku }}</h4>
    </div>
    <h3 class="hidden text-black xl:w-1/5 xl:block">$79.95</h3>
  </div>
</template>

<script>
export default {
  name: "title-card",
  props: {
    sku: String,
  }
}
</script>

<style scoped>

</style>