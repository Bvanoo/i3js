# Stuctures conditionelles

- if simple
```js
if(cond) {
    // instructions
}
```

- if - else if - else
```js
if(cond) {
    // instructions
} else if (autre condition) {
    // instructions
} else {
    // instructions
}
```

- switch case

```js
switch(variable) {
    case 1:
        console.log('Janvier')
        break
    case 2:
        console.log('Février')
        break
    // ...
    default:
        console.log('...')
        break
}
```

- opérateur ternaire
```js
let valeur = cond ? 42 : 44
// valeur contiendra 42 si la condition est vrai sinon 44
```

# Boucles

- while (tant que)

```js
while(cond) {
    // les instructions seront répétées tant que la condition reste vraie
    // instructions
}
```

- for

```js
for(let i = 0; i < 10; i++) {
    // ici les instructions sont répétées un certain nombre de fois
    // et i va varier de 0 à ...
}
```

- for of

```js
let profs = ['Khun', 'Aude', 'Mike', 'Jérôme']

for(let prof of profs) {
    // ici la boucle se répetera autant de fois qu'il y a de profs
    // et prof variera de 'Khun' à ....
}
```

# DOM

Récupérer une ou plusieurs balises HTML

- By Id

```js
// permet de récupérer dans l'html l'élément qui possède l'id toto
let elem = document.getElementById('toto')
```

- By Selecteur

```js
// permet de récupérer le premier element qui correspond à un selecteur css
let elem = document.querySelector('.myClass')

// permet de récupérer la liste des élements qui correspondent au sélecteur css
let elems = document.querySelectorAll('.myClass')

// ex si je souhaite récuprérer le 2eme paragraphe d'une page
let paragraphes = document.querySelectorAll('p')
let secondP = paragraphes[1]
```

- Modification du style

```js
// elem.style.<property> = <valeur>
elem.style.color = '#FFFF00'
// modifie la couleur de l'élément en jaune 
```

- Modifier une classe

```js
elem.classList.add('nomDeLaClasseAAjouter')
elem.classList.remove('nomDeLaClasseARetirer')
elem.classList.toggle('nomDeLaClasseAModifier')
```

- Créer des nouveaux éléments

```js
// créer un paragraphe <p></p>
const elem = document.createElement('p')

// créer une image <img />
const im = document.createElement('img')
```

- Ajouter/Retirer/Déplacer dans le DOM

```js
// ajoute ou deplace un element dans un autre element
element.append(autreElement)

// retire l'element
autreElement.remove()
```

- Modication du texte/src/href d'un élément
```js
element.innerText = 'hello world !!'
image.src = 'http://....'
lien.href = 'http://....'
```

- Événement (click)

```js
// par exemple
// const elem = document.getElementById('idDuBtn')
elem.onclick = () => {
    // ce que je veux faire apres avoir cliqué sur un element
}
```