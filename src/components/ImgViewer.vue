<template>
  <div class="img-viewer">
    <img
      :src="this.myPhoto"
      ref="img"
      class="origin"
      @mousedown="isDrag=true"
      @mouseup="isDrag=false"
      @mousemove="moveImage"
      draggable="false"
    />
    <div class="randombox-container" id="capture" >
      <RandomBox v-show="this.is_upload" />
    </div>
    <!-- <img class="btn-close" src="../assets/icons/close.svg" @click="doClose" /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RandomBox from './RandomBox'

export default {
  name: 'ImgViewer',
  components : {RandomBox},
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isDrag: false,
      startPos: { x: 0, y: 0 },
      myPhoto : null,
      captureImg : null,
      showImage: false,
    }
  },
  computed : {
    ...mapState({
        randomImages : state => state.randomImages,
        myPhoto : state => state.myPhoto,
        is_upload : state => state.is_upload
    })     
  },
  mounted() {
    this.resizeImage()
    const img = this.$refs.img
    img.addEventListener('touchstart', this.startHandler)
    img.addEventListener('touchmove', this.moveHandler)
    img.addEventListener('touchend', this.endHandler)

    img.addEventListener('mousedown', this.startHandler)
    img.addEventListener('mousemove', this.moveHandler)
    img.addEventListener('mouseup', this.endHandler)

    const body = document.querySelector('body')
    img.addEventListener('load', () => {
      img.style.left = `${body.clientWidth / 2 - img.clientWidth / 2}px`
      img.style.top = `${body.clientHeight / 2 - img.clientHeight / 2}px`
    })
  },
  methods: {
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
        this.startRandom ()
        this.isUpload = true;
        this.showImage = true;
    },
    clickTrigger (){
        this.$refs.click.click();
    },

    getPos(event) {
      let x = 0
      let y = 0
      if (event.touches !== undefined) {
        x = event.touches[0].clientX
        y = event.touches[0].clientY
      } else {
        x = event.clientX
        y = event.clientY
      }

      return {
        x: x,
        y: y,
      }
    },
    startHandler(event) {
      const bound = this.$refs.img.getBoundingClientRect()
      this.startPos = this.getPos(event)
      this.startPos.x -= bound.left
      this.startPos.y -= bound.top
      this.isDrag = true
    },
    moveHandler(event) {
      if (!this.isDrag) return
      const pos = this.getPos(event)
      this.$refs.img.style.left = `${pos.x - this.startPos.x}px`
      this.$refs.img.style.top = `${pos.y - this.startPos.y}px`
    },
    endHandler() {
      this.isDrag = false
    },
    resizeImage() {
      //const body = document.querySelector('body')
      //const w = body.offsetWidth
      //const h = body.offsetHeight
    },
    moveImage() {
      //const ele = event.target
    },
    doClose() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.img-viewer {
  width: 100%;
  height: 100%;
  border: 2px solid #000;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  img.origin {
    position: absolute;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  img.btn-close {
    display: block;
    width: 40px;
    height: 40px;
    border: 2px solid #000;
    background-color: #fff;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
}
</style>