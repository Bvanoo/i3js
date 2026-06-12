# Crée ton Gestionnaire de Tâches (Todo List)

## Objectif

Créer une application web dynamique en JavaScript permettant de gérer des tâches de développement. L'application devra permettre d'ajouter des tâches via un formulaire et de les afficher dans un tableau.

---

## Partie 1 : Le Formulaire HTML

Crée une page HTML avec un formulaire contenant les éléments suivants :

* **Nom de la tâche** : Un champ de texte (`<input type="text">`).
* **Développeur assigné** : Une liste déroulante (`<select>`) avec au moins 3 prénoms.
* **Date de fin** : Un sélecteur de date (`<input type="date">`).
* **Importance** : Une case à cocher (`<input type="checkbox">`) "Tâche importante".
* **Bouton** : Un bouton de soumission pour ajouter la tâche.

Sous ce formulaire, crée un **tableau HTML** (`<table>`) vide (avec juste une ligne d'en-tête) qui servira à afficher les tâches.

---

## Partie 2 : La Logique JavaScript (Fonctionnalités attendues)

Lorsque l'utilisateur valide le formulaire, ton script JavaScript doit :

1. **Récupérer les valeurs** saisies par l'utilisateur.
2. **Ajouter une nouvelle ligne** (`<tr>`) dans le tableau HTML avec les cellules (`<td>`) correspondantes : Nom, Développeur, Date de fin.
3. **Gérer l'urgence (Le bonus visuel)** : Si la case "Tâche importante" est cochée, la ligne du tableau doit **s'afficher en rouge** (ajoute une classe CSS ou modifie le style directement en JS).
4. **Vider le formulaire** après l'ajout pour pouvoir saisir une nouvelle tâche.

---

## Partie 3 : Bonus (Pour les plus rapides)

Ajoute un bouton supprimer sur chaque ligne pour supprimer une tache

Ajoute deux boutons au-dessus de ton tableau : **"Trier par date croissante"** et **"Trier par date décroissante"**.

> 💡 **Indice pour le bonus :** Pour réussir cette partie, il sera plus simple de stocker tes tâches dans un **tableau d'objets JavaScript** `[{...}, {...}]`. À chaque clic sur un bouton de tri, tu devras trier ce tableau d'objets, vider le tableau HTML, puis le regénérer à partir des données triées.