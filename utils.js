/*Renvoie un entier aléatoire entre a et b inclus. Prérequis : a <= b*/
function aleatoire(a,b){
	return Math.floor(Math.random()*(b-a+1)+a);
}
 
/*Renvoie un tableau entièrement consitué de false*/
function tableauDeFalse(longueur){
	var reponse = [];
	for(var i=0;i<longueur;i++){
		reponse.push(false);
	}
	return reponse;
} 
 
function htmlImage(source,p_largeur,p_hauteur){
	if (!p_hauteur)
		return "<img src=\""+source+"\"></img>";
	return '<img src="'+source+'" style="width:'+p_largeur+'px;height:'+p_hauteur+'px;"></img>';
};
