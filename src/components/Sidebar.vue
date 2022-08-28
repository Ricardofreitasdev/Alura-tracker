<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="" />
    </h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
});
</script>

<style lang="scss" scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  @media only screen and (max-width: 768px) {
    padding: 2.5rem;
    height: auto;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 75px;
    }
  }
}
</style>
