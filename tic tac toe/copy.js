const box = document.querySelectorAll('.box');
const resetgame = document.querySelector('#resetgame');
const newgame = document.querySelector('#newgame');
const winner = document.querySelector('#winner');
constwinner
let player0 =true;
let endgame = false;
let winpatterns = [
    [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
];
box.forEach((box) => {
    box.addEventListener('click',()=>{
        if(player0){
            box.innerText ='O'
            player0 = false;
             box.disabled =true;
            
          
            
        }
        else{
            box.innerText ='X'
            player0 = true;
             box.disabled =true;
            
          
        }
        
    })
    
    
    
});

newgame.addEventListener('click',(event)=>{
   let result= confirm("Are you sure to start new game ? " )
    if(result== true){
        alert("start new game");


    }
    else{
       console.log("old game");
       event.preventDefault();
       
    }
});

resetgame.addEventListener('click',(event)=>{
   let result= confirm("Are you sure to reset this game ?")
   if(result==true){
    console.log("reset game");
   }

   else{
    event.preventDefault();
   }

});
const showwinner = (winner)=>{
    if(checkpattern==true){

        winner.innerText =`Congratulation to ${winner}`;
       box.disabled =true;
       endgame=true;
       console.log("game over");
       

      
    }
  
    
};
const drawgame = ()=>{
    winner.innerText ='The game is Draw';
    endgame = true;
    box.disabled=true;


}



const checkpattern=()=>{
    for (let pattern of winpatterns){
   
     let pos1= box[pattern[0]].innerText;
     let pos2= box[pattern[1]].innerText;
     let pos3= box[pattern[2]].innerText;

     if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1==pos2 && pos2==pos3){
   
             showwinner(pos1);
             endgame=true;
             box.disabled =true;
             return ;
        }
        else if(pos1!=pos2 && pos2==pos3 ||pos1==pos2 && pos2!=pos3 || pos1==pos3 && pos1 !=pos2 )
        {
            drawgame();
            endgame =true;
            box.disabled = true;
            console.log("game over");

        }


        

     

     }
     
    }
    
      
};



 
