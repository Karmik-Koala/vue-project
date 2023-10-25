<template>
  <div class="tooltip-container">
    <div @mouseenter="show" @mouseleave="hide" class="icon-info-container">
      <img src="info-icon.svg" alt="" srcset="">
    </div>
    <div v-show="isVisible" class="tooltip">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isVisible = ref(false);

    const show = () => {
      isVisible.value = true;
    };

    const hide = () => {
      isVisible.value = false;
    };

    return {
      isVisible,
      show,
      hide,
    };
  },
};
</script>

<style scoped>
.tooltip-container{
  position: relative;
}

.icon-info-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
}

.icon-info-container * {
  max-width: 100%;
}
.tooltip {
  position: absolute;
  background-color: #333;
  padding: 10px;
  border-radius: 5px;
  top: 0;
  left: 30px;

  display: inline-block;
  width: 300px;
}

.tooltip-container:hover .tooltip {
  display: block;
}
</style>
