<template>
  <!-- <HomeView/> -->
  <div class="wrap">
    <div class="container">
      <Transition name="fade">
        <!-- <div class="intro" v-if="show" @click="hideIntro"></div> -->
        <div class="intro" v-if="show"></div>
      </Transition>
      <!-- <RouterView /> -->
      <RouterView v-on:hide="hideIntro" />
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import {fetchAllApi} from './api/index' ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
import { useStore } from "vuex";
// import HomeView from './views/HomeView.vue'
import { ref } from "vue";
export default {
  components: {
    // HomeView
  },
  setup() {
    // const data = ref([]);

    //vuex에 dispatch 전송 ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ

    /*
      // axios.get('https://ghibliapi.herokuapp.com/films')
      fetchAllApi()
      .then(response => {
        data.value = response.data
      })
      .catch(err => console.log(err))
      */ //ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ

    const store = useStore();
    store.dispatch("fetchMovieList");
    // const data = computed(() => store.getters.getMovieList); HomeVIew로 보냄

    const show = ref(true);

    const hideIntro = () => {
      show.value = false;

      document.querySelector("html").style.overflowY = "auto";
    };

    return {
      // data
      show,
      hideIntro,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}

html {
  font-size: 16px;
  background-color: rgb(69, 71, 74);
  overflow: hidden;
}

.wrap {
  position: relative;
  display: block;
}

.container {
  position: relative;
  display: block;
  white-space: nowrap;
  overflow: auto;
}

/* .intro {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: #ed9323 url("./assets/intro1.gif") no-repeat center;
  background-size: 100%;
} */
</style>
