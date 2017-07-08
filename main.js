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