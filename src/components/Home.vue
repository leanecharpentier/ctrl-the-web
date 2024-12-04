<template>
    <div>
        <h1>Explanation of difficult questions</h1>
        <ul>
            <li v-for="(question, index) in questions" :key="index">
                <router-link :to="`/explanation/${index+1}`">{{ question }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lignes: [],
            questions: []
        };
    },
    created() {
        fetch('/file.txt')
            .then(response => response.text())
            .then(text => {
                this.lignes = text.split('\n').filter(line => line.trim() !== '');
                this.questions = this.lignes.map(line => {
                    const firstPart = line.split(';')[0].trim();
                    return firstPart;
                });
            })
            .catch(err => console.error('Erreur lors du chargement du fichier :', err));
    },
};
</script>
