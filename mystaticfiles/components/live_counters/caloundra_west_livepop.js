function caloundra_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20278;
var increase = Math.round(passed*1.85896395926275e-12*population);
document.getElementById("caloundra_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(caloundra_west_livepop, 500);
}
