function nanango_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9679;
var increase = Math.round(passed*1.76730578398455e-13*population);
document.getElementById("nanango_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nanango_livepop, 500);
}
