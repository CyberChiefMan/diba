<template>
  <div class="container-fluid">
    <div class="row" id="top-bar" >
      <div class="row sectionTitle" >
          <h4 style="font-weight: bold;float:right;">افزودن محصول جدید</h4>
        <div style="float:left">
          <button type="submit" class="btn btn-success">ذحیره</button>
          <button type="button" class="btn btn-default text-center">انصراف</button>
        </div>
      </div>

    </div>
    <hr>
    <div class="row" id="product-detail"  style="align-content: center;align-items: center;text-align: center;">
      <div class="col-md-4  btn-group-vertical ">

        <div class="btn-group ">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"> دسته اصلی
            <span class="caret"></span>
          </button>

          <ul class="dropdown-menu" role="menu">
            <li>
              <a href="#">مردانه</a>

            </li>
            <li>
              <a href="#">زنانه</a>
            </li>
            <li>
              <a href="#">بچه گانه</a>
            </li>
          </ul>
        </div>

        <div class="btn-group">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"> زیر دسته اول
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu">
            <li>
              <a href="#">لباس</a>
            </li>
            <li>
              <a href="#">کیف</a>
            </li>
            <li>
              <a href="#">کفش</a>
            </li>
          </ul>
        </div>

        <div class="btn-group">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"> زیر دسته دوم
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu">
            <li>
              <a href="#">مجلسی</a>
            </li>
            <li>
              <a href="#">اسپورت</a>
            </li>
          </ul>
        </div>


      </div>


      <div class="col-md-4 btn-group-vertical" >

           <div class="input-group">
          <span class="input-group-addon" id="basic-addon1" >نام فارسی :</span>
          <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1">

        </div>
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon2" >نام انگلیسی:</span>
          <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon2">

        </div>

      </div>

      <div class="col-md-4  btn-group-vertical">

  <div class="btn-group">
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"> کشور سازنده
      <span class="caret"></span>
    </button>
    <ul v-for="product in products">
      <li >{{product.product.made}}</li>
    </ul>
  </div>

  <div class="btn-group">
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"> انتخاب تخفیف
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu " role="menu">
      <li style="text-align: center">
        <div>
          <a href="" style="color: #0f0f0f">تخفیف ۱</a>
          <i class=" btn btn-link fa fa-trash" style="color: red;"></i>
        </div>
      </li>
      <li style="text-align: center">
        <div>
          <a href="" style="color: #0f0f0f">تخفیف ۲</a>
          <i class=" btn btn-link fa fa-trash" style="color: red;"></i>
        </div>
      </li>
      <li style="text-align: center">
        <div>
          <a href="" style="color: #0f0f0f">تخفیف ۳</a>
          <i class=" btn btn-link fa fa-trash" style="color: red"></i>
        </div>
      </li>

    </ul>
  </div>

      </div>
    </div>
    <hr/>
    <!--انتخاب تصویر-->
    <div class="row" id="select picture" >
      <div class="row sectionTitle" >
        <h4><b>انتخاب تصویر</b></h4>
      </div>
      <br>
      <div class="row">
        <div class="col-md-6 ">
          <div class="thumbnail picture_card">
            <img src="../assets/logo.png" alt="">
            <div class="caption">
              <h4 class="text-right"><a class="btn  btn-danger btn-sm fa fa-trash" role="button" style="float:left;" href="#"></a>انتخاب
                تصویراصلی</h4>
            </div>
          </div>
        </div>
        <div class="col-md-6 ">
          <div class="row">
            <div class="col-md-6 ">
              <div class="thumbnail picture_card">
                <img src="../assets/logo.png" alt="">
                <div class="caption">
                  <h4 class="text-right"><a class="btn  btn-danger btn-sm fa fa-trash" role="button" style="float:left"
                                            href="#"></a>انتخاب تصویر</h4>
                </div>
              </div>
              <div class="thumbnail picture_card">
                <img src="../assets/logo.png" alt="">

                <div class="caption">
                  <h4 class="text-right"><a class="btn  btn-danger btn-sm fa fa-trash" role="button" style="float:left"
                                            href="#"></a>انتخاب تصویر</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 ">
              <div class="thumbnail picture_card">
                <img src="../assets/logo.png" alt="">
                <div class="caption">
                  <h4 class="text-right"><a class="btn  btn-danger btn-sm fa fa-trash" role="button" style="float:left"
                                            href="#"></a>انتخاب تصویر</h4>
                </div>
              </div>
              <div class="thumbnail picture_card">
                <img src="../assets/logo.png" alt="">
                <div class="caption">
                  <h4 class="text-right"><a class="btn  btn-danger btn-sm fa fa-trash" role="button" style="float:left"
                                            href="#"></a>انتخاب تصویر</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <hr/>

    <!--    تعریف رنگ بندی -->
    <div class="row container-fluid sectionTitle" id="select-color" >
      <div>
        <button type="button" class="btn btn-primary" style="float:left;">تعریف رنگ جدید</button>
        <h4 class="text-right" style="float: right;"><b>رنگ بندی </b></h4>
      </div>
      </div>
      <hr>

      <div class="row" id="select-color-innerrow">
        <div class="col-md-3 ">
          <div class="thumbnail">
            <img src="../assets/logo.png" alt="">
            <div class="caption">
              <h4 class="text-right"><a class="fa fa-trash btn  btn-danger btn-sm" role="button" style="float:left" href="#"></a>
                انتخاب تصویر
                رنگ</h4>
              <div class="btn-group" style="text-align: center">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"> انتخاب رنگ
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu">
                  <li>
                    <div>
                      <a href="" style="color: #0f0f0f">رنگ ۱</a>
                      <i class=" btn btn-link fa fa-trash" style="color: red;"></i>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a href="" style="color: #0f0f0f">رنگ ۲</a>
                      <i class=" btn btn-link fa fa-trash" style="color: red;"></i>
                    </div>

                  </li>
                  <li>
                    <div>
                      <a href="" style="color: #0f0f0f">رنگ ۳</a>
                      <i class=" btn btn-link fa fa-trash" style="color: red;"></i>
                    </div>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="thumbnail">
            <img src="../assets/logo.png" alt="">
            <div class="caption">
              <h4 class="text-right"><a class=" fa fa-trash btn  btn-danger btn-sm" role="button" style="float:left" href="#"></a>انتخاب
               تصویر رنگ</h4>
              <div class="btn-group" style="text-align: center">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"> انتخاب  رنگ
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu">
                  <li>
                    <div>
                      <a href="" style="color: #0f0f0f">رنگ ۱</a>
                      <i class=" btn btn-link fa fa-trash" style="color: red;"></i>
                    </div>
                                      </li>
                  <li>
                    <div>
                      <a href="" style="color: #0f0f0f">رنگ ۲</a>
                      <i class=" btn btn-link fa fa-trash" style="color: red;"></i>
                    </div>

                      </li>
                  <li>
                    <div>
                      <a href="" style="color: #0f0f0f">رنگ ۳</a>
                      <i class=" btn btn-link fa fa-trash" style="color: red;"></i>
                    </div>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    <hr/>

    <div class="row picture_card" id="size_price" >

      <div class="row sectionTitle">

          <h4 style="float: right"> <b>
            سایز و قیمت
          </b>

          </h4>
          <button type="button" class="btn btn-primary" style="float:left">تعریف سایز جدید</button>
      </div>
      <br>
      <div class="row">
        <div class="col-md-1"></div>

        <div class="col-md-3">
          <input type="text" class="form-control" placeholder="سایز">
        </div>
        <div class="col-md-3">
          <input type="text" class="form-control" placeholder="قیمت">
        </div>
        <div class="col-md-3">
          <input type="text" class="form-control" placeholder="موجودی">
        </div>
        <div class="col-md-1"></div>
      </div>
      <br>
      <div class="row ">
        <div class="row sectionTitle" style="text-align: center" >
        <h4><b> رنگ های موجود</b></h4>

      </div>


        <br>
        <div class="row ">
          <div class="col-md-3"></div>

          <div class="col-md-6" style="text-align: center">
            <ul class="">
              <li v-for="color in colors" class="list-group-item" >
              <input class="control-label" type="checkbox" value=""> {{color}}
              </li>
            </ul>
            <div class="row">

            </div>
            <button type="button" class="btn btn-danger">حذف این سایز</button>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
      <hr/>
    </div>
  </div>

  <!--<div class="">
    <div class="card-content">
      <form>
        <div class="row">
          <div class="">
            <p class=""> اسم محصول </p>
            <input type="text" class="form-control">
          </div>
          <div class=" ">
            <p class=""> اسم فارسی </p>
            <input type="text" class="form-control">
          </div>
          <div class=" ">
            <p class=""> اسم انگلیسی </p>
            <input type="text" class="form-control">
          </div>
        </div>
        <br>

        <div class="row">
          <div class="col-md-3">
            <p>انتخاب نوع</p>
            <div class="input-field">
              <select name="" id="">
                <option value="">مجازی</option>
                <option value="">فیزیکی</option>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <p>برند</p>
            <select name="">
              <option value="">Nike</option>
              <option value="">Adidas </option>
              <option value="">Ebay</option>
            </select>
          </div>
          <div class="col-md-3">
            <p>انتخاب دسته بندی</p>
            <select name="">
              <option value="">مردانه</option>
              <option value="">زنانه </option>
              <option value="">بچگانه</option>
            </select></div>
        </div>
        <br>
        <div class="row">
          <div class="col-md-1">
            <p>ارسال تصاویر</p>
          </div>
          <div class="col-md-3">
            <input type="file" class="btn btn-success">
          </div>
        </div>
        <br><br>
        <div class="row">
          <div class="col-md-2">
            <p>ویژگی و کیفیت</p>
            <button type="button" @click="addRow" class="btn btn-info">اضافه کردن</button>
          </div>
          <br>
          <div class="col-md-3">
            <ul>
              <li v-for="(input,index) in inputs" class="rightinput">
                <label for="">ویژگی</label>
                <input type="text" v-model="input.one" class="form-control">
                <label for="">امتیاز</label>
                <input type="text" v-model="input.two" class="form-control">
                <button type="button" class="btn btn-danger btn-round btn-sm" @click="deleteRow(index)">حذف </button>
              </li>
            </ul>
          </div>

        </div>
        <div class="row">
          <div class="col-md-3">
            <p>انتخاب دسته بندی محصولات فیزیکی</p>
            <select name="">
              <option value="">۱</option>
              <option value="">۲ </option>
              <option value="">۳</option>
            </select>
          </div>

          <div class="col-md-3">
            <p>انتخاب دسته بندی محصولات مجازی</p>
            <select name="">
              <option value="">۱</option>
              <option value="">۲ </option>
              <option value="">۳</option>
            </select>
          </div>
        </div>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <button type="submit" class="btn btn-primary btn-lg pull-left"> ثبت </button>
          <button type="reset" class="btn  btn-lg pull-left"> انصراف </button>

        </div>
        <div class="col-md-4"></div>
       </div>
      </form>
    </div>
  </div>-->
</template>

<script>
  //  import { Card } from 'bootstrap-vue/es/components';
  //  Vue.use(Card);
  import axios from 'axios';
  import Vue from 'vue';
  import ProductList from './ProductList.vue';

  export default {
    data() {
      return {
        inputs: [],
        products:[],
        colors:[],
        countries:[],
        discounts:[],
        mainCategories:[],
        subCatgoriesOne:[],
        subCatgoriesTwo:[],
        colorIcons:[],
        e1: null,
        e2: null,
        e3: null,
        e4: null,
        items: [
          {text: 'State 1'},
          {text: 'State 2'},
          {text: 'State 3'},
          {text: 'State 4'},
          {text: 'State 5'},
          {text: 'State 6'},
          {text: 'State 7'}
        ],



      }

    },

    methods:{
      loadProducts(){
        axios.get(`http://dibapoosh.ir/api/v1/products/`).then(res => {
          console.log(res.data);
          this.products = [];
          this.products = res.data;

        });
      },

        /*  loadCountries(){
        axios.get(`http://dibapoosh.ir/api/v1/products/countries`).then(res => {
          console.log(res.data);
          this.countries = [];
          this.countries = res.data;

        });
      },*/
      /*   addRow() {
        this.inputs.push({
          one: '',
          two: ''
        })
      },

      deleteRow(index) {
        this.inputs.splice(index, 1)
      },*/

     /* loadProduct(){
        axios.get(`http://dibapoosh.ir/api/v1/products/`).then(res => {
          console.log(res.data);
          this.products = [];
          this.products = res.data;

        });
      },*/
      loadColors(){
        axios.get(`http://dibapoosh.ir/api/v1/products/colors/`).then(res => {
          console.log(res.data);
          this.colors = [];
          this.colors = res.data;
          loadProducts();

        });
      },
    created(){
        this.loadProducts();
        this.loadColors();
      },
  }
  }

</script>
<style>
  .card-content {

    text-align: right;
    direction: rtl;
    background-color: white;
    margin: 10px;
    padding: 30px;
    width: 100%;
    border-radius: 5px;
    color: #2e2e2e;
    font-family: IRANSans;
  }

  html {
    color: #2e2e2e;

  }

  input:focus {
    border-bottom-color: #8e24aa;
  }

  label {
    float: right;
    text-align: right;
    direction: rtl;
    color: #2e2e2e;
  }

  .form-control, .form-group .form-control {
    color: #212121;
    border-color: #8e24aa;
  }

  button {
    font-size: 2em;
  }

  .caption {
    background-color: #F2F2F2;

  }
.sectionTitle
{
  background-color: #D8D8D8;
  padding-top:10px;
  padding-bottom:5px;
  padding-left:30px ;
  padding-right:30px ;
  font-weight: bold;
}
/*  h1{font-size: xx-large; !important;}
   h2{font-size: x-large !important;}
   h3{font-size: larger !important;}
   h4{font-size: medium !important;}
   h5{font-size: small !important;}
   h6{font-size: x-small !important;}*/

</style>
