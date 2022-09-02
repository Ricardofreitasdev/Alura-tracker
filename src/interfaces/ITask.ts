import IProject from "./IProject";

export default interface ITask {
  timeInSeconds: number;
  description: String;
  project: IProject;
}
