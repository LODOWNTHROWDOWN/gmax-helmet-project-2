<template>
  <div class="pb-3">
    <filter-label label="Quantity"></filter-label>
    <div class="pt-5">
      <div class="flex place-content-center border py-2 px-4 rounded-full ">
        <div class="flex items-center justify-center gap-x-4">
          <button class="px-4 py-2"
                  @click="increaseCounter">+
          </button>
          {{ count }}
          <button class="px-4 py-2"
                  @click="decreaseCounter">-
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterLabel from "./FilterLabel.vue";

export default {
  components: {FilterLabel},
  data: () => ({
    count: 0
  }),
  methods: {
    increaseCounter() {
      this.count++
    },
    decreaseCounter() {
      this.count--
    }

  }
}
</script>

<style scoped>
/*.qy{
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  text-align: center;

}*/
button {
  width: 90px;
  height: 60px;
  font-size: 20px;
}


</style>