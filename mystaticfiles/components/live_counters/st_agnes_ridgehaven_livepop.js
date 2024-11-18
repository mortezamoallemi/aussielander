function st_agnes_ridgehaven_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12428;
var increase = Math.round(passed*1.40863671757447e-13*population);
document.getElementById("st_agnes_ridgehaven_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(st_agnes_ridgehaven_livepop, 500);
}
