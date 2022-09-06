<template>
  <button class="button" @click="press" :disabled="active">
    <i :class="icon"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TImerButton",
  props: {
    icon: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },

  emits: ["clicked"],

  methods: {
    press(): void {
      this.$emit("clicked");
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  margin: 5px;
}
</style>
