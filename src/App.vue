<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'dark-theme': darkThemeActive }"
  >
    <div class="column is-one-fifth">
      <Sidebar @changeColor="toggleTheme" />
    </div>
    <div class="column is-four-fifth content">
      <Form @onSaveTask="saveTask" />
      <div class="list">
        <Box v-if="ExistTask"> Ainda não existem tarefas </Box>
        <Task v-for="(task, index) in tasks" :key="index" :task="task" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Form from "./components/Form.vue";
import Task from "./components/Task.vue";
import ITask from "./interfaces/ITask";
import Box from "./components/Box.vue";

export default defineComponent({
  name: "App",
  components: {
    Sidebar,
    Form,
    Task,
    Box,
  },
  data() {
    return {
      tasks: [] as ITask[],
      darkThemeActive: false,
    };
  },
  methods: {
    toggleTheme(stateDarkTheme: boolean) {
      this.darkThemeActive = stateDarkTheme;
    },
    saveTask(task: ITask) {
      this.tasks.push(task);
    },
  },
  computed: {
    ExistTask(): boolean {
      return this.tasks.length === 0;
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
