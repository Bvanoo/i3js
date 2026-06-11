// // variables

// // variables scalaires 
// let maVariable = 'coucou'; // "coucou" `coucou`
// let nb = 42;
// let flag = true;
// let date = new Date()

// // variables composites
// let array = ['c#', 'js', 'python', 'sql'];
// let obj = { nom: 'LY', prenom: 'Khun', age: 44 };
// let bibliotheque = [
//     { titre: 'La nuit de temps', auteur: 'Barjavel' },
//     { titre: 'Bilbo le hobbit', auteur: 'Tolkien' },
// ]

// if(/*condition*/ nb > 55) {
//     // instructions
// } 
// else if (/* autre condition */ nb < 12) {
//     // autres instruction
// } 
// else {
//     // encore d'autres instructions
// }

// // la date du jour
// let today = new Date();
// console.log(today.getHours());

// for i in range(0,50,1) 
// for (let i = 0; i < 50; i++) {
//     // repéter 50 fois qqs chose
//     console.log(i)
// }

// let tableau = ['pommes', 'poires', 'bananes', 'peches'];

// // for item in tableau 
// for (let item of tableau) {
//     console.log(item)
// }

// let obj = { nom: 'Khun', age: 44 }

// // tres peu utilisée
// for (let prop in obj) {
//     console.log(prop) // nom -> age
//     console.log(obj[prop]) // Khun -> 44
// }

// continuer = true
// compteur = -1
// while(continuer) {
//     continuer = confirm('Voulez-vous continuer')
//     compteur += 1
// }

// document.body.innerText = `Vous avez accepter ${compteur} fois`

// creér un element html // document.createElement('nom de la balise')
// let p = document.createElement('p') // créer une balise <p></p>
// // modifier le texte de l'element
// p.innerText = 'Voici un super texte pour mon paragraphe 🍔'

// let s = document.createElement('span')
// s.innerText = 'Texte du span'

// let img = document.createElement('img')
// // modifier la source de l'image
// img.src = 'https://static.nationalgeographic.fr/files/styles/image_3200/public/nationalgeographic_1468962.webp?w=1600&h=900'

// // ajouter l'image au body
// document.body.append(img)

// // ajouter le span dans le paragraphe
// p.append(s)

// document.body.append(p)

// // retirer un element
// p.remove()

// document.body.append(p)

// événements

let btn = document.createElement('button')
btn.innerText = 'click me'
document.body.append(btn)


// btn.addEventListener('click',() => {
//     console.log('coucou')
// })

// function f () {
//     console.log('cuicui')
// }

// btn.addEventListener('click', f)

btn.onclick = () => {
    console.log('coucou')
}



