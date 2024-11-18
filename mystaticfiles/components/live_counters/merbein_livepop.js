function merbein_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4773;
var increase = Math.round(passed*1.77861350613398e-13*population);
document.getElementById("merbein_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(merbein_livepop, 500);
}
