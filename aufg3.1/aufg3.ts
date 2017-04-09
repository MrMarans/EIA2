document.addEventListener('DOMContentLoaded', function() {

    let Brett: number = 63;
    let Korn: number = 1;
    let SpaltenKastenzahl: number = 8;
    let Zahl: number=1;
    function Schachbrett(): void {
        
        let Brett = document.getElementsByClassName("Brett")[0];
        for (let Spalte: number = 0; Spalte < SpaltenKastenzahl; Spalte++) {
            if (Spalte % 2 == 0) {             
                for (let Feld: number = 0; Feld < SpaltenKastenzahl; Feld++) {
                    if (Feld % 2 == 0) {
                        let elem: HTMLDivElement = document.createElement('div');
                        console.log("erstes IF schwarz");
                        Brett.appendChild(elem);
                        elem.className = "schwarz";
                         elem.textContent=(Korn+"");
                        Korn=Korn*2;
                    }
                    else {
                        let elem: HTMLDivElement = document.createElement('div');
                           console.log("erstes IF weis");
                         Brett.appendChild(elem);
                        elem.className = "weis";
                        elem.textContent=(Korn+"");
                        Korn=Korn*2;
                    }
                }
            }
            
            
            else {
                for (let Feld: number = 0; Feld < SpaltenKastenzahl; Feld++) {

                    if (Feld % 2 == 0) {
                        let elem: HTMLDivElement = document.createElement('div');
                        Brett.appendChild(elem);
                        elem.className = "weis";
                       elem.textContent=(Korn+"");
                        Korn=Korn*2;
                        
                           console.log("zweites IF schwarz");

                    }
                    else {
                        let elem: HTMLDivElement = document.createElement('div');
                         console.log("zweites IF weis");
                         Brett.appendChild(elem);
                        elem.className = "schwarz";
                        elem.textContent=(Korn+"");
                       Korn=Korn*2;
                    }
                }
            }
        }
        
    console.log("Ende");
        
    } 
        Schachbrett();
})