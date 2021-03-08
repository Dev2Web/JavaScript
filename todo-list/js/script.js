const form = document.getElementById('form')
const input = document.getElementById('input')
const tasksList = document.getElementById('tasks')

const tasks = JSON.parse(localStorage.getItem('tasks'))

if(tasks) {
    tasks.forEach(task => addtask(task))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addtask()
})

//Function to add tasks
function addtask(task) {
    let taskText = input.value

    if(task) {
        taskText = task.text
    }

    if(taskText) {
        const taskEl = document.createElement('li')
        if(task && task.completed) {
            taskEl.classList.add('completed')
        }

        taskEl.innerText = taskText

        taskEl.addEventListener('click', () => {
            taskEl.classList.toggle('completed')
            updateList()
        }) 

        taskEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            taskEl.remove()
            updateList()
        }) 

        tasksList.appendChild(taskEl)

        input.value = ''

        updateList()
    }
}
//end fanction addtask

//Function to update tasks
function updateList() {
    tasksEl = document.querySelectorAll('li')

    const tasks = []

    tasksEl.forEach(taskEl => {
        tasks.push({
            text: taskEl.innerText,
            completed: taskEl.classList.contains('completed')
        })
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))
}