<script setup>

import navBar from "../components/navBar.vue"
import Posts from "../components/posts.vue";
import { ref } from "vue";
import profileCard from "../components/profileCard.vue"


const postsData = ref([
  {
    id: "1",
    username: "EpicGamer22",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Just finished an epic gaming session! 🎮 #GamerLife #NoMercy",
    media: "https://cdn.midjourney.com/583df377-b54d-4c7d-ab31-8cb00c03e694/0_3.webp",
    timeStamp: "2022-01-05T12:30:00",
    title:"RANKED tryhard - > 200LP",
    stats:[
        {
            title:"KDA",
            value:"5/1/5"
        },
        {
            title:"CS/min",
            value:(Math.random() * 8 + 2).toFixed(2)
        },
        {
            title:"DMG/min",
            value:(Math.random() * 350 + 200).toFixed(0)
        }
    ],
    achivements:["trop fort", "zebi"],
    likes:["idUser?", "idUser?", "idUser?", "idUser?", "idUser?"],
  },
  {
    id: "2",
    username: "PixelProwler",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_0.webp",
    text: "Just reached a new level in my favorite game! 🎮 #LevelUp #GamingJourney",
    media: "https://cdn.midjourney.com/f77d5248-4a55-4330-9f0b-11cc0051bab3/0_2.webp",
    timeStamp: "2022-01-05T14:45:00",
    title:"RANKED tryhard - > 200LP",
    stats:[
        {
            title:"KDA",
            value:"5/1/5"
        },
        {
            title:"CS/min",
            value:(Math.random() * 8 + 2).toFixed(2)
        },
        {
            title:"DMG/min",
            value:(Math.random() * 350 + 200).toFixed(0)
        }
    ],
    achivements:["trop fort", "zebi"],
    likes:["idUser?", "idUser?", "idUser?", "idUser?", "idUser?"],

  },
  {
    id: "3",
    username: "StrategistPro",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Just pulled off an amazing strategy! 🧠 #TacticalGenius #GamingStrategy",
    media: "https://cdn.midjourney.com/354e0518-23a7-404d-92ee-720cb7dd49f4/0_2.webp",
    timeStamp: "2022-01-05T12:30:00",
    title:"RANKED tryhard - > 200LP",
    stats:[
        {
            title:"KDA",
            value:"5/1/5"
        },
        {
            title:"CS/min",
            value:(Math.random() * 8 + 2).toFixed(2)
        },
        {
            title:"DMG/min",
            value:(Math.random() * 350 + 200).toFixed(0)
        }
    ],
    achivements:["trop fort", "zebi"],
    likes:["idUser?", "idUser?", "idUser?", "idUser?", "idUser?"],
  },
  {
    id: "4",
    username: "NinjaPlayer",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Just hit some insane shots! 🎯 #SniperSkills #GamingMoments",
    media: "https://cdn.midjourney.com/3b7bb50d-5bde-4db3-95cf-4285b8ded1a2/0_3.webp",
    timeStamp: "2022-01-05T12:30:00",
    title:"RANKED tryhard - > 200LP",
    stats:[
        {
            title:"KDA",
            value:"5/1/5"
        },
        {
            title:"CS/min",
            value:(Math.random() * 8 + 2).toFixed(2)
        },
        {
            title:"DMG/min",
            value:(Math.random() * 350 + 200).toFixed(0)
        }
    ],
    achivements:["trop fort", "zebi"],
    likes:["idUser?", "idUser?", "idUser?", "idUser?", "idUser?"],
  },
  {
    id: "5",
    username: "RPGMaster",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Embarked on an epic RPG adventure! 🏹 #Roleplaying #GamingQuest",
    media: "https://cdn.midjourney.com/85154ef1-32bc-4162-96e5-009ed572561e/0_2.webp",
    timeStamp: "2022-01-05T12:30:00",
    title:"RANKED tryhard - > 200LP",
    stats:[
        {
            title:"KDA",
            value:"5/1/5"
        },
        {
            title:"CS/min",
            value:(Math.random() * 8 + 2).toFixed(2)
        },
        {
            title:"DMG/min",
            value:(Math.random() * 350 + 200).toFixed(0)
        }
    ],
    achivements:["trop fort", "zebi"],
    likes:["idUser?", "idUser?", "idUser?", "idUser?", "idUser?"],
  },
  {
    id: "6",
    username: "SpeedDemon",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Zoomed past the competition! 🚗💨 #RacingChampion #GamingSpeed",
    media: "https://cdn.midjourney.com/51a24101-03e0-45e8-9931-25c6ed3b8e03/0_3.webp",
    timeStamp: "2022-01-05T12:30:00",
    title:"RANKED tryhard - > 200LP",
    stats:[
        {
            title:"KDA",
            value:"5/1/5"
        },
        {
            title:"CS/min",
            value:(Math.random() * 8 + 2).toFixed(2)
        },
        {
            title:"DMG/min",
            value:(Math.random() * 350 + 200).toFixed(0)
        }
    ],
    achivements:["trop fort", "zebi"],
    likes:["idUser?", "idUser?", "idUser?", "idUser?", "idUser?"],
  },
  {
    id: "7",
    username: "ArcadeWizard",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Set a new high score at the arcade! 🕹️ #ArcadeFun #GamingWizardry",
    media: "https://cdn.midjourney.com/51fae888-f490-46c7-a11a-d475b64d3c22/0_3.webp",
    timeStamp: "2022-01-05T12:30:00",
    title:"RANKED tryhard - > 200LP",
    stats:[
        {
            title:"KDA",
            value:"5/1/5"
        },
        {
            title:"CS/min",
            value:(Math.random() * 8 + 2).toFixed(2)
        },
        {
            title:"DMG/min",
            value:(Math.random() * 350 + 200).toFixed(0)
        }
    ],
    achivements:["trop fort", "zebi"],
    likes:["idUser?", "idUser?", "idUser?", "idUser?", "idUser?"],
  }])

</script>
<template>

    <navBar/>

    <div id="feedContainer">
     
            <Posts v-for="post in postsData" :key="post.id" 
            :id="post.id" 
            :username="post.username" 
            :profile="post.profile" 
            :text="post.text" 
            :media="post.media" 
            :timeStamp="post.timeStamp"
            :title="post.title"
            :stats="post.stats"
            :achivements="post.achivements"
            :likes="post.likes"
            />
            
    </div>

    <profileCard/>

</template>