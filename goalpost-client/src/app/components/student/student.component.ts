import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SchoolYear } from 'src/app/models/school-year';
import { Student } from 'src/app/models/student';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  student: Student;

  addYearForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
  });

  constructor(private dataService: DataService) {
    this.student = dataService.getStudent();
  }

  cancelAddYear() {
    this.addYearForm.controls.title.setValue("");
  }

  submitAddYear() {
    this.student.schoolYears.push(new SchoolYear(this.addYearForm.controls.title.value!, []));
    this.addYearForm.controls.title.setValue("");
  }

}
