var Abschluss;
(function (Abschluss) {
    var confetti = (function () {
        function confetti(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        confetti.prototype.update = function () {
            console.log("TestUpdate");
            this.drawConfetti();
            this.move();
        };
        confetti.prototype.move = function () {
            this.x += Math.floor(Math.random() * +100);
            this.y += Math.floor(Math.random() * +100);
        };
        confetti.prototype.drawConfetti = function () {
            Abschluss.crc2.beginPath();
            Abschluss.crc2.fillStyle = "#FF0000";
            Abschluss.crc2.strokeStyle = "#00FF00";
            Abschluss.crc2.moveTo(this.x + 100, this.y);
            Abschluss.crc2.moveTo(this.x + 100, this.y + 100);
            Abschluss.crc2.moveTo(this.x, this.y + 100);
            Abschluss.crc2.moveTo(this.x, this.y);
            Abschluss.crc2.closePath();
            Abschluss.crc2.fill();
            Abschluss.crc2.stroke();
            console.log("drawed");
        };
        return confetti;
    }());
    Abschluss.confetti = confetti;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=confetti.js.map