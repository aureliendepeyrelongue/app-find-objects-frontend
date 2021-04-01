<template>
  <div>
    <div class="card">
      <div class="card-image">
        <img src="http://localhost:5000/images/object-various.jpg" />
      </div>
      <div class="card-content">
        <span class="card-title"
          >Objet : {{ object.category.value }} {{ object.state }}</span
        >
        <p>Description : {{ object.category.description }}</p>
        <p>Lieux : {{ locationComputed }}</p>
        <p>Auteur : {{ object.user.firstName }} {{ object.user.lastName }}</p>
      </div>
      <div class="card-action">
        <a href="#">Voir en détails</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    object: Object
  },
  data() {
    return {};
  },

  computed: {
    locationComputed() {
      return `${this.object.location.value}, ${this.object.location.locationAddress.street}, ${this.object.location.locationAddress.city}, ${this.object.location.locationAddress.zipcode}`;
    }
  }
};
</script>

<style scoped></style>
