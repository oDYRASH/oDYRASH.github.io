<script setup>
    import { ref } from 'vue';

    const SUPPORTED_GAMES = ['leagueoflegends'];

    const l = ref([{title:"KDA",value:"8.7/2.1/21"}, {title:"Top",value:"5.5%"},{title:"Friends",value:"289"},])
    const userConnections = JSON.parse(localStorage.getItem('discordConnectionsUser'))
    const userDiscord = ref(JSON.parse(localStorage.getItem('discordUser')))

    const gameUser = ref(userConnections.filter(item => SUPPORTED_GAMES.includes(item.type)))

</script>
<template>

    <div class="d-flex flex-column p-5 align-items-center gap-5 w-25">

        <div style="position: relative;">
            <div class="ppp rounded-circle"></div>
            <img :src="`https://cdn.discordapp.com/avatars/${ userDiscord.id }/${ userDiscord.avatar }.png`" class="rounded-circle" alt="">
        </div>
        <p>{{ userDiscord.global_name }}</p>
        <div  v-for="game in gameUser">
            <p>{{game.type}}</p>
            <p>{{game.name}}</p>
        </div>
        <p class="ppBio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed aut!</p>
        <div  class="d-flex flex-row justify-content-evenly mt-auto w-100">
            
            <div v-for="stat in l">
                
                <p class="fs-12">{{ stat.title }}</p>
                <p class="fs-5  fw-bold">{{ stat.value }}</p>
                
            </div> 
        </div>
    </div>
</template>