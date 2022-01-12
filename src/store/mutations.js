const SET_RANDOM = 'SET_RANDOM';

export const mutations = {
    [SET_RANDOM](state) {
      let nums = [];
      let images = [];
      let len = state.images.length;
      let randomNo = Math.floor(Math.random() * state.images.len)

//    if ( nums.indexOf(randomNo) == -1){
//      images.push(a[randomNo])
//      nums.push(randomNo);
//    }      
      state.images = images;
    },
}