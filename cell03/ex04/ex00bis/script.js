
function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


$(document).ready(function() {


    let $btn = $("#changeColorBtn");

    $btn.click(function() {
        
        let newColor = getRandomColor();

        $("body").css("background-color", newColor);

        console.log("Change color to: " + newColor);
    });

});