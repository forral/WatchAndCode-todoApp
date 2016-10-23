var todoList = {
	todos: [],
	displayTodos: function() {
		if(this.todos.length === 0) {
			console.log('Your todo list is empty!');
		} else {
			console.log('My Todos:');
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
					console.log('[X] ' + this.todos[i].todoText);
				} else {
					console.log('[ ] ' + this.todos[i].todoText);
				}
			}
		}
	},
	addTodo: function(todoText) {
		this.todos.push({
				todoText: todoText,
				completed: false
			});
		this.displayTodos();
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},
	toggleCompleted(position) {
		this.todos[position].completed = !this.todos[position].completed;
		this.displayTodos();
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
		this.displayTodos();
	}
};

var handlers = {
	displayTodos: function() {
		todoList.displayTodos();
	},
	toggleAll: function() {
		todoList.toggleAll();
	},
	addTodo: function() {
		var inputElement = document.getElementById('addTodoText');
		var todoText = inputElement.value;
		todoList.addTodo(todoText);
		inputElement.value = '';
	},
	changeTodo: function() {
		var changeTodoIndexEl = document.getElementById('changeTodoIndex');
		var position = changeTodoIndexEl.value;
		var changeTodoText = document.getElementById('changeTodoText');
		var todoText = changeTodoText.value;
		todoList.changeTodo(position, todoText);
		changeTodoIndexEl.value = '';
		changeTodoText.value = '';
	},
	deleteTodo: function() {
		var deleteTodoIndexEl = document.getElementById('deleteTodoIndex');
		var position = deleteTodoIndexEl.value;
		todoList.deleteTodo(position);
		deleteTodoIndexEl.value = '';
	},
	toggleCompleted: function() {
		var toggleIndexEl = document.getElementById('toggleIndex');
		var position = toggleIndexEl.value;
		todoList.toggleCompleted(position);
		toggleIndexEl.value = '';
	}
}