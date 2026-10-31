// Exercise 2 - Task Board
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: add a task on submit (no reload, clear + focus the input, "Please type a task" error)
const form=document.getElementById('task-form')
const  text= document.getElementById("task-input")
const  priorety= document.getElementById("priority-select")
const  error= document.getElementById("error")
const taskList = document.getElementById("task-list")

form.addEventListener("submit",function(event){

event.preventDefault()
const t=text.value.trim()



if (t===""){
console.log(t)
error.textContent = "Please type a task";
error.hidden = false;
 return;
}
error.hidden = true;

const li =document.createElement("li")
li.classList.add(`priority-${priorety.value}`)

const span=document.createElement("span")
span.classList.add('text')
span.textContent=t;
  
const button=document.createElement("button")
button.classList.add("delete")
button.textContent = "x"

li.appendChild(span)
li.appendChild(button)

taskList.appendChild(li)

text.value = ""
text.focus()
})


// Step 2: click a task to toggle the "done" class

// Step 3: delete with the x button (one listener on the ul - event delegation)

// Step 4: "tasks left" counter

// Step 5: filters (All / Active / Done)

// Step 6: Clear completed

// Step 7: show the empty message only when there are no tasks

// Bonus: block duplicate tasks ("This task already exists")
