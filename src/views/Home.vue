<template>
  <div class="home-container">
    <RandomBox/>
  </div>
</template>

<script>
import RandomBox from '../components/RandomBox.vue';

export default {
    components : {RandomBox}
}
</script>

<style>
  .home-container {
    width: 100%;
   
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
</style>