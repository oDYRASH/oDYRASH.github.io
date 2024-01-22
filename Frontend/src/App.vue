<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import navSpan from './components/navSpan.vue'
  import { ref } from 'vue';

  // import getDiscordUserInfo from './script/discord.js'


  var user = ref(false)

  window.onload = () => {
      

    // 
// V2 avec le back as auth
// 
    //     // si on est sur la page login -> RETURN
    //     if(window.location.href.indexOf("/login") > -1) return

    //     let userData = localStorage.getItem('discordUser')
     
    //     if ( !userData ){
    //       window.location.href = "/login"
    //     }
  
    // }
// 
// 
// 
// 


        // si on est sur la page login -> RETURN
        if(window.location.href.indexOf("/login") > -1) return

        let userData = localStorage.getItem('discordUser')
     
        if ( !userData ){
          

          const accessToken = new URLSearchParams(window.location.hash.slice(1)).get('access_token');

          if (!accessToken) {
            return window.location = "/login"
          }

          // get discordUser info
          fetch('https://discord.com/api/users/@me', {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          })
            .then(result => result.json())
            .then(response => {
              // const { username, discriminator } = response;
              // window.location = ` ${username}#${discriminator}`;

              // Log the user data here
              document.getElementById('loginSpanName').innerText = response.global_name
              localStorage.setItem('discordUser', JSON.stringify(response))

            })
            .catch(console.error);
            
            //get discord  user conenctions infos : such as league of legends userName 
            fetch('https://discord.com/api/users/@me/connections', {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          })
            .then(result => result.json())
            .then(response => {
              localStorage.setItem('discordConnectionsUser', JSON.stringify(response))

            })
            .catch(console.error);


            // const userData = {
            //   "discordUser":discordUser,
            //   "discordConnections":discordConnections
            // }
            
            return

        }
  
        // console.log("data found in localStorage :" + userData)

        // user = JSON.parse(userData)
        

        // document.getElementById('loginSpanName').innerText = user.discordUser.global_name
    }

  

</script>


<template class="template">
  

  <!-- icon GoogleFontApi Icon-->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined">
  <!-- icon GoogleFontApi Montserrat-->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap">
  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

<!-- <nav>

    <div id="navMenu" class="nm">

      <RouterLink to="/" class="routerLink">
        <navSpan :spanName="'HOME'" :iconName="'home'"/></RouterLink>
      
      <RouterLink to="/" class="routerLink">
        <navSpan :spanName="'SEARCH'" :iconName="'search'"/></RouterLink>
  
      <RouterLink to="/" class="routerLink">
        <navSpan :spanName="'POST'" :iconName="'add_circle'"/></RouterLink>

    </div>

    <div id="navSetting" class="nm">

      <RouterLink :to="'/login'" class="routerLink">
        <navSpan :id="'loginSpanName'" :spanName="'LOGIN'" :iconName="'account_circle'"/></RouterLink>

       <RouterLink to="/" class="routerLink">
        <navSpan :spanName="'SETTINGS'" :iconName="'settings'"/></RouterLink>

    </div>

</nav> -->

    

  <!-- Vue de l'onglet activé par la navigation (HOME / PROFILE / PARAMETRES) -->
  <body><RouterView /></body>





</template>

<style scoped>

  nav{

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #000027;
    width: var(--navbar-width);
    height: 100vh;
    padding-left: 22px;
    padding-right: 32px;
    padding-top: 20px;
    padding-bottom: 20px;

    border-right: whitesmoke solid 1px;

  }

  @media only screen and (max-width: 768px) {
    nav{


      position: absolute;
      flex-direction: row;

      align-items: center;

      height: var(--navbar-height);
      width: 100vw;
      background: #000027;
      bottom: 0;
      border-top: solid white 1px;
      border-right: 0px;
      background-color: #000027;
     
      padding: 12px 25px 12px 25px;

      z-index: 1;

    }

    #navMenu, #navSetting{
      display: flex;
      flex-direction: row;
    }

  } 

   
  
  .nm {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .p-2 {
    padding: 8px;
  }
  .gap-2 {
      gap: 2px;
  }

</style>