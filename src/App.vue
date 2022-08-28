<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth">
      <Sidebar />
    </div>
    <div class="column is-four-fifth">
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
    };
  },
  methods: {
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
.list {
  padding: 1.25rem;
}
</style>
