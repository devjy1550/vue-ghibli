<template>
  <div v-for="(item, index) in movieList" :key="index" class="movie">

    <!-- <img :src="item.image"/>
  <h2>{{item.title}} <small>{{item.original_title}}</small></h2>
  <p>
    {{item.description}}
  </p> -->
    <!-- <MovieList :item = "item" /> 헷갈릴까봐 적어둠-->
    <MovieList :propsdata="item" />

  </div>

  <button class="gotop" ref="gotop" @click="moveTop">위로가기</button>
  <!-- $('button'), $('.gotop') -->
  <!-- document.querySelector('button') -->
</template>

<script>
  import {
    useStore
  } from 'vuex'
  import {
    computed,
    onMounted,
    onUpdated,
    ref
  } from 'vue'
  import MovieList from '../components/movieList.vue'

  export default {
    // props : ['aaa'],
    components: {
      MovieList
    },
    setup(props, context) {
      const store = useStore();
      // const data = computed(()=> store.getters.getMovieList);
      const movieList = computed(() => store.getters.getMovieList);

      //html태그의 속성으로 ref를 활용하여 선택
      const gotop = ref(null);
      onMounted(() => {
      })






      // axios 실행 > vuex : mutation 실행
      onUpdated(() => {
        // 내용물이 최종업데이트가 되었다면 App으로
        // intro 사라지라고 신호를 보냄
        setTimeout(() => {
          clearTimeout();
          context.emit('hide');
        }, 2000);

      })

      const moveTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }

      return {
        // data,
        movieList,
        gotop,
        moveTop
      }
    }
  }
</script>

<style scoped>
  .movie {
    position: relative;
    display: block;
    width: 49%;
    background: #fff;
    margin-bottom: 70px;
    border-radius: 5px;
    color: #adadb9;
    padding: 20px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    cursor: pointer;
  }

  .gotop {
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    background-color: red;
    border: 0;
    line-height: 100px;
    color: #adadb9;
    cursor: pointer;
    border-radius: 20px;
    z-index: 9;
  }

  @media screen and (max-width: 1000px) {
    .movie {
      width: 95%;
    }
  }
</style>