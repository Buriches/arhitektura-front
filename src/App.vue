<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import VHeader from "@/components/VHeader/VHeader.vue";
import VFooter from "@/components/VFooter/VFooter.vue";
</script>

<!--<RouterLink to="/">Home</RouterLink>-->
<!--<RouterLink to="/about">About</RouterLink>-->

<template>
  <div class="app-topside">
    <VHeader/>
    <RouterView />
  </div>


  <VFooter/>
</template>

<style scoped lang="scss">
.app-topside{
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
