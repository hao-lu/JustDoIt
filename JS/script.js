"use strict"; 

function justDidIt() {
	document.getElementById("test").innerHTML = "Just Did It";
}

function enterClicked() {
	var taskInput, inputBox, overlay
	taskInput = document.getElementById("input-task").value;
	if (taskInput === "") {
		alert("Enter something");
	}
	else {
		addTask(taskInput);
		}	
	// Clear the input box
	taskInput = document.getElementById("input-task").value = "";

	inputBox = document.getElementById("input-task-box");	
	overlay = document.getElementById("tint-overlay");
	overlay.style.display = "none";
	inputBox.style.display = "none";
}

function addTask(taskInput) {
	var ulTask, liTask, circleBtn;
	ulTask = document.getElementById("taskList");
	// Creating an list item element 
	liTask = document.createElement("li");

	// Concatenate to make unique idenifier 
	liTask.setAttribute("id", taskInput + "_liTask");

	// Creating the complete button for the list item
	circleBtn = document.createElement("button");
	circleBtn.setAttribute("id", taskInput);
	circleBtn.setAttribute("class", "circle-button-img");
	circleBtn.addEventListener("click", removeDelete);

	liTask.appendChild(circleBtn);
	liTask.appendChild(document.createTextNode(taskInput));
	ulTask.appendChild(liTask);
}

function removeDelete() {
	var tasks_ul = document.getElementById("taskList");
	var id = this.getAttribute("id");

	// Delete button
	document.getElementById(id).remove();
	// Delete list item 
	document.getElementById(id + "_liTask").remove();
}

function displayInputBox() {
	var inputBox = document.getElementById("input-task-box");
	var overlay = document.getElementById("tint-overlay");
	overlay.style.display = "block";
	inputBox.style.display = "block";
}