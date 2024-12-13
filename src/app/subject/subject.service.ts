import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';
import { Subject, Assignment } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private readonly collectionName = 'subjects';

  constructor(private firestore: Firestore) {}

  // Get all subjects
  getSubjects(): Observable<Subject[]> {
    const subjectsRef = collection(this.firestore, this.collectionName);
    return collectionData(subjectsRef, { idField: 'id' }) as Observable<
      Subject[]
    >;
  }

  getSubjectById(id: string): Observable<Subject | null> {
    const subjectRef = doc(this.firestore, `${this.collectionName}/${id}`);
    return from(getDoc(subjectRef)).pipe(
      map((doc) => {
        if (doc.exists()) {
          return { id: doc.id, ...doc.data() } as Subject;
        }
        return null;
      }),
    );
  }

  // Create a new subject
  async createSubject(subject: Omit<Subject, 'id'>): Promise<string> {
    const subjectsRef = collection(this.firestore, this.collectionName);
    const newDocRef = doc(subjectsRef);
    await setDoc(newDocRef, {
      ...subject,
      createdAt: new Date(),
    });
    return newDocRef.id;
  }

  // Update a subject
  async updateSubject(id: string, subject: Partial<Subject>): Promise<void> {
    const subjectRef = doc(this.firestore, `${this.collectionName}/${id}`);
    await updateDoc(subjectRef, {
      ...subject,
      updatedAt: new Date(),
    });
  }

  // Delete a subject
  async deleteSubject(id: string): Promise<void> {
    const subjectRef = doc(this.firestore, `${this.collectionName}/${id}`);
    await deleteDoc(subjectRef);
  }

  // Get subjects by professor
  getSubjectsByProfessor(professorName: string): Observable<Subject[]> {
    const subjectsRef = collection(this.firestore, this.collectionName);
    const q = query(subjectsRef, where('professor', '==', professorName));
    return collectionData(q, { idField: 'id' }) as Observable<Subject[]>;
  }

  // Add an assignment to a subject
  async addAssignment(
    subjectId: string,
    assignment: Omit<Assignment, 'id'>,
  ): Promise<void> {
    const subjectRef = doc(
      this.firestore,
      `${this.collectionName}/${subjectId}`,
    );
    const subject = await getDoc(subjectRef);

    if (subject.exists()) {
      const currentAssignments = subject.data()['assignments'] || [];
      const newAssignment = {
        ...assignment,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      };

      await updateDoc(subjectRef, {
        assignments: [...currentAssignments, newAssignment],
      });
    }
  }

  // Update an assignment
  async updateAssignment(
    subjectId: string,
    assignmentId: string,
    updatedAssignment: Partial<Assignment>,
  ): Promise<void> {
    const subjectRef = doc(
      this.firestore,
      `${this.collectionName}/${subjectId}`,
    );
    const subject = await getDoc(subjectRef);

    if (subject.exists()) {
      const assignments = subject.data()['assignments'] || [];
      const updatedAssignments = assignments.map((assignment: Assignment) =>
        assignment.id === assignmentId
          ? { ...assignment, ...updatedAssignment }
          : assignment,
      );

      await updateDoc(subjectRef, { assignments: updatedAssignments });
    }
  }

  // Delete an assignment
  async deleteAssignment(
    subjectId: string,
    assignmentId: string,
  ): Promise<void> {
    const subjectRef = doc(
      this.firestore,
      `${this.collectionName}/${subjectId}`,
    );
    const subject = await getDoc(subjectRef);

    if (subject.exists()) {
      const assignments = subject.data()['assignments'] || [];
      const updatedAssignments = assignments.filter(
        (assignment: Assignment) => assignment.id !== assignmentId,
      );

      await updateDoc(subjectRef, { assignments: updatedAssignments });
    }
  }

  // Update subject status
  async updateSubjectStatus(subjectId: string, status: string): Promise<void> {
    const subjectRef = doc(
      this.firestore,
      `${this.collectionName}/${subjectId}`,
    );
    await updateDoc(subjectRef, {
      status,
      updatedAt: new Date(),
    });
  }

  // Update final grade
  async updateFinalGrade(subjectId: string, finalGrade: number): Promise<void> {
    const subjectRef = doc(
      this.firestore,
      `${this.collectionName}/${subjectId}`,
    );
    await updateDoc(subjectRef, {
      finalGrade,
      updatedAt: new Date(),
    });
  }
}
