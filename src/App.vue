<template>
  <div id="app">
    <div id="nav">
      <Navigation/>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Navigation from './components/Navigation.vue'

export default {
  components : {Navigation}
}
</script>


<style lang="scss">
@font-face {
    font-family: 'this_is_font_name';  //원하는 이름을 입력해주세요
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
    font-weight: normal; //폰트의 두께를 설정해주세요
    font-style: normal;  //폰트의 스타일을 설정해주세요
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: this_is_font_name; 
}

#nav {
  padding: 30px;
  display: flex;
  

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
