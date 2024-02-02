import {getAllMatches, getSummoner, getMatch} from "./lolApi"
import { lolGame } from "./playerStatsInGame"

async function getUserPuuidFromDiscordConnection(){

    const userConnections = JSON.parse(localStorage.getItem('discordConnectionsUser'))
    let lolUserName = userConnections.filter(item => "leagueoflegends" == item.type)[0]["name"]
    
    if(!lolUserName) alert("Your LeagueOfLegends account is not liked to your Discord account :/")

    getSummoner('euw1', lolUserName).then(res => {

        let puuid = res.puuid

        localStorage.setItem("LOLpuuid", puuid)

        return puuid
    })
}

export async function getMatchHistory(){


    const puuid = localStorage.getItem("LOLpuuid") || getUserPuuidFromDiscordConnection()


    return await getAllMatches('euw1', puuid ).then(async res => {

        let m = []

        // let a = await res.map(async element => {
            
        //     new Promise(resolve => {
        //         setTimeout(() => {
        //             resolve(1 * 2);
        //         }, 111); // Simuler une opération asynchrone (par exemple, une requête réseau)
        //     }).then(_ => {
        //         getMatch('europe', element).then(res => {
        //             m.push(res) 
        //         })
        //     })

   
            
        // })


        await Promise.all(res.map(async element => {
            // Utiliser une promesse pour simuler une opération asynchrone
            await new Promise(resolve => {
                setTimeout(() => {
                    resolve(1 * 2);
                }, 111); // Simuler une opération asynchrone (par exemple, une requête réseau)
            });

            // Utiliser await pour attendre la résolution de la promesse retournée par getMatch
            const match = await getMatch('europe', element);
            m.push(match);
        }));

        console.log(m)
        return m.map(gameDTO => new lolGame(gameDTO, puuid))
    })
}