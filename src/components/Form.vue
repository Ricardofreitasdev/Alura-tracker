<template>
  <div class="box form">
    <div class="columns">
      <div
        class="column is-5"
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

      <div class="column is-3">
        <div class="select">
          <select v-model="idProject">
            <option value="">Selecione o projeto</option>
            <option
              :value="project.id"
              v-for="project in projects"
              :key="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="column form-align">
        <ViewTimer @endTimer="endTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import ViewTimer from "./ViewTimer.vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "Form",
  emits: ["onSaveTask"],
  components: { ViewTimer },
  data() {
    return {
      task: "",
      idProject: "",
    };
  },
  methods: {
    endTask(time: number): void {
      this.$emit("onSaveTask", {
        timeInSeconds: time,
        description: this.task,
        project: this.projects.find((proj) => proj.id == this.idProject),
      });
      this.task = "";
    },
  },
  setup() {
    const store = useStore(key);
    return {
      projects: computed(() => store.state.projects),
    };
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
