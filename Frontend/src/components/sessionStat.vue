<script setup>

    const props = defineProps({
        sessionGame:{
            required:true
        }})


    console.log(props.sessionGame)
  
    const nbGames = (games) => {
        return games.length
    }

    const calculerPourcentageVictoires = (jeux) => {
        // Vérifier si le tableau de jeux est vide
        if (jeux.length === 0) {
            return 0; // ou une valeur par défaut selon vos besoins
        }
        
        // Filtrer les jeux qui ont été gagnés (win === true)
        const jeuxGagnes = jeux.filter(game => game.player.win === true);

        // Calculer le pourcentage de victoires
        const pourcentageVictoires = (jeuxGagnes.length / jeux.length) * 100;

        return pourcentageVictoires.toFixed(2);
    };

    const getPlayerSessionStatsMean = (sessionGames, playerStat) => {
        // Vérifier si le tableau est vide
        if (sessionGames.length === 0) {
            return 0; // Retourner 0 si le tableau est vide pour éviter une division par zéro
        }

        let kills = 0

        sessionGames.forEach(element => {
            kills += element.player[playerStat]
        });

        return kills / sessionGames.length

    }

</script>

<template>

    <div :key="sessionGame" style="display: flex; flex-direction: column;">

        <div>{{  `Games Played : ${nbGames(sessionGame)}` }}</div>
        <div>{{  `Win : ${calculerPourcentageVictoires(sessionGame)}%` }}</div>
        <div>{{  `Kills : ${getPlayerSessionStatsMean(sessionGame, 'kills')}` }}</div>
        <div>{{  `Deaths : ${getPlayerSessionStatsMean(sessionGame, 'deaths')}` }}</div>
        <div>{{  `Assists : ${getPlayerSessionStatsMean(sessionGame, 'assists')}` }}</div>
        
    </div>

</template>