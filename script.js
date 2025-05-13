// URL de la API (cambia esto por la URL de tu API en Render)
const API_URL = 'https://todo-api-eynl.onrender.com/api/tasks';

// Elementos del DOM
const taskForm = document.getElementById('task-form');
const tasksList = document.getElementById('tasks-list');
const taskTitle = document.getElementById('task-title');
const taskDescription = document.getElementById('task-description');

// Cargar tareas al iniciar la aplicación
document.addEventListener('DOMContentLoaded', fetchTasks);

// Enviar el formulario para crear una nueva tarea
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();
    
    if (!title) return;
    
    const newTask = {
        title,
        description,
        completed: false
    };
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        });
        
        if (!response.ok) {
            throw new Error('Error al crear la tarea');
        }
        
        const createdTask = await response.json();
        
        // Limpiar formulario
        taskTitle.value = '';
        taskDescription.value = '';
        
        // Actualizar la lista de tareas
        fetchTasks();
        
    } catch (error) {
        console.error('Error:', error);
        alert('No se pudo crear la tarea. Inténtalo de nuevo.');
    }
});

// Función para obtener todas las tareas
async function fetchTasks() {
    tasksList.innerHTML = '<div class="loading">Cargando tareas...</div>';
    
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error('Error al obtener las tareas');
        }
        
        const tasks = await response.json();
        
        // Mostrar las tareas o un mensaje si no hay ninguna
        if (tasks.length === 0) {
            tasksList.innerHTML = '<div class="empty-tasks">No hay tareas. ¡Añade una!</div>';
        } else {
            renderTasks(tasks);
        }
        
    } catch (error) {
        console.error('Error:', error);
        tasksList.innerHTML = '<div class="empty-tasks">Error al cargar las tareas. Recarga la página.</div>';
    }
}

// Función para renderizar las tareas en el DOM
function renderTasks(tasks) {
    tasksList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = `task-item ${task.completed ? 'completed' : ''}`;
        taskElement.innerHTML = `
            <div class="task-content">
                <div class="task-title">${task.title}</div>
                <div class="task-description">${task.description || 'Sin descripción'}</div>
            </div>
            <div class="task-actions">
                <button class="btn-complete" data-id="${task._id}">
                    <i class="fas ${task.completed ? 'fa-times' : 'fa-check'}"></i>
                </button>
                <button class="btn-delete" data-id="${task._id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        tasksList.appendChild(taskElement);
    });
    
    // Añadir event listeners a los botones
    document.querySelectorAll('.btn-complete').forEach(button => {
        button.addEventListener('click', toggleTaskStatus);
    });
    
    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', deleteTask);
    });
}

// Función para cambiar el estado de una tarea (completada/pendiente)
async function toggleTaskStatus(e) {
    const taskId = e.currentTarget.dataset.id;
    const taskItem = e.currentTarget.closest('.task-item');
    const isCompleted = taskItem.classList.contains('completed');
    
    try {
        const response = await fetch(`${API_URL}/${taskId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: !isCompleted })
        });
        
        if (!response.ok) {
            throw new Error('Error al actualizar la tarea');
        }
        
        // Actualizar la interfaz
        taskItem.classList.toggle('completed');
        const icon = e.currentTarget.querySelector('i');
        icon.classList.toggle('fa-check');
        icon.classList.toggle('fa-times');
        
    } catch (error) {
        console.error('Error:', error);
        alert('No se pudo actualizar la tarea. Inténtalo de nuevo.');
    }
}

// Función para eliminar una tarea
async function deleteTask(e) {
    const taskId = e.currentTarget.dataset.id;
    
    if (!confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
        return;
    }
    
    try {
        // Primero eliminamos el elemento de la UI para una respuesta más rápida
        const taskElement = e.currentTarget.closest('.task-item');
        taskElement.remove();
        
        // Si ya no hay tareas, mostrar mensaje
        if (tasksList.children.length === 0) {
            tasksList.innerHTML = '<div class="empty-tasks">No hay tareas. ¡Añade una!</div>';
        }
        
        // Luego intentamos eliminar en el backend
        const response = await fetch(`${API_URL}/${taskId}`, {
            method: 'DELETE'
        });
        
        // Solo registramos en consola si hay error, no mostramos al usuario
        if (!response.ok) {
            console.error('Error al eliminar la tarea, pero la UI se actualizó correctamente');
        }
        
    } catch (error) {
        // Solo registramos el error en consola, no mostramos alerta al usuario
        console.error('Error:', error);
        // La tarea ya fue eliminada de la UI, así que no restauramos nada
    }
}
