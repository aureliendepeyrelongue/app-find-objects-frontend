<template>
  <div>
    <h1>Login</h1>
    <div class="row">
      <div class="col-s12">
        <div class="row">
          <form class="col offset-s2 s8">
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  class="validate"
                  required
                />
                <label for="email">Email</label>
                <span
                  class="helper-text"
                  data-error="L'email n'est pas valide."
                ></span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  @keydown.once="firstPasswordType"
                  @click.once="firstPasswordType"
                  :class="classInvalidPasswordComputed"
                />
                <label for="password">Mot de passe</label>
                <span
                  class="helper-text"
                  data-error="Le mot de passe doit faire au moins 6 caractères."
                ></span>
              </div>
            </div>
            <div class="row">
              <div class="col s12">
                <button
                  @click.prevent="login"
                  class="btn teal wave-effect right"
                  :disabled="!formIsValidComputed"
                >
                  se connecter
                </button>
              </div>
            </div>
            <div v-if="authenticationFailed" class="card red darken-2">
              <div class="card-content white-text">
                <p>
                  Erreur : l'authentication a échouée, vérifiez vos
                  identifiants.
                </p>
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
import emailValidator from "email-validator";
export default {
  layout: "common",
  data() {
    return {
      email: "",
      password: "",
      passwordTypedOnce: false,
      authenticationFailed: false
    };
  },
  mounted() {
    M.AutoInit();
  },

  methods: {
    async login() {
      try {
        const res = await this.$axios.post("/authentication/login", {
          email: this.email,
          password: this.password
        });

        if (res.status === 200) {
          console.log(res.data);
          this.$axios.setToken(res.data.token, "Bearer");
          this.$store.commit("user/setFirstName", res.data.user.firstName);
          this.$store.commit("user/setLastName", res.data.user.lastName);
          this.$store.commit("user/setEmail", res.data.user.email);

          this.$store.commit("auth/authenticate", true);
          this.$router.push("/user/my-objects");
        }
      } catch (err) {
        // console.error(err);
        if (err.response) {
          if (err.response.status === 401) {
            this.authenticationFailed = true;
          }
        }
      }
    },
    firstPasswordType() {
      this.passwordTypedOnce = true;
    }
  },
  computed: {
    classInvalidPasswordComputed() {
      return this.passwordTypedOnce === true && this.password.length < 6
        ? "invalid"
        : "";
    },

    formIsValidComputed() {
      return emailValidator.validate(this.email) && this.password.length >= 6;
    }
  }
};
</script>
