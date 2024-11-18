function ashburton_vic_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7753;
var increase = Math.round(passed*1.40607340931148e-13*population);
document.getElementById("ashburton_vic_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ashburton_vic_livepop, 500);
}
