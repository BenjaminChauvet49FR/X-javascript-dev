//----------------------------------
//A propos des skills

function nouveauSkill(valeur){
	return {val:valeur,appr:true};
}

function skill(skill,difference){
	skill.val+=difference;
}

function apprendreSkill(skill,boolApprendre){
	skill.appr = boolApprendre;
}

function essayerEtMonterSkill(skill){
	if ((skill.val < 5) && (skill.appr)){
		skill.appr = false;
		skill.val++;
	}
}



//------------------------------------
//A propos des personnages
function nouveauPersonnage(competences){
	var personnage = {
		frais:true,
		force:nouveauSkill(0),
		intelligence:nouveauSkill(0),
		minage:nouveauSkill(0),
		combat:nouveauSkill(0),
		agriculture:nouveauSkill(0),
		artisanat:nouveauSkill(0),
		construction:nouveauSkill(0),
		achat:nouveauSkill(0),
		developpement:nouveauSkill(0),
		dracologie:nouveauSkill(0),
		disponible:function(){
			return this.frais;
		},
		epuiser:function(){
			this.frais = false;
		},
		rafraichir:function(){
			this.frais = true;
		}
	};
	for(var i=0;i<competences.length;i++){
		augmenterPersonnageDeLettre(personnage,competences.charAt(i));
	}
	return personnage;
}

function rafraichirTousSkills(personnage){
	personnage.minage.appr = true;
	personnage.combat.appr = true;
	personnage.agriculture.appr = true;
	personnage.artisanat.appr = true;
	personnage.construction.appr = true;
}


function nouveauHeros(){
	return nouveauPersonnage('FFFFFMMAACCOORR');
}

function nouveauJoueur(){
	return {
		pierres:0,
		gemR:0,
		gemV:0,
		gemB:0,
		fer:0,
		or:0,
		bouffe:0,
		pieces:0,
		sagesse:0,
		pv:0,
		persos:[
			nouveauHeros(),
			nouveauPersonnage('FFM'),
			nouveauPersonnage('FFC'),
			nouveauPersonnage('IA'),
			nouveauPersonnage('IC')
		],
		personnageDisponible:function(indicePersonnage){
			return this.persos[indicePersonnage].disponible();
		}
	}
}