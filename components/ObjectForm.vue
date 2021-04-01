<template>
  <div>
    <div class="row">
      <div class="col-s12">
        <div class="row">
          <form class="col offset-s2 s8">
            <div class="row">
              <div class="input-field col s12">
                <select v-model="state">
                  <option value="" disabled selected
                    >Choisissez une option</option
                  >
                  <option value="found">Objet trouvé</option>
                  <option value="lost">Objet perdu</option>
                </select>
                <label>État de l'objet</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <select v-model="location">
                  <option value="" disabled selected
                    >Choisissez une option</option
                  >
                  <option value="address">Adresse</option>
                  <option value="transport">Transport</option>
                  <option value="airport">Aéroport</option>
                  <option value="police">Mairie/Police</option>
                </select>
                <label>Localisation de l'objet</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="city"
                  v-model="city"
                  type="text"
                  class="validate"
                  required
                />
                <label for="city">Ville</label>
                <span
                  class="helper-text"
                  data-error="Ce champs ne doit pas être vide."
                ></span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="zipcode"
                  v-model="zipcode"
                  type="text"
                  class="validate"
                  required
                />
                <label for="zipcode">Code postal</label>
                <span
                  class="helper-text"
                  data-error="Ce champs ne doit pas être vide."
                ></span>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input
                  id="street"
                  v-model="street"
                  type="text"
                  class="validate"
                  required
                />
                <label for="street">Rue</label>
                <span
                  class="helper-text"
                  data-error="Ce champs ne doit pas être vide."
                ></span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <select v-model="category">
                  <option value="" disabled selected
                    >Choisissez une option</option
                  >
                  <option value="keys">Clés</option
                  >s
                  <option value="phone">Téléphone</option>
                  <option value="book">Livre</option>
                  <option value="watch">Montre</option>
                </select>
                <label>Catégorie</label>

                <span
                  class="helper-text"
                  data-error="L'email n'est pas valide."
                ></span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="description"
                  v-model="description"
                  type="text"
                  class="validate"
                  required
                />
                <label for="description">Description</label>
                <span
                  class="helper-text"
                  data-error="Ce champs ne doit pas être vide."
                ></span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="date"
                  v-model="when"
                  type="date"
                  class="validate"
                  required
                />
                <label for="date">Quand ?</label>
                <span
                  class="helper-text"
                  data-error="Ce champs ne doit pas être vide."
                ></span>
              </div>
            </div>
            <div class="row">
              <div class="col s12">
                <button
                  @click.prevent="sendObject"
                  class="btn teal wave-effect right"
                  :disabled="!formIsValidComputed"
                >
                  {{ update ? "mettre à jour" : "signaler l'objet" }}
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
  props: {
    pstate: String,
    plocation: String,
    pcity: String,
    pzipcode: String,
    pstreet: String,
    pcategory: String,
    pdescription: String,
    pwhen: String,
    update: Boolean
  },
  mounted() {
    M.AutoInit();
    M.updateTextFields();
  },
  data() {
    return {
      state: this.pstate || "",
      location: this.plocation || "",
      city: this.pcity || "",
      zipcode: this.pzipcode || "",
      street: this.pstreet || "",
      category: this.pcategory || "",
      description: this.pdescription || "",
      when: this.pwhen || null
    };
  },
  methods: {
    sendObject() {
      this.$emit("message", {
        state: this.state,
        location: {
          value: this.location,
          locationAddress: {
            city: this.city,
            zipcode: this.zipcode,
            street: this.street
          }
        },
        category: {
          value: this.category,
          description: this.description
        },
        when: this.when
      });
    }
  },
  computed: {
    formIsValidComputed() {
      return (
        this.state &&
        this.location &&
        this.city &&
        this.zipcode &&
        this.street &&
        this.category &&
        this.description &&
        this.when
      );
    }
  }
};
</script>

<style scoped></style>
