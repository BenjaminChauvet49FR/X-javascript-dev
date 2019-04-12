/*
Crée une case de joueur et l'affecte à zone div.
*/
function insererJoueurHTML(tabJoueurs,numero){
		var div = $(document.createElement("div"));
		div.attr("class","joueur");
		div.attr("id","joueur"+numero);
		tabJoueurs.append(div);	
}

/*
Remplissage HTML d'un lieu
eltTableau = élément identifié par id
*/
function creerLieuHTML(eltTableau, taille){
	var tr = $(document.createElement("tr"));
	for(var i=1;i<=taille;i++){
		var td = $(document.createElement("td"));
		td.attr("class","pasPris");
		tr.append(td);	
	}
	eltTableau.append(tr);
}