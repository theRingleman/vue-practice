var app1 = new Vue({
  el: '#app1',
  data: {
    message: 'Hello World'
  }
})

var app2 = new Vue({
	el: '#app2',
	data: {
		message: 'This is a test!',
		title: 'This is another test of the title system!'
	}
})

var app3 = new Vue ({
	el: '#app3',
	data: {
		seen: true
	}
})

var app4 = new Vue({
	el: '#app4',
	data: {
		todos: [
			{text: 'Learn Javascript'},
			{text: 'Learn Vue'},
			{text: 'Build awesome things!'}
		]
	}
})

var app5 = new Vue({
	el: '#app5',
	data: {
		message: 'This is going to be reversed!'
	},
	methods: {
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
})

Vue.component('todo-item', {
	props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

var app6 = new Vue({
	el: '#app6',
	data: {
		groceryList: [
			{id: 1, text: 'Vegetables'},
			{id: 2, text: 'Cheese'},
			{id: 3, text: 'Anything else I need to buy'}
		]
	}
})

var app7 = new Vue({
	el: '#app7',
	data: {
		newName: '',
		names: ['Sam', 'Gwen', 'Cadee', 'Lilly']
	},
	methods: {
		addName(){
			this.names.push(this.newName)
			this.newName = '';
		}
	}
})

var app8 = new Vue({
	el: '#app8',
	data: {
		tasks: [
			{description: "Go to the store", completed: false},
			{description: "Finish test app", completed: false},
			{description: "Make this work", completed: false},
			{description: "Clear inbox", completed: true},
			{description: "Make dinner", completed: true},
			{description: "Clearn room", completed: false},
		]
	},
	computed: {

		incompleteTasks(){
			return this.tasks.filter(task => !task.completed)
		},

		completeTasks(){
			return this.tasks.filter(task => task.completed)
		}

	}
})