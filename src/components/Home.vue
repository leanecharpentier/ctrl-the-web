<template>
    <div>
        <h1>Explanation of difficult questions</h1>
        <ul>
            <li v-for="(ligne, index) in lignes" :key="index">
                <router-link :to="`/ligne/${index}`">Question {{ index }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
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
            })
            .catch(err => console.error('Erreur lors du chargement du fichier :', err));
    },
};
</script>
