function kojonup_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4214;
var increase = Math.round(passed*3.1683455056898e-14*population);
document.getElementById("kojonup_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kojonup_livepop, 500);
}
