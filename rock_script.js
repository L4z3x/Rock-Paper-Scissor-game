    const backgroundDiv = document.createElement("div")

fetch("https://api.unsplash.com/photos/random?client_id=bbnxPabn9GDBoJAa-u-aLVRDCp0YHmGqaD3WH4qPUo0&topics=6sMVjTLSkeQ&orientation=landscape")
    .then (function(response){
        return response.json()
    })
    .then(function(data){
        const src = data.urls.regular
        console.log(data)
        backgroundDiv.classList.add('background')
        backgroundDiv.style.backgroundImage = `url('${src}')`
        document.body.appendChild(backgroundDiv)
    })

const win_bg = document.querySelector('.window-background')
    win_bg.innerHTML=''
const center_but = document.getElementById('buttons-center');
const play_again_div = document.getElementById('play-again-div');
const reset_div = document.getElementById('reset-div');
let cmove =''
let score = {
    hum: 0,
    com: 0
};
let msg = '';
function play(playermove){
    if(!backgroundDiv.style.backgroundImage){
        if(win_bg.innerHTML===''){
            const waitWin = document.createElement("div")
            const rem_but = document.createElement("div")
            rem_but.classList.add('remove-window-but')
            rem_but.innerHTML = `<img class="close-img"  onclick="removeWin()"src=/assets/images/close-window.png>`
            waitWin.appendChild(rem_but)
            waitWin.classList.add('wait-div')
            waitWin.innerHTML += '<p class="win-msg">Oppps ... Please wait til the photo is fetched so you can enjoy the game 😅 😅</p>'
            win_bg.appendChild(waitWin)
            win_bg.style.display = 'flex'
        }
    }else{
        const compmove = pickmove();
        const cImg = compmove ;
        const hImg = playermove;
        let res = '';
    if(playermove === 'Rock'){
        if(compmove === 'Paper'){
            res = 'You Lost';
            document.querySelector('.js-msg').style.backgroundColor = 'red';
        }else if(compmove === 'Rock'){
            res = 'Tie';
            document.querySelector('.js-msg').style.backgroundColor = 'grey';
        }else{
            res = 'You Won';
            document.querySelector('.js-msg').style.backgroundColor = 'green';
        }
    }else if (playermove === 'Paper') {
        if (compmove === 'Paper') {
            res = 'Tie';
            document.querySelector('.js-msg').style.backgroundColor = 'grey';
        }else if (compmove === 'Rock') {
            res = 'You Lost';
            document.querySelector('.js-msg').style.backgroundColor = 'red';
        } else {
            res = 'You Won';
            document.querySelector('.js-msg').style.backgroundColor = 'green';
        }
    }else{
        if (compmove === 'Scissor'){
            res = 'Tie';
            document.querySelector('.js-msg').style.backgroundColor = 'grey';
        }else if (compmove === 'Paper') {
            res = 'You Won';
            document.querySelector('.js-msg').style.backgroundColor = 'green';
        }else{
            res = 'You Lost';
            document.querySelector('.js-msg').style.backgroundColor = 'red';
        }
    }
    if (res === 'You Lost'){
        score.com += 1;
    }
    if(res === 'You Won'){
        score.hum += 1;
    }
    remove_buttons(center_but);
    play_again_div.innerHTML = `<button class="play-again-but">Play again</button>`;
    reset_div.innerHTML= `<button class="reset" onclick="reset()">Reset Game</button> `;
    play_again_div.classList.add('play-again-div')
    reset_div.classList.add('reset-div')


    document.querySelector('.js-hmove').innerHTML = `<img style="margin-left: 23px;" src="assets/images/${hImg}-emoji.png"><span>Your move</span>`;
    document.querySelector('.js-cmove').innerHTML = `<img style="margin-left: 17px;" src="assets/images/${cImg}-emoji.png"><span>Pc move</span>`;
    document.querySelector('.js-cscore').innerHTML = 'Pc Score: '+ score.com;
    document.querySelector('.js-hscore').innerHTML = 'Your Score: '+ score.hum;
    
    document.querySelector('.js-msg').innerHTML = res ;
    }
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
        document.querySelector('.js-msg').style.backgroundColor = 'rgb(248, 121, 10)';

    }
}
function removeWin(){
    win_bg.innerHTML = '' 
    win_bg.style.display= 'none'  
    console.log("window cleared") 
}
    