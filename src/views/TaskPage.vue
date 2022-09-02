<template>
  <Form @onSaveTask="saveTask" />
  <div class="list">
    <Box v-if="ExistTask"> Ainda não existem tarefas </Box>
    <Task v-for="(task, index) in tasks" :key="index" :task="task" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Form from "@/components/Form.vue";
import Task from "@/components/Task.vue";
import ITask from "@/interfaces/ITask";
import Box from "@/components/Box.vue";

export default defineComponent({
  name: "TaskPage",
  components: {
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

<style lang="scss"></style>
