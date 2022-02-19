<template>
  <div class="card-wrap" id="capture2">
    <div class="card-container">
        <div class="card">  
          <img class="card-img" :src="this.randomImages[0]" alt="">
        </div>
        <div class="card">  
          <img class="card-img" :src="this.randomImages[1]" alt="">
        </div>
        <div class="card">  
          <img class="card-img" :src="this.randomImages[2]" alt="">
        </div>
        <div class="card">  
          <img class="card-img" :src="this.randomImages[3]" alt="">
        </div>
        <div class="card">  
          <img class="card-img upload-img" :src="this.myPhoto" alt="">
        </div>
        <div class="card">  
          <img class="card-img" :src="this.randomImages[4]" alt="">
        </div>
        <div class="card">  
          <img class="card-img" :src="this.randomImages[5]" alt="">
        </div>
        <div class="card">  
          <img class="card-img" :src="this.randomImages[6]" alt="">
        </div>
        <div class="card">  
          <img class="card-img" :src="this.randomImages[7]" alt="">
        </div>    
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data (){
        return {
            photo_list : [],
            captureImg : null
        }
    },
    methods : {
      
    },
    computed : {
      ...mapState({
          manImages : state => state.manImages,
          randomImages : state => state.randomImages,
          myPhoto : state => state.myPhoto
      })     
    },
} 
</script>

<style lang="scss" scoped>
    .card-container {    
        display: grid;
        margin: 0px auto;
        grid-template-columns: 1fr 1fr 1fr ;
        grid-template-rows: auto;
        grid-gap: 10px;
        @media (min-width: 1440px) {
        grid-gap: 5px;
        }
        @media (max-width: 1025px) {       
        grid-gap: 5px;
         
        }
        @media (max-width: 960px) {   
          grid-template-columns: 1fr 1fr 1fr; 
          grid-gap: 5px;
              
        }
        @media (max-width: 600px) {
          grid-template-columns: 1fr 1fr 1fr;
      
          grid-gap: 2px;
        }
    }

    .card{
        background-position: center;
        width: 100%;
        aspect-ratio: 1/1; 
        background-size: cover;
        background-repeat: no-repeat;
        cursor: pointer;   
        border: none;
    }

    .card-img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        cursor: pointer;  
    }
</style>