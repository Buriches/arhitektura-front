<template>
<div class="wrapper topic-view">
  <VTopicPage/>
  <VPageNumbers/>

</div>
</template>

<script>
import VTopicPage from "@/components/VTopicPage/VTopicPage.vue";
import VPageNumbers from "@/components/VPageNumbers/VPageNumbers.vue";

export default {
  name: "TopicView",
  components: {VTopicPage, VPageNumbers}
}
</script>

<style scoped lang="scss">
.topic-view{
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>