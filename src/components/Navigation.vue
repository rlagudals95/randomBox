<template>
<div class="nav-wrap" >
    <b-nav class="nav-up nav-container" >
        <span class="nav-center">
            <span @click="setMale" class="male">남성</span> 
            <span @click="setFemale" class="female">여성</span> 
            <!-- <div>{{this.sex_gb}}</div>    -->
        </span>
        <!-- <span class="nav-right">
            <b-nav-item >Logout</b-nav-item>
        </span> -->
    </b-nav>
</div>
</template>
<script>
import {mapState} from 'vuex';

export default {
    name: "Navigation",
    data () {
        return {
            selected : "male"
        }
    },
    methods : {
       setMale (){
           this.$store.commit('SET_SEX','male');
       },
       setFemale (){
           this.$store.commit('SET_SEX','female');
       }
    },
    computed : {
      ...mapState({
          sex_gb : state => state.sex_gb
      })     
    },
  
}
</script>

<style lang='scss' scoped>
.nav-wrap{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    margin: 0px auto;
    padding: 8px 20px;
    width: 100%;
    z-index: 50;
    font-weight: bold;
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
    width: 100%;
    opacity: 0.85;
}
.nav-container {
    padding: 5px 0px;
    justify-content: center;
    align-items: center;
}
.nav-center {
    display: flex;
    font-weight: bold;
    cursor: pointer;
}
.male{
    margin-right: 3px;
    color: #0d6efd;
}   
.female{
    margin-left: 3px;
    color: #cb3837;
}
.font-up {
    font-size: 18px;
}
.logo {
    font-weight: bolder;
}
.nav-left {
    display: flex;
    justify-content: space-between;
}
.nav-right {
    display: flex;
    color: black;
}

</style>