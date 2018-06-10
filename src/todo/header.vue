<template>
	<header class="main-header">
		<h1>{{title}}</h1>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Something to do'
			};
		}
	};
</script>

<style lang="scss">
	.main-header {
		text-align: center;
		h1 {
			font-size: 100px;
			color: rgba(175, 47, 47, 1);
			font-weight: 100;
			margin: 20px;
		}
	}
</style>