<template>
  <div>
    <h1>Mettre à jour l'objet</h1>
    <div class="row">
      <div class="col-s12" v-if="object">
        <object-form
          v-on:message="sendObject"
          :pstate="object.state"
          :plocation="object.location.value"
          :pcity="object.location.locationAddress.city"
          :pzipcode="object.location.locationAddress.zipcode"
          :pstreet="object.location.locationAddress.street"
          :pcategory="object.category.value"
          :pdescription="object.category.description"
          :pwhen="object.when"
          :update="true"
        />
      </div>
    </div>
    <div v-if="networkError" class="card red darken-2">
      <div class="card-content white-text">
        <p>
          Erreur : nous avons rencontré un problème lors de l'ajout de l'objet.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      networkError: false,
      object: null
    };
  },
  async beforeCreate() {
    const res = await this.$axios.get("/objects/" + this.$route.params.id);
    console.log(res);
    this.object = res.data;
  },
  methods: {
    async sendObject(object) {
      try {
        const res = await this.$axios.put(
          "/objects/" + this.$route.params.id,
          object
        );
        if (res.status === 200) {
          console.log(res.data);
          this.$router.push("/user/my-objects");
        }
      } catch (err) {
        this.networkError = true;
      }
    }
  }
};
</script>

<style></style>
