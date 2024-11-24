function dakabin_kallangur_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23929;
var increase = Math.round(passed*1.00351063754591e-12*population);
document.getElementById("dakabin_kallangur_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dakabin_kallangur_livepop, 500);
}
