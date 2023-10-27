<template>
  <div class="tooltip-container">
    <div class="icon-info-container" @mouseenter="show" @mouseleave="hide">
      <img :src="InfoIcon" alt="info icon" />
    </div>
    <div v-show="isVisible" class="tooltip">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import InfoIcon from "@/assets/images/info-icon.svg";

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
      InfoIcon,
    };
  },
};
</script>

<style scoped>
.tooltip-container {
  --tooltip-background-color: var(--color-ferra-light);
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
  background-color: var(--tooltip-background-color);
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
