<script setup lang="ts">
const props = defineProps<{ message: string }>();
</script>

<template>
  <div className="tile" v-focus>{{ props.message }}</div>
</template>

<style lang="scss">
.tile {
  background-color: #41b883;
  color: white;
  font-size: large;
  font-weight: bold;
  border: solid 5px #35495e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
  padding: 0 10px;
  flex-grow: 1;

  &:hover,
  &:focus {
    transform: scaleX(1.1) scaleY(1.1);
    background: #52f7ae;
  }
}
</style>
