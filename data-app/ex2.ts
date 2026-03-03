//define the struture for task manager
interface myInterface{
    MyArray :string[];
    addTask(task:string): number;
    listalltasks():void
    deleteTask(task:string): number;
}

// Implement the task manager using the interface
class Myclass implements myInterface {

    MyArray : string[] = [];

    //Add a task and return the new array length
    addTask(task: string): number {
        this.MyArray.push(task);
        console.log(task + "has been added to my task lists")
        return this.MyArray.length;
        
    }

    //Display all tasks in the list
    listalltasks(): void {
        for (let i = 0; i < this.MyArray.length; i++){
            console.log("task" + this.MyArray[i]);
        }
    }

    //Remove a task if it exists
    deleteTask(task: string): number {
        let index:number = this.MyArray.indexOf(task);

        if(index === -1){
            console.log(task + "Is not in my task list")
        }
        else{
            this.MyArray.splice(index,1);
            console.log(task + "Has been removed from my tasks list")
        }
        return this.MyArray.length;
    }

}
//Make a new task list and try it out 
let todo = new Myclass();
todo.addTask("Work");
todo.addTask("Study");
todo.addTask("Exercise");
todo.listalltasks();
todo.deleteTask("Study");
todo.listalltasks();

export {} ;