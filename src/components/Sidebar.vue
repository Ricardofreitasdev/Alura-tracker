<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="" />
    </h1>
    <button @click="changeTheme" class="button">{{ textButton }}</button>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/"> Tarefas </router-link>
        </li>
        <li>
          <router-link to="/projetos"> Projetos </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
  emits: ["changeColor"],
  data() {
    return {
      darkThemeIsActive: false,
    };
  },
  computed: {
    textButton() {
      if (this.darkThemeIsActive) {
        return "Desativar modo escuro";
      }
      return "Ativar modo escuro";
    },
  },
  methods: {
    changeTheme() {
      this.darkThemeIsActive = !this.darkThemeIsActive;
      this.$emit("changeColor", this.darkThemeIsActive);
    },
  },
});
</script>

<style lang="scss" scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;

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

  nav {
    a {
      color: #fff;
    }
  }
}
</style>
