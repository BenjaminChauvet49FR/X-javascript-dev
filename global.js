//-------------------------------------------------------------
//Variables globales accessibles à tous

var global={
	joueurs : [
	nouveauJoueur(),
	nouveauJoueur()
	],
	indiceJoueurActif : 0,
	indicePersonnageActif : -1,
	mine : creerLieu(donnees.tuilesMine,donnees.nomMine),
	champs : creerLieu(donnees.tuilesChamps,donnees.nomChamps),
	batiments:[
		donnees.batiment1,
		donnees.batiment2
	]
}

var globalF = {
	joueurActif : function(){
		return global.joueurs[global.indiceJoueurActif];
	},
	personnageActif : function(){
		if (globalF.joueurActif()){
			return globalF.joueurActif().persos[global.indicePersonnageActif];	
		}
		return undefined;
	},
	desactiverTousPersonnages : function(){
		global.indicePersonnageActif = -1;
	},
	utiliserPersonnageActif : function(){
		globalF.personnageActif().epuiser();
		globalF.desactiverTousPersonnages();
	}
}

globalSauver();



