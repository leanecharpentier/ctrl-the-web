<template>
	<div>
		<h1>Explanation : </h1>
		<p>{{ ligne.question }}</p>
		<p>{{ ligne.answer }}</p>
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
				this.lignes = text.split('\n').filter(line => line.trim() !== '');
				this.lignes = this.lignes.map(line => {
					const [question, answer] = line.split(';');
					return {
						question: question.trim(),
						answer: answer ? answer.trim() : ''
					};
				});
			})
			.catch(err => console.error(err));
	},
	computed: {
		ligne() {
			return this.lignes[this.index - 1] || 'Ligne non trouvée';
		},
	},
};
</script>
