<template>
<div class="topic">
  <div class="topic-left">
    <img src="../../assets/icons/forum.svg" alt="forum">
    <div class="topic-left-content">
      <h3 class="subtitle-small topic-left-content-title">
        <router-link :to="`/topic?id=${props.id}`">{{props.title}}</router-link>
      </h3>
      <div class="topic-left-content-other">
        <div class="topic-left-content-other-comments">
          <span class="text-small-soft">Повідомлення:</span>
          <span class="text-small-soft">{{props.comments}}</span>
        </div>
        <div class="topic-left-content-other-tags">
          <span class="text-small-soft" v-for="(tag, index) of props.tags" :key="index">
            #{{tag}}
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="topic-right">
    <p class="text-small-soft">Останнє:</p>
    <span class="text-super-small-soft">
      <span class="topic-right-blue">{{props.createdBy}}</span>, {{calculateTime(props.createdAt)}}
    </span>
  </div>
</div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import {calculateTime} from "@/functions/functions";
import type {ITag} from "@/types/types";

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  },
  title: {
    type: [String, Number],
    required: true
  },
  body: {
    type: [String, Number],
    required: true
  },
  createdBy: {
    type: [String, Number],
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
  updatedAt: {
    type: [String, Number],
    required: true
  },
  comments: {
    type: [String, Number],
    default: 0
  },
  tags: {
    type: Array as PropType<Array<ITag>>,
    default: () => [{id: "1", name: "default tag"}]
  }
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.topic{
  width: 100%;
  border-bottom: 2px solid $COLOR_TURQUOISE;
  border-radius: 5px;
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  &-left{
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding-left: 10px;
    &-content{
      display: flex;
      flex-direction: column;
      row-gap: 3px;
      &-title{
        color: $COLOR_LIGHTBLUE;
        cursor: pointer;
      }
      &-other{
        display: flex;
        column-gap: 20px;
        &-comments{
          display: flex;
          align-items: center;
          column-gap: 3px;

        }
        &-tags{
          display: flex;
          align-items: center;
          column-gap: 5px;
          & span{
            cursor: pointer;
          }
        }
      }
    }
  }
  &-right{
    min-width: 150px;
    width: fit-content;
    height: 100%;
    border-width: 2px 2px 0 2px;
    border-style: solid;
    border-color: $COLOR_TURQUOISE;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 4px;
    padding: 0 5px;
    &-blue{
      color: $COLOR_LIGHTBLUE;
    }
  }
}
</style>