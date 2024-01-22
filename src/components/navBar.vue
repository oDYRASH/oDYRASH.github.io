<script setup>

  import { ref } from 'vue';
  import { RouterLink } from 'vue-router'
  import navSpan from './navSpan.vue'

  let userDiscord = localStorage.getItem("discordUser")
  var userName = false
  if (userDiscord){
    userName = ref(JSON.parse(localStorage.getItem("discordUser")).global_name)
  }
  
    

</script>

<template>

<nav>

<div id="navMenu" class="nm">

  <RouterLink to="/" class="routerLink">
    <navSpan :spanName="'HOME'" :iconName="'home'"/></RouterLink>
  
  <!-- <RouterLink to="/" class="routerLink">
    <navSpan :spanName="'SEARCH'" :iconName="'search'"/></RouterLink> -->

  <RouterLink to="/makeapost" class="routerLink">
    <navSpan :spanName="'POST'" :iconName="'add_circle'"/></RouterLink>
</div>

<div id="navSetting" class="nm">

  <RouterLink :to="'/profile'" class="routerLink">
    <navSpan :id="'loginSpanName'" :spanName="userName?userName:'LOGIN'" :iconName="'account_circle'"/></RouterLink>

   <!-- <RouterLink to="/" class="routerLink">
    <navSpan :spanName="'SETTINGS'" :iconName="'settings'"/></RouterLink> -->

</div>

</nav>

</template>