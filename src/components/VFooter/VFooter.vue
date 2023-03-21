<template>
  <footer class="footer">
    <div class="wrapper footer-content">
      <RouterLink to="/"><i class="text-small">Правила</i></RouterLink>
      <RouterLink to="/"><i class="text-small">Форум</i></RouterLink>
    </div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.footer{
  background-color: $COLOR_DIRTY_BLUE;
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 40px;
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
</style>