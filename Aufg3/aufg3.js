document.addEventListener('DOMContentLoaded', function () {
    var Brett = 63;
    var Korn = 1;
    var SpaltenKastenzahl = 8;
    function Schachbrett() {
        for (var Spalte = 0; Spalte < SpaltenKastenzahl; Spalte++) {
            if (Spalte % 2 == 0) {
                for (var Feld = 0; Feld < SpaltenKastenzahl; Feld++) {
                    if (Feld % 2 == 0) {
                        var elem = document.createElement("div");
                        console.log("erstes IF schwarz");
                        elem.className = "schwarz";
                    }
                    else {
                        var elem = document.createElement("div");
                        console.log("erstes IF weis");
                        elem.className = "weis";
                    }
                }
            }
            else {
                for (var Feld = 0; Feld < SpaltenKastenzahl; Feld++) {
                    if (Feld % 2 == 0) {
                        var elem = document.createElement("div");
                        elem.className = "schwarz";
                        console.log("zweites IF schwarz");
                    }
                    else {
                        var elem = document.createElement("div");
                        console.log("zweites IF weis");
                        elem.className = "weis";
                    }
                }
            }
        }
    }
    document.getElementById("Gruppe").addEventListener("click", function () {
        Schachbrett();
    });
});
//# sourceMappingURL=aufg3.js.map