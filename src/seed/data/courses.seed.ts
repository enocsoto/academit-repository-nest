import { v4 as uuid } from 'uuid';
import { ICourses } from '../interfaces';

export const coursesSEED: ICourses[] = [
  {
    id: uuid(),
    title: 'Node.js',
    description:
      'Node.js is a JavaScript runtime built on Chrome V8 JavaScript engine.',
  },
  {
    id: uuid(),
    title: 'JavaScript',
    description:
      'JavaScript is a high-level, interpreted, object-oriented programming language.',
  },
  {
    id: uuid(),
    title: 'TypeScript',
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
];
