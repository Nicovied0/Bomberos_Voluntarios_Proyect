const express = require('express');
const router = express.Router();

// Obtener todos los todos
// router.get('/todos', async (req, res) => {
//   try {
//     const todos = await Todo.find();
//     res.json(todos);
//   } catch (error) {
//     console.error('Error al obtener los todos', error);
//     res.status(500).json({ error: 'Error al obtener los todos' });
//   }
// });

// // Crear un nuevo todo
// router.post('/todos', async (req, res) => {
//   try {
//     const { title } = req.body;
//     const todo = new Todo({
//       title,
//     });
//     await todo.save();
//     res.json(todo);
//   } catch (error) {
//     console.error('Error al crear el todo', error);
//     res.status(500).json({ error: 'Error al crear el todo' });
//   }
// });

module.exports = router;