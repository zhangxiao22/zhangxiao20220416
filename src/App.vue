<template>
  <div id="app">
    <HelloWorld />
    <RotateMask />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import RotateMask from './components/RotateMask.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    RotateMask
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  background: #1d2228;
}
</style>
