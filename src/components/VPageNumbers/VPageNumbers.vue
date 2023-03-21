<template>
  <div class="numbers">
      <RouterLink
          :to="`${route.path}?page=${page}${route.query.id ? '&id='+route.query.id : ''}`"
          v-for="page in listOfPages()"
          :key="page"
      >
        <button
            class="numbers-item text-small-soft"
            :style="{transform: +page === +store.page ? 'scale(1.2)' : '', borderColor: +page === +store.page ? '#032A46FF' : ''}"
        >
        {{page}}
        </button>
      </RouterLink>
  </div>
</template>

<script setup lang="ts">

import { onMounted, reactive, watch } from "vue";
import { useRoute } from 'vue-router';

const route = useRoute()

onMounted(() => {
  console.log(route.path)
  console.log(route.query.id)
})
const store = reactive({
  pages: 40,
  page: 1
})

onMounted(() => {
  setCurrentPage()
})

watch(() => route.query.page, setCurrentPage)

function setCurrentPage(){
  let page:any = route.query.page
  if (!page) page = 1
  store.page = page
}

function listOfPages():number[]{
  const arr = []
  const currentPage = +store.page
  if (currentPage > store.pages) return []
  arr.push(1)
  for (let i = currentPage - 4; i < currentPage ; i++){
    if (i < 2) continue
    arr.push(i)
  }
  // eslint-disable-next-line for-direction
  for (let i = currentPage; i <= currentPage + 4 ; i++){
    if (i === 1) continue
    if (i > store.pages - 1) break
    arr.push(i)
  }
  arr.push(store.pages)
  return arr
}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.numbers{
  display: flex;
  column-gap: 5px;
  &-item{
    background-color: transparent;
    border: 3px solid $COLOR_TURQUOISE;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: .3s;
    &:hover{
      transform: scale(1.05);
    }
  }
}
</style>