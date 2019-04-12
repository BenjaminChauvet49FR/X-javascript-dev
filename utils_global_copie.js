function copierGlobal(global2){
	return {
		joueurs : copierJoueurs(global2.joueurs),
		batiments : copierBatiments(global2.batiments),
		indiceJoueurActif : global2.joueurActif,
		indicePersonnageActif : global2.personnageActif,
		mine : copierLieu(global2.mine),
		champs : copierLieu(global2.mine)
	}
}

// --------------------
//Copies de tableau

function copierJoueurs(joueurs){
	var reponse = [];
	for(var i=0;i<persos.length;i++){
		reponse.push(copierPersonnage(persos.get(i)));
	}
	return reponse;
}

function copierBatiments(batiments){
	var reponse = [];
	for(var i=0;i<persos.length;i++){
		reponse.push(copierPersonnage(persos.get(i)));
	}
	return reponse;
}

// ---------------
//var globalBackup = undefined;

function globalSauver(){
	//JSON.stringify(global);
//	globalBackup = copierGlobal(global);
	localStorage.setItem('dragonRiderGlobal',JSON.stringify(global));
}

function globalCharger(){
	//global = copierGlobal(globalBackup);
	global = JSON.parse(localStorage.getItem('dragonRiderGlobal'));
}