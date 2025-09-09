
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));


let tasks = [];

// read tasks
app.get('/tasks', (req, res) => {
    if (tasks.length === 0) {
        return res.send("Aucune tâche trouvée");
    }
    res.send(tasks);

});

// create a task
app.post('/tasks/add', (req, res) => {
    const task = {
        id: req.params.id,
        title: req.params.title,
        completed: req.params.completed || false,
    };
    tasks.push(task);
    res.send( `Tâche ${title} créée avec succès`)
});
// update a task
app.put('/tasks/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).send("Tâche non trouvée");
    }
    task.title = req.params.title || task.title;
    task.completed = req.params.completed || task.completed;
    res.send(task);
});
// delete a task
app.delete('/tasks/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.find(t => t.id === id);
    if (index === -1) {
        return res.status(404).send("Tâche non trouvée");
    }
    tasks.splice(index, 1);
    res.status(204).send();
});

// run server on port 3000
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});