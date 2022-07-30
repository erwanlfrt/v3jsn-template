<script setup lang="ts">
import MyStrip from '@/components/strip';
import { ref } from 'vue';
import { Configuration, SpatialNavigation } from 'vue-js-spatial-navigation';

const messages: string[] = [];
for (let i = 0; i < 6; i++) {
  messages.push('Thumbnail ' + i.toString());
}
const conf1: Configuration = {
  enterTo: 'last-focused',
  defaultElement: '',
  scrollOptions: {
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest'
  }
};

const conf2: Configuration = {
  enterTo: 'default-element',
  defaultElement: '.default-tile',
  scrollOptions: {
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest'
  }
};

const conf3: Configuration = {
  enterTo: '',
  defaultElement: '',
  disabled: true,
  scrollOptions: {
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest'
  }
};

const conf4: Configuration = {
  // enterTo: '',
  // defaultElement: '',
  // scrollOptions: {
  //   behavior: 'smooth',
  //   block: 'center',
  //   inline: 'nearest'
  // }
};

const onClick = () => {
  console.log('been clicked');
  SpatialNavigation.getInstance().focusOnMounted('parent');
  window.setTimeout(() => {
    showButton.value = true;
  }, 2000);
};

const showButton = ref(false);
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <my-strip
      :messages="messages"
      :title="'Strip 1 (last focused)'"
      :snId="'strip 1'"
      :conf="conf1"
    ></my-strip>
    <my-strip
      :messages="messages"
      :title="'Strip 2 (default element)'"
      :snId="'strip 2'"
      :conf="conf2"
    ></my-strip>
    <my-strip
      :messages="messages"
      :title="'Strip 3 (disabled)'"
      :snId="'strip 3'"
      :conf="conf3"
    ></my-strip>
    <my-strip
      :messages="messages"
      :title="'Strip 4'"
      :snId="'strip 4'"
      :conf="conf4"
    ></my-strip>

    <div class="test">
      <button ref="button" @click="onClick">Click me !</button>
      <span>Grand-parent</span>
      <div
        class="grand-parent"
        v-focus-section="{ id: 'grand-parent', conf: {} }"
      >
        <span>Parent</span>
        <div
          class="parent"
          v-focus-section="{ id: 'parent', conf: {} }"
          v-if="showButton"
        >
          <span>Child</span>
          <div class="child" v-focus>I can be focused !</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.test {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.grand-parent {
  width: 100%;
  height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffee7d;
  border: 5px solid #ccb416;
}

.parent {
  width: 30%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #87e8cb;
  border: 5px solid #22a37d;
  padding: 50px;
}

.child {
  background-color: white;
  border: 5px solid black;
  padding: 10px;

  &:focus {
    transform: scaleX(1.3) scaleY(1.3);
    background: #f3be39;
    border: 5px solid #ff7900;
    outline: none;
  }
}
</style>
