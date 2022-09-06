<template>
  <div class="messages">
    <article
      class="message"
      :class="context[message.type]"
      v-for="message in messages"
      :key="message.id"
    >
      <div class="message-header">{{ message.title }}</div>
      <div class="message-body">{{ message.description }}</div>
    </article>
  </div>
</template>

<script lang="ts">
import { TypeMessage } from "@/interfaces/IMessage";
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Messages",
  data() {
    return {
      context: {
        [TypeMessage.SUCCESS]: "is-success",
        [TypeMessage.WARNING]: "is-warning",
        [TypeMessage.FAIL]: "is-danger",
      },
    };
  },
  setup() {
    const store = useStore();
    return {
      messages: computed(() => store.state.messages),
    };
  },
});
</script>

<style lang="scss" scoped>
.message {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 99;
}
</style>
