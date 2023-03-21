<template>
  <div class="topic-list" v-if="topics.data">
    <VTopic
        v-for="data in topics.data"
        :key="data.id"
        :id="data.id"
        :tags="data.tags"
        :title="data.title"
        :updated-at="data['updated-at']"
        :created-at="data['created-at']"
        :created-by="data['created-by']"
        :body="data.body"
    />
  </div>
</template>

<script setup>
import VTopic from "@/components/VTopic/VTopic.vue";
import {onMounted, reactive} from "vue";

let topics = reactive({ data: undefined});

onMounted(async () => {
  await fetchTopics()
})

async function fetchTopics(){
  topics.data = await (await fetch('/topiclist.json')).json()
}

</script>

<style scoped>
.topic-list{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>