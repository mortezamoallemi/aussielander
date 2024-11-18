function malvern_glen_iris_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20042;
var increase = Math.round(passed*2.39250226568349e-13*population);
document.getElementById("malvern_glen_iris_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(malvern_glen_iris_livepop, 500);
}
