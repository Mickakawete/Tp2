# Tp3

A RESTful CRUD API built with Express for task management.

## Features

- **Create a task**: Add a new task.
- **Read tasks**: List all tasks.
- **Read only completed tasks**: List tasks with status "completed".
- **Update a task**: Edit the title and/or status of a task.
- **Update only task status**: Change only the status of a task.
- **Delete a task**: Remove a task by its ID.

### API Routes

| Method | Endpoint                | Description                                 |
|--------|------------------------ |---------------------------------------------|
| GET    | `/tasks`                | Returns all tasks                           |
| GET    | `/tasks/completed`      | Returns only completed tasks                |
| POST   | `/tasks`                | Creates a new task                          |
| PUT    | `/tasks/:id`            | Updates the title and/or status of a task   |
| DELETE | `/tasks/:id`            | Deletes a task by its ID                    |

#### Example Task Object

```json
{
  "id": 1,
  "title": "Task 1",
  "completed": false
}

## Contributors

- Mickael
- Priscilla