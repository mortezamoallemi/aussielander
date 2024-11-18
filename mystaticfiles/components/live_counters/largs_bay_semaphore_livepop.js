function largs_bay_semaphore_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14485;
var increase = Math.round(passed*-9.18775824395559e-15*population);
document.getElementById("largs_bay_semaphore_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(largs_bay_semaphore_livepop, 500);
}
