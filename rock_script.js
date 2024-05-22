
const center_but = document.getElementById('buttons-center');
const play_again_div = document.getElementById('play-again-div');
const reset_div = document.getElementById('reset-div');
let cmove =''
let score = {
    hum: 0,
    com: 0
};
let playround = 0;
let msg = '';
function maxround(){
    if (playround == 5) {
        window.location.href = 'resault.html';
        if(score.com > score.hum){
            msg = 'Defeat... You Lost against the computer';
        }else{
            if(score.com == score.hum){
                msg = 'Draw... you were close';
            }else{
                msg = 'Victory... you won against the computer'
            }
        }
        reset();        
    }    
    }
    
function play(playermove){
    
    const compmove = pickmove();
    const cImg = compmove ;
    const hImg = playermove;
    let res = '';
    if(playermove === 'Rock'){
        if(compmove === 'Paper'){
            res = 'You Lost';
        }else if(compmove === 'Rock'){
            res = 'Tie';
        }else{
            res = 'You Won';
        }
    }else if (playermove === 'Paper') {
        if (compmove === 'Paper') {
            res = 'Tie';
        }else if (compmove === 'Rock') {
            res = 'You Lost';
        } else {
            res = 'You Won';
        }
    }else{
        if (compmove === 'Scissor'){
            res = 'Tie';
        }else if (compmove === 'Paper') {
            res = 'You Won';
        }else{
            res = 'You Lost';
        }
    }
    if (res === 'You Lost'){
        score.com += 1;
    }
    if(res === 'You Won'){
        score.hum += 1;
    }
    playround += 1;
    remove_buttons(center_but);
    play_again_div.innerHTML = `<button class="play-again-but">Play again</button>`;
    reset_div.innerHTML= `<button class="reset" onclick="reset()">Reset Game</button> `;
   

    document.querySelector('.js-hmove').innerHTML = `<img style="margin-left: 20px;" src="assets/images/${hImg}-emoji.png"><span>Your move</span>`;
    document.querySelector('.js-cmove').innerHTML = `<img style="margin-left: 20px;" src="assets/images/${cImg}-emoji.png"><span>Pc move</span>`;
    document.querySelector('.js-cscore').innerHTML = 'Pc Score: '+ score.com;
    document.querySelector('.js-hscore').innerHTML = 'Your Score: '+ score.hum;
    document.querySelector('.js-msg').innerHTML = res ;
}
function pickmove(){
        const a = Math.random();
    if(a > 0 && a < 1/3 ){
         cmove = 'Rock';
        
    }else if(a<2/3 && a > 1/3){
         cmove = 'Paper';
    }else if (a > 2/3 && a < 1){
         cmove = 'Scissor';
    }
    return cmove;
}
function reset(){
    score.com = 0;
    score.hum = 0;  
    document.querySelector('.js-cscore').innerHTML = `Pc score: 0`;
    document.querySelector('.js-hscore').innerHTML = `Your Score: 0`;
    retreive_buttons(); 
}
document.getElementById('play-again-div').addEventListener('click',()=>{
    retreive_buttons(center_but)    
})
function remove_buttons(center_but){
    if (center_but) {
        center_but.innerHTML=''
    }
}
function retreive_buttons(){
    if(center_but.innerHTML===''){
        center_but.innerHTML = `
        <button class="button Rock" onclick="play('Rock')">
            <img src="assets/images/Rock-emoji.png">
        </button>
        <button class="button Paper" onclick="play('Paper')">
            <img src="assets/images/Paper-emoji.png">
        </button>
        <button class="button Scissor" onclick="play('Scissor')">
            <img src="assets/images/Scissor-emoji.png">
        </button>`
        document.querySelector('.js-hmove').innerHTML = ``;
        document.querySelector('.js-cmove').innerHTML = ``;
        play_again_div.innerHTML = '';
        reset_div.innerHTML = '';
        document.querySelector('.js-msg').innerHTML = `lets see`;


    }
}