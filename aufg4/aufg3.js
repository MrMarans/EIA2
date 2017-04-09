document.addEventListener('DOMContentLoaded', function () {
    var Brett = 63;
    var Korn = 1;
    var SpaltenKastenzahl = 8;
    var Zahl = 1;
    function Schachbrett() {
        var Brett = document.getElementsByClassName("Brett")[0];
        for (var Spalte = 0; Spalte < SpaltenKastenzahl; Spalte++) {
            if (Spalte % 2 == 0) {
                for (var Feld = 0; Feld < SpaltenKastenzahl; Feld++) {
                    if (Feld % 2 == 0) {
                        var elem = document.createElement('div');
                        console.log("erstes IF schwarz");
                        Brett.appendChild(elem);
                        elem.className = "schwarz";
                        elem.textContent = (Korn + "");
                        Korn = Korn * 2;
                    }
                    else {
                        var elem = document.createElement('div');
                        console.log("erstes IF weis");
                        Brett.appendChild(elem);
                        elem.className = "weis";
                        elem.textContent = (Korn + "");
                        Korn = Korn * 2;
                    }
                }
            }
            else {
                for (var Feld = 0; Feld < SpaltenKastenzahl; Feld++) {
                    if (Feld % 2 == 0) {
                        var elem = document.createElement('div');
                        Brett.appendChild(elem);
                        elem.className = "weis";
                        elem.textContent = (Korn + "");
                        Korn = Korn * 2;
                        console.log("zweites IF schwarz");
                    }
                    else {
                        var elem = document.createElement('div');
                        console.log("zweites IF weis");
                        Brett.appendChild(elem);
                        elem.className = "schwarz";
                        elem.textContent = (Korn + "");
                        Korn = Korn * 2;
                    }
                }
            }
        }
        console.log("Ende");
    }
    Schachbrett();
});
//# sourceMappingURL=aufg3.js.map