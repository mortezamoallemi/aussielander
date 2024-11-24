function sheffield_railton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6140;
var increase = Math.round(passed*4.45706191867843e-14*population);
document.getElementById("sheffield_railton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sheffield_railton_livepop, 500);
}
