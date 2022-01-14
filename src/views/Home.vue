<template>
  <div class="home-container">
    <RandomBox  v-show="this.isUpload" />
    <div class="btn-container">
      <button @click="startRandom" class="random-btn" v-show="this.isUpload">랜덤</button>
      <label class="input-file-button" for="file-upload">사진을 올려주세요~</label>
      <input class="file-upload" id="file-upload" type="file" @change="fileUpload" style="display:none" />
    </div>
  </div>
</template>

<script>
import RandomBox from '../components/RandomBox.vue';
import {mapState} from 'vuex'

export default {
    components : {RandomBox},
    data (){
      return {
        myPhoto : null,
        isUpload : false
      }
    },
    methods :{
      randomPush (){
        this.$store.commit('SET_RANDOM');
      },
      startRandom () {
        if (this.isRandom) this.$store.commit('RESET_RANDOM')
        for (let i = 0; i < 15; i++){
           this.randomPush();
        }
        this.$store.commit('IS_RANDOM')
      },
      fileUpload (event){
        console.log('이벤트 : ', event)
        const image = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (event) => {
          this.$store.commit('SET_PREVIEW', event.target.result );
        }
        this.startRandom ()
        this.isUpload = true;
      }
    },
    computed : {
      ...mapState({
          images : state => state.images,
          randomImages : state => state.randomImages,
          isRandom :  state => state.isRandom,
      })     
    },
}
</script>

<style>
  .home-container {
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }

  .input-file-button{
    padding: 10px 25px;
    background-color:#FF6600;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-weight: bold;
  }
  .random-btn{
    padding: 10px 25px;
    background-color:#FF6600;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    border: none;
  }

  .btn-container{
    margin-top: 30px;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24%;
  }
</style>