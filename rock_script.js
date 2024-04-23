let cmove = '';
let result ='';
let a;
function rock(){
    
    if(cmove === 'Rock'){
        result = 'Tie.';
    }else if(cmove === 'Paper'){
        result = 'You Lost.';
    }else {
        result = 'You Won.'
    }
    message.textContent= result;
}
function paper(){
    if(playermove === 'paper'){
        if(cmove === 'Rock'){
            result = 'You Won.';
        }else if(cmove === 'Paper'){
            result = 'Tie.';
        }else {
            result = 'You Lost.'
        }
        message.textContent= result
    }      
            
}
function scissor(){
    if(cmove === 'Rock'){
        result = 'You Lost.';
    }else if(cmove === 'Paper'){
        result = 'You Won.';
    }else {
        result = 'Tie.'
    }
    message.textContent= result
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
}