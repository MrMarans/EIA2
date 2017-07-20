/*
Aufgabe: Abschlussaufgabe
Name: Ron Metzger
Matrikel:  254878
Datum: 21.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Abschluss {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let saveBG: ImageData;



    function init(_event: Event): void {
        let ToothOut: number = 0;
        let confettiN: number = Math.random() * (500 - 100) + 100;
        console.log(confettiN + " Konfettis berechnet");
        let confettis: confetti[] = [];
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);
        saveBG = crc2.getImageData(0, 0, canvas.width, canvas.height);
        drawFace();
        alert("Oh nein, der kleine Timmy verliert einen Zahn! Er hat den Zahn schon an die Tür geschnürrt, er traut sich aber nicht, sie zuzuschlagen. Kannst du das für ihn Übernehmen?");




        document.getElementById("DoorHitBox").addEventListener("click", function() {
            crc2.putImageData(saveBG, 0, 0);
            drawGoneTeeth();
            ToothOut++;
            for (let i: number = 0; i < confettiN; i++) {
                let color: string = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
                    + Math.floor(Math.random() * 0) + ")";
                let x: number = 5;
                let y: number = Math.random() * (893 - 0) + 0;
                let c: confetti = new confetti(x, y, color);
                confettis.push(c)
            }

            window.setTimeout(animate, 20);
            function animate() {
                crc2.putImageData(saveBG, 0, 0);
                console.log("Animate startet");


                for (let i: number = 0; i < confettis.length; i++) { // Zufällige Bewegung der Konfetti
                    let c: confetti = confettis[i];
                    c.update();
                }
                window.setTimeout(animate, 20);
            }


        });
        console.log(confettis);

    }

}


