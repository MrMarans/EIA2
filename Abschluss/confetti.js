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
            this.x += Math.floor(Math.random() * 11) - 5;
            this.y += Math.floor(Math.random() * 11) - 6;
            if (this.y > 893)
                this.color = "rgba(0, 0, 0, 0)";
        };
        confetti.prototype.drawConfetti = function () {
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(this.x + 10, this.y);
            Abschluss.crc2.moveTo(this.x + 10, this.y + 10);
            Abschluss.crc2.moveTo(this.x, this.y + 10);
            Abschluss.crc2.moveTo(this.x, this.y);
            Abschluss.crc2.closePath();
            Abschluss.crc2.fillStyle = this.color;
            Abschluss.crc2.fill();
        };
        return confetti;
    }());
    Abschluss.confetti = confetti;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=confetti.js.map