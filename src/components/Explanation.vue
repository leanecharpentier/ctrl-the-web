<template>
	<div>
		<h1>Explanation : </h1>
		<p>{{ ligne }}</p>
	</div>
</template>

<script>
export default {
	props: ['index'],
	data() {
		return {
			lignes: [],
		};
	},
	created() {
		fetch('/file.txt')
			.then(response => response.text())
			.then(text => {
				this.lignes = text.split('\n');
			})
			.catch(err => console.error(err));
	},
	computed: {
		ligne() {
			return this.lignes[this.index] || 'Ligne non trouvée';
		},
	},
};
</script>
