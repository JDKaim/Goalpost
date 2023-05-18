import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { SchoolYearComponent } from './components/school-year/school-year.component';
import { SchoolTermComponent } from './components/school-term/school-term.component';
import { CourseComponent } from './components/course/course.component';
import { CategoryComponent } from './components/category/category.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LetterGradePipe } from './pipes/letter-grade.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    SchoolYearComponent,
    SchoolTermComponent,
    CourseComponent,
    CategoryComponent,
    AssignmentComponent,
    LetterGradePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
