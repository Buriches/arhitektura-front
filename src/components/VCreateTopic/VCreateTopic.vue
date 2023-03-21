<template>
<form class="create" @submit.prevent>
  <h2 class="title-large create-title">Створення теми</h2>
  <p class="text-large">Заголовок</p>
  <input type="text" class="text-large" v-model="store.title">
  <p class="text-large">Текст теми</p>
  <textarea class="text-large" v-model="store.content"></textarea>
  <p class="text-large">Напишіть теги до теми у вигляді (життя, спорт, здоров’я, відеоігри)</p>
  <div class="create-tags">
    <div
        class="create-tags-item text-super-small-soft"
        v-for="tag in store.tags"
        :key="tag.id"
        @click="tagClickHandler(tag.id)"
    >
      {{tag.name}}
    </div>
    <input type="text" class="text-large" v-model="store.findTag" @input="findTagEvent()">
  </div>
  <button type="submit" class="subtitle-small">Створити тему</button>
</form>
</template>

<script lang="ts" setup>
import type {ITag} from "@/types/types";
import {reactive} from "vue";
import {debounce} from "@/functions/functions";

interface IStore{
  tags: ITag[]
  content: string
  title: string
  findTag: string
}

const store: IStore = reactive({
  title: '',
  content: '',
  tags: [{id: "1w", name: "Життя"},
    {id: "2w", name: "Спорт"}],
  findTag: ''
})

function tagClickHandler(id:string):void{
  store.tags = store.tags.filter(item => item.id !== id)
}

const findTagEvent = debounce(() => console.log("search tag"), 1000)

</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.create{
  width: 100%;
  margin-top: 50px;
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  padding: 10px;
  row-gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $COLOR_DARKBLUE;
  & p{
    width: 100%;
  }
  & input{
    width: 100%;
    height: 35px;
    border: 2px solid $COLOR_TURQUOISE;
    border-radius: 5px;
  }
  & textarea{
    min-height: 150px;
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    border: 2px solid $COLOR_TURQUOISE;
    border-radius: 5px;
  }
  &-title{
    width: fit-content;
  }
  & button{
    width: 325px;
    height: 60px;
    border: 2px solid $COLOR_TURQUOISE;
    border-radius: 5px;
    background-color: transparent;
  }
  &-tags{
    display: flex;
    width: 100%;
    column-gap: 10px;
    align-items: center;
    &-item{
      padding: 5px 3px;
      display: flex;
      height: fit-content;
      align-items: center;
      background-color: $COLOR_TURQUOISE;
      border-radius: 3px;
      cursor: pointer;
    }
  }
}
</style>