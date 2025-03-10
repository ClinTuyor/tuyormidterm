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
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(taskElement);
    });
}

// Event listener for the form submission
document.getElementById('taskForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;

    if (taskName && taskDescription) {
        addTask(taskName, taskDescription);
        document.getElementById('taskForm').reset();
    }
});

// Initial render of tasks
renderTasks();