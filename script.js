const tasks = ["first task", "second task", "third task"];


//Print tasks on page
const article = document.querySelector("article");
let tasksList = document.createElement("ul");

for (let i = 0; i < tasks.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = tasks[i];
    tasksList.append(listItem);
  }
article.append(tasksList);