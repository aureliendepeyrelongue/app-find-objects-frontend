<template>
  <nav>
    <div class="nav-wrapper purple darken-3">
      <a href="#" class="brand-logo">Findy</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li v-if="!authenticatedComputed">
          <NuxtLink to="/auth/registration">S'inscrire</NuxtLink>
        </li>
        <li v-if="!authenticatedComputed">
          <NuxtLink to="/auth/login">Se connecter</NuxtLink>
        </li>
        <li v-if="authenticatedComputed">
          <NuxtLink to="/auth/logout">Se déconnecter</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("auth/authenticate", false);
  },

  computed: {
    authenticatedComputed() {
      return this.$store.state.auth.authenticated;
    }
  }
};
</script>
