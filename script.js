'use strict';

//selecting Elements

const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El =document.querySelector('#score--0');
const score1El =document.getElementById('score--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

const current0El = document.getElementById ('current--0')
const current1El = document.getElementById ('current--1')

// starting conditons
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); 


const score= [0 , 0];
let currentScore = 0;
let activeplayer = 0;
let playing = true;


const switchplayer = function(){
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentScore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0 ;
    // player0El.classList.toggle('.player--active');
    // player1El.classList.toggle('.player--active');       

}

////genrating a random dice roll

 btnRoll.addEventListener('click' , function(){

    if(playing){
        const dice = Math.trunc(Math.random() * 6)+1    
        /////display dice 

        diceEl.classList.remove ('hidden');
        diceEl.src = `dice-${dice}.png`;
        //// check for rolled 

        if(dice !== 1 ){
        currentScore += dice;
        document.getElementById(`current--${activeplayer}`).textContent = currentScore;
    } else {
        ////swith to next player
        switchplayer();
    }
}
});


btnHold.addEventListener('click',function(){
    if (playing){

        /// add current  score to active player score
         score[activeplayer] += currentScore;
        ///score[1] = score[1] +current score
        document.getElementById(`score--${activeplayer}`).textContent = 
        score[activeplayer];
        
        /// cheke if player score if >= 100
        if (score [activeplayer] >= 30){
            /// finshe game
            playing = false;
            diceEl.classList.add('hidden');

            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner') 
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active') 
            
        } else {
            //// switch player 
            switchplayer();
        }   
    }
})


btnNew.addEventListener('click', function(){
    score0El.textContent = 0;
    score1El.textContent = 0;

    document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner') 
    document.querySelector(`.player--${activeplayer}`).classList.add('player--active') 




})