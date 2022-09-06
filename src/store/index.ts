import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { IMessage } from "@/interfaces/IMessage";
import { InjectionKey } from "vue";
import { NOTIFY } from "./type-mutations";
import { stateProject, project } from "@/store/modules/project/index";
import { stateTask, task } from "./modules/task";
export interface State {
  messages: IMessage[];
  task: stateTask;
  project: stateProject;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    messages: [],
    task: {
      tasks: [],
    },
    project: {
      projetcs: [],
    },
  },

  mutations: {
    [NOTIFY](state, newMessage: IMessage) {
      newMessage.id = new Date().getTime();
      state.messages.push(newMessage);
      setTimeout(() => {
        state.messages = [];
      }, 2500);
    },
  },

  actions: {},
  modules: {
    project,
    task,
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
