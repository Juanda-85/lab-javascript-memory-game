class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsGuessed = 0
    this.pairsClicked = 0
  }

  shuffleCards() {

    if (this.cards === undefined) {

      return undefined 
    }

    let array = this.cards
    let i = array.length;
    while (--i > 0) {
      let randomNumber = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomNumber]] = [array[randomNumber], array[i]]
    }
    return array;
  }
  
  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked += 1 
      this.pairsGuessed += 1
      return true
    }
 
      else{
      this.pairsClicked += 1 
      
        return false
      }
    
  }

  checkIfFinished() {
   
  if (this.pairsGuessed === this.cards.length/2){
    return true
  }
    else {
      return false
    }
  }
   }
