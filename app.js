var todoList = {
	todos: [],
	addTodo: function(todoText) {
		this.todos.push({
				todoText: todoText,
				completed: false
			});
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
	},
	toggleCompleted(position) {
		this.todos[position].completed = !this.todos[position].completed;
	},
	toggleAll: function() {
		var completedTodos = 0;
		var totalTodos = this.todos.length;

		this.todos.forEach(function(todo){
			if (todo.completed === true) {
				completedTodos++;
			}
		});

		this.todos.forEach(function(todo) {
			if (completedTodos === totalTodos) {
				todo.completed = false;
			} else {
				todo.completed = true;
			}
		});
	}
};

var handlers = {
	toggleAll: function() {
		todoList.toggleAll();
		view.displayTodos();
	},
	addTodo: function() {
		var inputElement = document.getElementById('addTodoText');
		var todoText = inputElement.value;
		todoList.addTodo(todoText);
		inputElement.value = '';
		view.displayTodos();
	},
	changeTodo: function() {
		var changeTodoIndexEl = document.getElementById('changeTodoIndex');
		var position = changeTodoIndexEl.value;
		var changeTodoText = document.getElementById('changeTodoText');
		var todoText = changeTodoText.value;
		todoList.changeTodo(position, todoText);
		changeTodoIndexEl.value = '';
		changeTodoText.value = '';
		view.displayTodos();
	},
	deleteTodo: function(position) {
		todoList.deleteTodo(position);
		view.displayTodos();
	},
	toggleCompleted: function() {
		var toggleIndexEl = document.getElementById('toggleIndex');
		var position = toggleIndexEl.value;
		todoList.toggleCompleted(position);
		toggleIndexEl.value = '';
		view.displayTodos();
	}
};

var view = {
	displayTodos: function() {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';

		todoList.todos.forEach(function(todo, position){
			var todoLi = document.createElement('li');
			var todoTextWithCompletion = '';

			if (todo.completed === true) {
				todoTextWithCompletion = '[x] - ' + todo.todoText + ' ';
			} else {
				todoTextWithCompletion = '[ ] - ' + todo.todoText + ' ';
			}

			todoLi.id = position;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}, this);
	},
	createDeleteButton: function() {
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setUpEventListeners: function() {
		var todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function(e) {
			if (e.target.className === 'deleteButton') {
				handlers.deleteTodo(parseInt(e.target.parentElement.id));
			}
		});
	}
};

view.setUpEventListeners();