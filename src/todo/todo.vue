<template>
	<section class="real-app">
		<input
			type="text"
			class="add-input"
			autofocus="autofocus"
			placeholder="你要干啥"
			v-on:keyup.enter="addTodo"
		>
		<item
			:todo="todo"
			v-for="todo in filtedTodo"
			:key="todo.id"
			@del="deleteTodo"
		></item>
		<tabs
			:filter="filter"
			:todos="todos"
			@toggleFilter="toggleFilter"
			@clearAllCompleted="clearAllCompleted"
		></tabs>
	</section>
</template>

<script>
	import Item from './item.vue';
	import Tabs from './tabs.vue';
	export default {
		data() {
			return {
				id: 0,
				todos: [],
				filter: 'all'
			};
		},
		components: {
			item: Item,
			tabs: Tabs
		},
		methods: {
			addTodo: function(e){
				if (e.target.value.trim() !== '') {
					this.todos.unshift({
						id: this.id++,
						content: e.target.value.trim(),
						completed: false
					});
					e.target.value = '';
				}
			},
			deleteTodo: function(id) {
				this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
			},
			toggleFilter: function(state) {
				this.filter = state;
			},
			clearAllCompleted: function() {
				this.todos = this.todos.filter(todo => !todo.completed);
			}
		},
		computed: {
			filtedTodo: function() {
				if (this.filter === 'all') {
					return this.todos;
				}
				const completed = this.filter === 'completed';
				return this.todos.filter(todo => todo.completed === completed);
			}
		}
	};
</script>

<style lang="scss">
	.real-app {
		width: 600px;
		margin: 0 auto;
		box-shadow: 0 0 5px #666;
	}
	.add-input {
		position: relative;
		margin: 0;
		width: 100%;
		font-size: 24px;
		font-family: inherit;
		font-weight: inherit;
		line-height: 1.4em;
		outline: none;
		color: #444;
		border: 1px solid #999;
		box-sizing: border-box;
		padding: 16px 16px 16px 60px;
	}
</style>