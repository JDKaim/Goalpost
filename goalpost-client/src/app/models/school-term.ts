import { Course } from "./course";

export class SchoolTerm {
  constructor(public title: string, public courses: Array<Course>) {
  }
}
