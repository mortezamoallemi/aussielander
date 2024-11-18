function vermont_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11680;
var increase = Math.round(passed*1.44434961351413e-13*population);
document.getElementById("vermont_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(vermont_south_livepop, 500);
}
