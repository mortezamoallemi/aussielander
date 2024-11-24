function gosnells_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20285;
var increase = Math.round(passed*3.58543503303256e-13*population);
document.getElementById("gosnells_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gosnells_livepop, 500);
}
