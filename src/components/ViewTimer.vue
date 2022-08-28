<template>
  <Timer :timeSeconds="timeSeconds" />
  <section>
    <TimerButton @clicked="init" texto="Play" :active="isActive" />
    <TimerButton @clicked="end" texto="Stop" :active="!isActive" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Timer from "./Timer.vue";
import TimerButton from "./TimerButton.vue";

export default defineComponent({
  name: "ViewTimer",
  emits: ["endTimer"],
  data() {
    return {
      timeSeconds: 0,
      timer: 0,
      isActive: false,
    };
  },
  methods: {
    init() {
      this.isActive = true;
      this.timer = setInterval(() => {
        this.timeSeconds += 1;
      }, 1000);
    },
    end() {
      this.isActive = false;
      clearInterval(this.timer);
      this.$emit("endTimer", this.timeSeconds);
      this.timeSeconds = 0;
    },
  },
  components: { Timer, TimerButton },
});
</script>

<style></style>
