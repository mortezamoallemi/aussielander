function oatley_hurstville_grove_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12614;
var increase = Math.round(passed*3.45071118286055e-13*population);
document.getElementById("oatley_hurstville_grove_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(oatley_hurstville_grove_livepop, 500);
}
