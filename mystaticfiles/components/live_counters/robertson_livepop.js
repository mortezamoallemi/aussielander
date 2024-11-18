function robertson_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5102;
var increase = Math.round(passed*2.97751424367953e-13*population);
document.getElementById("robertson_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(robertson_livepop, 500);
}
