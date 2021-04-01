<template>
  <div>
    <h1>Signaler un objet</h1>
    <div class="row">
      <div class="col-s12">
        <object-form v-on:message="sendObject" />
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
      networkError: false
    };
  },
  methods: {
    async sendObject(object) {
      try {
        const res = await this.$axios.post("/objects", object);
        console.log(object);
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
