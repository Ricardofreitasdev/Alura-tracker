<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'dark-theme': darkThemeActive }"
  >
    <div class="column is-one-fifth">
      <Sidebar @changeColor="toggleTheme" />
    </div>
    <div class="column is-four-fifth content">
      <router-view> </router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar.vue";

export default defineComponent({
  name: "App",
  components: {
    Sidebar,
  },
  data() {
    return {
      darkThemeActive: false,
    };
  },
  methods: {
    toggleTheme(stateDarkTheme: boolean) {
      this.darkThemeActive = stateDarkTheme;
    },
  },
});
</script>

<style lang="scss">
main {
  --bg-primary: #fff;
  --text-primary: #000;
}

main.dark-theme {
  --bg-primary: #2b2b42;
  --text-primary: #ddd;
}

.content {
  background-color: var(--bg-primary);
}

.list {
  padding: 1.25rem;
}
</style>
