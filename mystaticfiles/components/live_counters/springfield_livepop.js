function springfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6777;
var increase = Math.round(passed*1.5248331070894e-13*population);
document.getElementById("springfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(springfield_livepop, 500);
}
