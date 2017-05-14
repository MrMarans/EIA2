/*
Aufgabe: 6a
Name: Ron Metzger
Matrikel:  254878
Datum: 14.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Janett hatte mir zu Anfang mit der Aufgabe geholfen.
*/
var hive_Classes;
(function (hive_Classes) {
    window.addEventListener("load", init);
    var flowerN = 100;
    var flowers = [];
    var bees = [];
    var n = 100;
    //    let xBiene: number[] = []
    //    let yBiene: number[] = []
    var saveBG;
    window.addEventListener("click", neueBiene);
    function init(_event) {
        console.log("Hallo");
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        hive_Classes.crc2 = canvas.getContext("2d");
        console.log(hive_Classes.crc2);
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
            var LF = new hive_Classes.flowerSettings();
            LF.randomFlowerPos();
            flowers[i] = LF;
            console.log(LF);
        }
        saveBG = hive_Classes.crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < n; i++) {
            var b = new hive_Classes.bee(150, 60);
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
        hive_Classes.crc2.putImageData(saveBG, 0, 0);
        console.log("Animate startet");
        hive_Classes.crc2.fillStyle = "#FF0000";
        for (var i = 0; i < n; i++) {
            var b = bees[i];
            bees[i].update();
        }
        window.setTimeout(animate, 20);
    }
    function drawNest(_x, _y) {
        hive_Classes.crc2.beginPath();
        hive_Classes.crc2.fillStyle = "#FF0000";
        hive_Classes.crc2.strokeStyle = "#76523a";
        hive_Classes.crc2.ellipse(_x + 100, _y + 0, 100, 100, 0 * Math.PI / 180, 0, 2 * Math.PI);
        hive_Classes.crc2.closePath();
    }
    function neueBiene(_event) {
        bees.push(new hive_Classes.bee(150, 60));
        n++;
        console.log("neueBiene");
    }
    function drawHimmel(_x, _y, _z, _strokeColor, _fillColor) {
        hive_Classes.crc2.beginPath();
        hive_Classes.crc2.fillStyle = _fillColor;
        hive_Classes.crc2.strokeStyle = _strokeColor;
        hive_Classes.crc2.ellipse(_x + 100, _y + 345, 1000, 1000, _z * Math.PI / 180, 0, 2 * Math.PI);
        hive_Classes.crc2.closePath();
        hive_Classes.crc2.fill();
        hive_Classes.crc2.stroke();
    }
    function drawWolke(_x, _y, _a, _b) {
        hive_Classes.crc2.beginPath();
        hive_Classes.crc2.fillStyle = "#FFFFFF";
        hive_Classes.crc2.strokeStyle = "#FFFFFF";
        hive_Classes.crc2.ellipse(_x + 100, _y + 0, _a + 0, _b + 0, 0 * Math.PI / 180, 0, 2 * Math.PI);
        hive_Classes.crc2.ellipse(_x + 100, _y + 0, _b + 0, _a + 0, 0 * Math.PI / 180, 0, 2 * Math.PI);
        hive_Classes.crc2.closePath();
        hive_Classes.crc2.fill();
        hive_Classes.crc2.stroke();
    }
    function drawBerg(_x, _y) {
        hive_Classes.crc2.beginPath();
        hive_Classes.crc2.fillStyle = "#BBBBBB";
        hive_Classes.crc2.strokeStyle = "#BBBBBB";
        hive_Classes.crc2.lineTo(_x + 70, _y - 150);
        hive_Classes.crc2.lineTo(_x + 140, _y + 0);
        hive_Classes.crc2.lineTo(_x + 0, _y + 0);
        hive_Classes.crc2.closePath();
        hive_Classes.crc2.fill();
        hive_Classes.crc2.stroke();
    }
    function drawBergspitze(_x, _y) {
        hive_Classes.crc2.beginPath();
        hive_Classes.crc2.fillStyle = "#EEEEEE";
        hive_Classes.crc2.strokeStyle = "#DDDDDD";
        hive_Classes.crc2.lineTo(_x + 9.3, _y - 20);
        hive_Classes.crc2.lineTo(_x + (9.3 * 2), _y - 0);
        hive_Classes.crc2.lineTo(_x + 0, _y + 0);
        hive_Classes.crc2.closePath();
        hive_Classes.crc2.fill();
        hive_Classes.crc2.stroke();
    }
    function drawWiese(_x, _y, _z, _strokeColor, _fillColor) {
        hive_Classes.crc2.beginPath();
        hive_Classes.crc2.fillStyle = _fillColor;
        hive_Classes.crc2.strokeStyle = _strokeColor;
        //        crc2.lineTo(_x + 400, _y + 0);
        //        crc2.lineTo(_x + 400, _y + 150);
        //        crc2.lineTo(_x + 0, _y + 150);
        //        crc2.lineTo(_x + 0, _y + 0);
        hive_Classes.crc2.ellipse(_x + 100, _y + 345, 200, 1000, _z * Math.PI / 180, 0, 2 * Math.PI);
        hive_Classes.crc2.closePath();
        hive_Classes.crc2.fill();
        hive_Classes.crc2.stroke();
    }
    function drawWiese2(_x, _y, _z, _strokeColor, _fillColor) {
        hive_Classes.crc2.beginPath();
        hive_Classes.crc2.fillStyle = _fillColor;
        hive_Classes.crc2.strokeStyle = _strokeColor;
        hive_Classes.crc2.ellipse(_x + 300, _y + 200, 200, 100, _z * Math.PI / 180, 0, 2 * Math.PI);
        hive_Classes.crc2.closePath();
        hive_Classes.crc2.fill();
        hive_Classes.crc2.stroke();
    }
    function drawWiesenschraege(_x, _y, _strokeColor, _fillColor) {
        hive_Classes.crc2.beginPath();
        hive_Classes.crc2.fillStyle = _fillColor;
        hive_Classes.crc2.strokeStyle = _strokeColor;
        hive_Classes.crc2.strokeStyle = _strokeColor;
        hive_Classes.crc2.lineTo(_x + 400, _y + 150);
        hive_Classes.crc2.closePath();
        hive_Classes.crc2.fill();
        hive_Classes.crc2.stroke();
    }
    function drawBienenHaus(_x, _y, _strokeColor, _fillColor) {
        hive_Classes.crc2.beginPath();
        hive_Classes.crc2.fillStyle = _fillColor;
        hive_Classes.crc2.strokeStyle = _strokeColor;
        hive_Classes.crc2.lineTo(_x + 200, _y + 0);
        hive_Classes.crc2.lineTo(_x + 200, _y + 100);
        hive_Classes.crc2.lineTo(_x + 0, _y + 100);
        hive_Classes.crc2.lineTo(_x + 0, _y + 0);
        hive_Classes.crc2.closePath();
        hive_Classes.crc2.fill();
        hive_Classes.crc2.stroke();
    }
    function drawDach(_x, _y, _strokeColor, _fillColor) {
        hive_Classes.crc2.beginPath();
        hive_Classes.crc2.fillStyle = _fillColor;
        hive_Classes.crc2.strokeStyle = _strokeColor;
        hive_Classes.crc2.lineTo(_x + 200, _y + 0);
        hive_Classes.crc2.lineTo(_x + 100, _y - 50);
        hive_Classes.crc2.lineTo(_x + 0, _y + 0);
        hive_Classes.crc2.closePath();
        hive_Classes.crc2.fill();
        hive_Classes.crc2.stroke();
    }
    function drawTuer(_x, _y, _strokeColor, _fillColor) {
        hive_Classes.crc2.beginPath();
        hive_Classes.crc2.fillStyle = _fillColor;
        hive_Classes.crc2.strokeStyle = _strokeColor;
        hive_Classes.crc2.lineTo(_x + 25, _y + 0);
        hive_Classes.crc2.lineTo(_x + 25, _y + 50);
        hive_Classes.crc2.lineTo(_x + 0, _y + 50);
        hive_Classes.crc2.lineTo(_x + 0, _y + 0);
        hive_Classes.crc2.closePath();
        hive_Classes.crc2.fill();
        hive_Classes.crc2.stroke();
    }
    function drawFenster(_x, _y, _strokeColor, _fillColor) {
        hive_Classes.crc2.beginPath();
        hive_Classes.crc2.fillStyle = _fillColor;
        hive_Classes.crc2.strokeStyle = _strokeColor;
        hive_Classes.crc2.lineTo(_x + 25, _y + 0);
        hive_Classes.crc2.lineTo(_x + 25, _y + 25);
        hive_Classes.crc2.lineTo(_x + 0, _y + 25);
        hive_Classes.crc2.lineTo(_x + 0, _y + 0);
        hive_Classes.crc2.closePath();
        hive_Classes.crc2.fill();
        hive_Classes.crc2.stroke();
    }
})(hive_Classes || (hive_Classes = {}));
//# sourceMappingURL=Main.js.map