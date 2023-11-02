import { v4 as uuid } from 'uuid';
import { IStudent } from '../interfaces/student.interface';

export const studentsSeed: IStudent[] = [
  {
    id: uuid(),
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '1234567980',
    courses: ['javascript', 'typescript'],
    documentId: 1234567890,
    age: 25,
  },
  {
    id: uuid(),
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    courses: ['node.js'],
    documentId: 1023456789,
    age: 26,
  },
  {
    id: uuid(),
    firstName: 'juanita',
    lastName: 'Perez',
    age: 24,
    courses: ['typescript'],
    phone: ' 111123338',
    email: 'juanitaprueba@mail.om',
    documentId: 123131231,
  },
  {
    id: uuid(),
    firstName: 'pedro',
    lastName: 'González',
    age: 30,
    courses: ['javascript'],
    phone: ' 555666777',
    email: 'pedrogonzalez@mail.om',
    documentId: 45346373,
  },
  {
    id: uuid(),
    firstName: 'maría',
    lastName: 'López',
    age: 28,
    courses: ['node.js'],
    phone: ' 999888777',
    email: 'marialopez@mail.om',
    documentId: 11223344,
  },
  {
    id: uuid(),
    firstName: 'carlos',
    lastName: 'Martínez',
    age: 26,
    courses: ['typescript'],
    phone: ' 330222111',
    email: 'carlosmartinez@mail.om',
    documentId: 777888999,
  },
  {
    id: uuid(),
    firstName: 'laura',
    lastName: 'Rodríguez',
    age: 22,
    courses: ['javascript'],
    phone: ' 444555666',
    email: 'laurarodriguez@mail.om',
    documentId: 441433322,
  },
  {
    id: uuid(),
    firstName: 'juan',
    lastName: 'Sánchez',
    age: 25,
    courses: ['node.js'],
    phone: ' 9999000111',
    email: 'juansanchez@mail.om',
    documentId: 155566677,
  },
  {
    id: uuid(),
    firstName: 'andrea',
    lastName: 'Gómez',
    age: 27,
    courses: ['typescript'],
    phone: ' 222111333',
    email: 'andreagomez@mail.om',
    documentId: 199988888,
  },
  {
    id: uuid(),
    firstName: 'javier',
    lastName: 'Fernández',
    age: 29,
    courses: ['javascript'],
    phone: ' 333111222',
    email: 'javierfernandez@mail.om',
    documentId: 777755566,
  },
  {
    id: uuid(),
    firstName: 'roberto',
    lastName: 'Pérez',
    age: 23,
    courses: ['typescript'],
    phone: ' 666595444',
    email: 'robertoperez@mail.om',
    documentId: 9876543213,
  },
  {
    id: uuid(),
    firstName: 'paola',
    lastName: 'González',
    age: 32,
    courses: ['javascript'],
    phone: ' 339222111',
    email: 'paolagonzalez@mail.om',
    documentId: 1112231344,
  },
  {
    id: uuid(),
    firstName: 'alejandro',
    lastName: 'Martínez',
    age: 24,
    courses: ['node.js'],
    phone: ' 444551666',
    email: 'alejandromartinez@mail.om',
    documentId: 770888999,
  },
  {
    id: uuid(),
    firstName: 'lucía',
    lastName: 'Rodríguez',
    age: 28,
    courses: ['typescript'],
    phone: ' 232111333',
    email: 'luciarodriguez01@mail.om',
    documentId: 124433322,
  },
  {
    id: uuid(),
    firstName: 'andrés',
    lastName: 'Sánchez',
    age: 27,
    courses: ['javascript'],
    phone: ' 199000111',
    email: 'andressanchez@mail.om',
    documentId: 255566677,
  },
  {
    id: uuid(),
    firstName: 'camila',
    lastName: 'Gómez',
    age: 26,
    courses: ['node.js'],
    phone: ' 111123732',
    email: 'camilagomez@mail.om',
    documentId: 299988888,
  },
  {
    id: uuid(),
    firstName: 'carolina',
    lastName: 'Fernández',
    age: 25,
    courses: ['typescript'],
    phone: ' 666585444',
    email: 'carolinafernandez@mail.om',
    documentId: 177755566,
  },
  {
    id: uuid(),
    firstName: 'eduardo',
    lastName: 'López',
    age: 29,
    courses: ['javascript'],
    phone: ' 333222118',
    email: 'eduardolopez@mail.om',
    documentId: 1023455678,
  },
  {
    id: uuid(),
    firstName: 'marcela',
    lastName: 'Pérez',
    age: 30,
    courses: ['node.js'],
    phone: ' 444525666',
    email: 'marcelaperez@mail.om',
    documentId: 84545664,
  },
  {
    id: uuid(),
    firstName: 'francisco',
    lastName: 'González',
    age: 31,
    courses: ['typescript'],
    phone: ' 222311333',
    email: 'franciscogonzalez@mail.om',
    documentId: 344433322,
  },
  {
    id: uuid(),
    firstName: 'valentina',
    lastName: 'Martínez',
    age: 24,
    courses: ['javascript'],
    phone: ' 299000111',
    email: 'valentinamartinez@mail.om',
    documentId: 355566677,
  },
  {
    id: uuid(),
    firstName: 'jorge',
    lastName: 'Rodríguez',
    age: 27,
    courses: ['node.js'],
    phone: ' 111125332',
    email: 'jorgerodriguez@mail.om',
    documentId: 499988888,
  },
  {
    id: uuid(),
    firstName: 'isabella',
    lastName: 'Sánchez',
    age: 25,
    courses: ['typescript'],
    phone: ' 666555447',
    email: 'isabellasanchez@mail.om',
    documentId: 277755566,
  },
  {
    id: uuid(),
    firstName: 'raúl',
    lastName: 'Fernández',
    age: 26,
    courses: ['javascript'],
    phone: ' 333222117',
    email: 'raulfernandez@mail.om',
    documentId: 193455678,
  },
  {
    id: uuid(),
    firstName: 'sofía',
    lastName: 'López',
    age: 23,
    courses: ['node.js'],
    phone: ' 4124555666',
    email: 'sofialopez@mail.om',
    documentId: 67454563,
  },
  {
    id: uuid(),
    firstName: 'antonio',
    lastName: 'Pérez',
    age: 28,
    courses: ['typescript'],
    phone: ' 222117333',
    email: 'antonioperez@mail.om',
    documentId: 544433322,
  },
  {
    id: uuid(),
    firstName: 'andrea',
    lastName: 'González',
    age: 29,
    courses: ['javascript'],
    phone: ' 399000111',
    email: 'andreagonzalez@mail.om',
    documentId: 455566677,
  },
  {
    id: uuid(),
    firstName: 'carlos',
    lastName: 'Martínez',
    age: 24,
    courses: ['node.js'],
    phone: ' 411123332',
    email: 'carlosmartinez02@mail.om',
    documentId: 699988888,
  },
  {
    id: uuid(),
    firstName: 'paola',
    lastName: 'Rodríguez',
    age: 30,
    courses: ['typescript'],
    phone: ' 666655444',
    email: 'paolarodriguez@mail.om',
    documentId: 377755566,
  },
  {
    id: uuid(),
    firstName: 'luis',
    lastName: 'Sánchez',
    age: 26,
    courses: ['javascript'],
    phone: ' 333222611',
    email: 'luissanchez@mail.om',
    documentId: 183455678,
  },
  {
    id: uuid(),
    firstName: 'valeria',
    lastName: 'López',
    age: 27,
    courses: ['node.js'],
    phone: ' 443555666',
    email: 'valerialopez@mail.om',
    documentId: 345373435,
  },
  {
    id: uuid(),
    firstName: 'javier',
    lastName: 'Pérez',
    age: 28,
    courses: ['typescript'],
    phone: ' 222111833',
    email: 'javierperez@mail.om',
    documentId: 484433322,
  },
  {
    id: uuid(),
    firstName: 'sofía',
    lastName: 'González',
    age: 29,
    courses: ['javascript'],
    phone: ' 499000111',
    email: 'sofiagonzalez@mail.om',
    documentId: 655566677,
  },
  {
    id: uuid(),
    firstName: 'diego',
    lastName: 'Martínez',
    age: 25,
    courses: ['node.js'],
    phone: ' 111123332',
    email: 'diegomartinez@mail.om',
    documentId: 799988888,
  },
  {
    id: uuid(),
    firstName: 'lucía',
    lastName: 'Rodríguez',
    age: 24,
    courses: ['typescript'],
    phone: ' 666455444',
    email: 'luciarodriguez@mail.om',
    documentId: 477755566,
  },
  {
    id: uuid(),
    firstName: 'sergio',
    lastName: 'Sánchez',
    age: 28,
    courses: ['javascript'],
    phone: ' 333252111',
    email: 'sergiosanchez@mail.om',
    documentId: 1234955678,
  },
  {
    id: uuid(),
    firstName: 'firstName',
    lastName: 'López',
    age: 30,
    courses: ['node.js'],
    phone: ' 447555666',
    email: 'analopez@mail.om',
    documentId: 9876543251,
  },
  {
    id: uuid(),
    firstName: 'raúl',
    lastName: 'Pérez',
    age: 23,
    courses: ['typescript'],
    phone: ' 222191333',
    email: 'raulperez@mail.om',
    documentId: 449433322,
  },
  {
    id: uuid(),
    firstName: 'maría',
    lastName: 'González',
    age: 32,
    courses: ['javascript'],
    phone: ' 989000111',
    email: 'mariagonzalez@mail.om',
    documentId: 955566677,
  },
  {
    id: uuid(),
    firstName: 'andrés',
    lastName: 'Martínez',
    age: 26,
    courses: ['node.js'],
    phone: ' 1113332',
    email: 'andresmartinez@mail.om',
    documentId: 969988888,
  },
  {
    id: uuid(),
    firstName: 'isabella',
    lastName: 'Rodríguez',
    age: 25,
    courses: ['typescript'],
    phone: ' 666550444',
    email: 'isabellarodriguez@mail.om',
    documentId: 577755566,
  },
  {
    id: uuid(),
    firstName: 'pablo',
    lastName: 'Sánchez',
    age: 31,
    courses: ['javascript'],
    phone: ' 333222111',
    email: 'pablosanchez@mail.om',
    documentId: 123455678,
  },
  {
    id: uuid(),
    firstName: 'laura',
    lastName: 'López',
    age: 24,
    courses: ['node.js'],
    phone: ' 444555866',
    email: 'lauralopez@mail.om',
    documentId: 14422435,
  },
  {
    id: uuid(),
    firstName: 'juan',
    lastName: 'Pérez',
    age: 28,
    courses: ['typescript'],
    phone: ' 222115333',
    email: 'juanperez@mail.om',
    documentId: 444433322,
  },
  {
    id: uuid(),
    firstName: 'carolina',
    lastName: 'González',
    age: 30,
    courses: ['javascript'],
    phone: '0999000111',
    email: 'carolinagonzalez@mail.om',
    documentId: 555566677,
  },
  {
    id: uuid(),
    firstName: 'javier',
    lastName: 'Martínez',
    age: 29,
    courses: ['node.js'],
    phone: '111123339',
    email: 'javiermartinez@mail.om',
    documentId: 999988888,
  },
];

export default studentsSeed;