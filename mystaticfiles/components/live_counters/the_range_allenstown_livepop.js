function the_range_allenstown_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8193;
var increase = Math.round(passed*-7.00520825320909e-14*population);
document.getElementById("the_range_allenstown_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(the_range_allenstown_livepop, 500);
}
