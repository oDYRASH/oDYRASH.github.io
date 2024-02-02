<script setup>
    
    import navBar from "../components/navBar.vue";
    import makeApostForm from "../components/makeApostForm.vue"
    import postBuilder from "../components/postBuilder.vue"
    import gameCard from "../components/gameCard.vue"
    
    import { getMatchHistory } from '../scripts/lolData'
    import { getLastSessionGames } from '../scripts/utils'
    
    import { ref } from 'vue';


    const mainStats = ref([])
    const loading = ref(true)
    const setMaintStats = (gameObj) => {
        mainStats.value = [
            {
                title: 'KDA',
                value: gameObj.player.KDAstring
            },
            {
                title: 'CS / min',
                value: gameObj.player.CSmin
            },
            {
                title: 'DGT / min',
                value: gameObj.player.damagePerMinute
            }

        ]
    }

    const matchHistory = ref([])


    getMatchHistory().then(res => {
        loading.value = false
        matchHistory.value = res
    })

</script>

<template>

    <navBar/>

    <main class="makeApostContainer p-3 pt-5 w-100" style="overflow: auto;"><!-- (game) => {usedGameInConstructor = game} -->
        <makeApostForm :mainStats="mainStats"/>
        <postBuilder v-if="matchHistory" :sessionGame="matchHistory"/>
        <div v-if="loading">LOADING....</div>
        <div v-if="matchHistory" class="match-history d-flex flex-column scrollD">
                <gameCard v-for="match in matchHistory" :match="match" @newStatSelected="(gameObj) => setMaintStats(gameObj)"/><!-- @newUsedGameInConstructor="(args) => {usedGameInConstructor = {data:args[0], puuid:args[1]}; resetPreview()}" -->
        </div>
    </main>

</template>