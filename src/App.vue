<template>
  <div id="app">
    <!-- header -->
    <section class="header">
      <div class="container mt-2" style="background:#fdf5e0;">
        <div class="row">
          <!-- logo -->
          <div class="col-sm-12 col-md logo">
            <router-link to="/">
              <a href="#">
                <img
                  src="./assets/img/logo.png"
                  class="img-fluid"
                  style="width:100px;height:100px"
                />
              </a>
            </router-link>
          </div>
          <!-- Navbar -->
          <div class="col-sm-12 col-md-10 mt-3 ">
            <!-- social logo -->
            <div class="row">
              <div class="col d-flex justify-content-md-end">
                <div class="mr-5">
                  <a href="#" class="mr-1">
                    <i class="fab fa-facebook-square fa-lg"></i>
                  </a>
                  <a href="#" class="">
                    <i class="fab fa-line fa-lg" style="color:green;"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <nav class="navbar navbar-expand-sm navbar-light ">
                <button
                  class="navbar-toggler mx-auto"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <ul class="navbar-nav ml-auto mt-2 mt-lg-0 h5">
                    <li class="nav-item">
                      <a class="nav-link font-weight-bold" href="#">關於我們</a>
                    </li>
                    <li class="nav-item">
                      <router-link to="/news">
                        <a class="nav-link font-weight-bold" href="#"
                          >最新消息</a
                        >
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="products">
                        <a class="nav-link font-weight-bold" href="#"
                          >線上菜單</a
                        >
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link font-weight-bold" href="#">外送服務</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link font-weight-bold" href="#">聯絡我們</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<style lang="scss">
@import "./assets/all.scss";
body {
  background-color: #fdf5e0;
}
</style>
