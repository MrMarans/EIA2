var Abschluss;
(function (Abschluss) {
    var confetti = (function () {
        function confetti(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        confetti.prototype.update = function () {
            this.drawConfetti();
            this.move();
        };
        confetti.prototype.move = function () {
            this.y += 1;
        };
        confetti.prototype.drawConfetti = function () {
            Abschluss.crc2.beginPath();
            Abschluss.crc2.fillStyle = "#FF0000";
            Abschluss.crc2.strokeStyle = "#00FF00";
            Abschluss.crc2.moveTo(this.x + 1, this.y);
            Abschluss.crc2.moveTo(this.x + 1, this.y + 1);
            Abschluss.crc2.moveTo(this.x, this.y + 1);
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