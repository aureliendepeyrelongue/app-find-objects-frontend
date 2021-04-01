<template>
  <div>
    <h1>Liste des objets</h1>
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="col s4" v-for="(item, index) in objects" :key="index">
            <object-item :object="item" :personal="false"></object-item>
          </div>
        </div>
      </div>
    </div>
    <div v-if="objects.length === 0" class="row">
      <div class="col s12  ">
        <p class="empty-message">Oups pas encore d'objet pour l'instant.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const res = await $axios.get("/objects");

    return { objects: res.data };
  }
};
</script>

<style></style>
