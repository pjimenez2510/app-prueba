import { Semester } from '../models/models';

const testData: Semester[] = [
  {
    name: 'Fall 2024',
    user: {
      email: 'user1@example.com',
      password: 'password123',
    },
    subjects: [
      {
        id: 'sub1',
        name: 'Mathematics',
        professor: 'Dr. John Doe',
        credits: 3,
        schedule: {
          day: 'Monday',
          time: '09:00 - 11:00',
        },
        status: 'enrolled',
        finalGrade: 85,
        assignments: [
          {
            id: 'assign1',
            title: 'Algebra Homework',
            description: 'Solve 10 algebra problems.',
            dueDate: new Date('2024-10-15'),
            status: 'completed',
            grade: 90,
            feedback: 'Great work!',
            resources: [
              {
                id: 'res1',
                name: 'Algebra Guide',
                type: 'PDF',
                url: 'https://example.com/algebra-guide',
              },
            ],
          },
        ],
      },
      {
        id: 'sub2',
        name: 'Physics',
        professor: 'Dr. Jane Smith',
        credits: 4,
        schedule: {
          day: 'Wednesday',
          time: '14:00 - 16:00',
        },
        status: 'not enrolled',
        finalGrade: null,
        assignments: [],
      },
    ],
  },
  {
    name: 'Spring 2025',
    user: {
      email: 'user2@example.com',
      password: 'securepass456',
    },
    subjects: [
      {
        id: 'sub3',
        name: 'Chemistry',
        professor: 'Dr. Alice Brown',
        credits: 3,
        schedule: {
          day: 'Friday',
          time: '11:00 - 13:00',
        },
        status: 'enrolled',
        finalGrade: 92,
        assignments: [
          {
            id: 'assign2',
            title: 'Lab Report',
            description: 'Write a report on chemical reactions.',
            dueDate: new Date('2025-03-20'),
            status: 'pending',
            grade: null,
            resources: [
              {
                id: 'res2',
                name: 'Lab Manual',
                type: 'PDF',
                url: 'https://example.com/lab-manual',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default testData;
