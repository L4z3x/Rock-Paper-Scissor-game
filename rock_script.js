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
        if (compmove === 'Scissor') {
            res = 'Tie.';
        }else if (compmove === 'Paper') {
            res = 'You Lost.';
        }else{
            res = 'You Won.';
        }
    }
    message.textContent = res;
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