// Element du DOM
const input_eur = document.getElementById('input_eur') 
const select_cur = document.getElementById('select_cur') 
const btn_convert = document.getElementById('btn_convert') 
const result = document.getElementById('resultat') 

btn_convert.onclick = () => {
    // recupérer le valeur en nombre
    const eur = input_eur.valueAsNumber
    // recupérer la valeur en texte
    const currency = select_cur.value
    let conversion = eur * currency
    // switch(currency) {
    //     case 'Dollar':
    //         conversion = eur * 1.16
    //         break
    //     case 'Yen':
    //         conversion = eur * 185.43
    //         break
    //     case 'Livre':
    //         conversion = eur * 0.86
    //         break
    // }
    // arrondi à 2 decimales
    result.innerText = conversion.toFixed(2)
}