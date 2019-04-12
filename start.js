/*
Mise en place...
*/
var tailleStandardLieu = 9;

insererJoueurHTML($("#zoneJoueurs"),1);
insererJoueurHTML($("#zoneJoueurs"),2);
creerLieuHTML($("#zoneChamps"),tailleStandardLieu,"Champs");
creerLieuHTML($("#zoneMine"),tailleStandardLieu,"Mine");
updateHTMLBatiments();

remplirLieu(global.champs,tailleStandardLieu);
updateHTMLChamps();

remplirLieu(global.mine,tailleStandardLieu);
updateHTMLMine();

updateHTMLRepos();

//Artificiel : Faciliter l'apprentissage d'un nouveau personnage
updateHTMLJoueur(0);
updateHTMLJoueur(1);