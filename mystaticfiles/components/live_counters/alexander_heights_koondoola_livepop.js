function alexander_heights_koondoola_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11976;
var increase = Math.round(passed*2.07228007424653e-13*population);
document.getElementById("alexander_heights_koondoola_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(alexander_heights_koondoola_livepop, 500);
}
