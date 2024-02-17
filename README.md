# M-Todo
Hello friends! This is a project for educational purposes, I wanted to expose myself to typescript, bun and tailwindcss. So, I decided to make a todo app! I also used prisma as a database, something I've never used before.

## How does it work?
I started with making a schema for the database, which is take a `title - string`, `complete - boolean`, these 2 are our main attributes the title represents the name of the todo, and the complete is to check if that todo is completed or not. 
After that, I created a React Component which I called `TodoItem` and it's designed to represent a todo item within a todo list.

### Props
In that component I passed these props:

```
id (string): Unique identifier for the todo item.
title (string): Title or description of the todo item.
complete (boolean): Completion status of the todo item.
toggleTodo (function): Function to toggle the completion status of the todo item.
deleteTodo (function): Function to delete the todo item.
```

## What happens if?
Yes, the todos are saved even if you refresh the page.

## Home Component
The Home component is a React functional component responsible for rendering a TODO list interface.

### Imports
`prisma`: The Prisma client instance used to interact with the database.
`TodoItem`: A custom component used to render individual TODO items.
`redirect`: A function provided by Next.js used to redirect the user to another page.

### Functions
`getTodos()`: An asynchronous function that retrieves all TODO items from the database using Prisma's findMany() method.

`toggleTodo(id: string, complete: boolean)`: An asynchronous function that updates the completion status of a TODO item in the database. It sets the complete field of the TODO item with the specified id to the provided complete value.

`deleteTodo(id: string)`: An asynchronous function that deletes a TODO item from the database. It removes the TODO item with the specified id from the database.

`CreateTodo(data: FormData)`: An asynchronous function that creates a new TODO item in the database based on the data provided in a FormData object. It extracts the title from the FormData and uses it to create a new TODO item with the complete field set to false.

## Component Structure

`Form`: Allows users to create new TODO items. It consists of an input field where users can enter the title of the new TODO item and a submit button to create it.

`TODO List`: Renders the list of TODO items retrieved from the database using the `getTodos()` function. Each TODO item is rendered using the TodoItem component, passing in the necessary props such as id, title, complete, toggleTodo, and deleteTodo.


## Get Started!
Do you want to try it on your machine? If so, follow these steps:

1. Clone the repository `git clone https://wwww.github.com/m-bobi/m-todo`
2. Open the project in your IDE of choice.
3. Change the name of `.env.example` to `.env`
4. Run `bun install` or `npm install` or `yarn install`
5. After that run `bun run dev` or `npm run dev`
6. Enjoy! Feel free to change anything.

## Visual

![Todo App gif](/public/assets/TODO.gif)
