<template>
  <div class="card-table " style="">
    <div class="row" id="table-title-bar">
      <div class="container" >
        <div class="col-lg-1"></div>
        <div class="col-lg-2">
          <h4>مدیریت محصولات</h4>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-4">
          <div class="" style="padding-top: 15px">
            <input type="text">
            <i class="fa fa-search"></i>
          </div>

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
        <tr v-for="prcd in prcds">
          <td>{{prcd.persianName}}</td>
          <td>{{prcd.category.persianName}}</td>
          <td>{{prcd.category.name}}</td>
          <td>{{prcd.category.name}}</td>
          <td>{{prcd.product.quantity}}</td>
          <td>{{prcd.product.size.price.amount}}</td>
          <!--<td>{{prcd.persianName}}</td>-->
          <!--<td>{{prdc}}</td>-->
          <td><button>edit</button></td>
          <td><button @click="deleteItem(1)"> remove </button></td>

        </tr>
        </tbody>
      </table>
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

        prcds: []

      }
    },
    methods:{
        loadProduct(){
          axios.get(`http://dibapoosh.ir:8899/products/`).then(res => {
              console.log(res.data);
              this.prcds = [];
              this.prcds = res.data;
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
