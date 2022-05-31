<script setup lang="ts">
import MyStrip from '@/components/strip';

const messages: string[] = []
for (let i = 0; i < 6; i++) {
  messages.push("Thumbnail " + i.toString())
}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <my-strip :messages="messages" :title="'Strip'"></my-strip>
  </div>
</template>
