<template>
  <filter-label label="Color Options" ></filter-label>
  <div class="grid grid-cols-3  xs:w-2/3 sm:w-1/2 xl:w-full">
    <div v-for="color in colors" :key="color"
         @click="addColorAttributes(color)">
      <div class="relative w-20 mb-5">
        <button
            class="flex items-center justify-center h-20 border-2 rounded-full" >
          <img
              class="max-w-full max-h-full p-2 mx-auto my-auto cursor-pointer min-h-1/3 min-w-1/2 rounded-3xl"
              :src="color.image"/>
        </button>
        <div class="absolute w-32 text-xs text-center capitalize colorName whitespace-nowrap" >
          {{ color.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import FilterLabel from "./FilterLabel.vue"
export default {
  name: "color-options-card",
  components: {FilterLabel},
  props: ['colors', 'addColorAttributes', 'activeItem'],
  data() {
    return {
      hover: false,
    }
  }

}


</script>

<style scoped>
.colorName {
  margin-left: -24px;
  transition: opacity .25s ease;
}
</style>