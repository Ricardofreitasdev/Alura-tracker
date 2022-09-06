<template>
  <section>
    <router-link to="/projetos/novo" class="button">
      <span>Novo projeto</span>
    </router-link>

    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
          <td>
            <router-link :to="`/projetos/${project.id}`" class="button">
              <span class="icon is-small">
                <i class="fa fa-pen"></i>
              </span>
            </router-link>
            <button
              @click="deleteProject(project.id)"
              class="button ml-2 is-danger"
            >
              <span class="icon is-small">
                <i class="fa fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { DELETE_PROJECT } from "@/store/type-mutations";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "List",
  methods: {
    deleteProject(id: string) {
      this.store.dispatch(DELETE_PROJECT, id);
    },
  },
  setup() {
    const store = useStore();
    store.dispatch("GET_PROJECTS");
    return {
      projects: computed(() => store.state.project.projetcs),
      store,
    };
  },
});
</script>

<style lang="scss" scoped></style>
