// Calculatrice.

const calcScreen = document.getElementById("calcScreen");
const btn = document.querySelectorAll(".case");
const repCalc = document.getElementById("repCalc");
const MAX_HISTORY = 10;

// inputUser contient l'expression que l'utilisateur construit au fur et à mesure.
// histo garde les dernières opérations calculées pour afficher un historique lisible.
let inputUser = "";
let histo = [];

// Formate un résultat pour l'affichage.
// Les entiers sont affichés tels quels, tandis que les décimaux sont arrondis à 6 chiffres.
function formatResult(result) {
    return Number.isInteger(result) ? `${result}` : `${result.toFixed(6)}`;
}

// Met à jour l'écran principal de la calculatrice.
function renderScreen(value) {
    calcScreen.innerHTML = value;
}

// Affiche l'historique dans le panneau prévu à cet effet.
function renderHistory() {
    repCalc.innerHTML = histo.join('<br>');
}

// Ajoute une ligne à l'historique et supprime les plus anciennes
// quand on dépasse la limite fixée par MAX_HISTORY.
function addToHistory(entry) {
    histo.push(entry);

    if (histo.length > MAX_HISTORY) {
        histo = histo.slice(-MAX_HISTORY);
    }

    renderHistory();
}

// Utilisé pour tous les boutons qui ajoutent un symbole à l'expression
// comme les chiffres, les opérateurs et les parenthèses.
function applyInput(value) {
    inputUser += value;
    renderScreen(inputUser);
}

// Remet la saisie à zéro.
// On vide à la fois l'expression en cours et l'écran.
function clearInput() {
    inputUser = "";
    renderScreen("");
}

// Supprime uniquement le dernier caractère saisi.
// slice(0, -1) signifie : prendre la chaîne du début jusqu'à l'avant-dernier caractère.
function deleteLastCharacter() {
    inputUser = inputUser.slice(0, -1);
    renderScreen(inputUser);
}

// Sert à changer le signe.
// Si une valeur existe déjà, on la transforme en négatif.
// Sinon on prépare une saisie commençant par un tiret.
function toggleSign() {
    if (inputUser !== "") {
        inputUser = `${-parseFloat(inputUser)}`;
        renderScreen(inputUser);
        return;
    }

    applyInput("-");
}

// Le bouton = lance le calcul final.
// eval() lit une chaîne de caractères comme du JavaScript, ce qui est pratique ici
// ATTENTION : eval() peut être dangereux si on lui donne des entrées non contrôlées, mais ici c'est limité à ce que l'utilisateur tape dans la calculatrice.

function calculateResult() {
    try {
        const result = eval(inputUser);

        // On refuse les résultats non valides ou infinis avant de les afficher.
        if (!Number.isFinite(result)) {
            throw new Error("Resultat infinis ou invalide");
        }

        // On affiche le résultat, puis on garde une trace dans l'historique.
        const formattedResult = formatResult(result);
        renderScreen(formattedResult);
        addToHistory(`${inputUser} = ${formattedResult}`);
        inputUser = formattedResult;
    } catch (error) {
        // Si l'expression est invalide, on guide l'utilisateur vers un reset manuel.
        renderScreen("Erreur : veuillez clear.");
    }
}

// Un seul gestionnaire pour toutes les touches :
// on lit la valeur du bouton avec data-value, puis on choisit l'action correspondante.
btn.forEach((touche) => {
    touche.onclick = () => {
        const caseCalc = touche.dataset.value;

        if (caseCalc === '=') {
            calculateResult();
        } else if (caseCalc === 'C') {
            clearInput();
        } else if (caseCalc === 'del') {
            deleteLastCharacter();
        } else if (caseCalc === 'switch') {
            toggleSign();
        } else {
            applyInput(caseCalc);
        }
    };
});
