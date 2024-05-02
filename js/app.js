// Implementar solución aquí

const clickMe = document.querySelector("#btn");

//2) Creamos evento JS

clickMe.addEventListener('click', () => {
    document.querySelector("body").style.backgroundColor = getHexadecimalColor();
})


//Funcion para generar color hexadecimal aleatorio
function getHexadecimalColor(){
    let hexadecimal = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let colorRandom = "#";
    let colorIndex = 0
    for (i=0;i<6;i++){
    let colorIndex = Math.floor(Math.random()*hexadecimal.length);
    colorRandom += hexadecimal[colorIndex];
    }
    return colorRandom;
}




