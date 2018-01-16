<template>
  <nav class="navbar navbar-transparent navbar-absolute  navbar-right">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Welcome</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="material-icons">notifications</i>
              <span class="notification">1</span>
              <p class="hidden-lg hidden-md">Notifications</p>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Welcome to hipo tour</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#"><i class="material-icons">person</i>View Profile</a>
              </li>
              <li>
                <a href="#"><i class="material-icons">exit_to_app</i>Exit</a>
              </li>
            </ul>
          </li>
        </ul>
        <hr>

      </div>
    </div>
  </nav>
</template>
