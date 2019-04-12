/*
Définit clic sur une tuile.
*/
function definirClicTuile(td,lieu,positionTuile){
	$(td).click(function(){
		if (actionPossible(lieu.nom,{positionTuile:positionTuile})){
			gainRessourcesLieu(global.indiceJoueurActif,lieu,positionTuile);	
			lieu.oterTuile(positionTuile);
			globalF.utiliserPersonnageActif();
			updateHTMLTuile(td,lieu,positionTuile);
			updateHTMLJoueur(global.indiceJoueurActif);
		}
	});
}

/*
Définit bâtiment.
*/
function definirClicBatiment(td,indiceBatiment){
	$(td).click(function(){
		if (actionPossible(donnees.nomBatiments,{indiceBatiment:indiceBatiment})){
			construireBatiment(indiceBatiment);
			globalF.utiliserPersonnageActif();
			updateHTMLBatiments();
			updateHTMLJoueur(global.indiceJoueurActif);
		}
	});
}

/*
Définit clic sur zone de repos
*/
function definirClicRepos(td){
	$(td).click(function(){
		if (actionPossible(donnees.nomRepos,{})){ //Sans le "if action possible", il exécute l'action PUIS se plaint que globalF.personnageActif() n'existe pas !
		//Sans doute parce qu'il tente d'exécuter le clic une 2nde fois...
			repos();
			globalF.utiliserPersonnageActif();
			updateHTMLRepos();
			updateHTMLJoueur(global.indiceJoueurActif);
		}

	});
}

/*
Définit clic sur un personnage
*/
function definirClicPersonnage(div,indiceJoueur,indicePersonnage){
	$(div).click(function(){
		if (indiceJoueur == global.indiceJoueurActif){ //Clic réservé au joueur actif
			if (global.joueurs[global.indiceJoueurActif].personnageDisponible(indicePersonnage)){
				var dejaActif = false;
				if (global.indicePersonnageActif == indicePersonnage){
					console.log(global.indicePersonnageActif);
					global.indicePersonnageActif = -1;
					dejaActif = true;
				}
				if (!dejaActif){
					global.indicePersonnageActif = indicePersonnage;
				}
				updateHTMLJoueur(indiceJoueur);
			}
		}
	});
}