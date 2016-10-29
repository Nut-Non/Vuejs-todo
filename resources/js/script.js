var vue_todo = new Vue({
	el:		'todo',
	data:	{
		newTodoText: '',
		todoList: [
			{ text: 'First todo.'		, done: true },
			{ text: 'Second todo.' 	, done: false },
			{ text: 'Third todo.' 	,	done: true },
		]
	},
	methods: {				
		// Add new todo to the list.
		addTodo: function() {
			var text = this.newTodoText.trim()
			if (text) {
				this.todoList.push({ text: text, done: false })
				this.newTodoText = ''
			}
		},
		
		// Toggle done.
		toggleDoneTodo: function(index) {
			this.todoList[index].done	=	!this.todoList[index].done
		},
		
		// Remove todo from todoList array.
		removeTodo: function (index) {
			this.todoList.splice(index, 1)
		},
		
		// Remove todo that is marked as done from the list.
		removeDone: function() {
			this.todoList = this.todoList.filter(function (todo) {
				return !todo.done
			})
		},
	},
})