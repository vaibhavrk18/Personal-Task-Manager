const tasks = [];

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDate = document.getElementById('taskDate').value;

    if (!taskName || !taskDate) {
        alert('Please enter both task name and due date.');
        return;
    }

    const task = {
        name: taskName,
        date: taskDate
    };

    tasks.push(task);
    displayTasks();
    clearForm();
}

function clearTasks() {
    tasks.length = 0;
    displayTasks();
}

function displayTasks() {
    const tasksDiv = document.getElementById('tasks');
    tasksDiv.innerHTML = tasks.map(task => `<p class="fade-in">Task: ${task.name}, Due: ${task.date}</p>`).join('');
}

function clearForm() {
    document.getElementById('taskName').value = '';
    document.getElementById('taskDate').value = '';
}

function showDateInfo() {
    const now = new Date();
    const dateInfoDiv = document.getElementById('dateInfo');
    dateInfoDiv.innerHTML = `
        <p class="fade-in">Current Date: ${now.toDateString()}</p>
        <p class="fade-in">Current Time: ${now.toTimeString()}</p>
        <p class="fade-in">Day of the Month: ${now.getDate()}</p>
        <p class="fade-in">Day of the Week: ${now.getDay()}</p>
        <p class="fade-in">Year: ${now.getFullYear()}</p>
        <p class="fade-in">Hours: ${now.getHours()}</p>
        <p class="fade-in">Minutes: ${now.getMinutes()}</p>
        <p class="fade-in">Seconds: ${now.getSeconds()}</p>
    `;
}
/*
Explanation of the Animations
fadeIn: Gradually increases the opacity of an element from 0 to 1, making it appear smoothly.
slideIn: Slides the container from a position above the viewport into its place, giving a smooth entrance.
zoomIn: Zooms in the form groups from a smaller scale to their original size.
expand: Expands the input fields from a width of 0 to their full width.
pulse: Changes the background color of the tasks and date info sections in a pulsating manner.
bounceIn: Bounces the buttons into view from below, adding a dynamic effect.
moveIn: Moves the title from the left side of the viewport to its position.
*/