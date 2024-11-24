function cheltenham_highett_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10938;
var increase = Math.round(passed*4.49862112712029e-13*population);
document.getElementById("cheltenham_highett_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cheltenham_highett_west_livepop, 500);
}
