function coopers_plains_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5483;
var increase = Math.round(passed*1.18851262678564e-12*population);
document.getElementById("coopers_plains_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coopers_plains_livepop, 500);
}
