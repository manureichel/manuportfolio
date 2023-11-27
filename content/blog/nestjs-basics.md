---
external: false
title: "Exploring NestJS: A TypeScript Framework for Scalable Node.js Applications"
description: "NestJS is a powerful and versatile framework for building scalable server-side applications in Node.js."
date: 2023-11-27
---

## Introduction to NestJS

NestJS is a leading TypeScript framework designed for developing highly scalable, flexible, and production-ready Node.js back-end applications. Boasting over 52,000 stars and 6300 forks on GitHub, NestJS stands out as one of the most popular TypeScript frameworks for Node.js.

Moreover, NestJS supports various JavaScript versions, including ES6, ES7, and ES8, allowing developers to create back-end applications using pure JavaScript or its derivatives, such as TypeScript.

## Key Features of NestJS

### 1. TypeScript Integration

NestJS leverages TypeScript, a strongly typed programming language, to compose back-end applications. This choice enhances stability and reliability by reducing errors related to type checking and inconsistencies, particularly crucial for large-scale and enterprise applications.

### 2. Powerful CLI (Command Line Interface)

NestJS provides a robust Command Line Interface (CLI) program, enabling developers to build applications without relying on graphical user interfaces. The CLI allows for easy creation and management of various NestJS framework components, including databases, modules, controllers, and service files, all through simple commands.

### 3. Developer-Friendly Documentation

NestJS places a strong emphasis on developer-friendly documentation. The comprehensive and easy-to-understand documentation covers a wide range of development questions and provides clear instructions on initiating projects with the framework.

### 4. Microservice Architecture

Supporting microservice architecture development, NestJS facilitates seamless integration with popular microservice tools such as Kafka, gPRC, RabbitMQ, and more.

### 5. Support for Popular Libraries

NestJS expedites application development by adhering to industry standards and best practices. It comes preconfigured with a variety of features, including TypeORM, Mongoose, GraphQL, logging, validation, caching, and web sockets, supporting developers with a powerful set of tools.

In summary, NestJS offers a robust environment for developers to create scalable and efficient Node.js back-end applications, combining the benefits of TypeScript and a feature-rich framework.

## NestJS vs. Express.js: Choosing the Right Framework for Your Project

### Overview

NestJS and Express.js serve as popular choices for building web applications and APIs, both leveraging the Node.js runtime to execute JavaScript on the server side.

#### NestJS

Inspired by Angular, NestJS adopts a modular structure that facilitates the organization of code into reusable components. It introduces a module system for code separation and incorporates built-in support for dependency injection, streamlining the management of dependencies within the application.

#### Express.js

Express.js, on the other hand, stands as a minimalist web framework tailored for Node.js. Offering a straightforward set of functions, it is designed to be lightweight and flexible, serving as the foundation for various web frameworks and libraries.

### Choosing the Right Framework

The selection between NestJS and Express.js hinges on your project's specific requirements and preferences.

- **NestJS:**

  - Ideal for large, scalable applications.
  - Leverages a modular structure inspired by Angular.
  - Incorporates a robust module system and built-in support for dependency injection.

- **Express.js:**
  - Suitable for those seeking a lightweight and easy-to-start framework.
  - Provides a simple set of tools for building web applications and APIs.
  - Known for its flexibility and widely adopted in the development community.

Ultimately, the best framework for your project depends on factors such as project size, scalability needs, and your preference for a modular structure with dependency injection (NestJS) or a lightweight, flexible solution (Express.js).

### NestJS Architecture

NestJS employs a three-tier architecture to enhance modularity, allowing developers to organize their code into three distinct components for more organized development:

1. **Controllers:**

   - Act as intermediaries for client requests and responses.
   - Handle incoming requests and return responses to clients via HTTP.
   - Created with classes and decorators, mapping class methods to routes and processing specific requests.

2. **Services:**

   - Utilize NestJS providers to inject services as dependencies, forming the foundation of the application.
   - Contain business logic and offer methods for CRUD operations, such as creating, retrieving, updating, and deleting data.
   - Establish relationships between components, controllers, and other parts of the application through service injection.

3. **Data Access Layer:**
   - Responsible for accessing data stored in persistent storage.
   - Located at the lowest level, deals with the database, encapsulates data access details, and provides an access interface for the upper layer.

### Setting up NestJS

Armed with an understanding of NestJS and its architectural components, let's put this knowledge into practice by creating a simple NestJS project. Our focus will be on building a to-do list app.

#### Prerequisites

Before delving into the creation of our to-do app using NestJS, ensure you have the following prerequisites in place:

1. **Basic Terminal Knowledge:**

   - Familiarity with basic terminal commands.

2. **Node.js Installed:**

   - Ensure Node.js is installed on your system.

3. **Knowledge of JavaScript and Node.js:**

   - A fundamental understanding of JavaScript and Node.js.

4. **Knowledge of Postman:**
   - Familiarity with Postman for testing APIs.

Now, let's take the next steps to build our to-do list application (API) using NestJS.

### Step 1: Install the CLI

To kickstart your NestJS application, the initial step involves installing the Nest CLI. Execute the following command:

```bash
$ npm i -g @nestjs/cli
$ nest new nest-todo-app
```

This command installs the NestJS CLI globally, allowing you to use the `nest` command. With the CLI in place, proceed to create a new project named `nest-todo-app`.

This command not only initializes a new project but also prompts you to choose your preferred package manager. In this example, we'll opt for `npm`. Feel free to select other JavaScript or TypeScript package managers like `yarn` if you prefer.

### Step 2: Run the Demo Application

By default, creating a project using the NestJS CLI generates a demo app. To test this app, navigate to your project's root directory and execute the following command:

```bash
$ npm run start:dev
```

To maintain a clean structure, consider deleting all `app.**.ts` TypeScript files except the `app.module.ts` file.

Upon opening the project in `localhost`, you should see a `Hello World` output.

### Step 3: Create a Controller

As mentioned earlier, controllers in NestJS handle incoming HTTP requests from an application's front end and return appropriate responses.

The `nest` command proves useful for creating, generating, and modifying NestJS controllers, offering boilerplate code generation capabilities. To create a controller, use the following command:

```bash
$ nest generate controller todo
```

This command generates two files: `todo.controller.spec.ts` for writing unit tests (outside the scope of this tutorial and can be ignored) and `todo.controller.ts`, a TypeScript file adorned with the `@Controller` annotation.

For our to-do list app, open the `todo.controller.ts` file and replace its contents with the following code:

```typescript
// directory - nest-todo-app/src/todo/todo.controller.ts

import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Body,
  Put,
  Query,
  Delete,
  Post,
} from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDTO } from "./dto/create-todo.dto";
@Controller("todos")
export class TodoController {
  constructor(private todoService: TodoService) {}

  // Create a todo
  @Post("/")
  async create(@Res() res, @Body() createTodoDTO: CreateTodoDTO) {
    const newTodo = await this.todoService.addTodo(createTodoDTO);
    return res.status(HttpStatus.OK).json({
      message: "Todo has been submitted successfully!",
      todo: newTodo,
    });
  }

  // Fetch a particular todo using ID
  @Get("/:todoID")
  async getTodo(@Res() res, @Param("todoID") todoID) {
    const todo = await this.todoService.getTodo(todoID);
    if (!todo) {
      throw new NotFoundException("Todo does not exist!");
    }
    return res.status(HttpStatus.OK).json(todo);
  }

  // Fetch all todos
  @Get("/")
  async getTodos(@Res() res) {
    const todos = await this.todoService.getTodos();
    return res.status(HttpStatus.OK).json(todos);
  }

  // Edit a particular todo using ID
  @Put("/")
  async editTodo(
    @Res() res,
    @Query("todoID") todoID,
    @Body() createTodoDTO: CreateTodoDTO
  ) {
    const editedTodo = await this.todoService.editTodo(todoID, createTodoDTO);
    if (!editedTodo) {
      throw new NotFoundException("Todo does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Todo has been successfully updated",
      todo: editedTodo,
    });
  }

  // Delete a todo using ID
  @Delete("/delete")
  async deleteTodo(@Res() res, @Query("todoID") todoID) {
    const deletedTodo = await this.todoService.deleteTodo(todoID);
    if (!deletedTodo) {
      throw new NotFoundException("Todo does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Todo has been deleted!",
      todo: deletedTodo,
    });
  }
}
```

The provided code implements basic CRUD operations with the following logic:

- **Create Method:**

  - Handles the creation of a new to-do entry.
  - Utilizes the HTTP POST method.

- **getTodo and getTodos Methods:**

  - Use the HTTP GET method.
  - `getTodo` retrieves a single to-do entry.
  - `getTodos` retrieves all existing to-dos.

- **editTodo Method:**

  - Employs the HTTP PUT method.
  - Modifies or updates an existing to-do entry.

- **deleteTodo Method:**
  - Uses the HTTP DELETE method.
  - Enables the removal of a specific to-do entry.

The pivotal aspect is that every operation is controlled by the service class, ensuring the separation of business logic from actual data manipulation.

### Step 4: Create a Service

NestJS services play a crucial role in managing complex business logic and data manipulations for a specific purpose, providing the controller with an appropriate response.

To create a service, utilize the following command:

```bash
$ nest generate service todo
```

This command generates a `todo.service.ts` file, where you can implement the necessary business logic for handling to-do-related operations. Services help maintain a clean separation between business logic and controller responsibilities in your NestJS application.

Let's edit this file:

```typescript
// directory - nest-todo-app/src/todo/todo.service.ts

import { Injectable } from "@nestjs/common";
import { CreateTodoDTO } from "./dto/create-todo.dto";

// Creates a Todo interface to show exactly the attribute of our Todo
interface Todo {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly isDone: boolean;
}

@Injectable()
export class TodoService {
  // Creates a Todo array with one Todo
  private todos: Todo[] = [
    {
      id: 1,
      title: "Test todo",
      description: "This is a demo Todo application",
      isDone: true,
    },
  ];

  // Creates a new todo (Add todo to array)
  async addTodo(createTodoDTO: CreateTodoDTO): Promise<Todo> {
    this.todos.push(createTodoDTO);

    // return last added item
    return this.todos.at(-1);
  }

  // Returns a single todo with ID
  async getTodo(todoID: number): Promise<Todo> {
    const post = this.todos.find((todo) => todo.id === todoID);
    return post;
  }

  // Returns all todos available
  async getTodos(): Promise<Todo[]> {
    return this.todos;
  }

  // Deletes a todo by ID and add a new one (Update process)
  async editTodo(postID: number, createTodoDTO: CreateTodoDTO): Promise<Todo> {
    await this.deleteTodo(postID);
    this.todos.push(createTodoDTO);

    // return last added item
    return this.todos.at(-1);
  }

  // Deletes a todo from the array
  async deleteTodo(todoID: number): Promise<any> {
    const todoIndex = this.todos.findIndex((todo) => todo.id === todoID);
    return this.todos.splice(todoIndex, 1);
  }
}
```

Since we're not interfacing with a real database, the provided code executes a basic CRUD operation using straightforward JavaScript array manipulations.

### Step 5: Create a Module

Modules in NestJS play a pivotal role in organizing your project into distinct features, facilitating easy structuring and separation of different functionalities. A module, annotated with the `@Module()` decorator, contributes to the overall organization of the application structure.

Execute the following command to create a module named `todo`:

```bash
$ nest generate module todo
```

This command generates a todo.module.ts file, providing a structured way to organize and encapsulate functionality related to the to-do feature in your NestJS application.

To observe how NestJS wires and sets up everything, take a look at the app.module.ts (root module), where controllers' providers are imported.

```typescript
import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";

import { AppService } from "./app.service";

import { TodoController } from "./todo/todo.controller";

import { TodoService } from "./todo/todo.service";

import { TodoModule } from "./todo/todo.module";

@Module({
  imports: [TodoModule],

  controllers: [AppController, TodoController],

  providers: [AppService, TodoService],
})
export class AppModule {}
```

### Step 6: Create a Data Transfer Object (DTO)

In the final step, we create a Data Transfer Object (DTO) to precisely define how data is transmitted across the network and how data is posted from the application to the database.

Follow these steps to create the DTO:

1. Create a directory named "DTO" inside your `todo` folder.
2. Within this directory, create a file named `create-todo.dto.ts`.

This DTO file will serve as a structured way to define the data format for creating a to-do entry in your NestJS application.

```typescript
// directory - nest-todo-app/src/todo/dto/create-todo.dto.ts

export class CreateTodoDTO {
  readonly id: number;

  readonly title: string;

  readonly description: string;

  readonly isDone: boolean;
}
```

### Testing the NestJS Framework

With the NestJS application created, it's time to put it to the test.

Ensure your development server is running. If not, start it with the following command:

```bash
$ npm run start:dev
```

Now, open Postman and test the endpoints by performing CRUD operations as defined in `todo.service.ts`. If everything is set up correctly, your to-do list API should function seamlessly without errors.

## Conclusion

In conclusion, NestJS showcases significant potential to revolutionize and transform the landscape of back-end application development. Its versatility, flexibility, and modularity render it an attractive choice for developers.

For a deeper understanding of NestJS and its functionalities, explore the official NestJS documentation [here](https://docs.nestjs.com/).
