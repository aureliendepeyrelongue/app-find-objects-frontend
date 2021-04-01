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
          <button @click="disconnect" class="btn purple darken-1 margin-right">
            Se déconnecter
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    authenticatedComputed() {
      return this.$store.state.auth.authenticated;
    }
  },
  methods: {
    disconnect() {
      this.$axios.setToken(false, "Bearer");
      this.$store.commit("auth/authenticate", false);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
nav button.btn.margin-right {
  margin-right: 15px;
}
</style>
