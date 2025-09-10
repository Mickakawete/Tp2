
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


let tasks = [
    { id: 1, title: 'Tâche 1', completed: false },
    { id: 2, title: 'Tâche 2', completed: true },
    { id: 3, title: 'Tâche 3', completed: false },
];

// read tasks
app.get('/tasks', (req, res) => {
    if (tasks.length === 0) {
        return res.send("Aucune tâche trouvée");
    }
    res.json(tasks);
});

// create a task
app.post('/tasks', (req, res) => {
    const task = {
        id: tasks.length + 1,
        title: req.body.title,
        completed:  false,
    };
    tasks.push(task);
    return res.status(201).json(task);
});
// update a task
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).send("Tâche non trouvée");
    }
    task.title = req.body.title || task.title;
    task.completed = req.body.completed || task.completed;
    return res.json(task);
});
    // delete a task
    app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.find(t => t.id === id);
    if (index === -1) {
        return res.status(404).json("Tâche non trouvée");
    }
    tasks.splice(index, 1);
    return res.status(200).json();
});

// run server on port 3000
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});