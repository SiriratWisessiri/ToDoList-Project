
const createTaskHtml = (name, description, assignedTo, dueDate, status, collapsId) => {
  const html = 
  `<li class="listCard card">
    <div class="card-body">
    <h5 class="card-title">Task: ${name}</h5>
    <div class = "cardBtn">
    <button class="btn btn-outline-primary " type="button" data-toggle="collapse" data-target="#${collapsId}" aria-expanded="false" aria-controls="${collapsId}">
      Details
    </button>
    <button type="button" class="btn btn-outline-warning btn-sm" ><span class="material-icons">edit</span></button>
    <button type="button" class="btn btn-outline-danger btn-sm"><span class="material-icons">delete</span></button>
    <button type="button" class="done-button btn btn-outline-success btn-sm"><span class="material-icons">
    done
    </span></button>
      </div>
    <div class="collapse" id="${collapsId}">
    <p class="card-text">${description}</p>
    <p class="card-text">Assigne to: ${assignedTo}</p>
    <p class="card-text">Due date: ${dueDate}</p>
    <p class="card-text"><b>Status: ${status}</b></p>
      </div>
    </div>
  </li>`;
  return html;
};

// console.log()



// Take Manager class to add new task 
class TaskManager {
  static count = 0
  constructor() {
      this.tasks = [];
      this.currentId = TaskManager.count;
      TaskManager.count++
      this.taskCreated = 0;
  }
// Create the addTask method
  addTask(name, description, assignedTo, dueDate, status) {
      console.log(this.currentId)
      // const task = {
      // id: this.taskCreated,
      // name: name,
      // description: description,
      // assignedTo: assignedTo,
      // dueDate: dueDate,
      // status: status
      // };
      const task = new Task(name, description, assignedTo, dueDate, status);
  
      this.tasks.push(task);
      this.taskCreated++;
  }
  
// Create render() method
  render(){
    const tasksHtmlList = [];
    for (let i = 0; i < this.tasks.length; i++){
      const task = this.tasks[i];
      const date = new Date(task.dueDate)
      const formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      const taskHtml = createTaskHtml (
        task.name, 
        task.description, 
        task.assignedTo,
        formattedDate, 
        task.status,
        task.id
      );
      tasksHtmlList.push(taskHtml);
    } 
    const tasksHtml  = tasksHtmlList.join("\n");

  // Set the inner html of the tasksList on the page
  const tasksList = document.querySelector("#task-list");
  tasksList.innerHTML = tasksHtml;

  }
}

// separate the task from the "addTask" method to create another class, advised by Albert
class Task {
  static count = 0
  constructor(name, description, assignedTo, dueDate, status){
      this.id = `taskId_${Task.count}`
      this.name = name
      this.description = description
      this.assignedTo = assignedTo
      this.dueDate = dueDate
      this.status = status
      Task.count++
  }
}



// const taskManager = new TaskManager();
// taskManager.addTask('Clean', 'description', 'assignedTo', 'dueDate', 'status');

// taskManager.addTask('Clean', 'description', 'assignedTo', 'dueDate', 'status');

// taskManager.addTask('Clean', 'description', 'assignedTo', 'dueDate', 'status');

// console.log(taskManager.tasks);
// console.log(taskManager.taskCreated);
// taskManager.tasks.pop();
// console.log(taskManager.tasks);
// console.log(taskManager.taskCreated);

