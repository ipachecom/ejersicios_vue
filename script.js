new Vue({
	el: '#appVue',
	data: {
		lists: [],
		 newkeep: ''
	},
	methods: {
		addkeep(){
			this.lists.push({keep: this.newkeep , completed: false });
			this.newkeep ='';
		}
	}
	
});