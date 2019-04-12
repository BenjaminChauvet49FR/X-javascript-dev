function copierBatiment(batiment){
	return {
		coutPierre : batiment.coutPierre,
		coutPiece : batiment.coutPiece,
		etapesJoueur : batiment.etapesJoueur.slice(),
		etapesTotal : batiment.etapesTotal,
		nom : batiment.nom,
		vpBase : batiment.vpBase,
		vpDiffere : batiment.vpDiffere
	}
}