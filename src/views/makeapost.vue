<script setup>
    
    import navBar from "../components/navBar.vue";
    import makeApostForm from "../components/makeApostForm.vue"
    import postBuilder from "../components/postBuilder.vue"
    import { ref } from 'vue';
    import gameCard from "../components/gameCard.vue"
    import { getSummoner, getAllMatches } from '../scripts/lolApi.js'


    const usedGameInConstructor = ref(false)

    const statsPreview = ref({
        "placeHolder_1":{
                title:"KDA",
                value:"0 / 0 / 9"
            },
        "placeHolder_2":{
                title:"CS/min",
                value:"8.2"
            },
        "placeHolder_3":{
                title:"DMG/min",
                value:"621"
            }
    })

    function resetPreview(){
        statsPreview.value = {
        "placeHolder_1":{
                title:"KDA",
                value:"0 / 0 / 9"
            },
        "placeHolder_2":{
                title:"CS/min",
                value:"8.2"
            },
        "placeHolder_3":{
                title:"DMG/min",
                value:"621"
            }
    }
    }

    function updateStatPreview(a, b){

        for (let key in statsPreview.value) {

            if (key.includes('placeHolder')) {
                let keyIndex = key.split('_')[1];
                let newKey = 'stat_' + keyIndex;
                statsPreview.value[newKey] = { title: a, value: b };
                delete statsPreview.value[key];

                localStorage.setItem('formStats', JSON.stringify(statsPreview.value))

                break
            }

        }

    }


</script>

<script>
    export default {
        data() {
            return {
            loading: false,
            matchHisto: null,
            error: null,
            }
        },
        created() {
            // watch the params of the route to fetch the data again
            this.$watch(
            () => this.$route.params,
            () => {
                this.fetchData()
            },
            // fetch the data when the view is created and the data is
            // already being observed
            { immediate: true }
            )
        },
        methods: {
            fetchData() {
                
                this.loading = true
                // replace `getPost` with your data fetching util / API wrapper

                const userConnections = JSON.parse(localStorage.getItem('discordConnectionsUser'))
                let lolUserName = userConnections.filter(item => "leagueoflegends" == item.type)[0]["name"]
                getSummoner('euw1', lolUserName).then(res => {

                    localStorage.setItem("LOLpuuid", res.puuid)


                    getAllMatches('euw1', res.puuid ).then(res => {
                        this.loading = false
                        this.matchHisto = res
                    })

                })

            
            },
        },
    }


    

</script>

<template>

    <navBar/>

    <main class="p-3 pt-5 d-wrap justify-content-sapce w-100" style="overflow: auto;"><!-- (game) => {usedGameInConstructor = game} -->

        <makeApostForm :statPreview="statsPreview"/>
        <postBuilder :data="usedGameInConstructor.data" :puuid="usedGameInConstructor.puuid" @changeStatPreview="(args) => { updateStatPreview(args[0], args[1])}"/>
        <div v-if="loading">LOADING....</div>
        <div v-if="matchHisto" class="match-history d-flex flex-column scrollD" style="max-height: 60vh;">
                <gameCard v-for="matchId in matchHisto" :matchId="matchId"  @newUsedGameInConstructor="(args) => {usedGameInConstructor = {data:args[0], puuid:args[1]}; resetPreview()}"/>
        </div>

    </main>


    <!-- <Posts 
    id="post.id" 
    username="post.username" 
}
    profile="post.profile" 
    text="post.text" 
    media="post.media" 
    timeStamp="post.timeStamp"
    /> -->
    



</template>