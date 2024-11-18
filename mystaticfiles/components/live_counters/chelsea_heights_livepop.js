function chelsea_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5337;
var increase = Math.round(passed*1.82020612857275e-13*population);
document.getElementById("chelsea_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chelsea_heights_livepop, 500);
}
