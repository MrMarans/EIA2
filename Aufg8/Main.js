/*
Aufgabe: 6a
Name: Ron Metzger
Matrikel:  254878
Datum: 14.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Janett hatte mir zu Anfang mit der Aufgabe geholfen.
*/
var Aufg8_Main;
(function (Aufg8_Main) {
    window.addEventListener("load", init);
    var flowerN = 100;
    var flowers = [];
    var bees = [];
    var n = 10;
    var HoneybeeN = 10;
    //    let xBiene: number[] = []
    //    let yBiene: number[] = []
    var saveBG;
    window.addEventListener("click", neueBiene);
    function init(_event) {
        console.log("Hallo");
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufg8_Main.crc3 = canvas.getContext("2d");
        console.log(Aufg8_Main.crc3);
        drawHimmel(0, 0, 0, "#BCEDDD", "#9CEDEC");
        for (var j = 0; j < 20; j++) {
            var x = Math.floor((Math.random() * 400) - 100);
            var y = Math.floor((Math.random() * 150) + 0);
            var a = Math.floor((Math.random() * 25) + 17);
            var b = Math.floor((Math.random() * 25) + 15);
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
        //Nest wird warum auch immer nicht generiert, daher kommen die vorl�ufig erst einmal aus dem "Bienenhaus
        for (var i = 0; i < flowerN; i++) {
            var LF = new Aufg8_Main.flowerSettings();
            LF.randomFlowerPos();
            flowers[i] = LF;
            console.log(LF);
        }
        saveBG = Aufg8_Main.crc3.getImageData(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < n; i++) {
            var b = new Aufg8_Main.bee(150, 60);
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
        Aufg8_Main.crc3.putImageData(saveBG, 0, 0);
        console.log("Animate startet");
        Aufg8_Main.crc3.fillStyle = "#FF0000";
        //    for (let i: number = 0; i < n; i++) {
        //      let b: bee = bees[i];
        //    bees[i].update();
        for (var i = 0; i < n; i++) {
            if (i % 2 == 0) {
                var b = bees[i];
                bees[i].update();
            }
            else {
                var honeyb = Aufg8_Main.HoneyBee[i];
                Aufg8_Main.HoneyBee[i].HoneybeeUpdate();
            }
        }
        console.log(bees);
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
        window.setTimeout(animate, 20);
    }
    function drawNest(_x, _y) {
        Aufg8_Main.crc3.beginPath();
        Aufg8_Main.crc3.fillStyle = "#FF0000";
        Aufg8_Main.crc3.strokeStyle = "#76523a";
        Aufg8_Main.crc3.ellipse(_x + 100, _y + 0, 100, 100, 0 * Math.PI / 180, 0, 2 * Math.PI);
        Aufg8_Main.crc3.closePath();
    }
    function neueBiene(_event) {
        bees.push(new Aufg8_Main.bee(150, 60));
        n++;
        console.log("neueBiene");
    }
    function drawHimmel(_x, _y, _z, _strokeColor, _fillColor) {
        Aufg8_Main.crc3.beginPath();
        Aufg8_Main.crc3.fillStyle = _fillColor;
        Aufg8_Main.crc3.strokeStyle = _strokeColor;
        Aufg8_Main.crc3.ellipse(_x + 100, _y + 345, 1000, 1000, _z * Math.PI / 180, 0, 2 * Math.PI);
        Aufg8_Main.crc3.closePath();
        Aufg8_Main.crc3.fill();
        Aufg8_Main.crc3.stroke();
    }
    function drawWolke(_x, _y, _a, _b) {
        Aufg8_Main.crc3.beginPath();
        Aufg8_Main.crc3.fillStyle = "#FFFFFF";
        Aufg8_Main.crc3.strokeStyle = "#FFFFFF";
        Aufg8_Main.crc3.ellipse(_x + 100, _y + 0, _a + 0, _b + 0, 0 * Math.PI / 180, 0, 2 * Math.PI);
        Aufg8_Main.crc3.ellipse(_x + 100, _y + 0, _b + 0, _a + 0, 0 * Math.PI / 180, 0, 2 * Math.PI);
        Aufg8_Main.crc3.closePath();
        Aufg8_Main.crc3.fill();
        Aufg8_Main.crc3.stroke();
    }
    function drawBerg(_x, _y) {
        Aufg8_Main.crc3.beginPath();
        Aufg8_Main.crc3.fillStyle = "#BBBBBB";
        Aufg8_Main.crc3.strokeStyle = "#BBBBBB";
        Aufg8_Main.crc3.lineTo(_x + 70, _y - 150);
        Aufg8_Main.crc3.lineTo(_x + 140, _y + 0);
        Aufg8_Main.crc3.lineTo(_x + 0, _y + 0);
        Aufg8_Main.crc3.closePath();
        Aufg8_Main.crc3.fill();
        Aufg8_Main.crc3.stroke();
    }
    function drawBergspitze(_x, _y) {
        Aufg8_Main.crc3.beginPath();
        Aufg8_Main.crc3.fillStyle = "#EEEEEE";
        Aufg8_Main.crc3.strokeStyle = "#DDDDDD";
        Aufg8_Main.crc3.lineTo(_x + 9.3, _y - 20);
        Aufg8_Main.crc3.lineTo(_x + (9.3 * 2), _y - 0);
        Aufg8_Main.crc3.lineTo(_x + 0, _y + 0);
        Aufg8_Main.crc3.closePath();
        Aufg8_Main.crc3.fill();
        Aufg8_Main.crc3.stroke();
    }
    function drawWiese(_x, _y, _z, _strokeColor, _fillColor) {
        Aufg8_Main.crc3.beginPath();
        Aufg8_Main.crc3.fillStyle = _fillColor;
        Aufg8_Main.crc3.strokeStyle = _strokeColor;
        //        crc3.lineTo(_x + 400, _y + 0);
        //        crc3.lineTo(_x + 400, _y + 150);
        //        crc3.lineTo(_x + 0, _y + 150);
        //        crc3.lineTo(_x + 0, _y + 0);
        Aufg8_Main.crc3.ellipse(_x + 100, _y + 345, 200, 1000, _z * Math.PI / 180, 0, 2 * Math.PI);
        Aufg8_Main.crc3.closePath();
        Aufg8_Main.crc3.fill();
        Aufg8_Main.crc3.stroke();
    }
    function drawWiese2(_x, _y, _z, _strokeColor, _fillColor) {
        Aufg8_Main.crc3.beginPath();
        Aufg8_Main.crc3.fillStyle = _fillColor;
        Aufg8_Main.crc3.strokeStyle = _strokeColor;
        Aufg8_Main.crc3.ellipse(_x + 300, _y + 200, 200, 100, _z * Math.PI / 180, 0, 2 * Math.PI);
        Aufg8_Main.crc3.closePath();
        Aufg8_Main.crc3.fill();
        Aufg8_Main.crc3.stroke();
    }
    function drawWiesenschraege(_x, _y, _strokeColor, _fillColor) {
        Aufg8_Main.crc3.beginPath();
        Aufg8_Main.crc3.fillStyle = _fillColor;
        Aufg8_Main.crc3.strokeStyle = _strokeColor;
        Aufg8_Main.crc3.strokeStyle = _strokeColor;
        Aufg8_Main.crc3.lineTo(_x + 400, _y + 150);
        Aufg8_Main.crc3.closePath();
        Aufg8_Main.crc3.fill();
        Aufg8_Main.crc3.stroke();
    }
    function drawBienenHaus(_x, _y, _strokeColor, _fillColor) {
        Aufg8_Main.crc3.beginPath();
        Aufg8_Main.crc3.fillStyle = _fillColor;
        Aufg8_Main.crc3.strokeStyle = _strokeColor;
        Aufg8_Main.crc3.lineTo(_x + 200, _y + 0);
        Aufg8_Main.crc3.lineTo(_x + 200, _y + 100);
        Aufg8_Main.crc3.lineTo(_x + 0, _y + 100);
        Aufg8_Main.crc3.lineTo(_x + 0, _y + 0);
        Aufg8_Main.crc3.closePath();
        Aufg8_Main.crc3.fill();
        Aufg8_Main.crc3.stroke();
    }
    function drawDach(_x, _y, _strokeColor, _fillColor) {
        Aufg8_Main.crc3.beginPath();
        Aufg8_Main.crc3.fillStyle = _fillColor;
        Aufg8_Main.crc3.strokeStyle = _strokeColor;
        Aufg8_Main.crc3.lineTo(_x + 200, _y + 0);
        Aufg8_Main.crc3.lineTo(_x + 100, _y - 50);
        Aufg8_Main.crc3.lineTo(_x + 0, _y + 0);
        Aufg8_Main.crc3.closePath();
        Aufg8_Main.crc3.fill();
        Aufg8_Main.crc3.stroke();
    }
    function drawTuer(_x, _y, _strokeColor, _fillColor) {
        Aufg8_Main.crc3.beginPath();
        Aufg8_Main.crc3.fillStyle = _fillColor;
        Aufg8_Main.crc3.strokeStyle = _strokeColor;
        Aufg8_Main.crc3.lineTo(_x + 25, _y + 0);
        Aufg8_Main.crc3.lineTo(_x + 25, _y + 50);
        Aufg8_Main.crc3.lineTo(_x + 0, _y + 50);
        Aufg8_Main.crc3.lineTo(_x + 0, _y + 0);
        Aufg8_Main.crc3.closePath();
        Aufg8_Main.crc3.fill();
        Aufg8_Main.crc3.stroke();
    }
    function drawFenster(_x, _y, _strokeColor, _fillColor) {
        Aufg8_Main.crc3.beginPath();
        Aufg8_Main.crc3.fillStyle = _fillColor;
        Aufg8_Main.crc3.strokeStyle = _strokeColor;
        Aufg8_Main.crc3.lineTo(_x + 25, _y + 0);
        Aufg8_Main.crc3.lineTo(_x + 25, _y + 25);
        Aufg8_Main.crc3.lineTo(_x + 0, _y + 25);
        Aufg8_Main.crc3.lineTo(_x + 0, _y + 0);
        Aufg8_Main.crc3.closePath();
        Aufg8_Main.crc3.fill();
        Aufg8_Main.crc3.stroke();
    }
})(Aufg8_Main || (Aufg8_Main = {}));
//# sourceMappingURL=Main.js.map