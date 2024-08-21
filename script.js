const repostarAPI = [
    { id: 1, descricao: "organizar a casa" },
    { id: 2, descricao: "fut" },
    { id: 3, descricao: "arrumar as roupas" },
    { id: 4, descricao: "ajudar meu pai" },
    { id: 5, descricao: "estudar" }
];

document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function createTaskElement(task) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';

        const taskLabel = document.createElement('span');
        taskLabel.textContent = task.descricao;

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-btn';
        removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

        removeButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(removeButton);

        return taskItem;
    }

    function init() {
        repostarAPI.forEach(task => {
            const taskElement = createTaskElement(task);
            taskList.appendChild(taskElement);
        });
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText) {
            const newTask = {
                id: Date.now(),
                descricao: taskText
            };
            const taskElement = createTaskElement(newTask);
            taskList.appendChild(taskElement);
            taskInput.value = ''; 
        }
    }

    init();

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

