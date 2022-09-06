<template>
  <Box>
    <div class="columns task" @click="clickTask">
      <div class="column is-4">
        {{ task.description || "Tarefa sem descrição" }}
      </div>
      <div class="column is-3">
        {{ task.project?.name }}
      </div>
      <div class="column">
        <Timer :timeSeconds="task.timeInSeconds" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import ITask from "@/interfaces/ITask";
import { defineComponent, PropType } from "vue";
import Timer from "./Timer.vue";
import Box from "./Box.vue";

export default defineComponent({
  name: "Task",
  components: { Timer, Box },
  emits: ["onclickTask"],
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },

  setup(props, { emit }) {
    const clickTask = (): void => {
      emit("onclickTask", props.task);
    };

    return {
      clickTask,
    };
  },
});
</script>

<style scoped>
.task {
  cursor: pointer;
}
</style>
