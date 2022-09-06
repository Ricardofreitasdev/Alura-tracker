import api from "@/http";
import IProject from "@/interfaces/IProject";
import { State } from "@/store";
import { GET_PROJECTS, CREATE_PROJECT } from "@/store/actions";
import {
  ADD_PROJECT,
  ALL_PROJECTS,
  DELETE_PROJECT,
  UPDATE_PROJECT,
} from "@/store/type-mutations";
import { Module } from "vuex";

export interface stateProject {
  projetcs: IProject[];
}

export const project: Module<stateProject, State> = {
  mutations: {
    [ALL_PROJECTS](state, projects: IProject[]) {
      state.projetcs = projects;
    },
    [ADD_PROJECT](state, projectName: string) {
      const project = {
        id: new Date().toISOString(),
        name: projectName,
      } as IProject;

      state.projetcs.push(project);
    },

    [UPDATE_PROJECT](state, project: IProject) {
      const index = state.projetcs.findIndex((proj) => proj.id == project.id);
      state.projetcs[index] = project;
    },

    [DELETE_PROJECT](state, id: string) {
      state.projetcs = state.projetcs.filter((proj) => proj.id != id);
    },
  },

  actions: {
    [GET_PROJECTS]({ commit }) {
      api
        .get("projects")
        .then((response) => commit("ALL_PROJECTS", response.data));
    },
    [CREATE_PROJECT]({ commit }, nameProject: string) {
      return api.post("/projects", {
        name: nameProject,
      });
    },
    [UPDATE_PROJECT]({ commit }, project: IProject) {
      return api.put(`/projects/${project.id}`, project);
    },
    [DELETE_PROJECT]({ commit }, id: string) {
      return api
        .delete(`/projects/${id}`)
        .then(() => commit(DELETE_PROJECT, id));
    },
  },
};
