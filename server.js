// Agrega estas líneas al principio de tu archivo server.js, justo después de crear la app
const cors = require('cors');
app.use(cors({
  origin: '*', // En producción, limita esto a dominios específicos
  methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
  credentials: true
}));


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.send('API de Tareas funcionando correctamente');
});

// Conexión a MongoDB y arranque del servidor
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error conectando a MongoDB:', err.message);
  });

