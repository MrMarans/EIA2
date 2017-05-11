/*
Aufgabe: 6a
Name: Ron Metzger
Matrikel:  254878
Datum: 07.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L4_Canvas;
(function (L4_Canvas) {
    window.addEventListener("load", init);
    var crc2;
    var flower = 100;
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
        crc2 = canvas.getContext("2d");
        console.log(crc2);
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
        for (var i = 0; i < flower; i++) {
            var x = Math.floor((Math.random() * 400) + 0);
            var y = Math.floor((Math.random() * 145) + 155);
            drawBlume(x, y);
        }
        saveBG = crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < n; i++) {
            var b = { x: 150, y: 60, leftpush: 0, rightpush: 0, color: " ", gelehmt: false };
            bees[i] = b;
            b.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
                + Math.floor(Math.random() * 0) + ")";
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
        var b = { x: 150, y: 60, leftpush: 0, rightpush: 0, color: "", gelehmt: false };
        for (var i = 0; i < n; i++) {
            var b_1 = bees[i];
            if (b_1.leftpush % 20 == 1) {
                b_1.x -= 5;
                b_1.rightpush++;
                if (b_1.leftpush % 100 == 1) {
                    b_1.gelehmt = true;
                    console.log("gelehmt");
                }
                else { }
            }
            else { }
            if (b_1.rightpush % 5 == 1) {
                b_1.x += 10;
            }
            else {
                b_1.x += Math.floor(Math.random() * 11) - 6;
                b_1.y += Math.floor(Math.random() * 11) - 5;
                b_1.leftpush++;
            }
            if (b_1.x < 0) {
                b_1.x = 400;
            }
            if (b_1.x > 400) {
                b_1.x = 0;
            }
            if (b_1.y < 0) {
                b_1.y = 400;
            }
            if (b_1.y > 400) {
                b_1.y = 0;
            }
            drawBiene(b_1.x, b_1.y, b_1.color);
        }
        window.setTimeout(animate, 20);
    }
    function drawNest(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#FF0000";
        crc2.strokeStyle = "#76523a";
        crc2.ellipse(_x + 100, _y + 0, 100, 100, 0 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
    }
    function neueBiene(_event) {
        var b = { x: 150, y: 150, leftpush: 0, rightpush: 0, color: "", gelehmt: false };
        bees.push(b);
        b.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
            + Math.floor(Math.random() * 0) + ")";
        n++;
        console.log("neueBiene");
    }
    function drawBiene(_x, _y, _color) {
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.lineTo(_x - 1, _y + 0);
        crc2.lineTo(_x - 1, _y + 1);
        crc2.lineTo(_x + 0, _y + 1);
        crc2.lineTo(_x + 0, _y - 2);
        crc2.lineTo(_x - 1, _y - 2);
        crc2.lineTo(_x - 1, _y - 1);
        crc2.lineTo(_x - 2, _y + 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _color;
        crc2.lineTo(_x + 4, _y + 0);
        crc2.lineTo(_x + 4, _y - 1);
        crc2.lineTo(_x + 5, _y - 1);
        crc2.lineTo(_x + 5, _y - 2);
        crc2.lineTo(_x + 4, _y - 2);
        crc2.lineTo(_x + 4, _y - 3);
        crc2.lineTo(_x + 0, _y - 3);
        crc2.lineTo(_x + 0, _y + 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawHimmel(_x, _y, _z, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.ellipse(_x + 100, _y + 345, 1000, 1000, _z * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawWolke(_x, _y, _a, _b) {
        crc2.beginPath();
        crc2.fillStyle = "#FFFFFF";
        crc2.strokeStyle = "#FFFFFF";
        crc2.ellipse(_x + 100, _y + 0, _a + 0, _b + 0, 0 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.ellipse(_x + 100, _y + 0, _b + 0, _a + 0, 0 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawBerg(_x, _y) {
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
    function drawBergspitze(_x, _y) {
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
    function drawWiese(_x, _y, _z, _strokeColor, _fillColor) {
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
    function drawWiese2(_x, _y, _z, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.ellipse(_x + 300, _y + 200, 200, 100, _z * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawWiesenschraege(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineTo(_x + 400, _y + 150);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawBienenHaus(_x, _y, _strokeColor, _fillColor) {
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
    function drawDach(_x, _y, _strokeColor, _fillColor) {
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
    function drawTuer(_x, _y, _strokeColor, _fillColor) {
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
    function drawFenster(_x, _y, _strokeColor, _fillColor) {
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
    function drawBlume(_x, _y) {
        crc2.beginPath();
        var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
            + Math.floor(Math.random() * 255) + ")";
        crc2.fillStyle = color;
        crc2.strokeStyle = color;
        crc2.ellipse(_x + 0, _y + 0, 4, 10, 0 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.ellipse(_x + 0, _y + 0, 4, 10, 45 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.ellipse(_x + 0, _y + 0, 4, 10, 90 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.ellipse(_x + 0, _y + 0, 4, 10, 135 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = "#FFFFFF";
        crc2.strokeStyle = "#FFFFFF";
        crc2.ellipse(_x + 0, _y + 0, 4, 4, 0 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
})(L4_Canvas || (L4_Canvas = {}));
//# sourceMappingURL=ts.js.map