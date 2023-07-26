function setColor(){
    let color = document.getElementById("colorChange").value;
    if(color != 'select'){
        document.bgColor = color
    }
    else{
        document.bgColor = "white"
    }
}