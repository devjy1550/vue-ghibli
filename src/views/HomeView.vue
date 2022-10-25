<template>
  <div class="movie-showcase">
    <div v-for="(item, index) in movieList" :key="index" class="movie">
      <!-- <img :src="item.image"/>
  <h2>{{item.title}} <small>{{item.original_title}}</small></h2>
  <p>
    {{item.description}}
  </p> -->
      <!-- <MovieList :item = "item" /> 헷갈릴까봐 적어둠-->
      <MovieList :propsdata="item" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onUpdated } from "vue";
import MovieList from "../components/movieList.vue";

export default {
  // props : ['aaa'],
  components: {
    MovieList,
  },
  setup(props, context) {
    const store = useStore();
    // const data = computed(()=> store.getters.getMovieList);
    const movieList = computed(() => store.getters.getMovieList);

    //html태그의 속성으로 ref를 활용하여 선택

    // axios 실행 > vuex : mutation 실행
    onUpdated(() => {
      // 내용물이 최종업데이트가 되었다면 App으로
      // intro 사라지라고 신호를 보냄
      setTimeout(() => {
        clearTimeout();
        context.emit("hide");
      }, 4150);
    });

    return {
      // data,
      movieList,
    };
  },
};
</script>

<style scoped>
.movie-showcase {
  position: relative;
  display: block;

  padding: 0 10%;
}

.movie {
  position: relative;
  display: inline-block;
  width: calc(80% / 3);
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 120px;
  border-radius: 5px;
  color: #ececec;
  transition: all 1s;
}

.movie:nth-child(3n-2) {
  margin-left: 0;
}
.movie:nth-child(3n) {
  margin-right: 0;
}
.movie:nth-child(3n-1)::after {
  content: "";
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 90vw;
  height: 40px;
  background: url("@/assets/title-tx.png");
  box-shadow: 0 10px 6px 6px rgba(53, 36, 17, 0.637);
  margin-right: 0;
  z-index: 1;
}
.movie:nth-child(3n-1)::before {
  content: "";
  position: absolute;
  bottom: 00px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: calc(90vw - 11vw);
  border-bottom: 40px solid #ac8867;
  border-left: 5.5vw solid transparent;
  border-right: 5.5vw solid transparent;
  height: 0;
  margin-right: 0;
  z-index: 1;
}
</style>
