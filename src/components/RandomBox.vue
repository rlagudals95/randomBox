<template>
  <div class="card-container">
      <div class="card">  
        <img class="card-img" :src="this.images[0]" alt="">
      </div>
      <div class="card">  
        <img class="card-img" :src="this.images[1]" alt="">
      </div>
      <div class="card">  
        <img class="card-img" :src="this.images[2]" alt="">
      </div>
      <div class="card">  
        <img class="card-img" :src="this.images[3]" alt="">
      </div>
      <div class="card">  
        <img class="card-img upload-img" :src="this.images[4]" alt="">
      </div>
      <div class="card">  
        <img class="card-img" :src="this.images[5]" alt="">
      </div>
      <div class="card">  
        <img class="card-img" :src="this.images[6]" alt="">
      </div>
      <div class="card">  
        <img class="card-img" :src="this.images[7]" alt="">
      </div>
      <div class="card">  
        <img class="card-img" :src="this.images[8]" alt="">
      </div>       
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data (){
        return {
            photo_list : []
        }
    },
    methods : {
        // randomItem (){
        //     let a = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P']
        //     let nums = [];
        //     let rendomNo 
        //     randomNo = Math.floor(Math.random() * a.length)
            
        //     console.log(nums.indexOf(randomNo), '// 겹치는 번호 : ',randomNo);
        //     if ( nums.indexOf(randomNo) == -1){
        //         this.photo_list.push(a[randomNo])
        //         nums.push(randomNo);
        //     }       
        //    //return a[Math.floor(Math.random() * a.length)]
        // },
        // randomStart (){
        //     for (let i = 0; photo_list.length < 8 ;i++) {    
        //         randomItem();
        //     }
        // }  
    },
    computed : {
      ...mapState({
          images : state => state.images
      })     
    },
} 
</script>

<style lang="scss" scoped>
    .card-container {    
        display: grid;
        margin: 0px auto;
        padding: 0px 100px;
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
     ;
        
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