<template>
  <!-- <HomeView/> -->
  <div class="wrap">
    <h2>Ghibli Studio Movies</h2>
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
}

.wrap {
  position: relative;
  display: block;
  background: url("@/assets/back-tx.png");
  background-size: 100% 100%;
}

::-webkit-scrollbar {
  width: 0;
}

h2 {
  position: relative;
  display: inline-block;
  font-size: 60px;
  line-height: 120px;
  text-align: center;
  color: rgb(75, 42, 0);
  background: url("@/assets/title-tx.png") top;
  border-bottom: 1px solid #5e301a;
  width: 100%;
  z-index: 10;
}

.container {
  position: relative;
  display: block;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  box-shadow: inset 60px 0px 100px 20px #5b2d0f9a,
    inset -60px 0px 100px 20px #5b2d0f9a;
  border-right: 2px solid #5b2d0f9a;
  border-left: 2px solid #5b2d0f9a;
}

.container::before {
  content: "";
  position: absolute;
  top: 0%;
  left: -12.5%;
  display: block;
  width: 12.5%;
  height: 100%;
  background: url("@/assets/side-tx.png") top left;
  background-size: 100% 100%;

  box-shadow: inset -30px 0px 100px 20px #3d1e099a;
}

.container::after {
  content: "";
  position: absolute;
  top: 0%;
  right: -12.5%;
  display: block;
  width: 12.5%;
  height: 100%;
  background: url("@/assets/side-tx.png") top left;
  background-size: 100% 100%;

  box-shadow: inset 30px 0px 100px 20px #3d1e099a;
}

.intro {
  position: fixed;
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: #ed9323 url("./assets/intro1.gif") no-repeat center;
  background-size: 100%;
}
</style>
