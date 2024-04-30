let score = {
    hum: 0,
    com: 0
};

function play(playermove){
    
    const compmove = pickmove();
    let res = '';
    if(playermove === 'Rock'){
        if(compmove === 'Paper'){
            res = 'You Won.';
        }else if(compmove === 'Rock'){
            res = 'Tie.';
        }else{
            res = 'You Lost.';
        }
    }else if (playermove === 'Paper') {
        if (compmove === 'Paper') {
            res = 'Tie.';
        }else if (compmove === 'Rock') {
            res = 'You Won.';
        } else {
            res = 'You Lost.';
        }
    }else{
        if (compmove === 'Scissor'){
            res = 'Tie.';
        }else if (compmove === 'Paper') {
            res = 'You Lost.';
        }else{
            res = 'You Won.';
        }
    }
    if (res === 'You Lost.'){
        score.com += 1;
    }
    if(res === 'You Won.'){
        score.hum += 1;
    }
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
