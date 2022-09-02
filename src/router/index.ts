import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TaskPage from "../views/TaskPage.vue";
import ProjectPage from "../views/ProjectPage.vue";
import ProjectForm from "../views/Projects/ProjectForm.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "TaskPage",
    component: TaskPage,
  },
  {
    path: "/projetos",
    name: "Projects",
    component: ProjectPage,
  },
  {
    path: "/projetos/novo",
    name: "New Projects",
    component: ProjectForm,
  },
  {
    path: "/projetos/:id",
    name: "Edit Projects",
    component: ProjectForm,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
