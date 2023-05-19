/*function tableau(){
    let JoueursFoot = ['Mbappe','Griezmann','Ronaldo','Messi','Neymar'];
    for (let i = 0; i < JoueursFoot.length; i++){
        console.log(JoueursFoot);
    }
}
tableau();
*/

/*function textColor(){
    let col = document.getElementById('color-text');
    col.style.color = 'red';
}
*/

/*function AddDiv(){
    let Div = document.createElement("div");
    let DivContent = document.createTextNode('Salut');
    Div.appendChild(DivContent);

    let DivExist = document.getElementById('text1');
    document.body.insertBefore(Div, DivExist);
}
AddDiv();
*/

// configurer la table
let tab = document.getElementById("container");
tab.setAttribute("border", "2");

// Créer et configurer un thead
let thead = document.createElement("thead");
thead.setAttribute("class", "headTitre");
// Ajouter le nouvel élément à l'élément parent
tab.appendChild(thead);

// Créer et configurer un tr
let tr1 = document.createElement("tr");
tr1.setAttribute("class", "trTitre");
// Ajouter le nouvel élément à l'élément parent
thead.appendChild(tr1);

// Créer et configurer un th
let th = document.createElement("th");
th.setAttribute("class", "thTitre");
th.textContent = "Noms des joueurs";
// Ajouter le nouvel élément à l'élément parent
tr1.appendChild(th);

// Créer et configurer un tbody
let _tbody = document.createElement("tbody");
_tbody.setAttribute("class", "tBody");
// Ajouter le nouvel élément à l'élément parent
tab.appendChild(_tbody);

// BLOC SUPPRIMER
let th2 = document.createElement("th");
th2.setAttribute("class", "headBody");
th2.textContent = "Supprimer";
// Ajouter le nouvel élément à l'élément parent
tr1.appendChild(th2);


// Créer et configurer un td
let JoueursFoot = ['Mbappe','Griezmann','Ronaldo','Messi','Neymar'];

for (let i = 0; i < JoueursFoot.length; i++){
let tr2 = document.createElement("tr");
let id_tr = "Joueur" + i;
tr2.setAttribute("id", id_tr );

let _td = document.createElement("td"); // LISTE JOUEURS
let id_td = "Name" + i;
_td.textContent = JoueursFoot[i];
_td.setAttribute("id",id_td);

let _td2 = document.createElement("td"); // BOUTON SUPPRIMER
let btn_sup = document.createElement("button");
btn_sup.setAttribute("class","btn_class");
btn_sup.innerHTML+="Supprimer";
// FONCTION SUPPRIMER
document.addEventListener('DOMContentLoaded', function(){
    tableau = document.getElementById('container');
    btn_sup = tableau.getElementsByClassName('btn_class');
    btn_sup[i].addEventListener('click', suppLigne);
});
function suppLigne(event){
    let elemBtn = event.currentTarget,
    tr2 = elemBtn.parentNode.parentNode;
    tr2.remove();
}
// Ajouter le nouvel élément à l'élément parent
_tbody.appendChild(tr2);
tr2.appendChild(_td);
tr2.appendChild(_td2);
_td2.appendChild(btn_sup);
}

