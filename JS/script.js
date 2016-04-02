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
	// Unordered list 
	var ulTask = document.getElementById("taskList");
	// Creating an list item element 
	var liTask = document.createElement("li");

	// Creating the complete button for the list item
	var completeButton = document.createElement("button");

	completeButton.setAttribute("id", taskInput);

	// Concatenate to make unique idenifier 
	liTask.setAttribute("id", taskInput + "_liTask");
	// alert("HERE" + li.id);

	completeButton.setAttribute("id", taskInput);
	completeButton.setAttribute("class", "circle-button-img");

	// Text for button
 	// var t = document.createTextNode("delete");
	// completeButton.appendChild(t);	

	completeButton.addEventListener("click", removeDelete);

	liTask.appendChild(completeButton);
	liTask.appendChild(document.createTextNode(taskInput));
	ulTask.appendChild(liTask);
	// alert(li.id);
}

function removeDelete() {
	var tasks_ul = document.getElementById("taskList");
	var id = this.getAttribute("id");

	// Delete button
	document.getElementById(id).remove();
	// Delete list item 
	document.getElementById(id + "_liTask").remove();

	// alert(id + "_li");
}

function displayInputBox() {
	var inputBox = document.getElementById("input-task-box");
	var overlay = document.getElementById("tint-overlay");
	overlay.style.display = "block";
	inputBox.style.display = "block";

}