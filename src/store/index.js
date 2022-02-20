import Vue from "vue";
import Vuex from "vuex";

const SET_RANDOM = "SET_RANDOM";
const IS_RANDOM = "IS_RANDOM";
const RESET_RANDOM = "RESET_RANDOM";
const SET_PREVIEW = "SET_PREVIEW";
const SET_SEX = "SET_SEX";
const IS_UPLOAD = "IS_UPLOAD";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    randomImages: [],
    nums: [],
    isRandom: false,
    myPhoto: null,
    is_upload: false,
    manImages: [
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2Fman-ge740dc869_640.jpg?alt=media&token=9980f9df-8ab9-470e-b7c5-7771445858bf",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-hc30-lee-min-ho-kpop-celebrity-android-medium.jpg?alt=media&token=e69cb483-944c-4431-92ef-8b48069e753e",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-he03-ricky-martin-music-artist-singer-celebrity-android-medium.jpg?alt=media&token=96d3f224-6274-4f9b-bdec-43a77590c2bb",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-he37-song-jaerim-kpop-actor-celebrity-android-medium.jpg?alt=media&token=ce68051c-1f12-4b03-b922-31f0c72398ff",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-he40-seojun-park-kpop-film-celebrity-android-medium.jpg?alt=media&token=fb7a93d8-ecd1-48b6-b6c9-71c51c56c9cd",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-he44-leeminho-kpop-star-film-sexy-android-medium%20(1).jpg?alt=media&token=51788452-e063-4cb1-95b7-dc4a39113dac",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-he96-byun-yo-han-kpop-film-star-android-medium.jpg?alt=media&token=dd07e738-b28d-4bac-9484-39f56570330d",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-hg48-justin-bieber-music-singer-celebrity-android-medium.jpg?alt=media&token=9c58bb57-bf01-433d-b0e6-e480127540a5",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-hi10-song-joonggi-water-drink-model-kpop-android-medium.jpg?alt=media&token=c00c4871-1ceb-4bc1-8b5b-994a8e31549d",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-hj69-jinwook-lee-kpop-actor-android-medium.jpg?alt=media&token=843d5be5-9a29-4f5c-8da3-cba38088e41f",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-hk41-suhyun-kpop-asian-korean-android-medium.jpg?alt=media&token=854af452-dabe-42de-ad77-5a720201b9da",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-hk56-gdragon-bigbang-kpop-singer-android-medium.jpg?alt=media&token=606015f7-2f79-42cd-a264-220fd7fe4924",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-hk81-suhyun-kim-kpop-actor-android-medium.jpg?alt=media&token=cc80eca9-c820-40a3-81b1-fb2f056c5f2b",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-hl13-leonardo-dicaprio-celebrity-film-actor-android-medium.jpg?alt=media&token=d646930f-821b-4046-8546-f6ff19bd3684",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-hl84-ryan-gosling-face-celebrity-film-star-android-medium.jpg?alt=media&token=3a3cec1a-3838-4589-9778-ad2efabbb884",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-hm00-ashton-kutcher-handsome-hollywood-actor-film-celebrity-android-medium.jpg?alt=media&token=1bebee21-ad71-467f-b5e1-91bdfd0d9517",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-hm11-gongyoo-handsome-korean-doggaebi-kpop-android-medium.jpg?alt=media&token=f63e655e-7938-4669-9cd9-1fededc050f1",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-hp40-jack-loweden-boy-man-handsome-bw-android-medium.jpg?alt=media&token=7e486165-bdf8-40d1-9617-bb3a19149008",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2FPapers.co-hs91-bts-kpop-jin-boy-music-android-medium.jpg?alt=media&token=31249e63-bd51-4abe-b075-cbedd530a646",
    ],
    womanImages: [
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2F01149.jpg?alt=media&token=dbc5fdef-c190-42a9-942e-ab9821095441",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2F01148.jpg?alt=media&token=f2bf09ef-dc28-4610-81cc-9ebe072fac66",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2F01147.jpg?alt=media&token=78bc8593-9b96-4620-b2f7-11cef672ce10",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2F01146.jpg?alt=media&token=25eb7a08-f695-41f6-8a63-acb190abe2eb",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2F01143.jpg?alt=media&token=ce061431-5e0a-4809-a487-093eabae5af0",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2F01142.jpg?alt=media&token=2c4a531b-3469-42c5-953b-9de10db31256",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/man%2F0114.jpg?alt=media&token=0d55c2bb-061d-4f9f-9095-93a1dd0ffc9e",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/woman%2FPapers.co-bj64-art-girl-face-digital-android-medium.jpg?alt=media&token=662ce2ed-811f-46bc-a9ce-014a8e6a4f5d",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/woman%2FPapers.co-hi71-beauty-girl-model-kpop-android-medium.jpg?alt=media&token=b3836a6c-74ca-4a38-a00f-7881d98f8b4e",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/woman%2FPapers.co-hk38-woohee-kpop-girk-white-asian-android-medium.jpg?alt=media&token=b8f18b06-b910-4fb4-9502-21e0dac19a63",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/woman%2FPapers.co-hp17-suji-kpop-girl-face-celebrity-android-medium%20(1).jpg?alt=media&token=b6e4834f-a20c-4b59-a9d7-140f69b27b5b",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/woman%2FPapers.co-hq24-victoria-asian-kpop-girl-face-android-medium.jpg?alt=media&token=baf3e56b-b444-4a5c-8f0a-7fa79e3aac34",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/woman%2FPapers.co-hq89-miranda-kerr-girl-model-face-android-medium.jpg?alt=media&token=d579d259-2a6c-434e-bcfd-d1369cb62c7e",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/woman%2FPapers.co-hr02-girl-kpop-asian-beauty-woman-android-medium.jpg?alt=media&token=853e489b-2cbd-447f-bd07-17f808dadc0f",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/woman%2FPapers.co-ht51-girl-film-japanese-face-android-medium.jpg?alt=media&token=2665ef7c-0371-4428-a797-18059b6679bc",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/woman%2FPapers.co-hu36-twice-girl-beauty-kpop-android-medium.jpg?alt=media&token=031f5c9f-85af-4703-a405-d34b840c66c5",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/woman%2FPapers.co-hu57-kpop-girl-face-hyesoo-android-medium.jpg?alt=media&token=35aa2152-348f-43cb-b2ce-d57a68eea3d5",
      "https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/woman%2FPapers.co-hu63-face-girl-asian-kpop-android-medium.jpg?alt=media&token=40306c2c-3ab9-4c1e-84ab-995c4627f178",
    ],
    sex_gb: "male",
  },
  mutations: {
    [SET_RANDOM](state) {
      let _sex_gb = state.sex_gb;
      let imageArr;

      if (_sex_gb == "male") {
        imageArr = state.manImages;
        console.log("male : ", imageArr);
      } else if (_sex_gb == "female") {
        imageArr = state.womanImages;
        console.log("female : ", imageArr);
      }

      let randomNo = Math.floor(Math.random() * imageArr.length);

      if (state.nums.indexOf(randomNo) == -1) {
        state.randomImages.push(imageArr[randomNo]);
        state.nums.push(randomNo);
      }
    },
    [IS_RANDOM](state) {
      state.isRandom = true;
    },
    [RESET_RANDOM](state) {
      state.randomImages = [];
      state.nums = [];
    },
    [SET_PREVIEW](state, payload) {
      state.myPhoto = payload;
    },
    [SET_SEX](state, payload) {
      state.sex_gb = payload;
    },
    [IS_UPLOAD](state, payload) {
      state.is_upload = payload;
    },
  },
  actions: {},
  modules: {},
});
