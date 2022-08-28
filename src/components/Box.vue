<template>
  <div class="box has-text-weight-bold">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Box",
});
</script>
<style lang="scss" scoped>
.box {
  background: rgb(230, 230, 230);
}
</style>
