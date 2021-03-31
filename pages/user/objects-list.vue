<template>
  <div>
    <h1>Liste des objets</h1>
    <div class="row">
      <div class="col-s12">
        <div class="row">
          <div class="col s4" v-for="(item, index) in objects" :key="index">
            <object-item :object="item"></object-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const res = await $axios.get("/objects");
    console.log(res.data);
    return { objects: res.data };
  }
};
</script>

<style></style>
