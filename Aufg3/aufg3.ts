document.addEventListener('DOMContentLoaded', function() {

    let Brett: number = 63;
    let Korn: number = 1;
    let SpaltenKastenzahl: number = 8;
    function Schachbrett(): void {
        
        for (let Spalte: number = 0; Spalte < SpaltenKastenzahl; Spalte++) {
            if (Spalte % 2 == 0) {
                
                
                for (let Feld: number = 0; Feld < SpaltenKastenzahl; Feld++) {
                    if (Feld % 2 == 0) {
                        let elem: HTMLDivElement = document.createElement("div");
                        console.log("erstes IF schwarz");
                        elem.className = "schwarz";

                    }
                    else {
                        let elem: HTMLDivElement = document.createElement("div");
                           console.log("erstes IF weis");
                        elem.className = "weis";
                    }
                }
            }
            
            
            else {
                for (let Feld: number = 0; Feld < SpaltenKastenzahl; Feld++) {

                    if (Feld % 2 == 0) {
                        let elem: HTMLDivElement = document.createElement("div");
                        elem.className = "schwarz";
                           console.log("zweites IF schwarz");

                    }
                    else {
                        let elem: HTMLDivElement = document.createElement("div");
                         console.log("zweites IF weis");
                        elem.className = "weis";
                    }
                }
            }
        }
    }

    document.getElementById("Gruppe").addEventListener("click", function() {
        Schachbrett();
    })
})