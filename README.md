# Todo App: Aplicación de Gestión de Tareas

Una aplicación web completa para gestionar tareas, construida con Node.js, Express, MongoDB en el backend y HTML, CSS y JavaScript vanilla en el frontend.


## Descripción

Todo App es una aplicación que permite a los usuarios crear, ver, actualizar y eliminar tareas. La aplicación sigue la arquitectura cliente-servidor, con un backend API RESTful que maneja las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y un frontend que proporciona una interfaz de usuario intuitiva.

## 🌟 Características

- ✅ Crear nuevas tareas con título y descripción
- 📋 Ver lista de todas las tareas
- 🔄 Marcar tareas como completadas/pendientes
- 🗑️ Eliminar tareas
- 💾 Persistencia de datos usando MongoDB Atlas
- 🌐 Backend desplegado en Render
- 🖥️ Frontend desplegado en GitHub Pages

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor
- **Express**: Framework web para Node.js
- **MongoDB**: Base de datos NoSQL
- **Mongoose**: ODM (Object Data Modeling) para MongoDB y Node.js
- **CORS**: Middleware para habilitar solicitudes entre diferentes dominios

### Frontend
- **HTML5**: Estructura del contenido web
- **CSS3**: Estilizado y diseño visual
- **JavaScript**: Lógica del cliente e interactividad
- **Font Awesome**: Iconos para la interfaz

### Despliegue
- **MongoDB Atlas**: Base de datos como servicio (DBaaS)
- **Render**: Plataforma de despliegue para el backend
- **GitHub Pages**: Plataforma de despliegue para el frontend

## 🚀 Demo

- **Frontend**: [https://diegoquilez.github.io/todo-api/](https://diegoquilez.github.io/todo-api/)
- **API Backend**: [https://todo-api-eynl.onrender.com/](https://todo-api-eynl.onrender.com/)

## 📝 API Endpoints

| Método | URL | Descripción |
|--------|-----|-------------|
| GET | /api/tasks | Obtener todas las tareas |
| POST | /api/tasks | Crear una nueva tarea |
| GET | /api/tasks/:id | Obtener una tarea específica por ID |
| PATCH | /api/tasks/:id | Actualizar una tarea específica |
| DELETE | /api/tasks/:id | Eliminar una tarea específica |

## 🔧 Estructura del Proyecto

```
todo-api/
├── models/                # Modelos de datos MongoDB
│   └── Task.js            # Modelo para las tareas
├── routes/                # Rutas de la API
│   └── tasks.js           # Endpoints para las tareas
├── index.html             # Página principal del frontend
├── styles.css             # Estilos CSS para el frontend
├── script.js              # JavaScript para el frontend
├── server.js              # Punto de entrada del servidor
├── package.json           # Dependencias y scripts
└── .env                   # Variables de entorno (no incluido en el repositorio)
```

## ⚙️ Instalación y Ejecución Local

### Requisitos Previos
- Node.js (v14 o superior)
- npm (v6 o superior)
- MongoDB (local o Atlas)

### Pasos para Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/DiegoQuilez/todo-api.git
   cd todo-api
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   - Crear un archivo `.env` en la raíz del proyecto
   - Añadir las siguientes variables:
     ```
     PORT=5000
     MONGODB_URI=tu_cadena_de_conexion_mongodb
     ```

4. **Iniciar el servidor**
   ```bash
   npm run dev
   ```

5. **Acceder a la aplicación**
   - Backend: http://localhost:5000
   - Frontend: Abrir `index.html` en tu navegador o usar un servidor local

## 🧪 Posibles Mejoras Futuras

- 🔐 Autenticación de usuarios
- 📱 Diseño responsive mejorado
- 🏷️ Categorías/etiquetas para las tareas
- 📅 Fechas de vencimiento para tareas
- 🔔 Notificaciones
- 🔍 Búsqueda y filtrado de tareas
- 📊 Estadísticas de productividad

## 📜 Licencia

Este proyecto está bajo la Licencia ISC - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

Diego Quilez

---

⭐️ Si te gusta este proyecto, ¡no dudes en darle una estrella en GitHub! ⭐️
