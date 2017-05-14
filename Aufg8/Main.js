/*
Aufgabe: 6a
Name: Ron Metzger
Matrikel:  254878
Datum: 07.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L4_Classes;
(function (L4_Classes) {
    window.addEventListener("load", init);
    var flower = 100;
    L4_Classes.bees = [];
    L4_Classes.n = 100;
    //    let xBiene: number[] = []
    //    let yBiene: number[] = []
    var saveBG;
    window.addEventListener("click", neueBiene);
    function init(_event) {
        console.log("Hallo");
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        L4_Classes.crc2 = canvas.getContext("2d");
        console.log(L4_Classes.crc2);
        drawHimmel(0, 0, 0, "#BCEDDD", "#9CEDEC");
        for (var j = 0; j < 20; j++) {
            var x = Math.floor((Math.random() * 400) - 100);
            var y = Math.floor((Math.random() * 150) + 0);
            var a = Math.floor((Math.random() * 25) + 17);
            var b_1 = Math.floor((Math.random() * 25) + 15);
            drawWolke(x, y, a, b_1);
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
        for (var i = 0; i < flower; i++) {
            FlowerRandomPlace();
        }
        saveBG = L4_Classes.crc2.getImageData(0, 0, canvas.width, canvas.height);
        var b;
        b.Bienencolor();
        /////Bienen, also Anfang Auf        
        //            xBiene[i] = Math.floor(Math.random() * 0) + 160;
        //            yBiene[i] = Math.floor(Math.random() * 0) + 60;
        window.setTimeout(animate, 20);
        function animate() {
            L4_Classes.crc2.putImageData(saveBG, 0, 0);
            console.log("Animate startet");
            L4_Classes.crc2.fillStyle = "#FF0000";
            var b = new L4_Classes.bee(150, 60);
            b.Bienenanimation();
            b.overflow();
            drawBiene(b.x, b.y, b.color);
        }
        window.setTimeout(animate, 20);
    }
    function drawNest(_x, _y) {
        L4_Classes.crc2.beginPath();
        L4_Classes.crc2.fillStyle = "#FF0000";
        L4_Classes.crc2.strokeStyle = "#76523a";
        L4_Classes.crc2.ellipse(_x + 100, _y + 0, 100, 100, 0 * Math.PI / 180, 0, 2 * Math.PI);
        L4_Classes.crc2.closePath();
    }
    function neueBiene(_event) {
        NeueBienen();
    }
    function drawBiene(_x, _y, _color) {
        drawBienenBienenTS();
    }
    function drawHimmel(_x, _y, _z, _strokeColor, _fillColor) {
        L4_Classes.crc2.beginPath();
        L4_Classes.crc2.fillStyle = _fillColor;
        L4_Classes.crc2.strokeStyle = _strokeColor;
        L4_Classes.crc2.ellipse(_x + 100, _y + 345, 1000, 1000, _z * Math.PI / 180, 0, 2 * Math.PI);
        L4_Classes.crc2.closePath();
        L4_Classes.crc2.fill();
        L4_Classes.crc2.stroke();
    }
    function drawWolke(_x, _y, _a, _b) {
        L4_Classes.crc2.beginPath();
        L4_Classes.crc2.fillStyle = "#FFFFFF";
        L4_Classes.crc2.strokeStyle = "#FFFFFF";
        L4_Classes.crc2.ellipse(_x + 100, _y + 0, _a + 0, _b + 0, 0 * Math.PI / 180, 0, 2 * Math.PI);
        L4_Classes.crc2.ellipse(_x + 100, _y + 0, _b + 0, _a + 0, 0 * Math.PI / 180, 0, 2 * Math.PI);
        L4_Classes.crc2.closePath();
        L4_Classes.crc2.fill();
        L4_Classes.crc2.stroke();
    }
    function drawBerg(_x, _y) {
        L4_Classes.crc2.beginPath();
        L4_Classes.crc2.fillStyle = "#BBBBBB";
        L4_Classes.crc2.strokeStyle = "#BBBBBB";
        L4_Classes.crc2.lineTo(_x + 70, _y - 150);
        L4_Classes.crc2.lineTo(_x + 140, _y + 0);
        L4_Classes.crc2.lineTo(_x + 0, _y + 0);
        L4_Classes.crc2.closePath();
        L4_Classes.crc2.fill();
        L4_Classes.crc2.stroke();
    }
    function drawBergspitze(_x, _y) {
        L4_Classes.crc2.beginPath();
        L4_Classes.crc2.fillStyle = "#EEEEEE";
        L4_Classes.crc2.strokeStyle = "#DDDDDD";
        L4_Classes.crc2.lineTo(_x + 9.3, _y - 20);
        L4_Classes.crc2.lineTo(_x + (9.3 * 2), _y - 0);
        L4_Classes.crc2.lineTo(_x + 0, _y + 0);
        L4_Classes.crc2.closePath();
        L4_Classes.crc2.fill();
        L4_Classes.crc2.stroke();
    }
    function drawWiese(_x, _y, _z, _strokeColor, _fillColor) {
        L4_Classes.crc2.beginPath();
        L4_Classes.crc2.fillStyle = _fillColor;
        L4_Classes.crc2.strokeStyle = _strokeColor;
        //        crc2.lineTo(_x + 400, _y + 0);
        //        crc2.lineTo(_x + 400, _y + 150);
        //        crc2.lineTo(_x + 0, _y + 150);
        //        crc2.lineTo(_x + 0, _y + 0);
        L4_Classes.crc2.ellipse(_x + 100, _y + 345, 200, 1000, _z * Math.PI / 180, 0, 2 * Math.PI);
        L4_Classes.crc2.closePath();
        L4_Classes.crc2.fill();
        L4_Classes.crc2.stroke();
    }
    function drawWiese2(_x, _y, _z, _strokeColor, _fillColor) {
        L4_Classes.crc2.beginPath();
        L4_Classes.crc2.fillStyle = _fillColor;
        L4_Classes.crc2.strokeStyle = _strokeColor;
        L4_Classes.crc2.ellipse(_x + 300, _y + 200, 200, 100, _z * Math.PI / 180, 0, 2 * Math.PI);
        L4_Classes.crc2.closePath();
        L4_Classes.crc2.fill();
        L4_Classes.crc2.stroke();
    }
    function drawWiesenschraege(_x, _y, _strokeColor, _fillColor) {
        L4_Classes.crc2.beginPath();
        L4_Classes.crc2.fillStyle = _fillColor;
        L4_Classes.crc2.strokeStyle = _strokeColor;
        L4_Classes.crc2.strokeStyle = _strokeColor;
        L4_Classes.crc2.lineTo(_x + 400, _y + 150);
        L4_Classes.crc2.closePath();
        L4_Classes.crc2.fill();
        L4_Classes.crc2.stroke();
    }
    function drawBienenHaus(_x, _y, _strokeColor, _fillColor) {
        L4_Classes.crc2.beginPath();
        L4_Classes.crc2.fillStyle = _fillColor;
        L4_Classes.crc2.strokeStyle = _strokeColor;
        L4_Classes.crc2.lineTo(_x + 200, _y + 0);
        L4_Classes.crc2.lineTo(_x + 200, _y + 100);
        L4_Classes.crc2.lineTo(_x + 0, _y + 100);
        L4_Classes.crc2.lineTo(_x + 0, _y + 0);
        L4_Classes.crc2.closePath();
        L4_Classes.crc2.fill();
        L4_Classes.crc2.stroke();
    }
    function drawDach(_x, _y, _strokeColor, _fillColor) {
        L4_Classes.crc2.beginPath();
        L4_Classes.crc2.fillStyle = _fillColor;
        L4_Classes.crc2.strokeStyle = _strokeColor;
        L4_Classes.crc2.lineTo(_x + 200, _y + 0);
        L4_Classes.crc2.lineTo(_x + 100, _y - 50);
        L4_Classes.crc2.lineTo(_x + 0, _y + 0);
        L4_Classes.crc2.closePath();
        L4_Classes.crc2.fill();
        L4_Classes.crc2.stroke();
    }
    function drawTuer(_x, _y, _strokeColor, _fillColor) {
        L4_Classes.crc2.beginPath();
        L4_Classes.crc2.fillStyle = _fillColor;
        L4_Classes.crc2.strokeStyle = _strokeColor;
        L4_Classes.crc2.lineTo(_x + 25, _y + 0);
        L4_Classes.crc2.lineTo(_x + 25, _y + 50);
        L4_Classes.crc2.lineTo(_x + 0, _y + 50);
        L4_Classes.crc2.lineTo(_x + 0, _y + 0);
        L4_Classes.crc2.closePath();
        L4_Classes.crc2.fill();
        L4_Classes.crc2.stroke();
    }
    function drawFenster(_x, _y, _strokeColor, _fillColor) {
        L4_Classes.crc2.beginPath();
        L4_Classes.crc2.fillStyle = _fillColor;
        L4_Classes.crc2.strokeStyle = _strokeColor;
        L4_Classes.crc2.lineTo(_x + 25, _y + 0);
        L4_Classes.crc2.lineTo(_x + 25, _y + 25);
        L4_Classes.crc2.lineTo(_x + 0, _y + 25);
        L4_Classes.crc2.lineTo(_x + 0, _y + 0);
        L4_Classes.crc2.closePath();
        L4_Classes.crc2.fill();
        L4_Classes.crc2.stroke();
    }
    function drawBlume(_x, _y) {
        drawFlower();
    }
})(L4_Classes || (L4_Classes = {}));
//# sourceMappingURL=Main.js.map