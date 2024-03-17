import { Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";

const todos: Todo[] = [];

// Create a new todo item
export const createTodo = (req: Request, res: Response, next: NextFunction) => {
    try {
        const task = (req.body as {task: string}).task;
        const newTodo = new Todo(Math.random().toString(), task);
        todos.push(newTodo);
        res.status(201).json({
            message: 'Created new todo',
            createdTask: newTodo
        });
    } catch (error) {
        console.log(error);
    }
}

// Lists all todo items
export const getTodos = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(201).json({
            tasks: todos
        })
    } catch (error) {
        console.log(error);
    }
}

// Updates existing todo item
export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
    try {
        const todoId = req.params.id;
        const updatedTask = (req.body as {task: string}).task;
        const todoIndex = todos.findIndex(todo => todo.id === todoId);

        if (todoIndex < 0) {
            throw new Error('Could not find a todo witch such ID');
        }

        todos[todoIndex] = new Todo(todos[todoIndex].id, updatedTask);

        res.status(201).json({
            message: 'Todo has been updated!',
            updatedTask: todos[todoIndex]
        })
        
    } catch(error) {
        console.log(error);
    }
}