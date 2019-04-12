function gainRessourcesLieu(indiceJoueur,lieu,positionTuile){
	var chaineRessources = lieu.donnees[lieu.tableau[positionTuile]];
	for(i=0;i<chaineRessources.length;i++){
		augmenterRessourceDeLettre(global.joueurs[indiceJoueur],chaineRessources.charAt(i));
	}
	if (lieu.nom == donnees.nomMine){
		essayerEtMonterSkill(globalF.personnageActif().minage);
	}
	if (lieu.nom == donnees.nomChamps){
		essayerEtMonterSkill(globalF.personnageActif().agriculture);
	}
}

function repos(){
	rafraichirTousSkills(globalF.personnageActif());
}

/*
	Construit un bâtiment de plusieurs étapes
*/
function construireBatiment(indiceBatiment){
	global.batiments[indiceBatiment].etapesJoueur[global.indiceJoueurActif] += 
	globalF.personnageActif().construction.val;
	essayerEtMonterSkill(globalF.personnageActif().construction);
	if (global.batiments[indiceBatiment].etapesJoueur[global.indiceJoueurActif] > global.batiments[indiceBatiment].etapesTotal)
		global.batiments[indiceBatiment].etapesJoueur[global.indiceJoueurActif] = global.batiments[indiceBatiment].etapesTotal;
}


/*
	Teste si une action est possible avec les parametres donnés
*/
function actionPossible(nomTest,parametres){
	if (!globalF.personnageActif()){
		return false;
	}
	if (nomTest == donnees.nomChamps)
		return ((!global.champs.estVide(parametres.positionTuile)) && (globalF.personnageActif().agriculture.val >= parametres.positionTuile)); //Artificiel (normalement : compétence d'un personnage du joueur actif)
	if (nomTest == donnees.nomMine){
		return ((!global.mine.estVide(parametres.positionTuile)) && (globalF.personnageActif().minage.val >= parametres.positionTuile)); //Artificiel (normalement : force d'un personnage du joueur actif)	
	} if (nomTest == donnees.nomBatiments){
			console.log("Bâtiments "+globalF.personnageActif().construction.val);
		return ((globalF.personnageActif().construction.val >= 1) && 
		(global.batiments[parametres.indiceBatiment].etapesJoueur[global.indiceJoueurActif] < 
		 global.batiments[parametres.indiceBatiment].etapesTotal));
	} 
	if (nomTest == donnees.nomRepos){
		return true;
	}

	return false;
}