<template>
  <div class="box form">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulario de nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa deseja iniciar?"
          v-model="task"
        />
      </div>

      <div class="column form-align">
        <ViewTimer @endTimer="endTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ViewTimer from "./ViewTimer.vue";

export default defineComponent({
  name: "Form",
  emits: ["onSaveTask"],
  components: { ViewTimer },
  data() {
    return {
      task: "",
    };
  },
  methods: {
    endTask(time: number): void {
      this.$emit("onSaveTask", {
        timeInSeconds: time,
        description: this.task,
      });
      this.task = "";
    },
  },
});
</script>

<style lang="scss" scoped>
.form-align {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form {
  color: var(--text-primary);
  background: var(--bg-primary);
}
</style>
