function getRandomColor() {
    
    let r = Math.floor(Math.random() * 256);
    
    let g = Math.floor(Math.random() * 256);
    
    let b = Math.floor(Math.random() * 256);

    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


let btn = document.getElementById("changeColorBtn");


btn.addEventListener("click", function() {
    
    let newColor = getRandomColor();
    
    
    document.body.style.backgroundColor = newColor;
    
    
    console.log("Change color to: " + newColor);
});