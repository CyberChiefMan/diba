<template>
  <div>
    im here
    <div class="panel panel-group">
    <ul v-for="product in products">
      <li >{{product.product.made}}</li>
    </ul>
    </div>

  </div>
</template>
<script>
  import axios from 'axios';
  import AddProduct from './AddProduct.vue'
  export default {
    components: {
      AddProduct,
    },
    data () {
      return {
    products:[],
      }
    },
    methods:{
      loadProductsss(){
        axios.get(`http://dibapoosh.ir/api/v1/products/`).then(res => {
          console.log(res.data);
          this.products = [];
          this.products = res.data;

        });
      },
    },
    created(){
      this.loadProductsss();
    },


  };



</script>
