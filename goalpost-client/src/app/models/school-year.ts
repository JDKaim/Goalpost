import { SchoolTerm } from "./school-term";

export class SchoolYear {
  constructor(public title: string, public terms: Array<SchoolTerm>) {
  }
}
