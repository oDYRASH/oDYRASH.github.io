<script>
    import { lolGame } from '../scripts/playerStatsInGame.js'

  export default {
    data() {
      return {
        activeTab: 'Total',
      };
    },
    methods: {
      switchTab(tab) {
        this.activeTab = tab;
      },
    },
  };


 

</script>

<script setup>

  import { ref } from 'vue';


  const props = defineProps({
        data: {
            required: true,
        },
        puuid:{
          required:true
        }})

      
    let game = ref(false)

    function setGame(){
      game = new lolGame(props.data, props.puuid)
    }
    
    function setBaseStatsOnPost(){
      return
    }

</script>

<template>
        <div class="d-flex flex-column">

          <span style="margin-left: 15px;">STATS KIND :</span>

          <div class="d-flex flex-row justify-content-evenly mt-3 mb-3">

            <span class="btn btn-secondary">SESSION   </span>
            <span class="btn btn-secondary">CHAMPION  </span>
            <span class="btn btn-secondary">SEASON    </span>
          
          </div>
      
        <div class="post-builder-container"> <!--(newGameStats) => changeStas(newGameStats) -->
            <div v-if="props.data">
              {{ setGame(), setBaseStatsOnPost() }}
              <div v-if="game">
                <ul class="nav nav-tabs" id="statStyleTab" role="tablist">

                    <li class="nav-item" @click="switchTab('Total')">
                        <a class="nav-link" :class="{ active: activeTab === 'Total' }" id="home-tab" data-toggle="tab" role="tab"
                            aria-controls="home" aria-selected="true">Stats</a>
                    </li>

                    <li class="nav-item" @click="switchTab('PerMin')">
                        <a class="nav-link" :class="{ active: activeTab === 'PerMin' }" id="profile-tab" data-toggle="tab" role="tab"
                            aria-controls="profile" aria-selected="false">Stats / min</a>
                    </li>
                    
                </ul>
                <div class="tab-content m-2 " id="statStyleTabContent">
                  
                    <div class="tab-pane" :class="{ active : activeTab === 'Total' }" id="TotalStats" role="tabpanel" aria-labelledby="home-tab">
                        <button type="button" class="btn btn-primary m-1" @click="$emit('changeStatPreview', ['DMG', game.player.totalDamageDealtToChampions])">{{ game.player.totalDamageDealtToChampions }} DMG</button>
                        <button type="button" class="btn btn-primary m-1" @click="$emit('changeStatPreview', ['CS', game.player.CS ])">{{ game.player.CS}} CS</button>
                        <button type="button" class="btn btn-primary m-1" @click="$emit('changeStatPreview', ['Gold', game.player.goldEarned])">{{ game.player.goldEarned}} Gold</button>
                        <button type="button" class="btn btn-primary m-1" @click="$emit('changeStatPreview', ['Vision', game.player.visionScore])">{{ game.player.visionScore }} Vision</button>

                    </div>
                    
                    <div class="tab-pane" :class="{ active : activeTab === 'PerMin' }" id="PerMinStats" role="PerMinStats" aria-labelledby="profile-tab">
                        <button type="button" class="btn btn-primary m-1" @click="$emit('changeStatPreview', ['DMG /min', game.player.damagePerMinute])">{{ game.player.damagePerMinute }} DMG /min</button>
                        <button type="button" class="btn btn-primary m-1" @click="$emit('changeStatPreview', ['CS /min', game.player.CSmin])">{{ game.player.CSmin   }} CS /min</button>
                        <button type="button" class="btn btn-primary m-1" @click="$emit('changeStatPreview', ['Gold /min', game.player.goldPerMinute])">{{ game.player.goldPerMinute }} Gold /min</button>
                        <button type="button" class="btn btn-primary m-1" @click="$emit('changeStatPreview', ['Vision /min', game.player.visionScorePerMinute])">{{ game.player.visionScorePerMinute    }} Vision /min</button>
                    </div>

                </div>
              </div>
            <div class="m-2">
                <button type="button" class="btn btn-warning m-1" style="color: black !important;" @click="$emit('changeStatPreview', ['% Kill-Participation', game.player.killParticipationPerCent])">{{ game.player.killParticipationPerCent}}% Kill-Participation</button>
                <button type="button" class="btn btn-warning m-1" style="color: black !important;" @click="$emit('changeStatPreview', ['KDA', game.player.KDAstring ])">KDA : {{ game.player.KDAstring }}</button>
                <!-- <button type="button" class="btn btn-warning m-1">57% Kill-Participation</button>
                <button type="button" class="btn btn-warning m-1">57% Kill-Participation</button> -->
            </div>
          </div>

        </div>
      </div>
</template>