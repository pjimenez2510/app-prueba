import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Semester, Subject } from '../models/models';
import testData from '../data/data';

@Injectable({
  providedIn: 'root',
})
export class AcademicService {
  private currentSemesterSubject = new BehaviorSubject<Semester>(testData[0]);
  private allSemestersSubject = new BehaviorSubject<Semester[]>(testData);

  getCurrentSemester(): Observable<Semester> {
    return this.currentSemesterSubject.asObservable();
  }

  getAllSemesters(): Observable<Semester[]> {
    return this.allSemestersSubject.asObservable();
  }

  getSubjectById(subjectId: string): Subject | undefined {
    return this.currentSemesterSubject.value.subjects.find(
      (subject) => subject.id === subjectId
    );
  }

  updateSubject(updatedSubject: Subject): void {
    const currentSemester = this.currentSemesterSubject.value;
    const updatedSubjects = currentSemester.subjects.map((subject) =>
      subject.id === updatedSubject.id ? updatedSubject : subject
    );

    this.currentSemesterSubject.next({
      ...currentSemester,
      subjects: updatedSubjects,
    });
  }
}
