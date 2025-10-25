<script setup>
</script>

<template>
  <div class="container">
    <div class="main-header">
      <h1>Entry Point</h1>
      <nav>
        <router-link to="/">home</router-link>
        <router-link to="/workouts-list">workouts-list</router-link>
        <router-link to="/workout">workout</router-link>
        <router-link to="/admin">admin</router-link>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>

</style>
