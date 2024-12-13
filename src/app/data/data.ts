import { Semester } from '../models/models';

const testData: Semester[] = [
  {
    name: 'Semestre 2024-1',
    user: {
      email: 'estudiante.software@universidad.edu',
      password: 'password123',
    },
    subjects: [
      {
        id: 'sub1',
        name: 'Desarrollo de Software I',
        professor: 'Ing. María Rodriguez',
        credits: 4,
        schedule: {
          day: 'Lunes',
          time: '07:00 - 09:00',
        },
        status: 'enrolled',
        finalGrade: 85,
        assignments: [
          {
            id: 'assign1',
            title: 'Proyecto API REST',
            description:
              'Desarrollar una API REST utilizando Node.js y Express que implemente operaciones CRUD básicas y autenticación JWT.',
            dueDate: new Date('2024-12-20'),
            status: 'in progress',
            grade: null,
            resources: [
              {
                id: 'res1',
                name: 'Guía de Implementación JWT',
                type: 'PDF',
                url: 'https://example.com/jwt-guide',
              },
              {
                id: 'res2',
                name: 'Ejemplos de código',
                type: 'ZIP',
                url: 'https://example.com/code-examples',
              },
            ],
          },
        ],
      },
      {
        id: 'sub2',
        name: 'Bases de Datos Avanzadas',
        professor: 'Dr. Carlos Sánchez',
        credits: 4,
        schedule: {
          day: 'Martes',
          time: '09:00 - 11:00',
        },
        status: 'enrolled',
        finalGrade: null,
        assignments: [
          {
            id: 'assign2',
            title: 'Diseño de Base de Datos NoSQL',
            description:
              'Implementar un modelo de datos en MongoDB para una aplicación de comercio electrónico.',
            dueDate: new Date('2024-12-15'),
            status: 'pending',
            grade: null,
            resources: [
              {
                id: 'res3',
                name: 'MongoDB Schema Design Patterns',
                type: 'PDF',
                url: 'https://example.com/mongodb-patterns',
              },
            ],
          },
        ],
      },
      {
        id: 'sub3',
        name: 'Arquitectura de Software',
        professor: 'Ing. Ana Martínez',
        credits: 3,
        schedule: {
          day: 'Miércoles',
          time: '11:00 - 13:00',
        },
        status: 'enrolled',
        finalGrade: 88,
        assignments: [
          {
            id: 'assign3',
            title: 'Diseño de Microservicios',
            description:
              'Desarrollar una arquitectura de microservicios para un sistema de gestión de inventario.',
            dueDate: new Date('2024-12-18'),
            status: 'completed',
            grade: 90,
            feedback: '¡Excelente diseño y documentación!',
            resources: [
              {
                id: 'res4',
                name: 'Patrones de Microservicios',
                type: 'PDF',
                url: 'https://example.com/microservices-patterns',
              },
            ],
          },
        ],
      },
      {
        id: 'sub4',
        name: 'Desarrollo Frontend Avanzado',
        professor: 'Ing. Laura Gómez',
        credits: 4,
        schedule: {
          day: 'Jueves',
          time: '14:00 - 16:00',
        },
        status: 'enrolled',
        finalGrade: null,
        assignments: [
          {
            id: 'assign4',
            title: 'Aplicación Angular con State Management',
            description:
              'Implementar una aplicación usando Angular y NgRx para gestión de estado.',
            dueDate: new Date('2024-12-22'),
            status: 'in progress',
            grade: null,
            resources: [
              {
                id: 'res5',
                name: 'NgRx Best Practices',
                type: 'PDF',
                url: 'https://example.com/ngrx-guide',
              },
            ],
          },
        ],
      },
      {
        id: 'sub5',
        name: 'Seguridad en Aplicaciones',
        professor: 'Dr. Roberto Pérez',
        credits: 3,
        schedule: {
          day: 'Viernes',
          time: '07:00 - 09:00',
        },
        status: 'enrolled',
        finalGrade: null,
        assignments: [
          {
            id: 'assign5',
            title: 'Análisis de Vulnerabilidades',
            description:
              'Realizar un análisis de seguridad completo de una aplicación web usando OWASP Top 10.',
            dueDate: new Date('2024-12-19'),
            status: 'pending',
            grade: null,
            resources: [
              {
                id: 'res6',
                name: 'OWASP Security Guide',
                type: 'PDF',
                url: 'https://example.com/owasp-guide',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Semestre 2024-2',
    user: {
      email: 'estudiante.software@universidad.edu',
      password: 'password123',
    },
    subjects: [
      {
        id: 'sub6',
        name: 'Desarrollo de Software II',
        professor: 'Ing. Pedro Ramírez',
        credits: 4,
        schedule: {
          day: 'Lunes',
          time: '09:00 - 11:00',
        },
        status: 'not enrolled',
        finalGrade: null,
        assignments: [],
      },
      {
        id: 'sub7',
        name: 'Cloud Computing',
        professor: 'Ing. Diana Torres',
        credits: 3,
        schedule: {
          day: 'Martes',
          time: '11:00 - 13:00',
        },
        status: 'not enrolled',
        finalGrade: null,
        assignments: [],
      },
    ],
  },
];

export default testData;
