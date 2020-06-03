//QUI SOTTO C'E' TUTTO CIO' CHE RIGUARDA IL MOVIMENTO DEL CAROSELLO AL CLICK SULLE FRECCE
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

//QUI VANNO DICHIARATE LE OPZIONI PER OGNI CARD DEL CAROSELLO

var options1 = { //inserire i relativi dati della card (cambiare soltanto il nome della classe del contenitore al posto di container, cardTitle, image e type. poi cambiare dentro il return: l'url dell'immagine, il title e type)
    container: ".caroselloCard1", //contenitore della card
    cardTitle: ".caroselloCard1 > p", //titolo della card
    image: ".caroselloCard1 > img", //immagine della card
    type: ".caroselloCard1 > h3", //tipologia di contenuto
    fetchCard: function (options) { //qui vanno inserite le proprietà della card 
        document.querySelector(options.container).style.width = "300px"; //setto la larghezza del contenitore della card
        document.querySelector(options.container).style.position = "relative"; //setto la posizione del contenitore della card
        document.querySelector(options.type).style.position = "absolute"; //setto la posizione dell'h3 (tipologia) della card
        document.querySelector(options.type).style.top= "170px"; //setto la posizione dell'h3 (tipologia) della card
        document.querySelector(options.type).style.backgroundColor= "grey"; //setto il colore di sfondo dell'h3 (tipologia) della card
        document.querySelector(options.type).style.color= "white"; //setto il colore dell'h3 (tipologia) della card
        document.querySelector(options.image).style.width = "300px"; //setto la larghezza dell'immagine all'interno della card
        document.querySelector(options.container).style.margin = "0 20px"; //setto il margine della card
        document.querySelector(options.container).style.backgroundColor = "white"; //setto il colore di background
        document.querySelector(options.cardTitle).style.padding = "10px"; //setto il padding del p

        return { //la funzione fa ritorno di un'immagine, un titolo e una tipologia
            image: 'https://images.pexels.com/photos/4403924/pexels-photo-4403924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus esse harum blanditiis perferendis iure veniam neque facilis illo accusamus unde quaerat assumenda maxime, nulla consequuntur eaque amet voluptates! Repellendus, alias.',
            type: 'VIDEO'
        };
    }
};
var options2 = { //inserire i relativi dati della card (cambiare soltanto il nome della classe del contenitore al posto di container, cardTitle, image e type. poi cambiare dentro il return: l'url dell'immagine, il title e type)
    container: ".caroselloCard2", //contenitore della card
    cardTitle: ".caroselloCard2 > p", //titolo della card
    image: ".caroselloCard2 > img", //immagine della card
    type: ".caroselloCard2 > h3", //tipologia di contenuto
    fetchCard: function (options) { //qui vanno inserite le proprietà della card
        document.querySelector(options.container).style.width = "300px"; //setto la larghezza del contenitore della card
        document.querySelector(options.container).style.position = "relative"; //setto la posizione del contenitore della card
        document.querySelector(options.type).style.position = "absolute"; //setto la posizione dell'h3 (tipologia) della card
        document.querySelector(options.type).style.top= "170px"; //setto la posizione dell'h3 (tipologia) della card
        document.querySelector(options.type).style.backgroundColor= "grey"; //setto il colore di sfondo dell'h3 (tipologia) della card
        document.querySelector(options.type).style.color= "white"; //setto il colore dell'h3 (tipologia) della card
        document.querySelector(options.image).style.width = "300px"; //setto la larghezza dell'immagine all'interno della card
        document.querySelector(options.container).style.margin = "0 20px"; //setto il margine della card
        document.querySelector(options.container).style.backgroundColor = "white"; //setto il colore di background
        document.querySelector(options.cardTitle).style.padding = "10px"; //setto il padding del p

        return { //la funzione fa ritorno di un'immagine, un titolo e una tipologia
            image: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            type: 'PLAYLIST'
        };
    }
};
var options3 = { //inserire i relativi dati della card (cambiare soltanto il nome della classe del contenitore al posto di container, cardTitle, image e type. poi cambiare dentro il return: l'url dell'immagine, il title e type)
    container: ".caroselloCard3", //contenitore della card
    cardTitle: ".caroselloCard3 > p", //titolo della card
    image: ".caroselloCard3 > img", //immagine della card
    type: ".caroselloCard3 > h3", //tipologia di contenuto
    fetchCard: function (options) { //qui vanno inserite le proprietà della card
        document.querySelector(options.container).style.width = "300px"; //setto la larghezza del contenitore della card
        document.querySelector(options.container).style.position = "relative"; //setto la posizione del contenitore della card
        document.querySelector(options.type).style.position = "absolute"; //setto la posizione dell'h3 (tipologia) della card
        document.querySelector(options.type).style.top= "170px"; //setto la posizione dell'h3 (tipologia) della card
        document.querySelector(options.type).style.backgroundColor= "grey"; //setto il colore di sfondo dell'h3 (tipologia) della card
        document.querySelector(options.type).style.color= "white"; //setto il colore dell'h3 (tipologia) della card
        document.querySelector(options.image).style.width = "300px"; //setto la larghezza dell'immagine all'interno della card
        document.querySelector(options.container).style.margin = "0 20px"; //setto il margine della card
        document.querySelector(options.container).style.backgroundColor = "white"; //setto il colore di background
        document.querySelector(options.cardTitle).style.padding = "10px"; //setto il padding del p

        return { //la funzione fa ritorno di un'immagine, un titolo e una tipologia
            image: 'https://images.pexels.com/photos/931015/pexels-photo-931015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'Another type of title',
            type: 'ELEARNING'
        };
    }
};
var options4 = { //inserire i relativi dati della card (cambiare soltanto il nome della classe del contenitore al posto di container, cardTitle, image e type. poi cambiare dentro il return: l'url dell'immagine, il title e type)
    container: ".caroselloCard4", //contenitore della card
    cardTitle: ".caroselloCard4 > p", //titolo della card
    image: ".caroselloCard4 > img", //immagine della card
    type: ".caroselloCard4 > h3", //tipologia di contenuto
    fetchCard: function (options) { //qui vanno inserite le proprietà della card
        document.querySelector(options.container).style.width = "300px"; //setto la larghezza del contenitore della card
        document.querySelector(options.container).style.position = "relative"; //setto la posizione del contenitore della card
        document.querySelector(options.type).style.position = "absolute"; //setto la posizione dell'h3 (tipologia) della card
        document.querySelector(options.type).style.top= "170px"; //setto la posizione dell'h3 (tipologia) della card
        document.querySelector(options.type).style.backgroundColor= "grey"; //setto il colore di sfondo dell'h3 (tipologia) della card
        document.querySelector(options.type).style.color= "white"; //setto il colore dell'h3 (tipologia) della card
        document.querySelector(options.image).style.width = "300px"; //setto la larghezza dell'immagine all'interno della card
        document.querySelector(options.container).style.margin = "0 20px"; //setto il margine della card
        document.querySelector(options.container).style.backgroundColor = "white"; //setto il colore di background
        document.querySelector(options.cardTitle).style.padding = "10px"; //setto il padding del p

        return { //la funzione fa ritorno di un'immagine, un titolo e una tipologia
            image: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'Title of card carousel 4',
            type: 'ELEARNING PLAN'
        };
    }
};
var options5 = { //inserire i relativi dati della card: (cambiare soltanto il nome della classe del contenitore al posto di container, cardTitle, image e type. poi cambiare dentro il return: l'url dell'immagine, il title e type)
    container: ".caroselloCard5", //contenitore della card
    cardTitle: ".caroselloCard5 > p", //titolo della card
    image: ".caroselloCard5 > img", //immagine della card
    type: ".caroselloCard5 > h3", //tipologia di contenuto
    fetchCard: function (options) { //qui vanno inserite le proprietà della card 
        document.querySelector(options.container).style.width = "300px"; //setto la larghezza del contenitore della card
        document.querySelector(options.container).style.position = "relative"; //setto la posizione del contenitore della card
        document.querySelector(options.type).style.position = "absolute"; //setto la posizione dell'h3 (tipologia) della card
        document.querySelector(options.type).style.top= "170px"; //setto la posizione dell'h3 (tipologia) della card
        document.querySelector(options.type).style.backgroundColor= "grey"; //setto il colore di sfondo dell'h3 (tipologia) della card
        document.querySelector(options.type).style.color= "white"; //setto il colore dell'h3 (tipologia) della card
        document.querySelector(options.image).style.width = "300px"; //setto la larghezza dell'immagine all'interno della card
        document.querySelector(options.container).style.margin = "0 20px"; //setto il margine della card
        document.querySelector(options.container).style.backgroundColor = "white"; //setto il colore di background
        document.querySelector(options.cardTitle).style.padding = "10px"; //setto il padding del p

        return { //la funzione fa ritorno di un'immagine, un titolo e una tipologia
            image: 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus harum culpa cumque sed nesciunt quasi dignissimos, unde nemo nobis dolores ad, velit animi magni doloribus tenetur. Explicabo fuga ipsum debitis!',
            type: 'PHOTO GALLERY'
        };
    }
};


//FUNZIONE FINALE
function Carousel(options) { //funzione che prende in imput tutte le opzioni del carosello e setta titolo più immagine. (quando va richiamata passargli come parametro la variabile che racchiude tutte le opzioni)
     document.querySelector(options.cardTitle).textContent = options.fetchCard(options).title; //setto il titolo della card
     document.querySelector(options.image).src = options.fetchCard(options).image; //setto l'immagine della card
     document.querySelector(options.type).textContent = options.fetchCard(options).type; //setto l'immagine della card
 };
