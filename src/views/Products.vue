<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <!-- ProductType navbar -->
        <section class="product-nav col-md-2">
          <div class="row justify-content-center mt-2">
            <nav class="nav flex-column ">
              <div v-for="(item, key) in productTypes" :key="key">
                <a
                  class="nav-link"
                  :class="{ active: currentActiveBtn == key }"
                  style="cursor:pointer;"
                  @click="changeProductType(item, key)"
                >
                  {{ item.name }}
                </a>
              </div>
            </nav>
          </div>
        </section>
        <!-- product list -->
        <section class="product-list col-md-10">
          <div class="row">
            <div class="col-md-4 product">
              <img
                src="../assets/img/青蔥資料/嫩香滷大雞腿.jpg"
                alt=""
                class="product-img"
              />
              <h5 class="mt-1">嫩香滷大雞腿</h5>
              <small>NT$199</small>
            </div>
            <div class="col-md-4 product">
              <img
                src="../assets/img/青蔥資料/泰美味打拋豬.jpg"
                alt=""
                class="product-img"
              />
              <h5 class="mt-1">泰美味打拋豬</h5>
              <small>NT$199</small>
            </div>
            <div class="col-md-4 product">
              <img
                src="../assets/img/青蔥資料/清蒸蔥油雞腿.jpg"
                alt=""
                class="product-img"
              />
              <h5 class="mt-1">清蒸蔥油雞腿</h5>
              <small>NT$199</small>
            </div>
            <div class="col-md-4 product">
              <img
                src="../assets/img/青蔥資料/秘醬老滷排骨.jpg"
                alt=""
                class="product-img"
              />
              <h5 class="mt-1">秘醬老滷排骨</h5>
              <small>NT$199</small>
            </div>
            <div class="col-md-4 product">
              <img
                src="../assets/img/青蔥資料/紅燒糖醋里肌.jpg"
                alt=""
                class="product-img"
              />
              <h5 class="mt-1">紅燒糖醋里肌</h5>
              <small>NT$199</small>
            </div>
            <div class="col-md-4 product">
              <img
                src="../assets/img/青蔥資料/經典京醬肉絲.jpg"
                alt=""
                class="product-img"
              />
              <h5 class="mt-1">經典京醬肉絲</h5>
              <small>199$NT</small>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productTypes: [],
      products: [],
      currentType: {},
      currentActiveBtn: 0,
    };
  },
  mounted() {
    this.getProductTypes();
    this.getProducts();
  },
  methods: {
    getProducts() {
      var vm = this;
      this.products = [];
      this.axios
        .get("https://localhost:5001/api/products")
        .then((res) => {
          res.data.forEach((i) => {
            if (i.productTypeId == vm.currentType.productTypeId) {
              vm.products.push(i);
            }
          });
          console.log(this.products);
        })
        .catch((err) => {
          console.log("取得產品失敗", err);
        });
    },
    getProductTypes() {
      this.axios
        .get("https://localhost:5001/api/producttypes")
        .then((res) => {
          this.productTypes = res.data;
          this.currentType = this.productTypes[0];
        })
        .catch((err) => {
          console.log("取得類別失敗", err);
        });
    },
    changeProductType(item, key) {
      this.currentActiveBtn = key;
      this.currentType = item;
      this.getProducts();
    },
  },
};
</script>
<style lang="css" scoped></style>
