function belmont_bennetts_green_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17724;
var increase = Math.round(passed*2.11375737645225e-13*population);
document.getElementById("belmont_bennetts_green_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(belmont_bennetts_green_livepop, 500);
}
