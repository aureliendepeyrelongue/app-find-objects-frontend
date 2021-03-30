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
        <NuxtLink to="/"
          ><i class="material-icons">add</i>Signaler un objet</NuxtLink
        >
      </li>
      <li><div class="divider"></div></li>
      <li>
        <NuxtLink to="/">
          <i class="material-icons">storage</i>Voire tous les objets</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/">
          <i class="material-icons">speaker_notes</i>Mes objets
          signalés</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/"
          ><i class="material-icons">find_replace</i>Consluter le
          matching</NuxtLink
        >
      </li>
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
