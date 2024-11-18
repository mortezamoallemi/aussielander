function tumut_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6275;
var increase = Math.round(passed*-2.01812688892881e-14*population);
document.getElementById("tumut_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tumut_livepop, 500);
}
