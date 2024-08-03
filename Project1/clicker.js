//All variables are initialized in beginning to use it later
let enter=document.querySelector('.enter');
let clickF=document.querySelector("#pink-button");
let clickJ=document.querySelector("#blue-button");
let sop=document.querySelector('#score-of-pink');
let sob=document.querySelector('#score-of-blue');
let reset=document.querySelector('#reset-button');
let target=document.querySelector('#tellme');
let errorMessage=document.querySelector('.error-message');
let scorePink=Number(sop.innerHTML);
let scoreBlue=Number(sob.innerHTML);
let winnerDisplay=document.querySelector('#winner');

let goal =Infinity;//If someone is intrested to play without any goal
function updatePink(){// Function to update Scoue of pink;
  if(goal>0)
  {if(scorePink===goal){
      winnerDisplay.innerHTML='PINK';
      sop.innerHTML='WINNER';
      sob.innerHTML='LOSER';
      clickF.disabled=true;
    }else if(scoreBlue===goal){
      sob.innerHTML='WINNER';
      sop.innerHTML='LOSER';
      winnerDisplay.innerHTML='BLUE';
    }else{
      scorePink++;
      sop.innerHTML=scorePink;  
    }
  }
}


function updateBlue(){
  if(goal>0){
    if(scoreBlue===goal){
      winnerDisplay.innerHTML='BLUE';
      sob.innerHTML='WINNER';
      sop.innerHTML='LOSER';
      clickJ.disabled=true;
    }else if(scorePink===goal){
      sop.innerHTML='WINNER';
      sob.innerHTML='LOSER';
      winnerDisplay.innerHTML='PINK';
    }else{ 
      scoreBlue++;
      sob.innerHTML=scoreBlue;
    }
  }
}
enter.addEventListener('click',function(){  //Function to lock goal by clicking enter
  target=document.querySelector('#tellme');
  goal=Number(target.value);
  if(goal>0){
    reSet();
  }else{
    errorMessage.innerHTML='PLEASE ENTER VALID TARGET';
  }
})

target.addEventListener('keydown',function(e){ //Function to lock goal by clicking enter on keyboard
  if(e.key=='Enter'){
    target=document.querySelector('#tellme');
    goal=Number(target.value);
    if(goal>0){
      reSet();
    }else{
      errorMessage.innerHTML='PLEASE ENTER VALID TARGET';
    }
  }
})

document.addEventListener('keyup',function(e){  
  if(e.key=='f' ||e.key=='F'){                  //Clicking F to iterate count for Pink
    updatePink();
  }else if(e.key=='j'||e.key=='J'){             //Clicking F to iterate count for Blue
    updateBlue();
  }
});

clickF.addEventListener('click',function(){    //Clicking with mouse to iterate count for Pink
  updatePink();
})
clickF.addEventListener('touchstart',function(){//Clicking to iterate count for Pink on touchscreen devices
  updatePink();
})

clickJ.addEventListener('click',function(){     //Clicking with mouse to iterate count for Blue
  updateBlue();
})
clickJ.addEventListener('touchstart',function(){//Clicking to iterate count for Blue on touchscreen devices
  updateBlue();
})

reset.addEventListener('click',function(){
  reSet();
  target.value='';
  goal=Infinity;
})

function reSet(){             //Function to reset values to 0
  scorePink=0;
  sop.innerHTML=0;

  scoreBlue=0;
  sob.innerHTML=0;
  errorMessage.innerHTML='';
  winnerDisplay.innerHTML='.....';

  clickF.disabled=false;
  clickJ.disabled=false;
}