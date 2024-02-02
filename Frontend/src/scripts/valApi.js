const apiKey = "RGAPI-44150f11-0f36-4d06-a50d-4be8205fba91"


export async function getPlayerVal(region, name) {
    const response = await fetch(
      `https://valorant.${region}.api.riotgames.com/v1/players?name=${name}`,
      {
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );
    const data = await response.json();
    return data;
  }
  
  export async function getPlayerRankVal(region, userId) {
    const response = await fetch(
      `https://valorant.${region}.api.riotgames.com/v1/competitive/v1/ranked?userID=${userId}`,
      {
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );
    const data = await response.json();
    return data;
  }
  
  export async function getPlayerMatchesVal(region, puuid, startIndex = 0, endIndex = 20) {
    const response = await fetch(
      `https://val.${region}.api.riotgames.com/val/match/v1/matchlists/by-puuid/${puuid}`,
      //https://europe.api.riotgames.com
      {
        headers:{
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
            "Accept-Language": "en,fr;q=0.9,en-US;q=0.8",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": "https://developer.riotgames.com",
            "X-Riot-Token": "RGAPI-44150f11-0f36-4d06-a50d-4be8205fba91"
        },
      }
    );
    const data = await response.json();
    return data;
  }
  
  export async function getMatchDetailsVal(region, matchId) {
    const response = await fetch(
      `https://val.${region}.api.riotgames.com/v1/matches/${matchId}`,
      {
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );
    const data = await response.json();
    return data;
  }
  