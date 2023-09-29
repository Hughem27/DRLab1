//  (a) Create an array of strings.
let marksArray = [];
//  (b) Create an addTask function:
let addTask = (task) => {     //  (i)It receives a string as a parameter called task.
    let length = marksArray.push(task);  //  (ii) It adds the task to the array.
    console.log("Task: " + task + " added to Tasks") //  (iii) It prints a message in the console indicating the insertion.
    return length;
};

console.log(marksArray.length); //  (iv) It returns the number of elements in the array after the insertion.

//  (c) Create a listAllTasks function:
let listAllTasks = () => {
    marksArray.forEach(task => { //  (i) It iterates over all the tasks in the array.   This is a local variable, it  will work it out at run time - can be anything xyz, blue, red etc etc
        console.log(task);  //  (ii) It prints each array item in the console.
    });
}

// (d) Create a deleteTask function:
let deleteTask = (task) => {
    let index = marksArray.indexOf(task);   // i. It receives a string as a parameter called task.
    if(index > -1){
        marksArray.splice(index, 1); // ii. It removes that string from the array.
        console.log("Task " + task + " has been deleted");  // iii. It prints in console a message indicating the deletion.
    }
    else{  
        console.log("Task " + task + " does not exist");  
    }

  console.log("After Deletion of '" + task + "' the array now contains " + marksArray.length +" elements.");  // iv. It returns the number of elements in the array after the deletion. and states whats been deleted
};


addTask("Learn some JS");
addTask("Learn React");
listAllTasks();
deleteTask("Learn some JS");
deleteTask("Learn React");



