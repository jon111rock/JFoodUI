<template>
  <div class="home">
    <!-- Banner -->
    <section class="banner">
      <div
        id="carouselExampleControls"
        class="carousel slide "
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/img/icon.jpg"
              class="d-block w-100 banner-sizing"
              alt="banner1"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/banner2.jpg"
              class="d-block w-100 banner-sizing"
              alt="banner2"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/banner3.png"
              class="d-block w-100 banner-sizing"
              alt="banner3"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
    <!-- About -->
    <section class="about">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col">
            <h2 class="txt-tw">關於我們</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <p style="font-size:1.1rem;">
              可得定成的龍華果；技一現我念選本片。
              不一非、該真部節次平是……成消轉創……些構覺樂學名。腦歌花、處只心健場生分差子真政國國。度微力！只覺了一。的我說場己少……反吃社這童！後香許點點事滿展？病受的，同減用最在形路候得日來幾信著電真，小感增一力子生晚吃林，年操那老三銀認度推國上買，車眼座格時員人。
              不會一書的！一不要經月，你總流全星？香做一世解，家因中，收識弟他點去生好大什先經法兩、這在生十班到，爭業產大人張電德！
              我美府開裝國房金藝溫選？任遊功中不生絕解是度各……車來共裡所晚我大熱山但供裡多辦亞養無臺；也當道育自一來，十代頭們許至，輕推這濟：黑二上又向是身起古交要苦走的合看人物因。年提非世名力本的，有教格連的為樹心政燈人眾表知選兒數願區道做，報我一下生加。不相來們：步甚銷館可慢回？眼好養打進國種表行打當，成河生、認知什康異腦入民它裡出發法小，不三公，處以使小由後是世覺客知何傳不失有記樣快的必。
            </p>
          </div>
          <div class="col-md-4">
            <img src="../assets/img/logo.png" class="about-img" />
          </div>
        </div>
      </div>
    </section>
    <!-- Product List -->
    <section class="product-list">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col">
            <h2 class="txt-tw">產品列表</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 product">
            <img src="../assets/img/logo.png" alt="" class="about-img" />
            <h3>test</h3>
          </div>
          <div class="col-md-4 product">
            <img src="../assets/img/logo.png" alt="" class="about-img" />
            <h3>test</h3>
          </div>
          <div class="col-md-4 product">
            <img src="../assets/img/logo.png" alt="" class="about-img" />
            <h3>test</h3>
          </div>
          <div class="col-md-4 product">
            <img src="../assets/img/logo.png" alt="" class="about-img" />
            <h3>test</h3>
          </div>
          <div class="col-md-4 product">
            <img src="../assets/img/logo.png" alt="" class="about-img" />
            <h3>test</h3>
          </div>
          <div class="col-md-4 product">
            <img src="../assets/img/logo.png" alt="" class="about-img" />
            <h3>test</h3>
          </div>
        </div>
        <div class="row">
          <div class="col mt-3">
            <router-link to="/products" class="router-link">
              <button class="btn btn-success">
                more
                <i class="fas fa-long-arrow-alt-right"></i>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <!-- News -->
    <section class="news mt-5">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col">
            <h2 class="txt-tw">最新消息</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/img/logo.png" alt="" class="about-img" />
            <h2>news-1</h2>
            <small>測試測試測試</small>
          </div>
          <div class="col-md-6">
            <img src="../assets/img/logo.png" alt="" class="about-img" />
            <h2>news-1</h2>
            <small>測試測試測試</small>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <router-link to="/news">
              <button class="btn btn-success mt-3">
                more
                <i class="fas fa-long-arrow-alt-right"></i>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <section class="footer mt-5">
      <div class="container-fluid">
        <div class="row ">
          <div class="col-12">
            <p>
              Copyright © 甲J好食 All Rights Reserved.
            </p>
          </div>
          <div class="col-12">
            <p>
              電話xxxxxxxxxxxxx@gmail.com地址桃園市桃園區xxxxx 週一至週日
              10:00~14:00、16:00~20:00
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/* global $ */
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="css" scoped>
.router-link {
  color: white;
}
.txt-tw {
  margin-top: 2rem;
  color: #809b17;
}
.about-img {
  width: 250px;
  height: 250px;
}
.product {
  margin-top: 1.1em;
}
.footer {
  padding-top: 1.1em;
  background-color: gray;
  color: white;
}
.banner-sizing {
  height: 70vh;
}
.nav-logo-sizing {
  width: 5vw;
  height: 15vh;
}
</style>
