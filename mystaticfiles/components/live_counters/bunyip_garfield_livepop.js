function bunyip_garfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8640;
var increase = Math.round(passed*3.29164394947688e-13*population);
document.getElementById("bunyip_garfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bunyip_garfield_livepop, 500);
}
