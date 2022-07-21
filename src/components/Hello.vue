<script>
import _ from "lodash";




export default {
  name: "hello-vue",
  data() {
    return {
      selected: {
        "13": null,
        "15": null,
        "48": null,
        "image": 'http://cdn.wpsstatic.com/images/1000_max/ace3-5ff79f1318a11.png'
      }
    }
  },

  props: {
    product: Object,

  },


  methods: {

    filterAttribute(values, id) {
      return values.filter(item => {
        return _.find(item.attributes, {id})
      })
    },
    addColorAttributes(color) {
      this.updateAttributes('15', color.id)
      this.updateAttributes('48', color.finishId)
      this.updateAttributes('image', color.image)
    },

    updateAttributes(key, value) {
      this.selected[key] = value;
    }
  },

  computed: {
    items() {
      let temp = this.product.items;

      if (this.selected["15"]) {
        temp = this.filterAttribute(temp, this.selected["15"])
      }
      if (this.selected["13"]) {
        temp = this.filterAttribute(temp, this.selected["13"])
      }
      if (this.selected["48"]) {
        temp = this.filterAttribute(temp, this.selected["48"])
      }

      return temp;
    },
    colors() {
      return this.product.options.color
    },
    sizes() {
      return this.product.options.size
    },
    isReady() {
      return this.items.length === 1;
    },
    activeItem() {
      return this.items[0];
    }
  },

};


</script>

<template>
  <div class="flex flex-col xl:gutter my-20 xl:flex-row single-product mx-32">
    <div class="leftContainer">
      <div class="flex justify-center py-10 text-4xl font-semibold text-center text-white uppercase">
        <div class="flex items-center h-full">
          <div class="flex items-center w-full my-auto h-96 xl:h-128">
            <img class="flex max-h-full px-1 py-12 mx-auto min-w-4 min-h-1/2" :src=color.image />
          </div>
        </div>
      </div>
    </div>
    <div class="rightContainer">
      <div class="flex pb-3 justify-between text-3xl font-bold text-primary">
        <div>
          <h3>GM-32 Solid</h3>
          <h4 class="text-2xl">{{ activeItem.sku }}</h4>
        </div>
        <h3 class="hidden text-black xl:w-1/5 xl:block">$79.95</h3>
      </div>

      <div class="pb-3 text-2xl">
        <h3>Color Options:</h3>
      </div>
      <div class="grid grid-cols-3 xs:w-2/3 sm:w-1/2 xl:w-full">
        <div v-for="color in colors" :key="color"
             @click="addColorAttributes(color)">
          <div class="relative w-20 mb-5">
            <div>
              <button
                  style="animation-duration: 900ms;"
                  class="flex items-center justify-center h-20 duration-300 border-2 rounded-full colorCircle border-light">
                <img
                    class="max-w-full max-h-full p-2 mx-auto my-auto cursor-pointer min-h-1/3 min-w-1/2 rounded-3xl"
                    :src="color.image"/>
              </button>
              <div class="absolute w-32 text-xs text-center capitalize opacity-0 colorName whitespace-nowrap">
                {{ color.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      <div class="py-5">
        <div class="pb-3">
          <h1 class="text-2xl">Size:</h1>
        </div>
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
    </div>


</template>

<style>




.border-light {
  --tw-border-opacity: 1;
  border-color: rgba(223, 223, 223, var(--tw-border-opacity));
}

.colorOptionsEnter {
  animation: colorOptionsEnter-06534d0c ease
}

h2 {
  font-family: paralucent-condensed, sans-serif;
  font-style: normal;
}

h3 {
  ont-family: paralucent-condensed, sans-serif;
  font-style: normal;
}

.text-primary {
  --tw-text-opacity: 1;
  color: rgba(0,72,116,var(--tw-text-opacity));
}
.leftContainer {
  min-width: 60%;
  padding-right: 5rem;
  width: 60%;
}
.rightContainer {
  height: 100%;
  margin-right: 1.25rem;
  width: 40%;
  font-weight: 600;
  text-transform: uppercase;
}

</style>
