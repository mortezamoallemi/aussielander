function moora_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4774;
var increase = Math.round(passed*1.80556580913714e-13*population);
document.getElementById("moora_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moora_livepop, 500);
}
