function oyster_bay_como_jannali_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21254;
var increase = Math.round(passed*1.88675253327591e-13*population);
document.getElementById("oyster_bay_como_jannali_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(oyster_bay_como_jannali_livepop, 500);
}
