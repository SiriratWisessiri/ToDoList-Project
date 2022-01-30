//Initialise the TaskManager class from taskManager.js
const taskManager = new TaskManager()


// display date
const date = new Date();
document.getElementById("date").innerHTML = date.toLocaleDateString();

// Date picker for due date can only start from current date
var today = new Date().toISOString().split('T')[0];
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
 
  //This to test task 7 step 2
//   let taskHtml = createTaskHtml ("cat", "cat eat dog", "cat evil", "tomorrow", "to do");
//   console.log(taskHtml);
 
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