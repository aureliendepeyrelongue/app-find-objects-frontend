<template>
  <div>
    <h1>Inscription</h1>
    <div class="row">
      <div class="col-s12">
        <div class="row">
          <form class="col offset-s2 s8">
            <div class="row">
              <div class="input-field col s6">
                <input id="first_name" type="text" class="validate" />
                <label for="first_name">Prénom</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate" />
                <label for="last_name">Nom de famille</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input id="email" type="email" class="validate" />
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input id="password" type="password" class="validate" />
                <label for="password">Mot de passe</label>
              </div>
              <div class="input-field col s6">
                <input id="confirm_password" type="password" class="validate" />
                <label for="confirm_password">Confirmer le mot de passe</label>
              </div>
            </div>
            <div class="row">
              <div class="col s12">
                <button class="btn teal wave-effect right">
                  s'inscrire
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  mounted() {
    M.AutoInit();
  }
};
</script>

<style></style>
