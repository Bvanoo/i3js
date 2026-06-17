// DOM 

// form inputs
const inputName = document.getElementById('input_name');
const selectDev = document.getElementById('select_dev');
const inputDate = document.getElementById('input_date');
const inputImportant = document.getElementById('input_important');

const btnAdd = document.getElementById('btn_add');
const tbodyTable = document.getElementById('liste_taches');


// BONUS sera utile pour les tris
const tasks = [];
const btnSortAsc = document.getElementById('btn_sort_asc');
const btnSortDesc = document.getElementById('btn_sort_desc');

btnAdd.onclick = () => {
    const task = {
        name: inputName.value,
        dev: selectDev.value,
        date: inputDate.valueAsDate,
        important: inputImportant.checked
    };
    // BONUS sera utile pour les tris
    tasks.push(task);

    // BONUS (NE PAS MONTRER tout de suite mais après l'implémentation du tri)
    // COPIER simplement le contenu de la fonction ICI
    const row = createRow(task);
    
    tbodyTable.append(row);

    // vider les inputs
    inputName.value = null;
    inputDate.value = null;
    selectDev.value = null;
    inputImportant.checked = false;
}   

// BONUS TRIS remplacer plus tard par une seule fonction
// btnSortAsc.onclick = () => {
//     tasks.sort((t1, t2) => t1.date - t2.date);
//     tbodyTable.innerHTML = '';
//     for (const t of tasks) {
//         tbodyTable.append(createRow(t))
//     }
// }

// btnSortDesc.onclick = () => {
    
//     tasks.sort((t1, t2) => t2.date - t1.date);
//     tbodyTable.innerHTML = '';
//     for (const t of tasks) {
//         tbodyTable.append(createRow(t))
//     }
// }


function sortTasks(way){
    if(way === "asc"){
        tasks.sort((t1, t2) => t1.date - t2.date);
    }else{
        tasks.sort((t1,t2) => t2.date - t1.date);
    }
    tbodyTable.innerHTML = '';
    for (const t of tasks) {
        tbodyTable.append(createRow(t))
    }
}

btnSortAsc.onclick = () => sortTasks("asc");
btnSortDesc.onclick = () => sortTasks("desc");



function createRow(exemple){
    const row = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdDev = document.createElement('td');
    const tdDate = document.createElement('td');
    const tdAction = document.createElement('td');

    // BONUS
    const deleteBtn = document.createElement('button');
    const trashIcon = document.createElement('i');

    // utile pour le style -> voir css
    if(exemple.important) 
        row.classList.add('important');
    
    tdName.innerText = exemple.name;
    tdDev.innerText = exemple.dev;
    tdDate.innerText = exemple.date.toLocaleDateString();

    // BONUS
    // uniquement utile pour le style
    deleteBtn.classList.add('btn_supprimer');
    trashIcon.classList.add('fa', 'fa-trash');
    deleteBtn.onclick = () => {
        // retirer du DOM
        row.remove();

        // BONUS sera utile pour les tris
        // retirer de la liste des taches
        tasks.splice(tasks.indexOf(exemple), 1);
    }

    // on imbrique ensuite tous les éléments
    deleteBtn.append(trashIcon);
    tdAction.append(deleteBtn);
    row.append(tdName, tdDev, tdDate, tdAction);

    return row
}