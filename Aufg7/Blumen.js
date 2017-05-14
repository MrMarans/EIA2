var hive_Classes;
(function (hive_Classes) {
    var flowerSettings = (function () {
        function flowerSettings(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        flowerSettings.prototype.randomFlowerPos = function () {
            var x = Math.floor((Math.random() * 400) + 0);
            var y = Math.floor((Math.random() * 145) + 155);
            this.drawFlower();
        };
        flowerSettings.prototype.drawFlower = function () {
            hive_Classes.crc2.beginPath();
            var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
                + Math.floor(Math.random() * 255) + ")";
            hive_Classes.crc2.fillStyle = color;
            hive_Classes.crc2.strokeStyle = color;
            hive_Classes.crc2.ellipse(this.x + 0, this.y + 0, 4, 10, 0 * Math.PI / 180, 0, 2 * Math.PI);
            hive_Classes.crc2.ellipse(this.x + 0, this.y + 0, 4, 10, 45 * Math.PI / 180, 0, 2 * Math.PI);
            hive_Classes.crc2.ellipse(this.x + 0, this.y + 0, 4, 10, 90 * Math.PI / 180, 0, 2 * Math.PI);
            hive_Classes.crc2.ellipse(this.x + 0, this.y + 0, 4, 10, 135 * Math.PI / 180, 0, 2 * Math.PI);
            hive_Classes.crc2.closePath();
            hive_Classes.crc2.fill();
            hive_Classes.crc2.stroke();
            hive_Classes.crc2.beginPath();
            hive_Classes.crc2.fillStyle = "#FFFFFF";
            hive_Classes.crc2.strokeStyle = "#FFFFFF";
            hive_Classes.crc2.ellipse(this.x + 0, this.y + 0, 4, 4, 0 * Math.PI / 180, 0, 2 * Math.PI);
            hive_Classes.crc2.closePath();
            hive_Classes.crc2.fill();
        };
        return flowerSettings;
    }());
    hive_Classes.flowerSettings = flowerSettings;
})(hive_Classes || (hive_Classes = {}));
//# sourceMappingURL=Blumen.js.map