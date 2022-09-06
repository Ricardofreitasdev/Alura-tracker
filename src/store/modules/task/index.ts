import api from "@/http";
import ITask from "@/interfaces/ITask";
import { State } from "@/store";
import {
  ALL_TASKS,
  UPDATE_TASK,
  GET_TASKS,
  CREATE_TASK,
} from "@/store/actions";
import { ADD_TASK } from "@/store/type-mutations";
import { Module } from "vuex";

export interface stateTask {
  tasks: ITask[];
}

export const task: Module<stateTask, State> = {
  mutations: {
    [ALL_TASKS](state, task: ITask[]) {
      state.tasks = task;
    },

    [ADD_TASK](state, task: ITask) {
      state.tasks.push(task);
    },

    [UPDATE_TASK](state, task: ITask) {
      console.log(task);

      const index = state.tasks.findIndex((task) => task.id == task.id);
      state.tasks[index] = task;
    },
  },
  actions: {
    [GET_TASKS]({ commit }, filter: string) {
      let url = "tasks";

      if (filter) {
        url += "?description=" + filter;
      }

      api.get(url).then((response) => commit(ALL_TASKS, response.data));
    },
    [CREATE_TASK]({ commit }, task: ITask) {
      return api
        .post("/tasks", task)
        .then((response) => commit(ADD_TASK, response.data));
    },

    [UPDATE_TASK]({ commit }, task: ITask) {
      return api
        .put(`/tasks/${task.id}`, task)
        .then((response) => commit(UPDATE_TASK, response.data));
    },
  },
};
