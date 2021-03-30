<template>
  <div>
    <ul class="sidenav sidenav-fixed">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="images/office.jpg" />
          </div>
          <a href="#user"><img class="circle" src="images/yuna.jpg"/></a>
          <a href="#name"><span class="white-text name">John Doe</span></a>
          <a href="#email"
            ><span class="white-text email">jdandturk@gmail.com</span></a
          >
        </div>
      </li>
      <li>
        <a href="#!"><i class="material-icons">cloud</i>Premier lien</a>
      </li>
      <li><a href="#!">Second Link</a></li>
      <li><div class="divider"></div></li>
      <li><a class="subheader">Subheader</a></li>
      <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
      <li><a class="waves-effect" href="#!">Thhhhhhird Link With Waves</a></li>
    </ul>
    <div id="right-container">
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Findy</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="badges.html">Se déconnecter</a></li>
          </ul>
        </div>
      </nav>
      <div class="container" id="main-content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style>
/* @import "materialize-css/dist/css/materialize.css"; */
#main-content {
  margin-top: 30px;
  background-color: white;
}
#right-container {
  margin-left: 300px;
}

body {
  background-color: #eee;
}
nav .brand-logo {
  margin-left: 20px;
}
.sidenav .collapsible > li {
  width: 100%;
}

h1 {
  font-size: 1.9rem;
}
</style>
