<script setup lang="ts">
import MyTile from '@/components/tile';
import { Configuration } from 'boussole';

const props = defineProps<{
  messages: string[];
  title: string;
  conf: Configuration;
  snId: string;
}>();

// const $spatialNavigation: SpatialNavigation = inject(
//   '$SpatialNavigation'
// ) as SpatialNavigation;

// onMounted(() => {
//   $spatialNavigation.set(props.snId, props.conf);
// });
</script>
<template>
  <div className="strip-wrapper">
    <h1>{{ title }}</h1>
    <div
      className="strip"
      v-focus-section="{ id: props.snId, conf: props.conf }"
    >
      <my-tile
        v-for="(message, index) in props.messages"
        :key="index"
        :message="message"
        :className="'tile ' + (index === 4 ? 'default-tile' : '')"
      />
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
