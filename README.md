# Todo App: Aplicación de Gestión de Tareas

Una aplicación web completa para gestionar tareas, construida con Node.js, Express, MongoDB en el backend y HTML, CSS y JavaScript vanilla en el frontend.


## Descripción

Todo App es una aplicación que permite a los usuarios crear, ver, actualizar y eliminar tareas. La aplicación sigue la arquitectura cliente-servidor, con un backend API RESTful que maneja las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y un frontend que proporciona una interfaz de usuario intuitiva.

## Tecnologías Utilizadas

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

## Demo

- **Frontend**: [https://diegoquilez.github.io/todo-api/](https://diegoquilez.github.io/todo-api/)
- **API Backend**: [https://todo-api-eynl.onrender.com/](https://todo-api-eynl.onrender.com/)

## Estructura del Proyecto

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

## Instalación y Ejecución Local

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

## 👨‍💻 Autor

Diego Quilez
