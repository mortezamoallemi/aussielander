function queanbeyan_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10838;
var increase = Math.round(passed*3.64286434800254e-13*population);
document.getElementById("queanbeyan_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(queanbeyan_livepop, 500);
}
