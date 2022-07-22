<template>
  <div class="py-5">
    <filter-label label="Sizes" class="pb-3"></filter-label>
    <div class="flex border-2 rounded-full border-light w-fc">
      <div>
        <button
            class="px-3 py-3 uppercase border-r-2 cursor-pointer last:border-r-0 last:rounded-r-full first:rounded-l-full border-light sizeOption"
            v-for="size in sizes"
            :key="size"
            @click="updateAttributes('13', size.id)">
          <h2>{{ size.name }}</h2>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FilterLabel from "./FilterLabel.vue";
export default {
  name: "size-card",
  components: {FilterLabel},
  props: ['sizes', 'updateAttributes']
}
</script>

<style scoped>

</style>