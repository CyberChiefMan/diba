<template>
  <div class="container-fluid">
    <div class="row container-fluid panel panel-primery" id="top_bar">
      <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3" >
        <h4 style="">مدیریت دسته بندی ها</h4>
      </div>
      <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
      </div>
      <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
      </div>
      <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 text-center  ">
        <div style="align-items: center;align-content: center;padding: 5px; ">
          <button type="button" class="btn btn-success">ذخیره</button>
          <button type="button" class="btn btn-default">انصراف</button>
        </div>
      </div>
    </div>

    <div class="row"  id="content_row">
      <div class="col-lg-4 col-sm-4 col-md-4 col-xs-4" id="mens">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="thumbnail" >
            <img src="../assets/img/apple-icon.png" alt=""
                 class="thumbnail">
            <div class="caption" >
              <a href="#" class="btn btn-block btn-info" role="button">آپلود تصویر جدید</a>
              <h3 class="text-center thumbnail">مردانه </h3>
              <p><a href="#" class="btn btn-block btn-primary" role="button">ایجاد زیر دسته جدید</a></p>
            </div>
          </div>
          <div class="text-center thumbnail" >
            <div class="btn-group" >
              <button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown">
                <span class="caret"></span>
                پوشاک
                <span class="fa fa-trash"></span>
                <span class="fa fa-plus"></span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li>
                  <a href="#">پیراهن</a>
                </li>
                <li>
                  <a href="#">تی شرت</a>
                </li>
                <li>
                  <a href="#">Separated link</a>
                </li>
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="#">Action</a>
                </li>
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="#">Action</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-4 col-md-4 col-xs-4" id="womens" >
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="thumbnail" >
            <img src="../assets/img/apple-icon.png" alt=""
                 class="thumbnail">
            <div class="caption" >
              <a href="#" class="btn btn-block btn-info" role="button">آپلود تصویر جدید</a>
              <h3 class="text-center thumbnail">زنانه</h3>
              <p><a href="#" class="btn btn-block btn-primary" role="button">ایجاد زیر دسته جدید</a></p>
            </div>
          </div>
          <div class="text-center thumbnail" >
            <div class="btn-group" >
              <button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown">
                <span class="caret"></span>
                پوشاک
                <span class="fa fa-trash"></span>
                <span class="fa fa-plus"></span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li>
                  <a href="#">پیراهن</a>
                </li>
                <li>
                  <a href="#">تی شرت</a>
                </li>
                <li>
                  <a href="#">Separated link</a>
                </li>
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="#">Action</a>
                </li>
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="#">Action</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-4 col-md-4 col-xs-4" id="kids" >
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="thumbnail" >
            <img src="../assets/img/apple-icon.png" alt=""
                 class="thumbnail">
            <div class="caption" >
              <a href="#" class="btn btn-block btn-info" role="button">آپلود تصویر جدید</a>
              <h3 class="text-center thumbnail">بچه گانه</h3>
              <p><a href="#" class="btn btn-block btn-primary" role="button">ایجاد زیر دسته جدید</a></p>
            </div>
          </div>
          <div class="text-center thumbnail" >
            <div class="btn-group" >
              <button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown">
                <span class="caret"></span>
                پوشاک
                <span class="fa fa-trash"></span>
                <span class="fa fa-plus"></span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li>
                  <a href="#">پیراهن</a>
                </li>
                <li>
                  <a href="#">تی شرت</a>
                </li>
                <li>
                  <a href="#">Separated link</a>
                </li>
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="#">Action</a>
                </li>
                <li role="presentation">
                  <a role="menuitem" tabindex="-1" href="#">Action</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="">
  <div class="card-content">
    <form>
      <div class="row">
        <div class="col-md-3">
          <div class="form-group label-floating">
            <p class="control-label"> اسم محصول </p>
            <input type="text" class="form-control">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="form-group label-floating">
            <p class="control-label">نام فارسی</p>
            <input type="text" class="form-control">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="form-group label-floating">
            <p>نام انگلیسی</p>
            <input type="text" class="form-control">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="form-group label-floating">
            <p class="control-label">توضیحات محصول</p>
            <textarea class="form-control"></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="form-group label-floating">
            <p class="control-label">توضیحات محصول</p>
            <textarea class="form-control"></textarea>
          </div>
        </div>
      </div>
      <br><br>
      <div class="row">
        <div class="col-md-2">
          <p>لطفا یک تصویر انتحاب کنید</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div v-if="!image">

            <input type="file" class="btn btn-primary pull-right" @change="onFileChange">
          </div>
          <div v-else>
            <img :src="image" width="150"/>
            <button class="btn btn-danger" @click="removeImage"> حذف تصویر</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <p>انتخاب مجموعه</p>
          <div class="input-field">
            <select name="" id="">
              <option value="" disabled>انتخاب ساب کتگوری</option>
              <option value="">مردانه</option>
              <option value="">زنانه</option>
              <option value="">بچه گانه</option>
            </select>
          </div>
        </div>
      </div>

      <div class="row">
        <button type="submit" class="btn btn-primary ">ثبت</button>
      </div>
    </form>
  </div>
</div>-->

</template>
<script>
  import PictureInput from 'vue-picture-input'

  export default {
    data() {
      return {
        image: '',
      }
    },
    methods: {
      onFileChange(e) {
        const files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
      },
      createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = (e) => {
          vm.image = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      removeImage: function (e) {
        this.image = '';
      }
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
    border-bottom-color: #8e24aa;
  }
button{
  font-size: 16px;
}

</style>
