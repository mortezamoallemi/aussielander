function southern_downs_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4228;
var increase = Math.round(passed*2.07351724496519e-13*population);
document.getElementById("southern_downs_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(southern_downs_east_livepop, 500);
}
