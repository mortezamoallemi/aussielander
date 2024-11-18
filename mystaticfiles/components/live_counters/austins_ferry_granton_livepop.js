function austins_ferry_granton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3987;
var increase = Math.round(passed*3.95424051099196e-13*population);
document.getElementById("austins_ferry_granton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(austins_ferry_granton_livepop, 500);
}
