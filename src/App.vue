<script setup>
import MainHeader from "@/components/main-header.vue";
import MainNav from "@/components/main-nav.vue";
</script>

<template>
  <div class="container">
    <main-header></main-header>
    <main-nav></main-nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  padding: 8px 16px;
  position: relative;

  .base-modal {
    position: absolute;
    width: 84%;
    height: 84%;
    background-color: pink;
    z-index: 10;
  }
}
</style>
