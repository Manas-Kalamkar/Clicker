//All variables are initialized in beginning to use it later
let enter=document.querySelector('.enter');
let clickF=document.querySelector("#pink-button");
let clickJ=document.querySelector("#blue-button");
let sop=document.querySelector('#score-of-pink');
let sob=document.querySelector('#score-of-blue');
let reset=document.querySelector('#reset-button');
let target=document.querySelector('#tellme');

let scorePink=Number(sop.innerHTML);
let scoreBlue=Number(sob.innerHTML);

let goal;

function updatePink(){
  if(scorePink===goal){
    document.querySelector('#winner').innerHTML='PINK';
    sop.innerHTML='WINNER';
    sob.innerHTML='LOSER';
    clickF.disabled=true;
  }else if(scoreBlue===goal){
    sob.innerHTML='WINNER';
    sop.innerHTML='LOSER';
    document.querySelector('#winner').innerHTML='BLUE';
  }else{
    scorePink++;
    sop.innerHTML=scorePink;  
  }
}

function updateBlue(){
  if(scoreBlue===goal){
    document.querySelector('#winner').innerHTML='BLUE';
    sob.innerHTML='WINNER';
    sop.innerHTML='LOSER';
    clickJ.disabled=true;
  }else if(scorePink===goal){
    sop.innerHTML='WINNER';
    sob.innerHTML='LOSER';
    document.querySelector('#winner').innerHTML='PINK';
  }else{ 
    scoreBlue++;
    sob.innerHTML=scoreBlue;
  }
}
enter.addEventListener('click',function(){
  target=document.querySelector('#tellme');
  goal=Number(target.value);
})

target.addEventListener('keydown',function(e){
  if(e.key=='Enter'){
    target=document.querySelector('#tellme');
    goal=Number(target.value);
  }
})

document.addEventListener('keyup',function(e){
  if(e.key=='f' ||e.key=='F'){
    updatePink();
  }else if(e.key=='j'||e.key=='J'){
    updateBlue();
  }
});

clickF.addEventListener('click',function(){
  updatePink();
})
clickF.addEventListener('touchstart',function(){
  updatePink();
})

clickJ.addEventListener('click',function(){
  updateBlue();
})
clickJ.addEventListener('touchstart',function(){
  updateBlue();
})

reset.addEventListener('click',function(){
  scorePink=0;
  sop.innerHTML=0;

  scoreBlue=0;
  sob.innerHTML=0;
  target.value='';
  document.querySelector('#winner').innerHTML='None';

  clickF.disabled=false;
  clickJ.disabled=false;
})