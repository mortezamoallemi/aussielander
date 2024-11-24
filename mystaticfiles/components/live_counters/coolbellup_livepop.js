function coolbellup_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8145;
var increase = Math.round(passed*3.20998431312924e-13*population);
document.getElementById("coolbellup_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coolbellup_livepop, 500);
}
