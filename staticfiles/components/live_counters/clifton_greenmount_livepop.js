function clifton_greenmount_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4894;
var increase = Math.round(passed*4.8875760613571e-13*population);
document.getElementById("clifton_greenmount_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(clifton_greenmount_livepop, 500);
}
