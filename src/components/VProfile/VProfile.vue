<template>
<div class="profile" @click="disableErrors()">
  <h2 class="title-medium profile-title">Доброго дня, <span>{{name}}</span>!</h2>
  <p class="text-small-soft profile-label">Для зміни логіна заповни нижче поле</p>
  <form class="profile-login" @submit.prevent="changeLogin()">
    <input
        type="text"
        class="text-medium"
        v-model="store.inputNewLogin"
        :style="{border: store.errorNewLogin ? '1px solid red' : ''}"
    >
    <button class="text-small profile-button">Оновити</button>
  </form>
  <br>
  <form class="profile-password" @submit.prevent="changePassword()">
    <p class="text-medium-soft profile-label">Для зміни паролю заповни нижче поля</p>
    <div>
      <p class="text-super-small-soft profile-label">Введіть поточний пароль:</p>
      <input
          type="password"
          class="text-medium"
          v-model="store.inputOldPassword"
          :style="{border: store.errorOldPassword ? '1px solid red' : ''}"
      >
    </div>
    <div>
      <p class="text-super-small-soft profile-label">Введіть новий пароль:</p>
      <input
          type="password"
          class="text-medium"
          v-model="store.inputNewPassword"
          :style="{border: store.errorNewPassword ? '1px solid red' : ''}"
      >
    </div>
    <div>
      <p class="text-super-small-soft profile-label">Підтвердіть новий пароль:</p>
      <input
          type="password"
          class="text-medium"
          v-model="store.inputNewPasswordRepeat"
          :style="{border: store.errorNewPassword ? '1px solid red' : ''}"
      >
    </div>
    <button class="text-small profile-button">Оновити</button>
  </form>
</div>
</template>

<script setup lang="ts">
import {computed, reactive} from "vue";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore()

const name = computed(() => {
  if (userStore.username !== undefined){
    return userStore.username;
  }
  return "DefaultName"
})
const store = reactive({
  inputNewLogin: '',
  inputOldPassword: '',
  inputNewPassword: '',
  inputNewPasswordRepeat: '',
  errorNewLogin: false,
  errorOldPassword: false,
  errorNewPassword: false,
})

function changeLogin(){
  if (store.inputNewLogin.length > 3){
    console.log('change login event')
  } else {
    store.errorNewLogin = true
  }
}

function changePassword(){
  if (store.inputNewPassword.length >= 6 && store.inputNewPassword === store.inputNewPasswordRepeat){
    console.log('change password event')
  } else {
    store.errorNewPassword = true
  }
}


function disableErrors(){
  store.errorNewLogin = store.errorOldPassword = store.errorNewPassword = false
}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.profile{
  display: flex;
  flex-direction: column;
  padding: 10px;
  row-gap: 15px;
  border: 1px solid $COLOR_TURQUOISE;
  border-radius: 5px;
  & input{
    width: 700px;
    height: 40px;
  }
  &-title{
    color: $COLOR_GRAY;
    & span{
      font-weight: 700;
      color: $COLOR_LIGHTBLUE;
    }
  }
  &-label{
    color: $COLOR_GRAY;
  }
  &-login{
    display: flex;
    column-gap: 15px;
    height: fit-content;

  }
  &-button{
    padding: 0 27px;
    background: $COLOR_TURQUOISE;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    cursor: pointer;
    width: fit-content;
    height: 40px;
  }
  &-password{
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }
}
</style>