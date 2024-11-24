function taroona_bonnet_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3574;
var increase = Math.round(passed*1.14595251518657e-13*population);
document.getElementById("taroona_bonnet_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(taroona_bonnet_hill_livepop, 500);
}
