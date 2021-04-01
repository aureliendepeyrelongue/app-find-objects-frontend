<template>
  <ul class="sidenav sidenav-fixed">
    <li>
      <div class="user-view">
        <div class="background">
          <img src="/office.jpg" />
        </div>
        <a href="#user"><img class="circle" src="/anonymous-user.png"/></a>
        <span class="white-text name">{{ usernameComputed }}</span>
        <span class="white-text email">{{ emailComputed }}</span>
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

<script>
export default {
  computed: {
    usernameComputed() {
      return (
        this.$store.state.user.firstName + " " + this.$store.state.user.lastName
      );
    },
    emailComputed() {
      return this.$store.state.user.email;
    }
  }
};
</script>
