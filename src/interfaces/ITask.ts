import IProject from "./IProject";

export default interface ITask {
  id: number;
  timeInSeconds: number;
  description: String;
  project: IProject;
}
