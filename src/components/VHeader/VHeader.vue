<template>
  <header class="header">
    <div class="header-topside">
      <div class="header-topside-content wrapper">
        <h1 class="title-large">
          <router-link to="/">Life Forum</router-link>
        </h1>
        <div class="header-topside-plate">
          <VPlate @openLogin="VPlateHandler"/>
        </div>
      </div>
    </div>

    <div class="header-underside">
      <div class="wrapper header-underside-content">
        <RouterLink to="/"><i class="text-small">Правила</i></RouterLink>
        <RouterLink to="/"><i class="text-small">Форум</i></RouterLink>
      </div>

    </div>
  </header>
  <VLogin v-model:active="store.isActiveLoginWindow" :have-account="store.haveAccount" v-if="store.isActiveLoginWindow"/>
</template>

<script setup>
import VPlate from "@/components/VPlate/VPlate.vue";
import VLogin from "@/components/VLogin/VLogin.vue";
import {reactive} from "vue";

const store = reactive({
  isActiveLoginWindow: false,
  haveAccount: false
})

function VPlateHandler(haveAccount){
  store.haveAccount = haveAccount
  store.isActiveLoginWindow = true
}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
  .header{
    width: 100%;
    display: grid;
    flex-direction: column;
    &-topside{
      display: flex;
      width: 100%;
      background-color: $COLOR_BLUE;
      height: 100px;
      align-items: center;
      position: relative;
      &-content{
        height: inherit;
        display: flex;
        align-items: center;
        & h1{
          color: $COLOR_WHITE;
          font-style: italic;
        }
      }
      &-plate{
        width: fit-content;
        height: fit-content;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    &-underside{
      height: 40px;
      width: 100%;
      background-color: $COLOR_DIRTY_BLUE;
      display: flex;
      align-items: center;
      border-radius: 0 0 5px 5px;
      &-content{
        height: inherit;
        align-items: center;
        display: flex;
        column-gap: 25px;
        & i{
          color: $COLOR_WHITE;
        }
      }
    }
  }
</style>