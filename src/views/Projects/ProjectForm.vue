<template>
  <section class="projects">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="save">
      <div class="field">
        <label for="projectName" class="label"> Nome do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="projectName"
          id="projectName"
        />
      </div>
      <div class="field">
        <button type="submit" class="button">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectForm",
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      projectName: "",
      project: "",
    };
  },
  mounted() {
    if (this.id) {
      const item = this.store.state.projects.find((proj) => proj.id == this.id);
      this.projectName = item?.name || "";
    }
  },
  methods: {
    save() {
      if (this.id) {
        this.store.commit("UPDATE_PROJECT", {
          id: this.id,
          name: this.projectName,
        });
      } else {
        this.store.commit("ADD_PROJECT", this.projectName);
      }
      this.projectName = "";
      this.$router.push("/projetos");
    },
  },

  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>

<style lang="scss" scoped>
.projects {
  padding: 1.25rem;
}
</style>
