<script setup lang=ts>
import MyTile from '@/components/tile'
const props = defineProps<{ messages: string[], title: string }>()
</script>
<template>
<div className="strip-wrapper">
  <h1>{{ title }}</h1>
  <div className="strip">
    <my-tile v-for="(message, index) in props.messages"  :key="index" :message="message"/>
  </div>
</div>

</template>

<style lang="scss">
.strip-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    padding: 0 2%;
  }
}
.strip {
  display: flex;
  align-items: row;
  width: 100%;
  height: 200px;
}
</style>