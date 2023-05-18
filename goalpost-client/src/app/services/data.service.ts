import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { SchoolYear } from '../models/school-year';
import { Course } from '../models/course';
import { Category } from '../models/category';
import { Assignment } from '../models/assignment';
import { SchoolTerm } from '../models/school-term';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  student = new Student('JD Kaim', [
    new SchoolYear('2021-2022', [
      new SchoolTerm('S2', [
        new Course('AP Calculus BC', [
          new Category('Assessments', 0.9, [
            new Assignment('Unit 1 Test', 100, 100, 'Complete'),
          ]),
        ]),
      ]),
    ]),
    new SchoolYear('2022-2023', [
      new SchoolTerm('S2', [
        new Course('AP Statistics', [
          new Category('Assessments', 0.9, [
            new Assignment('Unit 1 Test', 100, 87.5, 'Complete'),
            new Assignment('Unit 1 Homework', 20, 19, 'Complete'),
            new Assignment('Unit 1 Participation', 7, 6, 'Complete'),
          ]),
        ]),
      ]),
    ]),
  ]);

  constructor() {}

  getStudent() {
    return this.student;
  }
}
