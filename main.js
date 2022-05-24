let cards = [['A',2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'],[11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]]

//draws cards
let card1 = cards[0][Math.floor(Math.random()*13)];
let card2 = cards[0][Math.floor(Math.random()*13)];
let card3 = cards[0][Math.floor(Math.random()*13)];
let card4 = cards[0][Math.floor(Math.random()*13)];
let card5 = cards[0][Math.floor(Math.random()*13)];

//value of cards
let vcard = cards[1][cards[0].indexOf(card1)] + cards[1][cards[0].indexOf(card2)]
let vcard1 = cards[1][cards[0].indexOf(card1)] + cards[1][cards[0].indexOf(card2)] + cards[1][cards[0].indexOf(card3)]  
let vcard2 = cards[1][cards[0].indexOf(card1)] + cards[1][cards[0].indexOf(card2)] + cards[1][cards[0].indexOf(card3)] +cards[1][cards[0].indexOf(card4)] 
let vcard3 = cards[1][cards[0].indexOf(card1)] + cards[1][cards[0].indexOf(card2)] + cards[1][cards[0].indexOf(card3)] +cards[1][cards[0].indexOf(card4)] + cards[1][cards[0].indexOf(card5)] 

//draws bot cards
let bcard1 = cards[0][Math.floor(Math.random()*13)];
let bcard2 = cards[0][Math.floor(Math.random()*13)];
let bcard3 = cards[0][Math.floor(Math.random()*13)];
let bcard4 = cards[0][Math.floor(Math.random()*13)];
let bcard5 = cards[0][Math.floor(Math.random()*13)];

//value of bot cards
let bvcard = cards[1][cards[0].indexOf(bcard1)] + cards[1][cards[0].indexOf(bcard2)]
let bvcard1 = cards[1][cards[0].indexOf(bcard1)] + cards[1][cards[0].indexOf(bcard2)] + cards[1][cards[0].indexOf(bcard3)]  
let bvcard2 = cards[1][cards[0].indexOf(bcard1)] + cards[1][cards[0].indexOf(bcard2)] + cards[1][cards[0].indexOf(bcard3)] +cards[1][cards[0].indexOf(bcard4)] 
let bvcard3 = cards[1][cards[0].indexOf(bcard1)] + cards[1][cards[0].indexOf(bcard2)] + cards[1][cards[0].indexOf(bcard3)] +cards[1][cards[0].indexOf(bcard4)] + cards[1][cards[0].indexOf(bcard5)] 

var prompt = require('prompt');
  
prompt.start();
    console.log('\nAre you down to play a game of blackjack? y/n\n')

prompt.get(['reply'], function (err, result) {
    
    if (result.reply === 'y' && vcard < 21){
        console.log(`\nWelcome! Here is your starting hand ${card1} ${card2} = ${vcard}\nDo you want to draw another card? y/n\n`)

        prompt.get(['reply'], function (err, result) {

            cards[1][0] = 1
            vcard = cards[1][cards[0].indexOf(card1)] + cards[1][cards[0].indexOf(card2)]
            vcard1 = cards[1][cards[0].indexOf(card1)] + cards[1][cards[0].indexOf(card2)] + cards[1][cards[0].indexOf(card3)]  
            vcard2 = cards[1][cards[0].indexOf(card1)] + cards[1][cards[0].indexOf(card2)] + cards[1][cards[0].indexOf(card3)] +cards[1][cards[0].indexOf(card4)] 
            vcard3 = cards[1][cards[0].indexOf(card1)] + cards[1][cards[0].indexOf(card2)] + cards[1][cards[0].indexOf(card3)] +cards[1][cards[0].indexOf(card4)] + cards[1][cards[0].indexOf(card5)]
            
            bvcard = cards[1][cards[0].indexOf(bcard1)] + cards[1][cards[0].indexOf(bcard2)]
            bvcard1 = cards[1][cards[0].indexOf(bcard1)] + cards[1][cards[0].indexOf(bcard2)] + cards[1][cards[0].indexOf(bcard3)]  
            bvcard2 = cards[1][cards[0].indexOf(bcard1)] + cards[1][cards[0].indexOf(bcard2)] + cards[1][cards[0].indexOf(bcard3)] +cards[1][cards[0].indexOf(bcard4)] 
            bvcard3 = cards[1][cards[0].indexOf(bcard1)] + cards[1][cards[0].indexOf(bcard2)] + cards[1][cards[0].indexOf(bcard3)] +cards[1][cards[0].indexOf(bcard4)] + cards[1][cards[0].indexOf(bcard5)]

            if (result.reply === 'y' && vcard1 < 21 && bvcard < 21) {
                console.log(`\nYour cards are \n${card1} ${card2} ${card3} = ${vcard1}\nDo you want to draw another card y/n\n`)

                prompt.get(['reply'], function (err,result) {

                    if (result.reply === 'y' && vcard2<21 && bvcard<21){
                        console.log(`Here are you new cards ${card1} ${card2} ${card3} ${card4} = ${vcard2}\nDo you want to draw another card? y/n\n`)

                        prompt.get(['reply'], function (err,result) {

                            if (result.reply === 'y' && vcard3<21 && bvcard3<21){
                                console.log(`Here is your final hand ${card1} ${card2} ${card3} ${card4} ${card5} = ${vcard3}`)
                            }
                            else if (result.reply === 'y' && vcard3 > 21 &&bvcard3 < 21){
                                console.log(`You Lost! You busted and lost to the Dealer at \n${card1} ${card2} ${card3} ${card4} ${card5} = ${vcard3}\nDealer's cards \n${bcard1} ${bcard2} ${bcard3} ${bcard4} ${bcard5} = ${bvcard3}`)
                            }
                            else if (result.reply === 'y' && vcard3 > 21 && bvcard3 > 21){
                                console.log(`You both busted at \n${card1} ${card2} ${card3} ${card4} ${card5} = ${vcard3}\nDealer's cards \n${bcard1} ${bcard2} ${bcard3} ${bcard4} ${bcard5} = ${bvcard3}`)
                            }
                            else if (result.reply === 'y' && vcard3 < 21 && bvcard3 > 21){
                                console.log(`You Win! The Dealer busted at \n${card1} ${card2} ${card3} ${card4} ${card5} = ${vcard3}\nDealer's cards \n${bcard1} ${bcard2} ${bcard3} ${bcard4} ${bcard5} = ${bvcard3}`)
                            }
                            else if (result.reply === 'n' && vcard2 < bvcard2){
                                console.log(`You lost to the Dealer \n${card1} ${card2} ${card3} ${card4} = ${vcard2}\nDealer's cards \n${bcard1} ${bcard2} ${bcard3} ${bcard4} = ${bvcard2}`)
                            }
                            else if (result.reply === 'n' && vcard2 > bvcard2){
                                console.log(`You won against the Dealer \n${card1} ${card2} ${card3} ${card4} = ${vcard2}\nDealer's cards \n${bcard1} ${bcard2} ${bcard3} ${bcard4} = ${bvcard22}`)
                            }
                            else if (result.reply === 'n' && vcard2 === bvcard2){
                                console.log(`You tied to the Dealer \n${card1} ${card2} ${card3} ${card4} = ${vcard2}\nDealer's cards \n${bcard1} ${bcard2} ${bcard3} ${bcard4} = ${bvcard2}`)
                            }
                            else{
                                console.log('end')
                            }
                        })
                    }
                    else if (result.reply === 'y' && vcard2 > 21 && bvcard2 < 21){
                        console.log(`You Lost! You busted and lost to the Dealer at \n${card1} ${card2} ${card3} ${card4} = ${vcard2}\nDealer's cards \n${bcard1} ${bcard2} ${bcard3} ${bcard4} = ${bvcard2}`)
                    }
                    else if (result.reply === 'y' && vcard2 > 21 && bvcard2 > 21){
                        console.log(`You both busted at \n${card1} ${card2} ${card3} ${card4} = ${vcard2}\nDealer's cards \n${bcard1} ${bcard2} ${bcard3} ${bcard4} = ${bvcard2}`)
                    }
                    else if (result.reply === 'y' && vcard2 < 21 && bvcard2 > 21){
                        console.log(`You Win! The Dealer busted at \n${card1} ${card2} ${card3} ${card4} = ${vcard2}\nDealer's cards \n${bcard1} ${bcard2} ${bcard3} ${bcard4} = ${bvcard2}`)
                    }
                    else if (result.reply === 'n' && vcard1 < bvcard1){
                        console.log(`You lost to the Dealer \n${card1} ${card2} ${card3} = ${vcard1}\nDealer's cards \n${bcard1} ${bcard2} ${bcard3} = ${bvcard1}`)
                    }
                    else if (result.reply === 'n' && vcard1 > bvcard1){
                        console.log(`You won against the Dealer \n${card1} ${card2} ${card3} = ${vcard1}\nDealer's cards \n${bcard1} ${bcard2} ${bcard3} = ${bvcard1}`)
                    }
                    else if (result.reply === 'n' && vcard1 === bvcard1){
                        console.log(`You tied to the Dealer \n${card1} ${card2} ${card3} = ${vcard1}\nDealer's cards \n${bcard1} ${bcard2} ${bcard3} = ${bvcard1}`)
                    }                                
                    else{
                        console.log('end')
                    }
                })
            }
            else if (result.reply === 'y' && vcard1 > 21 && bvcard1 < 21){
                console.log(`You Lost! You busted and lost to the Dealer at \n${card1} ${card2} ${card3} = ${vcard1}\nDealer's cards \n${bcard1} ${bcard2} ${bcard3} = ${bvcard1}`)
            }
            else if (result.reply === 'y' && vcard1 > 21 && bvcard1 > 21){
                console.log(`You both busted at \n${card1} ${card2} ${card3} = ${vcard1}\nDealer's cards \n${bcard1} ${bcard2} ${bcard3} = ${bvcard1}`)
            }
            else if (result.reply === 'y' && vcard1 < 21 && bvcard1 > 21){
                console.log(`You Win! The Dealer busted at \n${card1} ${card2} ${card3} = ${vcard1}\nDealer's cards \n${bcard1} ${bcard2} ${bcard3} = ${bvcard1}`)
            }
            else if (result.reply === 'n' && vcard < bvcard){
                console.log(`You lost to the Dealer \n${card1} ${card2} = ${vcard}\nDealer's cards \n${bcard1} ${bcard2} = ${bvcard}`)
            }
            else if (result.reply === 'n' && vcard > bvcard){
                console.log(`You won against the Dealer \n${card1} ${card2} = ${vcard}\nDealer's cards \n${bcard1} ${bcard2} = ${bvcard}`)
            }
            else if (result.reply === 'n' && vcard === bvcard){
                console.log(`You tied to the Dealer \n${card1} ${card2} = ${vcard}\nDealer's cards \n${bcard1} ${bcard2}  = ${bvcard}`)
            }            
            else{
                console.log('end')
            }
        }) 
    }
    else if (result.reply === 'y' && vcard == 21){
        console.log(`Congratulations! Blackjack! ${card1} ${card2} = ${vcard}`)
    }
    else{
    console.log('Goodbye!')
}
})
