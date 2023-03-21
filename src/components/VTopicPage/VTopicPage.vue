<template>
<div class="topic-page" @click.stop="disableErrors()">
  <div class="topic-page-topside">
    <h2 class="title-medium topic-page-title">{{props.title}}</h2>
    <div class="topic-page-tags">
      <span class="text-small-soft topic-page-tags-item" v-for="tag in props.tags" :key="tag.id">{{tag.name}}</span>
    </div>
    <div class="topic-page-item">
      <div class="topic-page-item-left">
        <span class="text-large topic-page-item-left-name">{{props.authorName}}</span>
        <span class="text-small-soft topic-page-item-left-role">{{props.authorRole}}</span>

      </div>
      <div class="topic-page-item-right">
        <p class="text-large topic-page-item-right-body" v-html="props.body"></p>
        <p class="text-small topic-page-item-right-time">{{calculateTime(props.createdAt)}}</p>
      </div>
    </div>
  </div>

  <div class="topic-page-comments">
    <div class="topic-page-item" v-for="comment in props.comments" :key="comment.id">
      <div class="topic-page-item-left">
        <span class="text-large topic-page-item-left-name">{{comment.userName}}</span>
        <span class="text-small-soft topic-page-item-left-role">{{comment.userRole}}</span>
        <button class="topic-page-comments-ban text-large" v-if="props.isAdmin">{{comment.isBanned ? "Розбанити" : "Забанити"}}</button>
      </div>
      <div class="topic-page-item-right">
        <p class="text-large topic-page-item-right-body" v-html="comment.body"></p>
        <p class="text-small topic-page-item-right-time">{{calculateTime(comment.createdAt)}}</p>
      </div>
    </div>
  </div>

  <div v-if="isLogged" class="topic-page-new-comment">
    <textarea
        class="topic-page-new-comment-area text-large"
        v-model="store.inputNewComment"
        placeholder="Введіть коментар"
        :style="{border: store.errorNewComment ? '1px solid red' : ''}"
    />
    <button class="topic-page-new-comment-submit text-small" @click.stop="newComment">Відправити</button>
  </div>
  <p v-else class="topic-page-not-logged text-small">Для відповіді на  цю тему будь ласка увійдіть або створіть новий акаунт</p>

</div>
</template>

<script setup lang="ts">
import type {ITag} from "@/types/types";
import {calculateTime} from "@/functions/functions";
import {reactive} from "vue";

interface IComment{
  id: string;
  body: string;
  createdAt: string;
  userName: string;
  userId: string;
  userRole: string;
  isBanned: boolean;
}

interface IProps{
  authorName: string;
  authorId: string;
  authorRole: string;
  createdAt: string;
  title: string;
  body: string;
  tags: ITag[];
  comments: IComment[];
  isAdmin: boolean;
  isLogged: boolean;
}


const props = withDefaults(defineProps<IProps>(), {
  authorName: "author",
  authorId: "default author id",
  authorRole: "Користувач",
  title: "Default Title",
  createdAt: "2023-03-06 17:00:00+03",
  isAdmin: false,
  isLogged: false,
  body: "In this way, the function of the object is correctly copied.\n" +
      "<br>I already have tested it, and it worked correctly. There was no problem with the performance but I got a console error." +
      "<br><br>In this way, the function of the object is correctly copied.\n" +
      "I already have tested it, and it worked correctly. There was no problem with the performance but I got a console error.",
  tags: () => [
      {
        id: "1",
        name: "tag1"
      },
      {
        id: "2",
        name: "tag2"
      },
      {
        id: "3",
        name: "tag3"
      },
      {
        id: "4",
        name: "tag4"
      },

    ],
  comments: () => [
      {
        id: "1",
        body: "Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment ",
        userName: "User1",
        userRole: "Користувач",
        userId: "user id",
        createdAt: "2023-01-01 00:00:00+08",
        isBanned: false
      },
      {
        id: "2",
        body: "Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment ",
        userName: "User1r",
        userRole: "Админ",
        userId: "user id",
        createdAt: "2023-01-01 00:00:00+08",
        isBanned: true
      },
      {
        id: "2",
        body: "Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment Default comment ",
        userName: "User1",
        userRole: "Користувач",
        userId: "user id",
        createdAt: "2023-01-01 00:00:00+08",
        isBanned: false
      },

    ]
})

const store = reactive({
  inputNewComment: '',
  errorNewComment: false,
})

function newComment(){
  if (store.inputNewComment.length < 6){
    store.errorNewComment = true;
    return
  }
  console.log(store.inputNewComment)
}

function disableErrors(){
  store.errorNewComment = false;
}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.topic-page{
  width: 100%;
  border: 1px solid $COLOR_TURQUOISE;
  border-radius: 5px;
  padding: 15px 40px 30px 40px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  &-comments{
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    &-ban{
      background-color: $COLOR_BLUE;
      color: $COLOR_BLACK;
      padding: 5px;
      border-radius: 5px;
      border: 0;
      transition-duration: .3s;
      cursor: pointer;
      &:hover{
        background-color: #a15757;
      }
    }
  }
  &-title{
    color: $COLOR_LIGHTBLUE;
  }
  &-item{
    display: flex;
    column-gap: 20px;
    padding: 5px 15px 20px 15px;
    border-bottom: 1px solid $COLOR_TURQUOISE;
    &-left{
      display: flex;
      flex-direction: column;
      row-gap: 15px;
      height: 100%;
      padding-top: 10px;
      flex-shrink: 0;
      width: 90px;
      &-name{
        color: $COLOR_BLUE;
        word-wrap: break-word;
      }
      &-role{
        color: $COLOR_GRAY;
      }
    }
    &-right{
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      justify-content: space-between;
      &-body{
        color: $COLOR_BLACK;
      }
      &-time{
        color: $COLOR_GRAY;
      }
    }
  }
  &-tags{
    display: flex;
    align-items: center;
    column-gap: 20px;
    margin-bottom: 30px;
    &-item{
      color: $COLOR_BLACK;
    }
  }
  &-not-logged{
    color: $COLOR_GRAY;
  }
  &-new-comment{
    display: flex;
    flex-direction: column;
    gap: 25px;
    &-area{
      border: 1px solid $COLOR_TURQUOISE;
      border-radius: 5px;
      min-width: 100%;
      max-width: 100%;
      min-height: 200px;
      padding: 15px;
    }
    &-submit{
      width: fit-content;
      padding: 15px 17px;
      color: $COLOR_BLACK;
      background: $COLOR_TURQUOISE;
      border-radius: 5px;
      border: 0;
      cursor: pointer;
    }
  }
}
</style>