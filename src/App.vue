<template>
  <div id="app">
    <!-- header -->
    <header class="header sticky-top">
      <!-- Navbar -->
      <div class="container-fluid  shadow-sm p-1" style="background: #fdf5e0;">
        <div class="row">
          <div class="col-sm-1 col-md-12">
            <div class="col">
              <nav class="navbar navbar-expand-sm navbar-light ">
                <!-- logo -->
                <router-link to="/">
                  <a href="#">
                    <img
                      src="./assets/img/logo.png"
                      class="img-fluid"
                      style="width:80px;height:80px"
                    />
                  </a>
                </router-link>
                <button
                  class="navbar-toggler "
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
                  <ul class="navbar-nav ml-auto mt-lg-0 h5">
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
                    <li class="nav-item">
                      <div class="nav-link font-weight-bold">
                        <!-- social logo -->
                        <div class="ml-5">
                          <div class="d-flex justify-content-md-end">
                            <div class="mr-5">
                              <a href="#" class="mr-1">
                                <i class="fab fa-facebook-square fa-2x "></i>
                              </a>
                              <a href="#" class="">
                                <i
                                  class="fab fa-line fa-2x"
                                  style="color:green;"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
