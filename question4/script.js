// In-memory array to store tasks
let tasks = [];

// Function to generate a unique ID for each task
function generateId() {
    return tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
}

// Function to add a new task
function addTask(name, description) {
    const newTask = {
        id: generateId(),
        name: name,
        description: description
    };
    tasks.push(newTask);
    renderTasks();
}

// Function to view all tasks
function getAllTasks() {
    return tasks;
}

// Function to update a task
function updateTask(id, updatedName, updatedDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = updatedName;
        task.description = updatedDescription;
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// Function to render tasks in the UI
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <div>
                <strong>${task.name}</strong>
                <p>${task.description}</p>
            </div>
            <div>
                <button class="edit" onclick="openEditForm(${task.id})">Edit</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskElement);
    });
}

// Function to open the edit form
function openEditForm(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        // Populate the form with the task details
        document.getElementById('taskName').value = task.name;
        document.getElementById('taskDescription').value = task.description;

        // Change the form's submit button to "Update Task"
        const form = document.getElementById('taskForm');
        form.onsubmit = function (event) {
            event.preventDefault();

            const updatedName = document.getElementById('taskName').value;
        }
    }
}