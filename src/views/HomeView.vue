<script setup lang="ts">
import VTopicList from "@/components/VTopicList/VTopicList.vue";
import VStatForum from "@/components/VStatForum/VStatForum.vue";
import VTags from "@/components/VTags/VTags.vue";
import VCreateTopic from "@/components/VCreateTopicButton/VCreateTopicButton.vue";
import VPageNumbers from "@/components/VPageNumbers/VPageNumbers.vue";
</script>

<template>
  <main class="home wrapper">
    <div class="home-left">
      <VTopicList/>
      <VPageNumbers/>
    </div>
    <div class="home-right">
      <VTags />
      <router-link to="/create-topic">
        <VCreateTopic/>
      </router-link>
      <VStatForum/>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.home{
  display: grid;
  grid-template-columns: 3.5fr 1fr;
  grid-column-gap: 10px;
  padding: 24px 0;
  &-left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
    row-gap: 20px;
  }
  &-right{
    position: sticky;
    top: 10px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
}
</style>
