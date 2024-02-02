<script setup>

    import navBar from "../components/navBar.vue"
    import Posts from "../components/posts.vue";
    import { ref } from "vue";
    
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
  },
  {
    id: "8",
    username: "CyberExplorer",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Ventured into the cyberpunk world! 🌐 #VirtualReality #GamingAdventure",
    media: "https://cdn.midjourney.com/896fe6a5-e8eb-4104-90a6-12af36ba4f11/0_2.webp",
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
    id: "9",
    username: "StrategyWarrior",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Won the battle with strategic moves! ⚔️ #WarGaming #Victory",
    media: "https://cdn.midjourney.com/5d839d58-9b71-481c-993a-ac5b60afd6f4/0_0.webp",
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
    id: "10",
    username: "PixelPainter",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Crafted a masterpiece in pixel art! 🎨 #GamingArt #PixelMasterpiece",
    media: "https://cdn.midjourney.com/cb3eabf5-d920-488b-8cda-2d5ab853bab0/0_3.webp",
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
    id: "11",
    username: "MysticQuester",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Embarked on a mysterious gaming quest! 🔍 #MysticAdventure #GamingQuest",
    media: "https://cdn.midjourney.com/ce32f3bc-148c-4f25-a4ef-203c1a5278c6/0_0.webp",
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
    id: "12",
    username: "TechExplorer",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Navigating through the gaming tech world! 🕹️👾 #TechGaming #GamingTechie",
    media: "https://cdn.midjourney.com/8bd98fe1-1885-436f-8d8b-2cd957b6afd8/0_1.webp",
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
    id: "13",
    username: "BattleRoyaleKing",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Crowned the Battle Royale champion! 👑 #VictoryRoyale #BattleRoyale",
    media: "https://cdn.midjourney.com/7c7b5aad-22cc-4709-bda9-b4753d41a361/0_2.webp",
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
    id: "14",
    username: "GalacticExplorer",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Explored the depths of the gaming galaxy! 🌌🚀 #GalacticGaming #SpaceExplorer",
    media: "https://cdn.midjourney.com/022c7b50-c387-4244-acde-53b640c9f3d2/0_0.webp",
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
    id: "15",
    username: "RhythmMaestro",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Mastered the gaming rhythm! 🎵🎮 #RhythmGaming #BeatMaster",
    media: "https://cdn.midjourney.com/b7e61922-6dab-4952-8ec5-77c572cac285/0_2.webp",
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
    id: "16",
    username: "QuestSeeker",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Embarked on a quest for glory! ⚔️🛡️ #GamingQuest #EpicAdventure",
    media: "https://cdn.midjourney.com/979ef547-5141-4840-85ac-f0286ac8b91b/0_1.webp",
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
    id: "17",
    username: "SonicSpeedster",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Zooming through levels at Sonic speed! 🌀🦔 #SonicGaming #Speedster",
    media: "https://cdn.midjourney.com/f486d8cc-e04b-432e-8c3f-1bdaae3d5ac5/0_3.webp",
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
    id: "18",
    username: "PuzzleMastermind",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Solved the gaming puzzle like a mastermind! 🧩 #PuzzleGaming #BrainTeaser",
    media: "https://cdn.midjourney.com/1fe5d2a0-61b7-4b23-8a02-3e540f4fdc31/0_1.webp",
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
    id: "19",
    username: "CasualExplorer",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Casually exploring the gaming universe! 🌍🎮 #CasualGaming #Explorer",
    media: "https://cdn.midjourney.com/3ffcde5f-655a-40b5-9dd5-38ea9702ee74/0_3.webp",
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
    id: "20",
    username: "VRAdventurer",
    profile: "https://cdn.midjourney.com/65569a46-00e4-4ea3-b49a-db4abcc37ad8/0_1.webp",
    text: "Embarked on a virtual reality adventure! 🕶️🌐 #VRGaming #VirtualExplorer",
    media: "https://cdn.midjourney.com/1051bd9a-0f1e-458e-8260-02f70110ff3b/0_0.webp",
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
]);



</script>
<template>
    <navBar/>

    <div id="feedContainer">
     

            <Posts v-for="post in postsData"
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


</template>