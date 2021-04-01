<template>
  <div>
    <h1>Mes objets</h1>
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="col s4" v-for="(item, index) in objects" :key="index">
            <object-item
              :object="item"
              @delete="deleteObject"
              :personal="true"
            ></object-item>
          </div>
        </div>
      </div>
    </div>
    <div v-if="objects.length === 0" class="row">
      <div class="col s12  ">
        <p class="empty-message">
          Oups pas encore d'objet personnels pour l'instant.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const res = await $axios.get("/objects/from-user");
    return { objects: res.data };
  },

  methods: {
    async deleteObject(objectId) {
      const res = await this.$axios.delete("/objects/" + objectId);
      this.objects = this.objects.filter(el => el._id != objectId).slice();
    }
  }
};
</script>

<style></style>
