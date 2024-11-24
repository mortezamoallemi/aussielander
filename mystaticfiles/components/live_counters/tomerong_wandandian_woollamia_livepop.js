function tomerong_wandandian_woollamia_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3405;
var increase = Math.round(passed*2.08262123585776e-13*population);
document.getElementById("tomerong_wandandian_woollamia_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tomerong_wandandian_woollamia_livepop, 500);
}
