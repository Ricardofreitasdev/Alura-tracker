<template>
  <button class="button" @click="press" :disabled="active">
    <span>{{ texto }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TImerButton",
  props: {
    texto: {
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
