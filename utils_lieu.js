
function creerLieu(tableauDonnees,nomCode){
	return{
		donnees : tableauDonnees,
		tableau : [], //Concrètement, tableau contient des entiers compris entre 0 à et donnees.length-1, ou bien -1 pour signifier que c'est vide.
		nbPotentiels : tableauDonnees.length,
		nbLibres : tableauDonnees.length,
		pris : tableauDeFalse(tableauDonnees.length),
		nom : nomCode,
		oterTuile : function(position){
			this.tableau[position]= -1;
		},
		estVide : function(position){
			return this.tableau[position] == -1;
		}
	}
}







/*
* Remplit le tableau d'un "lieu" avec des numéros jusqu'à atteindre un nombre de numéros égal à jusquATaille
*/ 
function remplirLieu(lieu, jusquATaille){
	//Purger les "-1" et décaler les cases restantes à gauche
	lieu.tableau = lieu.tableau.filter(function(value, index, arr){
		//return (value != -1);
		return (!lieu.estVide(index));
	});
	//Initialisation
	var nbNouveaux = jusquATaille-lieu.tableau.length;
	if (nbNouveaux < 1)
		return;
	var nouveaux = [];
	var alea;
	var aleaReel;
	var index;
	//Pour chaque nouveau nombre à insérer...
	for(var i=0;i<nbNouveaux;i++){
		//Tirer 1 nombre aléatoire parmi ceux libres (si [0,1,3,5,7] sont libres, nbLibres = 5 et on tire aléatoirement l'un d'eux)
		alea = aleatoire(0,lieu.nbLibres-1);
		aleaReel = 0;
		j = 0;
		while(lieu.pris[aleaReel]){
			aleaReel++;
		}
		while(j<alea){
			while(lieu.pris[aleaReel]){
				aleaReel++;
			}
			j++;
			if (j<alea){
				aleaReel++;
			}
		}
		lieu.nbLibres--;
		lieu.pris[aleaReel] = true;
		//Si toutes les tuiles sont dans la défausse, on recycle les anciennes SAUF celles sur le plateau...
		if (lieu.nbLibres == 0){
			for(j=0;j<lieu.donnees.length;j++){
				lieu.pris[j] = false;
			}
			lieu.nbLibres = lieu.donnees.length;
			for(j=0;j<lieu.tableau.length;j++){
				if (estVide(lieu,j)){
					lieu.pris[lieu.tableau[j]] = true;
					lieu.nbLibres--;
				}
			}
			for(j=0;j<nouveaux.length;j++){
				lieu.pris[nouveaux[j]] = true;
				lieu.nbLibres--;
			}
		}
		nouveaux.push(aleaReel);
	}
	Array.prototype.push.apply(lieu.tableau,nouveaux.sort(function(a, b) {return a - b;}));
}
