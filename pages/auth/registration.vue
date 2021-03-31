<template>
  <div>
    <h1>Inscription</h1>
    <div class="row">
      <div class="col-s12">
        <div class="row">
          <form class="col offset-s2 s8">
            <div class="row">
              <div class="input-field col s6">
                <input
                  id="first_name"
                  v-model="firstName"
                  type="text"
                  class="validate"
                  required
                />
                <label for="first_name">Prénom</label>
                <span
                  class="helper-text"
                  data-error="Ce champs ne doit pas être vide."
                ></span>
              </div>
              <div class="input-field col s6">
                <input
                  id="last_name"
                  v-model="lastName"
                  type="text"
                  class="validate"
                  required
                />
                <label for="last_name">Nom de famille</label>
                <span
                  class="helper-text"
                  data-error="Ce champs ne doit pas être vide."
                ></span>
              </div>
            </div>

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
              <div class="input-field col s6">
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
              <div class="input-field col s6">
                <input
                  id="confirm_password"
                  v-model="confirmPassword"
                  type="password"
                  @keydown.once="firstConfirmPasswordType"
                  @click.once="firstConfirmPasswordType"
                  :class="classInvalidConfirmPasswordComputed"
                />
                <label for="confirm_password">Confirmer le mot de passe</label>
                <span
                  class="helper-text"
                  data-error="Les mots de passe sont vides ou ne concordent pas."
                ></span>
              </div>
            </div>
            <div class="row">
              <div class="col s12">
                <button
                  @click.prevent="register"
                  class="btn teal wave-effect right"
                  :disabled="!formIsValidComputed"
                >
                  s'inscrire
                </button>
              </div>
            </div>
            <div v-if="emailAlreadyExists" class="card red darken-2">
              <div class="card-content white-text">
                <p>
                  Erreur : un compte est déjà associé à ce mail.
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      passwordTypedOnce: false,
      confirmPasswordTypedOnce: false,
      emailAlreadyExists: false
    };
  },
  mounted() {
    M.AutoInit();
  },

  methods: {
    async register() {
      try {
        const res = await this.$axios.post("/authentication/registration", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        });

        if (res.status === 200) {
          this.$router.push("/");
        }
      } catch (err) {
        // console.error(err);
        if (err.response) {
          if (err.response.data.error.code === 11000) {
            this.emailAlreadyExists = true;
          }
        }
      }
    },
    firstConfirmPasswordType() {
      this.confirmPasswordTypedOnce = true;
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
    classInvalidConfirmPasswordComputed() {
      return (this.confirmPasswordTypedOnce === true &&
        this.password !== this.confirmPassword) ||
        (this.confirmPasswordTypedOnce === true && this.confirmPassword === "")
        ? "invalid"
        : "";
    },
    formIsValidComputed() {
      return (
        this.firstName !== "" &&
        this.lastName !== "" &&
        emailValidator.validate(this.email) &&
        this.password.length >= 6 &&
        this.password === this.confirmPassword
      );
    }
  }
};
</script>
