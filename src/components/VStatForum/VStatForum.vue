<template>
  <div class="stat">
    <h4 class="stat-title text-large-soft">Статистика Форуму</h4>
    <hr class="stat-divider">
    <div class="stat-row">
      <div class="stat-row-content text-small-soft">Теми</div>
      <div class="stat-row-content text-small-soft">{{props.blogs}}</div>
    </div>
    <div class="stat-row">
      <div class="stat-row-content text-small-soft">Повідомлення</div>
      <div class="stat-row-content text-small-soft">{{props.comments}}</div>
    </div>
    <div class="stat-row">
      <div class="stat-row-content text-small-soft">Користувачі</div>
      <div class="stat-row-content text-small-soft">{{props.users}}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  blogs: {
    type: [String, Number],
    default: 0
  },
  comments: {
    type: [String, Number],
    default: 0
  },
  users: {
    type: [String, Number],
    default: 0
  },
})
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.stat{
  padding: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  border: 1px solid $COLOR_TURQUOISE;
  border-radius: 5px;
  width: 100%;
  &-title{
    color: $COLOR_DARKBLUE;
  }
  &-divider{
    border: 0;
    height: 1px;
    background-color: $COLOR_TURQUOISE;
  }
  &-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-content{
      color: $COLOR_LIGHTBLUE;
    }
  }
}
</style>