<script setup>
</script>

<template>
  <nav class="main-nav">
    <router-link to="/">home</router-link>
    <router-link to="/workouts-list">workouts-list</router-link>
    <router-link to="/workout">workout</router-link>
    <router-link to="/admin">admin</router-link>
  </nav>
</template>

<style lang="scss">
.main-nav {
  display: flex;
  justify-content: space-between;
}
</style>
