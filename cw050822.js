// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades

function defineSuit(card) {
    if(card.charAt(1) === '0'){
      let suit = card.charAt(2)
        switch(suit){
        case '♣':
        return 'clubs';
        break;
        case '♦': 
        return 'diamonds';
        break;
        case '♥':
        return 'hearts';
        break;
        case '♠':
        return 'spades';
        break;
    }
    }else{
    let suit =  card.charAt(1)
    switch(suit){
        case '♣':
        return 'clubs';
        break;
        case '♦': 
        return 'diamonds';
        break;
        case '♥':
        return 'hearts';
        break;
        case '♠':
        return 'spades';
        break;
    }
  }
}