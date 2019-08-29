'use strict';

const button = document.querySelector('.js-button');
const optionCard = document.querySelectorAll('.js-radio');
const cardList = document.querySelector('.js-list');

function getCardSelected() {
  for (let i = 0; i < optionCard.length; i++) {
    if (optionCard[i].checked) {
      return optionCard[i].value;
    }
  }
}


function dataFromServer() {
  event.preventDefault();
  const number = getCardSelected();

  fetch(`https://raw.githubusercontent.com/Adalab/cards-data/master/${number}.json`)
    .then(response => response.json())
    .then(cards => {
      createList(cards);
    })

}

function createList(cards) {
  while (cardList.hasChildNodes()) {
    cardList.removeChild(cardList.firstChild);
  }
  const urlDefaultImage = `url("https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB")`;
  for (let i = 0; i < cards.length; i++) {
    const createListElement = document.createElement('li');
    createListElement.classList.add('card');
    createListElement.style.backgroundImage = urlDefaultImage;


    cardList.appendChild(createListElement);
    createListElement.addEventListener('click', function () {
      if (createListElement.style.backgroundImage === urlDefaultImage) {
        createListElement.style.backgroundImage = `url('${cards[i].image}')`;
        
      }
    })
  }
}


button.addEventListener('click', dataFromServer);

