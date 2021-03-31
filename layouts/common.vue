<template>
  <div>
    <NavBar />
    <div class="container" id="main-content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* @import "materialize-css/dist/css/materialize.css"; */
#main-content {
  margin-top: 30px;
  background-color: white;
}
#right-container {
  margin-left: 300px;
}

body {
  background-color: #eee;
}
nav .brand-logo {
  margin-left: 20px;
}
.sidenav .collapsible > li {
  width: 100%;
}

h1 {
  font-size: 1.9rem;
  padding: 20px;
}
</style>
