<template>
  <ul class="sidenav sidenav-fixed">
    <li>
      <div class="user-view">
        <div class="background">
          <img src="" />
        </div>
        <a href="#user"><img class="circle" src=""/></a>
        <a href="#name"><span class="white-text name">John Doe</span></a>
        <a href="#email"
          ><span class="white-text email">jdandturk@gmail.com</span></a
        >
      </div>
    </li>

    <li>
      <NuxtLink to="/user/report-object"
        ><i class="material-icons">add</i>Signaler un objet</NuxtLink
      >
    </li>
    <li><div class="divider"></div></li>
    <li>
      <NuxtLink to="/user/objects-list">
        <i class="material-icons">storage</i>Voire tous les objets</NuxtLink
      >
    </li>
    <li>
      <NuxtLink to="/user/my-objects">
        <i class="material-icons">speaker_notes</i>Mes objets signalés</NuxtLink
      >
    </li>
    <li>
      <NuxtLink to="/user/see-matching"
        ><i class="material-icons">find_replace</i>Consluter le
        matching</NuxtLink
      >
    </li>
  </ul>
</template>
