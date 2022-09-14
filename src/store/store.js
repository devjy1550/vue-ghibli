import {
  createStore
} from "vuex";
import {
  fetchAllApi,
  fetchDetailInfo
} from '../api/index'


export default createStore({
  //데이터
  state: {
    movieList: [],
    movieInfo: {},
  },
  //전체데이터호출
  actions: {
    fetchMovieList({
      commit
    }) {
      fetchAllApi()
        .then(res => {
          //commit으로 결과전송
          commit('MOVIE_LIST_INIT', res.data)
        })
        .catch(err => console.log(err))
    },

    //상세데이터 호출
    fetchMovieInfo({
      commit
    }, _id) {
      fetchDetailInfo(_id)
        .then(res => {
          commit('MOVIE_INFO', res.data)
        })
        .catch(err => console.log(err))

    }
  },
  mutations: {
    MOVIE_LIST_INIT(state, payload) {
            state.movieList = payload;
    },
    MOVIE_INFO(state, payload) {
            state.movieInfo = payload;
    }
  },

  //데이터저장
  getters: {
    //전체 데이터 출력/창조
    getMovieList(state) {
      return state.movieList;
    },
    getMovieInfo(state) {
      return state.movieInfo;
    }
  }
});