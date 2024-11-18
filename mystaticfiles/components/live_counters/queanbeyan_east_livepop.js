function queanbeyan_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4785;
var increase = Math.round(passed*1.9651952774804e-13*population);
document.getElementById("queanbeyan_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(queanbeyan_east_livepop, 500);
}
