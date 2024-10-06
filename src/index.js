document.addEventListener('DOMContentLoaded', () => {
	const taskForm = document.getElementById('create-task-form');
	const tasksList = document.getElementById('tasks');
	const taskInput = document.getElementById('new-task-description');
	const prioritySelect = document.getElementById('priority');

	taskForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const taskDescription = taskInput.value.trim();
		const priority = prioritySelect.value;

		if (taskDescription) {
			addTask(taskDescription, priority);
			taskForm.reset();
			taskInput.focus();
		}
	});

	function addTask(description, priority) {
		const li = document.createElement('li');
		li.classList.add(priority);

		const taskDesc = document.createElement('span');
		taskDesc.textContent = description;
		taskDesc.classList.add('task-description');

		const buttonsDiv = document.createElement('div');
		buttonsDiv.classList.add('task-buttons');

		const deleteButton = createButton('Delete', () => li.remove());
		const editButton = createButton('Edit', () => editTask(taskDesc));

		buttonsDiv.appendChild(editButton);
		buttonsDiv.appendChild(deleteButton);

		li.appendChild(taskDesc);
		li.appendChild(buttonsDiv);
		tasksList.appendChild(li);
	}

	function createButton(text, onClick) {
		const button = document.createElement('button');
		button.textContent = text;
		button.addEventListener('click', onClick);
		return button;
	}

	function editTask(taskElement) {
		const newDescription = prompt('Edit task:', taskElement.textContent);
		if (newDescription && newDescription.trim()) {
			taskElement.textContent = newDescription.trim();
		}
	}
});
