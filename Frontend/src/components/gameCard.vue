<script setup>

    import { secondsToHumanTime } from '../scripts/utils.js';
    import { summonerSpell, runes } from '../scripts/constants.js';
    import { getGameMode, getKDA, timeAgo } from '../scripts/helper.js';
    import { lolGame } from '../scripts/playerStatsInGame.js';


    const props = defineProps({
        match: {
            type: lolGame,
            required: true,
        }})
    

//    // Define the fetchData function
//     const fetchData = async () => {
//         loading.value = true;
//         // Your asynchronous data fetching logic here
//         try {
//             // Simulating an asynchronous API call
//             getMatch('europe', props.matchId).then(res => {

//                 game.value = new lolGame(res, puuid)
//                 DTOmatch.value = res

//             })
            
//         } catch (err) {
//             game.value = null;
//             error.value = 'Error fetching data';
//         } finally {
//             loading.value = false;
//         }
//     };
    
//     // Watch the params of the route to fetch the data again
//     watchEffect(() =>   {
//         fetchData();
//     });



</script>

<script>
    // Your component definition
    export default {
        emits: ['newStatSelected']
    }
</script> 

<template>
    <div v-if="props.match" class="contents" @click="$emit('newStatSelected', props.match)"> <!--  @click="$emit('newUsedGameInConstructor', [DTOmatch, playerPuuid])" -->
        <div class="inner"  :class="props.match.player.win ? 'game-win' : 'game-lose'">
            <div class="css-1mk3mai e13s2rqz2">
                <div>{{ getGameMode(props.match.queueId)}}</div> <!-- gameInfo.gametype -->
                <div>{{timeAgo(props.match.gameEndTimestamp)}}</div>
                <div>{{ props.match.player.win ? "Victoire": "Défaite" }}</div><!-- gameInfo.win -->
                <div>{{ secondsToHumanTime(props.match.gameDuration) }}</div><!-- gameInfo.duration -->
            </div>
            <div class=" css-18djg9v e13s2rqz3">
                <div class="main">
                <div class="info"><a target="_blank" rel="noreferrer" class="champion" ><img
                            :src="`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/champion/${props.match.player.championName}.png`"
                            width="48" height="48" :alt="props.match.player.championName" class=" rounded-circle"><span class="champion-level">{{ props.match.player.champLevel }}</span></a>
                    <div class="css-10z45t0 e1e54nif0">
                        <div class="loadout-group">
                            <div class="spell" style="position: relative;"><img
                                    :src="`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${
							summonerSpell[props.match.player.summoner1Id]
						}`"
                                    width="22" height="22" alt="Flash"></div>
                            <div class="spell" style="position: relative;"><img
                                :src="`http://ddragon.leagueoflegends.com/cdn/13.5.1/img/spell/${
							summonerSpell[props.match.player.summoner2Id]
						}`"
                                    width="22" height="22" alt="Ghost"></div>
                        </div>
                        <div class="loadout-group">
                            <div class="rune rune-primary" style="position: relative;"><img
                                :src="`https://ddragon.leagueoflegends.com/cdn/img/perk-images/${
							runes[props.match.player.mainRune]
						}`"
                                    width="22" height="22" alt="Phase Rush"></div>
                            <div class="rune" style="position: relative;"><img
                                :src="`https://ddragon.leagueoflegends.com/cdn/img/perk-images/${
							runes[props.match.player.secondaryRune]
						}`"
                                    width="22" height="22" alt="Domination"></div>
                        </div>
                    </div>
                </div>
                <div class="kda-stats">
                    <div class="kda"><span>{{ props.match.player.kills }}</span> / <span class="d">{{ props.match.player.deaths }}</span> / <span>{{ props.match.player.assists }}</span></div>
                    <div class="kda-ratio">{{ getKDA(props.match.player.kills, props.match.player.deaths, props.match.player.assists) }}:1 KDA</div>
                </div>
                <div class="game-stats">
                    <div class="p-kill">
                        <div class="" style="position: relative;">{{'P/Kill ' + props.match.player.killParticipationPerCent + '%'}}</div>
                    </div>
                    <div class="cs">
                        <div class="" style="position: relative;">CS {{ props.match.player.CS }} <br> {{ props.match.player.CSmin }} cs/min</div>
                    </div>
                    <div class="cs">
                        <div class="" style="position: relative;">{{ Math.round(props.match.player.damagePerMinute)}} DGT/min</div>
                    </div>
                </div>
            </div>
            <div class="sub">
                <div class="items">
                    <div v-for="item in props.match.player.items">
                        <div class="item" style="position: relative;" v-if="item != 0"><img
                                :src="`https://opgg-static.akamaized.net/meta/images/lol/14.1.1/item/${item}.png?image=q_auto,f_webp,w_64,h_64&amp;v=1702977255104`"
                                width="22" height="22"></div>
                    </div>
                   
                </div>
                <!-- <div class="game-tags">
                    <div class="tag kill-tag">Double Kill</div><button class="OPScoreBadge css-dz3g7i e7b9d1a0"
                        type="button">
                        <div class="" style="position: relative;">
                            <div class="badge">8th</div>
                        </div>
                    </button>
                </div> -->
            </div>
        </div>
        <!-- <div class="css-mt0u67 er3mfww0">
            <div class=" css-1uoah6o er3mfww1">
                <div class="icon" style="position: relative;"><img
                        src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/champion/Udyr.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&amp;v=1702977255104"
                        width="16" height="16" alt="Udyr"></div>
                <div class="name">
                    <div class="summoner-tooltip" style="position: relative;"><a target="_blank" rel="noopener noreferrer"
                            href="/summoners/euw/DenSygeKamel69-EUW">
                            <div class="css-12ijbdy e1swkqyq0"><span class="css-ao94tw e1swkqyq1">DenSygeKamel69</span>
                            </div>
                        </a></div>
                </div>
            </div>
            <div class=" css-1uoah6o er3mfww1">
                <div class="icon" style="position: relative;"><img
                        src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/champion/Belveth.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&amp;v=1702977255104"
                        width="16" height="16" alt="Bel'Veth"></div>
                <div class="name">
                    <div class="summoner-tooltip" style="position: relative;"><a target="_blank" rel="noopener noreferrer"
                            href="/summoners/euw/husband-him">
                            <div class="css-12ijbdy e1swkqyq0"><span class="css-ao94tw e1swkqyq1">husband</span></div>
                        </a></div>
                </div>
            </div>
            <div class=" css-1uoah6o er3mfww1">
                <div class="icon" style="position: relative;"><img
                        src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/champion/Hwei.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&amp;v=1702977255104"
                        width="16" height="16" alt="Hwei"></div>
                <div class="name">
                    <div class="summoner-tooltip" style="position: relative;"><a target="_blank" rel="noopener noreferrer"
                            href="/summoners/euw/Ivok-goaat">
                            <div class="css-12ijbdy e1swkqyq0"><span class="css-ao94tw e1swkqyq1">Ivok</span></div>
                        </a></div>
                </div>
            </div>
            <div class=" css-1uoah6o er3mfww1">
                <div class="icon" style="position: relative;"><img
                        src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/champion/Lucian.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&amp;v=1702977255104"
                        width="16" height="16" alt="Lucian"></div>
                <div class="name">
                    <div class="summoner-tooltip" style="position: relative;"><a target="_blank" rel="noopener noreferrer"
                            href="/summoners/euw/chikoerkl-2108">
                            <div class="css-12ijbdy e1swkqyq0"><span class="css-ao94tw e1swkqyq1">chikoerkl</span></div>
                        </a></div>
                </div>
            </div>
            <div class=" css-1uoah6o er3mfww1">
                <div class="icon" style="position: relative;"><img
                        src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/champion/Bard.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&amp;v=1702977255104"
                        width="16" height="16" alt="Bard"></div>
                <div class="name">
                    <div class="summoner-tooltip" style="position: relative;"><a target="_blank" rel="noopener noreferrer"
                            href="/summoners/euw/sw3ry-SRY">
                            <div class="css-12ijbdy e1swkqyq0"><span class="css-ao94tw e1swkqyq1">sw3ry</span></div>
                        </a></div>
                </div>
            </div>
            <div class="is-me css-1uoah6o er3mfww1">
                <div class="icon" style="position: relative;"><img
                        src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/champion/Singed.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&amp;v=1702977255104"
                        width="16" height="16" alt="Singed"></div>
                <div class="name">
                    <div class="summoner-tooltip" style="position: relative;"><a target="_blank" rel="noopener noreferrer"
                            href="/summoners/euw/Hof-GAS">
                            <div class="css-12ijbdy e1swkqyq0"><span class="css-ao94tw e1swkqyq1">Hof</span></div>
                        </a></div>
                </div>
            </div>
            <div class=" css-1uoah6o er3mfww1">
                <div class="icon" style="position: relative;"><img
                        src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/champion/Rengar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&amp;v=1702977255104"
                        width="16" height="16" alt="Rengar"></div>
                <div class="name">
                    <div class="summoner-tooltip" style="position: relative;"><a target="_blank" rel="noopener noreferrer"
                            href="/summoners/euw/%C3%9Foshy-777">
                            <div class="css-12ijbdy e1swkqyq0"><span class="css-ao94tw e1swkqyq1">ßoshy</span></div>
                        </a></div>
                </div>
            </div>
            <div class=" css-1uoah6o er3mfww1">
                <div class="icon" style="position: relative;"><img
                        src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/champion/Diana.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&amp;v=1702977255104"
                        width="16" height="16" alt="Diana"></div>
                <div class="name">
                    <div class="summoner-tooltip" style="position: relative;"><a target="_blank" rel="noopener noreferrer"
                            href="/summoners/euw/Knast-EUW">
                            <div class="css-12ijbdy e1swkqyq0"><span class="css-ao94tw e1swkqyq1">Knast</span></div>
                        </a></div>
                </div>
            </div>
            <div class=" css-1uoah6o er3mfww1">
                <div class="icon" style="position: relative;"><img
                        src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/champion/Caitlyn.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&amp;v=1702977255104"
                        width="16" height="16" alt="Caitlyn"></div>
                <div class="name">
                    <div class="summoner-tooltip" style="position: relative;"><a target="_blank" rel="noopener noreferrer"
                            href="/summoners/euw/ADKING%20HARU-GOD">
                            <div class="css-12ijbdy e1swkqyq0"><span class="css-ao94tw e1swkqyq1">ADKING HARU</span></div>
                        </a></div>
                </div>
            </div>
            <div class=" css-1uoah6o er3mfww1">
                <div class="icon" style="position: relative;"><img
                        src="https://opgg-static.akamaized.net/meta/images/lol/14.1.1/champion/Janna.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&amp;v=1702977255104"
                        width="16" height="16" alt="Janna"></div>
                <div class="name">
                    <div class="summoner-tooltip" style="position: relative;"><a target="_blank" rel="noopener noreferrer"
                            href="/summoners/euw/Palis1-2432">
                            <div class="css-12ijbdy e1swkqyq0"><span class="css-ao94tw e1swkqyq1">Palis1</span></div>
                        </a></div>
                </div>
            </div>
        </div> -->
        </div>
    </div>



</template>