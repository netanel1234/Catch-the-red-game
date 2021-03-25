var points=0;

var squares=document.querySelectorAll('.game div');

function change_board(event){
    
    var btn=event.target;
    
    if(btn.className==="winner"){
        points=points+5;
    }
    else if(btn.className==="game"){
        return;
    }
    else{
        points=points-5;
    }
    
    for(var i=0;i<4;i++){
        if(squares[i].className===("winner")){
            squares[i].classList.remove('winner');
        }
    }
    
    txt.textContent="Score: "+points;
    
    var index=Math.floor(Math.random()*squares.length);
    squares[index].classList.add('winner');
    
}



var txt=document.querySelector('.score');

var btn=document.querySelector('.game');
btn.addEventListener('click',change_board);