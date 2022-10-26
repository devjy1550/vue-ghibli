<template>
  <div class="movie-box">
    <a>
      <div class="a-img card">
        <img :src="propsdata.image" />
      </div>
      <div class="a-img-back card">
        <h2 class="a-title">
          {{ propsdata.title }}
          <br />
          <span>{{ propsdata.original_title }}</span>
        </h2>
        <p class="a-desc">
          {{ propsdata.description }}
        </p>
        <button v-on:click.stop="detailMovie"></button>
      </div>
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
  display: inline-block;
  cursor: pointer;
  z-index: 30;
}

.a-img img {
  position: relative;
  display: block;
  float: left;
  width: 100%;
  z-index: 30;
  transition: 1s ease-in-out;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.movie-box:hover .a-img img {
  position: relative;
  width: 100%;
  z-index: 60;
  display: block;
  transform: rotateY(0.5turn);
}

.a-img-back {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateY(0.5turn);
  backface-visibility: hidden;
  transition: 1s ease-in-out;
  transform-style: preserve-3d;
  background: rgba(49, 49, 49, 0.637);
  z-index: 70;
}

.movie-box:hover .a-img-back {
  position: absolute;
  display: block;
  transform: rotateY(1turn);
  z-index: 70;
}

.a-img-back .a-title {
  position: relative;
  display: block;
  text-align: center;
  font-size: 24px;
  line-height: 28px;
  padding: 16px 0;
}

.a-img-back .a-title span {
  position: relative;
  display: block;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  margin-top: 12px;
  color: rgb(94, 88, 88);
}

.a-desc {
  position: relative;
  display: block;
  font-weight: 500;
  white-space: wrap;
  font-size: 12px;
  line-height: 16px;
  margin-top: 10px;
  color: #fff;
  padding: 0 10px;
}

.a-img-back button {
  position: absolute;
  display: block;
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: 0;
  cursor: pointer;
  transition: all 1s;
  background: url("@/assets/info.png") no-repeat center;
  background-size: contain;
}

.a-img-back button:hover {
  background: url("@/assets/info-on.png") no-repeat center;
  background-size: contain;
}
</style>
