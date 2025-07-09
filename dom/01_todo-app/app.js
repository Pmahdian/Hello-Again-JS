class TodoApp {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.currentFilter = 'all';
        
        this.selectElements();
        this.setupEventListeners();
        this.render();
    }

    selectElements() {
        this.taskInput = document.getElementById('taskInput');
        this.addBtn = document.getElementById('addBtn');
        this.taskList = document.getElementById('taskList');
        this.taskCount = document.getElementById('taskCount');
        this.clearCompletedBtn = document.getElementById('clearCompleted');
        this.filterButtons = document.querySelectorAll('.filter-btn');
    }

    setupEventListeners() {
        // Add new task
        this.addBtn.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

        // Filter tasks
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.dataset.filter;
                this.render();
            });
        });

        // Clear completed
        this.clearCompletedBtn.addEventListener('click', () => {
            this.tasks = this.tasks.filter(task => !task.completed);
            this.saveTasks();
        });
    }

    addTask() {
        const text = this.taskInput.value.trim();
        if (text) {
            this.tasks.push({
                id: Date.now(),
                text,
                completed: false,
                createdAt: new Date().toISOString()
            });
            this.taskInput.value = '';
            this.saveTasks();
        }
    }

    toggleComplete(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
        }
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
    }

    editTask(taskId, newText) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task && newText.trim()) {
            task.text = newText.trim();
            this.saveTasks();
        }
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        this.render();
    }

    render() {
        // Filter tasks
        let filteredTasks = [];
        switch (this.currentFilter) {
            case 'pending':
                filteredTasks = this.tasks.filter(task => !task.completed);
                break;
            case 'completed':
                filteredTasks = this.tasks.filter(task => task.completed);
                break;
            default:
                filteredTasks = [...this.tasks];
        }

        // Render tasks
        this.taskList.innerHTML = '';
        filteredTasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <span class="task-text ${task.completed ? 'completed' : ''}">
                    ${task.text}
                </span>
                <div class="task-actions">
                    <button class="action-btn complete-btn">
                        ${task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button class="action-btn edit-btn">Edit</button>
                    <button class="action-btn delete-btn">Delete</button>
                </div>
            `;

            // Add event listeners
            li.querySelector('.complete-btn').addEventListener('click', 
                () => this.toggleComplete(task.id));
            
            li.querySelector('.delete-btn').addEventListener('click', 
                () => this.deleteTask(task.id));
            
            li.querySelector('.edit-btn').addEventListener('click', 
                () => this.enableEditMode(li, task));

            this.taskList.appendChild(li);
        });

        // Update counter
        const pendingCount = this.tasks.filter(t => !t.completed).length;
        this.taskCount.textContent = `${pendingCount} ${pendingCount === 1 ? 'task' : 'tasks'} left`;
    }

    enableEditMode(taskElement, task) {
        const textSpan = taskElement.querySelector('.task-text');
        const currentText = textSpan.textContent;
        
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.className = 'edit-input';
        
        textSpan.replaceWith(input);
        input.focus();

        const saveEdit = () => {
            this.editTask(task.id, input.value);
            input.removeEventListener('blur', saveEdit);
        };

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') saveEdit();
        });

        input.addEventListener('blur', saveEdit);
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});