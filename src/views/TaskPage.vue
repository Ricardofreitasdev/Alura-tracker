<template>
  <Form @onSaveTask="saveTask"></Form>
  <div class="list">
    <Box v-if="ExistTask"> Ainda não existem tarefas </Box>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="Digite para filtrar"
          v-model="filter"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </div>
    <Task
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      @onclickTask="selectedTask"
    />
  </div>

  <Modal :show="isSelectedTask.id ? true : false" v-if="isSelectedTask">
    <template v-slot:header>
      <p class="modal-card-title">Editando tarefa</p>
      <button @click="closeModal" class="delete" aria-label="close"></button>
    </template>
    <template v-slot:body>
      <div class="field">
        <input class="input" type="text" v-model="isSelectedTask.description" />
      </div>
    </template>
    <template v-slot:footer>
      <button @click="saveChanges" class="button is-success">
        Save alterações
      </button>
      <button @click="closeModal" class="button">Cancelar</button>
    </template>
  </Modal>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from "vue";
import Form from "@/components/Form.vue";
import Task from "@/components/Task.vue";
import ITask from "@/interfaces/ITask";
import Box from "@/components/Box.vue";
import { useStore } from "@/store";
import {
  CREATE_TASK,
  GET_PROJECTS,
  GET_TASKS,
  UPDATE_TASK,
} from "@/store/actions";
import Modal from "@/components/Modal.vue";

export default defineComponent({
  name: "TaskPage",
  components: {
    Form,
    Task,
    Box,
    Modal,
  },
  data() {
    return {
      darkThemeActive: false,
      isSelectedTask: null as ITask | null,
    };
  },
  methods: {
    saveChanges() {
      this.store
        .dispatch(UPDATE_TASK, this.isSelectedTask)
        .then(() => this.closeModal());
    },
    saveTask(task: ITask) {
      this.store.dispatch(CREATE_TASK, task);
    },
    selectedTask(task: ITask) {
      this.isSelectedTask = task;
    },
    closeModal() {
      this.isSelectedTask = null;
    },
  },
  computed: {
    ExistTask(): boolean {
      return this.tasks.length == 0;
    },
  },
  setup() {
    const store = useStore();
    store.dispatch(GET_TASKS);
    store.dispatch(GET_PROJECTS);

    const filter = ref("");

    watchEffect(() => {
      store.dispatch(GET_TASKS, filter.value);
    });

    return {
      tasks: computed(() => store.state.task.tasks),
      store,
      filter,
    };
  },
});
</script>

<style lang="scss"></style>
