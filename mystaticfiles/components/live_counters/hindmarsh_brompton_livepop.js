function hindmarsh_brompton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17624;
var increase = Math.round(passed*3.67790371715114e-13*population);
document.getElementById("hindmarsh_brompton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hindmarsh_brompton_livepop, 500);
}
