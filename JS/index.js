//Initialise the TaskManager class from taskManager.js
const taskManager = new TaskManager()

// Task9: In js/index.js, near the top of the file, after instantiating taskManager, 
//load the tasks with taskManager.load() and render them with taskManager.render().
taskManager.load();
taskManager.render();

// display date
const date = new Date;
document.getElementById("date").innerHTML = date.toLocaleDateString("en-GB");


/* const dateElement = document.querySelector("#date");
let date = new Date();
const [ day,month, year] = [ date.getDate(), date.getMonth(), date.getFullYear()];
let dateString = `Current Date: ${day} / ${month} / ${year}`;
dateElement.innerHTML = dateString; */


// Date picker for due date can only start from current date
let today = new Date().toISOString().split('T')[0];
document.getElementsByName("dueDate")[0].setAttribute('min', today);

// this is to check task form is greater than 5
const newTaskNameInput = document.querySelector('#newTaskNameInput');
const description = document.querySelector('#description');
const assigned = document.querySelector('#assigned');
const dueDate = document.querySelector('#dueDate');
const astatus = document.querySelector('#astatus');

//submit form
function submitForm() {
    console.log(newTaskNameInput.value);
    if (newTaskNameInput.value.length < 5 || description.value.length < 5 || assigned.value.length < 5
        || dueDate.value.length === 0 || astatus.value.length === 0 )
    {
        alert("Invalid Input!(all field needs to be more than 5 characters)");
    } else {
        taskManager.addTask(newTaskNameInput.value, description.value, assigned.value, dueDate.value, astatus.value);
        taskManager.save()
        taskManager.render();
        console.log(taskManager);
        alert('Well done you legend');
        document.querySelector("form").reset();
    }
}

let submit = document.getElementById('submit');
 submit.addEventListener("click", function(event){
    event.preventDefault();
    submitForm();
  });

//Task 8 Done button. Update a task, add event listener to task-list
const taskList = document.querySelector("#task-list");
taskList.addEventListener('click', (event) => {
if(event.target.classList.contains("done-button")){
    const doneParentTask = event.target.parentElement.parentElement.parentElement;
    //console.log(parentTask);
    const taskId = doneParentTask.dataset.taskId;
    //console.log(taskId);
    const task = taskManager.getTaskById(taskId);
    //console.log(task);
    task.status = "Done";
    taskManager.save();
    taskManager.render();
    }
//Task 10 Dlete button
// 1.In js/index.js, find the EventListener for the click event on the Tasks List we created in Task 8.
// 2.At the bottom of the function, after our code that handles the "Done" button, create a new if statement to check if the event.target.classList contains the class 'delete-button'.
// 3.If it does, get the parentTask and store it as a variable.
// 4.Get the taskId of the parent task from its data-task-id property - remember, since it's stored as a string in a data attribute, we need to convert it to a number, just like we did for task 8!
// 5.Delete the task, passing the taskId to taskManager.deleteTask()
// 6.Save the tasks to localStorage using taskManager.save()
// 7.Render the tasks using taskManager.render().
    if(event.target.classList.contains("delete-button")){
        const deleteParentTask = event.target.parentElement.parentElement.parentElement;
        const taskId = deleteParentTask.dataset.taskId;
        taskManager.deleteTask(taskId);
        taskManager.save();
        taskManager.render();
    }
    });
 
    


// Try delete button function that doesn't work
/* let taskListParent = document.getElementById('task-list');
let taskListchild = taskListParent.getElementsByClassName('card-body');
button
delete-button.addEventListener('click', () => {
    taskListchild.removeChild();
}) 
///////
function deleteButton() {
    let deleteTarget = document.getElementsByClassName("delete-button");
    deleteTarget.remove();
}

let deleteBtn = document.getElementsByClassName("delete-button");
deleteBtn.addEventListener("click",deleteButton()); */

//trial remove botton
// let taskListParent = document.getElementById('task-list');
// let taskListchild = taskListParent.getElementsByClassName('card-body');
// let deleteButton = document.getElementById('delete');

// deleteButton.addEventListener('click', () => {
//     taskListchild.removeChild();
// }) 

//Test collaps
// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// }

