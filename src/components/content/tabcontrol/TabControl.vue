<template>
  <div class="tab-control">
<!--    只有文字不同，元素个数等其他大部分相同时没必要用插槽-->
    <div v-for="(item, index) in titles"
         class="tab-control-item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 15px;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 3px;
  }
  .active {
    color: var(--color-height-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>