export interface User {
  email: string;
  password: string;
}

export interface Semester {
  name: string;
  subjects: Subject[];
  user: User;
}

export interface Subject {
  id: string;
  name: string;
  professor: string;
  credits: number;
  schedule: Schedule;
  status: string; // enrolled or not enrolled
  finalGrade: number | null;
  assignments: Assignment[];
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  status: string;
  grade: number | null;
  feedback?: string;
  resources: Resource[];
}

export interface Resource {
  id: string;
  name: string;
  type: string;
  url: string;
}

export interface Schedule {
  day: string;
  time: string;
}
