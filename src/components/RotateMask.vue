<template>
  <div class="mask-container">
    <img src="../assets/scape.png" />
  </div>
</template>

<script>
export default {
  name: 'RotateMask',
  data() {
    return {
    }
  },
}
</script>

<style scoped lang="less">
.mask-container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    // transform: rotate(-90deg);
    width: 90%;
    animation: rotate 1s infinite;
  }
}
@keyframes rotate {
  from {
    transform: rotate(-90deg);
  }
  to {
    transform: rotate(0);
  }
}
</style>
<style>
@media screen and (orientation: portrait) {
  /*竖屏 css*/
  body {
    overflow: hidden;
  }
}
@media screen and (orientation: landscape) {
  /*横屏 css*/
  body {
    overflow: auto;
  }
  .mask-container {
    display: none !important;
  }
}
</style>
