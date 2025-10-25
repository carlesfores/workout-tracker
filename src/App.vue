<script setup>
import MainNav from "@/components/main-nav.vue";
</script>

<template>
  <div class="container">
    <div class="main-header">
      <h1>Entry Point</h1>
    </div>
    <main-nav></main-nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.container {
  background-color: blanchedalmond;
  height: 100%;
}

.main-header {

}
</style>
