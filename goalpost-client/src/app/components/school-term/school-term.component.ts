import { Component, Input } from '@angular/core';
import { SchoolTerm } from 'src/app/models/school-term';

@Component({
  selector: 'app-school-term',
  templateUrl: './school-term.component.html',
  styleUrls: ['./school-term.component.scss']
})
export class SchoolTermComponent {
  @Input() schoolTerm!: SchoolTerm;
}
