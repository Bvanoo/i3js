// recupérer la date du jour
let ajd = new Date();
// récuperer les heures
let heures = ajd.getHours();
// récupérer les minutes
let minutes = ajd.getMinutes();

const HEURES_PAUSE = 12;
const MINUTES_PAUSE = 15;

// si heures == HEURES_PAUSE 
// ET si minutes ENTRE MINUTES_PAUSE et MINUTES PAUSE + 15
// C'est la pause
// sinon c'est pas la pause

// et: && ou: ||
if (heures == HEURES_PAUSE 
    && minutes >= MINUTES_PAUSE 
    && minutes <= MINUTES_PAUSE + 15
) {
    document.body.innerText = "C'est l'heure de la pause"
} else if(heures > HEURES_PAUSE 
    || (heures == HEURES_PAUSE && minutes > MINUTES_PAUSE + 15)) {
    document.body.innerText = 'La pause est finie !!'
} else {
    let heure_restantes = HEURES_PAUSE - heures;
    let minutes_restantes = MINUTES_PAUSE - minutes;
    if(minutes_restantes < 0) {
        // recalculer les minutes et les heures si le nombre de minutes est < 0
        heure_restantes -= 1;
        minutes_restantes += 60
    }

    // document.body.innerText = "Il reste " + heure_restantes + "h" +
    //     minutes_restantes + " avant la pause";

    document.body.innerText = `Il est ${heures}:${minutes} !!`

    if(heure_restantes == 0) {
        document.body.innerText += `
            Il reste ${minutes_restantes} minutes avant la pause !
        `
    } else {
        // permet de formater les minutes en 9 -> 09 ou 0 -> 00
        m = minutes_restantes.toString().padStart('2', '0')
        document.body.innerText += ` 
            Il reste ${heure_restantes}h${m} avant la pause !
        `
    }
    
}
