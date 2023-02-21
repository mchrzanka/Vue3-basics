//object that we can use to configure this app. There are options for the app, or predefined keys, such as data and method. Data wants a function.
const app = Vue.createApp({
	// data: function(){}
	data() {
		//data always returns an object. ALWAYS. In this object, we can return any key value pairs with any key of your choice. Anything we return can now be used in your webpage. For example we use this message in our p tag, via {{courseGoal}} (called interpolation). It will then output the courseGoal on the page.
		return {
			courseGoal: 'Get good at programming in Vue.',
			courseGoalA: 'Finish the course and learn Vue.',
			courseGoalB: 'Create some awesome Vue apps.',
			courseGoalC: '<h3>This is an html tag element</h3>',
			vueLink: 'https://vuejs.org/guide/quick-start.html',
		};
	},

	//methods allow you to define functions when you need something to happen through interaction, such as a button click.
	methods: {
		// outputGoal: function(){}
		outputGoal() {
			const randomNumber = Math.random();
			if (randomNumber < 0.5) {
				//I have access to the data because of the behind the scenes magic that vue does, so if I say this.whatever, it takes it from this instance of Vue and knows what data I need.
				return this.courseGoalA;
			} else {
				return this.courseGoalB;
			}
		},
	},
});

//connects the vue stuff to the section we need it in via a css class.
app.mount('#user-goal');
