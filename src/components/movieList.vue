<template>
  <div class="movie-box">
    <a v-on:click.stop="detailMovie">
      <div class="a-img">
        <img :src="propsdata.image" />
      </div>
      <h2 class="a-title">
        {{ propsdata.title }} <small>{{ propsdata.original_title }}</small>
      </h2>
      <p class="a-desc">
        {{ propsdata.description }}
      </p>
    </a>
  </div>
</template>

<script>
//router를 이용한 페이지 이동
import { useRouter } from "vue-router";

export default {
  props: ["propsdata"],
  setup(props) {
    const router = useRouter();
    const detailMovie = () => {
      //props를 참고하고자 할때는 setup(props)를 활용
      router.push("/page-ghibli/detail/" + props.propsdata.id);
    };

    return {
      detailMovie,
    };
  },
};
</script>

<style scoped>
.movie-box {
  position: relative;
  display: block;
}

.movie-box a {
  position: relative;
  display: block;
}

.a-img {
  position: relative;
  display: block;
  width: 100%;
  image-orientation: left;
  height: 500px;
  overflow: hidden;
  border-radius: 10px;
}

.a-img img {
  position: relative;
  display: block;
  float: left;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.a-title {
  position: relative;
  display: none;
  margin: 20px 0px;
  text-align: center;
  font-size: 18px;
}

.a-title small {
  display: none;
  float: right;
  font-size: 14px;
  color: #666;
}

.a-desc {
  position: relative;
  display: none;
  font-size: 12px;
  line-height: 1.25;
  color: #444;
}
</style>
