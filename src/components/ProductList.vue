<template>
          <div class="container-fluid" style="background-color: lightgrey;">
            <div class="" style="">
              <div class="row" id="table-title-bar" style="">
                <div class="container-fluid" >
                  <div class="col-lg-1"></div>
                  <div class="col-lg-2" >
                    <h4 style="border-bottom: 1px #7f7f7f solid;text-align: center">مدیریت محصولات</h4>
                   <!--what the fuck is thissssss-->
i'm here!!!!
                    <ul>
                      <li v-for="product in products">{{product.product.made}}</li>
                    </ul>
                    <!--/ what the fuck is thissssss-->

                  </div>
                  <div class="col-lg-1"></div>

                  <div class="col-lg-4">
                    <!--<div class="" style="padding-top: 15px">-->
                    <!--<input placeholder="جستجو" id="first_name" type="text" class="validate">-->
                    <!--<i class="fa fa-search"></i>-->
                    <!--</div>-->

                  </div>
                  <div class="col-lg-3">
                    <Button class="btn btn-success " style="margin: 5px;float: left">
                      <router-link to="/addproduct">
                        ثبت محصول جدید
                      </router-link>
                    </Button>

                  </div>


                </div>
              </div>

              <div >
                <table class="table table-responsive table-bordered table-striped table-hover"  style="text-align: center;border-radius: 10px;">
                  <thead style="background-color: #00a5bb;border: 1px teal solid;">
                  <tr>
                    <th v-for="header in headers"
                        style="text-align: center"

                    >{{header.text}}
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="product in products">
                    <td>{{product.persianName}}</td>
                    <td>{{product.category.persianName}}</td>
                    <td>{{product.product.color}}</td>
                    <td>{{product.product.made}}</td>
                    <td>{{product.product.size[0].price.amount}}</td>
                    <td>{{product.product.quantity}}</td>
                    <td><i class="fa fa fa-pencil btn btn-link lg" > </i></td>
                    <td><i class="fa fa fa-trash btn btn-link lg" style="color: red"> </i></td>

                  </tr>
                  </tbody>
                </table>

              </div>

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
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        tmp: '',
        search: '',
        pagination: {},
        headers: [
          {title: 'product-name', text: 'نام محصول', value: ''},
          {title: 'main-cat', text: 'نام دسته اصلی', value: ''},
          {title: 'sub-cat1', text: 'نام زیر دسته ۱', value: ''},
          {title: 'sub-cat2', text: 'نام زیر دسته ۲', value: ''},
          {title: 'price', text: 'قیمت', value: ''},
          {title: 'quantity', text: 'موجودی', value: ''},
          {title: 'edit', text: 'ویرایش', value: '', sortable: false, value: ''},
          {title: 'delete', text: 'حذف', value: '', sortable: false, value: ''}
        ],

        items: [
          {title: 'product-name', value: '1'},
          {title: 'main-cat', value: '22'},
          {title: 'sub-cat1', value: '33'},
          {title: 'sub-cat2', value: '55'},
          {title: 'cost', value: '66'},
          {title: 'available', value: '88'},
        ],
        products: [],
        colors:[],
        countries:[],

      }
    },
    methods: {
      loadProduct(){
        axios.get(`http://dibapoosh.ir/api/v1/products/`).then(res => {
          console.log(res.data);
          this.products = [];
          this.products = res.data;
          this.colors=res.data.product.made
        });
      },
    },
    created(){
      this.loadProduct();
    },
    }



</script>





<style scoped>
  .card-table {
    padding: 10px;
    margin: 0px;
    background-color: #e0e0e0 !important;
    border-radius: 10px;
    border: 1px solid #5e5e5e;
  }
  a {
    color: white;
    text-decoration: none;
  }
</style>
