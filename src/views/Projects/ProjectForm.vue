<template>
  <section>
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
import { UPDATE_PROJECT } from "@/store/type-mutations";
import { TypeMessage } from "@/interfaces/IMessage";
import { CREATE_PROJECT } from "@/store/actions";
import useSendMessage from "@/hooks/notifier";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store";

export default defineComponent({
  name: "ProjectForm",
  props: {
    id: {
      type: String,
    },
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();
    const { sendMessage } = useSendMessage();
    const projectName = ref("");

    if (props.id) {
      const item = store.state.project.projetcs.find(
        (proj) => proj.id == props.id
      );

      projectName.value = item?.name || "";
    }

    const sucessReturn = () => {
      projectName.value = "";

      sendMessage(
        "Projeto foi salvo",
        "Projeto disponível",
        TypeMessage.SUCCESS
      );

      router.push("/projetos");
    };

    const save = () => {
      if (props.id) {
        store
          .dispatch(UPDATE_PROJECT, {
            id: props.id,
            name: projectName.value,
          })
          .then(() => sucessReturn());
      } else {
        store
          .dispatch(CREATE_PROJECT, projectName.value)
          .then(() => sucessReturn());
      }
    };

    return {
      sucessReturn,
      projectName,
      save,
    };
  },
});
</script>

<style lang="scss" scoped></style>
