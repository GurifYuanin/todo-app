<template>
	<div id="app">
		<div id="cover"></div>
		<main-header></main-header>
		<todo></todo>
		<main-footer></main-footer>
	</div>
</template>

<script>
	import Header from './todo/header.vue';
	import Footer from './todo/footer.jsx';
	import Todo from './todo/todo.vue';

	export default {
		components: {
			mainHeader: Header,
			mainFooter: Footer,
			todo: Todo
		}
	};
</script>

<style lang="scss">
	#app {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		color: white;
	}
	#cover {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: #999;
		opacity: .5;
		z-index: -1;
	}
</style>