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
            this.y += Math.random() * (30);
            this.x += (Math.random() * (22) - -22) + (Math.random() * (-22) - 22);
            if (this.y > 900) {
                this.teleport = Math.random() * (5);
                if (this.teleport < 3) {
                    this.y = 10;
                    console.log("teleport");
                }
                else {
                    Abschluss.confettis.splice(0, Math.random() * (2));
                    console.log("deleted");
                }
            }
        };
        confetti.prototype.drawConfetti = function () {
            Abschluss.crc2.beginPath();
            Abschluss.crc2.lineTo(this.x + 10, this.y);
            Abschluss.crc2.lineTo(this.x + 10, this.y + 10);
            Abschluss.crc2.lineTo(this.x, this.y + 10);
            Abschluss.crc2.lineTo(this.x, this.y);
            Abschluss.crc2.closePath();
            Abschluss.crc2.fillStyle = this.color;
            Abschluss.crc2.fill();
            Abschluss.crc2.stroke();
            console.log("drawed");
        };
        return confetti;
    }());
    Abschluss.confetti = confetti;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=confetti.js.map