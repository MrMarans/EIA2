/*
Aufgabe: 6a
Name: Ron Metzger
Matrikel:  254878
Datum: 14.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Janett hatte mir zu Anfang mit der Aufgabe geholfen.
*/



namespace hive_Classes {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let flowerN: number = 100;
    let flowers:flowerSettings[] = [];
    let bees: bee[] = [];
   let n: number = 100;
    //    let xBiene: number[] = []
    //    let yBiene: number[] = []
    let saveBG: ImageData;

    window.addEventListener("click", neueBiene);

    function init(_event: Event): void {
        console.log("Hallo");
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawHimmel(0, 0, 0, "#BCEDDD", "#9CEDEC");



        for (let j: number = 0; j < 20; j++) {
            let x: number = Math.floor((Math.random() * 400) - 100);
            let y: number = Math.floor((Math.random() * 150) + 0);
            let a: number = Math.floor((Math.random() * 25) + 17);
            let b: number = Math.floor((Math.random() * 25) + 15);
            drawWolke(x, y, a, b);
        }


        drawBerg(200, 150);
        drawBergspitze(261, 19);
        drawBerg(320, 150);
        drawBergspitze(381, 19);
        drawWiese2(0, 0, 180, "#98F2B7", "#98F2B7");
        drawWiese(0, 0, 90, "#45F273", "#45F273");
        drawWiesenschraege(0, 150, "#00F500", "#00F500");
        drawBienenHaus(50, 50, "#8F6552", "#8F6552");
        drawDach(50, 50, "#705040", "#705040");
        drawTuer(110, 100, "#5E3B24", "#5E3B24");
        drawFenster(150, 50, "#F0F0F0", "#F0F0F0");
        drawNest(190, 150);
        //Nest wird warum auch immer nicht generiert, daher kommen die vorläufig erst einmal aus dem "Bienenhaus

        for (let i: number = 0; i < flowerN; i++) {
           let LF: flowerSettings = new flowerSettings(100,160);
            LF.randomFlowerPos();
            flowers[i] = LF;
            console.log(LF);
            
            
         
        }



        saveBG = crc2.getImageData(0, 0, canvas.width, canvas.height);




        for (let i: number = 0; i < n; i++) {
            let b: bee = new bee(150, 60);
            b.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
            + Math.floor(Math.random() * 0) + ")";
            bees[i] = b;
                       
        }

        /////Bienen, also Anfang Auf        
        //            xBiene[i] = Math.floor(Math.random() * 0) + 160;
        //            yBiene[i] = Math.floor(Math.random() * 0) + 60;

        window.setTimeout(animate, 20);
    }
    function animate() {
        crc2.putImageData(saveBG, 0, 0);
        console.log("Animate startet");
        crc2.fillStyle = "#FF0000";
       
        for (let i: number = 0; i < n; i++) {
            let b: bee = bees[i];
        bees[i].update();
           




            //            xBiene[i] += Math.floor(Math.random() * 11) - 6;
            //            yBiene[i] += Math.floor(Math.random() * 11) - 5;
            //
            //            if (xBiene[i] < 0) {
            //                xBiene[i] = 400;
            //            }
            //            if (xBiene[i] > 400) {
            //                xBiene[i] = 0;
            //            }
            //            if (yBiene[i] < 0) {
            //                yBiene[i] = 400;
            //            }
            //            if (yBiene[i] > 400) {
            //                yBiene[i] = 0;
            //            }
            //            drawBiene(xBiene[i], yBiene[i]);
        }
        window.setTimeout(animate, 20);
    }


    function drawNest(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#FF0000";
        crc2.strokeStyle = "#76523a";
        crc2.ellipse(_x + 100, _y + 0, 100, 100, 0 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();

    }


    function neueBiene(_event: Event): void {
        
        bees.push(new bee(150, 60));
        n++;
        console.log("neueBiene");
    }


  

    function drawHimmel(_x: number, _y: number, _z: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.ellipse(_x + 100, _y + 345, 1000, 1000, _z * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawWolke(_x: number, _y: number, _a: number, _b: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#FFFFFF";
        crc2.strokeStyle = "#FFFFFF";
        crc2.ellipse(_x + 100, _y + 0, _a + 0, _b + 0, 0 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.ellipse(_x + 100, _y + 0, _b + 0, _a + 0, 0 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawBerg(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#BBBBBB";
        crc2.strokeStyle = "#BBBBBB";
        crc2.lineTo(_x + 70, _y - 150);
        crc2.lineTo(_x + 140, _y + 0);
        crc2.lineTo(_x + 0, _y + 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawBergspitze(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#EEEEEE";
        crc2.strokeStyle = "#DDDDDD";
        crc2.lineTo(_x + 9.3, _y - 20);
        crc2.lineTo(_x + (9.3 * 2), _y - 0);
        crc2.lineTo(_x + 0, _y + 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

    }


    function drawWiese(_x: number, _y: number, _z: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        //        crc2.lineTo(_x + 400, _y + 0);
        //        crc2.lineTo(_x + 400, _y + 150);
        //        crc2.lineTo(_x + 0, _y + 150);
        //        crc2.lineTo(_x + 0, _y + 0);
        crc2.ellipse(_x + 100, _y + 345, 200, 1000, _z * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawWiese2(_x: number, _y: number, _z: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.ellipse(_x + 300, _y + 200, 200, 100, _z * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawWiesenschraege(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineTo(_x + 400, _y + 150);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawBienenHaus(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineTo(_x + 200, _y + 0);
        crc2.lineTo(_x + 200, _y + 100);
        crc2.lineTo(_x + 0, _y + 100);
        crc2.lineTo(_x + 0, _y + 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawDach(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineTo(_x + 200, _y + 0);
        crc2.lineTo(_x + 100, _y - 50);
        crc2.lineTo(_x + 0, _y + 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawTuer(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineTo(_x + 25, _y + 0);
        crc2.lineTo(_x + 25, _y + 50);
        crc2.lineTo(_x + 0, _y + 50);
        crc2.lineTo(_x + 0, _y + 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawFenster(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineTo(_x + 25, _y + 0);
        crc2.lineTo(_x + 25, _y + 25);
        crc2.lineTo(_x + 0, _y + 25);
        crc2.lineTo(_x + 0, _y + 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }






}