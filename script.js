document.querySelector('#push').onclick = fuction(){

    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task");
    } 
    else{
        document.querySelector('#tasks').innerHTML += '
        
        
        ';
    }
}