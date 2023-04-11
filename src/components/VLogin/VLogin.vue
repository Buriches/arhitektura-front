<template>
<div class="login" @click="closeClickHandler()">
  <div class="login-content" @click.stop="disableErrors()">
    <h2 class="title-medium login-content-title">{{store.haveAccount ? "Увійти" : "Зареєструватися"}}</h2>
    <input
        type="text"
        v-model="store.inputLogin"
        class="subtitle-small"
        placeholder="Логін"
        v-if="!store.haveAccount"
        :style="{border: store.errorLogin ? '1px solid red' : ''}"
    >
    <input
        type="email"
        v-model="store.inputEmail"
        class="subtitle-small"
        placeholder="Пошта"
        :style="{border: store.errorEmail ? '1px solid red' : ''}"
    >
    <input
        type="password"
        v-model="store.inputPassword"
        class="subtitle-small"
        placeholder="Пароль"
        :style="{border: store.errorPassword ? '1px solid red' : ''}"
    >
    <input
        type="password"
        v-model="store.inputPasswordRepeat"
        class="subtitle-small"
        placeholder="Підтвердіть пароль"
        v-if="!store.haveAccount"
        :style="{border: store.errorPassword ? '1px solid red' : ''}"
    >

    <span @click="store.haveAccount = !store.haveAccount" class="login-content-change text-medium">{{store.haveAccount ? "Зареєструватися": "Увійти"}}</span>
    <button
        class="headline-medium login-content-submit"
        @click.stop="submitEvent()"
    >
      {{store.haveAccount ? "Увійти" : "Зареєструватися"}}
    </button>
  </div>
</div>

</template>

<script lang="ts" setup>
import { onMounted, reactive, computed } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore()

const emit = defineEmits(['update:active'])

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  },
  haveAccount: {
    type: Boolean,
    default: false
  }
});

onMounted(() => {
  store.haveAccount = props.haveAccount
})

const store = reactive({
  haveAccount: false,
  inputLogin: '',
  inputEmail: '',
  inputPassword: '',
  inputPasswordRepeat: '',
  errorPassword: false,
  errorLogin: false,
  errorEmail: false
})

function disableErrors(){
  store.errorPassword = store.errorLogin = store.errorEmail = false
}

async function submitEvent(){
  if (store.inputLogin.length < 3){
    store.errorLogin = true
  }
  if (store.inputEmail.length < 3 && !store.haveAccount){
    store.errorEmail = true
  }
  if ((store.inputPassword !== store.inputPasswordRepeat && !store.haveAccount) || store.inputPassword.length <= 6){
    store.errorPassword = true
    return
  }
  if (store.haveAccount){
    console.log(`${store.inputEmail}, ${store.inputPassword} `)
    const requestBody = {
      email: store.inputEmail,
      password: store.inputPassword
    }
    try {
      const response = await fetch(`${apiUrl.value}/user/login`, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const token = await response.json();

      userStore.setToken(token.token);
      userStore.setUsername(token.user.login);
      closeClickHandler();
    }catch (e){
      alert('Something went wrong');
    }

  } else {
    console.log(`${store.inputLogin}, ${store.inputEmail}, ${store.inputPassword}, ${store.inputPasswordRepeat} `)
    const requestBody = {
      login: store.inputLogin,
      email: store.inputEmail,
      password: store.inputPassword
    }
    try {
      const response = await fetch(`http://localhost:5000/user/register`, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const token = await response.json()

      userStore.setToken(token.token);
      userStore.setUsername(token.user.login);
      closeClickHandler();
    }
    catch (e){
      alert('Something went wrong')
    }
  }
}

function closeClickHandler():void{
  emit('update:active', !props.active)
}

const apiUrl = computed<string>(() => import.meta.env.VITE_APP_API_URL)

</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
  .login{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:rgba(0, 0, 0, 0.5);
    z-index: 1;
    &-content{
      padding: 10px;
      gap: 15px;
      display: flex;
      flex-direction: column;
      border: 1px solid #A5CAE4;
      border-radius: 5px;
      background-color: $COLOR_WHITE;
      max-width: 600px;
      align-items: center;
      &-submit{
        color: $COLOR_BLACK;
        padding: 5px 25px;
        background-color: transparent;
        border: 1px solid $COLOR_TURQUOISE;
        border-radius: 5px;
        width: fit-content;
        cursor: pointer;
      }
      & input{
        background: #D9D9D9;
        border-radius: 5px;
        width: 100%;
        border: 1px solid transparent;
        padding: 1px 10px;
        text-align: center;
        &::placeholder{
          color: rgba(0, 0, 0, 0.5);
        }
      }
      &-title{
        color: $COLOR_LIGHTBLUE;
        text-align: center;
      }
      &-change{
        color: $COLOR_LIGHTBLUE;
        cursor: pointer;
        width: fit-content;
        &:hover{
          color: $COLOR_BLUE;
        }
      }
    }
  }
</style>