<template>
  <section>
    <strong>{{ formatTime }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Timer",
  props: {
    timeSeconds: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    formatTime(): string {
      return new Date(this.timeSeconds * 1000).toISOString().substring(11, 19);
    },
  },
});
</script>

<style>
section strong {
  color: var(--text-primary);
  background: var(--bg-primary);
  padding: 4px;
  border-radius: 4px;
}
</style>
