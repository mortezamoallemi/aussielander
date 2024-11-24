function plantagenet_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5078;
var increase = Math.round(passed*2.49635409130634e-13*population);
document.getElementById("plantagenet_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(plantagenet_livepop, 500);
}
