document.querySelector('.Rock').addEventListener('click',()=>{
    play('Rock');
});
document.querySelector('.Paper').addEventListener('click',()=>{
    play('Paper');
});
document.querySelector('.Scissor').addEventListener('click',()=>{
    play('Scissor');
});
document.querySelector('.reset').addEventListener('click',()=>{
    reset();
})
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
        fetch('resault.html')
        .then(response => response.text())
        .then(html => {
            // Parse the HTML content
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            // Access elements in the loaded content
            doc.querySelector('.Res').innerHTML = `<span>${msg}</span>`;
            doc.querySelector('.cRes').innerHTML = `Pc Score: ${score.com};`;
            doc.querySelector('.hRes').innerHTML = `Your Score: ${score.hum}`;
            console.log(doc.querySelector('.Res').innerHTML)
            // Do something with the element
        });
    
    
        /*document.querySelector('.Res').innerHTML = `<span>${msg}</span>`;
        document.querySelector('.cRes').innerHTML = `Pc Score: ${score.com}`;
        document.querySelector('.hRes').innerHTML = `Your Score: ${score.hum}`;*/
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
    document.querySelector('.js-msg').innerHTML = `lets see`;
    document.querySelector('.js-hmove').innerHTML = ``;
    document.querySelector('.js-cmove').innerHTML = ``;
}
