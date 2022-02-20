<template>
  <div  v-bind:class="[this.is_upload ? 'home-container-upload': 'home-container']" >
    <!-- 이미지 뷰어 -->
    <ImgViewer v-if="showImage" @close="showImage=false" />

    <!-- <div class="guide">자신이 잘 생겼다고 생각한다면<br>사진을 올려주세요 :)</div> -->
    <div v-show="!this.isUpload" class="guide">AI 딥러닝 기술로 외모 수준을 분석해드립니다.<br>사진을 올려주세요 :)</div>
    <!-- <div class="randombox-container" id="capture" >
      <RandomBox v-show="this.isUpload" />
    </div> -->
    <div v-show="this.isUpload" class="x-guide">
      엑박이 뜨는 사진이 있다면 랜덤 돌리기를 눌러주세요!<br />
      본 이미지들은 cco 이미지들로 저작권 의 권리를 포기한 이미지들 입니다. 
    </div>
    <div class="btn-container">
      <b-button v-if="this.isUpload" pill @click="this.clickTrigger" class="upload-btn" variant="primary">사진바꾸기</b-button>
      <b-button v-else pill @click="this.clickTrigger" class="upload-btn" variant="primary">사진올리기</b-button>
      <b-button pill @click="startRandom" class="random-btn" v-show="this.isUpload" variant="secondary">랜덤돌리기</b-button>
      <input ref="click" class="file-upload" id="file-upload" type="file" @change="fileUpload" style="display:none" />
      <b-button pill @click="goCapture" class="cature-btn" v-show="this.isUpload" variant="primary">사진저장</b-button>
    </div>
  </div>
</template>

<script>
//import RandomBox from '../components/RandomBox.vue';
import {mapState} from 'vuex'
import * as htmlToImage from 'html-to-image';
import ImgViewer from '../components/ImgViewer.vue'

export default {
    components : { ImgViewer},
    data (){
      return {
        myPhoto : null,
        isUpload : false,
        captureImg : null,
        showImage: false,
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
        const image = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (event) => {
          this.$store.commit('SET_PREVIEW', event.target.result );
        }
        this.startRandom()
        this.$store.commit('IS_UPLOAD', true);
        this.showImage = true;
      },
      clickTrigger (){
        this.$refs.click.click();
      },
      goCapture (){
        htmlToImage.toJpeg(document.getElementById('capture'), { quality: 0.95 })
        .then(function (dataUrl) {
          console.log(dataUrl)
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          link.href = dataUrl;
          link.click();
        });
      }
    },
    computed : {
      ...mapState({
          manImages : state => state.manImages,
          randomImages : state => state.randomImages,
          isRandom :  state => state.isRandom,
          is_upload :  state => state.is_upload,
      })     
    },
    created (){
      
    }
}
</script>

<style>
  .home-container {
    margin-top: 30px;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    padding: 0px 10px 30px 10px
  }

  .home-container-upload {
    z-index: 500;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%);
    padding: 0px 10px 30px 10px;
   
  }

  .guide {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .input-file-button{
    cursor: pointer;
    font-weight: bold;
  } 
  .x-guide {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
    font-size: 8px;
    opacity: 1;
    margin-top: 10px;
  }
  .btn-container{
    margin-top: 15px;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .upload-btn {
    margin-bottom: 10px;
    width: 100%;
    font-weight: bolder;
  }
  .random-btn{
    margin-bottom: 10px;
    width: 100%;
    font-weight: bold;
  }
  .cature-btn{
    color: white;
    width: 100%;
    font-weight: bold;
  }
  .test {
    position: fixed;
    top: 0;
    left: 0;
  }
</style>