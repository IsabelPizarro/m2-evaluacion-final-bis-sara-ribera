'use strict';

console.log('>> Ready :(');

//definir las constantes

const button = document.querySelector('.js-button');
const optionCard = document.querySelectorAll('.js-radio');
const cardList = document.querySelector('.js-list');


// let cards = [];

//llamar al servidor


//seleccionar una opción

function getCardSelected() {
    for (let i = 0; i < optionCard.length; i++) {
        if (optionCard[i].checked) {
            return optionCard[i].value;
        }
    }
}

function dataFromServer() {
    event.preventDefault();
    const NUMERO = getCardSelected();
    createList(parseInt(NUMERO));
    fetch(`https://raw.githubusercontent.com/Adalab/cards-data/master/${NUMERO}.json`)
        .then(response => response.json())
        .then(cards => {
            const listElements = document.querySelectorAll('.hola');
            for (let i = 0; i < cards.length; i++) {
                cards[i].addEventListener('click', showCardImage, cards);
            };
        })

}

function createList(cards) {
    while (cardList.hasChildNodes()) {
        cardList.removeChild(cardList.firstChild);
    }
    const urlDefaultImage = `url("https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB")`
    for (let i = 0; i < cards; i++) {
        const createListElement = document.createElement('li');
        createListElement.classList.add('hola');
        createListElement.style.backgroundImage = urlDefaultImage;

        cardList.appendChild(createListElement);
    }
}

function showCardImage(cards) {
    const listElements = document.querySelectorAll('.hola');

    for (let i = 0; i < listElements.length; i++) {
        // const createListElement = document.createElement('li');
        // createListElement.classList.add('hola');
        listElements.style.backgroundImage = `url('${cards[i].image}')`;

        // cardList.appendChild(createListElement);
    }
}

//pintar la lista de cartas



button.addEventListener('click', dataFromServer);

