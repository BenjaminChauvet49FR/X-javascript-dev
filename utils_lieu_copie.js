function copierLieu(lieu){
	return{
		donnees : lieu.donnees,
		tableau : lieu.tableau.slice(),
		nbPotentiels : lieu.nbPotentiels,
		nbLibres : lieu.nbLibres,
		pris : lieu.pris.slice(),
		nom : lieu.nomCode,
		oterTuile : function(position){
			this.tableau[position]= -1;
		},
		estVide : function(position){
			return this.tableau[position] == -1;
		}
	}
}