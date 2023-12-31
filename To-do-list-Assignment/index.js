const readline = require('readline');
const fs = require('fs');
let todoList = require('./todolist.json')




const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function display() {
    todoList.forEach((task) => {
        console.log(`${task.id}. ${task.task}`);
    });
}

function saveToFile(message) {
    fs.writeFileSync('./todolist.json', JSON.stringify(todoList, null, 2), (err) => {
        if (err) throw err;
    });
    console.log(message);
}

function askQuestion() {
    rl.question('What do you want to do? (display(1)/add(2)/update(3)/delete(4) ', (action) => {
        switch (action) {
            case 'display':
            case '1':
                display();
                askQuestion();
                break;
            case 'add':
            case '2':
                rl.question('What do you want to add? ', (task) => {
                    let id = Math.floor(Math.random() * 100);
                    while (todoList.find(task => task.id === id)) {
                        id = Math.floor(Math.random() * 100);
                    }
                    todoList.push({ id, task });
                    saveToFile('Task added successfully');
                    askQuestion();
                });
                break;
            case 'update':
            case '3':
                display();
                rl.question('Enter the id of the task you want to update: ', (id) => {
                    id = parseInt(id);
                    const task = todoList.find(task => task.id === id);
                    if (task) {
                        rl.question('Enter the new task: ', (newTask) => {
                            todoList = todoList.map(task => task.id === id ? {id, task: newTask} : task);
                            saveToFile('Task updated successfully');
                            askQuestion();
                        });
                    } else {
                        console.log('Invalid id');
                        askQuestion();
                    }
                });
                break;
            case 'delete':
            case '4':
                display();
                rl.question('Enter the id of the task you want to delete: ', (id) => {
                    id = parseInt(id);
                    const task = todoList.find(task => task.id === id);
                    if (task) {
                        todoList = todoList.filter(task => task.id !== id);
                        saveToFile('Task deleted successfully');
                        askQuestion();
                    } else {
                        console.log('Invalid id');
                        askQuestion();
                    }
                });
                break;
            default:
                console.log('Invalid action please enter a valid action');
                askQuestion();
                break;
        }
    });
}

askQuestion();

