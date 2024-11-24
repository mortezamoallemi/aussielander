function bossley_park_abbotsbury_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18834;
var increase = Math.round(passed*2.08108834436431e-13*population);
document.getElementById("bossley_park_abbotsbury_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bossley_park_abbotsbury_livepop, 500);
}
