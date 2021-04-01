<template>
  <div>
    <div class="card">
      <div class="card-image">
        <img src="/object-various.jpg" />
      </div>
      <div class="card-content">
        <span class="card-title">Objet : {{ object.category.value }}</span>
        <p>Statut : {{ object.state }}</p>
        <p>Description : {{ object.category.description }}</p>
        <p>Lieux : {{ locationComputed }}</p>
        <p v-if="!personal">
          Auteur :

          {{ object.user.firstName }} {{ object.user.lastName }}
        </p>
        <p v-else>
          Auteur : Moi
        </p>
      </div>
      <div v-if="personal" class="card-action">
        <a class="btn teal small" @click="updateRoute">Modifier</a>
        <a class="btn red small" @click="sendDelete" href="#">Supprimer</a>
      </div>
      <div v-else class="card-action">
        <a href="#">Voir en détails</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    object: Object,
    personal: Boolean
  },
  data() {
    return {};
  },

  computed: {
    locationComputed() {
      return `${this.object.location.value}, ${this.object.location.locationAddress.street}, ${this.object.location.locationAddress.city}, ${this.object.location.locationAddress.zipcode}`;
    }
  },
  methods: {
    updateRoute() {
      this.$router.push("/user/update-object/" + this.object._id);
    },
    sendDelete() {
      this.$emit("delete", this.object._id);
    }
  }
};
</script>

<style scoped></style>
