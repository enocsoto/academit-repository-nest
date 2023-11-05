<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

# Backend API Students

## Modelo Student

### Operaciones CRUD

#### 1. Crear un Estudiante

- **Ruta:** POST `/api/students`
- **Descripción:** Crea un nuevo estudiante en la base de datos.

#### 2. Obtener todos los Estudiantes

- **Ruta:** GET `/api/students`
- **Descripción:** Obtiene la lista de todos los estudiantes.

#### 3. Obtener un Estudiante por ID

- **Ruta:** GET `/api/students/:id`
- **Descripción:** Obtiene un estudiante por su ID.

#### 4. Actualizar un Estudiante

- **Ruta:** PUT `/api/students/:id`
- **Descripción:** Actualiza los datos de un estudiante existente.

#### 5. Eliminar un Estudiante

- **Ruta:** DELETE `/api/students/:id`
- **Descripción:** Cambia el estado de un estudiante a inactivo (borrado lógico).

## Modelo Course

### Operaciones CRUD

#### 1. Crear un Curso

- **Ruta:** POST `/api/courses`
- **Descripción:** Crea un nuevo curso en la base de datos.

#### 2. Obtener todos los Cursos

- **Ruta:** GET `/api/courses`
- **Descripción:** Obtiene la lista de todos los cursos.

#### 3. Obtener un Curso por ID

- **Ruta:** GET `/api/courses/:id`
- **Descripción:** Obtiene un curso por su ID.

#### 4. Actualizar un Curso

- **Ruta:** PUT `/api/courses/:id`
- **Descripción:** Actualiza los datos de un curso existente.

#### 5. Eliminar un Curso

- **Ruta:** DELETE `/api/courses/:id`
- **Descripción:** Cambia el estado de un curso a inactivo (borrado lógico).

## Modelo Auth

### Operaciones de Autenticación

#### 1. Registro de Usuario

- **Ruta:** POST `/api/auth/register`
- **Descripción:** Registra un nuevo usuario en el sistema.

#### 2. Inicio de Sesión

- **Ruta:** POST `/api/auth/login`
- **Descripción:** Inicia sesión en el sistema y proporciona un token de autenticación.

#### 3. Verificar Usuario Autenticado

- **Ruta:** GET `/api/auth/verify`
- **Descripción:** Verifica si un usuario está autenticado a través del token.

#### 4. Cerrar Sesión

- **Ruta:** POST `/api/auth/logout`
- **Descripción:** Cierra la sesión de un usuario autenticado.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
## Step by Step

1. Clone the repository

2. Change the environment variables and the `.env.template` file to `.env`.

3. Start the database with the command `docker-compose up -d`.

4. Start on dev: ```yarn start:dev```.

5. Executed SEED:
  `http://localhost:3000/api/seed/student`,  
  `http://localhost:3000/api/seed/course`.

## Stay in touch

- Author - [Enoc Soto](https://github.com/enocsoto)
- Facebook - [https://nestjs.com](https://nestjs.com/)
- Instagram - [@nestframework](https://instagram.com/enocdj)

