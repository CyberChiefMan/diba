<template>
  <div class="sidebar" data-color="purple" data-image="./src/assets/img/sidebar-1.jpg">
    <div class="logo">
      <a href="http://www.creative-tim.com" class="simple-text purple lighten-1">
        Diba Poosh
      </a>
    </div>
    <div class="sidebar-wrapper deep-purple lighten-3">
      <ul class="nav">
        <li>
          <router-link to="/">
            <i class="material-icons">dashboard</i>
            <p>داشبورد</p>
          </router-link>
        </li>
        <li class="">
          <router-link to="/addcategory">
            <i class="material-icons">shopping_cart</i>
            <p>ایجاد کتگوری</p>
          </router-link>
        </li>
        <li class="">
          <router-link to="/addproduct">
            <i class="material-icons">add</i>
            <p>محصولات</p>
          </router-link>
        </li>
        <li class="">
          <router-link to="/order">
            <i class="material-icons">person_outline</i>
            <p>مدیریت کاربران</p>
          </router-link>
        </li>
        <li class="">
          <router-link to="/profile">
            <i class="material-icons">person</i>
            <p>پروفایل</p>
          </router-link>
        </li>
        <li class="">
          <router-link to="/setting">
            <i class="material-icons text-gray">settings</i>
            <p>تنظیمات</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
  p{
    font-family:IRANSans;
  }

</style>
