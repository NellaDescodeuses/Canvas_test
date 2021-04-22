var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//je crée un début de chemin
ctx.beginPath();
ctx.strokeStyle = 'red';
/*
point de départ du segment commence a 20px vers la droite horizontalement (en haut a gauche)
point de départ du segment a 30px vers le bas
 dans canvas
*/
ctx.moveTo(20,30);
/*
point d'arrivée du segment à 100px horizontalement.
point d'arrivée du segment a 30 px verticalement
*/
ctx.lineTo(100,30);
//ajout d'une nouvelle ligne
/*
la nouvelle ligne commence au point d'arret de la 1ere ligne
départ à 100px horizontalement
arrivée à 80px verticalement
*/
ctx.lineTo(100,80);
//ajout d'une nouvelle ligne
/*
la nouvelle ligne commence au point d'arret de la 1ere ligne
départ à 20px horizontalement
arrivé 80px verticalement
*/
ctx.lineTo(20,80);
//ajout d'une nouvelle ligne
/*
la nouvelle ligne commence au point d'arret de la 1ere ligne
départ à 20px horizontalement
arrivé 30px verticalement
*/
ctx.lineTo(20,30);
//je dessine la ligne
ctx.stroke();
ctx.closePath();
//j'attribue une couleur rouge à mon  contour.
// le .fillStyle remplira la forme.
// ctx.strokeStyle = 'red';
/*l'élément canvas le premier chiffre est x = axe hotizontale et le second y= axe vertical.
x= de 10px à 50px horizontalement
y= de 10px à 50px verticalement

cela part de 0, en haut à gauche.
*/
//strokeRect applique un contour.
//.fillRect fera une forme pleine.
// ctx.strokeRect(10,10,50,50);
