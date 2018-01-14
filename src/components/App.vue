<template>
  <div id="app">
    <div class="wrapper">
      <Sidebar></Sidebar>
      <div class="main-panel">
        <Navbar></Navbar>
        <div class="content">
          <div class="container-fluid">
            <router-view/>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue'
  import Sidebar from './Sidebar.vue'
  import Footer from './Footer.vue'
  import ProductList from './ProductList.vue'

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
</style>
