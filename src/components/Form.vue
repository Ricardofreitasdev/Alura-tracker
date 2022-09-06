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
import { computed, defineComponent, ref } from "vue";
import { TypeMessage } from "@/interfaces/IMessage";
import useSendMessage from "@/hooks/notifier";
import ViewTimer from "./ViewTimer.vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "Form",
  emits: ["onSaveTask"],
  components: { ViewTimer },

  methods: {},
  setup(_, { emit }) {
    const store = useStore(key);
    const { sendMessage } = useSendMessage();

    const task = ref("");
    const idProject = ref("");
    const projects = computed(() => store.state.project.projetcs);

    const endTask = (time: number): void => {
      if (!idProject.value) {
        sendMessage(
          "Erro",
          "Antes de finalizar, escolha o projeto",
          TypeMessage.FAIL
        );

        return;
      }

      emit("onSaveTask", {
        timeInSeconds: time,
        description: task.value,
        project: projects.value.find((proj) => proj.id == idProject.value),
      });
      task.value = "";
    };

    return {
      store,
      sendMessage,
      task,
      idProject,
      endTask,
      projects,
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
