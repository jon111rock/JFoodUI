<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <!-- ProductType navbar -->
        <section class="product-nav col-md-2" data-aos="fade-up">
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
        <section class="product-list col-md-10" data-aos="fade-up">
          <div class="row">
            <div
              class="col-md-4 product"
              v-for="(item, key) in products"
              :key="key"
            >
              <img :src="item.photoUrl" alt="" class="product-img" />
              <h5 class="mt-1">{{ item.name }}</h5>
              <small>NT$ {{ item.price }} </small>
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
        .get(`${process.env.VUE_APP_APIPATH}/products`)
        .then((res) => {
          res.data.forEach((i) => {
            if (i.productTypeId == vm.currentType.productTypeId) {
              if (i.state == 1) {
                vm.products.push(i);
              }
            }
          });
          // console.log(this.products);
        })
        .catch((err) => {
          console.log("取得產品失敗", err);
        });
    },
    getProductTypes() {
      var vm = this;
      this.productTypes = [];
      this.axios
        .get(`${process.env.VUE_APP_APIPATH}/producttypes`)
        .then((res) => {
          res.data.forEach((i) => {
            if (i.state == 1) {
              vm.productTypes.push(i);
            }
          });
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
