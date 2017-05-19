/*
Aufgabe: 6a
Name: Ron Metzger
Matrikel:  254878
Datum: 14.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Janett hatte mir zu Anfang mit der Aufgabe geholfen.
*/
var Aufg8_Hive;
(function (Aufg8_Hive) {
    var flowerSettings = (function () {
        function flowerSettings(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        flowerSettings.prototype.randomFlowerPos = function () {
            this.x = Math.floor((Math.random() * 400) + 0);
            this.y = Math.floor((Math.random() * 145) + 155);
            this.drawFlower();
        };
        flowerSettings.prototype.drawFlower = function () {
            Aufg8_Hive.crc3.beginPath();
            var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
                + Math.floor(Math.random() * 255) + ")";
            Aufg8_Hive.crc3.fillStyle = color;
            Aufg8_Hive.crc3.strokeStyle = color;
            Aufg8_Hive.crc3.ellipse(this.x + 0, this.y + 0, 4, 10, 0 * Math.PI / 180, 0, 2 * Math.PI);
            Aufg8_Hive.crc3.ellipse(this.x + 0, this.y + 0, 4, 10, 45 * Math.PI / 180, 0, 2 * Math.PI);
            Aufg8_Hive.crc3.ellipse(this.x + 0, this.y + 0, 4, 10, 90 * Math.PI / 180, 0, 2 * Math.PI);
            Aufg8_Hive.crc3.ellipse(this.x + 0, this.y + 0, 4, 10, 135 * Math.PI / 180, 0, 2 * Math.PI);
            Aufg8_Hive.crc3.closePath();
            Aufg8_Hive.crc3.fill();
            Aufg8_Hive.crc3.stroke();
            Aufg8_Hive.crc3.beginPath();
            Aufg8_Hive.crc3.fillStyle = "#FFFFFF";
            Aufg8_Hive.crc3.strokeStyle = "#FFFFFF";
            Aufg8_Hive.crc3.ellipse(this.x + 0, this.y + 0, 4, 4, 0 * Math.PI / 180, 0, 2 * Math.PI);
            Aufg8_Hive.crc3.closePath();
            Aufg8_Hive.crc3.fill();
        };
        return flowerSettings;
    }());
    Aufg8_Hive.flowerSettings = flowerSettings;
})(Aufg8_Hive || (Aufg8_Hive = {}));
//# sourceMappingURL=Blumen.js.map