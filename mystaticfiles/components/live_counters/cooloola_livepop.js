function cooloola_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6265;
var increase = Math.round(passed*5.73854927201081e-13*population);
document.getElementById("cooloola_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cooloola_livepop, 500);
}
