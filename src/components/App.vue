<template>
  <div id="app">
    <div class="wrapper">
          <div class="main-panel">
          <!--<Navbar></Navbar>-->
           </div>
           <!--<Sidebar></Sidebar>-->

          <div class="content">
            <div class="container-fluid">
              <router-view/>
            </div>

        <div class="row">
          <Footer></Footer>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
  import vue from 'vue'
  import Navbar from './Navbar.vue'
  import Sidebar from './Sidebar.vue'
  import Footer from './Footer.vue'
  import ProductList from './ProductList.vue'
  import AddProduct from './AddProduct.vue'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Navbar,
      Sidebar,
      Footer,
      ProductList,
      AddProduct,
    }
  }
</script>


<style>
  .my-input {
    background: transparent;
    border: 1px solid #9c27b0;
    padding: 7px;
    border-radius: 3px;
    line-height: 1.5em;
  }
  /*h1{font-size: xx-large; !important;}
  h2{font-size: x-large !important;}
  h3{font-size: larger !important;}
  h4{font-size: medium !important;}
  h5{font-size: small !important;}
  h6{font-size: x-small !important;}
*/

</style>
