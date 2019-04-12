function copierSkill(skill){
	var retour = {
		appr : skill.appr,
		val : skill.val
	}
	return retour;
}

function copierPersonnage(personnage){
	var retour ={
		frais : personnage.frais,
		force : copierSkill(personnage.force),
		intelligence : copierSkill(personnage.intelligence),
		minage : copierSkill(personnage.minage),
		combat : copierSkill(personnage.combat),
		agriculture : copierSkill(personnage.agriculture),
		artisanat : copierSkill(personnage.artisanat),
		construction : copierSkill(personnage.construction),
		achat : copierSkill(personnage.achat),
		developpement : copierSkill(personnage.developpement),
		dracologie : copierSkill(personnage.dracologie),
		disponible:function(){
			return this.frais;
		},
		epuiser:function(){
			this.frais = false;
		},
		rafraichir:function(){
			this.frais = true;
		}
	}
	return retour;
}

function copierTableauPersos(persos){
	var reponse = [];
	for(var i=0;i<persos.length;i++){
		reponse.push(copierPersonnage(persos.get(i)));
	}
	return reponse;
}

function copierJoueur(joueur){
	var retour = {
		pierres : joueur.pierres,
		gemR:joueur.gemR,
		gemV:joueur.gemV,
		gemB:joueur.gemB,
		fer:joueur.fer,
		or:joueur.or,
		bouffe:joueur.bouffe,
		pieces:joueur.pieces,
		sagesse:joueur.sagesse,
		pv:joueur.pv,
		persos:copierTableauPersos(joueur.persos),
		personnageDisponible:function(indicePersonnage){
			return this.persos[indicePersonnage].disponible();
		}
	}
	return retour;
}

