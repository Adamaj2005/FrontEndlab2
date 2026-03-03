let myTasks:Array<string>=[];

//Add a new task to the array and return the updated count
let addTask = (task: string):number=> {
    myTasks.push(task);
    console.log(task + " has been added to the array");
    return myTasks.length;
}

//displaying all tasks in the array 
function listAllTasks(): void {
    for(let i = 0; i < myTasks.length; i++) {
        console.log(myTasks[i]);
    }
}

// remove a specific task from the array
function deleteTask(task: string):number { 
    let index = myTasks.indexOf(task);
    if (index !== -1) {
        myTasks.splice(index, 1);
        console.log("The String has been deleted from the array");
    }
    else {
        console.log("Task not found in the array");
    }
    return myTasks.length;
}

// Testing the functions
addTask("Work");
addTask("Study");
addTask("Exercise");
listAllTasks();
deleteTask("Study");
listAllTasks();

export{};