<template>
<div class="tags">
  <input type="text" class="tags-filter headline-small" placeholder="Пошук тегів" @input="searchHandler()">
  <div class="tags-item" v-for="tag in store.arrTags" :key="tag.id">
    <input type="checkbox" :id="tag.id" @input="checkboxHandler(tag.id)">
    <label :for="tag.id" class="tags-item-checkbox" :style="{backgroundColor: store.activeTags.find(item => item.id === tag.id) ? '#A5CAE4' : ''}"></label>
    <label :for="tag.id" class="headline-small tags-item-text">{{tag.name}}</label>
  </div>
  <div class="tags-submit text-large" v-if="store.activeTags.length > 0" @click="enterHandler()">Знайти</div>
</div>
</template>

<script lang="ts" setup>
import {onMounted, reactive} from "vue";
import {debounce} from "@/functions/functions";
import type {ITag} from "@/types/types";

interface IStore{
  arrTags: ITag[],
  activeTags: ITag[]
}

const store: IStore = reactive({
  arrTags: [],
  activeTags: []
})

onMounted(() => {
  store.arrTags = [
      {id: "1w", name: "Життя"},
      {id: "2w", name: "Спорт"},
      {id: "3w", name: "Здоров’я"},
      {id: "4w", name: "Відеоігри"},
      {id: "5w", name: "Комп’ютери"},
      {id: "6w", name: "Відпочинок"},
      {id: "7w", name: "Їжа"},
      {id: "8w", name: "Програмування"},
      {id: "9w", name: "Фото"},
      {id: "10w", name: "Подорожі"},
      {id: "11w", name: "Музика"},
      {id: "12w", name: "Книги"},
      {id: "13w", name: "Нумізматика"},
  ]
})

function checkboxHandler(id: string){
  const clickedTag: any = store.arrTags.find(item => item.id === id)
  const clickedTagInActive = store.activeTags.find(item => item.id === id)
  if (store.activeTags.length > 0 && clickedTagInActive){
    const find = store.activeTags.indexOf(clickedTagInActive)
    if (find !== -1) {
      store.activeTags.splice(find, 1)
      return
    }
  }

  store.activeTags.push(clickedTag)
}


function enterHandler(){
  console.log(store.activeTags.map(item => item.name))

}
const searchHandler = debounce(() => console.log("search"), 1000)
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.tags{
  border: 1px solid $COLOR_TURQUOISE;
  border-radius: 5px;
  padding: 10px;
  row-gap: 15px;
  display: flex;
  flex-direction: column;
  &-filter{
    border: 1px solid $COLOR_TURQUOISE;
    border-radius: 5px;
    width: 100%;
    text-align: center;
    &::placeholder{
      color: rgba(0, 0, 0, 0.5);
    }
  }
  &-item{
    display: flex;
    column-gap: 10px;
    width: 100%;
    align-items: center;
    & input{
      display: none;
    }
    &-checkbox{
      cursor: pointer;
      display: block;
      width: 20px;
      height: 20px;
      border: 1px solid $COLOR_TURQUOISE;
      border-radius: 5px;
    }
    &-text{
      color: $COLOR_LIGHTBLUE;
      cursor: pointer;
    }
  }
  &-submit{
    border: 1px solid $COLOR_TURQUOISE;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
    text-align: center;
    padding: 5px 0;
    color: $COLOR_BLACK;
  }
}
</style>