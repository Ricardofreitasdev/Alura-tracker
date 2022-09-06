import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TaskPage from "../views/TaskPage.vue";
import ProjectPage from "../views/ProjectPage.vue";
import ProjectForm from "../views/Projects/ProjectForm.vue";
import List from "../views/Projects/List.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "TaskPage",
    component: TaskPage,
  },
  {
    path: "/projetos",
    component: ProjectPage,
    children: [
      {
        path: "",
        name: "Projects",
        component: List,
      },
      {
        path: "novo",
        name: "New Projects",
        component: ProjectForm,
      },
      {
        path: ":id",
        name: "Edit Projects",
        component: ProjectForm,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
