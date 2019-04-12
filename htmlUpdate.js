

/*
MAJ visuelle d'une tuile
*/
function updateHTMLTuile(td,lieu,position){
	var htmla = "";
	if(lieu.tableau[position] == -1){
		$(td).attr("class","pris");
	}else{
		htmla = lieu.tableau[position]+"</br>";
		var chaineRessources = lieu.donnees[lieu.tableau[position]];
		$(td).attr("class","pasPris");
		for(var i=0;i<chaineRessources.length;i++){
			htmla+=imageRessourceDeLettre(chaineRessources.charAt(i));
		}	
	}
	$(td).html(htmla);
}

/*
MAJ visuelle d'un personnage
*/
function updateHTMLPersonnage(div,joueur,indicePersonnage){
	var perso = joueur.persos[indicePersonnage];
	var dispo = perso.disponible();
	var selectionne = (global.indicePersonnageActif == indicePersonnage);
	$(div).attr("disponible",dispo);
	$(div).attr("selectionne",selectionne);
	var htmla = "";
	htmla+=htmlSkill(perso.force,imageForce());
	htmla+=htmlSkill(perso.minage,imageMinage());
	htmla+=htmlSkill(perso.agriculture,imageAgriculture());
	htmla+=htmlSkill(perso.artisanat,imageArtisanat());
	htmla+=htmlSkill(perso.combat,imageCombat());
	$(div).html(htmla);
}

/*
Retourne le HTML d'une compétence donnée
*/
function htmlSkill(skill,imageHTML){
	if (skill.val > 0){
		var classe = "";
		var classe2 = "";
		if (skill.appr){
			classe = "<span class=\"apprendre\">"; 
			classe2 = "</span>";
		}
		return imageHTML+classe+skill.val+classe2+"  ";
	}else{
		return "";
	}
}

//------------------------------------
//MAJ des lieux et joueurs

/*
MAJ des champs en HTML
*/
function updateHTMLChamps(){
	var td;
	for(var i=0;i<9;i++){
		td = zoneChamps[0].children[0].children[i]; //WTF ? tableHTML[0] et non tableHTML.children...
		updateHTMLTuile(td,global.champs,i);
		definirClicTuile(td,global.champs,i);
	}	
}

/*
MAJ de la mine en HTML
*/
function updateHTMLMine(){
	var td;
	for(var i=0;i<9;i++){
		td = zoneMine[0].children[0].children[i]; //WTF ? tableHTML[0] et non tableHTML.children...
		updateHTMLTuile(td,global.mine,i);
		definirClicTuile(td,global.mine,i);
	}	
}

//--------


/*
MAJ des bâtiments (gestion très incomplète de ceux-ci mais bon...)
*/
function updateHTMLBatiments(){
	var divBatiments;
	var htmlBatiments;
	var batiment;
	$(zoneBatiments).html("");
	for(var indiceBatiment = 0;indiceBatiment<2;indiceBatiment++){
		divBatiments = $(document.createElement("td"));
		divBatiments.attr("class","batiment");
		batiment = global.batiments[indiceBatiment];
		htmlBatiments = batiment.nom+" "+batiment.vpBase+"("+batiment.vpDiffere+")"+"</br>";
		htmlBatiments += batiment.etapesJoueur[0]+"/"+batiment.etapesTotal+"</br>";
		htmlBatiments += imagePierre()+batiment.coutPierre+" - "+imagePiece()+batiment.coutPiece;
		divBatiments.html(htmlBatiments);
		definirClicBatiment(divBatiments,indiceBatiment);
		$(zoneBatiments).append(divBatiments);
	}
}

//--------
/*
MAJ de la zone de repos
*/

function updateHTMLRepos(){
	definirClicRepos(zoneRepos);
}

//--------

/*
Maj d'un joueur en HTML
*/
function updateHTMLJoueur(indiceJoueur){
	var htmlJoueur = '';
	var divDonneesJoueur = document.createElement("div");
	$(divDonneesJoueur).attr("actif",global.indicePersonnage = global.indicePersonnageActif);
	var joueur = global.joueurs[indiceJoueur];
	htmlJoueur+=imagePiece()+joueur.pieces+"  ";
	htmlJoueur+=imageSagesse()+joueur.sagesse+"  ";
	htmlJoueur+=imagePV()+joueur.pv+"</br>";
	htmlJoueur+=imagePierre()+joueur.pierres+"  ";
	htmlJoueur+=imageFer()+joueur.fer+"  ";
	htmlJoueur+=imageBouffe()+joueur.bouffe+"</br>";
	htmlJoueur+=imageGemmeRouge()+joueur.gemR+"  ";
	htmlJoueur+=imageGemmeVerte()+joueur.gemV+"  ";
	htmlJoueur+=imageGemmeBleue()+joueur.gemB+"  ";
	htmlJoueur+=imageOr()+joueur.or+"<hr>";
	htmlJoueur+="<div class=\"personnages\"></div>";
	$(divDonneesJoueur).html(htmlJoueur);
	var div;
	var divPersonnages = document.createElement("div");
	for(var indicePerso=0;indicePerso<joueur.persos.length;indicePerso++){
		div = document.createElement("div");
		$(div).attr("class","personnage");
		updateHTMLPersonnage(div,joueur,indicePerso);
		divPersonnages.append(div);
		definirClicPersonnage(div,indiceJoueur,indicePerso);
	}
	$(zoneJoueurs[0].children[indiceJoueur]).html("");
	$(zoneJoueurs[0].children[indiceJoueur]).append(divDonneesJoueur);
	$(zoneJoueurs[0].children[indiceJoueur]).append(divPersonnages);
}


/*
Bouton de la nouvelle manche
*/
$("#nouvelleManche").click(function(){
	remplirLieu(global.mine,9);
	updateHTMLMine();
	remplirLieu(global.champs,9);
	updateHTMLChamps();
	for (var indiceJoueur = 0; indiceJoueur < global.joueurs.length;indiceJoueur++){
		var joueur = global.joueurs[indiceJoueur];
		for(var indicePerso = 0 ; indicePerso < joueur.persos.length;indicePerso++){
			var personnage = joueur.persos[indicePerso];
			//console.log(personnage.construction.val);
			personnage.rafraichir();
		}
		updateHTMLJoueur(indiceJoueur);
		updateHTMLRepos();
	}
});


/*
Sauvegarde et charge (merci le stockage local)
*/

$("#sauver").click(function(){
	globalSauver();
});

$("#sauver").click(function(){
	globalCharger();
});