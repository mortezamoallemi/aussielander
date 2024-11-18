function woodford_daguilar_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7851;
var increase = Math.round(passed*1.24264851970033e-12*population);
document.getElementById("woodford_daguilar_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(woodford_daguilar_livepop, 500);
}
