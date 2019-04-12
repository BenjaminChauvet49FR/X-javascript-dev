//Ressources ------------------------------------------
var cheminFichiersRessources = "images/ressources/";

function imagePierre(p_larg,p_haut){
	return htmlImage(cheminFichiersRessources+'pierre.png',p_larg,p_haut);
}

function imageGemmeBleue(p_larg,p_haut){
	return htmlImage(cheminFichiersRessources+'gemB.png',p_larg,p_haut);
}

function imageGemmeRouge(p_larg,p_haut){
	return htmlImage(cheminFichiersRessources+'gemR.png',p_larg,p_haut);
}

function imageGemmeVerte(p_larg,p_haut){
	return htmlImage(cheminFichiersRessources+'gemV.png',p_larg,p_haut);
}

function imageFer(p_larg,p_haut){	
	return htmlImage(cheminFichiersRessources+'fer.png',p_larg,p_haut);
}


function imageOr(p_larg,p_haut){
	return htmlImage(cheminFichiersRessources+'or.png',p_larg,p_haut);
}

function imagePiece(p_cote){
	return htmlImage(cheminFichiersRessources+'piece.png',p_cote,p_cote);
}

function imageSagesse(p_cote){
	return htmlImage(cheminFichiersRessources+'sagesse.png',p_cote,p_cote);
}

function imagePV(p_cote){
	return htmlImage(cheminFichiersRessources+'pv.png',p_cote,p_cote);
}

function imageBouffe(p_larg,p_haut){
	return htmlImage(cheminFichiersRessources+'bouffe.png',p_larg,p_haut);
}

//Compétences ------------------------------------------------
var cheminFichiersCompetence = "images/competences/";

function imageForce(){
	return htmlImage(cheminFichiersCompetence+"force.png");
}

function imageArtisanat(){
	return htmlImage(cheminFichiersCompetence+"artisanat.png");
}

function imageMinage(){
	return htmlImage(cheminFichiersCompetence+"minage.png");
}

function imageAgriculture(){
	return htmlImage(cheminFichiersCompetence+"agriculture.png");
}

function imageConstruction(){
	return htmlImage(cheminFichiersCompetence+"construction.png");
}

function imageCombat(){
	return htmlImage(cheminFichiersCompetence+"combat.png");
}