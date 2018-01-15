<template>
  <div class="container-fluid">
    <div class="card-table " style="">
      <div class="row" id="table-title-bar">
        <div class="container-fluid" >
          <div class="col-lg-1"></div>
          <div class="col-lg-2">
            <h4>مدیریت محصولات</h4>
          </div>
          <div class="col-lg-1"></div>
                <!--تست دراپ دان-->
          <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Dropdown
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>

          <!-- Dropdown Trigger -->
          <a class='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!</a>

          <!-- Dropdown Structure -->
          <ul id='dropdown1' class='dropdown-content'>
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li class="divider"></li>
            <li><a href="#!">three</a></li>
            <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
            <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
          </ul>

          <div class="col-lg-4">
            <!--<div class="" style="padding-top: 15px">-->
            <!--<input placeholder="جستجو" id="first_name" type="text" class="validate">-->
            <!--<i class="fa fa-search"></i>-->
            <!--</div>-->

          </div>
          <div class="col-lg-3">
            <button class="btn btn-success" >ثبت محصول جدید</button>

          </div>


        </div>
      </div>

      <div style="border: 1px solid #000000;border-radius: 8px;">
        <table class="table table-responsive table-bordered table-striped" style="text-align: center;border-radius: 8px;">
          <thead>
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
            <td>{{product.category.name}}</td>
            <td>{{product.category.name}}</td>
            <td>{{product.product.quantity}}</td>
            <td>{{product.product.size.price.amount}}</td>
            <!--<td>{{product.persianName}}</td>-->
            <!--<td>{{prdc}}</td>-->
            <td><button>edit</button></td>
            <td><button @click="deleteItem(1)"> remove </button></td>

          </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>


</template>
<script>
  import axios from 'axios';
  export default {
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
          {title: 'cost', text: 'قیمت', value: ''},
          {title: 'available', text: 'موجودی', value: ''},
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

        products: []

      }
    },
    methods:{
        loadProduct(){
          axios.get(`http://dibapoosh.ir/api/v1/products/`).then(res => {
              console.log(res.data);
              this.products = [];
              this.products = res.data;
          });
        },
      deleteItem(itemID){
            console.log(itemID +'تلگرام أآزاد شد');
//            axios.delete(`fxdbdcrd/${itemID}`).then(res => {
//                loadProduct();
//            })
      }
    },
    created(){
        this.loadProduct();
    }
  }
</script>
<style scoped>
  .card-table{
    padding:10px;
    margin:0px;
    background-color:#e0e0e0 !important;
    border-radius: 10px;
    border: 1px solid #5e5e5e;
  }
</style>
