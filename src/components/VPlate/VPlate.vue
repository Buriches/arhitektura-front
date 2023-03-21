<template>
<div class="plate">
  <div class="plate-logged" v-if="props.isLogged">

    <RouterLink to="/profile">
      <span>{{props.name}}</span>
    </RouterLink>
    <img src="../../assets/icons/logout.svg" alt="logout" @click.stop="logoutClickHandler">
  </div>
  <div class="plate-guest" v-else><span @click.stop="loginClickHandler(true)">Увійти</span> або <span @click.stop="loginClickHandler(false)">зареєструватися</span></div>
</div>
</template>

<script lang="ts" setup>

const emit = defineEmits(["openLogin"])

const props = defineProps({
  isLogged: {
    type: [Boolean],
    default: true
  },
  name: {
    type: [String, Number],
    default: "DefaultUser",
    optional: true
  }
})

function logoutClickHandler(){
  console.log('logout click')
}

function loginClickHandler(haveAccount: boolean): void{
  emit("openLogin", haveAccount)
}

</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.plate{
  min-width: 160px;
  width: fit-content;
  padding: 0 10px;
  height: 20px;
  background: $COLOR_DARKBLUE;
  box-shadow: 0 2px 5px $COLOR_DARKBLUE;
  border-radius: 0 0 10px 10px;
  &-guest{
    color: $COLOR_WHITE;
    font-weight: 400;
    font-size: 11px;
    line-height: 20px;
    height: 100%;

    & span{
      transition-duration: .2s;
      &:hover{
        color: $COLOR_GRAY;
        cursor: pointer;
      }
    }
  }
  &-logged{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    & img{
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
    & span{
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      font-style: italic;
      color: $COLOR_WHITE;
    }
  }
}
</style>