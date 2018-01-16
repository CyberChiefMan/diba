<template>
  <div>

    <div id="wrapper">

      <!-- Navigation -->
      <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html">SB Admin v2.0</a>
        </div>
        <!-- /.navbar-header -->
        <!--<div class="sidebar-wrapper deep-purple lighten-3">-->
        <ul class="nav navbar-top-links navbar-right ui-sider-vertical ">
          <li>
            <router-link to="/">
              <i class="">dashboard</i>
              <p>داشبورد</p>
            </router-link>
          </li>
          <li class="">
            <router-link to="/addcategory">
              <i class="">shopping_cart</i>
              <p>ایجاد کتگوری</p>
            </router-link>
          </li>
          <li class="">
            <router-link to="/addproduct">
              <i class="">add</i>
              <p>محصولات</p>
            </router-link>
          </li>
          <li class="">
            <router-link to="/order">
              <i class="">person_outline</i>
              <p>مدیریت کاربران</p>
            </router-link>
          </li>
          <li class="">
            <router-link to="/profile">
              <i class="">person</i>
              <p>پروفایل</p>
            </router-link>
          </li>
          <li class="">
            <router-link to="/setting">
              <i class=" text-gray">settings</i>
              <p>تنظیمات</p>
            </router-link>
          </li>
        </ul>
        <!--</div>-->
      </nav>
    </div>
  </div>

</template>

<style>
  p{
    font-family:IRANSans;
  }

</style>
