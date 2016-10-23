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

		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		} else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
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
	deleteTodo: function() {
		var deleteTodoIndexEl = document.getElementById('deleteTodoIndex');
		var position = deleteTodoIndexEl.value;
		todoList.deleteTodo(position);
		deleteTodoIndexEl.value = '';
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

		for (var i = 0; i < todoList.todos.length; i++) {
			var todoLi = document.createElement('li');
			var todo = todoList.todos[i];
			var todoTextWithCompletion = '';

			if (todo.completed === true) {
				todoTextWithCompletion = '[x] - ' + todo.todoText;
			} else {
				todoTextWithCompletion = '[ ] - ' + todo.todoText;
			}

			todoLi.textContent = todoTextWithCompletion;
			todosUl.appendChild(todoLi);
		} 
	}
}