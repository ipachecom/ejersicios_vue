var app= new Vue({
			el: '#app',
			data: {
				message: 'hola co vue'
			}
		})

		var app2 = new Vue({
			el: '#app-2',
			data:{
				message: 'usted cargo esta pagina '+ new Date().toLocaleString()
			}
		})

		var app3 = new Vue({
			el: '#app-3',
			data:{ seen: true }
		})
		var app4 = new Vue({
			el: '#app-4',
			data: {
				todos:[
				{text: 'aprender java'},
				{text: 'aprender HTML'},
				{text: 'apender PHP'},
				{text: 'aprender vue'}


				]
			}
		})

		var app5 = new Vue({
			el:"#app-5",
			data:{ message: 'hola vue.js'},
			methods: {
				reverseMessage: function(){
					this.message = this.message.split('').reverse().join('')

				}
			}
		})

		var app6 = new Vue({
			el: "#app-6",
			data: {
				message: 'hola vue.js'
			}
		})