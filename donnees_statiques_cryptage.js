/*
Augmente la caractéristique d'un personnage sur une lettre
*/

function augmenterPersonnageDeLettre(personnage,lettre){
	switch(lettre){
		case 'F': skill(personnage.force,1);apprendreSkill(personnage.force,false);break;
		case 'M': skill(personnage.minage,1);break;
		case 'A': skill(personnage.agriculture,1);break;
		case 'C': skill(personnage.combat,1);break;
		case 'O': skill(personnage.construction,1);break;
		case 'R': skill(personnage.artisanat,1);break;
		case 'I': skill(personnage.intelligence,1);break;
		case 'p': skill(personnage.apprentissage,1);break;
		case 'c': skill(personnage.achat,1);break;
		case 'D': skill(personnage.dracologie,1);break;
	}
}

function augmenterRessourceDeLettre(joueur,lettre){
	switch(lettre){
		case 'F': joueur.fer+=1;break;
		case 'P': joueur.pierres+=1;break;
		case 'O': joueur.or+=1;break;
		case 'r': joueur.gemR+=1;break;
		case 'v': joueur.gemV+=1;break;
		case 'b': joueur.gemB+=1;break;
		case '$': joueur.pieces+=1;break;
		case 'N': joueur.bouffe+=1;break;
	}
}

function imageRessourceDeLettre(lettre){
	var reponse = "";
	var p_largStandard = 16;
	var p_hautStandard = 24;
	switch(lettre){
		case 'F' :reponse=imageFer(p_largStandard,p_hautStandard);break;
		case 'P':reponse=imagePierre(p_largStandard,p_hautStandard);break;
		case 'O':reponse=imageOr(p_largStandard,p_hautStandard);break;
		case 'r':reponse=imageGemmeRouge(p_largStandard,p_hautStandard);break;
		case 'v':reponse=imageGemmeVerte(p_largStandard,p_hautStandard);break;
		case 'b':reponse=imageGemmeBleue(p_largStandard,p_hautStandard);break;
		case 'N':reponse=imageBouffe(p_largStandard,p_hautStandard);break;
		case '$':reponse=imagePiece(p_largStandard);break;
	};
	return reponse;
}