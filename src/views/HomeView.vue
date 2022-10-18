<template>
  <h2>Ghibli Studio Movies</h2>
  <div v-for="(item, index) in movieList" :key="index" class="movie">
    <!-- <img :src="item.image"/>
  <h2>{{item.title}} <small>{{item.original_title}}</small></h2>
  <p>
    {{item.description}}
  </p> -->
    <!-- <MovieList :item = "item" /> 헷갈릴까봐 적어둠-->
    <MovieList :propsdata="item" />
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
h2 {
  position: relative;
  display: block;
  font-size: 60px;
  line-height: 72px;
  text-align: center;
}
.movie {
  position: relative;
  display: inline-block;
  width: 10%;
  background-color: rgba(169, 173, 179, 0.539);
  margin-bottom: 70px;
  border-radius: 5px;
  color: #ececec;
  padding: 20px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  cursor: pointer;
  transition: all 1s;
}

.movie:hover {
  width: 30%;
}

@media screen and (max-width: 1000px) {
  .movie {
    width: 95%;
  }
}
</style>
