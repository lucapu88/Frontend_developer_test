
var carousel = document.getElementById("carosello"); //prendo il contenitore dove vorrei fare scroll
var scrollPosition = 0; //setto la posizione iniziale
var scrollChange = 150; //setto di quanto dovrebbe aumentare o diminuire la posizione
function myMoveLeft() { //ad ogni click sulla freccia di sinistra
    scrollPosition = scrollPosition - scrollChange; //sottraggo alla posizione iniziale il valore di cambiamento settato 
    carousel.scrollTo(scrollPosition, 0); //vado ad assegnare la posizione finale al contenitore sull'asse x
}
function myMoveRight() { //stessa identica cosa di sopra, soltanto che aggiungo invece che sottrarre
    scrollPosition = scrollPosition + scrollChange;
    carousel.scrollTo(scrollPosition, 0);
}

