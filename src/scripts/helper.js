import { queueIdArray } from "./constants";

export function transformRegion(region) {
    switch (region) {
        case "eun1":
        case "euw1":
        case "tr1":
        case "ru":
            return "europe";

        case "kr":
        case "jp1":
            return "asia";

        case "na1":
        case "la1":
        case "la2":
        case "br1":
        case "oc1":
            return "americas";

        default:
            return "europe";
    }
}

export function calcWinrate(wins, losses) {
    return Math.round((wins / (wins + losses)) * 100);
}

export function getGameMode(id) {
    const gameMode = queueIdArray.find((que) => que.queueId === id);
    return gameMode?.description || "Normal Draft";
}

// function getTimePlayed(seconds) {
//     const duration = moment.duration(seconds, "seconds");
//     const formattedDuration = moment
//         .utc(duration.asMilliseconds())
//         .format("mm:ss");
//     return formattedDuration || "00:00";
// }

export function getKDA(kills, deaths, assists) {
    if (deaths === 0) {
        deaths = 1;
    }
    return ((kills + assists) / deaths).toFixed(1) || 0;
}

export function getWinrate(wins, losses) {
    return +((wins / (wins + losses)) * 100).toFixed(0) || 50;
}


export function paginate(array) {
    const itemsPerPage = 20;
    const pages = Math.ceil(array.length / itemsPerPage);
    const paginatedArray = Array.from({ length: pages }, function (_, index) {
        const start = index * itemsPerPage;
        return array.slice(start, start + itemsPerPage);
    });

    return paginatedArray;
}

export function timeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);

    const interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years ago";
    }
    if (interval === 1) {
        return interval + " year ago";
    }

    const months = Math.floor(seconds / 2628000);
    if (months > 1) {
        return months + " months ago";
    }
    if (months === 1) {
        return months + " month ago";
    }

    const days = Math.floor(seconds / 86400);
    if (days > 1) {
        return days + " days ago";
    }
    if (days === 1) {
        return days + " day ago";
    }

    const hours = Math.floor(seconds / 3600);
    if (hours > 1) {
        return hours + " hours ago";
    }
    if (hours === 1) {
        return hours + " hour ago";
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes > 1) {
        return minutes + " minutes ago";
    }
    if (minutes === 1) {
        return minutes + " minute ago";
    }

    return "just now";
}